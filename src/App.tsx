import React, { useState, useEffect } from 'react';
import { Modal } from './components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ChatShowcase } from './components/ChatShowcase';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Tipe untuk nama tema, digunakan untuk memuat file CSS yang sesuai
type AppTheme = 'authormgm' | 'storemgm' | 'narratormgm';

// Tipe untuk variasi gaya komponen Chat
type ChatTheme = 'original' | 'evolution' | 'elegant' | 'monochrome';

/**
 * Fungsi helper yang dijamin berhasil untuk memuat dan mengganti stylesheet tema.
 * Ini bekerja baik di mode development maupun setelah di-build.
 * @param theme Nama tema yang akan dimuat (misalnya, 'storemgm').
 */
const loadTheme = (theme: AppTheme) => {
  // Cari elemen <link> tema yang sudah ada di dokumen
  let themeLink = document.getElementById('app-theme-style') as HTMLLinkElement;

  // Path ke file CSS tema. Path ini akan valid baik di server dev maupun produksi.
  const themePath = `/themes/${theme}.css`;

  if (themeLink) {
    // Jika elemen <link> sudah ada, cukup ubah atribut `href`-nya.
    // Ini cara yang sangat efisien untuk mengganti tema.
    themeLink.href = themePath;
  } else {
    // Jika ini pertama kalinya, buat elemen <link> baru.
    themeLink = document.createElement('link');
    themeLink.id = 'app-theme-style';
    themeLink.rel = 'stylesheet';
    themeLink.href = themePath;
    // Tambahkan elemen <link> ke dalam <head> dokumen.
    document.head.appendChild(themeLink);
  }
};

// Gaya untuk tombol di dalam modal (tidak ada perubahan)
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

function App() {
  // State untuk melacak tema aplikasi mana yang sedang aktif
  const [appTheme, setAppTheme] = useState<AppTheme>('authormgm');
  // State untuk mengontrol visibilitas modal/popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State untuk melacak variasi tema chat yang aktif
  const [activeChatTheme, setActiveChatTheme] = useState<ChatTheme>('original');

  // Gunakan useEffect untuk memanggil `loadTheme` setiap kali `appTheme` berubah.
  // Ini adalah inti dari mekanisme penggantian tema.
  useEffect(() => {
    loadTheme(appTheme);
  }, [appTheme]);

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <main className="page-content">
          
          <h1>Swaraksara UI Theme</h1>

          {/* Tombol-tombol untuk mengubah state `appTheme` */}
          <div className="theme-switcher">
            <button 
              onClick={() => setAppTheme('authormgm')} 
              className={appTheme === 'authormgm' ? 'active' : ''}
            >
              Author Theme
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
          </div>

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

export default App;