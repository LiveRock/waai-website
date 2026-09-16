#!/usr/bin/env node
/**
 * Regenerate the default social share card (og:image) referenced by
 * BaseLayout — 1200×630, every page that doesn't pass its own ogImage.
 * Renders scripts/og-card.html in headless Chromium, screenshots at exact
 * OG dimensions, then converts to JPEG (gradients compress ~10× better than
 * PNG; og:image JPEGs are supported by WhatsApp/FB/X/LinkedIn).
 *
 * Usage (from repo root; puppeteer is borrowed from the Slate checkout):
 *   node scripts/generate-og-image.mjs
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const puppeteer = (await import(
  '/home/ubuntu/projects/Slate/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js'
)).default;

const EXECUTABLE =
  '/home/ubuntu/.cache/ms-playwright/chromium_headless_shell-1208/chrome-linux/headless_shell';

const browser = await puppeteer.launch({
  executablePath: EXECUTABLE,
  args: ['--no-sandbox', '--disable-gpu', '--force-color-profile=srgb'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(ROOT, 'og-card.html'), {
    waitUntil: 'networkidle0', // Google Fonts + logo image must be in
    timeout: 60000,
  });
  // Ensure webfonts are actually rendered before the shot.
  await page.evaluate(() => document.fonts.ready);

  // Crisp PNG to a temp path, then convert to the shipped JPEG.
  const tmpPng = path.join(os.tmpdir(), 'og-default.png');
  await page.screenshot({
    path: tmpPng,
    type: 'png',
    clip: { x: 0, y: 0, width: 1200, height: 630 }, // exact OG card size
  });

  const out = path.join(ROOT, '..', 'public', 'images', 'og-default.jpg');
  execFileSync('convert', [tmpPng, '-strip', '-quality', '92', out]);
  console.log('wrote', out);
} finally {
  await browser.close();
}
