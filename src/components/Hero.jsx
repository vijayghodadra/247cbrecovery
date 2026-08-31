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
          Car&nbsp;Recovery&nbsp;near&nbsp;me <br />
          Van&nbsp;Recovery&nbsp;near&nbsp;me <br />
          Towing&nbsp;service&nbsp;near&nbsp;me <br />
          24/7&nbsp;vehicle&nbsp;recovery <br />
          <span className="text-gradient">Nationwide&nbsp;UK <br /> coverage</span>
        </h1>
        <img src={priceTag} alt="24/7 Vehicle recovery and breakdown assistance starting price" fetchPriority="high" className="hero-price-tag" />
      </div>

      <p className="hero-subtitle">
        Cheap &amp; Reliable Vehicle Recovery, Breakdown Recovery, Accident recovery, mobile tyre service, Jump Start, auction Collection &amp; Garage Collection, Classic Car and special vehicle Transport.
        <span className="hero-subtitle-meta">
          <strong>Nationwide UK Coverage</strong> · Avg ETA from 15-30 mins
        </span>
      </p>

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

