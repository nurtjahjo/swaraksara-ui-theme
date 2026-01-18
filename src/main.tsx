import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Tema untuk preview lokal
import './themes/authormgm/index.css';
import './themes/storemgm/index.css';
import './themes/narratormgm/index.css';
import './themes/usermgm/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
