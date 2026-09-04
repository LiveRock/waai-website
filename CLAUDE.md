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
- **Referral code is mandatory** at signup: field is `required`, renders `888888`; the **client script** overrides it from `?ref=` at runtime (the old frontmatter `Astro.url.searchParams` read was dead — static build). Submit handler posts `888888` if cleared. Helper line under the field via `signup.referralHint` (`en.ts`); placeholder → `888888`
- **Build-time data sources** — both `/pricing` and `/signup` fetch inline in frontmatter (try `http://127.0.0.1:8000` then `https://waaichat.hsi.asia`; hardcoded fallback if unreachable):
  - `GET /api/public/plans` — plan prices + every quota (`max_qa_pairs`, `max_flows`, `max_messages_monthly`, `max_respondents`, `max_web_pages`, `max_drive_sends_monthly`, `max_qa_translations_per_lang_monthly`, `max_flow_translations_per_lang_monthly`, `max_bookings_monthly`, `max_booking_branches`, `max_booking_services`, `max_catalog_products`, `max_contacts`, `max_broadcasts_monthly`, `trial_days`). The comparison table surfaces the last four `max_*` as quota rows; NULL renders as "Unlimited".
  - `GET /api/site-content/onboarding_service_settings` — Optional Onboarding Assistance one-time fees (`starter.fee_cents` / `pro.fee_cents`; default $99 / $299). `content` is a JSON string — parse it.
