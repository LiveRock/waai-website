#!/usr/bin/env node
/**
 * Per-post blog feature/og images (1200×630 JPEG in public/images/blog/).
 *
 * Composition (split card): LEFT 680px dark-teal brand panel (category line,
 * white Inter title, waai.me mark) + RIGHT 520×630 photo panel. The photo is
 * generated PORTRAIT (4:5) — Pollinations' free cap is ~0.59MP of area at any
 * aspect, so a portrait request yields ~1.8× the pixels the panel needs and
 * the photo is DOWNSCALED to native-panel sharpness (the old full-bleed design
 * upscaled a wide 1059×556 render and read blurry). Scene = real people in
 * real workplaces (SCENE_RULES keyword map). If Pollinations is unreachable
 * the script falls back to a full-canvas brand gradient — the weekly blog
 * pipeline must never block on an image service.
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
const PW = 520; // photo panel width — art renders here at NATIVE resolution
const LX = W - PW; // text/brand panel width (680)

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
  // Portrait request: the free-tier cap is ~0.59MP of AREA at any aspect, so a
  // 4:5 request returns ~687×858 — 1.8× the pixels the 520×630 photo panel
  // needs, letting the panel DOWNSCALE (native-res sharp) instead of the old
  // wide design's ~1.2× upscale from 1059×556.
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=848&height=1059&nologo=true&seed=${seed}&model=flux`;
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
    // 1. Brand panel (left, 680px — or the full canvas as gradient fallback).
    const art = await fetchArt(title, seedFromSlug(slug));
    const panelW = art ? LX : W;
    const base = path.join(tmp, 'base.png');
    const panelL = path.join(tmp, 'panelL.png');
    execFileSync('convert', [
      '-size', `${panelW}x${H}`, 'gradient:#05291f-#0b3f2e',
      '-fill', 'rgba(52,211,153,0.07)', '-draw', `circle ${panelW - 90},96 ${panelW - 90},10`,
      '-fill', 'rgba(167,139,250,0.06)', '-draw', `circle 120,${H - 80} 120,${H - 200}`,
      panelL,
    ]);
    if (art) {
      execFileSync('convert', [
        '-size', `${W}x${H}`, 'xc:#05291f',
        panelL, '-gravity', 'West', '-geometry', '+0+0', '-composite',
        base,
      ]);
    } else {
      console.warn('  pollinations unreachable — brand gradient fallback (no photo panel)');
      execFileSync('convert', [panelL, base]);
    }

    // 2. Photo panel (right, 520×630) — rendered at native resolution.
    if (art) {
      const artPath = path.join(tmp, 'art.jpg');
      fs.writeFileSync(artPath, art);
      const [sw, sh] = execFileSync('identify', ['-format', '%w %h', artPath]).toString().split(/\s+/).map(Number);
      // Crop to the panel aspect, anchored North (heads stay in frame; the
      // art's bottom strip — where the Pollinations watermark lives — drops).
      const PA = PW / H;
      const cropArgs = sw / sh >= PA
        ? [Math.round(sh * PA), sh, 'Center']
        : [sw, Math.round(sw / PA), 'North'];
      const cropped = path.join(tmp, 'cropped.jpg');
      execFileSync('convert', [
        artPath, '-gravity', cropArgs[2], '-crop', `${cropArgs[0]}x${cropArgs[1]}+0+0`, '+repage', cropped,
      ]);

      // Watermark defense (no scrim over the photo): feathered blur patch on
      // the bottom-right quadrant + a dark fade along the panel's bottom edge.
      const patch = path.join(tmp, 'patch.png');
      const patchRaw = path.join(tmp, 'patch-raw.png');
      const patchMask = path.join(tmp, 'patch-mask.png');
      execFileSync('convert', [
        cropped, '-gravity', 'SouthEast', '-crop', '55%x22%+0+0', '+repage',
        '-blur', '0x22', '-modulate', '80,90', patchRaw,
      ]);
      const dim = execFileSync('identify', ['-format', '%wx%h', patchRaw]).toString();
      execFileSync('convert', [
        '-size', dim, 'xc:white', '-shave', '14x14',
        '-bordercolor', 'black', '-border', '14', '-blur', '0x7', patchMask,
      ]);
      execFileSync('convert', [
        patchRaw, patchMask, '-alpha', 'off', '-compose', 'CopyOpacity', '-composite', patch,
      ]);

      // Downscale to the panel (source is ~1.8× the panel's pixels — this is
      // where the sharpness comes from) + a light unsharp touch.
      const photo = path.join(tmp, 'photo.png');
      execFileSync('convert', [
        cropped, patch, '-gravity', 'SouthEast', '-geometry', '+0+0', '-composite',
        '-resize', `${PW}x${H}^`, '-gravity', 'center', '-extent', `${PW}x${H}`,
        '-unsharp', '0x0.8+0.6+0.02', photo,
      ]);
      const fade = path.join(tmp, 'fade.png');
      execFileSync('convert', [
        '-size', `${PW}x110`, 'gradient:rgba(5,28,22,0)-rgba(5,28,22,0.85)', fade,
      ]);
      execFileSync('convert', [photo, fade, '-gravity', 'South', '-composite', photo]);
      execFileSync('convert', [
        base, photo, '-gravity', 'East', '-geometry', '+0+0', '-composite',
        '-fill', 'rgba(52,211,153,0.9)', '-draw', `rectangle ${LX - 2},0 ${LX + 1},${H}`,
        base,
      ]);
    }

    // 3. Text on the brand panel (ASCII titles only — no CJK font bundled;
    //    CJK posts get the mark alone).
    const mark = path.join(tmp, 'mark.png');
    execFileSync('convert', [
      '-background', 'none', '-fill', 'rgba(255,255,255,0.82)',
      '-font', FONT_SEMI, '-pointsize', '26',
      'caption:waai.me', mark,
    ]);
    if (asciiTitle) {
      const size = title.length <= 40 ? 50 : title.length <= 75 ? 42 : 34;
      const cat = captionPng((category || 'Blog').toUpperCase(), {
        font: FONT_SEMI, pointsize: 26, fill: '#6ee7b7', width: LX - 96,
        tmp, name: 'cat.png',
      });
      const title2 = captionPng(title, {
        font: FONT_BOLD, pointsize: size, fill: 'white', width: LX - 96,
        tmp, name: 'title.png',
      });
      execFileSync('convert', [
        base,
        cat.path, '-gravity', 'NorthWest', '-geometry', '+48+64', '-composite',
        title2.path, '-gravity', 'NorthWest', '-geometry', `+48+${64 + cat.height + 26}`, '-composite',
        mark, '-gravity', 'SouthWest', '-geometry', '+48+40', '-composite',
        '-strip', '-quality', '90', outAbs,
      ]);
    } else {
      execFileSync('convert', [
        base, mark, '-gravity', 'SouthWest', '-geometry', '+48+40', '-composite',
        '-strip', '-quality', '90', outAbs,
      ]);
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
