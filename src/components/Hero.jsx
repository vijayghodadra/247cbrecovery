import React from 'react';
import { PhoneCall, ShieldCheck, Star, Activity, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Live Status */}
      <div className="live-status-pill">
        <div className="live-indicator-dot"></div>
        <span>LIVE NOW — 7 customers being helped · 1 min avg response</span>
      </div>

      {/* Main Typography */}
      <h1 className="hero-title">
        Cambridge's #1 Vehicle <br />
        <span className="text-gradient">Recovery Service</span> — 24/7 <br />
        Nationwide
      </h1>

      <p className="hero-subtitle">
        Fast breakdown recovery in Cambridge and across the UK. Roadside
        assistance, accident recovery, tyre service and emergency towing.
        Average response: 15-30 minutes.
      </p>

      {/* Actions */}
      <div className="hero-actions">
        <a
          href="tel:07438189791"
          className="btn btn-primary btn-lg"
          aria-label="Call now — 07438 189791"
        >
          <PhoneCall size={20} />
          <span>Call Now — Free</span>
        </a>
        <a
          href="tel:07438189791"
          className="btn btn-outline btn-lg"
          aria-label="Get emergency help — 07438 189791"
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
      </div>
    </div>
  );
};

export default Hero;
