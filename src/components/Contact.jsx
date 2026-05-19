import React, { useContext } from 'react';
import { Phone, Mail, MapPin, Clock, PhoneCall } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './Contact.css';

const Contact = () => {
  const { settings } = useContext(SettingsContext);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-layout">

          {/* Left: Info */}
          <div className="contact-info">
            <p className="section-label">GET IN TOUCH</p>
            <h2 className="section-title">Contact Us Anytime</h2>
            <p className="section-subtitle">
              Whether it's a roadside emergency or you just need a quote,
              our team is always ready to help — 24 hours a day.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="contact-label">Emergency Phone</p>
                  <a href={`tel:${settings.phoneRaw}`} className="contact-value">{settings.phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-label">Email Address</p>
                  <a href="mailto:info@cambridgevehiclerecovery.co.uk" className="contact-value">
                    info@cambridgevehiclerecovery.co.uk
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-label">Service Area</p>
                  <p className="contact-value">Cambridge & Nationwide UK</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="contact-label">Hours</p>
                  <p className="contact-value">24 / 7 — 365 Days a Year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card glass-panel">
            <h3>Send Us a Message</h3>
            <p className="form-subtitle">For non-urgent enquiries. For emergencies, please call directly.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" type="text" placeholder="John Smith" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input id="contact-phone" type="tel" placeholder="07xxx xxxxxx" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-service">Service Required</label>
                <select id="contact-service">
                  <option>Breakdown Recovery</option>
                  <option>Accident Recovery</option>
                  <option>Tyre Service</option>
                  <option>Roadside Assistance</option>
                  <option>Fuel Delivery</option>
                  <option>Jump Start</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows={4} placeholder="Tell us your location and what's happened..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <PhoneCall size={18} />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

