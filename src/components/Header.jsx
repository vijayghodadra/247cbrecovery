import React, { useState, useContext } from 'react';
import { PhoneCall, Menu, X, ChevronDown } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import { serviceAreas } from '../data/serviceAreas';
import './Header.css';

const Header = ({ setIsAdminView, currentPath, onNavigate }) => {
  const { settings } = useContext(SettingsContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleHashClick = (e, href) => {
    e.preventDefault();
    if (currentPath !== '/') {
      // Navigate to homepage first
      onNavigate('/');
      // Wait for DOM to render, then scroll to section
      setTimeout(() => {
        const el = document.getElementById(href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      // Already on homepage, scroll directly
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    onNavigate('/');
  };

  return (
    <header className="header">
      <div className="container header-content">

        {/* Logo Area */}
        <a href="/" onClick={handleLogoClick} className="logo-area">
          <div className="logo-icon">
            <span>🚛</span>
          </div>
          <div className="logo-text">
            <h1>Cambridge Vehicle Recovery</h1>
            <p>Premium Recovery Services</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li>
              <a href="/" onClick={handleLogoClick} className={currentPath === '/' ? 'active-nav-link' : ''}>Home</a>
            </li>
            {/* Services Dropdown Item */}
            <li className="nav-dropdown-item">
              <span className="dropdown-trigger">
                Services <ChevronDown size={14} />
              </span>
              <ul className="dropdown-menu">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <a
                      href={`/${area.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/${area.slug}`);
                      }}
                      className={currentPath === `/${area.slug}` ? 'active-dropdown-link' : ''}
                    >
                      {area.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a 
                href="/cambridge" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/cambridge');
                }}
                className={currentPath === '/cambridge' ? 'active-nav-link' : ''}
              >
                Cambridge
              </a>
            </li>

            {/* Other Hash Links */}
            <li>
              <a href="#coverage" onClick={(e) => handleHashClick(e, '#coverage')}>Coverage</a>
            </li>
            <li>
              <a href="#reviews" onClick={(e) => handleHashClick(e, '#reviews')}>Reviews</a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleHashClick(e, '#faq')}>FAQ</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleHashClick(e, '#contact')}>Contact</a>
            </li>

            <li>
              <button onClick={() => setIsAdminView(true)} className="nav-admin-btn">
                Admin
              </button>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions desktop-cta">
          <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary emergency-btn">
            <PhoneCall size={18} />
            <span>Emergency Call</span>
          </a>
        </div>

        {/* Mobile: Call + Hamburger */}
        <div className="mobile-controls">
          <a href={`tel:${settings.phoneRaw}`} className="mobile-call-btn" aria-label="Call now">
            <PhoneCall size={18} />
          </a>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <nav>
          <ul>
            <li>
              <a href="/" onClick={(e) => { handleLogoClick(e); closeMenu(); }} className={currentPath === '/' ? 'active-nav-link' : ''}>Home</a>
            </li>
            {/* Mobile Services Accordion */}
            <li className="mobile-dropdown-li">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown size={18} className={`chevron-icon ${mobileServicesOpen ? 'rotated' : ''}`} />
              </button>
              <ul className={`mobile-dropdown-menu ${mobileServicesOpen ? 'open' : ''}`}>
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <a
                      href={`/${area.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenu();
                        onNavigate(`/${area.slug}`);
                      }}
                    >
                      {area.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a 
                href="/cambridge" 
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  onNavigate('/cambridge');
                }}
                className={currentPath === '/cambridge' ? 'active-nav-link' : ''}
              >
                Cambridge
              </a>
            </li>

            {/* Other Mobile Links */}
            <li>
              <a href="#coverage" onClick={(e) => { handleHashClick(e, '#coverage'); closeMenu(); }}>Coverage</a>
            </li>
            <li>
              <a href="#reviews" onClick={(e) => { handleHashClick(e, '#reviews'); closeMenu(); }}>Reviews</a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => { handleHashClick(e, '#faq'); closeMenu(); }}>FAQ</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { handleHashClick(e, '#contact'); closeMenu(); }}>Contact</a>
            </li>
            <li>
              <button
                onClick={() => {
                  closeMenu();
                  setIsAdminView(true);
                }}
                className="mobile-admin-btn"
              >
                Admin
              </button>
            </li>
          </ul>
        </nav>
        <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary mobile-menu-cta" onClick={closeMenu}>
          <PhoneCall size={18} />
          Emergency Call — {settings.phone}
        </a>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
};

export default Header;
