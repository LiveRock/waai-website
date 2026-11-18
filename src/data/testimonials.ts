// Testimonial content lives in testimonials.json so the CMS at /admin can edit
// it. This module keeps the typed import surface unchanged (i18n/content reads
// it); missing optional keys are normalized so a hand-edited or CMS-written
// entry (which omits empty fields) still satisfies the interface.

import raw from './testimonials.json';

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

type RawItem = Partial<Testimonial>;

export const testimonials: Testimonial[] = ((raw as { items: RawItem[] }).items ?? []).map((t) => ({
  name: t.name ?? '',
  role: t.role ?? '',
  company: t.company ?? '',
  quote: t.quote ?? '',
  avatar: t.avatar ?? '',
}));
