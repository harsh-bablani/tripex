import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className={`logo ${!isScrolled ? 'light-mode' : ''}`}
        >
          <img src="/logo.jpeg" alt="Tripex World Logo" className="logo-img" style={{ height: '60px', width: 'auto' }} />
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={`nav-link ${!isScrolled ? 'light-mode' : ''}`}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={`nav-link ${!isScrolled ? 'light-mode' : ''}`}>About</a>
          <a href="#destinations" onClick={(e) => { e.preventDefault(); scrollToSection('destinations'); }} className={`nav-link ${!isScrolled ? 'light-mode' : ''}`}>Destinations</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className={`nav-link ${!isScrolled ? 'light-mode' : ''}`}>Services</a>
          <button onClick={() => scrollToSection('contact')} className={`btn ${isScrolled ? 'btn-primary' : 'btn-primary'}`}>
            Contact Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-menu-btn ${!isScrolled ? 'light-mode' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, width: '100%',
          background: 'white', padding: '2rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 40
        }}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-dark)' }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-dark)' }}>About</a>
          <a href="#destinations" onClick={(e) => { e.preventDefault(); scrollToSection('destinations'); }} style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-dark)' }}>Destinations</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-dark)' }}>Services</a>
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
