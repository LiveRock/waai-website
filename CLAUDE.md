# waai.me Marketing Website

## Overview
Marketing website for WAAIChat — WhatsApp AI Agent platform. Static site built with Astro, deployed to waai.me. Pricing is dynamically fetched from the WAAIChat backend database.

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
- **Pricing:** Fetched at build time from WAAIChat API (`GET /billing/public/plans`) via `src/lib/api.ts`

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
│   │   ├── home/        # Homepage sections (Hero, FeaturesGrid, AICapabilities, Stats, etc.)
│   │   ├── layout/      # Header, Footer
│   │   └── shared/      # Accordion, Card, CTAButton, SectionHeading
│   ├── data/            # Content data (features, industries, solutions, testimonials, navigation)
│   ├── layouts/         # BaseLayout (head/meta), PageLayout (header + footer wrapper)
│   ├── lib/             # api.ts (WAAIChat API client)
│   ├── pages/           # index, pricing, signup, contact, blog, terms, privacy, features/[slug], industries/[slug], solutions/[slug], integrations/*
│   └── styles/          # global.css (Tailwind v4)
├── docs/
├── astro.config.mjs
└── deploy.sh
```

## Key Decisions
- Static site (no server) — pricing fetched at build time, not runtime
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

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Static build to `dist/` |
| `./deploy.sh` | Build + deploy to production |
