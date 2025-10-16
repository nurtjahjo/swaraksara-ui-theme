import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ChatShowcase } from './components/ChatShowcase';

// Definisikan tipe tema chat yang tersedia
type ChatTheme = 'original' | 'evolution' | 'elegant' | 'monochrome';

// Gaya untuk tombol di dalam modal (tidak berubah)
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
  // State untuk mengontrol visibilitas modal/popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk mengontrol tema warna mana yang sedang aktif untuk UI Chat
  const [activeChatTheme, setActiveChatTheme] = useState<ChatTheme>('original');

  return (
    <div className="page-container">
      <main className="page-content">
        {/* ====================================================== */}
        {/* BAGIAN 1: Showcase Halaman Utama dan Tombol Pemicu Popup */}
        {/* ====================================================== */}
        <h1>Swaraksara UI Theme</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
          lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
          ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </p>
        <button className="trigger-button" onClick={() => setIsModalOpen(true)}>
          <FontAwesomeIcon icon={faWindowRestore} />
          <span>Tampilkan Popup Showcase</span>
        </button>

        {/* Pemisah visual antar bagian */}
        <hr className="divider" />

        {/* ====================================================== */}
        {/* BAGIAN 2: Showcase UI Chat dengan Pilihan Tema Dinamis */}
        {/* ====================================================== */}
        <h2>Chat UI Showcase</h2>

        {/* Tombol-tombol untuk mengganti tema chat */}
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

        {/* Komponen etalase chat, yang temanya dikontrol oleh state `activeChatTheme` */}
        <ChatShowcase theme={activeChatTheme} />

      </main>

      {/* ====================================================== */}
      {/* BAGIAN 3: Komponen Modal/Popup (tidak terlihat awalnya) */}
      {/* ====================================================== */}
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
  );
}

export default App;