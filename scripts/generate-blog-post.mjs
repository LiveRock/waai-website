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
 *   OUT_DIR        default src/content/blog   (override for local dry runs)
 *   SOURCE_URL     news-commentary mode: fetch this article and write an ORIGINAL
 *                  post that cites it (skips the topic rotation; category=News)
 *   SOURCE_NAME    display name for the source override, e.g. "IDC via WhatsApp for Business"
 */
import { writeFileSync, readFileSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';

const ZAI_API_KEY = process.env.ZAI_API_KEY;
if (!ZAI_API_KEY) {
  console.error('✖ ZAI_API_KEY is not set.');
  process.exit(1);
}
const ZAI_BASE = (process.env.ZAI_BASE_URL || 'https://api.z.ai/api/coding/paas/v4').replace(/\/$/, '');
const MODEL = process.env.ZAI_MODEL || 'glm-4.6';
const LANG = (process.env.BLOG_LANG || '').trim();
const TOPICS_PATH = process.env.TOPICS_PATH || 'scripts/blog-topics.json';
const OUT_DIR = process.env.OUT_DIR || 'src/content/blog';
const SOURCE_URL = (process.env.SOURCE_URL || '').trim();
const SOURCE_NAME = (process.env.SOURCE_NAME || '').trim();

// ---- fetch + extract the source article (news-commentary mode; stdlib only) ----
const BROWSER_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const MAX_SOURCE_CHARS = 14000;
const MIN_SOURCE_CHARS = 1500;

async function fetchHtml(url, attempts = 3) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'user-agent': BROWSER_UA,
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'accept-language': 'en-US,en;q=0.9',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
      });
      if (res.ok) return await res.text();
      if (res.status >= 400 && res.status < 500 && res.status !== 429) {
        throw new Error(`HTTP ${res.status}${res.status === 404 ? ' (not found)' : ' (blocked?)'}`);
      }
      lastErr = new Error(`HTTP ${res.status}`);
      console.warn(`⚠ source fetch attempt ${i}/${attempts} failed: HTTP ${res.status}`);
    } catch (err) {
      if (String(err.message).startsWith('HTTP 4')) throw err; // 4xx (≠429) is not retryable
      lastErr = err;
      console.warn(`⚠ source fetch attempt ${i}/${attempts} failed: ${err.message}`);
    }
    if (i < attempts) await new Promise((r) => setTimeout(r, 1500 * i));
  }
  throw lastErr;
}

function extractMainBlock(html) {
  const articles = [...html.matchAll(/<article\b[\s\S]*?<\/article>/gi)].sort((a, b) => b[0].length - a[0].length);
  return (
    articles[0]?.[0] ||
    html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ||
    html.match(/<body\b[\s\S]*?<\/body>/i)?.[0] ||
    html
  );
}

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&'); // &amp; last to avoid double-decoding
}

function htmlToText(html) {
  return decodeEntities(
    html
      .replace(/<!--[\s\S]*?-->/g, ' ') // comments (incl. conditional)
      .replace(/<(script|style|noscript|template|svg|iframe|form|nav|footer|aside|header|button|select)\b[\s\S]*?<\/\1>/gi, ' ') // chrome blocks, with content
      .replace(/<[^>]+>/g, ' '), // remaining tags
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function metaContent(html, prop) {
  for (const tag of html.matchAll(/<meta\b[^>]*>/gi)) {
    const t = tag[0];
    if (!t.includes(`property="${prop}"`) && !t.includes(`name="${prop}"`)) continue;
    const m = t.match(/content="([^"]*)"/i);
    if (m) return decodeEntities(m[1]).trim();
  }
  return null;
}

function pageTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1]).trim() : null;
}

async function loadSource(url) {
  const html = await fetchHtml(url);
  const fullText = htmlToText(extractMainBlock(html));
  if (fullText.length < MIN_SOURCE_CHARS) {
    throw new Error(`extracted only ${fullText.length} chars — page is likely JS-rendered or paywalled`);
  }
  const truncated = fullText.length > MAX_SOURCE_CHARS;
  if (truncated) console.warn(`⚠ source text truncated ${fullText.length} → ${MAX_SOURCE_CHARS} chars`);
  const siteName = metaContent(html, 'og:site_name') || new URL(url).hostname.replace(/^www\./, '');
  const title = metaContent(html, 'og:title') || pageTitle(html) || siteName;
  console.log(`✓ Source: "${title}" (${siteName}, ${Math.min(fullText.length, MAX_SOURCE_CHARS)} chars)`);
  return {
    url,
    name: SOURCE_NAME || siteName,
    title,
    fullText,
    text: fullText.slice(0, MAX_SOURCE_CHARS) + (truncated ? '\n[Source text truncated at 14000 characters]' : ''),
  };
}

