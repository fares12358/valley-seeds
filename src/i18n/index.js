/**
 * i18n Loader — src/i18n/index.js
 *
 * This is the single integration point between the translation layer
 * and the rest of the app. It currently loads translations from local
 * files. When the backend CMS is ready, ONLY this file needs to change.
 *
 * ─── Future API migration (backend ready) ────────────────────────────
 *
 * Replace getTranslations() with an API fetch:
 *
 *   export async function getTranslations(lang) {
 *     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/content?lang=${lang}`)
 *     if (!res.ok) throw new Error('Failed to load translations')
 *     return res.json()
 *   }
 *
 * The LangContext and all components stay exactly as-is.
 * ─────────────────────────────────────────────────────────────────────
 */

import en from "./locales/en.js";
import ar from "./locales/ar.js";

/** Supported locales — add new languages here only */
export const SUPPORTED_LOCALES = ["en", "ar"];
export const DEFAULT_LOCALE = "en";

/** RTL locales */
export const RTL_LOCALES = ["ar"];

/** Locale metadata for the language switcher UI */
export const LOCALE_META = {
  en: { label: "EN", nativeLabel: "English", flag: "🇬🇧" },
  ar: { label: "ع", nativeLabel: "العربية", flag: "🇪🇬" },
};

const translations = { en, ar };

/**
 * Returns the full translation object for the given locale.
 * Synchronous for now (local files). Will become async when API-driven.
 */
export function getTranslations(lang) {
  return translations[lang] ?? translations[DEFAULT_LOCALE];
}

export default getTranslations;
