"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 1. Check saved preference in localStorage
    const savedLocale = localStorage.getItem("orti_locale") as Locale | null;
    if (savedLocale === "tr" || savedLocale === "en") {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
      setIsInitialized(true);
      return;
    }

    // 2. Region / Browser Language Auto-Detection
    try {
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "";
      if (browserLang.toLowerCase().startsWith("tr")) {
        setLocaleState("tr");
        document.documentElement.lang = "tr";
      } else {
        // Default to English for international visitors outside Turkey
        setLocaleState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      setLocaleState("tr");
      document.documentElement.lang = "tr";
    }

    setIsInitialized(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("orti_locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
