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
- **Homepage video carousel** — `VideoCarousel.astro` (rendered after Hero + LogoCarousel) shows 4 waai YouTube clips in a scroll-snap carousel with prev/next arrows + dot indicators. Click-to-play facade: thumbnails swap to a lazy `youtube-nocookie.com` iframe on click (fast, privacy-friendly — no heavy iframes on page load). Video IDs + titles live in `src/data/videos.ts` (titles editable for marketing). Section heading is a single-line "why not?" in `wa-green-dark`; interactivity uses an `is:inline` script (same convention as the pricing toggle)

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Static build to `dist/` |
| `./deploy.sh` | Build + deploy to production |
