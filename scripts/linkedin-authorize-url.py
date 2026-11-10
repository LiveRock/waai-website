#!/usr/bin/env python3
"""Generate a LinkedIn OAuth authorize URL for the waai dev app.

Used at token bootstrap and every ~60 days (access tokens last 60 days; no
refresh token while `offline_access` is ungrantable for young self-serve apps).

Usage:
  python3 scripts/linkedin-authorize-url.py
     -> prints the URL; Peter opens it logged in, clicks Allow, lands on the
        dead localhost page, and pastes the FULL address-bar URL into
        ~/.config/waai-website/oauth-code.txt
     -> then: python3 scripts/linkedin-token-exchange.py

Scopes are the verified-grantable set (bisected 2026-11-10): requesting
w_organization_social / r_organization_social gets unauthorized_scope_error
(Community Management API is partner-gated) and offline_access gets
invalid_scope until the app passes verification.
"""
import json
import os
import secrets
import urllib.parse

HOME = os.path.expanduser("~")
CREDS = os.path.join(HOME, ".config/waai-website/linkedin-credentials.json")
STATE_FILE = os.path.join(HOME, ".config/waai-website/oauth-state.txt")
REDIRECT_URI = "http://localhost:8080/callback"
SCOPES = ["openid", "profile", "email", "w_member_social"]

creds = json.load(open(CREDS))
state = secrets.token_hex(8)
with open(STATE_FILE, "w") as f:
    f.write(state)
os.chmod(STATE_FILE, 0o600)

url = "https://www.linkedin.com/oauth/v2/authorization?" + urllib.parse.urlencode({
    "response_type": "code",
    "client_id": creds["client_id"],
    "redirect_uri": REDIRECT_URI,
    "state": state,
    "scope": " ".join(SCOPES),
})
print(url)
print("\nAfter Allow: copy the full localhost URL (with code=...&state=...) into")
print("~/.config/waai-website/oauth-code.txt, then run scripts/linkedin-token-exchange.py")
