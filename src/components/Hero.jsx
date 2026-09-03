import React, { useContext } from 'react';
import { PhoneCall, ShieldCheck, Star, Activity, MapPin } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import priceTag from '../../images/Tagg.png';
import './Hero.css';

const CarIcon = () => (
  <svg className="hero-title-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4h14v4z"/>
    <circle cx="7.5" cy="15" r="1.5"/>
    <circle cx="16.5" cy="15" r="1.5"/>
  </svg>
);

const VanIcon = () => (
  <svg className="hero-title-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9.5l1.96 2.5H17V9h2.5zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const TowTruckIcon = () => (
  <svg className="hero-title-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 7h-3V4H3c-1.1 0-2 .9-2 2v10h2c0 1.66 1.34 3 3 3s3-1.34 3-3h5c.42 1.16 1.52 2 2.83 2s2.41-.84 2.83-2H19v-2l-3-3H12V6h4l3 3v2zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10.83.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 6.5l-4 4V8h-2V5h3l3 1.5z"/>
  </svg>
);

const Clock24Icon = () => (
  <svg className="hero-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6" />
    <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l.73-1.19" />
    <polyline points="12 6 12 12 16 14" strokeWidth="2" />
  </svg>
);

const Hero = () => {
  const { settings } = useContext(SettingsContext);

  return (
    <div className="hero-section">
      {/* Live Status */}
      <div className="live-status-pill">
        <div className="live-indicator-dot"></div>
        <span>LIVE NOW — 7 customers being helped · 1 min avg response</span>
      </div>

      {/* Main Typography */}
      <div className="hero-title-wrapper">
        <h1 className="hero-title">
          <span className="hero-title-line">
            <CarIcon /> Car Recovery Near Me
          </span>
          <span className="hero-title-line">
            <VanIcon /> Van Recovery Near Me
          </span>
          <span className="hero-title-line">
            <TowTruckIcon /> Towing Service Near Me
          </span>
          <span className="hero-title-line">
            <Clock24Icon /> 24/7 Vehicle Recovery
          </span>
          <span className="text-gradient hero-title-line-gradient">
            Nationwide UK <br /> Coverage
          </span>
        </h1>
        <img src={priceTag} alt="24/7 Vehicle recovery and breakdown assistance starting price" fetchPriority="high" className="hero-price-tag" />
      </div>

      {/* Deer Logo & Tagline Box */}
      <div className="hero-deer-tagline-box">
        <img src="/Dear.png" alt="Cambridge Vehicle Recovery Deer Logo" className="hero-deer-img" />
        <div className="hero-deer-divider"></div>
        <div className="hero-deer-text">
          <h4>Fast. Reliable. <br />Professional.</h4>
          <p>We're here when <br />you need us most.</p>
        </div>
      </div>

      {/* Actions */}
      <div className="hero-actions">
        <a
          href={`tel:${settings.phoneRaw}`}
          className="btn btn-primary btn-lg"
          aria-label={`Call now — ${settings.phone}`}
        >
          <PhoneCall size={20} />
          <span>Call Now — Free</span>
        </a>
        <a
          href={`tel:${settings.phoneRaw}`}
          className="btn btn-outline btn-lg"
          aria-label={`Get emergency help — ${settings.phone}`}
        >
          <ShieldCheck size={20} className="text-red" />
          <span>Get Emergency Help</span>
        </a>
      </div>

      {/* Trust Badges Bar */}
      <div className="trust-badges-container">
        <div className="trust-badges-row">
          <div className="trust-badge-item">
            <ShieldCheck size={18} className="trust-icon" />
            <div className="trust-text">
              <strong>Fully Insured</strong>
              <span>For your peace of mind</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge-item">
            <Star size={18} className="text-yellow trust-icon" fill="currentColor" />
            <div className="trust-text">
              <strong>4.9/5 Google Rating</strong>
              <span>Trusted by customers</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge-item">
            <Activity size={18} className="text-yellow trust-icon" />
            <div className="trust-text">
              <strong>9,000+ Recoveries</strong>
              <span>Successful recoveries</span>
            </div>
          </div>
        </div>
        <div className="trust-sub-row">
          <MapPin size={15} className="text-red" />
          <span>Nationwide UK Coverage</span>
        </div>
      </div>

      {/* Truck Image */}
      <div className="hero-truck-image-container">
        <img src="/why-truck.jpeg" alt="Vehicle Recovery Truck" className="hero-truck-img" />
      </div>

      <div className="hero-subtitle">
        <p>
          We provide cheap, reliable and professional 24/7 emergency and roadside assistance, vehicle recovery and breakdown recovery services for cars, vans and other vehicles. Whether you have broken down on the roadside, been involved in an accident, or simply need your vehicle transported safely, our experienced team is here to help.
        </p>
        <p style={{ marginTop: '12px' }}>
          Our services include vehicle recovery, breakdown recovery, accident recovery, mobile tyre services and jump starts, helping you get back on the road as quickly as possible. We also offer auction collections and garage collections, providing a convenient and reliable vehicle transportation service when you need it.
        </p>
        <p style={{ marginTop: '12px' }}>
          For specialist vehicles, we provide classic car and special vehicle transport, taking extra care to ensure your valuable or unique vehicle is transported safely and securely.
        </p>
        <p style={{ marginTop: '12px' }}>
          Whatever your vehicle recovery or transportation needs, you can rely on 247 CB Vehicle Recovery for a fast, professional and dependable service, available 24 hours a day, 7 days a week.
        </p>
        <span className="hero-subtitle-meta">
          <strong>Nationwide UK Coverage</strong> · Avg ETA from 15-30 mins
        </span>
      </div>

      {/* Stats Box */}
      <div className="glass-panel stats-box">
        <div className="stat-item">
          <h3>15-30</h3>
          <p>MIN RESPONSE</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>9,000+</h3>
          <p>CUSTOMERS</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>99.9%</h3>
          <p>SATISFACTION</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>From £50</h3>
          <p>STARTING PRICE</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

