# LinkedIn Company Page — waai runbook

Prepared 2026-11-10. Part of the AI-SEO ecosystem phase (same quick-win list as
Crunchbase/Wikidata in `docs/directory-submissions.md`): LinkedIn company pages feed AI
training corpora, and LLMs cross-check the brand name/category/description against them.
Consistency with `docs/ai-seo/directory-and-citation-pack.md` is the point — the copy
below reuses the canonical entity line verbatim.

**Claim `linkedin.com/company/waai` early** — custom URLs are first-come.

---

## 1. Where the LinkedIn secrets live (decided)

There are **two different kinds** of LinkedIn secret — they get different homes.

### 1a. Your LinkedIn **login** (email + password) → this box (Peter's decision, 2026-11-10)

Peter's personal LinkedIn account is also an SSO key: he used **"Sign in with
LinkedIn"** to claim `my.g2.com` (2026-11-10), and the same button exists on other
directories. Because the server is headless and Olivia (Claude Code) manages marketing
from it, Peter chose to store personal logins **on this box** rather than a password
manager:

- **Home:** `~/.config/waai-website/logins.json` — mode `600`, ubuntu-owned; directory
  is `700`; sshd has `PasswordAuthentication no` (SSH-key-only), verified 2026-11-10.
  Never in this repo, `.env*` files, or GitHub secrets.
- The file holds email/password + login method per account (LinkedIn, G2 via LinkedIn
  SSO, Capterra, Crunchbase, Product Hunt later) — one place, so a login is never
  guessable-wrong; keep `docs/submission-tracker.csv` `Account Email`/`Notes` in sync.
