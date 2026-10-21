#!/usr/bin/env node
/**
 * Per-post blog feature/og images (1200×630 JPEG in public/images/blog/).
 *
 * Composition: photorealistic scene photo from Pollinations (keyless flux,
 * deterministic seed per slug — real people in real workplaces, e.g. salon
 * stylist, clinic receptionist, tutoring centre, picked from the post title)
 * + bottom scrim + category line + white title + waai.me mark, composited
 * with ImageMagick. If Pollinations is unreachable the script falls back to a
 * brand gradient — the weekly blog pipeline must never block on an image
 * service.
 *
 * CLI:
 *   node scripts/generate-blog-image.mjs src/content/blog/<post>.md [--force]
 *   node scripts/generate-blog-image.mjs --all [--force]   # every post lacking heroImage
 *
 * Also imported by scripts/generate-blog-post.mjs for weekly automation.
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'blog');
const FONT_BOLD = path.join(ROOT, 'scripts', 'assets', 'Inter-700.ttf');
const FONT_SEMI = path.join(ROOT, 'scripts', 'assets', 'Inter-600.ttf');

const W = 1200;
const H = 630;

/** Deterministic 32-bit FNV-1a hash → Pollinations seed (same post = same art). */
function seedFromSlug(slug) {
  let h = 0x811c9dc5;
  for (const c of slug) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h % 2147483647;
}

/** Pull the meaningful topic words out of a (boilerplate-heavy) post title. */
function topicFromTitle(title) {
  const stop = new Set(['whatsapp', 'ai', 'the', 'a', 'an', 'for', 'and', 'or', 'of', 'to', 'in', 'on', 'with', 'how', 'why', 'your', 'you', 'is', 'are', 'what', 'guide', '2026', 'vs']);
  const words = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stop.has(w));
  return words.slice(0, 10).join(' ');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Scene fragments that put real people and workplaces in the frame — first
 * keyword match on the title wins, so each industry post gets its own setting.
 */
const SCENE_RULES = [
  [/salon|spa|barber|hair|beauty|nail/, "a hairstylist styling a client's hair in a bright modern salon"],
  [/clinic|health|dental|medical|patient/, 'a friendly receptionist greeting a patient at a modern clinic front desk'],
  [/tutor|education|school|student|class|teacher|course/, 'a teacher helping students with worksheets at a tutoring centre'],
  [/restaurant|cafe|coffee|food|kitchen|waiter|bakery/, 'a smiling waiter serving guests in a warm modern cafe'],
  [/retail|shop|store|boutique|grocer|catalog/, 'a shop owner arranging products on shelves in a small retail store'],
  [/hotel|travel|booking|appointment|reserv|schedul|deposit/, 'a receptionist confirming a booking on a computer at a hotel front desk'],
  [/ecommerce|commerce|order|pack|ship|deliver|warehouse/, 'a small business owner packing customer orders in a bright workshop'],
  [/agency|reseller|white.?label|consult|freelanc|partner/, 'a consultant showing a laptop to a client across a desk in a modern office'],
  [/broadcast|marketing|campaign|promo|newsletter/, 'a marketing manager reviewing a campaign dashboard on a large screen'],
  [/developer|builder|api|integrat|software|chatbot|automat/, 'a product team collaborating around computer monitors in a modern office'],
  [/pric|cost|billing|plan|fee|budget|per-message/, 'a business team comparing pricing options on a laptop in a meeting room'],
  [/team|office|business|company|workplace|staff|agent/, 'a diverse small business team having a friendly meeting in a modern office'],
];
const DEFAULT_SCENE = 'a smiling small business owner using a smartphone at their workplace counter';

function sceneFromTitle(title) {
  const t = title.toLowerCase();
  for (const [re, scene] of SCENE_RULES) if (re.test(t)) return scene;
  return DEFAULT_SCENE;
}

