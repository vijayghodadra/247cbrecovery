import React, { useContext } from 'react';
import { PhoneCall, MessageCircle, ArrowLeft } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import CambridgeDetailedContent from './CambridgeDetailedContent';
import recoveryImg from '../../images/Recovery.png';
import './CambridgePage.css';

const CambridgePage = ({ onNavigateHome, onNavigate }) => {
  const { settings } = useContext(SettingsContext);

  return (
    <div className="cambridge-page animate-fade-in">
      {/* Back & Breadcrumb navigation */}
      <div className="container breadcrumb-container">
        <button className="back-btn" onClick={onNavigateHome}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Cambridge Emergency Recovery</span>
      </div>

      <main className="container cambridge-content">
        {/* Header Hero Section */}
        <section className="cambridge-hero glass-panel">
          <div className="cambridge-hero-grid">
            <div className="cambridge-hero-left">
              <div className="hero-status">
                <span className="pulse-dot"></span>
                <span>24/7 EMERGENCY COVERAGE ACROSS CAMBRIDGESHIRE</span>
              </div>
              <h1>🚨 Cambridge's #1 Vehicle Recovery Service — <span className="text-red">24/7 Nationwide</span></h1>
              <p className="hero-description">
                Professional vehicle recovery anywhere across Cambridge city and county. Science Park, Addenbrooke's, 
                all university colleges, business parks and residential areas covered 24/7. Specialist care for prestige vehicles.
              </p>

              <div className="hero-cta-buttons">
                <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary btn-lg">
                  <PhoneCall size={20} />
                  <span>Call Emergency Recovery</span>
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="cambridge-hero-right">
              <div className="hero-image-glow-wrapper">
                <img src={recoveryImg} alt="Vehicle Recovery truck in Cambridge" className="cambridge-hero-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed content block */}
        <CambridgeDetailedContent onNavigate={onNavigate} />
      </main>
    </div>
  );
};

export default CambridgePage;
