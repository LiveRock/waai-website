# Progress Log — waai.me

Running log of significant work sessions. Newest first.

## 2026-10-21

### Blog images restyled: photoreal people/workplaces (replacing abstract art)
Peter: images should show "real objects like humans, workplaces" — the flat-vector prompts were producing color fields. `generate-blog-image.mjs` now prompts for **photorealistic lifestyle scenes** with a keyword→scene map (`SCENE_RULES`, 12 rules + small-business-owner default): salon/spa → stylist with client, clinic → front-desk receptionist, tutoring → teacher with students, retail/catalog → shop shelves, booking/deposit → front desk, agency/reseller → consultant + client, broadcast → campaign dashboard, chatbot/api → product team, pricing → meeting-room laptop, ecommerce → packing workshop. All 17 images regenerated — including the 2 posts stuck on the brand-gradient fallback yesterday (quota behaved this run: one transient 402, retried). Weekly automation inherits the style.
Sharpness findings: **free flux is inherently soft/airbrushed** and **Pollinations caps output at ~1059×556 no matter the requested size** (tested 1800×945 → still 1059×556), so the pipeline upscales ~1.2× — added `-unsharp 0x1.2+0.8+0.02` after resize; `flux-realism` tested and rejected (same softness, ignores the scene). At social-card size (~500px) the finals read as normal photos; full-res pixel-peeping shows the ceiling. **Upgrade path if insufficient: Pexels API** (real stock photography, free key required from Peter). QA via neutral-prompt vision checks on 7 images (scenes + subjects confirmed; watermark defenses still hold). A live preview folder (`waai.me/preview-blog-images/`) was attempted for Peter's eyeball but correctly blocked by the permission classifier — shipped directly instead; rollback = revert `430ddd5`.

### Split-card redesign — photo panel at native resolution (Peter: "images are still blurry")
Root cause of the persistent blur wasn't processing — it was the **full-bleed design**: flux's capped wide render (1059×556) was UPSCALED ~1.2× to 1200×630 and veiled under the title scrim. Key discovery: **the free-tier cap is ~0.59MP of AREA at any aspect** (wide 848×1059→687×858 portrait honors aspect) — so requesting **portrait 4:5** yields ~687×858, 1.8× the pixels a 520×630 photo panel needs, and the panel **DOWNSCALES to native sharpness**. New layout: left 680px dark-teal brand panel (category, white title, waai.me mark — vector-crisp text, better small-preview legibility) + right 520×630 unobstructed photo + thin wa-green seam. Watermark defense rebuilt for scrim-less photos: North-anchored aspect crop + feathered blur patch + dark bottom fade — OCR-verified "no text" survives. Full-card QA verdict: "clean, on-brand, professional-looking; reads as polished at share-card size". Pixel-level flux softness at 1:1 zoom remains the keyless ceiling — escalation paths documented (pollinations pollen key ≈ cleanest; local Real-ESRGAN ≈ free but heavy for CI). All 17 regenerated, zero fallbacks.

### Sharpness pass — pushed the pipeline to the free-tier ceiling (Peter: "reduce softness, Pexels API is dead")
Five stacked levers, all in `generate-blog-image.mjs`: camera-language prompt tokens (EOS R5/50mm, tack-sharp, detailed skin+fabric); **dual-radius unsharp (0x0.8+1.4 fine + 0x2.5+0.5 local-contrast) + `-modulate 100,108` + sigmoidal 1.5x50%** — **+63% edge-contrast measured A/B on identical source** (and a lesson: the vision diff model confidently reported the sharper variant as *softer* — vision flip-flops on sharpness direction, ImageMagick `-edge` standard-deviation is the ground truth); scrim veil lightened (full-frame tint max 0.55 → 0.32 — the opaque title band alone carries text contrast, and the heavy veil was reading as a washed photo); **feathered watermark patch** (the hard-edged paste left a faint rectangular seam — edge-feathered via shave/border/blur alpha mask; SE-corner OCR re-verified only "waai.me" survives); JPEG q85→q90. All 17 regenerated. Probed and closed the remaining service levers: 1059×556 cap applies to **flux, sana AND flux-realism** alike; `steps` param → 402; `/models` lists only sana; paid **pollen key** (enter.pollinations.ai) is the sole upgrade path left. Weekly automation inherits everything.

