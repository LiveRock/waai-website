/**
 * Machine-readable pricing for AI agents and integrations — /pricing.md.
 *
 * Same build-time sources as PricingPage.astro (plans + onboarding settings,
 * with hardcoded fallbacks if both endpoints are unreachable). Plain markdown:
 * no JS, no rendering, trivially parseable by any LLM. Served at
 * https://waai.me/pricing.md and referenced from llms.txt + /pricing/.
 */
import type { APIContext } from 'astro';

const SITE = 'https://waai.me';

interface Plan {
  name: string;
  display_name?: string | null;
  description?: string | null;
  price_monthly: number | null;
  price_yearly: number | null;
  max_qa_pairs: number | null;
  max_flows: number | null;
  max_messages_monthly: number | null;
  max_respondents: number | null;
  max_web_pages: number | null;
  max_drive_sends_monthly: number | null;
  max_qa_translations_per_lang_monthly: number | null;
  max_flow_translations_per_lang_monthly: number | null;
  max_bookings_monthly: number | null;
  max_booking_branches: number | null;
  max_booking_services: number | null;
  max_catalog_products: number | null;
  max_contacts: number | null;
  trial_days: number | null;
}

const PLAN_URLS = [
  'http://127.0.0.1:8000/api/public/plans',
  'https://waaichat.hsi.asia/api/public/plans',
];

const ONBOARDING_URLS = [
  'http://127.0.0.1:8000/api/site-content/onboarding_service_settings',
  'https://waaichat.hsi.asia/api/site-content/onboarding_service_settings',
];

// mirrors PricingPage's hardcoded fallback (cents)
// Prices only (cents) — quotas deliberately omitted: never publish invented numbers.
const FALLBACK_PLANS: Plan[] = [
  { name: 'trial', display_name: 'Trial', description: null, price_monthly: 0, price_yearly: 0, trial_days: 30 },
  { name: 'starter', display_name: 'Starter', description: null, price_monthly: 2000, price_yearly: 22000, trial_days: null },
  { name: 'pro', display_name: 'Pro', description: null, price_monthly: 9900, price_yearly: 99000, trial_days: null },
  { name: 'custom', display_name: 'Custom', description: null, price_monthly: null, price_yearly: null, trial_days: null },
];

const QUOTA_ROWS: [keyof Plan, string][] = [
  ['max_messages_monthly', 'AI messages / month'],
  ['max_qa_pairs', 'Knowledge-base Q&A pairs'],
  ['max_flows', 'Logic flows'],
  ['max_contacts', 'Contacts (CRM)'],
  ['max_bookings_monthly', 'Bookings / month'],
  ['max_booking_branches', 'Booking branches'],
  ['max_booking_services', 'Booking services'],
  ['max_catalog_products', 'Catalog products'],
  ['max_web_pages', 'Web pages (AI training)'],
  ['max_drive_sends_monthly', 'Document sends / month'],
  ['max_qa_translations_per_lang_monthly', 'Q&A translations / language / month'],
  ['max_flow_translations_per_lang_monthly', 'Flow translations / language / month'],
];

const sgd = (cents: number | null | undefined) =>
  cents === null || cents === undefined
    ? null
    : `S$${cents % 100 === 0 ? (cents / 100).toLocaleString('en-SG') : (cents / 100).toFixed(2)}`;

async function fetchFirst<T>(urls: string[], fallback: T, parse: (json: unknown) => T): Promise<{ data: T; live: boolean }> {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) return { data: parse(await res.json()), live: true };
    } catch {}
  }
  return { data: fallback, live: false };
}

export async function GET(_context: APIContext) {
  const plansRes = await fetchFirst<Plan[]>(PLAN_URLS, FALLBACK_PLANS, (json) => json as Plan[]);
  const plans = plansRes.data;

  const onboardingRes = await fetchFirst<{ starter: number; pro: number }>(
    ONBOARDING_URLS,
    { starter: 9900, pro: 29900 },
    (json) => {
      const raw = (json as { content?: unknown }).content;
      const cfg = typeof raw === 'string' ? JSON.parse(raw) : raw;
      return {
        starter: cfg?.starter?.fee_cents ?? 9900,
        pro: cfg?.pro?.fee_cents ?? 29900,
      };
    }
  );
  const onboarding = onboardingRes.data;

  const trialDays = plans.find((p) => p.name === 'trial')?.trial_days ?? 30;
  const quotaLines = (p: Plan) =>
    !plansRes.live ? '' :
    QUOTA_ROWS.map(([key, label]) => {
      const v = p[key];
      return `- ${label}: ${v === 0 ? 'Not available on this plan' : v === null || v === undefined ? 'Unlimited' : (v as number).toLocaleString('en-SG')}`;
    }).join('\n');

  const planSection = (p: Plan): string => {
    const title = p.display_name || p.name.charAt(0).toUpperCase() + p.name.slice(1);
    if (p.name === 'custom' || p.price_monthly === null) {
      return `## ${title}\n\n- Price: Custom — contact us (${SITE}/contact/)\n- Every quota is tailored to your volume\n- Includes everything in Pro`;
    }
    if (p.price_monthly === 0) {
      return `## ${title} — Free for ${p.trial_days ?? trialDays} days\n\n- Price: Free (no credit card required)${quotaLines(p) ? '\n' + quotaLines(p) : ''}`;
    }
    const monthly = sgd(p.price_monthly);
    const yearly = sgd(p.price_yearly);
    return `## ${title} — ${monthly}/month${yearly ? ` (${yearly}/year)` : ''}\n\n- Price: ${monthly} per month, or ${yearly} per year${p.description ? `\n- ${p.description}` : ''}${quotaLines(p) ? '\n' + quotaLines(p) : ''}`;
  };

  const order = ['trial', 'starter', 'pro', 'custom'];
  const ordered = order
    .map((n) => plans.find((p) => p.name === n))
    .filter((p): p is Plan => Boolean(p));
  const rest = plans.filter((p) => !order.includes(p.name));

  const md = [
    `# Pricing — waai`,
    ``,
    `> waai (https://waai.me) — AI WhatsApp business assistant. All prices in Singapore dollars (SGD).`,
    `> Interactive pricing page (USD/MYR by region): ${SITE}/pricing/`,
    `> Generated ${new Date().toISOString().slice(0, 10)} ${plansRes.live ? 'from the waai plans API' : 'from fallback prices (plans API unreachable at build time — quotas omitted; verify at the pricing page)'}.`,
    ``,
    [...ordered, ...rest].map(planSection).join('\n\n'),
    ``,
    `## Optional Onboarding Assistance (one-time add-on)`,
    ``,
    `- Starter onboarding: ${sgd(onboarding.starter)} one-time`,
    `- Pro onboarding: ${sgd(onboarding.pro)} one-time`,
    ``,
    `## Notes`,
    ``,
    `- "Unlimited" means no configured limit on the plan.`,
    `- WhatsApp marketing / broadcast messages sent outside the 24-hour customer service window are billed by Meta per message (Cloud API pricing) and are not included in plan prices.`,
    `- Every paid plan starts with a ${trialDays}-day free trial; no credit card required.`,
  ].join('\n');

  return new Response(md, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
