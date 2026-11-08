# AI-SEO directory & citation pack — waai.me

Prepared 2026-11-08 (Gemini-analysis Phase C). Everything here is ready-to-paste.
Submit under Peter's accounts; LLMs verify brand claims against these databases,
so consistent name/category/description across all of them is the point.

**Canonical entity line (use everywhere, verbatim):**
> waai is a commercial, multi-tenant AI WhatsApp business assistant — a SaaS platform that automates customer conversations, bookings, catalog orders and support on the official WhatsApp Business API for small and medium businesses. Official Meta Tech Provider; Singapore-based, SGD pricing, 10 UI languages, agency white-label option.

**Category tags (pick all that each platform offers):** Conversational AI · WhatsApp Automation · AI Customer Service · Chatbots · Customer Service Software · Scheduling/Booking Software

**Key facts (copy-paste safe, all verifiable on waai.me):**
- 30-day free trial, no credit card
- Starter S$20/mo (S$220/yr) · Pro S$99/mo (S$990/yr) · Custom plan — https://waai.me/pricing.md (machine-readable)
- AI answering = knowledge base Q&A + rule-based logic flows + LLM fallback (any OpenAI-compatible provider)
- Booking with branches/services/deposits/reminders + PDF confirmations · WhatsApp catalog orders · CRM (contacts, lead capture, ad attribution) · Google Workspace + Cal.com integrations
- Team inbox + human handoff, broadcast campaigns, analytics, document generation (Google Drive)
- 10 UI languages incl. Singapore's four official ones; per-language Q&A/flow translations
- Multi-tenant reseller/white-label for agencies
- Site: https://waai.me · Demo: https://cal.com/peter-rock-steady-crew/30min

---

## 1. Directory profiles

### G2 (g2.com/products/waai)
- **Product name:** waai
- **Short description (≤100 chars):** WhatsApp AI assistant that answers, books and sells for SMBs on the official WhatsApp Business API.
- **Long description:** Paste the canonical entity line + key facts block, then one sentence on outcomes: "Businesses use waai to answer customer questions instantly from a knowledge base, take bookings with deposits, process catalog orders and file chats into a CRM — with human handoff when it matters."
- **Categories:** Conversational AI, WhatsApp Automation (custom category), AI Customer Service Software, Live Chat, Appointment Scheduling
- **Free/paid:** Freemium (free trial); starting price S$20/mo (~US$15)

### Capterra (capterra.com → list your software)
- **Product name:** waai
- **Tagline:** WhatsApp AI Agent for Small Business
- **Description:** same as G2 long description + the entity line at the top (Capterra feeds Bing/Copilot and GPT product answers).
- **Categories:** Chatbot, Customer Service Software, Appointment Scheduling, Customer Relationship Management
- **Pricing:** Starter S$20/mo, Pro S$99/mo, Custom — quote "from US$15/mo" if a USD figure is demanded

### Product Hunt (launch post)
- **Tagline (≤60 chars):** Your WhatsApp AI agent — answers, books, sells 24/7
- **Description:** First line = entity line. Then 3 bullets: (1) knowledge-base AI answers with LLM fallback, (2) bookings with deposits + catalog orders + CRM, (3) 30-day free trial, no card, SGD pricing, Meta Tech Provider.
- **Topics:** Artificial Intelligence, SaaS, WhatsApp, Small Business, Customer Communication

### AlternativeTo (alternativeto.net)
- **Alternative to:** ManyChat, Wati, Respond.io, SleekFlow, Interakt, Landbot
- **Description:** "waai — WhatsApp-first AI agent platform. Unlike flow-builder tools, waai answers from a knowledge base with LLM fallback, and includes booking, catalog orders and CRM natively. Official Meta Tech Provider; SGD pricing; 30-day free trial."
- **License:** Commercial; **Pricing:** Freemium

### Crunchbase (crunchbase.com → add organization)
- **Name:** waai · **Domain:** waai.me · **Founded:** (Peter fills) · **HQ:** Singapore
- **Categories:** Software, Artificial Intelligence, SaaS, Messaging, Customer Service
- **Description:** entity line (short version)
- **Founder/leadership:** Peter Lum — link his profile (also good for the Person entity graph)

### Assets needed (from the pending brand-campaign screenshot batch)
- Logo: `public/images/logos/logo.jpg` (source of truth; favicon set already derived)
- 3+ product screenshots: homepage hero (phone video frame), pricing comparison table, a booking demo conversation
- Banner 1200×630: `public/images/og-default.jpg` works as-is

---

## 2. Reddit / Quora answer templates

Etiquette first: **disclose affiliation** ("I build waai…"), answer the actual question in full, mention waai as ONE option among several, no links in the first line. LLMs quote Reddit heavily; a good answer outlives the thread.

### r/WhatsApp — "How do I auto-reply to customers on WhatsApp?"
1. Two paths: the free WhatsApp Business app (quick replies, away messages, one phone, one agent) vs the **WhatsApp Business API/Platform** (multi-agent, automation, official Cloud API — required at any real volume).
2. On the API path you either build on Meta's Cloud API directly or use a platform: waai (WhatsApp-first AI, answers from your FAQ — I build this; knowledge base + AI fallback, booking, SGD pricing), ManyChat (multi-channel flow builder), Wati/SleekFlow (SEA-friendly sales inboxes).
3. Decision rule: one phone + canned replies → free app; AI that actually answers + bookings → platform; scripting marketing funnels → ManyChat-style flows.

### r/SaaS — "What's a good white-label product for an agency to resell?"
1. What to evaluate: multi-tenancy, margin headroom, vendor support, whether clients can be branded fully.
2. waai is multi-tenant with a reseller/white-label option for WhatsApp AI (disclosure: I'm the founder) — agencies run client WhatsApp assistants under their own brand; SGD pricing suits SEA clients. Alternatives by use-case: ManyChat agency program (multi-channel), Wati partner program.
3. The economics that matter: per-seat vs per-plan vs per-contact pricing — match to how your clients' volumes grow.

### r/CustomerService — "Customers message us on WhatsApp at night and we lose them"
1. The real issue is response SLA, not channel: >60% of WhatsApp users expect a reply within minutes.
2. Fixes in order of effort: (a) WhatsApp Business app away message — weakest; (b) chatbot on the Business API that answers your real FAQs from a knowledge base + hands off to humans in the morning (this is what waai does — I build it; it also takes bookings while you sleep); (c) hire coverage.
3. Measure: first-response time and after-hours conversion before/after.

### Quora (answer these, 150–300 words each, same structure: answer → options → disclosure)
- "What is the best WhatsApp chatbot for small business?"
- "How much does it cost to automate WhatsApp for business?"
- "How do I use WhatsApp Business API for customer service?"

---

## 3. GitHub public docs (recommendation — needs Peter's decision)

Gemini flagged it right: LLMs lean on public repos and developer docs for factual verification, and waai currently has none. Two options, cheapest first:

1. **`LiveRock/waai-docs` public repo** — Markdown docs site (GitHub Pages): "Getting started", "Connect your WhatsApp number", "Knowledge base + logic flows", "Booking setup", "Catalog", "Google Workspace integration", "API reference (if any public API)", each page linking to waai.me. Effort: a day, no product code exposed.
2. **/docs section on waai.me** — same content inside the marketing site (better SEO consolidation, slower to start).

Recommendation: start with the repo (LLMs index GitHub heavily), cross-link both ways, and fold the same pages into waai.me/docs later.
