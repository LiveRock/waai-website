# Progress Log — waai.me

Running log of significant work sessions. Newest first.

## 2026-09-04

### Hero "galaxy" particle effect (OpenAI GPT-6 Astra inspired)
Researched the particle-galaxy hero on OpenAI's GPT-6 Astra announcement page (Three.js WebGL, ~330 KB renderer) and recreated the aesthetic in vanilla Canvas 2D — zero new dependencies. Deployed live after two tuning rounds (v1 too dim → punchier v2 with cursor interaction).
- **New `src/components/home/GalaxyCanvas.astro`** + 2 lines in `Hero.astro`: spiral galaxy of ~600–1100 brand-colored glow-sprite particles (white/wa-green/ai-purple) behind the hero content. 3 log-spiral arms + bright core bulge, rigid-pattern rotation (disk 1 turn/160s — differential rotation was rejected: arms shear into a ring), per-star twinkle/wobble, dark "sky pocket" + core bloom so stars pop on the mid-green gradient.
- **Interactivity**: mouse parallax ±24px (per-star depth factors; touch skips it) and **cursor repulsion** — stars within 130px of the pointer are pushed away and flare ~60% brighter, spring-relaxing back to orbit.
- **Site-first lifecycle safeguards**: pauses offscreen (IntersectionObserver) and on hidden tabs (visibilitychange); `prefers-reduced-motion` → single static frame, no loop (first reduced-motion handling anywhere on the site); DPR capped (1.5 mobile/2 desktop); field rebuilt only on width change >2px; `getContext` fail-safe leaves today's hero untouched.
- **Perf/server**: bundled script ships as a ~4.7 KB hashed/cacheable deferred chunk (outgrew Astro's inline threshold); 100% client-side on a static site → zero server cost. Verified via headless Chromium: pixel-fingerprint tests (static under reduced-motion, animating normally, paused offscreen), cursor-region alpha probe (238 vs 32 background), desktop+mobile vision checks (legibility clean, "would pass a professional design review").

## 2026-08-23

### New product features on the site: Booking, Catalog, CRM
Mirrored the waaiChat product's August launches (Bookings engine, Catalogs, CRM/ads attribution) into the marketing site, benefits-first:
- `src/data/features.ts`: 3 new features (`booking`, `catalog`, `crm`; Pro & Custom) inserted after `ai-chatbot` → 12 total. New icons (`calendar-check`, `package`, `users`) added to BOTH duplicated iconMaps (`FeatureDetail.astro`, `FeaturesIndex.astro`). Cross-linked `relatedFeatures` on ai-chatbot/campaigns/analytics/document-generation.
- Homepage `FeaturesGrid.astro` 6 → 9 cards; hero subhead + `home.ai.c3.body` + `home.features.subtitle` copy updated to name bookings/orders/CRM.
- Pricing: `planFeatureMap` trial/starter += Contacts CRM, pro += Catalog/CRM/Automations; comparison table += 2 feature rows + 4 API-driven quota rows (`max_bookings_monthly`, `max_catalog_products`, `max_contacts`, `max_broadcasts_monthly` — verified live on `/api/public/plans`); offline-fallback trial period corrected 7 → 30 days. Signup `signupFeatureMap` likewise.
- Solutions: sales += Catalog Orders + CRM & Ad Attribution (and booking entry rewritten around the native engine); marketing += Ads Attribution & ROAS. NOTE: solution features merge **by index** — new entries appended at END so existing overlay translations stay aligned.
- i18n: `nav.feature.*`, `pf.*`, `pricing.row.*`, `home.features.card.*` keys + full feature overlays translated in all 9 non-EN locales (AI-authored, unreviewed as usual).
- Launch blog post `src/content/blog/whatsapp-booking-catalog-crm-launch.md` (Product, EN).
- Copy guardrails honored: no cart/checkout/payment claims for Catalog v1; no buffer/lead-time/cancellation-window claims for Booking (not in product).

## 2026-08-11

### Referral code mandatory at signup
- `src/components/page/SignupPage.astro`: referral code field now `required`, pre-fills `888888` (URL `?ref=` overrides); submit handler posts `888888` if cleared.
- `src/i18n/ui/en.ts`: added `signup.referralHint` ("Required. Default value: 888888."), placeholder → `888888`.

### Analytics
- **GA4 live** (`G-F7QSVZPEX8`) in `src/layouts/BaseLayout.astro` — fires on all pages across all 10 locales. Cookie banner pending (SG PDPA ok; add before EU/UK/CA targeting).
- **AWStats** (server-side, not in-repo) revived:
  - Backfilled current-month logs (Aug 1–11: 2,216 visits / 1,250 unique) and installed an hourly root cron (`/etc/cron.d/awstats-waai`).
  - Switched `LogFile` to `logresolvemerge.pl` so logrotate rotations are never lost.
  - Reset portal password; fixed broken icons (added `Alias /awstats-icon` before the `ScriptAlias` in both vhosts).
  - See CLAUDE.md "Analytics" section + `awstats-setup` memory for operational detail.
