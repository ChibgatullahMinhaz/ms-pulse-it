'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'en' | 'de' | 'fr';

export interface LanguageOption {
  code: Locale;
  label: string;
  nativeName: string;
  region: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', region: 'Global / US', flag: '🇺🇸' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', region: 'DACH / Europe', flag: '🇩🇪' },
  { code: 'fr', label: 'French', nativeName: 'Français', region: 'France / Global', flag: '🇫🇷' },
];

export const TRANSLATIONS: Record<Locale, Record<string, string>> = {
  en: {
    'nav.services': 'Services',
    'nav.techStack': 'Tech Stack',
    'nav.featuredLab': 'Featured Lab',
    'nav.appSeo': 'App SEO',
    'nav.insights': 'Insights',
    'nav.estimator': 'Estimator',
    'nav.scopeCalculator': 'Scope Calculator',
    'nav.requestConsultation': 'Request Consultation',
    'nav.selectLanguage': 'Select Language',
  },
  de: {
    'nav.services': 'Leistungen',
    'nav.techStack': 'Tech-Stack',
    'nav.featuredLab': 'Labor & Demos',
    'nav.appSeo': 'App-SEO',
    'nav.insights': 'Einblicke',
    'nav.estimator': 'Kalkulator',
    'nav.scopeCalculator': 'Aufwandsrechner',
    'nav.requestConsultation': 'Beratung Anfragen',
    'nav.selectLanguage': 'Sprache Wählen',
  },
  fr: {
    'nav.services': 'Services',
    'nav.techStack': 'Stack Technique',
    'nav.featuredLab': 'Lab & Démos',
    'nav.appSeo': 'SEO d’App',
    'nav.insights': 'Analyses',
    'nav.estimator': 'Estimateur',
    'nav.scopeCalculator': 'Calculateur',
    'nav.requestConsultation': 'Demander Conseil',
    'nav.selectLanguage': 'Choisir la Langue',
  },
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  currentLanguage: LanguageOption;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('mspulse_locale');
      if (saved === 'de' || saved === 'fr' || saved === 'en') {
        return saved;
      }
    } catch {
      // Fallback if localStorage unavailable
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('mspulse_locale', newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string): string => {
    return TRANSLATIONS[locale]?.[key] || TRANSLATIONS.en[key] || key;
  };

  const currentLanguage = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, currentLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
