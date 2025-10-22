import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from './Sidebar';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Buka menu navigasi"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};