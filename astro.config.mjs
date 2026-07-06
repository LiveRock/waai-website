import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://waai.me',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms', 'ta'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-SG',
          zh: 'zh-SG',
          ms: 'ms-SG',
          ta: 'ta-SG',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
