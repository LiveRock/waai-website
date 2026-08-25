# Facebook Ads + waai.me Trial Pages — Setup & Operations Guide

Everything on the waai.me side is already wired: 100 landing pages (`/trial/` + `/trial/<industry>/` × 10 locales), the signup form with URL pre-fill, Meta Pixel support, and conversion events. This guide covers (A) where the Pixel ID lives, (B) creating the Pixel in Meta, (C) launching your first campaign, (D) the ad-URL cheat sheet, (E) reading results, and (F) troubleshooting.

> **Prerequisite:** the landing pages must be deployed to waai.me first (`./deploy.sh`). Everything below can be prepared before that, but pixel tests and ads need the live site.

---

## A. Where the Meta Pixel ID is saved

**File:** `/home/ubuntu/projects/waai-website/.env.production` (already created, gitignored, ID field empty)

```
META_PIXEL_ID=<paste your pixel ID here>
```

- The site is **static** — the pixel is baked in at **build time**. Setting the ID takes effect on the next `./deploy.sh` (or push to `main`, which triggers the auto-deploy).
- Dev server (`npm run dev`) ignores `.env.production`, so localhost never fires test pixel hits.
- Pixel IDs are **not secrets** (they're visible in every page's HTML), but the file is gitignored anyway in case it later holds real secrets.

**To save it** (from a Claude Code session, `!` prefix runs it on the box):

```
! sed -i 's/^META_PIXEL_ID=.*/META_PIXEL_ID=1234567890123456/' /home/ubuntu/projects/waai-website/.env.production
```

**To verify it's live after deploy:** open any waai.me page → view source → search `fbevents.js`. Or use the **Meta Pixel Helper** Chrome extension. Or Events Manager → your pixel → **Test Events** tab → paste `https://waai.me/trial/restaurants/` and interact.

### What the site fires (already coded — nothing to configure)

| Moment | Meta event | GA4 mirror |
|---|---|---|
| Any page load | `PageView` | (page_view) |
| Signup form submitted → account created (before email verification) | `Lead` | `generate_lead` |
| Email verification code accepted → user redirected into waaiChat | `CompleteRegistration` | `sign_up` |

---

## B. Create the Pixel in Meta (one-time, ~5 minutes)

1. Go to **Events Manager**: https://business.facebook.com/events_manager2 (log in with the Facebook account that owns your Business Manager / ad account).
2. **Connect data → Web → Meta Pixel** (name it e.g. `waai.me`).
3. Skip "install code manually" — the site build already contains the code; it activates when the ID is in `.env.production`.
4. Copy the **Pixel ID** (a 15–16 digit number) → save it per section A → deploy.
5. **Verify domain ownership** (recommended): Business Settings → **Brand Safety → Domains** → Add `waai.me` → verify via **Meta-tag** (tell Olivia to temporarily add the tag to the homepage `<head>`; build+deploy, click Verify, then remove) or **DNS TXT** (the box runs its own DNS — Olivia can add the TXT record).

No Conversions API (CAPI) yet — the pixel is browser-side only, which is fine for SGD-level budgets. Server-side CAPI would live in the waaiChat app later if Meta starts complaining about event coverage.

---

## C. First campaign (Ads Manager)

