import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Definisikan props yang diterima oleh Sidebar
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  position: 'left' | 'right';
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, position }) => {
  return (
    <>
      <div className={`sidebar-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <nav className={`sidebar-menu ${isOpen ? 'open' : ''} position-${position}`}>
        <button 
          className="sidebar-close-btn" 
          onClick={onClose}
          aria-label="Tutup menu navigasi"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="sidebar-links">
          <a href="#" className="nav-link active">Produk</a>
          <a href="#" className="nav-link">Penulis</a>
          <a href="#" className="nav-link">Tentang</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Kontak</a>
          <a href="#" className="nav-link">Masuk</a>
        </div>
      </nav>
    </>
  );
};