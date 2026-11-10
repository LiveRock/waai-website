#!/usr/bin/env node
/**
 * LinkedIn session manager for waai marketing ops.
 *
 * Context acquisition, in order of preference:
 *   1. Saved session  ~/.config/waai-website/linkedin-session.json (from a previous run)
 *   2. li_at handoff  ~/.config/waai-website/li_at.txt (exported by Peter from his browser)
 *   3. Password login from logins.json — SINGLE attempt, no retries (account safety);
 *      a fresh server login usually hits a reCAPTCHA checkpoint, which we do not defeat.
 *
 * Verifies the session (feed loads), persists it as storage state (600), then attempts
 * the G2 "Sign in with LinkedIn" SSO hop in the same context.
 * Password is never printed, logged, or written anywhere except the login form.
 *
 * Run: NODE_PATH=/home/ubuntu/projects/Slate/node_modules node scripts/linkedin-session.cjs
 */
const { chromium } = require('playwright');
const fs = require('fs');
const os = require('os');
const path = require('path');

const CREDS_PATH = path.join(os.homedir(), '.config/waai-website/logins.json');
const STATE_PATH = path.join(os.homedir(), '.config/waai-website/linkedin-session.json');
const LI_AT_PATH = path.join(os.homedir(), '.config/waai-website/li_at.txt');

const UA_PATH = path.join(os.homedir(), '.config/waai-website/useragent.txt');
const BCOOKIE_PATH = path.join(os.homedir(), '.config/waai-website/bcookie.txt');
const DEFAULT_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
// Peter's real UA if handed off — presenting the session with the browser it was issued to
const UA = (fs.existsSync(UA_PATH) ? fs.readFileSync(UA_PATH, 'utf8').trim() : '') || DEFAULT_UA;

function readBcookie() {
  if (!fs.existsSync(BCOOKIE_PATH)) return null;
  const v = fs.readFileSync(BCOOKIE_PATH, 'utf8').trim();
  return v || null;
}
const log = (...a) => console.log('[li-session]', ...a);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function newCtx(browser, storageState) {
  const opts = { userAgent: UA, viewport: { width: 1366, height: 900 }, locale: 'en-US' };
  if (storageState) opts.storageState = storageState;
  const ctx = await browser.newContext(opts);
  // LinkedIn binds sessions to the browser they were issued to: override our fresh
  // bcookie with Peter's real one when handed off, so protected pages (/in/, /admin/)
  // stop 302-bouncing (diagnosed 2026-11-10: 11×302 → 429 without it).
  const bcookie = readBcookie();
  if (bcookie) {
    await ctx.addCookies([{ name: 'bcookie', value: bcookie, domain: '.linkedin.com', path: '/', secure: true, sameSite: 'None' }]);
    log('using handed-off bcookie');
  }
  return ctx;
}

