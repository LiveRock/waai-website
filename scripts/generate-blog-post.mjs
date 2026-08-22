/**
 * Weekly blog post generator.
 *
 * Picks the next topic from scripts/blog-topics.json (deterministic by week), calls the
 * z.ai GLM API to write a full post in waai's voice, and writes a markdown file to
 * src/content/blog/. The GitHub Actions workflow then commits it and opens a PR.
 *
 * Env:
 *   ZAI_API_KEY    (required) z.ai API key
 *   ZAI_BASE_URL   default https://api.z.ai/api/coding/paas/v4  (coding endpoint; thinking auto-disabled)
 *   ZAI_MODEL      default glm-4.6
 *   BLOG_LANG      '' | 'zh' | 'ms'   (empty = English)
 *   TOPICS_PATH    default scripts/blog-topics.json
 */
import { writeFileSync, readFileSync, existsSync, appendFileSync } from 'node:fs';

const ZAI_API_KEY = process.env.ZAI_API_KEY;
if (!ZAI_API_KEY) {
  console.error('✖ ZAI_API_KEY is not set.');
  process.exit(1);
}
const ZAI_BASE = (process.env.ZAI_BASE_URL || 'https://api.z.ai/api/coding/paas/v4').replace(/\/$/, '');
const MODEL = process.env.ZAI_MODEL || 'glm-4.6';
const LANG = (process.env.BLOG_LANG || '').trim();
const TOPICS_PATH = process.env.TOPICS_PATH || 'scripts/blog-topics.json';
const OUT_DIR = 'src/content/blog';

// ---- pick topic deterministically by week (or month for multilingual) ----
const topics = JSON.parse(readFileSync(TOPICS_PATH, 'utf8'));
const now = new Date();
const isMulti = LANG === 'zh' || LANG === 'ms'; // workflow sends 'en' for English runs — must NOT take the monthly path
const idx = isMulti
  ? now.getMonth() % topics.length            // monthly multilingual: rotate by month
  : Math.floor(now.getTime() / (7 * 24 * 3600 * 1000)) % topics.length; // weekly: by week-of-epoch
const topic = topics[idx];

const langInstruction =
  LANG === 'zh'
    ? 'Write the ENTIRE post (title, description, and body) in Simplified Chinese (简体中文). Keep the slug, category and tags in English.'
    : LANG === 'ms'
      ? 'Write the ENTIRE post (title, description, and body) in Bahasa Melayu. Keep the slug, category and tags in English.'
      : 'Write in clear, confident English.';

const SYSTEM = `You are the senior marketing director and lead writer for waai (https://waai.me), a WhatsApp AI automation platform for businesses and agencies.

About waai:
- Verified Meta Tech Provider, built on the WhatsApp Business API. Each customer gets their own WhatsApp number with an AI auto-responder plus a no-code platform.
- Core capabilities: rule-based (fuzzy) matching first with LLM fallback second; a visual logic-flow builder with 30+ step types (conditions, variables, branching, loops); a multi-branch booking system (branches/staff/services/holidays/deposits/reminders, Google Calendar two-way sync, PDF receipts); a contacts CRM + broadcast campaigns + message templates; Google Workspace integration (Calendar/Drive/Docs/Sheets); multilingual support across 5 locales; bring-your-own AI model (OpenAI, Anthropic, z.ai, llama.cpp, OpenRouter); a mobile app.
- Plans: Trial, Starter, Pro, Custom — flat monthly pricing.
- Differentiators vs Meta's free in-app Business Agent: waai does multi-branch booking, logic flows, integrations, CRM, own-AI-model, data ownership, AND a white-label reseller/agency program with recurring commission (Meta has no reseller program at all).
- Voice: confident, clear, practical, genuinely useful; warm, not corporate-stuffy. Tagline: "Your Smart Business Assistant. why not?"

Rules:
- Be accurate. Do not invent feature details, prices, or statistics beyond what's stated above.
- Educate first, sell subtly. Only link to /signup (or /pricing, /blog, /admin) in the closing CTA.
- Be fair: Meta's free agent is fine for basic FAQ use — waai is the upgrade for real automation.
- Output STRICT JSON ONLY. No markdown fences, no commentary.`;

