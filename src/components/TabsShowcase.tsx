import React, { useState } from 'react';
import './Tabs.css';

export const TabsShowcase: React.FC = () => {
  // Default active tab
  const [activeTab, setActiveTab] = useState('storemgm');

  // Daftar modul sesuai request
  const modules = [
    { id: 'storemgm', label: 'Store Mgm' },
    { id: 'librarymgm', label: 'Library Mgm' },
    { id: 'authormgm', label: 'Author Mgm' },
    { id: 'narratormgm', label: 'Narrator Mgm' },
    { id: 'usermgm', label: 'User Mgm' },
    { id: 'financialmgm', label: 'Financial Mgm' },
  ];

  return (
    <div className="tab-container">
      {/* Header Tab */}
      <div className="tab-header">
        {modules.map((mod) => (
          <button
            key={mod.id}
            className={`tab-button ${activeTab === mod.id ? 'active' : ''}`}
            onClick={() => setActiveTab(mod.id)}
          >
            {mod.label}
          </button>
        ))}
      </div>

      {/* Konten Tab (Preview) */}
      <div className="tab-content">
        <h3 style={{ 
          marginTop: 0, 
          color: 'var(--font-color-accent)',
          fontFamily: 'var(--font-family-heading)' 
        }}>
          Modul: {modules.find(m => m.id === activeTab)?.label}
        </h3>
        <p style={{ color: 'var(--font-color-base)' }}>
          Ini adalah contoh konten untuk modul <strong>{activeTab}</strong>. 
          Perhatikan bagaimana border tab di atas menyatu dengan area konten ini 
          menggunakan manipulasi <code>z-index</code> dan <code>margin-bottom</code> negatif.
        </p>
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: 'rgba(0,0,0,0.1)', 
          borderRadius: 'var(--border-radius-input)'
        }}>
          Status: <span style={{ color: 'var(--success-color)' }}>Active</span>
        </div>
      </div>
    </div>
  );
};
