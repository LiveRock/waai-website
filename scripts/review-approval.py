#!/usr/bin/env python3
"""
waai blog review-approval daemon (cron on the waai.me box).

Flow:
  1. Poll open PRs labeled `automated-blog` in LiveRock/waai-website.
  2. For each unseen PR: fetch the generated markdown from the PR branch and
     email it to REVIEWER (Peter) from blog-review@waai.me (local sendmail).
  3. Scan the blog-review Maildir for replies from REVIEWER. A reply whose
     subject references "PR #N":
       YES/publish/approve/merge  -> gh pr merge N  (deploy.yml publishes)
       NO/reject/decline          -> gh pr close N
     Only the unquoted part of the reply is scanned; only PRs this script
     notified about are actionable (anti-spoof).

State:  ~/.local/state/waai-blog-review/state.json  (msgids + per-PR status)
Run:    every 10 min via /etc/cron.d/waai-blog-review (root, for Maildir read)
"""

import json
import os
import re
import subprocess
import sys
from email import policy
from email.parser import BytesParser
from email.utils import parseaddr
from pathlib import Path

REPO = "LiveRock/waai-website"
LABEL = "automated-blog"
REVIEWER = "peter@hotsource.net"
# Outbound goes through the box's SMTP2GO relay, which only has hsi.asia as a
# verified sender domain — From must be @hsi.asia or the relay 550s at DATA time
# (tested 2026-08-28: waai.me still 550s as "sender domain not verified" despite
# an attempted verification — check Sending > Verified Senders on the account the
# box relays through before swapping this). NOTE: the 550 bounces AFTER sendmail
# returns 0, so an unverified From fails SILENTLY — the review email never arrives
# and the script doesn't notice.
# Replies are routed to the blog-review@waai.me mailbox via Reply-To (this works —
# Peter's replies do land, sometimes delayed ~1h by his provider).
SENDER = "noreply@hsi.asia"
MAILBOX = "blog-review@waai.me"
MAILDIR = Path("/home/waai/homes/blog-review/Maildir")
STATE_FILE = Path(os.path.expanduser("~/.local/state/waai-blog-review/state.json"))
GH_ENV = {**os.environ, "GH_CONFIG_DIR": "/home/ubuntu/.config/gh", "HOME": "/home/ubuntu"}

YES_RE = re.compile(r"\b(yes|yeah|yep|publish|approved|approve|merge|lgtm|ship\s+it|go\s+ahead|ok)\b", re.I)
NO_RE = re.compile(r"\b(no|reject|declined|decline|don'?t publish|do\s+not\s+publish|veto)\b", re.I)
PR_RE = re.compile(r"PR\s*#?(\d+)", re.I)
# Quote markers — everything from the first one on is the quoted original post.
QUOTE_RE = re.compile(r"^(>.*|On .+ wrote:|-{3,}\s*original message|-{3,}\s*forwarded message|_{3,}.*|wrote:$)", re.I | re.M)


def log(msg: str) -> None:
    from datetime import datetime
    print(f"{datetime.now():%Y-%m-%d %H:%M:%S} {msg}", flush=True)


def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {"prs": {}, "seen_msgids": []}


def save_state(state: dict) -> None:
    STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = STATE_FILE.with_suffix(".tmp")
    tmp.write_text(json.dumps(state, indent=2))
    tmp.replace(STATE_FILE)


def gh(*args, check=True):
    cmd = ["gh", *args] if args and args[0] == "api" else ["gh", *args, "--repo", REPO]
    r = subprocess.run(cmd, env=GH_ENV, capture_output=True, text=True)
    if check and r.returncode != 0:
        raise RuntimeError(f"gh {' '.join(args)} failed: {r.stderr.strip()}")
    return r.stdout.strip()


def load_mail(path: Path):
    msg = BytesParser(policy=policy.default).parsebytes(path.read_bytes())
    body_part = msg.get_body(preferencelist=("plain",))
    body = body_part.get_content() if body_part else ""
    return msg, body


def send_mail(subject: str, body: str) -> None:
    # Build a proper MIME message (RFC2047 headers + quoted-printable body) so the
    # wire bytes are pure ASCII — the SMTP2GO relay rejects SMTPUTF8, and raw UTF-8
    # piped into sendmail triggers exactly that bounce.
    from email.message import EmailMessage
    import subprocess as sp
    msg = EmailMessage()
    msg["From"] = f"waai Blog Review <{SENDER}>"
    msg["Reply-To"] = MAILBOX
    msg["To"] = REVIEWER
    msg["Subject"] = subject
    msg.set_content(body)
    r = sp.run(["/usr/sbin/sendmail", "-t", "-i"], input=msg.as_bytes(), capture_output=True, env=GH_ENV)
    if r.returncode != 0:
        raise RuntimeError(f"sendmail failed: {r.stderr.decode(errors='replace')}")


# ---------- step 1+2: notify about new automated-blog PRs ----------