1. **Campaign level** — Objective: **Leads**. (Leads optimizes for the `Lead` event = account created. That's the right starting event — `CompleteRegistration` fires later in the funnel and is scarcer; switch to it only if Lead volume floods with low-quality signups.)
2. **Ad set level**
   - Conversion location: **Website**. Performance goal: **Maximum number of leads** (Meta finds people likely to submit the form).
   - Pixel: select your `waai.me` pixel; event: **Lead**.
   - Audience: **Singapore**. Start broad-ish: Advantage+ audience with a couple of suggestions (small business owners, the industry's interests). Narrow interest-stacking kills delivery at small budgets.
   - Placements: **Advantage+** (let Meta find cheap inventory — FB/IG feeds and Stories dominate for SG SMBs).
   - Budget: **SGD 15–30/day per ad set** to start. One ad set per industry so costs are comparable.
   - Learning phase: an ad set needs ~50 conversions/week to stabilize — at 1 industry × SGD 20/day expect a week or two of noisy data. Don't edit the ad set while it's learning.
3. **Ad level**
   - Format: single image or video. The 4 homepage videos are on YouTube — download or re-upload natively for the best delivery (native video > YouTube links on Meta).
   - **Website URL:** see the cheat sheet below (section D). Always include `utm_*` + `ref`.
   - Call-to-action button: **Sign Up**.
   - Hook copy angles that match the landing pages: "Still answering the same WhatsApp questions at midnight?", "Your customers message you on WhatsApp. Who answers at 10pm?", "AI agent for your WhatsApp Business number — 30-day free trial, no credit card."
4. **Suggested first verticals (SG):** restaurants, fitness, professional-services — then healthcare, education.

---

## D. Ad URL cheat sheet

```
https://waai.me/[locale/]trial/[industry]/?utm_source=meta&utm_medium=paid&utm_campaign=<campaign>&utm_content=<creative>
```

| Slot | Values |
|---|---|
| `[locale/]` | omit for English, or `zh/` `ms/` `ta/` (translated pages) |
| `[industry]` | `restaurants` `fitness` `professional-services` `healthcare` `education` `ecommerce` `real-estate` `hospitality` `automotive` — or omit `/trial` entirely for the generic page |
| `utm_campaign` | e.g. `sg-restaurants-sep26` (keep per-ad-set, lowercase, no spaces) |
| `utm_content` | e.g. `video-a` / `image-b` (per creative, for GA4 breakdowns) |

**Examples:**
- `https://waai.me/trial/restaurants/?utm_source=meta&utm_medium=paid&utm_campaign=sg-restaurants-sep26&utm_content=video-a`
- `https://waai.me/zh/trial/fitness/?utm_source=meta&utm_medium=paid&utm_campaign=sg-fitness-zh`

**Optional pre-fill params** (useful if you ever email/link directly): `?name=`, `?email=`, `?company=`, `?phone=` pre-fill the signup form. Facebook cannot inject the user's details into a click URL — the form itself collects them.

**⚠️ Do NOT use `?ref=` in ad URLs.** The referral code is a real waaiChat feature — it identifies which actual customer referred a signup (mandatory field, default `888888`). Made-up ad codes like `FBAD01` would be posted to waaiChat as a referral code, polluting or failing its validation. **Ad attribution rides entirely on the `utm_*` params**, which the site captures and forwards to waaiChat automatically. The `?ref=` pre-fill mechanism exists for the genuine referral program: real referrers can share links like `waai.me/signup?ref=<THEIR-CODE>` and the field fills itself.

Trailing slash matters (`/trial/restaurants/` not `/trial/restaurants`).

---

## E. Reading results

- **Meta Events Manager** → your pixel → *Overview*: volumes of `PageView` / `Lead` / `CompleteRegistration`; *Test Events* for live debugging.
- **Ads Manager**: cost per result = cost per `Lead`. Compare across industries (one ad set each). Expect CPL anywhere SGD 5–40 early on; judge after ~2 weeks.
- **GA4** (waai.me property `G-F7QSVZPEX8`): `generate_lead` / `sign_up` events with `industry` parameter; Realtime report during a campaign launch to confirm flow. UTMs show under Traffic acquisition.
- **End-to-end attribution**: when a verified signup lands in waaiChat, the redirect URL carries `?src=trial&industry=<slug>&ref=<code>&utm_*` — waaiChat needs to opt in to log these (separate task on the waaiChat repo; ask Olivia to wire it when ready).
- **AWStats** (`https://waai.me/awstats/awstats.pl?config=waai.me`) — raw server-side traffic as a sanity check against pixel undercounting.

**Funnel math to watch:** PageView → Lead (form completion, ~2–10% is decent for cold traffic) → CompleteRegistration (email verified — check the email isn't landing in spam; a low Lead→Complete ratio is usually deliverability, not disinterest).

---

## F. Troubleshooting & operations

| Symptom | Check |
|---|---|
| Pixel not in page source | `.env.production` has the ID + a deploy ran after saving it |
| **Events Manager shows "no activity"** | **Overview lags 30+ min (longer on a new pixel).** The live view is the **Test events** tab, not Overview. Quick sanity hit: open `https://www.facebook.com/tr/?id=<PIXEL_ID>&ev=ManualPing` — blank white page = Meta accepted an event; a "ManualPing" event appears in Events Manager soon after |
| **Your own browser fires nothing** | **Edge "Tracking prevention" (Balanced) silently blocks the pixel** — turn it Off (edge://settings/privacy) and hard-reload. Also: ad-blocker extensions, antivirus HTTPS-scanning, router DNS filters. Phone-on-cellular bypasses all of it |
| DevTools beacon check | Network tab filter: the **pixel ID** (not `/tr?` — the real URL is `/tr/?`, so that filter matches nothing). Expect `www.facebook.com/tr/…` 200 requests |
| Ads Manager shows no Lead events | Test Events tab; confirm ads point at `/trial/...` (not /signup — that page has the pixel too, but industry attribution is lost) |
| Signups failing with referral error | waaiChat validates `ref` — remove `ref` from URLs (see caveat in D) |
| Want to change landing-page copy | `trial.*` keys in `src/i18n/ui/{en,zh,ms,ta}.ts` — rebuild + deploy |
| Want a new industry page | Add an entry to `src/data/industries.ts` — the `/trial/<slug>/` pages generate automatically |
| EU/UK targeting | The pixel fires without a consent banner — fine for SG/PDPA, **not** for EU/UK (needs consent mode). Keep targeting SG for now |

**Consent note:** Singapore PDPA doesn't require an opt-in banner for analytics pixels. If you ever target EU/UK/CA, add a consent banner + Google Consent Mode v2 (and Meta's Limited Data Mode) first.