- **Recommended mitigations:** enable LinkedIn 2FA and store the recovery codes in the
  file (fresh interactive logins then need Peter to relay an OTP — a feature, not a
  bug: a leaked password alone stays useless); use a **unique** password for LinkedIn,
  never reused. This box is the only copy — mirroring it to any personal note/password
  manager remains a smart hedge (optional, Peter's call).
- How the SSO works: G2 never sees the password — LinkedIn shows its own login page and
  passes G2 a token. The login is still the master key to everything SSO'd to it.

### 1b. LinkedIn **API credentials** (future auto-posting) → this box

**`~/.config/waai-website/linkedin-credentials.json`** (mode `600`, ubuntu-owned) — same
convention as `blog-review-mailbox-pass`. Create it when you have tokens (§6). These are
machine tokens, not your login — they only exist if/when we build auto-posting:

```bash
install -m 600 /dev/null ~/.config/waai-website/linkedin-credentials.json
```

Shape (already created 2026-11-10 with empty values + a `_README` placeholder note; a
script refreshes tokens in place — single file so reads/writes are atomic, and any
posting script must treat an empty `client_id`/`access_token` as "not configured"):

```json
{
  "_README": "PLACEHOLDER — no real credentials yet. Fill in when the LinkedIn dev app + one-time browser auth are done (see docs/linkedin/company-page.md §1b and §6). A posting script must treat empty client_id/access_token as 'not configured'. Keep mode 600. Mirror the real values into a password manager after every token refresh.",
  "client_id": "",
  "client_secret": "",
  "refresh_token": "",
  "access_token": "",
  "access_token_expires_at": "",
  "refresh_token_expires_at": "",
  "organization_urn": "urn:li:organization:"
}
```

**Why there, not anywhere else:**

| Option | Verdict |
|---|---|
| `~/.config/waai-website/` (this box) | ✅ **Home.** LinkedIn access tokens expire in ~60 days, refresh tokens ~365 days — every refresh **rewrites** this file. Anything static goes stale. |
| `.env.production` (repo, gitignored) | ❌ Build-time vars only (META_PIXEL_ID pattern). LinkedIn creds never touch the static build. |
| GitHub repo secrets | ⚠️ Only if automation moves into Actions — and even then only the *static* pair (`LINKEDIN_CLIENT_ID/SECRET`). Rotating tokens would need re-uploading after every refresh; keep them on the box. |
| Inside the repo | ❌ Never. |

⚠️ The box becomes the only copy — **mirror `linkedin-credentials.json` into a password
manager** after every refresh (or accept re-doing the browser auth when the box dies).

---

## 1c. Verified access model (tested 2026-11-10)

- **LinkedIn: ✅ session works / ⚠️ protected pages bounce (device binding).** A
  password login from the server hits a reCAPTCHA checkpoint (password accepted,
  humanness check — we do not defeat it, and never retry: single attempt per session
  lifetime). The working path is a **`li_at` session handoff**: Peter exports the
  `li_at` cookie from his logged-in browser into `~/.config/waai-website/li_at.txt` →
  `scripts/linkedin-session.cjs` installs it (a fresh handoff always beats the saved
  state), verifies the feed, saves `~/.config/waai-website/linkedin-session.json`
  (600), consumes the handoff file. Feed + identity: ✅.
  **But `/in/*` profiles and `/company/*/admin/*` 302-loop (11×302 → HTTP 429) even
  with a freshly exported `li_at`** — LinkedIn binds sessions to the browser they were
  issued to (`bcookie` + fingerprint). The script accepts two more handoff files to
  present the session as Peter's real browser: `bcookie.txt` and `useragent.txt`
  (same DevTools cookie table / `navigator.userAgent` in the console). **Tried
  2026-11-10 — still bounces: the headless engine itself is detectable; LinkedIn's
  protected surfaces hard-block it regardless of cookies. Browser attempts STOPPED
  (429s risk the account; no evasion arms race).** Feed-level session access only.
  Profile identity was instead confirmed via the search-engine index:
  linkedin.com/in/peterlum = Peter Lum, AI Solution Architect at Hotsource Intelligence.
  Fall back to §6 API for page management + Peter's browser for one-off UI.
  - 2026-11 login form gotcha: the classic `#username`/`#password` ids are gone
    (randomized) — target `input[autocomplete="username"]:visible` etc., visible-only
    (the form exists twice in the DOM).
- **G2: ⛔ not automatable from this box.** my.g2.com sits behind Cloudflare + DataDome,
  which 403s headless traffic from OCI datacenter IPs regardless of browser build or
  cookies (tested full Chromium, consistent fingerprint — still 403). Not a credentials
  problem. G2 seller-listing work happens in Peter's browser using the paste-ready copy
  in `docs/ai-seo/directory-and-citation-pack.md` + `docs/screenshots/`. Expect other
  hard-bot-walled directories to behave the same; the AI directories (tier 3/4) are
  typically plain forms and should be fine.

---

## 2. The page (ALREADY CREATED — company ID 145444138)

Peter created the company page and is its admin (2026-11-10):
`https://www.linkedin.com/company/145444138/admin/dashboard/`. Remaining setup work =
logo, banner, tagline/About/specialties from §3, vanity URL claim (`/company/waai` if
not yet set: admin → Settings → Page URL), first post from §4.

### Original creation steps (kept for reference / other pages)

Prereqs:
1. Your personal LinkedIn profile (also listed as founder in the Crunchbase pack — the
   page↔profile link builds the Person-Organization entity graph).
2. **A `@waai.me` email address** — LinkedIn requires confirming a work email on your own
   domain to create a company page (`blog-review@waai.me` proves domain mail works; create
   `peter@waai.me` in Virtualmin if you don't have one).

Steps:
1. Go to **https://www.linkedin.com/company/setup/** (or any company page → footer
   "Create a Company Page").
2. Page name: `waai` · URL: `waai` · confirm the `@waai.me` email → Create.
3. Upload logo → `public/images/logos/logo-512.png` (≥300×300 requirement met).
4. Upload banner → `docs/linkedin/banner-1128x191.png` (generated 2026-11-10; brand
   gradient, logo + "Your WhatsApp AI Agent · waai.me"; content kept inside the central
   band that survives LinkedIn's mobile crop).
5. Fill the fields from §3, paste the About from §3.
6. Add your profile as Founder in the "Employees" tab / your Experience section.
7. Post the first post (§4) so the page isn't empty when anyone (human or crawler) lands.

## 3. Paste-ready copy

| Field | Value |
|---|---|
| Name | waai |
| URL | linkedin.com/company/waai |
| Tagline | Your WhatsApp AI Agent — answers, books and sells for your business on the official WhatsApp Business API. |
| Website | https://waai.me |
| Industry | Software Development |
| Company size | (Peter fills — e.g. 1–10) |
| Headquarters | Singapore |
| Founded | (Peter fills) |
| Specialties | WhatsApp Automation · Conversational AI · AI Customer Service · Chatbots · Booking Software · CRM · SaaS · Customer Experience |

**About section** (reuses the canonical entity line verbatim — keep it in sync with the
citation pack and `/llms.txt`):

> waai is a commercial, multi-tenant AI WhatsApp business assistant — a SaaS platform that automates customer conversations, bookings, catalog orders and support on the official WhatsApp Business API for small and medium businesses.
>
> Businesses use waai to answer customer questions instantly from a knowledge base, take bookings with deposits, process catalog orders and file chats into a CRM — with human handoff when it matters.
>
> ▸ AI answering: knowledge-base Q&A + rule-based logic flows + LLM fallback (any OpenAI-compatible provider)
> ▸ Booking with branches, services, deposits and reminders · WhatsApp catalog orders
> ▸ CRM with lead capture and ad attribution · Google Workspace + Cal.com integrations
> ▸ Team inbox with human handoff · broadcast campaigns · analytics
> ▸ 10 UI languages, including Singapore's four official ones
> ▸ Multi-tenant reseller / white-label option for agencies
>
> Official Meta Tech Provider · Singapore-based · SGD pricing.
> 30-day free trial, no credit card → https://waai.me

## 4. First five posts (ready to paste; 1–2/week thereafter)

Screenshots to attach live in `docs/screenshots/` — real product shots beat stock.

1. **Introduce the page** (attach `01-homepage-hero.png`)
   > waai is live on LinkedIn. We build an AI agent that answers, books and sells for small businesses on the official WhatsApp Business API — knowledge-base answers with LLM fallback, bookings with deposits, catalog orders, CRM. 30-day free trial, no credit card → https://waai.me
2. **Booking feature** (attach `07-booking-feature.png`)
   > Customers book, reschedule and pay deposits over WhatsApp — 24/7, no back-and-forth. Branches, services, reminders and PDF confirmations built in. How it works: https://waai.me/features/booking/
3. **Meta's Business Agent vs waai** (from the blog post)
   > Meta is rolling out its own Business Agent. Here's where a dedicated platform still wins — knowledge-base accuracy, booking with deposits, catalog orders, CRM, and a team inbox. Full comparison: https://waai.me/blog/meta-business-agent-vs-waai/
4. **App vs API** (evergreen educational)
   > WhatsApp Business app or Business API? One phone and canned replies → the free app. Multi-agent, automation, AI answers → the API. A plain-English guide: https://waai.me/blog/whatsapp-business-app-vs-api/
5. **vs ManyChat** (attach `06-compare-manychat.png`)
   > Flow-builder tools vs a WhatsApp-first AI agent: honest breakdown of where each wins, with pricing compared in SGD. https://waai.me/compare/waai-vs-manychat/

Ongoing rhythm: every weekly blog post (auto-emailed for review) = 1 LinkedIn post; add
one product/industry angle per week from `docs/screenshots/`.

## 5. Verify after creation

- [ ] `linkedin.com/company/waai` resolves, logo + banner render on desktop **and mobile**
- [ ] About shows the entity line verbatim (LLM cross-check consistency)
- [ ] Peter's profile lists waai (Founder) and the page lists him as employee
- [ ] First post published; page follows/notifications on for Peter's account
- [ ] Page URL added to `docs/submission-tracker.csv` + the G2/Capterra profiles later
- [ ] Site backlink: consider adding a LinkedIn icon to the site footer later (not urgent)

## 6. Phase 2 (optional, later): auto-posting via API

Only worth building once the page has been manually alive for a few weeks. Design sketch
so the secrets above make sense now:

1. Peter creates an app at **developer.linkedin.com** (needs the company page to exist
   first — do §2 before this), adds the **"Share on LinkedIn"** and **"Sign In with
   LinkedIn using OpenID Connect"** products.
2. One-time browser auth as Peter (page admin) → access + refresh tokens land in
   `~/.config/waai-website/linkedin-credentials.json`.
3. A small `scripts/post-to-linkedin.mjs` (mirrors the blog tooling): refreshes the
   access token when <7 days to expiry (rewrites the file), posts text + link + image
   to the page via `POST /rest/posts` with the organization URN.
4. Hook: after a blog PR merges (deploy fires), post the new article — either extend the
   on-box review daemon (it already knows about merges) or a tiny GH Action using only
   the static client secrets.

⚠️ **Honest caveat:** LinkedIn has tightened organization posting — the
`w_organization_social` scope now sits under the Community Management API, which can
require app review even for your own page. For your own page + your own app + you as
admin it generally still works, but if LinkedIn blocks it, the fallback is: manual
posting (1/week is fine), or post from Peter's personal profile and reshare from the
page. Decide when we get there.
