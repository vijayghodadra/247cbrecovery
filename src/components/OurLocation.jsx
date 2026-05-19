import React, { useContext } from 'react';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './OurLocation.css';

const OurLocation = () => {
  const { settings } = useContext(SettingsContext);

  return (
    <section id="location" className="location-section">
      <div className="container">

        {/* Header */}
        <div className="location-header">
          <span className="location-badge">FIND US</span>
          <h2 className="location-title">
            Our <span className="location-highlight">Location</span>
          </h2>
          <p className="location-subtitle">
            Based in Cambridge — covering Cambridgeshire and the wider UK 24/7
          </p>
        </div>

        {/* Map + Info Card */}
        <div className="location-body">

          {/* Embedded Google Map */}
          <div className="map-wrapper">
            <iframe
              title="Cambridge Vehicle Recovery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48979.08596296499!2d0.05308839999999999!3d52.20533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87099683bd269%3A0xd9d90c4194a4724a!2sCambridge%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info Card */}
          <div className="location-card">
            <div className="location-card-header">
              <div className="location-card-logo">🚛</div>
              <div>
                <h3>Cambridge Vehicle Recovery</h3>
                <p className="card-emergency-label">24/7 Emergency Service</p>
              </div>
            </div>

            <div className="location-card-details">
              <div className="location-card-item">
                <MapPin size={16} className="card-icon" />
                <span>Cambridge, Cambridgeshire, UK</span>
              </div>
              <div className="location-card-item">
                <Phone size={16} className="card-icon" />
                <a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a>
              </div>
              <div className="location-card-item">
                <Clock size={16} className="card-icon" />
                <span>Open 24 hours, 7 days a week</span>
              </div>
              <div className="location-card-item">
                <Globe size={16} className="card-icon" />
                <span>Cambridge &amp; nationwide UK coverage</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurLocation;