async function sessionAlive(ctx) {
  const page = await ctx.newPage();
  try {
    await page.goto('https://www.linkedin.com/feed/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(4000);
    const url = page.url();
    const alive = /linkedin\.com\/(feed|home|mypage|in\/|admin)/i.test(url) && !/login|checkpoint|challenge/i.test(url);
    return { alive, url, title: await page.title().catch(() => '') };
  } finally {
    await page.close().catch(() => {});
  }
}

async function tryG2(ctx) {
  const page = await ctx.newPage();
  try {
    log('opening my.g2.com');
    await page.goto('https://my.g2.com/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(4000);
    await page.screenshot({ path: '/tmp/li-02-g2-landing.png' });

    const sso = page.locator('a:has-text("LinkedIn"), button:has-text("LinkedIn")').first();
    if (await sso.count()) {
      log('clicking LinkedIn SSO');
      const popup = page.waitForEvent('popup', { timeout: 15000 }).catch(() => null);
      await sso.click();
      const p2 = (await popup) || page;
      if (p2 !== page) await p2.waitForLoadState('domcontentloaded', { timeout: 30000 }).catch(() => {});
      await sleep(6000);
      await p2.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
      await sleep(2000);
      await p2.screenshot({ path: '/tmp/li-03-g2-after-sso.png' });
      const url = p2.url();
      const text = (await p2.locator('body').innerText({ timeout: 10000 }).catch(() => '')) || '';
      return {
        finalUrl: url,
        title: await p2.title().catch(() => ''),
        looksLoggedIn: /sign out|log out|dashboard|welcome|sellers|contributor/i.test(text.slice(0, 3000)),
      };
    }
    const text = (await page.locator('body').innerText({ timeout: 10000 }).catch(() => '')) || '';
    const state = {
      finalUrl: page.url(),
      title: await page.title().catch(() => ''),
      looksLoggedIn: /sign out|log out|dashboard|welcome|sellers|contributor/i.test(text.slice(0, 3000)),
      noSsoButtonFound: true,
    };
    await page.screenshot({ path: '/tmp/li-03-g2-state.png' });
    return state;
  } finally {
    await page.close().catch(() => {});
  }
}

(async () => {
  const report = { linkedin: {}, g2: {}, outcome: '' };
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] });

  try {
    // --- 1. Acquire a context ---
    // Precedence: a fresh li_at handoff ALWAYS wins (Peter re-exported = "use this now"),
    // then the saved session. Handoffs start a clean context (only li_at + optional
    // bcookie) so stale sibling cookies from a previous session never ride along.
    let ctx = null;
    let source = '';

    if (fs.existsSync(LI_AT_PATH) && fs.readFileSync(LI_AT_PATH, 'utf8').trim()) {
      const liAt = fs.readFileSync(LI_AT_PATH, 'utf8').trim();
      ctx = await newCtx(browser);
      await ctx.addCookies([{ name: 'li_at', value: liAt, domain: '.linkedin.com', path: '/', httpOnly: true, secure: true, sameSite: 'None' }]);
      source = 'li_at-handoff';
    } else if (fs.existsSync(STATE_PATH)) {
      ctx = await newCtx(browser, STATE_PATH);
      source = 'saved-session';
    }

    // --- 2. Verify / establish the session ---
    if (ctx) {
      log('context from', source, '— verifying session');
      const check = await sessionAlive(ctx);
      report.linkedin = check;
      log('session check:', JSON.stringify(check));
      if (check.alive) {
        await ctx.storageState({ path: STATE_PATH });
        fs.chmodSync(STATE_PATH, 0o600);
        if (source === 'li_at-handoff' && fs.existsSync(LI_AT_PATH)) fs.unlinkSync(LI_AT_PATH);
        log('session saved →', STATE_PATH, source === 'li_at-handoff' ? '(li_at.txt consumed)' : '');
      } else {
        log('session dead from', source, '— falling through to password login');
        await ctx.close().catch(() => {});
        ctx = null;
      }
    }

    if (!ctx) {
      const creds = JSON.parse(fs.readFileSync(CREDS_PATH, 'utf8'));
      const email = creds.linkedin.email;
      const password = creds.linkedin.password;
      if (!email || !password) { console.error('linkedin credentials missing in logins.json'); process.exit(2); }

      ctx = await newCtx(browser);
      const page = await ctx.newPage();
      log('opening linkedin.com/login (single password attempt)');
      await page.goto('https://www.linkedin.com/login', { waitUntil: 'domcontentloaded', timeout: 45000 });
      // 2026-11 login form: randomized ids — target stable autocomplete attrs, visible only
      const emailInput = page.locator('input[autocomplete="username"]:visible').first();
      const passInput = page.locator('input[autocomplete="current-password"]:visible').first();
      await emailInput.fill(email);
      await passInput.fill(password);
      const remember = page.locator('input[type="checkbox"]:visible').first();
      if (await remember.count()) await remember.check().catch(() => {});
      const signIn = page.locator('button:visible', { hasText: 'Sign in' }).last();
      await Promise.all([
        page.waitForLoadState('domcontentloaded', { timeout: 45000 }).catch(() => {}),
        signIn.click(),
      ]);
      await sleep(6000);
      await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
      await sleep(2000);

      const url = page.url();
      const cookies = await ctx.cookies('https://www.linkedin.com');
      const liAt = cookies.find((c) => c.name === 'li_at');
      report.linkedin = {
        finalUrl: url,
        sessionCookie: !!liAt,
        isChallenge: /checkpoint|challenge|verify|unusual activity|confirm your identity/i.test(url),
        title: await page.title().catch(() => ''),
      };
      await page.screenshot({ path: '/tmp/li-01-after-login.png' });
      log('password login:', JSON.stringify(report.linkedin));
      if (!liAt) {
        report.outcome = 'linkedin-login-failed-or-challenged';
        console.log(JSON.stringify(report, null, 2));
        await browser.close();
        process.exit(1);
      }
      await ctx.storageState({ path: STATE_PATH });
      fs.chmodSync(STATE_PATH, 0o600);
      log('session saved →', STATE_PATH);
      await page.close();
    }

    // --- 3. G2 via LinkedIn SSO ---
    report.g2 = await tryG2(ctx);
    log('g2:', JSON.stringify(report.g2));
    report.outcome = 'linkedin-session-ok';
    console.log(JSON.stringify(report, null, 2));
  } catch (e) {
    report.outcome = 'error';
    report.error = String(e && e.message ? e.message : e).slice(0, 500);
    console.log(JSON.stringify(report, null, 2));
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
