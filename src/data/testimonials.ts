export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'TechStyle Retail',
    quote: 'We went from responding to 200 customer queries a day manually to handling 500+ with AI. The knowledge base was set up in under an hour and it just works.',
    avatar: '/images/testimonials/placeholder-1.svg',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder',
    company: 'FitZone Studios',
    quote: 'Our no-show rate dropped by 60% after setting up automated class booking and reminders on WhatsApp. Members love the convenience.',
    avatar: '/images/testimonials/placeholder-2.svg',
  },
  {
    name: 'Priya Sharma',
    role: 'Customer Success Lead',
    company: 'CloudServe Solutions',
    quote: 'The logic flows are incredible. We built a complete lead qualification system in a day. What used to take our sales team 30 minutes per lead now takes 30 seconds.',
    avatar: '/images/testimonials/placeholder-3.svg',
  },
];
