export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Nimrod Chuang',
    role: '',
    company: 'BACE Engineering Pte Ltd',
    quote: 'My prospects are no longer ignored because I was too busy to handle their inquires. With waai, I can capture leads and generate quotations faster than ever!',
    avatar: '/images/testimonials/placeholder-1.svg',
  },
  {
    name: 'Steven Lau',
    role: '',
    company: 'OUTSOURCE2US',
    quote: 'I am always on the road. Answering messages has been hassle and distraction. Finally, I have peace of mind, whenever and wherever I am.',
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
