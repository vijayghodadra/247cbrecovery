import React, { useContext } from 'react';
import { Phone, Mail, MapPin, Share2, MessageSquare, Heart } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './Footer.css';

const Footer = ({ onNavigate, setIsAdminView }) => {
  const { settings } = useContext(SettingsContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-area">
              <div className="logo-icon"><span>🚛</span></div>
              <div>
                <h3>Cambridge Vehicle Recovery</h3>
                <p>Premium Recovery Services</p>
              </div>
            </div>
            <p className="footer-tagline">
              Cambridge's most trusted 24/7 vehicle recovery service. Fast, professional, and always there when you need us.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Share2 size={18} /></a>
              <a href="#" aria-label="Twitter"><MessageSquare size={18} /></a>
              <a href="#" aria-label="Instagram"><Heart size={18} /></a>
            </div>
            {setIsAdminView && (
              <button
                onClick={() => setIsAdminView(true)}
                className="footer-admin-btn"
                aria-label="Admin Portal"
              >
                Admin
              </button>
            )}
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Breakdown Recovery</a></li>
              <li><a href="#services">Accident Recovery</a></li>
              <li><a href="#services">Tyre Service</a></li>
              <li><a href="#services">Roadside Assistance</a></li>
              <li><a href="#services">Fuel Delivery</a></li>
              <li><a href="#services">Jump Start</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#reviews">Customer Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#coverage">Coverage Area</a></li>
              <li><a href="/car-recovery-huntingdon" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('/car-recovery-huntingdon'); } }}>Car Recovery Huntingdon</a></li>
              <li><a href="/van-recovery-huntingdon" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('/van-recovery-huntingdon'); } }}>Van Recovery Huntingdon</a></li>
              <li><a href="/jump-start-huntingdon" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('/jump-start-huntingdon'); } }}>Jump Start Huntingdon</a></li>
              <li><a href="/breakdown-recovery-huntingdon" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('/breakdown-recovery-huntingdon'); } }}>Breakdown Recovery Huntingdon</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:info@cambridgevehiclerecovery.co.uk">info@cambridge...</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Cambridge & Nationwide UK</span>
              </div>
            </div>
            <div className="footer-emergency">
              <p>🚨 24/7 Emergency</p>
              <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary emergency-footer-btn">
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cambridge Vehicle Recovery. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

