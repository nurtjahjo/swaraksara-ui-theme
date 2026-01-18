// 1. Load Legacy Engine (Side Effect Import)
// Vite akan membundel isi file ini ke dalam swaraksara-ui.js
import './assets/scripts/selected.v2.js';

// 2. Export Components
export { Icon } from './components/Icon';
export { Navbar } from './components/Navbar';
export { Footer } from './components/Footer';
export { Sidebar } from './components/Sidebar';
export { ThemeSwitcher } from './components/ThemeSwitcher';
export { Modal } from './components/Modal';

// 3. Export Utilities & Providers
export { ThemeProvider, useTheme } from './providers/ThemeProvider';
export { LocaleProvider, useLocale } from './providers/LocaleProvider';
export type { ThemeMode } from './providers/ThemeProvider';
export type { LocaleType } from './providers/LocaleProvider';
export { getSwaraksaraCookie, setSwaraksaraCookie } from './utils/cookieManager';
