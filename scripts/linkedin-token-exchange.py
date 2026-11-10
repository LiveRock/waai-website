#!/usr/bin/env python3
"""Exchange a LinkedIn OAuth authorization code for an access token.

Reads the pasted localhost callback URL from ~/.config/waai-website/oauth-code.txt,
verifies the state against oauth-state.txt (CSRF), exchanges the code, stores the
token in linkedin-credentials.json (600), then verifies it via OIDC /v2/userinfo.

Run after scripts/linkedin-authorize-url.py + Peter's Allow-click. Auth codes are
single-use and short-lived — run promptly.
"""
import datetime
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

HOME = os.path.expanduser("~")
CREDS_PATH = os.path.join(HOME, ".config/waai-website/linkedin-credentials.json")
CODE_PATH = os.path.join(HOME, ".config/waai-website/oauth-code.txt")
STATE_PATH = os.path.join(HOME, ".config/waai-website/oauth-state.txt")
REDIRECT_URI = "http://localhost:8080/callback"

creds = json.load(open(CREDS_PATH))
raw = open(CODE_PATH).read().strip()
# Accept a full URL, a bare query string, or key=value pairs
if raw.startswith("http"):
    query = urllib.parse.urlparse(raw).query
else:
    query = raw.lstrip("?")
params = dict(urllib.parse.parse_qsl(query))

if "error" in params:
    print("OAUTH ERROR PARAM:", params.get("error"), params.get("error_description", ""))
    sys.exit(1)

expected_state = open(STATE_PATH).read().strip()
if params.get("state") != expected_state:
    print("STATE MISMATCH — aborting (expected", expected_state, "got", params.get("state"), ")")
    sys.exit(1)
print("state verified OK")

data = urllib.parse.urlencode({
    "grant_type": "authorization_code",
    "code": params["code"],
    "client_id": creds["client_id"],
    "client_secret": creds["client_secret"],
    "redirect_uri": REDIRECT_URI,
}).encode()
req = urllib.request.Request(
    "https://www.linkedin.com/oauth/v2/accessToken",
    data=data,
    headers={"Content-Type": "application/x-www-form-urlencoded"},
)
try:
    tok = json.load(urllib.request.urlopen(req, timeout=30))
except urllib.error.HTTPError as e:
    print("TOKEN EXCHANGE FAILED:", e.code, e.read().decode()[:300])
    sys.exit(1)

creds["access_token"] = tok["access_token"]
creds["access_token_expires_at"] = (
    datetime.datetime.now(datetime.timezone.utc)
    + datetime.timedelta(seconds=tok.get("expires_in", 60 * 60 * 24 * 60))
).isoformat()
creds["refresh_token"] = tok.get("refresh_token", "")
json.dump(creds, open(CREDS_PATH, "w"), indent=2, ensure_ascii=False)
os.chmod(CREDS_PATH, 0o600)
print(
    "token stored. expires_in:",
    tok.get("expires_in"),
    "| refresh_token:",
    "yes" if tok.get("refresh_token") else "no",
)

# Verify via OIDC userinfo
req2 = urllib.request.Request(
    "https://api.linkedin.com/v2/userinfo",
    headers={"Authorization": "Bearer " + tok["access_token"]},
)
ui = json.load(urllib.request.urlopen(req2, timeout=30))
print("OIDC USERINFO: name=%s | email=%s" % (ui.get("name"), ui.get("email")))