let source = null;
if (SOURCE_URL) {
  try {
    source = await loadSource(SOURCE_URL);
  } catch (err) {
    console.error(`✖ Could not load source article: ${err.message}`);
    process.exit(1);
  }
}

// ---- pick topic deterministically by week (or month for multilingual) — topic mode only ----
const topics = JSON.parse(readFileSync(TOPICS_PATH, 'utf8'));
const now = new Date();
const isMulti = LANG === 'zh' || LANG === 'ms'; // workflow sends 'en' for English runs — must NOT take the monthly path
const idx = isMulti
  ? now.getMonth() % topics.length            // monthly multilingual: rotate by month
  : Math.floor(now.getTime() / (7 * 24 * 3600 * 1000)) % topics.length; // weekly: by week-of-epoch
const topic = topics[idx];
const brief = source
  ? { pillar: 'News commentary', category: 'News', tags: ['WhatsApp', 'industry news'] }
  : topic;

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

const USER = source
  ? `Write an original waai blog post that reacts to and analyses a third-party article.

SOURCE ARTICLE
- Publisher / site: ${source.name}
- Title: "${source.title}"
- URL: ${source.url}
- Extracted text (may be truncated):
<<<SOURCE_TEXT
${source.text}
SOURCE_TEXT

${langInstruction}

WHAT THIS POST IS
An original commentary — waai's take on what this article means for the SMBs and agencies we serve. It is NOT a summary and NOT a rewrite: your value-add is the analysis, the "so what", and an honest framing of where waai fits.

EDITORIAL STANCE — "ride the validation"
- Treat the article's publisher commissioning/publishing this research as validation: the company that owns WhatsApp is making the case that business messaging is the interaction-and-data foundation for agentic commerce. Say plainly that waai has been building in exactly this direction.
- Confident, not gloating. Do not snipe at Meta, do not imply they are late, wrong, or self-serving. Credit the thesis: it is right, and Meta's own free tooling is a legitimate on-ramp for basic use.
- Then draw the practical distinction ONCE, not in every section: the research describes the opportunity as seen by large, well-resourced commerce teams; waai is what makes it real for an SMB or agency this month — booking, logic flows, CRM, integrations, data ownership, and reseller economics.
- When you lean on a number or claim from the article, attribute it explicitly ("the IDC study Meta commissioned…"). Never present the source's claims, projections, or figures as waai's own, and never invent numbers the article does not contain.

ORIGINALITY RULES — hard constraints, not preferences
- Every sentence must be your own original expression. Do not reproduce, lightly edit, or closely paraphrase any sentence, heading, or passage from the article.
- Quote the article AT MOST TWICE. Each quote must be under 25 words, in a markdown blockquote, attributed on the line immediately after, e.g. — IDC, via WhatsApp for Business, linked to ${source.url}.
- When citing a statistic from the article, wrap the figure in your own sentence structure. Short verbatim fragments around a number are fine; copying the article's full clause around a figure is not.
- Do not reuse the article's headings or section structure, and do not reproduce its lists or tables. If a list or comparison matters, rebuild it in your own words and your own framing.
- Writing in Chinese does not loosen these rules. For the Chinese post, keep any quote in the original English inside the blockquote, optionally followed by a one-line Chinese gloss. Do not translate long passages.
- Facts and ideas may be shared; expression may not. When in doubt, say it your way.
- The title must be waai's own take, not a restatement of the article's headline.

ATTRIBUTION AND LINKING
- The FIRST link anywhere in the body must go to ${source.url}, placed within the first two paragraphs, on the publisher's name.
- A second link to ${source.url} near the end (e.g. in "The bottom line") is encouraged. Two to three links to the source in total.
- Apart from the source links, keep to the usual rule: the only waai link is the single /signup CTA in the closing section.

STRUCTURE
No leading H1 (the title renders separately):
- an intro hook that names the publisher and the news in paragraph one, with the source link;
- a '## TL;DR' section;
- 3–5 '##' sections of original analysis — useful angles: what the research actually argues; why the platform owner commissioning it matters; why messaging is the richest behavioural signal an agent can learn from; what an SMB can ship with this today; where the free tooling ends and the operational work begins;
- a short table only where it genuinely helps, in your own framing;
- a '## FAQ' section with 4–6 Q&As;
- a closing '## The bottom line' with exactly ONE CTA link to /signup.
~1000–1500 words.

Return STRICT JSON in exactly this shape:
{
  "title": "waai's original headline (its own take, not the article's headline)",
  "description": "1–2 sentence SEO meta description / excerpt",
  "slug": "kebab-case-english-slug",
  "category": "News",
  "tags": ["..."],
  "bodyMarkdown": "the full article in markdown, per the structure above"
}`
  : `Write a blog post for this brief.

Working title: ${topic.title}
Angle: ${topic.brief}
Category: ${brief.category}
Suggested tags: ${brief.tags.join(', ')}

${langInstruction}

Return STRICT JSON in exactly this shape:
{
  "title": "the post title",
  "description": "1–2 sentence SEO meta description / excerpt",
  "slug": "kebab-case-english-slug-describing-the-topic",
  "category": "${brief.category}",
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

async function callModel() {
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

  // parse JSON (defensive: strip fences / extract first object)
  try {
    return JSON.parse(raw);
  } catch {
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) {
      console.error('✖ Could not parse JSON from model output:\n', raw.slice(0, 800));
      process.exit(1);
    }
    return JSON.parse(m[0]);
  }
}

// ---- originality check (news mode): refuse to write near-verbatim output ----
// Strips blockquote lines (short attributed quotes are permitted), then looks for
// any run of >= 8 consecutive words shared with the source. Resamples on failure.
function normalizeWords(s, { dropQuotes = false } = {}) {
  const cleaned = dropQuotes
    ? String(s)
        .split('\n')
        .filter((l) => !l.trim().startsWith('>'))
        .join('\n')
    : String(s);
  return cleaned
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

const sourceGrams = source
  ? (() => {
      const w = normalizeWords(source.fullText);
      const grams = new Set();
      for (let i = 0; i + 8 <= w.length; i++) grams.add(w.slice(i, i + 8).join(' '));
      return grams;
    })()
  : null;

// Runs are maximal sequences of >= n consecutive words shared with the source
// (outside blockquotes). Two tiers: 8-12 words = warn (usually statistic citations
// / common collocations — facts aren't copyrightable expression), >= 13 = hard fail
// (virtually certain expressive copying).
const VERBATIM_WARN_N = 8;
const VERBATIM_HARD_N = 13;

function findVerbatimRuns(bodyMarkdown, n) {
  if (!sourceGrams) return [];
  const genWords = normalizeWords(bodyMarkdown, { dropQuotes: true });
  const runs = [];
  for (let i = 0; i + n <= genWords.length; ) {
    if (sourceGrams.has(genWords.slice(i, i + 8).join(' '))) {
      let end = i + 8;
      while (end + 1 <= genWords.length && sourceGrams.has(genWords.slice(end - 7, end + 1).join(' '))) end++;
      const run = genWords.slice(i, end);
      if (run.length >= n) runs.push(run);
      i = end;
    } else {
      i++;
    }
  }
  return runs;
}

function quoteStats(body) {
  // consecutive '>' lines form ONE blockquote
  const blocks = [];
  let cur = null;
  for (const line of String(body).split('\n')) {
    if (line.trim().startsWith('>')) {
      const text = line.replace(/^\s*>\s?/, '');
      cur = cur ? `${cur} ${text}` : text;
    } else if (cur) {
      blocks.push(cur);
      cur = null;
    }
  }
  if (cur) blocks.push(cur);
  const longest = blocks.reduce((m, q) => Math.max(m, q.split(/\s+/).filter(Boolean).length), 0);
  return { count: blocks.length, longest };
}

// ---- generate; news mode resamples on long verbatim overlap (fresh draw, same guardrails) ----
const MAX_GEN_ATTEMPTS = 3;
let post;
let shortOverlaps = [];
for (let attempt = 1; ; attempt++) {
  post = await callModel();
  const hardRuns = findVerbatimRuns(post.bodyMarkdown || '', VERBATIM_HARD_N);
  if (!hardRuns.length) {
    shortOverlaps = findVerbatimRuns(post.bodyMarkdown || '', VERBATIM_WARN_N);
    break;
  }
  console.warn(`⚠ attempt ${attempt}/${MAX_GEN_ATTEMPTS}: verbatim overlap with the source (${hardRuns.length} run(s) of >= ${VERBATIM_HARD_N} words outside quotes):`);
  for (const run of hardRuns) console.warn(`  "${run.slice(0, 12).join(' ')}…"`);
  if (attempt >= MAX_GEN_ATTEMPTS) {
    console.error('✖ Verbatim overlap persisted after resampling — refusing to write. Tighten the originality rules in the prompt.');
    process.exit(1);
  }
  console.warn('Resampling with a fresh generation…');
}

let sourceCheck = 'n/a';
if (source) {
  const parts = [];
  if (shortOverlaps.length) {
    console.warn(`⚠ ${shortOverlaps.length} short overlap(s) of ${VERBATIM_WARN_N}–${VERBATIM_HARD_N - 1} words (likely statistic citations / common phrases — review in the PR):`);
    for (const run of shortOverlaps) console.warn(`  "${run.slice(0, 12).join(' ')}…"`);
    parts.push(`review: ${shortOverlaps.length} short overlap${shortOverlaps.length === 1 ? '' : 's'} (8–12 words)`);
  } else {
    parts.push('0 verbatim runs');
  }
  const qs = quoteStats(post.bodyMarkdown || '');
  if (qs.count > 2 || qs.longest > 30) {
    console.warn(`⚠ quote guardrail: ${qs.count} quotes, longest ${qs.longest} words (target: <= 2 quotes, < 25 words each)`);
    parts.push(`quotes: ${qs.count}, longest ${qs.longest}w`);
  } else {
    parts.push(`${qs.count} quote${qs.count === 1 ? '' : 's'}`);
  }
  sourceCheck = parts.join(', ');
}

// ---- slug + uniqueness ----
const slugify = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);
let slug = slugify(post.slug || post.title) || `post-${now.getTime()}`;
if (source && LANG) slug = `${slug}-${LANG}`; // same-source EN+ZH runs must not collide / conflict at merge
let path = `${OUT_DIR}/${slug}.md`;
let n = 2;
while (existsSync(path)) {
  path = `${OUT_DIR}/${slug}-${n}.md`;
  n++;
}
const finalSlug = path.replace(`${OUT_DIR}/`, '').replace(/\.md$/, '');

// ---- write the markdown with frontmatter matching src/content.config.ts ----
const today = now.toISOString().slice(0, 10);
const tags = post.tags?.length ? post.tags : brief.tags;
const frontmatter = [
  '---',
  `title: ${JSON.stringify(post.title)}`,
  `description: ${JSON.stringify(post.description)}`,
  `pubDate: ${today}`,
  `author: waai`,
  `category: ${post.category || brief.category}`,
  `tags: ${JSON.stringify(tags)}`,
  source ? `sourceUrl: ${JSON.stringify(source.url)}` : null,
  source?.name ? `sourceName: ${JSON.stringify(source.name)}` : null,
  'draft: false',
  '---',
  '',
  post.bodyMarkdown.trim(),
  '',
].filter((l) => l !== null).join('\n');

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(path, frontmatter);

// ---- emit GITHUB_OUTPUT for the PR step ----
const ghOut = process.env.GITHUB_OUTPUT;
if (ghOut) {
  appendFileSync(ghOut, `title=${String(post.title).replace(/\n/g, ' ')}\n`);
  appendFileSync(ghOut, `slug=${finalSlug}\n`);
  appendFileSync(ghOut, `category=${post.category || brief.category}\n`);
  appendFileSync(ghOut, `pillar=${brief.pillar}\n`);
  appendFileSync(ghOut, `lang=${LANG || 'en'}\n`);
  appendFileSync(ghOut, `mode=${source ? 'news' : 'topic'}\n`);
  appendFileSync(ghOut, `source_url=${source?.url || ''}\n`);
  appendFileSync(ghOut, `source_check=${sourceCheck}\n`);
}

console.log(`✓ Wrote ${path}`);
console.log(`  title: ${post.title}`);
console.log(`  slug: ${finalSlug}`);
console.log(`  lang: ${LANG || 'en'} | pillar: ${brief.pillar} | mode: ${source ? 'news' : 'topic'}`);
