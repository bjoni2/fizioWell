import { useState } from 'react';
import Logo from './Logo';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo-link">
            <Logo width={50} height={50} />
            <span className="brand-name">FizioWell</span>
          </a>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#services">Specialitetet</a>
            <a href="#about">Rreth Nesh</a>
            <a href="#therapist">Fizioterapisti</a>
            <a href="#testimonials">Përvojat</a>
            <a href="#contact">Kontakti</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
