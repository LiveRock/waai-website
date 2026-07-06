// Merge helpers: return localized structured content for a given locale.
// English (or any locale missing an overlay) falls back to the canonical base.

import { features, type Feature } from '../../data/features';
import { industries, type Industry } from '../../data/industries';
import { solutions, type Solution } from '../../data/solutions';
import { testimonials as baseTestimonials, type Testimonial } from '../../data/testimonials';
import { videos as baseVideos, type Video } from '../../data/videos';
import type { Lang } from '../config';
import type { LocaleContent } from './types';

import zh from './zh';
import ms from './ms';
import ta from './ta';

const CONTENT: Partial<Record<Lang, LocaleContent>> = { zh, ms, ta };

export function getFeatures(lang: Lang): Feature[] {
  const ov = CONTENT[lang]?.features;
  if (!ov) return features;
  return features.map((f) => (ov[f.slug] ? mergeFeature(f, ov[f.slug]) : f));
}

export function getFeature(slug: string, lang: Lang): Feature | undefined {
  const base = features.find((f) => f.slug === slug);
  if (!base) return undefined;
  const ov = CONTENT[lang]?.features?.[slug];
  return ov ? mergeFeature(base, ov) : base;
}

function mergeFeature(base: Feature, ov: NonNullable<LocaleContent['features'][string]>): Feature {
  return {
    ...base,
    title: ov.title,
    shortTitle: ov.shortTitle,
    headline: ov.headline,
    description: ov.description,
    metaDescription: ov.metaDescription,
    benefits: base.benefits.map((b, i) => ({ ...b, ...(ov.benefits[i] ?? {}) })),
    howItWorks: base.howItWorks.map((h, i) => ({ ...h, ...(ov.howItWorks[i] ?? {}) })),
    useCases: base.useCases.map((u, i) => ({ ...u, ...(ov.useCases[i] ?? {}) })),
  };
}

export function getIndustries(lang: Lang): Industry[] {
  const ov = CONTENT[lang]?.industries;
  if (!ov) return industries;
  return industries.map((it) => (ov[it.slug] ? mergeIndustry(it, ov[it.slug]) : it));
}

export function getIndustry(slug: string, lang: Lang): Industry | undefined {
  const base = industries.find((i) => i.slug === slug);
  if (!base) return undefined;
  const ov = CONTENT[lang]?.industries?.[slug];
  return ov ? mergeIndustry(base, ov) : base;
}

function mergeIndustry(base: Industry, ov: NonNullable<LocaleContent['industries'][string]>): Industry {
  return {
    ...base,
    title: ov.title,
    headline: ov.headline,
    description: ov.description,
    metaDescription: ov.metaDescription,
    painPoints: base.painPoints.map((p, i) => ov.painPoints[i] ?? p),
    useCases: base.useCases.map((u, i) => ({ ...u, ...(ov.useCases[i] ?? {}) })),
  };
}

export function getSolutions(lang: Lang): Solution[] {
  const ov = CONTENT[lang]?.solutions;
  if (!ov) return solutions;
  return solutions.map((s) => (ov[s.slug] ? mergeSolution(s, ov[s.slug]) : s));
}

export function getSolution(slug: string, lang: Lang): Solution | undefined {
  const base = solutions.find((s) => s.slug === slug);
  if (!base) return undefined;
  const ov = CONTENT[lang]?.solutions?.[slug];
  return ov ? mergeSolution(base, ov) : base;
}

function mergeSolution(base: Solution, ov: NonNullable<LocaleContent['solutions'][string]>): Solution {
  return {
    ...base,
    title: ov.title,
    headline: ov.headline,
    description: ov.description,
    metaDescription: ov.metaDescription,
    painPoints: base.painPoints.map((p, i) => ({ ...p, ...(ov.painPoints[i] ?? {}) })),
    features: base.features.map((f, i) => ({ ...f, ...(ov.features[i] ?? {}) })),
    stats: base.stats.map((s, i) => ({ ...s, ...(ov.stats[i] ?? {}) })),
  };
}

export function getTestimonials(lang: Lang): Testimonial[] {
  const ov = CONTENT[lang]?.testimonials;
  if (!ov) return baseTestimonials;
  return baseTestimonials.map((t) => {
    const o = ov[t.name];
    return o ? { ...t, role: o.role, company: o.company, quote: o.quote } : t;
  });
}

export function getVideos(lang: Lang): Video[] {
  const ov = CONTENT[lang]?.videoTitles;
  if (!ov) return baseVideos;
  return baseVideos.map((v) => (ov[v.id] ? { ...v, title: ov[v.id] } : v));
}
