import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Blog-post lastmod for the sitemap: slug -> updatedDate ?? pubDate. Parsed
// from frontmatter with a regex (config runs outside Astro's content layer).
// Static pages intentionally get NO lastmod — a build-time date would be noise.
const blogLastmod = new Map();
const blogDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'src', 'content', 'blog');
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md')) continue;
  const raw = readFileSync(path.join(blogDir, file), 'utf-8');
  const fm = raw.slice(0, raw.indexOf('\n---', 3));
  const updated = fm.match(/^updatedDate:\s*(.+)$/m)?.[1];
  const published = fm.match(/^pubDate:\s*(.+)$/m)?.[1];
  const date = updated || published;
  if (date) blogLastmod.set(file.replace(/\.md$/, ''), new Date(date).toISOString());
}

export default defineConfig({
  site: 'https://waai.me',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms', 'ta', 'th', 'ko', 'ja', 'fr', 'it', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // /trial/* (all locales) are noindex ad landing pages — keep them out of the sitemap
      filter: (page) => !new URL(page).pathname.split('/').includes('trial'),
      serialize: (item) => {
        // Blog posts carry their real content date; other pages stay bare.
        const slug = item.url.split('/blog/')[1]?.replace(/\/$/, '');
        if (slug && blogLastmod.has(slug)) item.lastmod = blogLastmod.get(slug);
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-SG',
          zh: 'zh-SG',
          ms: 'ms-SG',
          ta: 'ta-SG',
          th: 'th-TH',
          ko: 'ko-KR',
          ja: 'ja-JP',
          fr: 'fr-FR',
          it: 'it-IT',
          es: 'es-ES',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