async function fetchArt(title, seed) {
  const scene = sceneFromTitle(title);
  const topic = topicFromTitle(title);
  const prompt = encodeURIComponent(
    `photorealistic lifestyle photograph of ${scene}, business messaging and ${topic} context, ` +
      `person interacting with a smartphone, real workplace environment in the background, ` +
      `warm natural window light, candid authentic moment, subtle teal color accents, ` +
      `shot on Canon EOS R5 with 50mm lens, tack-sharp focus on the subject, ` +
      `highly detailed skin and fabric texture, crisp professional color grading, ` +
      `editorial stock photography, no text, no words, no letters, no watermark`
  );
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=${W}&height=${H}&nologo=true&seed=${seed}&model=flux`;
  // Free tier: 1 image / 45s / IP (HTTP 402 FREE_LIMIT) — space out retries.
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(120000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 5000) throw new Error(`suspiciously small (${buf.length}B)`);
      return buf;
    } catch (err) {
      console.warn(`  pollinations attempt ${attempt} failed: ${err.message}`);
      if (attempt < 3) await sleep(50000);
    }
  }
  return null;
}

function hasIM() {
  try { execFileSync('convert', ['-version'], { stdio: 'ignore' }); return true; }
  catch { return false; }
}

/**
 * Two-layer scrim: a light full-height tint plus a bottom band that reaches
 * FULL opacity — Pollinations watermarks the lower area of its art (even with
 * nologo=true), so the bottom must be solid. The tint stays LIGHT (max ~0.32):
 * the band alone carries title contrast, and a heavy veil reads as a washed,
 * soft photo.
 */
function makeScrim(tmp) {
  const tint = path.join(tmp, 'tint.png');
  const band = path.join(tmp, 'band.png');
  const p = path.join(tmp, 'scrim.png');
  execFileSync('convert', [
    '-size', `${W}x${H}`, 'gradient:rgba(5,28,22,0.04)-rgba(5,28,22,0.32)', tint,
  ]);
  execFileSync('convert', [
    '-size', `${W}x280`, 'gradient:rgba(5,28,22,0)-rgba(5,28,22,1.0)', band,
  ]);
  execFileSync('convert', [tint, band, '-gravity', 'south', '-composite', p]);
  return p;
}

/** Render wrapped white text as a transparent PNG, auto-height. Returns {path, height}. */
function captionPng(text, { font, pointsize, fill, width, tmp, name }) {
  const p = path.join(tmp, name);
  execFileSync('convert', [
    '-background', 'none', '-fill', fill,
    '-font', font, '-pointsize', String(pointsize),
    '-size', `${width}x`,
    `caption:${text}`,
    p,
  ]);
  const h = parseInt(execFileSync('identify', ['-format', '%h', p]).toString(), 10);
  return { path: p, height: h };
}

/**
 * Generate the image for one post.
 * @returns {Promise<string>} site-relative path, e.g. /images/blog/<slug>.jpg
 */
export async function generateBlogImage({ slug, title, category }) {
  if (!hasIM()) throw new Error('ImageMagick (convert) not available');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outAbs = path.join(OUT_DIR, `${slug}.jpg`);
  const outRel = `/images/blog/${slug}.jpg`;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'blogimg-'));
  const asciiTitle = /^[\x20-\x7E]*$/.test(title);

  try {
    // 1. Background art — AI illustration, or brand gradient fallback.
    const art = await fetchArt(title, seedFromSlug(slug));
    let base = path.join(tmp, 'base.png');
    if (art) {
      const artPath = path.join(tmp, 'art.jpg');
      fs.writeFileSync(artPath, art);
      // Pollinations stamps its watermark on the lower area of the art even
      // with nologo=true. Triple defense: (1) crop the bottom/right strips,
      // (2) blur+darken the whole bottom-right quadrant (unreadable smudge),
      // (3) the opaque scrim band covers whatever remains.
      const cropped = path.join(tmp, 'cropped.jpg');
      execFileSync('convert', [
        artPath, '-gravity', 'NorthWest', '-crop', '94x84%+0+0', '+repage', cropped,
      ]);
      // Watermark patch: blur+darken the bottom-right quadrant, edges FEATHERED
      // (a hard-edged paste leaves a visible rectangular seam).
      const patch = path.join(tmp, 'patch.png');
      const patchRaw = path.join(tmp, 'patch-raw.png');
      const patchMask = path.join(tmp, 'patch-mask.png');
      execFileSync('convert', [
        cropped, '-gravity', 'SouthEast', '-crop', '55%x25%+0+0', '+repage',
        '-blur', '0x22', '-modulate', '80,90', patchRaw,
      ]);
      const dim = execFileSync('identify', ['-format', '%wx%h', patchRaw]).toString();
      execFileSync('convert', [
        '-size', dim, 'xc:white', '-shave', '18x18',
        '-bordercolor', 'black', '-border', '18', '-blur', '0x9', patchMask,
      ]);
      execFileSync('convert', [
        patchRaw, patchMask, '-alpha', 'off', '-compose', 'CopyOpacity', '-composite', patch,
      ]);
      execFileSync('convert', [
        cropped, patch, '-gravity', 'SouthEast', '-geometry', '+0+0', '-composite',
        // Pollinations free tier caps flux at ~1059×556 (whatever you request),
        // so the resize UPSCALES ~1.2× — and free flux is inherently soft.
        // Dual-radius unsharp (fine detail + local contrast) + slight saturation
        // + gentle sigmoidal curve: edge-contrast +63% vs a single modest pass
        // (measured, 2026-10-21 A/B — vision models flip on this, trust metrics).
        '-resize', `${W}x${H}^`,
        '-unsharp', '0x0.8+1.4+0.008', '-unsharp', '0x2.5+0.5+0.01',
        '-modulate', '100,108', '-sigmoidal-contrast', '1.5x50%',
        '-gravity', 'center', '-extent', `${W}x${H}`, '-strip', base,
      ]);
    } else {
      console.warn('  pollinations unreachable — using brand gradient fallback');
      execFileSync('convert', [
        '-size', `${W}x${H}`,
        'gradient:#062e22-#2e1065',
        '-fill', 'rgba(52,211,153,0.16)', '-draw', `circle 950,140 950,20`,
        '-fill', 'rgba(167,139,250,0.13)', '-draw', `circle 220,520 220,400`,
        base,
      ]);
    }

    // 2. Text overlay (ASCII titles only — no CJK font bundled; CJK posts get art-only).
    if (asciiTitle) {
      const scrim = makeScrim(tmp);
      execFileSync('convert', [base, scrim, '-composite', base]);

      const size = title.length <= 55 ? 54 : title.length <= 90 ? 46 : 38;
      const title2 = captionPng(title, {
        font: FONT_BOLD, pointsize: size, fill: 'white', width: 940,
        tmp, name: 'title.png',
      });
      const cat = captionPng((category || 'Blog').toUpperCase(), {
        font: FONT_SEMI, pointsize: 26, fill: '#6ee7b7', width: 940,
        tmp, name: 'cat.png',
      });

      const mark = path.join(tmp, 'mark.png');
      execFileSync('convert', [
        '-background', 'none', '-fill', 'rgba(255,255,255,0.82)',
        '-font', FONT_SEMI, '-pointsize', '26',
        `caption:waai.me`, mark,
      ]);

      execFileSync('convert', [
        base,
        title2.path, '-gravity', 'southwest', '-geometry', '+48+96', '-composite',
        cat.path, '-gravity', 'southwest', '-geometry', `+48+${96 + title2.height + 16}`, '-composite',
        mark, '-gravity', 'southeast', '-geometry', '+48+40', '-composite',
        '-strip', '-quality', '90', outAbs,
      ]);
    } else {
      execFileSync('convert', [base, '-strip', '-quality', '90', outAbs]);
    }

    console.log(`  image → ${outRel}`);
    return outRel;
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

/** Parse frontmatter fields we need from a post .md (title/category/heroImage). */
function readFrontmatter(file) {
  const src = fs.readFileSync(file, 'utf8');
  const fm = src.split(/^---\s*$/m)[1] || '';
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) || [])[1] || '';
  return { src, title: get('title'), category: get('category'), heroImage: get('heroImage') };
}

/** Insert heroImage after the description line (single-line quoted in all posts). */
function setHeroImage(file, relPath) {
  const { src } = readFrontmatter(file);
  const patched = src.replace(/^(description:.*(?:\n(?:  .*)?)*)$/m, `$1\nheroImage: "${relPath}"`);
  fs.writeFileSync(file, patched);
}

async function processPost(file, force) {
  const slug = path.basename(file, '.md');
  const { title, heroImage } = readFrontmatter(file);
  if (heroImage && !force) {
    console.log(`${slug}: already has heroImage, skipping`);
    return;
  }
  if (!title) throw new Error(`${file}: no title found`);
  console.log(`${slug}:`);
  const rel = await generateBlogImage({ slug, title, category: readFrontmatter(file).category });
  if (!heroImage) setHeroImage(file, rel);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  if (args.includes('--all')) {
    const dir = path.join(ROOT, 'src', 'content', 'blog');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
    for (const f of files) {
      const slug = path.basename(f, '.md');
      // Skip already-done posts without burning a Pollinations call.
      if (!force && readFrontmatter(path.join(dir, f)).heroImage) {
        console.log(`${slug}: already has heroImage, skipping`);
        continue;
      }
      await processPost(path.join(dir, f), force);
      await sleep(47000); // free tier: 1 image / 45s / IP
    }
  } else {
    const target = args.find((a) => !a.startsWith('--'));
    if (!target) { console.error('usage: generate-blog-image.mjs <post.md> | --all [--force]'); process.exit(1); }
    await processPost(path.resolve(target), force);
  }
}
