// src/index.ts

// Export Providers & Hooks
export { ThemeProvider, useTheme } from './providers/ThemeProvider';
export { LocaleProvider, useLocale } from './providers/LocaleProvider';
export type { ThemeMode } from './providers/ThemeProvider';
export type { LocaleType } from './providers/LocaleProvider';

// Export Utilities (Opsional, jika modular butuh akses raw cookie)
export { getSwaraksaraCookie, setSwaraksaraCookie } from './utils/cookieManager';

// Export Component (Jika ada komponen UI reusable)
export { Navbar } from './components/Navbar';
export { Footer } from './components/Footer';
export { Sidebar } from './components/Sidebar';
export { ThemeSwitcher } from './components/ThemeSwitcher';