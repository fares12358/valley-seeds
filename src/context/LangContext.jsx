"use client";

/**
 * LangContext — src/context/LangContext.jsx
 *
 * Global language state for the entire app.
 * Provides:
 *   - lang         : "en" | "ar" (current locale)
 *   - dir          : "ltr" | "rtl"
 *   - isRTL        : boolean
 *   - t            : translation object for the current locale
 *   - setLang()    : switch language + persist to localStorage
 *
 * Used in layout.jsx to apply dir/lang to <html>.
 * Used in every component via useTranslation().
 */

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getTranslations, DEFAULT_LOCALE, SUPPORTED_LOCALES, RTL_LOCALES } from "@/i18n/index";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LOCALE);

  // Initialise from localStorage on mount (client only)
  useEffect(() => {
    const stored = localStorage.getItem("vs_lang");
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      setLangState(stored);
    }
  }, []);

  // Apply dir + lang attributes to <html> whenever language changes
  useEffect(() => {
    const dir = RTL_LOCALES.includes(lang) ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);

  const setLang = useCallback((newLang) => {
    if (!SUPPORTED_LOCALES.includes(newLang)) return;
    localStorage.setItem("vs_lang", newLang);
    setLangState(newLang);
  }, []);

  const isRTL = RTL_LOCALES.includes(lang);
  const dir = isRTL ? "rtl" : "ltr";
  const t = getTranslations(lang);

  return (
    <LangContext.Provider value={{ lang, dir, isRTL, t, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

/**
 * Primary hook — use in every component that needs translated text.
 *
 * @example
 *   const { t, isRTL, lang, setLang } = useTranslation();
 *   return <h1>{t.hero.heading}</h1>
 */
export function useTranslation() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useTranslation must be used inside <LangProvider>");
  return ctx;
}

export default LangContext;
