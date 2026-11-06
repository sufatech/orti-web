"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
}

const I18nContext = createContext<I18nContextType | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "tr";
  }

  try {
    const savedLocale = localStorage.getItem("orti_locale") as Locale | null;
    if (savedLocale === "tr" || savedLocale === "en") {
      return savedLocale;
    }
    return "tr";
  } catch {
    return "tr";
  }
}

/** `forcedLocale`: the URL decides the language (e.g. /en/...), on server and client alike. */
export function I18nProvider({ children, forcedLocale }: { children: ReactNode; forcedLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(forcedLocale ?? getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("orti_locale", newLocale);
    } catch {
      // Ignore storage errors in restricted contexts
    }
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
