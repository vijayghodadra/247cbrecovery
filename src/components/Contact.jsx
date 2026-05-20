import React, { useContext, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './Contact.css';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const { settings } = useContext(SettingsContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Breakdown Recovery',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, service, message } = formData;

    const messageText = `*New Enquiry - Cambridge Vehicle Recovery*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Service Required:* ${service}\n` +
      `*Message:* ${message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-service">Service Required</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
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
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us your location and what's happened..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-whatsapp submit-btn">
                <WhatsAppIcon size={18} />
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

