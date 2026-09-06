// Locale configuration for waai.me
// Locales: en (default, no URL prefix), zh (Simplified Chinese), ms (Bahasa Malay),
// ta (Tamil), th (Thai), ko (Korean), ja (Japanese), fr (French), it (Italian), es (Spanish).

export type Lang = 'en' | 'zh' | 'ms' | 'ta' | 'th' | 'ko' | 'ja' | 'fr' | 'it' | 'es';

export const DEFAULT_LANG: Lang = 'en';
export const LANGS: Lang[] = ['en', 'zh', 'ms', 'ta', 'th', 'ko', 'ja', 'fr', 'it', 'es'];
export const NON_DEFAULT_LANGS: Lang[] = ['zh', 'ms', 'ta', 'th', 'ko', 'ja', 'fr', 'it', 'es'];

export type LocaleFont = 'noto-sc' | 'noto-tamil' | 'noto-thai' | 'noto-kr' | 'noto-jp';

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
  th: { code: 'th', label: 'ไทย', htmlLang: 'th-TH', font: 'noto-thai' },
  ko: { code: 'ko', label: '한국어', htmlLang: 'ko-KR', font: 'noto-kr' },
  ja: { code: 'ja', label: '日本語', htmlLang: 'ja-JP', font: 'noto-jp' },
  fr: { code: 'fr', label: 'Français', htmlLang: 'fr-FR' },
  it: { code: 'it', label: 'Italiano', htmlLang: 'it-IT' },
  es: { code: 'es', label: 'Español', htmlLang: 'es-ES' },
};

/**
 * Routes that remain English-only (no localized versions generated).
 * Stored normalized with a trailing slash to match `normalizePath()` output.
 * The language switcher sends users to the locale homepage instead of these.
 */
export const ENGLISH_ONLY_PATHS = ['/terms/', '/privacy/', '/google-compliance/', '/security/'];

export function isLang(code: string): code is Lang {
  return (LANGS as string[]).includes(code);
}
