// File: src/providers/ThemeProvider.tsx (Final & Stable)

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getSwaraksaraCookie, setSwaraksaraCookie } from '../utils/cookieManager';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  resolvedTheme: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultMode = 'light' }) => {
  
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const cookieVal = getSwaraksaraCookie('sa_theme');
    if (cookieVal === 'light' || cookieVal === 'dark') {
      return cookieVal;
    }
    return defaultMode; 
  });

  const resolvedTheme = mode;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    setSwaraksaraCookie('sa_theme', mode);
  }, [mode, resolvedTheme]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const value = useMemo(() => ({ 
    mode: resolvedTheme,
    resolvedTheme: resolvedTheme,
    setMode 
  }), [resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};