// Locale configuration for waai.me
// Locales: en (default, no URL prefix), zh (Simplified Chinese), ms (Bahasa Malay), ta (Tamil).

export type Lang = 'en' | 'zh' | 'ms' | 'ta';

export const DEFAULT_LANG: Lang = 'en';
export const LANGS: Lang[] = ['en', 'zh', 'ms', 'ta'];
export const NON_DEFAULT_LANGS: Lang[] = ['zh', 'ms', 'ta'];

export type LocaleFont = 'noto-sc' | 'noto-tamil';

export interface LocaleMeta {
  code: Lang;
  /** Native name, shown in the language switcher. */
  label: string;
  /** BCP-47 tag for <html lang> and hreflang. */
  htmlLang: string;
  /** Extra webfont to load for this locale's script (undefined = Latin/Inter only). */
  font?: LocaleFont;
}

export const LOCALES: Record<Lang, LocaleMeta> = {
  en: { code: 'en', label: 'English', htmlLang: 'en-SG' },
  zh: { code: 'zh', label: '简体中文', htmlLang: 'zh-SG', font: 'noto-sc' },
  ms: { code: 'ms', label: 'Bahasa Melayu', htmlLang: 'ms-SG' },
  ta: { code: 'ta', label: 'தமிழ்', htmlLang: 'ta-SG', font: 'noto-tamil' },
};

/**
 * Routes that remain English-only (no localized versions generated).
 * Stored normalized with a trailing slash to match `normalizePath()` output.
 * The language switcher sends users to the locale homepage instead of these.
 */
export const ENGLISH_ONLY_PATHS = ['/terms/', '/privacy/', '/google-compliance/'];

export function isLang(code: string): code is Lang {
  return (LANGS as string[]).includes(code);
}
