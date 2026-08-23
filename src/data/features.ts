export interface Feature {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  icon: string;
  benefits: { title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  useCases: { title: string; description: string }[];
  relatedFeatures: string[];
  metaDescription: string;
  plan: string;
}

export const features: Feature[] = [
  {
    slug: 'auto-responder',
    title: 'WhatsApp Auto-Responder',
    shortTitle: 'Auto-Responder',
    headline: 'Never Leave a Customer Waiting Again',
    description: 'Instant AI-powered responses to every WhatsApp message. Rule-based matching handles common questions in milliseconds, with smart LLM fallback for everything else.',
    icon: 'zap',
    benefits: [
      { title: 'Sub-Second Responses', description: 'Fuzzy matching finds the right answer before your customer finishes typing another message.' },
      { title: 'Smart Fallback', description: 'When no rule matches, your AI steps in with a contextual, helpful response — not a generic "I don\'t understand."' },
      { title: '24/7 Availability', description: 'Your AI agent never sleeps, never takes a day off, and never has a bad attitude.' },
    ],
    howItWorks: [
      { step: 1, title: 'Set Up Your Q&A', description: 'Add common questions and answers — import from CSV or type them in.' },
      { step: 2, title: 'Configure Your AI', description: 'Choose your AI provider and customize the system prompt to match your brand voice.' },
      { step: 3, title: 'Go Live', description: 'Every incoming WhatsApp message gets an instant, accurate response automatically.' },
    ],
    useCases: [
      { title: 'FAQ Automation', description: 'Handle "What are your hours?" and "Where are you located?" without lifting a finger.' },
      { title: 'Product Inquiries', description: 'Auto-respond to pricing, availability, and specification questions instantly.' },
      { title: 'After-Hours Support', description: 'Keep serving customers when your team is offline.' },
    ],
    relatedFeatures: ['knowledge-base', 'ai-chatbot', 'logic-flows'],
    metaDescription: 'Automatically respond to every WhatsApp message with AI-powered precision. Rule-based matching plus smart LLM fallback.',
    plan: 'All Plans',
  },
  {
    slug: 'knowledge-base',
    title: 'Knowledge Base',
    shortTitle: 'Knowledge Base',
    headline: 'Your Business Expertise, Always Available',
    description: 'Build a comprehensive Q&A knowledge base that your AI agent draws from. Import hundreds of entries via CSV, organize by priority, and let fuzzy matching find the perfect answer every time.',
    icon: 'book',
    benefits: [
      { title: 'Bulk Import', description: 'Upload hundreds of Q&A pairs via CSV or JSON. Your knowledge base grows in minutes, not weeks.' },
      { title: 'Smart Matching', description: 'Fuzzy matching handles typos, variations, and partial matches — customers don\'t need exact wording.' },
      { title: 'Priority System', description: 'Control which answers take precedence when multiple matches are found.' },
    ],
    howItWorks: [
      { step: 1, title: 'Add Your Knowledge', description: 'Type individual Q&A pairs or bulk-import from a spreadsheet.' },
      { step: 2, title: 'Organize & Prioritize', description: 'Set categories, priorities, and trigger phrases for each entry.' },
      { step: 3, title: 'Test & Deploy', description: 'Use the built-in test chat to verify answers, then go live with confidence.' },
    ],
    useCases: [
      { title: 'Product Catalog', description: 'Let customers ask about any product and get instant, accurate details.' },
      { title: 'Policy FAQ', description: 'Shipping, returns, warranties — answer policy questions without human intervention.' },
      { title: 'Onboarding Guide', description: 'New customers get instant answers to setup and getting-started questions.' },
    ],
    relatedFeatures: ['auto-responder', 'logic-flows', 'analytics'],
    metaDescription: 'Build a smart Q&A knowledge base with CSV import, fuzzy matching, and priority control. Your expertise, always available.',
    plan: 'All Plans',
  },
  {
    slug: 'logic-flows',
    title: 'Logic Flows',
    shortTitle: 'Logic Flows',
    headline: 'Build Conversations That Convert',
    description: 'Create multi-step conversation flows with branching logic, conditions, and actions. Guide customers through booking, qualifying, ordering — all without writing a single line of code.',
    icon: 'git-branch',
    benefits: [
      { title: 'Visual Flow Builder', description: 'Design complex conversations with an intuitive step-by-step editor. No coding required.' },
      { title: 'Smart Branching', description: 'Route customers differently based on their responses, time of day, or any variable.' },
      { title: 'Variable System', description: 'Capture and reuse information across the conversation — names, choices, calculations.' },
    ],
    howItWorks: [
      { step: 1, title: 'Design Your Flow', description: 'Add message, question, and condition steps to build your conversation.' },
      { step: 2, title: 'Set Triggers', description: 'Define keywords or phrases that launch the flow automatically.' },
      { step: 3, title: 'Test & Activate', description: 'Walk through the flow in test mode, then deploy to handle real conversations.' },
    ],
    useCases: [
      { title: 'Lead Qualification', description: 'Ask qualifying questions and route hot leads to your sales team automatically.' },
      { title: 'Appointment Booking', description: 'Walk customers through available slots and confirm bookings via Google Calendar.' },
      { title: 'Order Processing', description: 'Guide customers through product selection, customization, and order placement.' },
    ],
    relatedFeatures: ['auto-responder', 'knowledge-base', 'document-generation'],
    metaDescription: 'Build multi-step WhatsApp conversations with branching logic, conditions, and variables. No code required.',
    plan: 'All Plans',
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot',
    shortTitle: 'AI Chatbot',
    headline: 'Your Brand, Powered by Any AI',
    description: 'Choose from OpenAI, Anthropic, z.ai, or bring your own model. Configure the personality, tone, and expertise to match your business perfectly. Multi-provider support means you\'re never locked in.',
    icon: 'bot',
    benefits: [
      { title: 'Multi-Provider', description: 'Switch between OpenAI, Anthropic, z.ai, OpenRouter, and any OpenAI-compatible endpoint without changing your setup.' },
      { title: 'Brand Voice', description: 'Customize system prompts so the AI speaks in your brand\'s tone and style.' },
      { title: 'Context-Aware', description: 'The AI understands conversation history and uses your knowledge base for accurate answers.' },
    ],
    howItWorks: [
      { step: 1, title: 'Choose Your Provider', description: 'Select OpenAI, Anthropic, z.ai, or any OpenAI-compatible endpoint.' },
      { step: 2, title: 'Customize the Prompt', description: 'Write a system prompt that captures your brand voice and expertise.' },
      { step: 3, title: 'Set the Model', description: 'Pick the model that fits your needs and budget — from fast and cheap to powerful and nuanced.' },
    ],
    useCases: [
      { title: 'Customer Support', description: 'Handle complex support queries with AI that understands your products and policies.' },
      { title: 'Sales Assistant', description: 'Recommend products, answer technical questions, and guide purchase decisions.' },
      { title: 'Consultation Bot', description: 'Provide initial consultations and assessments based on your expertise.' },
    ],
    relatedFeatures: ['auto-responder', 'booking', 'super-powers'],
    metaDescription: 'Multi-provider AI chatbot for WhatsApp. Choose OpenAI, Anthropic, z.ai, or your own model. Your brand, your AI.',
    plan: 'All Plans',
  },
  {
    slug: 'booking',
    title: 'WhatsApp Booking System',
    shortTitle: 'Bookings',
    headline: 'Bookings That Fill Themselves',
    description: 'A complete booking engine inside WhatsApp. Customers book, reschedule, and cancel in chat — against your real availability — while deposits, confirmations, and reminders go out automatically.',
    icon: 'calendar-check',
    benefits: [
      { title: 'Zero Double-Bookings', description: 'Every slot offered is genuinely open: free time is computed from staff hours, holidays, existing bookings, and your team\'s Google Calendar busy blocks — in real time.' },
      { title: 'A Booking in Two Messages', description: 'Smart Booking AI understands "facial with Mary on Tuesday around 4pm" — it matches the service and stylist, finds the nearest open slot, and books the moment your customer says YES.' },
      { title: 'Deposits, Reminders & QR Check-In', description: 'Request deposits in chat, send automatic reminders before every appointment, and check customers in with a QR scan — no-shows have nowhere to hide.' },
    ],
    howItWorks: [
      { step: 1, title: 'Set Up Services & Staff', description: 'Add services with photos, durations, and prices. Define branches, staff, and working hours — or run solo with default hours. Import your country\'s public holidays in one click.' },
      { step: 2, title: 'Let Customers Book in Chat', description: 'Import a ready-made booking flow or switch on Smart Booking AI. Customers see only real free slots, and can reschedule or cancel themselves any time.' },
      { step: 3, title: 'Run It on Autopilot', description: 'Confirmations, reminders, and branded PDF receipts go out automatically. Booking analytics show revenue, no-show rates, and your busiest hours.' },
    ],
    useCases: [
      { title: 'Salons & Spas', description: 'Clients pick the service, the stylist, and the time in one chat — deposits secure your peak-hour slots.' },
      { title: 'Clinics & Practices', description: 'Patients self-book and get reminders; your front desk watches the calendar fill instead of answering the phone.' },
      { title: 'Multi-Branch Businesses', description: 'Per-branch hours, per-staff calendars, and holiday imports keep multiple locations from ever double-booking.' },
    ],
    relatedFeatures: ['ai-chatbot', 'logic-flows', 'crm'],
    metaDescription: 'WhatsApp booking system with real availability, one-message AI booking, deposits, automatic reminders, and QR check-in. No double-bookings.',
    plan: 'Pro & Custom',
  },
  {
    slug: 'catalog',
    title: 'Product Catalog & Orders',
    shortTitle: 'Catalog',
    headline: 'Your Shop, Inside the Chat',
    description: 'Show products with photos and prices right in WhatsApp. Customers browse, pick variants, and place orders — while live stock counts make sure you never sell what you don\'t have.',
    icon: 'package',
    benefits: [
      { title: 'Browse & Order in Chat', description: 'Products appear with photos, descriptions, and prices. Customers pick size or colour variants and place an order without ever leaving WhatsApp.' },
      { title: 'Stock That Can\'t Oversell', description: 'The moment an order is placed, stock is reserved for that customer. Low-stock alerts reach you by email and push before you run dry.' },
      { title: 'Order Pipeline Built In', description: 'Orders flow from New to Confirmed to Fulfilled at a glance. Cancellations restock themselves, and every stock change is recorded in a ledger you can review.' },
    ],
    howItWorks: [
      { step: 1, title: 'Add Your Products', description: 'Photos, prices, categories, and variants with their own stock levels. Product names translate automatically to your customer\'s language.' },
      { step: 2, title: 'Drop In the Ordering Flow', description: 'Import the ready-made Product Ordering template — browse, pick a variant, place an order — or build your own with catalog flow steps.' },
      { step: 3, title: 'Confirm & Fulfil', description: 'Orders arrive with stock already reserved. Confirm and fulfil in a click; your customer can check "My Orders" in chat any time.' },
    ],
    useCases: [
      { title: 'F&B Pre-Orders', description: 'Regulars order tomorrow\'s lunch from the chat they already use — with live stock on daily specials.' },
      { title: 'Retail with Variants', description: 'Sizes, colours, and SKUs each carry their own stock, so "do you have this in large?" gets a true answer.' },
      { title: 'Urgency That\'s Real', description: '"Only 3 left" comes from actual stock counts — customers act on it, and you never oversell.' },
    ],
    relatedFeatures: ['booking', 'campaigns', 'crm'],
    metaDescription: 'Sell inside WhatsApp with a product catalog: photos, variants, live stock that can\'t oversell, low-stock alerts, and an order pipeline from New to Fulfilled.',
    plan: 'Pro & Custom',
  },
  {
    slug: 'crm',
    title: 'CRM & Ads Attribution',
    shortTitle: 'CRM',
    headline: 'Know Which Chats Become Revenue',
    description: 'Every person who messages you becomes a contact — tagged, listed, and linked to their bookings and orders. Connect your Facebook ads to see which campaigns bring WhatsApp leads and revenue, and automate the follow-up. Contacts are included on every plan, including the free trial.',
    icon: 'users',
    benefits: [
      { title: 'A CRM That Fills Itself', description: 'Every inbound chat auto-creates a contact with their conversation history, bookings, and orders attached. Tags, lists, and custom fields keep them organized.' },
      { title: 'Ad Attribution & ROAS', description: 'Click-to-WhatsApp ad clicks are captured on each contact\'s first message. See ad spend versus attributed WhatsApp revenue, ROAS, and cost per lead — per campaign.' },
      { title: 'Automations That Follow Up', description: 'Zapier-style rules: when a booking is confirmed or an order placed, waai can notify your team, tag the contact, report the conversion to Facebook, or call a webhook.' },
    ],
    howItWorks: [
      { step: 1, title: 'Chats Become Contacts', description: 'Every new phone number is captured automatically, with their full conversation, booking, and order history on one profile.' },
      { step: 2, title: 'Connect Your Ads', description: 'A one-time Meta connection reports leads and purchases back to Facebook, so your campaigns optimize on real WhatsApp revenue.' },
      { step: 3, title: 'Automate the Follow-Up', description: 'Pick a trigger and actions — waai notifies your team, updates tags and lists, and posts to your webhooks automatically.' },
    ],
    useCases: [
      { title: 'Click-to-WhatsApp Ads', description: 'See which campaigns start conversations and which conversations convert — then put budget where the ROAS is.' },
      { title: 'Team Alerts', description: 'A booking confirmed or a big order placed? The right person gets an email and mobile push instantly.' },
      { title: 'Smarter Broadcasts', description: 'Tag and group contacts by their behavior, then target your WhatsApp campaigns with precision.' },
    ],
    relatedFeatures: ['campaigns', 'booking', 'catalog'],
    metaDescription: 'WhatsApp CRM: contacts auto-captured from every chat, Facebook ads attribution with ROAS and cost per lead, and Zapier-style automations.',
    plan: 'Pro & Custom',
  },
  {
    slug: 'team-inbox',
    title: 'Team Inbox',
    shortTitle: 'Team Inbox',
    headline: 'AI Handles the Routine. You Handle the Rest.',
    description: 'Monitor all WhatsApp conversations in real time. Jump in with a human reply when AI isn\'t enough. Seamlessly hand off between AI and human agents without the customer ever noticing.',
    icon: 'inbox',
    benefits: [
      { title: 'Live Monitoring', description: 'Watch conversations unfold in real time with auto-refreshing message lists.' },
      { title: 'Human Handoff', description: 'Take over any conversation with a manual reply. The AI steps back until you\'re done.' },
      { title: 'Full History', description: 'Every message is logged — search, filter, and review any conversation at any time.' },
    ],
    howItWorks: [
      { step: 1, title: 'AI Handles It', description: 'Incoming messages get instant AI responses based on your knowledge base and flows.' },
      { step: 2, title: 'You Monitor', description: 'Watch all conversations from your dashboard. Real-time updates, no refresh needed.' },
      { step: 3, title: 'Step In When Needed', description: 'Type a manual reply to take over. The AI pauses and resumes when you\'re done.' },
    ],
    useCases: [
      { title: 'Escalation Management', description: 'Complex issues get escalated to humans while AI handles the easy stuff.' },
      { title: 'VIP Handling', description: 'Jump into high-value customer conversations to provide a personal touch.' },
      { title: 'Quality Assurance', description: 'Review AI conversations and correct responses to improve accuracy over time.' },
    ],
    relatedFeatures: ['auto-responder', 'analytics', 'knowledge-base'],
    metaDescription: 'Monitor WhatsApp conversations in real time. Jump in with human replies when AI isn\'t enough. Seamless handoff.',
    plan: 'All Plans',
  },
  {
    slug: 'campaigns',
    title: 'WhatsApp Campaigns',
    shortTitle: 'Campaigns',
    headline: 'Reach Customers Where They Actually Read',
    description: 'WhatsApp messages have a 98% open rate. Send targeted campaigns, promotions, and updates directly to your customers\' phones. Template-based messaging that complies with WhatsApp policies.',
    icon: 'megaphone',
    benefits: [
      { title: '98% Open Rate', description: 'WhatsApp messages get opened. Email can\'t compete with that kind of attention.' },
      { title: 'Template-Based', description: 'Pre-approved message templates ensure your campaigns comply with WhatsApp policies.' },
      { title: 'Targeted Delivery', description: 'Segment your audience and send the right message to the right people.' },
    ],
    howItWorks: [
      { step: 1, title: 'Create a Template', description: 'Design your message template with dynamic variables for personalization.' },
      { step: 2, title: 'Get Approval', description: 'Submit your template to WhatsApp for approval — usually within 24 hours.' },
      { step: 3, title: 'Send Your Campaign', description: 'Broadcast your message to selected contacts with a single click.' },
    ],
    useCases: [
      { title: 'Flash Sales', description: 'Send time-sensitive promotions that customers actually see and act on.' },
      { title: 'Appointment Reminders', description: 'Reduce no-shows with automated appointment reminders via WhatsApp.' },
      { title: 'Product Launches', description: 'Announce new products or services directly to your customer base.' },
    ],
    relatedFeatures: ['analytics', 'team-inbox', 'crm'],
    metaDescription: 'Send WhatsApp campaigns with 98% open rates. Template-based messaging, targeted delivery, and policy compliance.',
    plan: 'All Plans',
  },
  {
    slug: 'analytics',
    title: 'Analytics Dashboard',
    shortTitle: 'Analytics',
    headline: 'Know What\'s Working. Fix What\'s Not.',
    description: 'Track message volumes, response sources, trigger popularity, and conversation patterns. See exactly how your AI agent is performing and where to improve.',
    icon: 'chart-bar',
    benefits: [
      { title: 'Message Insights', description: 'Track inbound/outbound volumes, response times, and conversation trends over time.' },
      { title: 'Source Breakdown', description: 'See how responses split between rules, AI, flows, and human agents.' },
      { title: 'Popular Topics', description: 'Discover your most-asked questions and most-used flows to optimize your setup.' },
    ],
    howItWorks: [
      { step: 1, title: 'Messages Flow In', description: 'Every WhatsApp interaction is automatically tracked and categorized.' },
      { step: 2, title: 'Dashboard Updates', description: 'Charts and metrics refresh daily with the latest data.' },
      { step: 3, title: 'Act on Insights', description: 'Use the data to add missing Q&As, improve flows, and optimize AI prompts.' },
    ],
    useCases: [
      { title: 'Performance Tracking', description: 'Monitor how many conversations your AI handles vs. human agents.' },
      { title: 'Gap Analysis', description: 'Find questions the AI can\'t answer and add them to your knowledge base.' },
      { title: 'ROI Measurement', description: 'Track message volumes to quantify time and cost savings.' },
    ],
    relatedFeatures: ['auto-responder', 'knowledge-base', 'booking'],
    metaDescription: 'Track WhatsApp message volumes, AI performance, popular topics, and conversation patterns. Data-driven optimization.',
    plan: 'All Plans',
  },
  {
    slug: 'document-generation',
    title: 'Document Generation',
    shortTitle: 'Document Generation',
    headline: 'From Conversation to Document in Seconds',
    description: 'Generate Excel spreadsheets, Word documents, PDFs, Google Docs, and Google Sheets directly from chat data. Invoices, reports, quotes — created and sent automatically.',
    icon: 'file-text',
    benefits: [
      { title: 'Multiple Formats', description: 'Generate Excel, Word, PDF, or native Google Docs and Sheets — whatever your workflow needs.' },
      { title: 'Data-Driven', description: 'Use conversation variables and context to populate documents with real customer data.' },
      { title: 'Auto-Delivery', description: 'Documents are generated and sent to the customer via WhatsApp automatically.' },
    ],
    howItWorks: [
      { step: 1, title: 'Define the Document', description: 'Set up columns, data sources, and format in your flow\'s generate step.' },
      { step: 2, title: 'Collect the Data', description: 'Your logic flow gathers the information through the conversation.' },
      { step: 3, title: 'Generate & Send', description: 'The document is created and delivered to the customer — no manual steps.' },
    ],
    useCases: [
      { title: 'Invoice Generation', description: 'Collect order details and generate a professional invoice automatically.' },
      { title: 'Quotation Builder', description: 'Walk through requirements and produce a formatted quote document.' },
      { title: 'Report Compilation', description: 'Gather data points through chat and compile them into a structured report.' },
    ],
    relatedFeatures: ['logic-flows', 'super-powers', 'booking'],
    metaDescription: 'Generate Excel, Word, PDF, Google Docs, and Sheets from WhatsApp conversations. Invoices, quotes, and reports on autopilot.',
    plan: 'Pro & Custom',
  },
  {
    slug: 'super-powers',
    title: 'Super Powers',
    shortTitle: 'Super Powers',
    headline: 'Your AI Agent Has Superpowers',
    description: 'Vision analysis, web search, web reading, and GitHub documentation access — all available as capabilities your AI agent can use during conversations.',
    icon: 'sparkles',
    benefits: [
      { title: 'Vision Analysis', description: 'Customers send photos and your AI understands them — products, documents, screenshots, anything.' },
      { title: 'Web Search', description: 'Your AI can search the web for real-time information to answer questions accurately.' },
      { title: 'Web Reader', description: 'Extract and summarize content from any URL your customers share.' },
    ],
    howItWorks: [
      { step: 1, title: 'Enable Super Powers', description: 'Activate Vision, Web Search, Web Reader, or Zread in your settings.' },
      { step: 2, title: 'Build Flows', description: 'Add vision steps to analyze images, or web search steps to fetch real-time data.' },
      { step: 3, title: 'Deliver Answers', description: 'Your AI uses these capabilities during conversations to give better answers.' },
    ],
    useCases: [
      { title: 'Product Identification', description: 'Customers send a photo of a product and get instant identification and pricing.' },
      { title: 'Document Processing', description: 'Extract text from photos of invoices, receipts, or contracts.' },
      { title: 'Real-Time Lookups', description: 'Search the web for current prices, availability, or news to answer questions.' },
    ],
    relatedFeatures: ['ai-chatbot', 'logic-flows', 'document-generation'],
    metaDescription: 'Vision analysis, web search, web reading, and GitHub docs access for your WhatsApp AI agent. Superpowers for your business.',
    plan: 'Pro & Custom',
  },
];

export const featureSlugs = features.map(f => f.slug);
