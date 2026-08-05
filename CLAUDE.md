# waai.me Marketing Website

## Overview
Marketing website for waai — WhatsApp AI Agent platform. Static site built with Astro, deployed to waai.me. Plan prices, quotas, and Optional Onboarding Assistance fees are fetched at build time from the waaiChat public API.

**Live:** https://waai.me
**Repo:** https://github.com/LiveRock/waai-website

## Quick Start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
./deploy.sh       # build + deploy to production
```

## Architecture
- **Framework:** Astro 6 (static output, no SSR)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Integrations:** `@astrojs/sitemap`
- **Deployment:** Static files copied to `/home/waai/public_html` (Apache docroot), preserves `.well-known` for SSL
- **Pricing & signup data:** Fetched at build time directly from public waaiChat API endpoints in page frontmatter (not via `src/lib/api.ts`) — see *Build-time data sources* in Key Decisions

## Project Structure
```
waai-website/
├── public/
│   ├── images/          # logos/, icons/, blog/, industries/, integrations/, testimonials/
│   ├── favicon.ico      # Generated from logo (ImageMagick)
│   ├── favicon-16x16.png, favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png, android-chrome-512x512.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── home/        # Homepage sections (Hero, LogoCarousel, VideoCarousel, AICapabilities, FeaturesGrid, Stats, etc.)
│   │   ├── layout/      # Header, Footer
│   │   └── shared/      # Accordion, Card, CTAButton, SectionHeading
│   ├── data/            # Content data (features, industries, solutions, testimonials, videos, navigation)
│   ├── layouts/         # BaseLayout (head/meta), PageLayout (header + footer wrapper)
│   ├── lib/             # api.ts — waai API client (NOTE: currently unused by pages; `fetchPlans()` path `/billing/public/plans` is stale — real route is `/public/plans`)
│   ├── pages/           # index, pricing, signup, contact, blog, terms, privacy, features/[slug], industries/[slug], solutions/[slug], integrations/*
│   └── styles/          # global.css (Tailwind v4)
├── docs/
├── astro.config.mjs
└── deploy.sh
```

## Key Decisions
- Static site (no server) — all plan/quota/price/onboarding data fetched at build time, not runtime
- Tailwind v4 via Vite plugin (not PostCSS)
- `API_BASE` defaults to `https://waaichat.hsi.asia/api`; override with `API_BASE_URL` env var
- Deploy script preserves `.well-known` directory for SSL challenges
- App logo (`public/images/logos/logo.jpg`) is the single source of truth for all favicon/icon files
- Favicon files generated via ImageMagick from the logo (not hand-crafted)
- Dynamic routes (`[slug].astro`) for features, industries, solutions — content driven by `src/data/*.ts`
- Currency is Singapore dollars (`$`); database stores prices in **cents** — `formatPrice()` divides by 100
- Pricing page monthly/yearly toggle uses inline `onclick` handlers (`is:inline` script) because Astro hoists `<script>` tags after `</html>` where they may not execute
- Plan card features built from DB data (limits) + static feature labels from `planFeatureMap` (no hardcoded numbers)
- Custom plan card is simplified: just name + "Contact Us" button (no features list)
- Comparison table excludes Custom plan; data-driven from DB
- Signup page posts to `POST /api/auth/signup` with `plan_name` field; filters out Custom plan
- **Build-time data sources** — both `/pricing` and `/signup` fetch inline in frontmatter (try `http://127.0.0.1:8000` then `https://waaichat.hsi.asia`; hardcoded fallback if unreachable):
  - `GET /api/public/plans` — plan prices + every quota (`max_qa_pairs`, `max_flows`, `max_messages_monthly`, `max_respondents`, `max_web_pages`, `max_drive_sends_monthly`, `max_qa_translations_per_lang_monthly`, `max_flow_translations_per_lang_monthly`, `trial_days`)
  - `GET /api/site-content/onboarding_service_settings` — Optional Onboarding Assistance one-time fees (`starter.fee_cents` / `pro.fee_cents`; default $99 / $299). `content` is a JSON string — parse it.
- **Plan feature gating** (mirrors waaiChat): Google Workspace = Starter+; **Cal.com Integration & Language Translations = Pro+ only**; Optional Onboarding Assistance = Starter + Pro add-on. Static marketing labels live in `planFeatureMap` (pricing) / `signupFeatureMap` (signup); all quota numbers come from the API (no hardcoded numbers)
- `src/lib/api.ts` is unused by the pages today — pricing/signup fetch inline. If consolidating, fix the stale `/billing/public/plans` path to `/public/plans` (router mounted at `/api` in waaiChat)
- **Homepage video carousel** — `VideoCarousel.astro` (rendered after Hero + LogoCarousel) shows 4 waai YouTube clips in a **full-bleed** scroll-snap carousel: each video spans the browser width, one per view (snap-scroll, prev/next arrows overlaid on the video edges, dot indicators below). The carousel breaks out of the `max-w-7xl` site container; only the heading is constrained. Click-to-play facade: thumbnails swap to a lazy `youtube-nocookie.com` iframe on click (fast, privacy-friendly — no heavy iframes on page load). Video IDs + titles live in `src/data/videos.ts` (titles editable for marketing). Section heading is a single-line "why not?" in `wa-green-dark`; interactivity uses an `is:inline` script (same convention as the pricing toggle)

