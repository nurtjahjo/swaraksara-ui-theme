import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from './Sidebar';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Set state menjadi true jika scroll lebih dari 10px, false jika tidak
      setIsScrolled(window.scrollY > 10);
    };

    // Tambahkan event listener saat komponen di-mount
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen di-unmount (cleanup)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array dependensi kosong agar efek ini hanya berjalan sekali

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Div overlay ini yang akan berubah warna */}
        <div className="navbar-overlay" />

        <a href="#" className="navbar-logo">
          SwarAksara
        </a>
        
        <div className="navbar-links">
          <a href="#" className="nav-link active">Produk</a>
          <a href="#" className="nav-link">Penulis</a>
          <a href="#" className="nav-link">Tentang</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Kontak</a>
          <a href="#" className="nav-link">Masuk</a>
        </div>

        <button 
          className="hamburger-menu" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {/* Ganti ikon berdasarkan state */}
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </header>

      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};