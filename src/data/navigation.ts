export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Features',
    href: '/features',
    children: [
      { label: 'Auto-Responder', href: '/features/auto-responder' },
      { label: 'Knowledge Base', href: '/features/knowledge-base' },
      { label: 'Logic Flows', href: '/features/logic-flows' },
      { label: 'AI Chatbot', href: '/features/ai-chatbot' },
      { label: 'Team Inbox', href: '/features/team-inbox' },
      { label: 'Campaigns', href: '/features/campaigns' },
      { label: 'Analytics', href: '/features/analytics' },
      { label: 'Document Generation', href: '/features/document-generation' },
      { label: 'Super Powers', href: '/features/super-powers' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'For Marketing', href: '/solutions/marketing' },
      { label: 'For Sales', href: '/solutions/sales' },
      { label: 'For Support', href: '/solutions/support' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'E-commerce', href: '/industries/ecommerce' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Restaurants', href: '/industries/restaurants' },
      { label: 'Fitness', href: '/industries/fitness' },
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'Automotive', href: '/industries/automotive' },
    ],
  },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Pricing', href: '/pricing' },
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Auto-Responder', href: '/features/auto-responder' },
    { label: 'Knowledge Base', href: '/features/knowledge-base' },
    { label: 'Logic Flows', href: '/features/logic-flows' },
    { label: 'AI Chatbot', href: '/features/ai-chatbot' },
    { label: 'Team Inbox', href: '/features/team-inbox' },
    { label: 'Super Powers', href: '/features/super-powers' },
    { label: 'Pricing', href: '/pricing' },
  ],
  solutions: [
    { label: 'For Marketing', href: '/solutions/marketing' },
    { label: 'For Sales', href: '/solutions/sales' },
    { label: 'For Support', href: '/solutions/support' },
    { label: 'E-commerce', href: '/industries/ecommerce' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Education', href: '/industries/education' },
    { label: 'Real Estate', href: '/industries/real-estate' },
  ],
  integrations: [
    { label: 'All Integrations', href: '/integrations' },
    { label: 'Google Calendar', href: '/integrations/google-workspace' },
    { label: 'Google Drive', href: '/integrations/google-workspace' },
    { label: 'Google Docs', href: '/integrations/google-workspace' },
    { label: 'Google Sheets', href: '/integrations/google-workspace' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sign Up', href: '/signup' },
  ],
  legal: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};