## 2026-10-20

### Per-post blog feature/og images (all 17 posts + weekly automation)
Every blog post now ships a unique `heroImage` (1200×630 JPEG in `public/images/blog/`) — used as og:image, twitter card, JSON-LD image and in-page hero (`BlogPost.astro` already had the plumbing; it was just never populated). Composition: Pollinations flux art (deterministic seed from slug hash, teal/purple palette) + ImageMagick overlay (dark-teal scrim, category label, white Inter title, waai.me mark). New `scripts/generate-blog-image.mjs` (CLI `--all` / `<post.md> [--force]`); `generate-blog-post.mjs` calls it for every new weekly post, non-fatal on failure (brand-gradient fallback → weekly loop can never break). Battles: **Pollinations watermarks despite `nologo=true`** (3-layer defense: crop 94×84% + bottom-right blur/darken + opaque scrim band — verified clean by zoomed neutral OCR), **free tier = 1 image/45s/IP** (script paces 47–50s), error responses are 322B JSON (<5KB guard). zh/ms posts get art-only (no CJK font bundled). 15/17 have real art; 2 (resell guide, agentic-commerce) on the gradient card after this IP exhausted the quota — re-run `--force` later if wanted. Inter TTFs in `scripts/assets/`.

### Directory-submission backlink campaign kit
`docs/directory-submissions.md` + `docs/submission-tracker.csv` (44 pre-vetted targets across AI/agent/SaaS/launch tiers, each pre-assigned one of 4 distinct copy variants — AI-directory / SaaS-alternative-vs-Wati-SleekFlow-respond.io / AI-agent / launch — plus facts pack, submission checklist, KPI targets). PNG logo variants (1024/512/256) exported to `public/images/logos/`. **Blocked on Peter: 5–8 product screenshots 1920×1080** — sole gap before batch 1. Also identified competitor **Merlion Labs** (SG WhatsApp-AI-agent startup, S$29, Meta partner) via r/singaporestartups.

