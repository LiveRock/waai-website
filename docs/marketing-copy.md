# waai Marketing Copy -- waai.me

> Complete marketing copy document for the waai.me product website.
> Brand angle: "waai.me" = "why me?" -- turning customer frustration into action.

---

## Table of Contents

1. [Homepage](#1-homepage)
2. [Feature Pages](#2-feature-pages)
3. [Solution Pages](#3-solution-pages)
4. [Industry Pages](#4-industry-pages)
5. [Pricing Page](#5-pricing-page)
6. [Integrations Page](#6-integrations-page)
7. [Contact Page](#7-contact-page)
8. [Signup Page](#8-signup-page)
9. [Footer](#9-footer)
10. [Blog](#10-blog)
11. [Meta Descriptions (SEO)](#11-meta-descriptions-seo)
12. [Navigation Labels](#12-navigation-labels)

---

## 1. Homepage

### Hero Section

**Headline:**
Why am I still answering the same questions at midnight?

**Subheadline:**
Your customers message you on WhatsApp. waai answers them instantly -- with the right information, the right tone, 24 hours a day. No hiring. No training. No sleep required.

**Primary CTA:** Start Your Free 14-Day Trial
**Secondary CTA:** See How It Works

**Supporting line beneath CTAs:**
No credit card required. Setup takes 10 minutes.

---

### "Why Me?" Pain Point Section

**Headline:**
Sound familiar?

**Body:**

You started a business to serve customers -- not to spend your evenings typing the same replies over and over. Every "What are your hours?" every "How much does this cost?" every "Can I book for Tuesday?" -- it all lands on your phone, and it all expects an answer right now.

Miss a message, lose a customer. Reply too late, lose their trust. Hire someone to handle it, blow your budget.

**waai.me** is the answer to "why me?" Because your business deserves an AI agent that never sleeps, never forgets, and never loses patience.

---

### Video Carousel Section

**Placement:** Directly below the Hero and the "Trusted by" logo strip; above the AI Capabilities section.

**Section Heading:** why not? *(single line, dark green `#128C7E` — intentionally minimal/casual, echoing the "why me?" brand angle; no badge or subtitle)*

**Videos (left to right):**
1. Extra Pair of Hands
2. Peace of Mind
3. Language Conundrum?
4. Lost Opportunities

**Behavior:** Horizontal scroll-snap carousel. Users swipe or use the prev/next arrows (desktop/tablet) and dot indicators to move between videos. Each video loads as a thumbnail and plays on click (privacy-friendly `youtube-nocookie.com` embed — no iframes load until the user presses play).

**Notes:** Video IDs and titles are editable in `src/data/videos.ts`. Component lives at `src/components/home/VideoCarousel.astro`.

---

### AI Capabilities Section (3 Cards)

**Section Headline:**
Three intelligences, one unstoppable agent

**Card 1: Rule-Based Matching**

**Title:** Knows your answers before you do

**Body:**
Upload your FAQs, product specs, pricing tables, and policies. waai uses fuzzy matching to understand what customers are really asking -- even with typos, slang, and shorthand. When a question matches your knowledge base, the answer fires back in under a second. No AI hallucinations. No guesswork. Just your information, delivered instantly.

**Card 2: Logic Flows**

**Title:** Conversations that actually go somewhere

**Body:**
Not every inquiry is a simple question. Booking appointments, qualifying leads, processing returns -- these are conversations with branches. waai Logic Flows let you map out multi-step interactions with conditions, variables, and actions. Your AI agent walks customers through complex processes step by step, collecting exactly the information you need.

**Card 3: LLM Fallback**

**Title:** When rules run out, intelligence kicks in

**Body:**
Some questions do not have a scripted answer. When the knowledge base and logic flows do not match, waai hands off to a large language model -- OpenAI, Anthropic, or your preferred provider. Your customer still gets a helpful, on-brand response. You pick the AI provider, the model, and the system prompt. Full control, zero gaps.

---

### Buyer Journey Section (3 Tabs)

**Section Headline:**
Built for every stage of your customer conversation

#### Tab: Marketing

**Title:** Turn every WhatsApp message into a marketing opportunity

**Body:**
Your WhatsApp Business number is not just a support line -- it is a direct channel to your most engaged audience. waai captures leads automatically, qualifies them with logic flows, and nurtures them with personalized responses. Run campaigns, share promotions, and track which messages drive action. No email open rates to worry about. WhatsApp messages get read.

**CTA:** Explore Marketing Solutions

#### Tab: Sales

**Title:** Close deals while you sleep

**Body:**
A potential customer messages you at 11 PM asking about pricing. By morning, they have already bought from your competitor. waai stops that from happening. Your AI agent qualifies leads, answers objections, collects contact details, and books appointments -- all in real time, right inside WhatsApp. When a conversation needs a human touch, it escalates seamlessly to your team inbox.

**CTA:** Explore Sales Solutions

#### Tab: Support

**Title:** Support that scales without the headcount

**Body:**
Your customers do not care that it is a holiday. They want answers now. waai delivers instant, accurate support 24/7 by drawing from your knowledge base, processing returns through logic flows, and escalating complex issues to your team. Track every conversation, measure response times, and watch customer satisfaction climb -- without adding another agent to payroll.

**CTA:** Explore Support Solutions

---

### Features Grid Section (6 Features)

**Section Headline:**
Everything your WhatsApp business needs

**Feature 1: Knowledge Base**

**Title:** Your business knowledge, always on call
**Body:** Upload Q&A pairs, import from CSV, or paste your existing FAQ. Fuzzy matching handles typos and phrasing variations. Priority rankings ensure the best answer wins. Your knowledge base grows with your business.

**Feature 2: Logic Flows**

**Title:** Complex conversations, simplified
**Body:** Design multi-step WhatsApp interactions with drag-and-drop ease. Branching logic, conditional rules, variable capture, and integrations with Google Calendar, Drive, and Docs. Build once, run forever.

**Feature 3: Multi-Provider AI**

**Title:** Your AI, your rules
**Body:** Choose from OpenAI, Anthropic, z.ai, llama.cpp, or OpenRouter. Set your system prompt, pick your model, and control exactly how your AI responds. Switch providers anytime without rebuilding your knowledge base.

**Feature 4: Team Inbox**

**Title:** AI handles the routine. You handle the rest.
**Body:** A shared inbox for live human conversations alongside AI automation. Jump in when a customer needs a personal touch, send manual replies, and hand conversations back to AI when you are done.

**Feature 5: Document Generation**

**Title:** From conversation to document in seconds
**Body:** Automatically generate Excel spreadsheets, Word documents, PDFs, Google Docs, and Google Sheets from chat data. Send quotes, invoices, reports, and confirmations directly through WhatsApp -- no manual formatting required.

**Feature 6: Analytics Dashboard**

**Title:** Know what is working. Fix what is not.
**Body:** Track message volumes, response accuracy, trigger counts, and source breakdowns. See which Q&A pairs and logic flows drive the most engagement. Data-driven decisions, not guesswork.

---

### Stats Section

**Section Headline:**
Numbers that speak for themselves

**Stat 1:** < 1 second average response time
**Stat 2:** 90% of questions answered without human intervention
**Stat 3:** 24/7 availability across every time zone
**Stat 4:** 80% reduction in repetitive support messages

**Supporting copy:**
Your customers expect instant replies. waai delivers them -- accurately, consistently, and at any hour.

---

### Final CTA Section

**Headline:**
Still asking "why me?"

**Body:**
Stop losing customers to slow replies. Stop spending evenings on messages that an AI agent can handle in under a second. Start your free trial today and see the difference an always-on WhatsApp AI agent makes -- for your customers, your team, and your bottom line.

**CTA:** Start Your Free 14-Day Trial

**Reassurance line:**
14 days free. No credit card. Full access to every feature.

---

## 2. Feature Pages

---

### 2.1 Auto-Responder

**Page Title:** WhatsApp Auto-Responder -- Instant Replies, Zero Effort

**Headline:**
Your WhatsApp replies itself

**Subheadline:**
Every incoming message gets an instant, accurate response. Your customers never wait. You never lift a finger.

**Three Benefits:**

1. **Sub-second response times.** The moment a message arrives, waai matches it against your knowledge base and fires back the right answer. No queue, no delay, no customer left waiting.

2. **Handles the repetitive work for you.** "What are your hours?" "Where are you located?" "How much does X cost?" These questions make up 80% of your inbox. Let your AI agent handle them while you focus on the conversations that actually need a human.

3. **Typing indicators keep customers engaged.** Your customers see that someone is responding immediately. The typing indicator shows activity, so they stay on the conversation instead of wandering off to a competitor.

**How It Works (3 Steps):**

1. **Upload your knowledge.** Add Q&A pairs manually, import from CSV, or paste your existing FAQ. waai indexes everything instantly.

2. **Set your fallback.** When a question does not match your knowledge base, waai can hand off to an LLM for a smart response, or send a custom fallback message of your choosing.

3. **Go live.** Connect your WhatsApp Business number, and your auto-responder starts working immediately. Monitor performance from your dashboard and refine as you go.

---

### 2.2 Knowledge Base

**Page Title:** AI Knowledge Base -- Your Business Expertise, Always Available

**Headline:**
Give your AI agent a brain

**Subheadline:**
Upload what you know. waai delivers it to every customer, every time, without fail.

**Three Benefits:**

1. **Fuzzy matching understands real people.** Customers type "how much r ur services" and "what's your pricing" and "price?" -- all asking the same thing. Fuzzy matching catches the intent behind messy phrasing, so no question goes unanswered.

2. **Priority rankings prevent conflicts.** When multiple answers could apply, priority rankings ensure the best one wins. You control the ranking, so you always control the message.

3. **Import and export in seconds.** Already have an FAQ? Import it from CSV. Need a backup? Export to JSON. Bulk management means your knowledge base grows with your business, not against it.

**How It Works (3 Steps):**

1. **Add your Q&A pairs.** Type them in, import from a CSV file, or upload a JSON backup. Each pair has a trigger phrase and a response.

2. **Set priorities.** Assign priority levels so the most important answers win when triggers overlap. Fine-tune matching sensitivity to your needs.

3. **Watch it work.** Every matched answer increments a trigger counter, so you can see which questions come up most and optimize your knowledge base over time.

---

### 2.3 Logic Flows

**Page Title:** WhatsApp Logic Flows -- Conversations That Actually Go Somewhere

**Headline:**
Map it once. Run it forever.

**Subheadline:**
Not every customer question has a simple answer. Logic Flows handle the complex stuff -- bookings, lead qualification, troubleshooting -- with multi-step conversations that feel natural.

**Three Benefits:**

1. **Branching conversations that adapt in real time.** If the customer says "I want a refund," route them to the returns flow. If they say "I want to book," route them to scheduling. Your AI agent responds to what customers actually say, not a rigid script.

2. **Variables capture what matters.** Collect names, dates, preferences, order numbers, and any other data as the conversation flows. Use captured variables in messages, conditions, and document generation downstream.

3. **Integrated actions, not just talk.** Logic Flows can create Google Calendar events, upload files to Drive, generate documents, and analyze images -- all automatically, as part of the conversation. Your AI agent does not just chat. It gets things done.

**How It Works (3 Steps):**

1. **Design your flow.** Use the visual editor to create steps: messages, options, conditions, actions, and integrations. Connect them with branches based on customer responses.

2. **Set your triggers.** Define the phrases that start your flow. Customers can trigger flows by typing a keyword, selecting an option, or sending an image.

3. **Go live and refine.** Activate your flow and watch conversations unfold. Trigger counts show you which flows are most popular. Edit and improve anytime without breaking live conversations.

---

### 2.4 AI Chatbot

**Page Title:** AI Chatbot for WhatsApp -- Smart, On-Brand, Always On

**Headline:**
Your most knowledgeable employee, available 24/7

**Subheadline:**
When the knowledge base does not have the answer and logic flows do not apply, your AI chatbot steps in. Powered by OpenAI, Anthropic, or your preferred LLM -- always on-brand, always helpful.

**Three Benefits:**

1. **Multi-provider AI, your choice.** Use OpenAI for versatile conversations, Anthropic for nuanced reasoning, z.ai for cost efficiency, or connect your own model via llama.cpp or OpenRouter. Switch providers anytime without rebuilding anything.

2. **Your brand voice, not a generic bot.** Set a custom system prompt that defines how your AI responds -- tone, personality, what to say, what not to say. Your customers talk to a representative of your business, not a faceless chatbot.

3. **Graceful fallback, not dead ends.** Rule-based matching handles what it can. Logic flows handle structured conversations. The LLM fills the gaps. If even the AI is unsure, your custom fallback message kicks in. No conversation ever hits a wall.

**How It Works (3 Steps):**

1. **Choose your AI provider.** Select from OpenAI, Anthropic, z.ai, llama.cpp, or OpenRouter. Enter your API key. Set your model and system prompt.

2. **Configure the response chain.** Knowledge base first, logic flows second, LLM third. Each layer handles what the previous one cannot. Full coverage, zero gaps.

3. **Monitor and improve.** Every AI response is logged. Review conversations, identify patterns, and add new Q&A pairs to move common questions from AI to instant matches.

---

### 2.5 Team Inbox

**Page Title:** Team Inbox for WhatsApp -- AI + Human, Seamlessly

**Headline:**
AI handles the routine. You handle what matters.

**Subheadline:**
A shared team inbox that lives alongside your AI agent. Step in when a customer needs a human touch. Step out and let AI take over again.

**Three Benefits:**

1. **Live conversation feed.** See every active WhatsApp conversation in real time. Filter by status, search by customer, and jump into any conversation that needs attention.

2. **Manual replies that go straight to WhatsApp.** Type a response in the team inbox, and it sends directly through your WhatsApp Business number. The customer never knows a human took over. Conversations auto-reactivate when you reply.

3. **Auto-refresh keeps you current.** New messages appear automatically. No refreshing, no polling. The inbox updates itself, so you are always looking at the latest conversation state.

**How It Works (3 Steps):**

1. **Monitor the inbox.** All active conversations flow into your team inbox. AI responses are logged alongside customer messages, so you see the full picture.

2. **Jump in when needed.** See a conversation going sideways? Type your reply and send it directly through WhatsApp. Your message appears in the customer's chat instantly.

3. **Hand off and move on.** Once you have resolved the issue, let AI take over again. The conversation continues with your AI agent handling subsequent messages.

---

### 2.6 Campaigns

**Page Title:** WhatsApp Campaigns -- Reach Customers Where They Read

**Headline:**
Messages that get opened, not buried

**Subheadline:**
WhatsApp has a 98% open rate. Email does not come close. Run targeted campaigns directly through the messaging app your customers actually check.

**Three Benefits:**

1. **Direct delivery, instant visibility.** No spam folders, no algorithm filters, no "promotions tab" black hole. Your message lands on their phone and gets seen.

2. **Personalized at scale.** Use customer variables -- names, past purchases, appointment history -- to craft messages that feel personal, even when sent to hundreds.

3. **Trackable results.** Know which messages were delivered, which triggered replies, and which drove conversions. Campaign analytics close the loop between sending and selling.

**How It Works (3 Steps):**

1. **Build your audience.** Segment contacts by customer attributes, conversation history, or engagement level. Target the right people with the right message.

2. **Compose your campaign.** Write your message, add media, schedule the send time. Use templates for consistency across campaigns.

3. **Send and measure.** Launch your campaign and watch results roll in. Track delivery, replies, and conversions in real time.

---

### 2.7 Analytics

**Page Title:** WhatsApp Analytics -- Know What Works, Fix What Does Not

**Headline:**
Stop guessing. Start optimizing.

**Subheadline:**
Every message, every match, every conversation -- tracked and measured. Know exactly how your WhatsApp AI agent is performing.

**Three Benefits:**

1. **Message volume and trends.** See how many messages flow through your WhatsApp number over time. Identify peak hours, busy days, and seasonal patterns. Staff your human team when it matters most.

2. **Source breakdown.** Know how many responses came from your knowledge base, how many from logic flows, and how many required LLM fallback. Find gaps in your knowledge and fill them.

3. **Trigger counts for every Q&A pair and flow.** See which questions come up most and which flows are most popular. Double down on what works. Rewrite what does not.

**How It Works (3 Steps):**

1. **Open your dashboard.** The analytics dashboard surfaces your key metrics front and center -- message counts, response sources, and trend lines.

2. **Drill into the details.** Filter by date range, message source, or conversation status. See individual conversation histories alongside aggregate data.

3. **Act on insights.** Add new Q&A pairs for commonly asked questions that reach the LLM. Build logic flows for multi-step interactions that tie up your team. Continuous improvement, backed by data.

---

### 2.8 Document Generation

**Page Title:** WhatsApp Document Generation -- From Chat to Document in Seconds

**Headline:**
Conversations that produce more than words

**Subheadline:**
Automatically generate Excel spreadsheets, Word documents, PDFs, Google Docs, and Google Sheets from your WhatsApp conversations. Send them directly to customers -- no manual formatting, no extra tools.

**Three Benefits:**

1. **Six formats, zero effort.** Generate Excel (.xlsx), Word (.docx), PDF, Google Docs, and Google Sheets. Your AI agent creates the right document for the right situation, automatically.

2. **Dynamic data from conversation context.** Documents pull data captured during the conversation -- customer name, order details, appointment info. Every document is personalized without manual data entry.

3. **Instant delivery via WhatsApp.** The generated document sends directly through WhatsApp as a file attachment. Customers receive quotes, invoices, reports, and confirmations right inside the chat. No email detour.

**How It Works (3 Steps):**

1. **Add a Generate Document step to your Logic Flow.** Choose the format, define columns or sections, and map data from your conversation variables.

2. **Set the trigger.** When the conversation reaches the right point -- after collecting order details, confirming a booking, or completing a consultation -- the document generates automatically.

3. **The document lands in the customer's chat.** Your customer receives the file instantly. A copy is saved in your dashboard for records. Optionally, upload to Google Drive for cloud backup.

---

### 2.9 Super Powers (MCP)

**Page Title:** Super Powers -- Vision, Web Search, Web Reader, Zread

**Headline:**
An AI agent with superhuman abilities

**Subheadline:**
Go beyond text conversations. Your WhatsApp AI agent can analyze images, search the web, read articles, and look up GitHub repositories. Welcome to the next level.

**Three Benefits:**

1. **Vision: Image analysis and OCR in your WhatsApp chat.** Customers send photos -- receipts, product labels, screenshots, forms -- and your AI agent analyzes them instantly. Extract text, identify objects, read charts, and trigger the right flow based on what it sees.

2. **Web Search: Real-time answers from the internet.** When your AI agent needs current information -- pricing from your website, competitor details, latest news -- it searches the web and delivers accurate, sourced responses. No stale data, no "I last trained in 2023."

3. **Web Reader and Zread: Deep research on demand.** Web Reader extracts full content from any URL. Zread searches GitHub repos, reads source code, and retrieves documentation. Your AI agent does not just guess. It looks things up.

**How It Works (3 Steps):**

1. **Enable Super Powers in your dashboard.** Each power -- Vision, Web Search, Web Reader, Zread -- can be enabled independently. Turn on what you need.

2. **Connect to your flows.** Add Vision steps to your image handler flow. Use Web Search in your LLM system prompt. Web Reader and Zread integrate with your knowledge base.

3. **Your AI agent gains new capabilities.** Customers send images and get analysis. They ask about current events and get real-time answers. Your agent handles requests that would stump any basic chatbot.

---

### 2.10 Features Overview

**Page Title:** waai Features -- Everything Your WhatsApp Business Needs

**Headline:**
One platform. Every capability. Zero compromises.

**Subheadline:**
waai combines rule-based matching, multi-step logic flows, multi-provider AI, team collaboration, document generation, and enterprise integrations into a single WhatsApp AI platform. Here is what is inside.

**Three Benefits:**

1. **Layered intelligence that never leaves a gap.** Knowledge base answers the common questions. Logic flows handle the complex ones. AI fills in the rest. Your customers always get a response -- fast, accurate, and on-brand.

2. **Integrations that turn chat into action.** Google Calendar for bookings. Google Drive for file management. Google Docs and Sheets for document creation. Your WhatsApp conversations do not just collect information -- they act on it.

3. **Pro-grade tools without the enterprise price tag.** Analytics dashboards, campaign management, team inbox, template library, document generation -- capabilities that normally require three separate tools, all in one platform starting at $29 per month.

**How It Works (3 Steps):**

1. **Set up your knowledge.** Import your FAQ, build your Q&A pairs, and configure your AI provider. waai handles the rest.

2. **Design your flows.** Map out your customer conversations with the visual flow editor. Add integrations, conditions, and document generation steps.

3. **Go live and optimize.** Connect your WhatsApp Business number and start responding to customers. Use analytics to continuously improve.

---

## 3. Solution Pages

---

### 3.1 Marketing

**Page Title:** WhatsApp Marketing Solution -- Turn Messages into Revenue

**Headline:**
Your WhatsApp number is your best marketing channel. Start using it.

**Subheadline:**
98% open rate. Instant delivery. Direct to their pocket. Stop fighting email algorithms and start having conversations that convert.

**Pain Points (framed as "Can I..." questions):**

- **Can I reach customers who actually pay attention?** Email open rates keep dropping. Your carefully crafted newsletter lands in spam or gets ignored. Meanwhile, your customers open every WhatsApp message within minutes.
- **Can I respond to leads before they move on?** Every minute of delay reduces lead conversion by 10%. Your AI responds instantly, 24/7.
- **Can I personalize every message without hiring more people?** Sending the same message to everyone does not work. But personalizing hundreds of messages manually is impossible.
- **You cannot measure what you cannot track.** Did that promotion drive sales? Which message resonated? Without data, marketing is just guessing.

**waai YES! (replaces "How waai Solves It"):**

waai turns your WhatsApp Business number into a marketing machine. Capture leads automatically with instant AI responses. Qualify prospects with logic flows that ask the right questions. Send targeted campaigns with personalized variables. Track every message, every reply, every conversion. Your AI agent handles the volume. You focus on the strategy.

**Key Features:** Knowledge Base, Logic Flows, Campaigns, Analytics, Multi-Provider AI

**CTA:** Start Marketing on WhatsApp

---

### 3.2 Sales

**Page Title:** WhatsApp Sales Solution -- Close Deals in Real Time

**Headline:**
The fastest deal is the one you reply to first

**Subheadline:**
Your prospects message you at 11 PM. Your competitors reply at 8 AM. By then, the deal is gone. waai ensures you are always first to respond.

**Pain Points (framed as "Can I..." questions):**

- **Can I capture leads after hours?** Speed to lead wins deals. A prospect who messages you expects a reply within minutes. Every hour of delay reduces your chance of closing by 80%.
- **Can I stop wasting time on unqualified leads?** Lead qualification eats your time. Not every prospect is ready to buy. Spending 30 minutes on a discovery call with someone who is just browsing wastes your team's capacity.
- **Can I send quotes and proposals in seconds?** Generate and send professional quotes, proposals, and invoices directly from the conversation.
- **You cannot sell while you sleep.** Deals happen across time zones. If your business hours end at 6 PM, your selling hours end with them.

**waai YES! (replaces "How waai Solves It"):**

waai gives your sales team an AI assistant that never clocks out. Instant replies capture leads the moment they reach out. Logic flows qualify prospects automatically -- collecting budget, timeline, and needs before a human ever joins the conversation. Documents like quotes and proposals generate and send automatically. When a deal needs the human touch, it escalates to your team inbox seamlessly.

**Key Features:** Auto-Responder, Logic Flows, Document Generation, Team Inbox, AI Chatbot

**CTA:** Start Closing on WhatsApp

---

### 3.3 Support

**Page Title:** WhatsApp Support Solution -- 24/7 Help Without the Headcount

**Headline:**
Your customers do not care that it is a holiday

**Subheadline:**
They want answers now. waai gives them instant, accurate support around the clock -- without adding agents to your payroll.

**Pain Points (framed as "Can I..." questions):**

- **Can I stop answering the same questions over and over?** The same 20 questions drain your team. "What are your hours?" "How do I reset my account?" "Where is my order?" Your agents spend 80% of their time on repeat questions that have simple answers.
- **Can I offer support around the clock?** Support tickets pile up after hours. Your team goes home at 6 PM. Your customers keep messaging. By morning, you are 40 messages behind and growing.
- **Can I resolve issues in seconds, not hours?** Customers expect instant replies. A two-hour response time feels like two days. Your customers measure your service by your speed, and slow support drives them to competitors.
- **Scaling support means scaling costs.** Every new support agent costs $30,000 to $50,000 per year. And they still cannot work 24 hours.

**waai YES! (replaces "How waai Solves It"):**

waai handles the repetitive questions instantly with knowledge base matching. Complex issues route through logic flows that troubleshoot, gather information, and resolve problems step by step. When a conversation genuinely needs a human, it lands in your team inbox with full context. Auto-reminders alert you to expiring subscriptions, quota limits, and overdue follow-ups. Your support operation runs 24/7 without running you ragged.

**Key Features:** Knowledge Base, Auto-Responder, Logic Flows, Team Inbox, Auto-Reminders, Analytics

**CTA:** Start Supporting on WhatsApp

---

## 4. Industry Pages

---

### 4.1 E-commerce

**Page Title:** WhatsApp AI for E-commerce -- Sell More, Support Better

**Headline:**
From "is this in stock?" to "take my money" in under a minute

**Subheadline:**
Your customers want to browse, compare, and buy -- all without leaving WhatsApp. waai makes it happen.

**Use Case:**
A customer messages your WhatsApp number asking about a product. Your AI agent checks inventory, shares pricing, answers questions about sizing and materials, processes the order confirmation, and generates a receipt document -- all in a single conversation. Complex questions about returns or shipping route through logic flows. If they want to talk to a person, the conversation escalates to your team.

**Pain Points:**

- "Is this available?" "What colors do you have?" "How much is shipping?" -- the same questions, hundreds of times a day
- Abandoned carts because nobody answered the customer's question fast enough
- Returns and refund requests that tie up your support team for hours
- Order status inquiries that are simple to answer but exhausting at scale
- Customers messaging outside business hours and buying from competitors who reply faster

**CTA:** Start Selling on WhatsApp

---

### 4.2 Healthcare

**Page Title:** WhatsApp AI for Healthcare -- Better Patient Communication

**Headline:**
Patients have questions. Your staff has patients.

**Subheadline:**
Let waai handle appointment scheduling, FAQs, and intake -- so your staff can focus on care, not calls.

**Use Case:**
A patient messages your clinic on WhatsApp. Your AI agent confirms availability, books the appointment on your Google Calendar, sends a confirmation with preparation instructions, and collects intake information through a structured logic flow. Reminders go out automatically. Cancellations and rescheduling happen without a phone call.

**Pain Points:**

- Front desk staff spends more time on the phone scheduling than assisting patients
- Appointment no-shows because reminders were not sent or were missed
- After-hours patient questions go unanswered until morning
- Intake forms that require phone calls or in-person visits to complete
- Patients calling about insurance, hours, and directions -- none of which require clinical staff

**CTA:** Start Automating Patient Communication

---

### 4.3 Education

**Page Title:** WhatsApp AI for Education -- Instant Answers for Students and Parents

**Headline:**
Stop answering the same questions. Start teaching.

**Subheadline:**
Enrollment inquiries, course details, schedules, and deadlines -- waai handles the administrative flood so your team can focus on education.

**Use Case:**
A prospective student messages your institution on WhatsApp. Your AI agent answers questions about programs, admissions requirements, tuition, and deadlines. It walks them through the application process with a logic flow, collects required information, and even generates a summary document. Current students get instant answers about schedules, events, and policies.

**Pain Points:**

- Admissions season floods your office with the same enrollment questions
- Students and parents messaging at all hours about deadlines and requirements
- Course information scattered across websites, PDFs, and emails
- Staff spending hours on repetitive inquiries instead of student support
- International students in different time zones who cannot call during office hours

**CTA:** Start Streamlining Admissions

---

### 4.4 Real Estate

**Page Title:** WhatsApp AI for Real Estate -- Qualify Leads While You Are at a Showing

**Headline:**
Every listing inquiry is a potential commission. Do not let it go cold.

**Subheadline:**
Buyers message agents at all hours. waai qualifies them instantly, shares listing details, and books viewings on your calendar -- while you are busy closing deals.

**Use Case:**
A buyer sees your listing on a property portal and messages your WhatsApp number. Your AI agent asks about their budget, preferred location, and timeline. It shares matching listings from your knowledge base, answers questions about each property, and books a viewing directly on your Google Calendar. Qualified leads land in your team inbox with full context. Window shoppers are handled politely without taking your time.

**Pain Points:**

- Listing inquiries that come in at 10 PM and go unanswered until morning
- Spending hours on the phone with unqualified prospects who are "just browsing"
- Difficulty coordinating viewings across multiple agents and calendars
- The same property questions -- price, square footage, HOA fees -- asked dozens of times
- Losing leads to faster-responding agents in a competitive market

**CTA:** Start Converting Listing Inquiries

---

### 4.5 Hospitality

**Page Title:** WhatsApp AI for Hospitality -- Guest Communication That Never Checks Out

**Headline:**
Guest expectations do not check in at the front desk

**Subheadline:**
Room availability, check-in times, local recommendations, booking confirmations -- waai handles guest communication around the clock, in any language.

**Use Case:**
A guest messages your hotel on WhatsApp asking about availability for next weekend. Your AI agent checks the details, shares room options with pricing, answers questions about amenities and policies, and confirms the booking. It sends a confirmation document and sets up a pre-arrival logic flow with check-in instructions and local tips. During the stay, guests message for recommendations, extra towels, or late checkout.

**Pain Points:**

- International guests messaging in different time zones when your front desk is unmanned
- The same questions about check-in times, WiFi passwords, and breakfast hours
- Booking inquiries that go unanswered because the front desk is handling walk-ins
- Managing reservations across multiple channels without a unified system
- Last-minute requests that pile up during peak check-in and check-out hours

**CTA:** Start Elevating Guest Experience

---

### 4.6 Restaurants

**Page Title:** WhatsApp AI for Restaurants -- From Menu Inquiry to Table Reservation

**Headline:**
Hungry customers do not wait. Neither should your replies.

**Subheadline:**
Menu questions, reservation requests, takeout orders, and catering inquiries -- waai handles the conversation while your team handles the kitchen.

**Use Case:**
A customer messages your restaurant on WhatsApp. Your AI agent shares the daily menu, answers questions about ingredients and allergens, books a table, and sends a confirmation. For takeout, a logic flow walks them through the order, confirms items, and provides an estimated pickup time. Catering inquiries are qualified and routed to your team inbox.

**Pain Points:**

- Phone calls interrupting service during peak dining hours
- "What's on the menu?" "Do you have vegan options?" "Can I book for 7?" -- on repeat all day
- Missing reservation requests that come in via WhatsApp after hours
- Takeout orders lost in the chaos of a busy Friday night
- Catering inquiries that need detailed information but tie up your staff with back-and-forth

**CTA:** Start Serving Customers on WhatsApp

---

### 4.7 Fitness

**Page Title:** WhatsApp AI for Fitness -- Fill Your Classes, Keep Your Members

**Headline:**
Your members want to book at 6 AM or 11 PM. Let them.

**Subheadline:**
Class schedules, membership questions, booking, and cancellations -- waai handles member communication so you can focus on coaching.

**Use Case:**
A member messages your gym on WhatsApp to check the class schedule. Your AI agent shares the weekly timetable, books their spot, and sends a reminder the morning of. Prospective members get pricing information, membership options, and a guided tour booking through a logic flow. Cancellations and rescheduling happen instantly without a phone call.

**Pain Points:**

- Members calling to check class schedules and availability
- Last-minute cancellations leaving empty spots that could have been filled
- New member inquiries about pricing, facilities, and class types that tie up front desk staff
- Membership renewal reminders that are easy to forget and costly to miss
- Potential members who message after hours and sign up at a competitor instead

**CTA:** Start Engaging Members on WhatsApp

---

### 4.8 Professional Services

**Page Title:** WhatsApp AI for Professional Services -- Client Communication, Automated

**Headline:**
Bill for expertise, not for answering "what are your rates?" for the hundredth time

**Subheadline:**
Consultations, proposals, appointment scheduling, and client intake -- waai automates the administrative side of your practice so you can focus on delivering value.

**Use Case:**
A prospective client messages your firm on WhatsApp. Your AI agent explains your services, shares pricing tiers, and runs them through an intake logic flow that collects their name, industry, and project details. It books an initial consultation on your Google Calendar, sends a confirmation, and generates a summary document with the client's information for your review.

**Pain Points:**

- Initial inquiries that are 90% repetitive questions about services and pricing
- Scheduling consultations across multiple time zones and team calendars
- Client intake that requires phone calls or lengthy email exchanges
- Sending proposals and engagement letters through manual processes
- Following up with leads who expressed interest but never booked a consultation

**CTA:** Start Automating Client Communication

---

### 4.9 Automotive

**Page Title:** WhatsApp AI for Automotive -- Drive More Service Bookings

**Headline:**
Every unanswered message is a customer who drove to the competitor

**Subheadline:**
Service bookings, inventory inquiries, test drive scheduling, and quote requests -- waai keeps your showroom and service center running at full speed.

**Use Case:**
A customer messages your dealership on WhatsApp asking about a specific model. Your AI agent shares specs, pricing, and available colors. It qualifies their interest, checks their trade-in details, and books a test drive on your sales team's calendar. For service customers, the AI books appointments, shares estimated costs, and sends preparation instructions. Documents like quotes and service estimates generate automatically.

**Pain Points:**

- "What's the price of the X model?" -- asked 50 times a day across phone, email, and WhatsApp
- Test drive scheduling that requires back-and-forth to find a mutually available time
- Service appointment calls that tie up your service advisor during busy hours
- Quote requests that need to be generated and sent manually
- After-hours inquiries from customers who research cars and services in the evening

**CTA:** Start Accelerating Sales and Service

---

## 5. Pricing Page

### Headline

Simple pricing. No surprises. Start free.

### Subheadline

14 days free on any plan. No credit card required. Upgrade, downgrade, or cancel anytime.

---

### Plan Descriptions

#### Trial -- Free for 14 Days

**Headline:** Try before you commit

**Body:**
Get full access to waai for 14 days. Build your knowledge base, design logic flows, connect your AI provider, and see how an always-on WhatsApp AI agent transforms your customer communication. No credit card required. No auto-charges.

**Limits:** 50 Q&A pairs, 3 logic flows, 500 messages

**Best for:** Testing waai with your business before committing to a paid plan.

#### Starter -- $29/month

**Headline:** Your AI agent starts here

**Body:**
Everything you need to run an intelligent WhatsApp auto-responder. Knowledge base matching, multi-step logic flows, multi-provider AI chatbot, team inbox, and analytics. Enough capacity for a growing business to handle daily customer communication without manual effort.

**Limits:** 200 Q&A pairs, 20 logic flows, 5,000 messages per month

**Best for:** Small businesses ready to automate their WhatsApp communication and reclaim their time.

#### Pro -- $99/month

**Headline:** No limits. Full power.

**Body:**
Unlimited Q&A pairs, unlimited logic flows, unlimited messages. Plus Super Powers (Vision, Web Search, Web Reader, Zread), Google Workspace integrations (Calendar, Drive, Docs, Sheets), document generation (Excel, Word, PDF, Google Docs/Sheets), and priority support. This is waai at full strength.

**Limits:** Unlimited everything

**Best for:** Growing businesses that want every capability waai offers, with no ceilings on customer communication.

#### Custom -- Contact Us

**Headline:** Built for your enterprise

**Body:**
Custom integrations, dedicated support, SLA guarantees, volume pricing, and tailored onboarding. If you need waai deployed across multiple business units, integrated with your existing systems, or configured for specific compliance requirements, this plan is for you.

**Best for:** Enterprises and multi-location businesses with custom requirements.

---

### Pricing FAQ (7 Questions)

**Q1: Can I switch plans anytime?**
Yes. Upgrade instantly to unlock more capacity and features. Downgrade at the end of your billing cycle. No penalties, no lock-in. Your data stays intact either way.

**Q2: What happens when my trial ends?**
Your trial gives you full access for 14 days. When it ends, you can choose a paid plan to continue. If you decide not to subscribe, your data is saved for 30 days in case you change your mind.

**Q3: Do I need my own AI provider API key?**
For the Starter and Pro plans, you can bring your own API key from OpenAI, Anthropic, z.ai, or another supported provider. This gives you full control over costs and model selection. We also provide guidance on choosing the right provider for your use case and budget.

**Q4: What counts as a "message"?**
Every message processed by waai counts toward your monthly limit -- both incoming customer messages and outgoing AI responses. Internal team inbox messages are not counted. You can monitor your usage in real time from your dashboard.

**Q5: Is there a setup fee?**
No. Setup is free and takes about 10 minutes. You connect your existing WhatsApp Business number, upload your knowledge base, configure your AI provider, and go live. No technical expertise required. We provide step-by-step guides and support.

**Q6: Can I use waai with my existing WhatsApp Business number?**
Yes. waai connects to your existing WhatsApp Business number via the Meta Cloud API. If you do not have a WhatsApp Business account yet, we guide you through setting one up. Your number stays yours.

**Q7: What kind of support do you offer?**
Starter plans get email support with a 24-hour response time. Pro plans get priority email and chat support. Custom plans get a dedicated account manager, phone support, and guaranteed response times. All plans include access to our documentation and knowledge base.

---

## 6. Integrations Page

### Overview Section

**Headline:**
Your WhatsApp AI agent does not live in a silo

**Subheadline:**
waai connects to the tools your business already uses. Google Calendar, Drive, Docs, and Sheets integrations turn conversations into actions -- booking appointments, managing files, and creating documents without leaving WhatsApp.

---

### Google Workspace Detail

**Headline:** Google Workspace, fully integrated

#### Google Calendar

**Body:**
Book appointments, check availability, and manage your schedule -- all through WhatsApp conversations. Your AI agent creates events on your waai calendar, finds open time slots, and sends calendar invitations. Customers book without ever visiting a booking page.

#### Google Drive

**Body:**
Upload, manage, and share files from your Drive directly in WhatsApp conversations. Your AI agent can send documents to customers, save uploaded files to organized folders, and retrieve files on request. Your waai folder keeps everything tidy automatically.

#### Google Docs

**Body:**
Generate native Google Docs from conversation data. Proposals, reports, summaries, and client documents create automatically and land in your Drive. Share links through WhatsApp or let your AI agent send them directly.

#### Google Sheets

**Body:**
Create and populate Google Sheets from your WhatsApp conversations. Order data, client information, survey results -- structured data from your chats flows into spreadsheets automatically. Build reports and dashboards from live conversation data.

---

**CTA:** Explore All Integrations

---

## 7. Contact Page

**Headline:**
Let us show you what waai can do for your business

**Subtitle:**
Whether you are ready to start your free trial or want a personalized demo, we are here to help. Fill out the form below, and our team will get back to you within one business day.

---

## 8. Signup Page

**Headline:**
Your WhatsApp AI agent is 10 minutes away

**Subtitle:**
Start your free 14-day trial. No credit card required. Connect your WhatsApp Business number, upload your knowledge base, and watch your AI agent start answering customers.

---

## 9. Footer

**Tagline:**
waai.me -- Your WhatsApp AI agent that never sleeps.

**Secondary tagline:**
Stop asking "why me?" Start letting AI handle it.

---

## 10. Blog

### Post 1

**Title:** Why 80% of WhatsApp Business Messages Go Unanswered (And How to Fix It)

**Excerpt:**
Most businesses respond to WhatsApp messages within hours. Their customers expect a reply within minutes. That gap costs you sales, trust, and loyalty. Here is why businesses struggle to keep up -- and how an AI agent closes the gap instantly.

### Post 2

**Title:** How to Build a WhatsApp Knowledge Base That Actually Works

**Excerpt:**
A knowledge base is only as good as its coverage and accuracy. Too few entries, and customers hit dead ends. Too many, and irrelevant answers start surfacing. This guide covers how to structure, prioritize, and maintain a knowledge base that handles 90% of your incoming questions.

### Post 3

**Title:** Logic Flows vs. Chatbots: Why Structured Conversations Win for Business WhatsApp

**Excerpt:**
Free-form chatbots are impressive in demos but unreliable in production. Customers do not want a conversation that wanders. They want their problem solved. Logic Flows combine the flexibility of AI with the reliability of structured processes -- and the results speak for themselves.

---

## 11. Meta Descriptions (SEO)

Max 160 characters each.

| Page | Meta Description |
|------|-----------------|
| Homepage | waai is an AI-powered WhatsApp auto-responder for business. Instant replies, 24/7. Knowledge base, logic flows, multi-provider AI. Start free. |
| Auto-Responder | Automate your WhatsApp replies with AI. Instant response times, fuzzy matching, and smart fallback. Try waai free for 14 days. |
| Knowledge Base | Build a WhatsApp knowledge base that answers 90% of customer questions. Fuzzy matching, CSV import, priority ranking. Start free. |
| Logic Flows | Design multi-step WhatsApp conversations with branching logic, conditions, and integrations. waai Logic Flows handle complex interactions. |
| AI Chatbot | Multi-provider AI chatbot for WhatsApp. OpenAI, Anthropic, z.ai. Custom system prompts, on-brand responses, graceful fallback. Start free. |
| Team Inbox | AI handles routine WhatsApp messages. You step in when it matters. Shared team inbox with live conversations and manual replies. |
| Campaigns | Run WhatsApp campaigns with 98% open rates. Personalized messages, targeted segments, trackable results. Start with waai. |
| Analytics | Track WhatsApp message volumes, response sources, and trigger counts. Know what works. Optimize what doesn't. waai analytics. |
| Document Generation | Generate Excel, Word, PDF, and Google Docs from WhatsApp conversations. Send documents directly in chat. Try waai free. |
| Super Powers | Vision, Web Search, Web Reader, and Zread for your WhatsApp AI. Analyze images, search the web, read articles. Pro plan feature. |
| Features Overview | Complete WhatsApp AI platform: knowledge base, logic flows, AI chatbot, team inbox, analytics, document generation. All in one. |
| Marketing Solution | WhatsApp marketing with 98% open rates. Capture leads, nurture prospects, run campaigns. waai marketing solution. |
| Sales Solution | Close deals on WhatsApp. AI qualifies leads, books meetings, sends quotes. Instant replies, 24/7. waai sales solution. |
| Support Solution | 24/7 WhatsApp support without the headcount. AI handles repetitive questions, escalates complex issues. waai support solution. |
| E-commerce | WhatsApp AI for e-commerce. Answer product questions, process orders, handle returns automatically. waai for online stores. |
| Healthcare | WhatsApp AI for healthcare. Schedule appointments, answer patient FAQs, automate intake. waai for clinics and hospitals. |
| Education | WhatsApp AI for education. Admissions inquiries, course info, enrollment flows. waai for schools and universities. |
| Real Estate | WhatsApp AI for real estate. Qualify leads, share listings, book viewings automatically. waai for agents and brokerages. |
| Hospitality | WhatsApp AI for hospitality. Guest communication, booking confirmations, and local recommendations. waai for hotels. |
| Restaurants | WhatsApp AI for restaurants. Menu inquiries, reservations, takeout orders. waai automates customer communication. |
| Fitness | WhatsApp AI for fitness. Class bookings, membership inquiries, schedule updates. waai for gyms and studios. |
| Professional Services | WhatsApp AI for professional services. Client intake, consultation booking, proposal generation. waai for firms. |
| Automotive | WhatsApp AI for automotive. Service bookings, inventory inquiries, test drives. waai for dealerships and service centers. |
| Pricing | waai pricing: Free trial, $29 Starter, $99 Pro, Custom enterprise. WhatsApp AI agent for every budget. Start free today. |
| Integrations | Google Workspace integrations for WhatsApp AI. Calendar, Drive, Docs, Sheets. Connect your tools, automate your conversations. |
| Contact | Contact waai for a personalized demo or support. We respond within one business day. |
| Signup | Start your free 14-day waai trial. No credit card required. Set up your WhatsApp AI agent in 10 minutes. |

---

## 12. Navigation Labels

### Primary Navigation

| Label | URL |
|-------|-----|
| Features | /features |
| Solutions | /solutions |
| Industries | /industries |
| Pricing | /pricing |
| Integrations | /integrations |
| Blog | /blog |
| Contact | /contact |

### Features Dropdown

| Label | URL |
|-------|-----|
| All Features | /features |
| Auto-Responder | /features/auto-responder |
| Knowledge Base | /features/knowledge-base |
| Logic Flows | /features/logic-flows |
| AI Chatbot | /features/ai-chatbot |
| Team Inbox | /features/team-inbox |
| Campaigns | /features/campaigns |
| Analytics | /features/analytics |
| Document Generation | /features/document-generation |
| Super Powers | /features/super-powers |

### Solutions Dropdown

| Label | URL |
|-------|-----|
| Marketing | /solutions/marketing |
| Sales | /solutions/sales |
| Support | /solutions/support |

### Industries Dropdown

| Label | URL |
|-------|-----|
| E-commerce | /industries/ecommerce |
| Healthcare | /industries/healthcare |
| Education | /industries/education |
| Real Estate | /industries/real-estate |
| Hospitality | /industries/hospitality |
| Restaurants | /industries/restaurants |
| Fitness | /industries/fitness |
| Professional Services | /industries/professional-services |
| Automotive | /industries/automotive |

### Utility Navigation

| Label | URL |
|-------|-----|
| Log In | https://waaichat.hsi.asia |
| Start Free Trial | /signup |

---

## Appendix: Reusable Copy Blocks

### Taglines (for headers, ads, and social)

- "waai.me -- because your business deserves an AI agent that never sleeps."
- "Stop asking 'why me?' Start letting AI handle it."
- "Your WhatsApp replies itself."
- "Customers message. AI responds. You grow."
- "The AI agent that works while you do not have to."
- "Instant replies. 24/7. On WhatsApp."
- "Rule-based precision. AI-powered intelligence. WhatsApp-native."
- "Knowledge base + logic flows + AI = your most reliable employee."

### CTAs (buttons, banners, overlays)

- Start Your Free 14-Day Trial
- See How It Works
- Try waai Free
- Get Started in 10 Minutes
- Start Automating Now
- Book a Demo
- Explore Features
- View Pricing
- Start Selling on WhatsApp
- Start Supporting on WhatsApp
- Start Closing on WhatsApp

### Social Proof Blocks (placeholder -- replace with real data)

- "waai responds to our customers in under a second. We used to lose leads overnight. Not anymore."
- "Setting up the knowledge base took 20 minutes. Now 90% of questions are answered without us touching anything."
- "Our support team used to dread Monday mornings. Now the AI handles the weekend flood and we start the week caught up."

---

*End of marketing copy document. All copy is ready for implementation. Replace placeholder social proof with real customer testimonials when available.*
