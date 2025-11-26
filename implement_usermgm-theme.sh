#!/bin/bash

# 1. Buat folder untuk tema usermgm
mkdir -p src/themes/usermgm

# 2. Buat file _variables.css untuk usermgm
# (Isinya disalin dari storemgm, tapi selector diganti menjadi .theme-usermgm)
cat << 'EOF' > src/themes/usermgm/_variables.css
body.theme-usermgm {
  /* ======================================== */
  /* == THEME: USER MGM (Based on Store MGM) == */
  /* ======================================== */

  /* Definisi ini berlaku untuk LIGHT MODE sebagai default */
  background: #FFFFFF;
  color: #111827;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* 1. WARNA (COLORS) */
  --font-color-base: #111827;
  --font-color-accent: #D97706;
  --font-color-muted: #6B7280;
  
  --bg-gradient: #FFFFFF;
  --surface-color: #F9FAFB;

  --primary-color-hover: #F97316;

  --border-color-base: #D1D5DB;
  --border-color-hover: #F97316;

  --cta-bg-color: #EF4444;
  --cta-text-color: #FFFFFF;

  /* 2. BENTUK (SHAPES & BORDERS) */
  --border-width-base: 1px;
  --border-radius-form: 8px;
  --border-radius-button: 6px;
  --border-radius-input: 6px;

  /* 3. TIPOGRAFI (TYPOGRAPHY) */
  --font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-heading: 'Agrandir-Grand-Heavy', Verdana, Geneva, Tahoma, sans-serif;

  /* -- Variabel Header & Navigasi -- */
  --nav-height: 64px;
  --nav-bg-color: transparent;
  --nav-scrolled-bg-color: linear-gradient(to right, #FFD34E, #FFAA4E);
  --nav-border-color: #E5E7EB;
  --nav-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  --nav-link-color: var(--font-color-base);
  --nav-link-hover-bg: rgba(0, 0, 0, 0.03);
  --nav-link-active-color: var(--cta-bg-color);
  --sidebar-bg-color: #FFFFFF;
  --nav-initial-opacity: 1;
  --sidebar-link-align: left;

  /* -- Variabel Footer -- */
  --footer-bg-color: #111827;
  --footer-text-color: #D1D5DB;
  --footer-link-hover-color: #FFAA4E;
  --footer-border-color: #374151;

  /* -- Variabel Chat -- */
  --chat-bg-incoming-original: #E5E7EB;
  --chat-border-outgoing-original: var(--border-color-hover);
  --chat-input-bg: #F3F4F6;
  --chat-button-bg-original: var(--cta-bg-color);
  --chat-button-text-original: var(--cta-text-color);
}

/* ======================================== */
/* == USER MGM - DARK MODE OVERRIDES == */
/* ======================================== */
/* Ini untuk deteksi otomatis preferensi OS */
@media (prefers-color-scheme: dark) {
  html.dark-mode-auto body.theme-usermgm {
    --font-color-base: #F9FAFB;
    --bg-gradient: #111827;
    --surface-color: #1F2937;
    --border-color-base: #374151;
    --nav-scrolled-bg-color: linear-gradient(to right, #1F2937, #111827);
    --sidebar-bg-color: #1F2937;
    --footer-bg-color: #000000;
    --chat-bg-incoming-original: #374151;
  }
}

/* Ini untuk tombol manual switcher kita */
html.dark body.theme-usermgm {
  background: #111827;
  color: #F9FAFB;

  --font-color-base: #F9FAFB;
  --bg-gradient: #111827;
  --surface-color: #1F2937;
  --border-color-base: #374151;
  --nav-scrolled-bg-color: linear-gradient(to right, #1F2937, #111827);
  --sidebar-bg-color: #1F2937;
  --footer-bg-color: #000000;
  --chat-bg-incoming-original: #374151;
}

/* Override posisi sidebar khusus usermgm (mirip storemgm) */
body.theme-usermgm .sidebar-menu {
  left: 0;
  right: auto;
  transform: translateX(-100%);
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--border-radius-form, 8px);
}

body.theme-usermgm .sidebar-menu.open {
  transform: translateX(0);
}

body.theme-usermgm .sidebar-close-btn {
  left: 0;
  right: auto;
}

body.theme-usermgm .sidebar-links .nav-link {
  text-align: left;
}

/* Override navbar logo khusus usermgm */
body.theme-usermgm .navbar-logo { 
  order: 2; 
  margin-left: 1rem; 
}
body.theme-usermgm .hamburger-menu { 
  order: 1; 
}
EOF

# 3. Buat file index.css untuk usermgm
cat << 'EOF' > src/themes/usermgm/index.css
@import '../../core/_reset.css';
@import '../../core/_fonts.css';
@import './_variables.css';
EOF

# 4. Update vite.themes.config.ts untuk menambahkan entry point usermgm
cat << 'EOF' > vite.themes.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

// Konfigurasi ini HANYA untuk membangun file CSS tema
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        authormgm: resolve(__dirname, 'src/themes/authormgm/index.css'),
        storemgm: resolve(__dirname, 'src/themes/storemgm/index.css'),
        narratormgm: resolve(__dirname, 'src/themes/narratormgm/index.css'),
        usermgm: resolve(__dirname, 'src/themes/usermgm/index.css'),
      },
      output: {
        // Simpan file CSS di dalam subfolder 'themes' di dalam 'dist'
        assetFileNames: 'themes/[name].css',
      },
    },
    // Pastikan folder output bersih setiap kali build tema
    emptyOutDir: true,
  },
});
EOF