def notify_new_prs(state: dict, dry: bool) -> None:
    out = gh("pr", "list", "--label", LABEL, "--state", "open", "--json", "number,title,headRefName")
    for pr in json.loads(out):
        num = str(pr["number"])
        if state["prs"].get(num, {}).get("notified"):
            continue
        md = fetch_post_markdown(pr["headRefName"])
        subject = f"[waai blog] PR #{num}: {pr['title']} — reply YES to publish"
        body = (
            "Hi Peter,\n\n"
            "A new waai blog post draft is ready for your review.\n\n"
            f"  PR:     #{num} — {pr['title']}\n"
            f"  Edit:   https://github.com/{REPO}/pull/{num}/files\n"
            f"  Review: https://github.com/{REPO}/pull/{num}\n\n"
            "REPLY TO THIS EMAIL with:\n"
            "  YES  → publish (merges the PR; deploy.yml puts it live on waai.me)\n"
            "  NO   → reject (closes the PR, nothing is published)\n\n"
            "You can also edit the draft directly in the PR, then reply YES.\n"
            "(Replies are checked every 10 minutes; only this address is honoured.)\n\n"
            f"---------------- POST DRAFT ----------------\n\n{md}\n"
        )
        if dry:
            log(f"[dry] would email PR #{num}: {pr['title']} ({len(md)} chars)")
        else:
            send_mail(subject, body)
            log(f"emailed review request for PR #{num}: {pr['title']}")
        state["prs"].setdefault(num, {})
        state["prs"][num].update(notified=True, title=pr["title"])
    if not dry:
        save_state(state)


def fetch_post_markdown(branch: str) -> str:
    import base64
    names = json.loads(gh("api", f"repos/{REPO}/compare/main...{branch}", "--jq",
                          "[.files[].filename]"))
    md_files = [f for f in names if f.startswith("src/content/blog/") and f.endswith(".md")]
    if not md_files:
        raise RuntimeError(f"no blog markdown found on branch {branch}")
    # gh --jq prints a string result raw (unquoted) — .content is already base64 text
    b64 = gh("api", f"repos/{REPO}/contents/{md_files[0]}?ref={branch}", "--jq", ".content")
    md = base64.b64decode(b64).decode()
    # strip frontmatter — Peter reviews the article, not the YAML
    return re.sub(r"^---\n.*?\n---\n", "", md, count=1, flags=re.S)


# ---------- step 3: act on replies ----------

def process_replies(state: dict, dry: bool) -> None:
    if not MAILDIR.exists():
        return
    seen = set(state["seen_msgids"])
    for sub in ("new", "cur"):
        d = MAILDIR / sub
        if not d.exists():
            continue
        for f in sorted(d.iterdir()):
            if not f.is_file():
                continue
            try:
                msg, body = load_mail(f)
            except Exception as e:
                log(f"skipping unparseable mail {f.name}: {e}")
                continue
            msgid = msg.get("Message-ID", f.name)
            if msgid in seen:
                continue
            sender = parseaddr(str(msg.get("From", "")))[1].lower()
            if sender != REVIEWER:
                seen.add(msgid)  # not from Peter: ignore forever
                continue
            m = PR_RE.search(str(msg.get("Subject", "")))
            if not m:
                seen.add(msgid)
                continue
            num = m.group(1)
            reply_txt = QUOTE_RE.split(body, maxsplit=1)[0]
            yes, no = YES_RE.search(reply_txt), NO_RE.search(reply_txt)
            if yes and no:
                log(f"PR #{num}: reply matched BOTH yes and no — ignoring, needs manual action")
                seen.add(msgid)
            elif yes:
                act_on(state, num, "merge", dry)
                seen.add(msgid)
            elif no:
                act_on(state, num, "close", dry)
                seen.add(msgid)
            # neither keyword: keep for future scans? mark seen so we don't re-log
            else:
                log(f"PR #{num}: reply had no yes/no keyword — ignored")
                seen.add(msgid)
    state["seen_msgids"] = sorted(seen)[-500:]
    if not dry:
        save_state(state)


def act_on(state: dict, num: str, action: str, dry: bool) -> None:
    pr = state["prs"].get(num)
    if not pr or not pr.get("notified"):
        log(f"PR #{num}: got a '{action}' reply but this PR was never notified by me — ignoring (anti-spoof)")
        return
    if pr.get("processed"):
        log(f"PR #{num}: already processed ({pr.get('action')}) — ignoring duplicate reply")
        return
    if dry:
        log(f"[dry] would {action} PR #{num}")
    else:
        try:
            if action == "merge":
                gh("pr", "merge", num, "--merge", "--delete-branch")
                log(f"PR #{num}: MERGED on Peter's reply — deploy.yml will publish")
            else:
                gh("pr", "close", num, "--delete-branch")
                log(f"PR #{num}: CLOSED on Peter's reply")
        except Exception as e:
            log(f"PR #{num}: {action} FAILED: {e}")
            return
    pr.update(processed=True, action=action)


if __name__ == "__main__":
    dry = "--dry-run" in sys.argv
    st = load_state()
    if dry:
        log("dry run")
    process_replies(st, dry)
    notify_new_prs(st, dry)
    log("pass complete")
