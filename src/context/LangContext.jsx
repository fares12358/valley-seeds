"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  getTranslations,
  getTranslationsSync,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  RTL_LOCALES,
  LOCALE_META,
} from "@/i18n/index";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LOCALE);
  const [t,    setT]         = useState(getTranslationsSync(DEFAULT_LOCALE));

  // Restore persisted language on mount (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("vs_lang");
      if (stored && SUPPORTED_LOCALES.includes(stored)) {
        setLangState(stored);
      }
    } catch {
      // localStorage blocked (private browsing) — use default
    }
  }, []);

  // Sync <html> dir + lang attributes
  useEffect(() => {
    const dir = RTL_LOCALES.includes(lang) ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir",  dir);
  }, [lang]);

  // Load translations: instant local fallback, then async API overwrite
  useEffect(() => {
    setT(getTranslationsSync(lang)); // immediate — no flash

    getTranslations(lang)
      .then((result) => { if (result) setT(result); })
      .catch(() => { /* already showing local fallback */ });
  }, [lang]);

  const setLang = useCallback((newLang) => {
    if (!SUPPORTED_LOCALES.includes(newLang)) return;
    try { localStorage.setItem("vs_lang", newLang); } catch { /* ignore */ }
    setLangState(newLang);
  }, []);

  const isRTL = RTL_LOCALES.includes(lang);
  const dir   = isRTL ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, dir, isRTL, t, setLang, LOCALE_META }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useTranslation must be inside <LangProvider>");
  return ctx;
}

export default LangContext;