# 5. Update package.json untuk menambahkan export ./usermgm
# Menggunakan sed untuk menyisipkan baris di dalam objek exports
# Catatan: Ini asumsi format file standar. Jika gagal, edit manual.
# Kita tulis ulang package.json agar aman dan formatnya benar.
cat << 'EOF' > package.json
{
  "name": "@nurtjahjo/swaraksara-ui-theme",
  "private": false,
  "version": "0.2.1",
  "type": "module",
  "files": [
    "dist/themes"
  ],
  "exports": {
    "./authormgm": "./dist/themes/authormgm.css",
    "./storemgm": "./dist/themes/storemgm.css",
    "./narratormgm": "./dist/themes/narratormgm.css",
    "./usermgm": "./dist/themes/usermgm.css"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:themes": "tsc && vite build --config vite.themes.config.ts",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nurtjahjo/swaraksara-ui-theme.git"
  },
  "keywords": [
    "react",
    "theme",
    "css",
    "ui",
    "swaraksara",
    "vite"
  ],
  "author": "Nurtjahjo <seto@swaraksara.id>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/nurtjahjo/swaraksara-ui-theme/issues"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.2",
    "@fortawesome/free-regular-svg-icons": "^6.5.2",
    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.2"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.14.9",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.13.1",
    "@typescript-eslint/parser": "^7.13.1",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "typescript": "^5.2.2",
    "vite": "^7.1.11"
  }
}
EOF

# 6. Update src/main.tsx untuk import CSS baru saat development
cat << 'EOF' > src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ++ IMPOR SEMUA TEMA SECARA STATIS DI SINI ++
import './themes/authormgm/index.css';
import './themes/storemgm/index.css';
import './themes/narratormgm/index.css';
import './themes/usermgm/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
EOF

# 7. Update src/App.tsx untuk menambahkan tombol switcher usermgm
cat << 'EOF' > src/App.tsx
import React, { useState, useEffect } from 'react';
import { Modal } from './components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ChatShowcase } from './components/ChatShowcase';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './providers/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';

type AppTheme = 'authormgm' | 'storemgm' | 'narratormgm' | 'usermgm';
type ChatTheme = 'original' | 'evolution' | 'elegant' | 'monochrome';

/**
 * Fungsi helper yang memuat stylesheet tema secara dinamis.
 * Ini adalah metode yang andal untuk mode dev dan build.
 * @param theme Nama tema yang akan dimuat.
 */
const loadTheme = (theme: AppTheme) => {
  // Tambahkan juga class ke body untuk penargetan gaya spesifik jika diperlukan
  document.body.className = `theme-${theme}`;

  let themeLink = document.getElementById('app-theme-style') as HTMLLinkElement;
  const themePath = `/themes/${theme}.css`;

  if (themeLink) {
    themeLink.href = themePath;
  } else {
    themeLink = document.createElement('link');
    themeLink.id = 'app-theme-style';
    themeLink.rel = 'stylesheet';
    themeLink.href = themePath;
    document.head.appendChild(themeLink);
  }
};

const modalButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  padding: '0.75rem 1.5rem',
  borderRadius: 'var(--border-radius-button)',
  border: 'var(--border-width-base) solid var(--border-color-base)',
  backgroundColor: 'transparent',
  color: 'var(--font-color-base)',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  marginTop: '1.5rem',
  transition: 'all 0.2s ease-in-out'
};

/**
 * Komponen yang berisi UI utama aplikasi.
 */
function AppContent() {
  const [appTheme, setAppTheme] = useState<AppTheme>('authormgm');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChatTheme, setActiveChatTheme] = useState<ChatTheme>('original');

  useEffect(() => {
    loadTheme(appTheme);
  }, [appTheme]);
  
  // Tentukan posisi hamburger secara dinamis berdasarkan tema yang aktif
  // usermgm mengikuti storemgm (kiri)
  const hamburgerPosition = (appTheme === 'storemgm' || appTheme === 'usermgm') ? 'left' : 'right';

  return (
    <div>
      {/* Kirim prop 'hamburgerPosition' ke Navbar */}
      <Navbar hamburgerPosition={hamburgerPosition} />
      
      <div className="page-container">
        <main className="page-content">
          
          <h1>Swaraksara UI Theme</h1>

          <div className="theme-switcher">
            <button 
              onClick={() => setAppTheme('authormgm')} 
              className={appTheme === 'authormgm' ? 'active' : ''}
            >
              Author/Narrator
            </button>
            <button 
              onClick={() => setAppTheme('storemgm')} 
              className={appTheme === 'storemgm' ? 'active' : ''}
            >
              Store Theme
            </button>
            <button 
              onClick={() => setAppTheme('narratormgm')} 
              className={appTheme === 'narratormgm' ? 'active' : ''}
            >
              Narrator Theme
            </button>
            <button 
              onClick={() => setAppTheme('usermgm')} 
              className={appTheme === 'usermgm' ? 'active' : ''}
            >
              User Mgm
            </button>
          </div>

          {(appTheme === 'storemgm' || appTheme === 'usermgm') && (
            <div style={{ marginBottom: '2rem' }}>
              <ThemeSwitcher />
            </div>
          )}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            <br /><br />
            Aenean consequat, lorem eget Pretium sodales, augue felis molestie sem, eget tempor
            massa justo ut sem. Proin sodales, tellus in ultrices fringilla, quam quam
            ultricies magna, non commodo purus risus non risus.
            <br /><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="trigger-button" onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon icon={faWindowRestore} />
            <span>Tampilkan Popup Showcase</span>
          </button>
          
          <hr className="divider" />
          
          <h2>Chat UI Showcase</h2>
          <div className="theme-switcher">
            <button 
              onClick={() => setActiveChatTheme('original')} 
              className={activeChatTheme === 'original' ? 'active' : ''}
            >
              Original
            </button>
            <button 
              onClick={() => setActiveChatTheme('evolution')} 
              className={activeChatTheme === 'evolution' ? 'active' : ''}
            >
              Evolusi Ungu
            </button>
            <button 
              onClick={() => setActiveChatTheme('elegant')} 
              className={activeChatTheme === 'elegant' ? 'active' : ''}
            >
              Kontras Elegan
            </button>
            <button 
              onClick={() => setActiveChatTheme('monochrome')} 
              className={activeChatTheme === 'monochrome' ? 'active' : ''}
            >
              Fokus Monokrom
            </button>
          </div>
          <ChatShowcase theme={activeChatTheme} />
        </main>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Style Showcase"
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--font-color-base)' }}>
              Ini adalah pratinjau tema dari paket `@swaraksara/ui-theme`.
            </p>
            <button
              style={modalButtonStyle}
              onClick={() => setIsModalOpen(false)}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--border-color-hover)';
                e.currentTarget.style.color = 'var(--font-color-accent)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border-color-base)';
                e.currentTarget.style.color = 'var(--font-color-base)';
              }}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
              <span>Tutup Popup</span>
            </button>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

/**
 * Komponen App utama hanya membungkus dengan ThemeProvider.
 */
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
EOF

echo "Selesai! Tema 'usermgm' berhasil ditambahkan."
echo "Jalankan 'npm run dev' untuk melihat preview."