# Progress Log — waai.me

Running log of significant work sessions. Newest first.

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
