/**
 * Trial length for marketing copy ("{days}-Day Free Trial").
 *
 * Fetched at build time from the waaiChat public API, memoized at module scope
 * so the ~100 /trial landing pages don't each re-fetch it during a build.
 * Fallback 30 matches the live API value (plan `trial`, trial_days=30).
 */
let cached: Promise<number> | null = null;

async function fetchTrialDays(): Promise<number> {
  for (const url of [
    'http://127.0.0.1:8000/api/public/plans',
    'https://waaichat.hsi.asia/api/public/plans',
  ]) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const plans: { name: string; trial_days: number | null }[] = await res.json();
        const days = plans.find((p) => p.name === 'trial')?.trial_days;
        if (days) return days;
        break;
      }
    } catch {}
  }
  return 30;
}

export function getTrialDays(): Promise<number> {
  cached ??= fetchTrialDays();
  return cached;
}
