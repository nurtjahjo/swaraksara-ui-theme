import React, { useState, useEffect } from 'react';
import { Modal } from './components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ChatShowcase } from './components/ChatShowcase';
import { TabsShowcase } from './components/TabsShowcase'; // Import Tabs
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './providers/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';

type AppTheme = 'authormgm' | 'storemgm' | 'narratormgm' | 'usermgm';
type ChatTheme = 'original' | 'evolution' | 'elegant' | 'monochrome';

const loadTheme = (theme: AppTheme) => {
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

function AppContent() {
  const [appTheme, setAppTheme] = useState<AppTheme>('authormgm');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChatTheme, setActiveChatTheme] = useState<ChatTheme>('original');

  useEffect(() => {
    loadTheme(appTheme);
  }, [appTheme]);
  
  const hamburgerPosition = (appTheme === 'storemgm' || appTheme === 'usermgm') ? 'left' : 'right';

  return (
    <div>
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
            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
          
          <button className="trigger-button" onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon icon={faWindowRestore} />
            <span>Tampilkan Popup Showcase</span>
          </button>
          
          <hr className="divider" />
          
          {/* TAB SHOWCASE SECTION */}
          <h2>Tabs Component</h2>
          <TabsShowcase />

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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
