// Translatable text shapes for structured content.
// The canonical English content + structure lives in src/data/*.ts; these
// overlays hold only the translatable strings, keyed by slug (or name/index).

/** Translatable subset of a Feature. */
export interface FeatureText {
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  metaDescription: string;
  benefits: { title: string; description: string }[];
  howItWorks: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
}

/** Translatable subset of an Industry. */
export interface IndustryText {
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  painPoints: string[];
  useCases: { title: string; description: string }[];
}

/** Translatable subset of a Solution (icon/value fields stay on the base). */
export interface SolutionText {
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  painPoints: { title: string; description: string }[];
  features: { title: string; description: string }[];
  stats: { label: string }[];
}

/** Translatable subset of a Testimonial (name + avatar stay on the base). */
export interface TestimonialText {
  role: string;
  company: string;
  quote: string;
}

/** All content overlays for one locale. */
export interface LocaleContent {
  features: Record<string, FeatureText>;
  industries: Record<string, IndustryText>;
  solutions: Record<string, SolutionText>;
  /** Keyed by the base testimonial's `name`. */
  testimonials: Record<string, TestimonialText>;
  /** Keyed by the base video's `id`. */
  videoTitles: Record<string, string>;
}
