import en from "./locales/en.js";
import ar from "./locales/ar.js";

export const SUPPORTED_LOCALES = ["en", "ar"];
export const DEFAULT_LOCALE    = "en";
export const RTL_LOCALES        = ["ar"];

export const LOCALE_META = {
  en: { label: "EN", nativeLabel: "English",  flag: "🇬🇧" },
  ar: { label: "ع",  nativeLabel: "العربية", flag: "🇪🇬" },
};

// Local fallback objects — always available synchronously
const LOCAL = { en, ar };

/**
 * getTranslationsSync — immediate local fallback (no API call).
 * Used by LangContext for the initial render to prevent content flash.
 */
export function getTranslationsSync(lang) {
  return LOCAL[lang] ?? LOCAL[DEFAULT_LOCALE];
}

/**
 * getTranslations — async, fetches from backend API.
 * Falls back to local files if the API is unreachable.
 *
 * API migration note: this is the ONLY function to change when
 * switching from local content to backend-driven content.
 * All components read from LangContext.t — they never call this directly.
 */
export async function getTranslations(lang = DEFAULT_LOCALE) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    // No API configured — use local files (dev without backend)
    return getTranslationsSync(lang);
  }

  try {
    const res = await fetch(`${apiUrl}/content`, {
      cache: "no-store",  // always fresh — change to { next: { revalidate: 60 } } for ISR
    });

    if (!res.ok) throw new Error(`API responded with ${res.status}`);

    const { data } = await res.json();

    // Convert the array of Content documents into a keyed object
    // matching the shape of en.js / ar.js
    const content = {};
    data.forEach((doc) => {
      content[doc.section] = doc[lang] || doc.en;
    });

    // Merge: API data takes priority; local fills in any missing sections
    return { ...getTranslationsSync(lang), ...content };
  } catch (err) {
    console.warn(`[i18n] API unavailable, using local fallback: ${err.message}`);
    return getTranslationsSync(lang);
  }
}

export default getTranslations;
