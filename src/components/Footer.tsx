import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-copyright">
        <FontAwesomeIcon icon={faCopyright} />
        <span>{`2023-${currentYear} - SwarAksara`}</span>
      </div>
      <div className="footer-links">
        <a href="#">Kebijakan Privasi</a>
        <a href="#">Syarat & Ketentuan</a>
        <a href="#">Hubungi Kami</a>
      </div>
    </footer>
  );
};