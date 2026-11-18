// CMS-editable front-page content (src/data/home-content.json) flattened into
// the same dotted keys the UI dictionaries use, so `useTranslations` can fall
// back to it. Precedence per key: locale dict → this file → en dict → key.
//
// The JSON is the English BASE: editing it changes English (and any locale
// that has no translation of its own); existing locale translations still win.
// Only keys listed here are CMS-editable — everything else stays in the dicts.

import raw from '../data/home-content.json';

interface HomeContent {
  hero: Record<string, string>;
  definition: string;
  logoTitle: string;
  videoHeading: string;
  stats: Record<string, unknown>;
  ai: Record<string, string>;
  features: Record<string, string>;
  integrations: Record<string, string>;
  journey: Record<string, string>;
  testimonials: Record<string, string>;
  finalCta: Record<string, string>;
}

const c = raw as HomeContent;

// [i18n dotted key, value from the YAML] — keys mirror src/i18n/ui/en.ts so
// the fallback slots straight into the existing translator chain.
const ENTRIES: [string, string | undefined][] = [
  ['home.hero.badge', c.hero.badge],
  ['home.hero.headline', c.hero.headline],
  ['home.hero.subhead', c.hero.subhead],
  ['home.hero.trialNote', c.hero.trialNote],
  ['home.hero.badge.responseTime', c.hero.badgeResponseLabel],
  ['home.hero.badge.responseValue', c.hero.badgeResponseValue],
  ['home.hero.badge.aiPowered', c.hero.badgeAiLabel],
  ['home.hero.badge.aiValue', c.hero.badgeAiValue],
  ['home.definition', c.definition],
  ['home.logo.title', c.logoTitle],
  ['home.video.heading', c.videoHeading],
  ['home.stats.badge', c.stats.badge as string],
  ['home.stats.title', c.stats.title as string],
  ['home.stats.subtitle', c.stats.subtitle as string],
  ['home.ai.badge', c.ai.badge],
  ['home.ai.title', c.ai.title],
  ['home.ai.subtitle', c.ai.subtitle],
  ['home.ai.c1.title', c.ai.c1Title],
  ['home.ai.c1.body', c.ai.c1Body],
  ['home.ai.c2.title', c.ai.c2Title],
  ['home.ai.c2.body', c.ai.c2Body],
  ['home.ai.c3.title', c.ai.c3Title],
  ['home.ai.c3.body', c.ai.c3Body],
  ['home.features.badge', c.features.badge],
  ['home.features.title', c.features.title],
  ['home.features.subtitle', c.features.subtitle],
  ['home.integrations.badge', c.integrations.badge],
  ['home.integrations.title', c.integrations.title],
  ['home.integrations.subtitle', c.integrations.subtitle],
  ['home.journey.title', c.journey.title],
  ['home.journey.subtitle', c.journey.subtitle],
  ['home.testimonials.badge', c.testimonials.badge],
  ['home.testimonials.title', c.testimonials.title],
  ['home.testimonials.subtitle', c.testimonials.subtitle],
  ['home.finalCta.title', c.finalCta.title],
  ['home.finalCta.subtitle', c.finalCta.subtitle],
  ['home.finalCta.startTrial', c.finalCta.startTrial],
  ['home.finalCta.freeTrial', c.finalCta.freeTrial],
  ['home.finalCta.noCard', c.finalCta.noCard],
  ['home.finalCta.setup', c.finalCta.setup],
];

export const HOME_STRINGS: Record<string, string> = Object.fromEntries(
  ENTRIES.filter(([, v]) => typeof v === 'string' && v !== ''),
);

// Stat values are locale-neutral marketing figures ("99.9%", "<1s", …), so
// Stats.astro reads them directly instead of through the translator.
export const HOME_STATS_VALUES: string[] = Array.isArray(c.stats.values)
  ? (c.stats.values as unknown[]).map(String)
  : ['99.9%', '<1s', '24/7', 'AES'];
