import React, { useState, useContext } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './Header.css';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const Header = ({ setIsAdminView }) => {
  const { settings } = useContext(SettingsContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo-area">
          <div className="logo-icon">
            <span>🚛</span>
          </div>
          <div className="logo-text">
            <h1>Cambridge Vehicle Recovery</h1>
            <p>Premium Recovery Services</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
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

