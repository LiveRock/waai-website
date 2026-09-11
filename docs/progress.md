# Progress Log — waai.me

Running log of significant work sessions. Newest first.

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