- **Plan feature gating** (mirrors waaiChat): Google Workspace = Starter+; **Cal.com Integration, Language Translations, Booking, Catalog & Orders, CRM (ads attribution/automations) = Pro+ only**; Contacts CRM = all plans incl. trial; Optional Onboarding Assistance = Starter + Pro add-on. Static marketing labels live in `planFeatureMap` (pricing) / `signupFeatureMap` (signup); all quota numbers come from the API (no hardcoded numbers). **Marketing copy guardrails** (match waaiChat reality): Catalog has NO cart/checkout/payment links (orders are business-confirmed; deposits exist only in Booking); Booking has NO configurable buffers/lead-time/cancellation windows; AI providers list "any OpenAI-compatible endpoint" (llama.cpp was removed).
- **Features count = 12** (`src/data/features.ts`): 9 originals + `booking` / `catalog` / `crm` (all Pro & Custom, inserted after `ai-chatbot`). Icons live in TWO duplicated `iconMap`s (`FeatureDetail.astro` + `FeaturesIndex.astro`) — always update both. Homepage `FeaturesGrid.astro` is a hardcoded 9-card array (not driven by features.ts). **Solutions `features` arrays merge by index in locale overlays — append new entries at the END, never insert mid-array.**
- `src/lib/api.ts` is unused by the pages today — pricing/signup fetch inline. If consolidating, fix the stale `/billing/public/plans` path to `/public/plans` (router mounted at `/api` in waaiChat)
- **Homepage video carousel** — `VideoCarousel.astro` (rendered after Hero + LogoCarousel) shows 4 waai YouTube clips in a **full-bleed** scroll-snap carousel: each video spans the browser width, one per view (snap-scroll, prev/next arrows overlaid on the video edges, dot indicators below). The carousel breaks out of the `max-w-7xl` site container; only the heading is constrained. Click-to-play facade: thumbnails swap to a lazy `youtube-nocookie.com` iframe on click (fast, privacy-friendly — no heavy iframes on page load). Video IDs + titles live in `src/data/videos.ts` (titles editable for marketing). Section heading is a single-line "why not?" in `wa-green-dark`; interactivity uses an `is:inline` script (same convention as the pricing toggle)
- **Hero galaxy canvas** — `GalaxyCanvas.astro` (inspired by OpenAI's GPT-6 Astra particle hero): vanilla Canvas 2D spiral galaxy of ~600–1100 pre-rendered glow-sprite particles (white/wa-green/ai-purple) behind the hero content. Motion: rigid-pattern rotation (disk 1 turn/160s, bulge 1 turn/110s), per-star twinkle/wobble, mouse parallax (±24px, mouse only — touch skips it) and **cursor repulsion** — stars within 130px of the pointer are pushed away (spring-relaxed offsets `ox/oy` on each particle) and brighten ×1.6. Canvas is `absolute inset-0 pointer-events-none opacity-90 aria-hidden`, inserted right after the Hero `<section>` open tag (before the CSS radial-glow div). Core sits in the open space left of the phone mockup (desktop `0.58w/0.66h`, mobile `0.5w/0.72h`) with a dark "sky pocket" + core glow so stars pop on the mid-green gradient. Lifecycle (all firsts on this site): pauses via IntersectionObserver (offscreen) + visibilitychange (hidden tab), `prefers-reduced-motion` → one static frame no loop, DPR capped (1.5 mobile / 2 desktop), field rebuilt only on width change >2px. Bundled script → external `dist/_astro/GalaxyCanvas…js` chunk (~4.5 KB, hashed/cacheable, deferred) once it outgrew Astro's inline threshold. Zero deps, zero i18n. Tunables (arm count, speeds, palette, placement, push radius/strength) are named constants at the top of the script.

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

**Coverage:** homepage, features (index + 12), industries (index + 9), solutions (3), pricing, signup, contact, integrations (index + google-workspace), and blog chrome are localized. Blog posts are English-only for v1 (localized chrome only).

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

The blog is a real content collection — not the old 3-placeholder stub. Posts are markdown in `src/content/blog/`, defined by `src/content.config.ts` (`blog` collection, glob loader `**/*.md`; schema: `title`, `description`, `pubDate`, `updatedDate?`, `author`, `category` enum `[Guides|Product|Comparisons|Integrations|Industry|News]`, `tags?`, `heroImage?`, `sourceUrl?`/`sourceName?` (news-commentary attribution, rendered as a link-back box by `BlogPost.astro`), `draft`). The `entry.id` (filename sans `.md`) is the URL slug.

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

## Weekly blog automation

A scheduled GitHub Action drafts a new post each week and opens a **PR for review**. The PR is emailed to Peter as a full draft — he replies **YES** to publish (merges the PR → auto-deploys) or **NO** to reject. See *Blog review-by-email* below. A human still reviews every post before it goes live.

- **Workflow:** `.github/workflows/weekly-blog.yml` — `cron "7 1 * * 2"` (Tue ~09:07 SGT, English) + `cron "13 0 1 * *"` (1st of month, alternating **Chinese / Malay** by month parity). Also `workflow_dispatch` with a `lang` input to generate on demand.
- **Generator:** `scripts/generate-blog-post.mjs` — picks the next topic from `scripts/blog-topics.json` deterministically by week (or by month for multilingual), calls the **z.ai GLM API** (OpenAI-compatible; defaults to the **coding endpoint** `https://api.z.ai/api/coding/paas/v4` with `thinking:{type:disabled}` for speed — switch `ZAI_BASE_URL` to `…/paas/v4` for a non-coding key), writes a markdown file to `src/content/blog/` with frontmatter matching the collection schema, and emits `title`/`slug`/`category`/`pillar`/`lang`/`mode`/`source_url`/`source_check` to `GITHUB_OUTPUT`.
- **News-commentary mode (react to industry news):** dispatch the workflow with `source_url` (+ optional `source_name` display override, e.g. "IDC via WhatsApp for Business") — or run the generator with `SOURCE_URL`/`SOURCE_NAME` env. It fetches the article (stdlib fetch + regex HTML→text, browser UA, 3 retries; fails loudly <1500 chars), skips the topic rotation, writes an **original** commentary (category `News`) that cites the source, and writes `sourceUrl`/`sourceName` frontmatter which `BlogPost.astro` renders as a link-back attribution box (`blog.sourceLabel` i18n key, en+zh). **Legal guardrails**: max 2 blockquoted excerpts <25 words each, first body link = source, and a post-generation **verbatim check** (≥13-word run shared with the source outside quotes → resample up to 3×, then hard fail; 8–12-word runs only warn — they're usually statistic citations, and facts aren't copyrightable expression — and are surfaced in the PR's Originality-check line for review). For zh runs the quote stays in English (translation is still derivative); the slug gets a `-{lang}` suffix so same-source EN+ZH PRs can't collide. Dispatch EN first, merge, then ZH. Never add a news brief to `blog-topics.json` — the rotation is positional.
- **Topic queue:** `scripts/blog-topics.json` — 14 curated briefs across 5 pillars (buyer's guides, use-cases/verticals, product deep-dives, reseller/agency, news/policy). Edit/extend this file to steer the editorial calendar; rotation is deterministic so no state file.
- **PR step:** `peter-evans/create-pull-request@v6` commits the new file on a `blog/auto-<run_id>` branch and opens a PR titled `blog: <title>` with a `automated-blog` label. Merge → `deploy.yml` fires → live.
- **Required secret:** `ZAI_API_KEY` (z.ai GLM key) on the repo. Set with `gh secret set ZAI_API_KEY` (prompts hidden) or the dashboard.
- **Multilingual posts:** written as standalone localized posts in `src/content/blog/` (title/description/body in zh/ms; slug/category/tags stay English). They appear on `/blog/` alongside English ones. (Per-locale body serving for the localized chrome routes is a future enhancement; v1 = standalone localized posts.)
- **Topic rotation:** English = week-of-epoch index (one distinct topic per week); zh/ms monthly runs = month index. The generator's old ternary treated *any* non-empty `BLOG_LANG` (incl. `'en'`) as multilingual, so every English run in a month picked the same topic — fixed 2026-08-22 (PR #24); only `zh`/`ms` now take the monthly path.

## Blog review-by-email (auto-publish on Peter's YES)

The weekly PR doesn't sit in GitHub waiting — it's emailed as a full draft, and Peter's email reply publishes it. `scripts/review-approval.py` runs on this box every 10 min (cron `/etc/cron.d/waai-blog-review`, **root**, log `/var/log/waai-blog-review.log`):

1. Polls open PRs labeled `automated-blog`. For each new one: fetches the post markdown from the PR branch, emails the full draft to `peter@hotsource.net`.
2. Watches the `blog-review@waai.me` mailbox for replies (Virtualmin user; Maildir `/home/waai/homes/blog-review/Maildir`; mailbox password at `~/.config/waai-website/blog-review-mailbox-pass`).
3. A reply from Peter whose subject references `PR #N`:
   - **YES / publish / approve / merge / lgtm / ok** → `gh pr merge N --merge --delete-branch` → `deploy.yml` puts it live on waai.me
   - **NO / reject / decline** → `gh pr close N`
   - Only the **unquoted** part of the reply is keyword-scanned (quote markers split it off); a reply matching both yes and no is ignored as ambiguous.

State: `~/.local/state/waai-blog-review/state.json` (notified PRs + seen message-IDs). Anti-spoof: only `peter@hotsource.net` is honoured, and only PRs the daemon itself notified are actionable.

Gotchas baked into the design (each cost a live bounce/bug):
- **Outbound mail** relays through the box's postfix → **SMTP2GO smarthost** (same account waaichat uses). SMTP2GO has only `hsi.asia` as a verified sender domain, so review emails go out `From: waai Blog Review <noreply@hsi.asia>` with **`Reply-To: blog-review@waai.me`** — replies land in the mailbox via the box's own MX (verified working; Peter's replies can sit ~1h in his provider's queue before arriving — an empty mailbox right after a reply means *wait*, not *broken*). ⚠️ Tried unifying From to `blog-review@waai.me` on 2026-08-28 after a supposed SMTP2GO verification — the relay still 550'd ("sender domain not verified (waai.me)"), and **silently** (sendmail returns 0; postfix bounces later), so the swap was reverted same-day. Before retrying: confirm Sending → Verified Senders on the SMTP2GO account the box relays through, and test with a one-off sendmail first.
- **7-bit ASCII on the wire**: GLM drafts contain em-dashes/curly quotes; raw UTF-8 piped to sendmail triggers SMTPUTF8, which the relay rejects (5.6.7 bounce). The script builds a proper MIME `EmailMessage` (RFC2047 headers + quoted-printable body) before handing it to `/usr/sbin/sendmail`.
- Cron runs as **root** (Maildir under `/home/waai` needs root) with `HOME=/home/ubuntu` so state stays in ubuntu's home, and the script sets `GH_CONFIG_DIR=/home/ubuntu/.config/gh` so `gh pr merge` uses the LiveRock auth.
- `gh api` does **not** accept `--repo` (put the repo in the endpoint); `gh --jq` prints string results **unquoted** (`.content` comes back as raw base64, not JSON).
- To re-send a review email while testing: `sudo python3 -c "import json;p='/home/ubuntu/.local/state/waai-blog-review/state.json';s=json.load(open(p));s['prs'].pop('<N>',None);json.dump(s,open(p,'w'))"` then rerun the script. The state file ends up root-owned (cron is root) — that's expected.
- **Brand prompt:** embedded in `generate-blog-post.mjs` (`SYSTEM`) — waai positioning, features, the Meta competitive context, voice, and a hard "strict JSON only" instruction. Keep it in sync with product changes so posts stay accurate.

## Trial Landing Pages (/trial — Facebook ads)

Ad landing pages with the real signup form embedded, live at `/trial/` (generic) and `/trial/[industry]/` (9 slugs from `src/data/industries.ts`) × all 10 locales = **100 pages**, built by `src/components/page/TrialPage.astro` + 4 thin route files (`pages/trial/index|​[industry].astro`, `pages/[lang]/trial/…`). Industry flavor comes from `getIndustry(slug, lang)` overlays (zero extra translation); `trial.*`/`page.trial.*` UI keys live in `en/zh/ms/ta` dictionaries (other locales fall back to EN). `{days}` interpolates from the live API via memoized `src/lib/trialDays.ts` (trial_days=30). Hook copy ("30-Day Free Trial · No Credit Card") is factual — trial plan is 30 days, signup takes no payment info.

- **noindex + sitemap filter**: `BaseLayout` takes `noindex?: boolean` (renders `noindex, follow`); `astro.config.mjs` sitemap `filter` drops any path with a `trial` segment (ALL locales — a `startsWith('/trial/')` filter misses `/zh/trial/…`).
- **Layout**: uses `BaseLayout` directly (no site header/footer — form above the fold); slim brand bar + floating WhatsApp button remain. Not in `navigation.ts` by design.
- **SignupForm** (`src/components/signup/SignupForm.astro`) is shared by `/signup` (`variant="page"`) and LPs (`variant="landing"` — hides prereq box/plan grid/onboarding note, renders hidden trial radio). **Invariant: render at most once per page** (hard-coded DOM ids: `signup-form`, `verify-section`, `signup-i18n`). Now a shared external chunk (was inline on /signup) — same module semantics.
- **Param contract (client-side JS, static site)**: `?name&email&phone&company&ref` pre-fill fields (ref beats the `888888` default); `ref, utm_*, fbclid` + build-time `data-industry` are captured and forwarded as query params on the verify-success redirect (`…/auth/callback?src=trial&industry=…&ref=…#access_token=…`). Signup POST payload unchanged; waaiChat must opt in to read the attribution params. **⚠️ `ref` is waaiChat's real-customer referral program field — never put ad codes in it; ad attribution uses `utm_*` only.** The `?ref=` prefill exists for genuine referrer links (`waai.me/signup?ref=<REAL-CODE>`).
- **Meta Pixel**: `BaseLayout` emits the fbevents snippet on every page **only when `META_PIXEL_ID` is set at build time** — the value lives in `.env.production` (gitignored, loaded by Vite only for production builds; dev server never sees it). `Lead` fires on signup POST success, `CompleteRegistration` on email verify (400 ms beacon-flush delay before redirect). GA4 mirrors: `generate_lead` / `sign_up`. Pixel off → all `fbq?.()` no-ops. ⚠️ `<noscript set:html={…}>` breaks the Astro compiler — don't re-add a noscript pixel img. Full ads setup/runbook: `docs/facebook-ads-guide.md`.
- Ad final URLs must use trailing slashes (`/trial/restaurants/`) — site is `trailingSlash: 'always'`.

## Analytics (GA4 + AWStats)

Two layers: a client-side **GA4** tag (events/engagement/conversions) and a server-side **AWStats** portal (raw visit/host/bandwidth/referrer log analysis).

### GA4 (client-side, in-repo)
- Snippet in `src/layouts/BaseLayout.astro` (frontmatter `gaId`, conditional render). **ID `G-F7QSVZPEX8`** hardcoded (override via `GA_MEASUREMENT_ID` env var). Measurement IDs are public.
- Fires on every page across all 10 locales (paths carry the locale prefix). Enhanced measurement on by default.
- No consent/cookie banner yet — fine for SG under PDPA; add one + Google Consent Mode v2 before targeting EU/UK/CA.

### AWStats (server-side, NOT in-repo)
- Portal: `https://waai.me/awstats/awstats.pl?config=waai.me` — HTTP Basic auth, user `waai`, password in `/home/waai/.awstats-htpasswd` (hash; reset: `sudo htpasswd -iB /home/waai/.awstats-htpasswd waai`). Reads Apache logs `/var/log/virtualmin/waai.me_access_log`; data in `/home/waai/awstats/` (owned by `waai`).
- **Cron:** `/etc/cron.d/awstats-waai` runs hourly as **root** (`awstats.pl -config=waai.me -update`). Root because `/var/log/virtualmin` is `drwx--x--x` (only root can glob rotations). The system `/etc/cron.d/awstats` jobs are commented out.
- **LogFile merge:** `/etc/awstats/awstats.waai.me.conf` `LogFile=` uses `logresolvemerge.pl …/waai.me_access_log* |` so logrotate rotations are never lost.
- **Icon-alias gotcha:** `DirIcons="/awstats-icon"`. The vhost `ScriptAlias /awstats → awstats.pl` prefix-matches every `/awstats*` URL incl. `/awstats-icon/…`, so without an explicit alias all icons hit the CGI and return HTML → broken images. Fix (in both `:80`+`:443` vhosts of `/etc/apache2/sites-available/waai.me.conf`, placed **before** the `ScriptAlias`):
  ```
  Alias /awstats-icon /usr/share/awstats/icon
  <Directory "/usr/share/awstats/icon">
      Require all granted
  </Directory>
  ```
  Icon dir is `/usr/share/awstats/icon` (NOT `wwwroot/icon`). ⚠️ Re-saving the waai.me virtual server in Virtualmin may rewrite the vhost and drop this alias — re-add if icons break again.

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Static build to `dist/` |
| `./deploy.sh` | Build + deploy to production |
