"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "fa" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Default to Dari (fa) as requested for the primary Afghan market
  const [language, setLanguageState] = useState<Language>("fa");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("nexo-lang") as Language;
    if (storedLang === "en" || storedLang === "fa") {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("nexo-lang", lang);
  };

  const dir = language === "fa" ? "rtl" : "ltr";

  // Update HTML document attributes for layout direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      <div dir={dir} style={{ visibility: !mounted ? "hidden" : "visible" }}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