### SEO: "waai" brand-query invisibility — schema + canonical-redirect fixes
Diagnosis: site indexed (`site:waai.me` ✓) but ranking for nothing, incl. bare "waai" — ~zero referring domains, entity disconnected (Peter's own Play Store app outranked the site), and **http:// + https://www. served the full site with 200, no redirects** (3 duplicate copies of 605 pages).
- Organization JSON-LD: `sameAs` += the 4 new social profiles; `alternateName: "waai.me"` (every page, all locales).
- **Apache canonical 301s** in `/etc/apache2/sites-available/waai.me.conf` (backup `.bak-pre-seo-redirects`): port 80 → `https://waai.me` (skips `/.well-known` for ACME + `/mail/config-v1.1.xml` for mail autoconfig); `www.` → apex on 443. Verified: SSL-renewal path, awstats (401 auth), webmail redirect, autoconfig all intact. Same Virtualmin re-save hazard as the awstats-icon alias — documented in CLAUDE.md.
- Peter's homework: Search Console setup (DNS TXT via GoDaddy → sitemap → request indexing) + waai.me as website in all 4 social bios. Bare "waai" needs the backlink campaign (contested term: Wikipedia manga magazine, WAAI FM, Afrikaans/Japanese dictionary word, waai.co.il/the-waai.com/waai.net).

### Footer social links
Facebook (waai.smart.assistant), Instagram (waai.me), YouTube (@waai-me), TikTok (@peterwaailum) as inline simple-icons SVGs in the footer brand column below the store badges (same pattern as the Meta Tech Provider lockup; gray → waai-green hover). TikTok share-tracking params stripped.

## 2026-09-23

### Prohibited-uses T&C clause + waai.me as single T&C source (PRs #45/#46)
- Gap found: §5 Acceptable Use had only generic language ("violate any applicable law", "obscene material") — no enumerated vices. Added a **Prohibited Uses** paragraph (gambling/betting/lotteries incl. online · porn/adult content/escort services · illegal drugs/controlled substances/paraphernalia · weapons/explosives · prostitution/human trafficking · money laundering/terrorist financing · fraud/scams/phishing · counterfeit goods · catch-all) plus enforcement: **immediate termination/suspension without prior notice and without any refund**, accrued fees remain payable, possible disclosure to authorities. Last updated → September 23, 2026.
- **Single source of truth**: the waaichat app's `/terms` route now redirects here and all its in-app links open `waai.me/terms/` directly (waaichat PR #562). Its old 5-locale terms text in `site_content` was replaced with a localized pointer so nothing can drift; the app's SA legal editor is privacy-only. **Future T&C edits happen only in this repo** (recorded in both CLAUDE.md's).

## 2026-09-20

### Golden Tay (TGT Advisory) testimonial + marquee logo
- Replaced the Priya Sharma / CloudServe Solutions testimonial with **Golden Tay, Founder & Principal Advisor, TGT ADVISORY SOLUTIONS** (quote supplied verbatim by Peter) in `src/data/testimonials.ts` + all 9 locale overlays (role/quote translated, company kept as proper noun).
- `Testimonials.astro` now renders the `avatar` field as a circular `<img>` (initials-circle fallback) — the field was previously dead; the old `placeholder-*.svg` paths pointed at files that never existed (blanked). TGT logo square-cropped 160×160 → `public/images/testimonials/tgt-advisory.jpg` (white-on-black GT monogram source). Shows on homepage + all 100 trial LPs (shared component).
- **LogoCarousel** ("Trusted by businesses worldwide"): TGT monogram flattened to flat `#374151` on transparent (luminance→alpha, `-level 15%,85%` to de-JPEG the edges) → `public/images/logos/tgt-advisory.png` 194×200, added as 3rd logo. Seamless loop intact (12 % 3 === 0 keeps marquee halves identical; keep logo count a divisor of 12).

### Terms & privacy: cancellation/no-refund + 6-month trial inactivity (PR #43)
- Terms §4: cancellation effective at end of billing period, no refunds for unused annual months/portion, account reverts to trial, data retained until self-deletion or the inactivity policy. §10: user-initiated deletion + trial accounts inactive 6 months (no sign-ins and no agent conversations) may be auto-deleted. Privacy §9 aligned (post-cancellation retention + inactivity deletion). Dates → September 20, 2026.
- Mirrors the waaichat implementation (PR #544): new `daily_inactive_trial_purge` cron (09:31, 180-day rule, soft-delete → existing 30-day hard-delete pipeline with support restore), localized courtesy email, and app terms/privacy ×5 locales pushed to the live DB. First possible purge ≈ 2027-01-02; 0 accounts eligible at deploy.

## 2026-09-16

### SEO overhaul: og image, structured data, keyword titles, /solutions hub
Marketing-driven SEO pass (Peter chose **Singapore-forward** positioning). Audit found the technical base sound (canonicals, hreflang, noindex trial LPs, sitemap filtering) but four defects and big structural gaps. All fixed in one cycle:

- **Fixed the sitewide og:image 404** — every page referenced `/images/og-default.png` which never existed (WhatsApp/FB/X shares had no preview image). Now ships `public/images/og-default.jpg` (1200×630, ~60 KB), generated by `scripts/generate-og-image.mjs` (renders `scripts/og-card.html` in headless Chromium → JPEG; brand gradient, logo, tagline, value line, Meta Tech Provider pill, waai.me).
- **robots.txt**: sitemap URL fixed (`/sitemap-index.xml` — `/sitemap.xml` was a 404), `Disallow: /admin/` + `/awstats/`; `/trial/*` intentionally left crawlable (meta noindex needs crawling).
- **Canonical fixes**: 4 legal pages passed slashless `canonicalPath="/terms"` → mismatched their slashed hreflang (prop removed; default pathname is correct). 404 page dropped its bogus `/404/` canonical + 11 hreflangs (new `BaseLayout` `noCanonical` prop) + got `noindex`.
- **Structured data (JSON-LD, was zero site-wide)** via new `JsonLd.astro`: Organization (+contactPoint, sameAs store listings) + WebSite on every page; SoftwareApplication + AggregateOffer (SGD 20–99, build-time API prices) + FAQPage (8 pricing FAQs, localized) on /pricing; BreadcrumbList on feature/industry/solution detail + blog posts; BlogPosting (dates, author, publisher, image) on posts. No aggregateRating — testimonials aren't verified reviews.
- **Head completeness**: `article:published_time`/`modified_time` on posts, `og:image:width/height/alt`, `og:locale:alternate` ×9, RSS `<link rel=alternate>` on blog pages.
- **Titles/descriptions rewritten keyword-first + Singapore-forward, all 10 locales** (AI-authored per convention): pricing/blog/contact/signup/integrations/gw/features/industries indexes + new `page.industry.titlePattern`/`page.solution.titlePattern` replacing the `— waai | waai.me` double-brand concat. `{days}` interpolated from the live API. Homepage title → "waai — WhatsApp AI Agent for Singapore Businesses".
- **H1s added** to the 5 pages that had none (pricing, blog index, contact, signup, integrations) via `SectionHeading as="h1"` prop (zero visual change).
- **New `/solutions/` index page** (×10 locales, `SolutionsIndex.astro`) — fixes the breadcrumb target (was `/solutions/marketing`), footer Solutions column now links the hub + Industries.
- **Sitemap lastmod** for blog URLs only (updatedDate ?? pubDate via frontmatter regex map in `astro.config.mjs`); static pages deliberately bare.
- **Blog de-duplication**: retitled the 2 near-duplicate posts (salons setup-walkthrough angle; ms tutoring quick-tips angle) to stop cannibalization.
- Verified: 566 pages build green; all JSON-LD parses with expected types per route; titles ≤ ~60 chars incl. suffix; zh/ja locale spot-checks; h1 counts; trial pages untouched (noindex + self-canonical intact).

## 2026-09-12

### Meta "Official Meta Tech Provider" badge — hero + footer + trial LPs
- Peter asked for a front-page mention + Meta logo, then "match meta badge" (use Meta's verbatim partner-badge wording) and "elsewhere too" (repeat beyond the hero).
- **Three placements**: homepage hero pill (next to the "Your WhatsApp AI Agent" badge, same glass-pill styling; wraps to a centered second row on mobile); Footer brand column under the tagline (every `PageLayout` page × 10 locales — i.e. site-wide except trial LPs/404); `/trial` slim brand bar, right-aligned opposite the waai.me logo (all 100 LPs).
- One shared EN-only i18n key `meta.techProvider` — program label, locales fall back to EN (same convention as `nav.blog`). Meta loop = monochrome inline SVG from simple-icons, `fill="currentColor"` so each placement tints it (white hero / gray-300 footer / gray-500 trial bar). No image assets added.
- Verified: build 545 pages; DOM checks EN + zh, desktop + 390px (hero pills wrap cleanly, trial-bar lockup inside viewport); vision QA on hero, footer, and trial brand bar; zero console errors.

## 2026-09-11

### Pricing page: messages/month CSW/FEP footnotes + Meta-charges disclaimer
- The messages/month quota now carries a `*` on the /pricing plan cards and the comparison-table row label — footnoted below the table: `*Within Customer Service Window (CSW)` and `*Within Free Entry Point (FEP)` as teal links to Meta's official docs (both anchors verified live), then a bold **WhatsApp Marketing Messages** heading with Peter's exact disclaimer copy (charges vary by Meta pricing / destination country / message category / conversion type; pricing subject to change without notice).
- The `*` lives at the PricingPage call sites only — the `pricing.nMessages` i18n key is shared with SignupForm's copy-pasted `msgLine`, and /signup intentionally stays unmarked (verified leak-free).
- 4 new `pricing.footnote.*` keys translated in all 10 locales (AI-authored as usual).
- **Follow-up same day (Peter feedback): removed the "Broadcasts / month" comparison row** — broadcast sends are WhatsApp marketing messages, so the Meta-charges footnote below the table covers them (the row's info would contradict the disclaimer). Dead `pricing.row.broadcastsMonth` key deleted from all 10 dictionaries. Re-verified: row gone (EN + zh), footnote/FAQ/markers intact, zero console errors.
- Verified headless: EN + zh markers/footnotes/links (`target=_blank rel=noopener`), signup unaffected, FAQ intact, zero console errors; build green at 545 pages.

## 2026-09-10

### Hero video on mobile + Book-a-Demo CTA
- **Phone mockup now visible on mobile** (was `hidden lg:flex`): stacks below the hero text. Mobile shows the poster + a green play overlay (`data-hero-play`, `lg:hidden`) — **tap starts playback with sound** (tap = the user gesture autoplay policies require; zero video data until the visitor opts in, poster only). Once started, scrolling away pauses and returning resumes (`userStarted` flag in the gate script). Desktop behavior unchanged (muted autoplay loop + sound button). Floating badges went responsive (`-left-6`/`-right-6` below `lg`, 96px only on desktop) so they don't overflow a 390px screen. Verified in headless Chromium: desktop regression clean, mobile poster/overlay/tap-unmuted-play/pause/resume all pass, badges zero viewport overhang, no console errors.
- **Hero secondary CTA is now "Book a Demo"** → https://cal.com/peter-rock-steady-crew/30min in a new tab (`CTAButton` gained an `external` prop for `target=_blank rel=noopener`). Uses the existing-but-unused `cta.bookDemo` key (already translated in all 10 locales). "Talk to Sales"/contact form remain via header nav.
- **Blog-review daemon fix** (separate commit, landed Sep 9 late): Apple Mail's UTF-8 BOM in front of the quoted section broke the `^On … wrote:` quote matcher, so Peter's YES for PR #36 matched both YES and NO → ignored as ambiguous. `load_mail()` now strips zero-width chars; verified against the real Sep 8 reply. Cron runs the script from the repo checkout, so the fix went live on commit.

## 2026-09-09

### Hero phone: static chat mockup → waai promo video
Replaced the desktop hero phone screen's fake WhatsApp chat (HTML bubbles + `home.hero.chat.*` i18n keys) with the waai Short "waai Changes Everything" (`youtu.be/nBuenBaCmE8`), playing as a muted loop.
- **Asset**: YouTube blocks every download route from this server's IP (yt-dlp all player clients, real-browser cookie harvest, nocookie embed → Error 153, Piped + Invidious instances all bot-walled) — Peter uploaded the original MP4 via Virtualmin to `/home/waai/`. Re-encoded with ffmpeg: 720×1280 H.264, audio stripped, CRF 27/preset slow, `+faststart` → **2.6 MB** (source 33 MB / 1080p / 24.6 s). Poster = hand-picked frame at 14 s (sharp WhatsApp-chat-UI close-up; the early café frames are motion-blurred). Both live in `public/videos/`.
- **Playback gating** (`is:inline` script in `Hero.astro`, no `autoplay` attr): plays only when viewport ≥1024px **and** no `prefers-reduced-motion` **and** IntersectionObserver on-screen — mobile downloads nothing beyond moov metadata, reduced-motion users get the static poster, scrolling away pauses it. Same run-gate pattern as GalaxyCanvas.
- **Badges symmetrized**: right "AI Powered" badge `-right-12 bottom-32` → `-right-16 bottom-40` (64px off-frame, matching the left badge) — fixes the pre-existing clip onto the screen; verified no viewport overhang at 1024/1280/1440.
- **i18n**: removed the 8 dead `home.hero.chat.*` keys from all 10 locale dictionaries (video is language-neutral).
- **Verification**: full gate suite in headless Chromium — autoplay/muted/advancing, loop, offscreen pause + resume, reduced-motion pause + resume, mobile zero-mp4-requests, zero console errors. Caveat found: Playwright's headless shell **cannot decode H.264** (`canPlayType: ""`, `networkState: NO_SOURCE`) — playback logic was proven with a temporary WebM swap; the poster/geometry checks used the real files. Final poster confirmed by direct pixel crop of the screenshot.

#### Follow-up same day (Peter feedback)
- **Badges pushed further out**: `-left-16`/`-right-16` → `-left-24`/`-right-24` (96px off-frame, only ~65–75px contact with the phone; the 64px grid gap absorbs the overhang at 1024px so nothing collides).
- **Sound toggle added**: re-encoded the MP4 **with** AAC 96k audio (~3.0 MB total). A small dark circular button (`data-hero-sound`, speaker icon, bottom-right over the video) unmutes — the click provides the user gesture autoplay policies require — and click-again re-mutes; swaps icon + `aria-pressed` + localized `aria-label` (`home.hero.video.soundOn/soundOff`, en.ts only, icon-only button). Verified end-to-end with an audio-bearing WebM swap (unmute keeps playing at volume 1; re-mute works; zero console errors).

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
