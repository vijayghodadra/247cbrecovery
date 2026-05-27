import React, { useContext } from 'react';
import { PhoneCall, Star, MapPin, Compass, ShieldCheck, Map, ArrowLeft, MessageCircle } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import ServicesGrid from './ServicesGrid';
import CambridgeDetailedContent from './CambridgeDetailedContent';
import './ServiceAreaPage.css';
import './CambridgePage.css';

const StarRating = ({ rating }) => (
  <div className="star-row">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? '#f59e0b' : 'none'} color={i < rating ? '#f59e0b' : '#cbd5e1'} />
    ))}
  </div>
);

const ServiceAreaPage = ({ area, onNavigateHome, onNavigate }) => {
  const { settings } = useContext(SettingsContext);

  if (!area) return null;



  return (
    <div className="service-area-page">
      {/* Back to Home Button / Breadcrumb */}
      <div className="breadcrumb-container container">
        <button onClick={onNavigateHome} className="back-home-btn">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Banner */}
      <section className="area-hero">
        <div className="container area-hero-content">
          <div className="area-hero-text">
            <span className="area-badge">24/7 EMERGENCY RECOVERY</span>
            <h1 className="area-title">{area.name}</h1>
            <p className="area-subtitle">
              Cheap & reliable vehicle recovery & breakdown assistance in Cambridge & Cambridgeshire. <br />
              Nationwide UK coverage <br />
              Avg ETA from 15-30 mins
            </p>
            <div className="area-hero-actions">
              <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary emergency-call-btn">
                <PhoneCall size={20} />
                <span>Call Emergency Recovery: {settings.phone}</span>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp whatsapp-call-btn"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container area-content-grid">
        {/* Left Column: Unique Text & Landmarks */}
        <div className="area-main-content">
          <div className="content-card">
            <h2>{area.contentTitle || `Cheap & reliable vehicle breakdown recovery in Cambridge, Cambridgeshire, Newmarket, Huntingdon, Peterborough, Ely, Haverhill, Saffron Walden, Duxford, A10, M11 , A14,`}</h2>
            <p className="area-description-text">{area.uniqueText}</p>
            
            <div className="trust-factors-grid">
              <div className="trust-factor">
                <ShieldCheck className="trust-icon" size={24} />
                <div>
                  <h4>Fully Insured</h4>
                  <p>All recoveries are completed under comprehensive transit insurance.</p>
                </div>
              </div>
              <div className="trust-factor">
                <ShieldCheck className="trust-icon" size={24} />
                <div>
                  <h4>30-45 Mins Response</h4>
                  <p>Local operators stationed dynamically to reach you immediately.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Local Landmarks */}
          <div className="content-card landmarks-card">
            <div className="card-header-with-icon">
              <Compass size={24} className="accent-icon" />
              <h2>Local Landmarks &amp; Coverage Areas</h2>
            </div>
            <p className="landmarks-intro">
              Our local recovery operators are intimately familiar with {area.shortName} and surrounding landmarks, enabling us to pinpoint your exact breakdown location quickly:
            </p>
            <div className="landmarks-list">
              {area.landmarks.map((landmark, idx) => (
                <div key={idx} className="landmark-tag">
                  <MapPin size={14} className="landmark-pin" />
                  <span>{landmark}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Maps, Reviews, & Call CTA */}
        <div className="area-sidebar">
          {/* Emergency Call CTA */}
          <div className="sidebar-cta-card">
            <div className="cta-header">
              <PhoneCall size={32} className="cta-phone-icon" />
              <h3>Need Help Right Now?</h3>
            </div>
            <p>Speak directly to our emergency dispatch team. We will immediately quote you and dispatch our closest recovery vehicle to your location.</p>
            <div className="cta-stat">
              <span className="stat-label">Average Arrival Time:</span>
              <span className="stat-val">30 - 45 Minutes</span>
            </div>
            <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary cta-btn">
              Call Now: {settings.phone}
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="sidebar-map-card">
            <div className="card-header-with-icon">
              <Map size={20} className="accent-icon" />
              <h3>Location Map</h3>
            </div>
            <div className="area-map-wrapper">
              <iframe
                title={`${area.name} Google Map`}
                src={area.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="map-caption">24/7 Coverage across {area.shortName} and surrounding connecting routes.</p>
          </div>

          {/* Customer Reviews */}
          <div className="sidebar-reviews-card">
            <h3>Local Reviews for {area.shortName}</h3>
            <div className="local-reviews-list">
              {area.reviews.map((rev, idx) => (
                <div key={idx} className="local-review-item">
                  <div className="review-meta">
                    <StarRating rating={rev.rating} />
                    <span className="review-date">{rev.date}</span>
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                  <p className="review-author">— {rev.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Shared Cambridge Details Description */}
      <div className="container" style={{ marginTop: '40px' }}>
        <CambridgeDetailedContent onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default ServiceAreaPage;
