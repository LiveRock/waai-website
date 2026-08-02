import {
  DEFAULT_LANG,
  ENGLISH_ONLY_PATHS,
  LANGS,
  LOCALES,
  NON_DEFAULT_LANGS,
  isLang,
  type Lang,
} from './config';
import en from './ui/en';
import zh from './ui/zh';
import ms from './ui/ms';
import ta from './ui/ta';
import th from './ui/th';
import ko from './ui/ko';
import ja from './ui/ja';
import fr from './ui/fr';
import it from './ui/it';
import es from './ui/es';

const SITE = 'https://waai.me';

const DICTS: Record<Lang, Record<string, string>> = { en, zh, ms, ta, th, ko, ja, fr, it, es };

export type Translator = (key: string) => string;

/** Derive the active locale from a URL (defaults to English). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1] ?? '';
  if (isLang(seg) && seg !== DEFAULT_LANG) return seg;
  return DEFAULT_LANG;
}

/** Ensure a path begins and ends with `/`. Root stays `/`. */
export function normalizePath(p: string): string {
  if (!p) return '/';
  let n = p.trim();
  if (!n.startsWith('/')) n = '/' + n;
  if (n.length > 1 && !n.endsWith('/')) n += '/';
  return n;
}

/** Strip a leading locale segment, returning the canonical English path. */
export function stripLang(pathname: string): string {
  const seg = pathname.split('/')[1] ?? '';
  if (seg && (NON_DEFAULT_LANGS as string[]).includes(seg)) {
    const rest = pathname.replace(`/${seg}`, '');
    return normalizePath(rest || '/');
  }
  return normalizePath(pathname);
}

/**
 * Prefix a canonical (English) path with the locale segment.
 * English-only routes keep their English path for every locale (links point to
 * the English legal page). Use `getLocalizedPath` for the language switcher.
 */
export function localizePath(path: string, lang: Lang): string {
  const norm = normalizePath(path);
  if (lang === DEFAULT_LANG) return norm;
  if (ENGLISH_ONLY_PATHS.includes(norm)) return norm;
  return `/${lang}${norm}`;
}

/**
 * For the language switcher: where should `targetLang` go given the user is on
 * `currentPath`? Falls back to the locale homepage when the page has no
 * localized equivalent (English-only legal pages).
 */
export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  const canonical = stripLang(currentPath);
  if (targetLang === DEFAULT_LANG) return canonical;
  if (ENGLISH_ONLY_PATHS.includes(canonical)) return `/${targetLang}/`;
  return `/${targetLang}${canonical}`;
}

/** All locale alternates that actually exist for the current page (for hreflang). */
export function getAlternates(pathname: string): { lang: Lang; hreflang: string; href: string }[] {
  const canonical = stripLang(pathname);
  const out: { lang: Lang; hreflang: string; href: string }[] = [];
  for (const l of LANGS) {
    // English-only routes only have an English version.
    if (l !== DEFAULT_LANG && ENGLISH_ONLY_PATHS.includes(canonical)) continue;
    const path = l === DEFAULT_LANG ? canonical : `/${l}${canonical}`;
    out.push({ lang: l, hreflang: LOCALES[l].htmlLang, href: SITE + path });
  }
  return out;
}

/**
 * Translation function bound to a locale. Falls back to English, then to the
 * literal key (so untranslated strings surface visibly rather than disappearing).
 */
export function useTranslations(lang: Lang): Translator {
  return (key: string) => DICTS[lang]?.[key] ?? DICTS[DEFAULT_LANG][key] ?? key;
}

export { LANGS, LOCALES, DEFAULT_LANG, type Lang };
