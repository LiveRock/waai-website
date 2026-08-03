# waai CMS OAuth proxy (Cloudflare Worker)

Sveltia CMS at `waai.me/admin` talks to GitHub directly from the browser, but GitHub's
OAuth token exchange requires a server (the client secret can't live in the browser). This
tiny Cloudflare Worker is that server — the only piece of "infra" the otherwise-static
blog CMS needs. **Free tier, single file.**

It implements the Decap/Sveltia "external OAuth" contract:

- `GET /auth` → redirect to GitHub's authorize URL (sets a CSRF state cookie)
- `GET /callback` → exchange the code for an access token, then `postMessage` it to the `waai.me/admin` popup

## One-time setup

### 1. Create a GitHub OAuth App
- GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**
- **Application name:** `waai CMS`
- **Homepage URL:** `https://waai.me`
- **Authorization callback URL:** `https://<your-worker-subdomain>.workers.dev/callback`
- After creating, note the **Client ID**. Click **Generate a new client secret** and note the **Client Secret**.

### 2. Deploy this Worker
Install [wrangler](https://developers.cloudflare.com/workers/wrangler/) (`npm i -g wrangler`),
log in (`wrangler login`), then from this folder:

```bash
wrangler deploy worker.js --name waai-cms-oauth --compatibility-date 2025-01-01
```

Set the two secrets (the Worker reads them from `env`):

```bash
wrangler secret put OAUTH_CLIENT_ID     # paste the GitHub OAuth App Client ID
wrangler secret put OAUTH_CLIENT_SECRET  # paste the GitHub OAuth App Client Secret
```

Note the deployed Worker URL, e.g. `https://waai-cms-oauth.<your-subdomain>.workers.dev`.

### 3. Point the CMS at the Worker
In `public/admin/config.yml`, set `backend.base_url` to the Worker URL (keep `auth_endpoint: /auth`):

```yaml
backend:
  name: github
  repo: LiveRock/waai-website
  branch: main
  base_url: https://waai-cms-oauth.<your-subdomain>.workers.dev
  auth_endpoint: /auth
```

### 4. Log in
Open `https://waai.me/admin/` → click **Login with GitHub** → authorize. You (and anyone with
`write` access to `LiveRock/waai-website`) can now create/edit posts. Saving commits to `main`,
which triggers the auto-deploy workflow → the post goes live.

## Notes
- `SITE_ORIGIN` in `worker.js` must equal the origin serving `/admin/` (the `postMessage` target). Default `https://waai.me`.
- The Worker stores no data; it only brokers the token exchange. GitHub still validates the callback URL and the code.
- If login fails, check: (a) the OAuth App callback URL matches `<worker>/callback` exactly; (b) the two secrets are set; (c) `base_url` in `config.yml` matches the Worker URL.
