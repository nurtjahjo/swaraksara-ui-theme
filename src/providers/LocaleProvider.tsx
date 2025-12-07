import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getSwaraksaraCookie, setSwaraksaraCookie } from '../utils/cookieManager';

export type LocaleType = 'id' | 'en';

interface LocaleContextType {
  locale: LocaleType;
  setLocale: (lang: LocaleType) => void;
  t: (key: string) => string; // Placeholder fungsi translasi sederhana
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<LocaleType>(() => {
    const cookieVal = getSwaraksaraCookie('sa_locale');
    if (cookieVal === 'id' || cookieVal === 'en') {
      return cookieVal as LocaleType;
    }
    // Fallback deteksi browser atau default 'id'
    return navigator.language.startsWith('en') ? 'en' : 'id';
  });

  useEffect(() => {
    // Set cookie shared setiap kali locale berubah
    setSwaraksaraCookie('sa_locale', locale);
    
    // Opsional: Set lang attribute di HTML tag untuk aksesibilitas/SEO
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (lang: LocaleType) => {
    setLocaleState(lang);
  };

  // Fungsi dummy translasi (Nanti bisa diganti i18n beneran)
  const t = (key: string) => {
    return key; 
  };

  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};