## Multilingual (i18n) — en / zh / ms / ta / th / ko / ja / fr / it / es

The site is fully localized to English (default, root) + Simplified Chinese (`zh`), Bahasa Malay (`ms`), Tamil (`ta`), Thai (`th`), Korean (`ko`), Japanese (`ja`), French (`fr`), Italian (`it`), Spanish (`es`). English stays at `/`; others are prefixed (`/zh/`, `/ms/`, …). The first four locales use `-SG` hreflang (Singapore's official languages); the latter six use native primary-region tags (`th-TH`, `ko-KR`, `ja-JP`, `fr-FR`, `it-IT`, `es-ES`). A language switcher lives in the header.

**Architecture:**
- `astro.config.mjs` — Astro native `i18n` block (`prefixDefaultLocale: false`) + `@astrojs/sitemap` `i18n` option (emits hreflang alternates).
- `src/i18n/config.ts` — locales, `ENGLISH_ONLY_PATHS` (legal pages kept English-only).
- `src/i18n/utils.ts` — `getLangFromUrl`, `useTranslations(lang)→t`, `localizePath`, `getLocalizedPath` (switcher), `getAlternates` (hreflang), `normalizePath`, `stripLang`. Components self-derive `lang`/`t` from `Astro.url` — no prop drilling.
- `src/i18n/ui/{en,zh,ms,ta,th,ko,ja,fr,it,es}.ts` — UI/marketing string dictionaries (flat dot-keys; missing keys fall back EN→key).
- `src/i18n/content/{zh,ms,ta,th,ko,ja,fr,it,es}.ts` + `src/i18n/content/index.ts` — structured-content overlays (features/industries/solutions/testimonials/videos) keyed by slug, merged via `getFeatures(lang)` etc.
- `src/layouts/BaseLayout.astro` — dynamic `<html lang>`, hreflang loop + `x-default`, `og:locale`, conditional webfonts via a `locale.font` → URL lookup: Noto Sans SC (zh), Noto Sans Tamil (ta), Noto Sans Thai (th), Noto Sans KR (ko), Noto Sans JP (ja). Latin locales (en/ms/fr/it/es) load Inter only. `src/styles/global.css` scopes `--font-sans` via `:lang()`.
- **Tamil & Thai typography gotchas** (in `src/styles/global.css`, scoped via `:lang(ta)`/`:lang(th)` so English is unaffected):
  - **Line-height:** Tamil & Thai vowel/tone marks render above/below the consonant line and get clipped by tight line-heights. Tailwind's `text-*` size utilities set their own tight line-heights (`text-4xl`→1.11, `text-2xl`→1.2, `text-xs/sm`→~1.3–1.4) and `leading-tight/snug/none` clip too. `global.css` overrides these to 1.45 (large text/headings) and 1.6 (small text/tight leadings) for `:lang(ta)`/`:lang(th)`. CJK (zh/ko/ja) gets 1.4.
  - **Word wrapping:** Tamil & Thai form long unbroken words (no internal spaces). At large sizes a single word (e.g. வாடிக்கையாளர்களை, การสื่อสารอัตโนมัติ) can exceed the line width and overflow the right edge. `:lang(ta), :lang(th){overflow-wrap:break-word;word-break:break-word}` lets such words wrap.
  - If Tamil/Thai ever looks clipped again, check these two first (vertical clip → line-height; horizontal/right clip → word-wrap).
- DRY routing: page markup lives in `src/components/page/*Body.astro`; `src/pages/<x>.astro` renders the English body and `src/pages/[lang]/<x>.astro` (getStaticPaths over `NON_DEFAULT_LANGS`) renders the localized body. Dynamic routes fan out `langs × slugs`.
- Client scripts (contact, signup) are localized via a `<script type="application/json" id="*-i18n" set:html=...>` blob the bundled script reads — **not** `define:vars` (the signup script has TypeScript casts that would break if inlined).
- Legal pages (`terms`, `privacy`, `google-compliance`) + `404` are intentionally English-only; their hreflang shows only `en` + `x-default`, and the switcher sends other locales to the locale homepage.

**Coverage:** homepage, features (index + 9), industries (index + 9), solutions (3), pricing, signup, contact, integrations (index + google-workspace), and blog chrome are localized. Only the blog's 3 placeholder post titles/excerpts (no real articles exist) remain English.

⚠️ **Translations are AI-authored and unreviewed** (no native speaker available). Treat all non-English locales as draft, especially the non-Latin scripts (zh/ta/th/ko/ja).

### Reverting the multilingual deploy

The i18n work is a single squashed commit on `main`:
- **i18n commit:** `51bee18` — `feat(i18n): add multilingual support (en/zh/ms/ta) with language switcher`
- **Pre-i18n (English-only) state:** `78416ce` (its parent)

To roll the **live site** back to English-only, from the project root:

```bash
# Option A — safe, keeps history (creates a revert commit):
git revert --no-edit 51bee18 && ./deploy.sh

# Option B — rewrites local main to the pre-i18n commit (also fine; main isn't pushed):
git reset --hard 78416ce && ./deploy.sh
```

`./deploy.sh` rebuilds and copies `dist/` to the docroot (`/home/waai/public_html`), so either command immediately republishes the English-only site. The localized code remains in git history / on the `feature/multilingual-i18n` branch for re-deployment later.

## Blog + CMS (Sveltia)

The blog is a real content collection — not the old 3-placeholder stub. Posts are markdown in `src/content/blog/`, defined by `src/content.config.ts` (`blog` collection, glob loader `**/*.md`; schema: `title`, `description`, `pubDate`, `updatedDate?`, `author`, `category` enum `[Guides|Product|Comparisons|Integrations|Industry|News]`, `tags?`, `heroImage?`, `draft`). The `entry.id` (filename sans `.md`) is the URL slug.

- **Routes** mirror the features pattern: `src/components/page/BlogPost.astro` (self-localizing) rendered by `src/pages/blog/[slug].astro` (English) + `src/pages/[lang]/blog/[slug].astro` (× `NON_DEFAULT_LANGS`). `src/components/page/BlogIndex.astro` reads `getCollection('blog')`, excludes drafts, sorts newest-first. Posts are **English-only for v1** (localized chrome only) — every locale still gets a URL for sitemap/hreflang. Long-form markdown is styled by scoped `.prose-waai` rules in `BlogPost.astro` (there is **no** `@tailwindcss/typography` in the project).
- **CMS = Sveltia** (`public/admin/index.html` loads `@sveltia/cms` from CDN; `public/admin/config.yml` defines the `blog` collection — its fields MUST stay in sync with `src/content.config.ts`). Admin at `/admin/`. `content.config.ts` is the read-side contract, `config.yml` the write-side — change both together. `media_folder: public/images/blog` (served at `/images/blog/`). To pin/upgrade: change the script `src` in `admin/index.html` (or vendor the bundle).
- **Keystatic was ruled out** — it needs SSR/Node for its admin API routes; this site is static-only. Sveltia's admin is a static SPA that talks to GitHub from the browser.
- **OAuth** (`oauth-worker/worker.js`): GitHub's token exchange needs a server, so a free Cloudflare Worker brokers it. The file is the **official [`sveltia/sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) worker, vendored verbatim** — don't hand-roll the postMessage shape; Sveltia does a 2-way handshake (`authorizing:github` ↔ `authorization:github:success:{token}`) and shows "Authentication aborted" if it's wrong. Routes: `/auth` (start, sets `csrf-token` cookie) + `/callback` (exchange + `postMessage` token to `/admin`). `config.yml` `backend.base_url` points at the Worker. **Required secrets: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`** (not `OAUTH_*`). Optional `ALLOWED_DOMAINS=waai.me` (only once confirmed working). One-time setup in `oauth-worker/README.md` (GitHub OAuth App + `wrangler deploy` + `wrangler secret put GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`).
- **Auto-deploy** (`.github/workflows/deploy.yml`): on push to `main`, `appleboy/ssh-action` SSHes into the box (repo secrets `SSH_HOST=waai.me`, `SSH_USER=ubuntu`, `SSH_PRIVATE_KEY`) and runs `./deploy.sh`. Loop: edit in `/admin/` → save (commit) → Action rebuilds → live. No SSH to publish. The `concurrency: deploy-waai-me` group prevents overlapping (destructive) deploys.
  - **The deploy key is restricted** — the public half of a dedicated ed25519 key (`~/.ssh/waai_deploy_ed25519`) lives in `~/.ssh/authorized_keys` behind a **forced command** (`command="cd /home/ubuntu/projects/waai-website && ./deploy.sh",no-port-forwarding,no-X11-forwarding,no-agent-forwarding …`). So even if the GitHub secret leaks, the key can only trigger a deploy — it can never open a shell.
  - **⚠️ `deploy.sh` MUST source nvm.** The SSH forced-command runs in a non-login, non-interactive shell, so `.bashrc` (nvm) is skipped and the build resolves `/usr/bin/node` **v12**, which Astro rejects with `Node.js v12 is not supported by Astro!`. `deploy.sh` therefore sources `$NVM_DIR/nvm.sh` at the top to pull in Node ≥22 (v24 via nvm). Same root cause class as waaichat's "no outer sudo" gotcha — modern Node only exists through nvm in `.bashrc`. If a future deploy mysteriously fails on Node version, this is why.
- **RSS** at `/blog/rss.xml` (`src/pages/blog/rss.xml.ts`, `@astrojs/rss`). Sitemap auto-includes `[slug]` routes — no sitemap change needed.
- **i18n keys** added to `en.ts` only: `nav.blog`, `breadcrumb.blog`, `blog.empty`/`keepReading`/`postCtaTitle`/`postCtaBody` (the universal "Blog" label falls back to EN for other locales via the standard translator fallback).
- **Top nav**: Blog added to `src/data/navigation.ts` (the footer link already existed).

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Static build to `dist/` |
| `./deploy.sh` | Build + deploy to production |
