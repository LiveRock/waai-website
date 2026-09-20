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
    avatar: '',
  },
  {
    name: 'Steven Lau',
    role: '',
    company: 'OUTSOURCE2US',
    quote: 'I am always on the road. Answering messages has been hassle and distraction. Finally, I have peace of mind, whenever and wherever I am.',
    avatar: '',
  },
  {
    name: 'Golden Tay',
    role: 'Founder & Principal Advisor',
    company: 'TGT ADVISORY SOLUTIONS',
    quote: 'What impressed me most about waai is that it goes far beyond a chatbot. It brings AI into WhatsApp—the communication channel businesses and customers already use every day. As a Smart Business Assistant, waai helps businesses respond to enquiries, share knowledge and engage customers more consistently. I see it as a practical AI solution with strong potential for Malaysian SMEs.',
    avatar: '/images/testimonials/tgt-advisory.jpg',
  },
];
