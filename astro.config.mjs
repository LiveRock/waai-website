import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
