// src/index.ts

// --- CRITICAL: Load Icon Engine (Legacy Script) ---
import './assets/scripts/selected.v2.js';

// Export Providers & Hooks
export { ThemeProvider, useTheme } from './providers/ThemeProvider';
export { LocaleProvider, useLocale } from './providers/LocaleProvider';
export type { ThemeMode } from './providers/ThemeProvider';
export type { LocaleType } from './providers/LocaleProvider';

// Export Utilities
export { getSwaraksaraCookie, setSwaraksaraCookie } from './utils/cookieManager';

// Export Components
export { Navbar } from './components/Navbar';
export { Footer } from './components/Footer';
export { Sidebar } from './components/Sidebar';
export { ThemeSwitcher } from './components/ThemeSwitcher';
export { Modal } from './components/Modal';
export { Icon } from './components/Icon'; 
