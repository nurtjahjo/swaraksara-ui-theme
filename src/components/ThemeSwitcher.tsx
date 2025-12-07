// src/components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

export const ThemeSwitcher: React.FC = () => {
  // GUNAKAN API BARU: mode, setMode, resolvedTheme
  const { mode, setMode, resolvedTheme } = useTheme();

  const handleToggle = () => {
    // Logika: Jika sedang light -> ke dark, sebaliknya ke light
    // (Kita override 'auto' menjadi manual saat tombol ditekan)
    setMode(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      className="trigger-button"
      onClick={handleToggle}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
      style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
    >
      {/* Tampilkan Icon/Teks sesuai tema yang sedang aktif */}
      {resolvedTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      
      {/* Indikator kecil jika sedang mode Auto */}
      {mode === 'auto' && <span style={{ fontSize: '0.7em', marginLeft: '6px' }}>(Auto)</span>}
    </button>
  );
};