const USER = `Write a blog post for this brief.

Working title: ${topic.title}
Angle: ${topic.brief}
Category: ${topic.category}
Suggested tags: ${topic.tags.join(', ')}

${langInstruction}

Return STRICT JSON in exactly this shape:
{
  "title": "the post title",
  "description": "1–2 sentence SEO meta description / excerpt",
  "slug": "kebab-case-english-slug-describing-the-topic",
  "category": "${topic.category}",
  "tags": ["..."],
  "bodyMarkdown": "the full article in markdown. DO NOT start with an H1 (the title is rendered separately). Structure: a strong intro hook, a '## TL;DR' section, 3–5 '##' sections, a comparison table where relevant, a '## FAQ' section with 4–6 Q&As, and a closing '## The bottom line' with one CTA link to /signup. waai's voice. ~1000–1500 words."
}`;

// ---- call z.ai (OpenAI-compatible) ----
const isCoding = ZAI_BASE.includes('/coding/');
const body = {
  model: MODEL,
  messages: [
    { role: 'system', content: SYSTEM },
    { role: 'user', content: USER },
  ],
  temperature: 0.7,
  max_tokens: 6000,
  response_format: { type: 'json_object' },
};
if (isCoding) body.thinking = { type: 'disabled' }; // coding endpoint enables reasoning by default; disable for speed

const res = await fetch(`${ZAI_BASE}/chat/completions`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ZAI_API_KEY}` },
  body: JSON.stringify(body),
});

if (!res.ok) {
  console.error(`✖ z.ai HTTP ${res.status}: ${(await res.text()).slice(0, 500)}`);
  console.error('  If "insufficient balance" / 429: your key may be coding-plan-only on the wrong endpoint, or rate-limited. Adjust ZAI_BASE_URL / ZAI_MODEL.');
  process.exit(1);
}
const data = await res.json();
const raw = data.choices?.[0]?.message?.content || '';

// ---- parse JSON (defensive: strip fences / extract first object) ----
let post;
try {
  post = JSON.parse(raw);
} catch {
  const m = raw.match(/\{[\s\S]*\}/);
  if (!m) {
    console.error('✖ Could not parse JSON from model output:\n', raw.slice(0, 800));
    process.exit(1);
  }
  post = JSON.parse(m[0]);
}

// ---- slug + uniqueness ----
const slugify = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);
let slug = slugify(post.slug || post.title) || `post-${now.getTime()}`;
let path = `${OUT_DIR}/${slug}.md`;
let n = 2;
while (existsSync(path)) {
  path = `${OUT_DIR}/${slug}-${n}.md`;
  n++;
}
const finalSlug = path.replace(`${OUT_DIR}/`, '').replace(/\.md$/, '');

// ---- write the markdown with frontmatter matching src/content.config.ts ----
const today = now.toISOString().slice(0, 10);
const tags = post.tags?.length ? post.tags : topic.tags;
const frontmatter = [
  '---',
  `title: ${JSON.stringify(post.title)}`,
  `description: ${JSON.stringify(post.description)}`,
  `pubDate: ${today}`,
  `author: waai`,
  `category: ${post.category || topic.category}`,
  `tags: ${JSON.stringify(tags)}`,
  LANG ? `lang: ${LANG}` : null,
  'draft: false',
  '---',
  '',
  post.bodyMarkdown.trim(),
  '',
].filter((l) => l !== null).join('\n');

writeFileSync(path, frontmatter);

// ---- emit GITHUB_OUTPUT for the PR step ----
const ghOut = process.env.GITHUB_OUTPUT;
if (ghOut) {
  appendFileSync(ghOut, `title=${String(post.title).replace(/\n/g, ' ')}\n`);
  appendFileSync(ghOut, `slug=${finalSlug}\n`);
  appendFileSync(ghOut, `category=${post.category || topic.category}\n`);
  appendFileSync(ghOut, `pillar=${topic.pillar}\n`);
  appendFileSync(ghOut, `lang=${LANG || 'en'}\n`);
}

console.log(`✓ Wrote ${path}`);
console.log(`  title: ${post.title}`);
console.log(`  slug: ${finalSlug}`);
console.log(`  lang: ${LANG || 'en'} | pillar: ${topic.pillar}`);
