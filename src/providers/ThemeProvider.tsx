import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getSwaraksaraCookie, setSwaraksaraCookie } from '../utils/cookieManager';

// Tipe data sesuai request
export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  mode: ThemeMode;          // Pilihan user: light, dark, atau auto
  resolvedTheme: 'light' | 'dark'; // Hasil akhir yang dirender (auto -> dark/light)
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Inisialisasi State dari Cookie -> LocalStorage -> Default 'auto'
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const cookieVal = getSwaraksaraCookie('sa_theme');
    if (cookieVal === 'light' || cookieVal === 'dark' || cookieVal === 'auto') {
      return cookieVal as ThemeMode;
    }
    return 'auto'; // Default aman
  });

  // 2. State untuk menyimpan tema aktual (jika auto, apakah sistem sedang dark/light?)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  // 3. Listener perubahan preferensi sistem (OS)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 4. Hitung tema yang akan diterapkan
  const resolvedTheme = useMemo(() => {
    if (mode === 'auto') return systemTheme;
    return mode;
  }, [mode, systemTheme]);

  // 5. Efek Samping: Update DOM & Cookie
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Hapus class lama
    root.classList.remove('light', 'dark');
    // Tambah class baru
    root.classList.add(resolvedTheme);

    // Simpan preferensi user (bukan resolved) ke Cookie
    // Agar bisa dibaca subdomain lain
    setSwaraksaraCookie('sa_theme', mode);
    
  }, [mode, resolvedTheme]);

  // Wrapper setter agar konsisten
  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const value = useMemo(() => ({ mode, resolvedTheme, setMode }), [mode, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};