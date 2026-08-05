# waai CMS OAuth proxy (Cloudflare Worker)

Sveltia CMS at `waai.me/admin` authenticates against GitHub through a browser
popup. GitHub's OAuth token exchange requires a server (the client secret can't
live in the browser), so this tiny Cloudflare Worker is that server — the only
piece of "infra" the otherwise-static blog CMS needs. **Free tier, single file.**

This is the **official [`sveltia/sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)**
worker, vendored verbatim, so the popup `postMessage` handshake
(`authorizing:github` ↔ `authorization:github:success:{token}`) matches Sveltia
exactly. Don't hand-roll the message format — Sveltia will show
"Authentication aborted" if it's wrong.

## Routes (Decap/Sveltia external-OAuth contract)
- `GET /auth` → redirect to GitHub authorize (sets a `csrf-token` cookie)
- `GET /callback` → exchange the code for an access token, then `postMessage` it to the `/admin` opener via the 2-way handshake

## Required secrets (Worker env vars)
- `GITHUB_CLIENT_ID` — from the GitHub OAuth App
- `GITHUB_CLIENT_SECRET` — from the GitHub OAuth App (mark as encrypted/Secret)

## Optional
- `ALLOWED_DOMAINS` — comma-separated hostnames allowed to use the proxy (supports `*.example.com`). e.g. `waai.me`. Leave unset to allow any (fine while testing).
- `GITHUB_HOSTNAME` — only for GitHub Enterprise Server; defaults to `github.com`.

## Deploy
From this folder (requires a Cloudflare account):
```bash
npx wrangler deploy worker.js --name waai-cms-oauth --compatibility-date 2025-01-01
npx wrangler secret put GITHUB_CLIENT_ID --name waai-cms-oauth      # paste Client ID
npx wrangler secret put GITHUB_CLIENT_SECRET --name waai-cms-oauth  # paste Client Secret
```
Note the deployed URL (e.g. `https://waai-cms-oauth.<your-subdomain>.workers.dev`).

## One-time setup
1. **GitHub OAuth App** — github.com → Settings → Developer settings → OAuth Apps → New:
   - Homepage URL: `https://waai.me`
   - Authorization callback URL: `https://<worker-url>/callback`
   - Note the **Client ID**, then **Generate a client secret** and note it.
2. **Set the 2 secrets** on the Worker (`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`) — via the `wrangler secret put` commands above or the Cloudflare dashboard (Worker → Settings → Variables and Secrets).
3. **Point the CMS at the Worker** — `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: LiveRock/waai-website
     branch: main
     base_url: https://waai-cms-oauth.<your-subdomain>.workers.dev
     auth_endpoint: /auth
   ```
4. **Log in** at `https://waai.me/admin/` → Login with GitHub → authorize. Saving a post commits to `main`, which triggers the auto-deploy workflow → the post goes live.

## Notes
- The worker stores no data; it only brokers the token exchange. GitHub still validates the registered callback URL and the authorization code.
- If login fails with "Authentication aborted", the worker code doesn't match the Sveltia handshake — re-deploy this (official) `worker.js`.
- If `/auth` shows `client_id=undefined`, the `GITHUB_CLIENT_ID` secret isn't set on the Worker.
