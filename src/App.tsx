import React from 'react';

// Buat beberapa gaya inline untuk meniru gaya modal/form dari `sa_style.css`
const cardStyle: React.CSSProperties = {
  background: 'var(--surface-color)',
  padding: '2.5rem',
  borderRadius: 'var(--border-radius-form)',
  border: 'var(--border-width-base) solid var(--border-color-base)',
  width: '100%',
  maxWidth: '420px',
  textAlign: 'center'
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  borderRadius: 'var(--border-radius-button)',
  border: 'var(--border-width-base) solid var(--border-color-base)',
  backgroundColor: 'transparent',
  color: 'var(--font-color-base)',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold'
};

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div style={cardStyle}>
        <h1>Style Showcase</h1>
        <p style={{ color: 'var(--font-color-muted)', marginBottom: '2rem' }}>
          Ini adalah pratinjau tema dari paket `@swaraksara/ui-theme`.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={e => {
            e.currentTarget.style.borderColor = 'var(--border-color-hover)';
            e.currentTarget.style.color = 'var(--font-color-accent)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.borderColor = 'var(--border-color-base)';
            e.currentTarget.style.color = 'var(--font-color-base)';
          }}
        >
          Contoh Button
        </button>
      </div>
    </div>
  );
}

export default App;