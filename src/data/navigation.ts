export interface NavItem {
  /** i18n dictionary key for the label (preferred for translatable labels). */
  key?: string;
  /** Literal label, used as-is (for brand/product names that aren't translated). */
  label?: string;
  /** Canonical English href (locale-agnostic). Localized at render time. */
  href?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    key: 'nav.features',
    href: '/features',
    children: [
      { key: 'nav.feature.autoResponder', href: '/features/auto-responder' },
      { key: 'nav.feature.knowledgeBase', href: '/features/knowledge-base' },
      { key: 'nav.feature.logicFlows', href: '/features/logic-flows' },
      { key: 'nav.feature.aiChatbot', href: '/features/ai-chatbot' },
      { key: 'nav.feature.booking', href: '/features/booking' },
      { key: 'nav.feature.catalog', href: '/features/catalog' },
      { key: 'nav.feature.crm', href: '/features/crm' },
      { key: 'nav.feature.teamInbox', href: '/features/team-inbox' },
      { key: 'nav.feature.campaigns', href: '/features/campaigns' },
      { key: 'nav.feature.analytics', href: '/features/analytics' },
      { key: 'nav.feature.documentGeneration', href: '/features/document-generation' },
      { key: 'nav.feature.superPowers', href: '/features/super-powers' },
    ],
  },
  {
    key: 'nav.solutions',
    children: [
      { key: 'nav.solution.marketing', href: '/solutions/marketing' },
      { key: 'nav.solution.sales', href: '/solutions/sales' },
      { key: 'nav.solution.support', href: '/solutions/support' },
    ],
  },
  {
    key: 'nav.industries',
    href: '/industries',
    children: [
      { key: 'nav.industry.ecommerce', href: '/industries/ecommerce' },
      { key: 'nav.industry.healthcare', href: '/industries/healthcare' },
      { key: 'nav.industry.education', href: '/industries/education' },
      { key: 'nav.industry.realEstate', href: '/industries/real-estate' },
      { key: 'nav.industry.hospitality', href: '/industries/hospitality' },
      { key: 'nav.industry.restaurants', href: '/industries/restaurants' },
      { key: 'nav.industry.fitness', href: '/industries/fitness' },
      { key: 'nav.industry.professionalServices', href: '/industries/professional-services' },
      { key: 'nav.industry.automotive', href: '/industries/automotive' },
    ],
  },
  { key: 'nav.integrations', href: '/integrations' },
  { key: 'nav.pricing', href: '/pricing' },
  { key: 'nav.blog', href: '/blog' },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=6581773301&text=Hi%20Hotsource!%20I%27d%20like%20to%20know%20more',
  },
];

export const footerLinks = {
  product: [
    { key: 'nav.features', href: '/features' },
    { key: 'nav.feature.autoResponder', href: '/features/auto-responder' },
    { key: 'nav.feature.knowledgeBase', href: '/features/knowledge-base' },
    { key: 'nav.feature.logicFlows', href: '/features/logic-flows' },
    { key: 'nav.feature.aiChatbot', href: '/features/ai-chatbot' },
    { key: 'nav.feature.booking', href: '/features/booking' },
    { key: 'nav.feature.catalog', href: '/features/catalog' },
    { key: 'nav.feature.crm', href: '/features/crm' },
    { key: 'nav.feature.teamInbox', href: '/features/team-inbox' },
    { key: 'nav.feature.superPowers', href: '/features/super-powers' },
    { key: 'nav.pricing', href: '/pricing' },
  ],
  solutions: [
    { key: 'nav.solution.marketing', href: '/solutions/marketing' },
    { key: 'nav.solution.sales', href: '/solutions/sales' },
    { key: 'nav.solution.support', href: '/solutions/support' },
    { key: 'nav.industry.ecommerce', href: '/industries/ecommerce' },
    { key: 'nav.industry.healthcare', href: '/industries/healthcare' },
    { key: 'nav.industry.education', href: '/industries/education' },
    { key: 'nav.industry.realEstate', href: '/industries/real-estate' },
  ],
  integrations: [
    { key: 'footer.allIntegrations', href: '/integrations' },
    { label: 'Google Calendar', href: '/integrations/google-workspace' },
    { label: 'Google Drive', href: '/integrations/google-workspace' },
    { label: 'Google Docs', href: '/integrations/google-workspace' },
    { label: 'Google Sheets', href: '/integrations/google-workspace' },
  ],
  resources: [
    { key: 'footer.blog', href: '/blog' },
    { key: 'cta.contact', href: '/contact' },
    { key: 'cta.signup', href: '/signup' },
  ],
  legal: [
    { key: 'footer.terms', href: '/terms' },
    { key: 'footer.privacy', href: '/privacy' },
    { key: 'footer.googleCompliance', href: '/google-compliance' },
  ],
};
