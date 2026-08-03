// waai CMS OAuth proxy — Cloudflare Worker.
// Implements the Decap/Sveltia "external OAuth" contract so the Sveltia admin at
// waai.me/admin can authenticate against GitHub and write commits to the repo.
//
// Endpoints:
//   GET /auth       → redirect the user to GitHub's authorize URL (sets a state cookie)
//   GET /callback   → exchange the code for an access token, then postMessage it to /admin
//
// Required Worker secrets (set via `wrangler secret put`): OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET.

const SITE_ORIGIN = "https://waai.me"; // where the Sveltia admin lives (the postMessage target)
const PROVIDER = "github";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1) Start OAuth — Decap opens ${base_url}${auth_endpoint} in a popup.
    if (url.pathname === "/auth") {
      const scope = url.searchParams.get("scope") || "repo,user";
      const state = randomState();
      const params = new URLSearchParams({
        client_id: env.OAUTH_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope,
        state,
      });
      return new Response(null, {
        status: 302,
        headers: {
          Location: `https://github.com/login/oauth/authorize?${params}`,
          "Set-Cookie": `waai_oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`,
        },
      });
    }

    // 2) GitHub redirects back here with ?code&state. Exchange + hand the token to the popup.
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");
      const cookies = parseCookies(request.headers.get("Cookie") || "");
      if (!code || !state || state !== cookies.waai_oauth_state) {
        return new Response("Invalid OAuth state.", { status: 400 });
      }

      const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: env.OAUTH_CLIENT_ID,
          client_secret: env.OAUTH_CLIENT_SECRET,
          code,
          state,
        }),
      });
      const data = await tokenRes.json();
      const token = data.access_token;
      if (!token) return new Response("GitHub token exchange failed.", { status: 400 });

      return new Response(callbackHtml(token), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("waai CMS OAuth proxy. Endpoints: /auth, /callback.", { status: 200 });
  },
};

// Decap/Sveltia's popup authenticator reads a postMessage of exactly this shape.
function callbackHtml(token) {
  const payload = JSON.stringify({ status: "success", content: { token, provider: PROVIDER } });
  return `<!doctype html><html><head><meta charset="utf-8"><title>Authorizing…</title></head>
<body style="font-family:system-ui,sans-serif;color:#6b7280">Authorizing the waai CMS…</p>
<script>
  (function () {
    var payload = ${payload};
    try { window.opener.postMessage(payload, ${JSON.stringify(SITE_ORIGIN)}); } catch (e) {}
    setTimeout(function () { window.close(); }, 200);
  })();
</script></body></html>`;
}

function randomState() {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
}

function parseCookies(header) {
  const out = {};
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx > -1) out[part.slice(0, idx).trim()] = decodeURIComponent(part.slice(idx + 1).trim());
  }
  return out;
}
