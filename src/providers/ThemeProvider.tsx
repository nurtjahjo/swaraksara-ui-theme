// File: src/providers/ThemeProvider.tsx (Refactored to remove 'auto' mode)

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getSwaraksaraCookie, setSwaraksaraCookie } from '../utils/cookieManager';

// --- PERUBAHAN 1: Hapus 'auto' dari tipe data ---
export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode; // 'mode' sekarang sama dengan 'resolvedTheme'
  setMode: (mode: ThemeMode) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode; // Prop ini tetap ada untuk fleksibilitas, tapi defaultnya 'light'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultMode = 'light' }) => {
  
  // --- PERUBAHAN 2: Sederhanakan logika inisialisasi state ---
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const cookieVal = getSwaraksaraCookie('sa_theme');
    // Cukup periksa apakah cookie adalah 'light' atau 'dark'
    if (cookieVal === 'light' || cookieVal === 'dark') {
      return cookieVal;
    }
    // Jika tidak ada cookie yang valid, gunakan prop defaultMode (yang defaultnya 'light')
    return defaultMode; 
  });

  // --- PERUBAHAN 3: Hapus semua logika deteksi sistem ---
  // State 'systemTheme' dan useEffect yang mendengarkan 'prefers-color-scheme' dihapus
  // karena tidak lagi diperlukan.

  // --- PERUBAHAN 4: 'resolvedTheme' sekarang hanya alias untuk 'mode' ---
  // Tidak ada lagi kalkulasi yang dibutuhkan.
  const resolvedTheme = mode;

  // Efek Samping: Update DOM & Cookie (Logika ini tetap sama)
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);

    // Simpan preferensi user ke Cookie
    setSwaraksaraCookie('sa_theme', mode);
    
  }, [mode, resolvedTheme]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  // --- PERUBAHAN 5: Sederhanakan nilai context ---
  const value = useMemo(() => ({ 
    mode: resolvedTheme, // Kirimkan tema yang sudah final
    resolvedTheme: resolvedTheme, // Tetap sediakan untuk kompatibilitas jika diperlukan
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