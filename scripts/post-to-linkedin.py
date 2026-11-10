#!/usr/bin/env python3
"""Post to LinkedIn as Peter (member post, w_member_social).

Usage:
  python3 scripts/post-to-linkedin.py <text-file> [image-path]

- Text file: the full post commentary (UTF-8).
- Optional image: uploaded via the assets API and attached as feed-share-image.
- Token from ~/.config/waai-website/linkedin-credentials.json (see
  scripts/linkedin-authorize-url.py for bootstrap/renewal).
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request

HOME = os.path.expanduser("~")
CREDS_PATH = os.path.join(HOME, ".config/waai-website/linkedin-credentials.json")
API = "https://api.linkedin.com"
# LinkedIn-Version must name an ACTIVE YYYYMM — and the gate is enforced
# inconsistently across endpoints (GETs may ignore it), so we resolve it by
# retrying the real call: on 426 NONEXISTENT_VERSION, advance the candidate.
_VERSION_CANDIDATES = ("202611", "202610", "202609", "202608", "202607", "202606", "202601", "202506", "202410")
_version_idx = 0


def _request(method, path, token, version, data, headers):
    req = urllib.request.Request(API + path, data=data, method=method, headers={
        "Authorization": f"Bearer {token}",
        "X-Restli-Protocol-Version": "2.0.0",
        "LinkedIn-Version": version,
        **(headers or {}),
    })
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            payload = r.read()
            parsed = json.loads(payload) if payload and payload.strip() else {}
            r.headers.get("x-restli-id") and setattr(_request, "last_id", r.headers["x-restli-id"])
            return r.status, parsed
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode(errors="replace")[:500]


def api_call(method, path, token, body=None, headers=None, raw_body=None):
    global _version_idx
    data = raw_body if raw_body is not None else (json.dumps(body).encode() if body is not None else None)
    while _version_idx < len(_VERSION_CANDIDATES):
        version = _VERSION_CANDIDATES[_version_idx]
        st, resp = _request(method, path, token, version, data, headers)
        if st == 426 and isinstance(resp, str) and "NONEXISTENT_VERSION" in resp:
            _version_idx += 1  # version not active — try the next candidate
            continue
        return st, resp
    sys.exit("no active LinkedIn-Version found")


def main():
    text = open(sys.argv[1], encoding="utf-8").read().strip()
    image = sys.argv[2] if len(sys.argv) > 2 else None
    creds = json.load(open(CREDS_PATH))
    token = creds["access_token"]
    if not token:
        sys.exit("no access token — run scripts/linkedin-authorize-url.py first")

    # member URN from OIDC sub
    st, ui = api_call("GET", "/v2/userinfo", token)
    if st != 200:
        sys.exit(f"userinfo failed {st}: {ui}")
    author = f"urn:li:person:{ui['sub']}"
    print(f"author: {author} ({ui.get('name')})")

    media = None
    if image:
        # 1. register upload
        st, reg = api_call("POST", "/rest/assets?action=registerUpload", token, body={
            "registerUploadRequest": {
                "owner": author,
                "recipes": ["urn:li:digitalmediaRecipe:feed-share-image"],
                "serviceRelationships": [
                    {"relationshipType": "OWNER", "identifier": "urn:li:userGeneratedContent"}
                ],
            }
        }, headers={"Content-Type": "application/json"})
        if st != 200 or not isinstance(reg, dict):
            sys.exit(f"registerUpload failed {st}: {reg}")
        val = reg.get("value", reg)
        asset = val["asset"]
        mech = val.get("uploadMechanism", {}).get("com.linkedin.digitalmedia.uploading.MultipartUpload", {})
        upload_url = mech.get("uploadUrl")
        if not upload_url and mech.get("uploadInstructions"):
            upload_url = mech["uploadInstructions"][0].get("url") or mech["uploadInstructions"][0].get("first")
        print(f"asset: {asset}")
        # 2. upload binary (POST, fall back to PUT)
        img = open(image, "rb").read()
        for method in ("POST", "PUT"):
            st2, resp = api_call(method, upload_url.replace(API, ""), token, raw_body=img,
                                 headers={"Content-Type": "image/png"})
            if st2 in (200, 201, 204):
                print(f"image uploaded ({method}, {len(img)} bytes)")
                break
        else:
            sys.exit(f"image upload failed: {st2} {resp}")
        # 3. wait for processing
        asset_id = asset.split(":")[-1]
        for _ in range(15):
            st3, a = api_call("GET", f"/rest/assets/{asset_id}", token)
            if st3 == 200 and isinstance(a, dict):
                status = a.get("status") or a.get("recipes", [{}])[0].get("status", "")
                if status == "AVAILABLE":
                    break
            time.sleep(2)
        print("asset status:", status if st3 == 200 else a)
        media = {"media": {"id": asset}}

    # 4. create the post
    post = {
        "author": author,
        "commentary": text,
        "visibility": "PUBLIC",
        "distribution": {
            "feedDistribution": "MAIN_FEED",
            "targetEntities": [],
            "thirdPartyDistributionChannels": [],
        },
        "lifecycleState": "PUBLISHED",
        "isReshareDisabledByAuthor": False,
    }
    if media:
        post["content"] = media
    st4, resp = api_call("POST", "/rest/posts", token, body=post, headers={"Content-Type": "application/json"})
    if st4 in (200, 201):
        # RestLI returns the new resource URN in the x-restli-id response header (body is empty)
        urn = (resp.get("id") if isinstance(resp, dict) else None) or getattr(_request, "last_id", None)
        print(f"PUBLISHED: {urn}")
        if urn:
            print(f"permalink: https://www.linkedin.com/feed/update/{urn}")
    else:
        sys.exit(f"post failed {st4}: {resp}")


if __name__ == "__main__":
    main()
