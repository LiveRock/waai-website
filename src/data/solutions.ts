export interface Solution {
  slug: string;
  title: string;
  headline: string;
  description: string;
  painPoints: { icon: string; title: string; description: string }[];
  features: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  metaDescription: string;
}

export const solutions: Solution[] = [
  {
    slug: 'marketing',
    title: 'For Marketing',
    headline: 'Turn WhatsApp Into Your Best Marketing Channel',
    description: 'Capture leads, nurture prospects, and drive conversions through WhatsApp — where your customers actually pay attention. Automate campaigns, track results, and grow your audience.',
    painPoints: [
      { icon: 'trending-down', title: 'Can I reach customers who actually pay attention?', description: 'Email marketing averages 20% open rates. WhatsApp delivers 98% — your messages actually get seen.' },
      { icon: 'clock', title: 'Can I respond to leads before they move on?', description: 'Every minute of delay reduces lead conversion by 10%. Your AI responds instantly, 24/7.' },
      { icon: 'users', title: 'Can I personalize every message without hiring more people?', description: 'Sending the same generic message to everyone? AI makes every interaction feel personal.' },
    ],
    features: [
      { title: 'WhatsApp Campaigns', description: 'Send targeted broadcast messages with template-based campaigns.' },
      { title: 'Lead Capture Flows', description: 'Automated flows that qualify and capture lead information.' },
      { title: 'Knowledge Base Marketing', description: 'Product recommendations and promotional answers in your Q&A.' },
      { title: 'Analytics', description: 'Track campaign performance, message volumes, and conversion rates.' },
      { title: 'Ads Attribution & ROAS', description: 'Connect click-to-WhatsApp ads and see exactly which campaigns turn chats into revenue.' },
    ],
    stats: [
      { value: '98%', label: 'WhatsApp Open Rate' },
      { value: '3x', label: 'Higher Engagement' },
      { value: '45%', label: 'Better Click-Through' },
    ],
    metaDescription: 'Turn WhatsApp into your most effective marketing channel. Capture leads, automate campaigns, and drive conversions.',
  },
  {
    slug: 'sales',
    title: 'For Sales',
    headline: 'Close Deals Faster on WhatsApp',
    description: 'Qualify leads automatically, schedule appointments, send quotes and proposals, and close deals — all through WhatsApp. Your AI sales agent works around the clock.',
    painPoints: [
      { icon: 'phone-off', title: 'Can I capture leads after hours?', description: 'Leads come in after hours and go cold by morning. AI engages them instantly, any time of day.' },
      { icon: 'shuffle', title: 'Can I stop wasting time on unqualified leads?', description: 'Hours wasted on unqualified leads. Logic flows qualify automatically so you focus on hot prospects.' },
      { icon: 'file', title: 'Can I send quotes and proposals in seconds?', description: 'Generate and send professional quotes, proposals, and invoices directly from the conversation.' },
    ],
    features: [
      { title: 'Lead Qualification Flows', description: 'Automated multi-step flows that score and qualify leads before your team gets involved.' },
      { title: 'Appointment Booking', description: 'A real-availability booking engine — customers book, reschedule, and leave deposits directly in the chat.' },
      { title: 'Document Generation', description: 'Auto-generate quotes, invoices, and proposals from conversation data.' },
      { title: 'Human Handoff', description: 'Seamlessly transfer to a sales rep when the lead is ready to close.' },
      { title: 'Catalog Orders', description: 'Show products with photos and live stock. Customers order in chat; stock reserves itself instantly.' },
      { title: 'CRM & Ad Attribution', description: 'Every chat becomes a contact. See which Facebook ads bring WhatsApp leads and revenue — with ROAS per campaign.' },
    ],
    stats: [
      { value: '30%', label: 'Shorter Sales Cycle' },
      { value: '3x', label: 'Faster Response' },
      { value: '24/7', label: 'Lead Capture' },
    ],
    metaDescription: 'Close deals faster on WhatsApp. Qualify leads, book appointments, generate quotes, and convert around the clock.',
  },
  {
    slug: 'support',
    title: 'For Support',
    headline: 'AI-Powered Support That Never Sleeps',
    description: 'Resolve 80% of support queries automatically with AI that knows your business inside out. Escalate complex issues to humans seamlessly. Your customers get instant help, any time.',
    painPoints: [
      { icon: 'headphones', title: 'Can I stop answering the same questions over and over?', description: 'Repetitive questions eat up agent time. AI handles the routine so humans handle the complex.' },
      { icon: 'moon', title: 'Can I offer support around the clock?', description: 'Customers need help at 11pm. Your AI agent is always available with accurate answers.' },
      { icon: 'message-circle', title: 'Can I resolve issues in seconds, not hours?', description: 'Customers wait hours for email replies. WhatsApp support delivers answers in seconds.' },
    ],
    features: [
      { title: 'Knowledge Base', description: 'Comprehensive Q&A system that handles common questions instantly.' },
      { title: 'Smart Escalation', description: 'AI knows when to hand off to a human. Seamless transitions, no context lost.' },
      { title: 'Team Inbox', description: 'Monitor all conversations, jump in when needed, and track response metrics.' },
      { title: 'Super Powers', description: 'Vision analysis for photo-based support, web search for real-time answers.' },
    ],
    stats: [
      { value: '80%', label: 'Queries Auto-Resolved' },
      { value: '40%', label: 'Less Agent Workload' },
      { value: '<1s', label: 'Response Time' },
    ],
    metaDescription: 'AI-powered WhatsApp support that never sleeps. Resolve 80% of queries automatically with instant, accurate responses.',
  },
];
