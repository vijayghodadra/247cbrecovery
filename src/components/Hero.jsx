import React, { useContext } from 'react';
import { PhoneCall, ShieldCheck, Star, Activity, MapPin } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import priceTag from '../../images/Tagg.png';
import './Hero.css';

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
          Car&nbsp;Recovery&nbsp;Near&nbsp;me <br />
          Van&nbsp;Recovery&nbsp;Near&nbsp;me <br />
          Towing&nbsp;service&nbsp;Near&nbsp;me <br />
          24/7&nbsp;vehicle&nbsp;recovery <br />
          <span className="text-gradient">Nationwide&nbsp;UK <br /> coverage</span>
        </h1>
        <img src={priceTag} alt="24/7 Vehicle recovery and breakdown assistance starting price" fetchPriority="high" className="hero-price-tag" />
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

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="badge">
          <ShieldCheck size={16} />
          <span>Fully Insured</span>
        </div>
        <div className="badge">
          <Star size={16} className="text-yellow" fill="currentColor" />
          <span>4.9/5 Google Rating</span>
        </div>
        <div className="badge">
          <Activity size={16} className="text-yellow" />
          <span>9,000+ Recoveries</span>
        </div>
        <div className="badge">
          <MapPin size={16} className="text-red" />
          <span>Nationwide UK</span>
        </div>
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

