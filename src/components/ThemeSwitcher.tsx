// src/components/ThemeSwitcher.tsx (Refactored)
import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

export const ThemeSwitcher: React.FC = () => {
  // --- PERUBAHAN 1: Kita hanya butuh 'mode' dan 'setMode' ---
  // 'mode' sekarang adalah nilai final ('light' atau 'dark'),
  // sehingga 'resolvedTheme' tidak lagi diperlukan.
  const { mode, setMode } = useTheme();

  const handleToggle = () => {
    // --- PERUBAHAN 2: Logika toggle menjadi lebih sederhana ---
    // Cukup balikkan nilai 'mode' saat ini.
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      className="trigger-button"
      onClick={handleToggle}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
    >
      {/* Tampilkan teks/ikon berdasarkan 'mode' saat ini */}
      {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      
      {/* --- PERUBAHAN 3: Hapus Indikator (Auto) --- */}
      {/* Baris ini dihapus karena mode 'auto' tidak ada lagi */}
    </button>
  );
};