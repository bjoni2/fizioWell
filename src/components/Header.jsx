import { useState } from 'react';
import Logo from './Logo';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
            aria-label="Hap menunë"
          >
            ☰
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="/#home" onClick={closeMenu}>Home</a>
            <a href="/#services" onClick={closeMenu}>Shërbimet</a>
            <a href="/#about" onClick={closeMenu}>Rreth Nesh</a>
            <a href="/#therapist" onClick={closeMenu}>Fizioterapisti</a>
            <a href="/#contact" onClick={closeMenu}>Kontakti</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
