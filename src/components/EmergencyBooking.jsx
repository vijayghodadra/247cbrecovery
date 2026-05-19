import React from 'react';
import { Zap, ShieldCheck, DollarSign, MapPin, MessageCircle, Phone } from 'lucide-react';
import './EmergencyBooking.css';

const whyFeatures = [
  {
    icon: <Zap size={18} />,
    title: '15-30 Min Response',
    desc: 'Nationwide fleet ensures rapid dispatch wherever you are.',
    color: '#c92a2a',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Fully Insured & Certified',
    desc: 'All technicians professionally trained and insured.',
    color: '#c92a2a',
  },
  {
    icon: <DollarSign size={18} />,
    title: 'No Hidden Fees',
    desc: 'Transparent pricing — know the cost before we begin.',
    color: '#c92a2a',
  },
  {
    icon: <MapPin size={18} />,
    title: 'Nationwide Coverage',
    desc: 'All of England, Scotland, and Wales 24/7/365.',
    color: '#c92a2a',
  },
];

const EmergencyBooking = () => {
  return (
    <section id="emergency-booking" className="eb-section">
      <div className="container">

        {/* Header */}
        <div className="eb-header">
          <span className="eb-badge">EMERGENCY BOOKING</span>
          <h2 className="eb-title">
            Book Emergency <span className="eb-highlight">Recovery Now</span>
          </h2>
          <p className="eb-subtitle">Available 24/7 — dispatched within minutes</p>
        </div>

        {/* Two Column Layout */}
        <div className="eb-layout">

          {/* Left: Form */}
          <div className="eb-form-card">
            <div className="eb-form-heading">
              <Zap size={20} className="eb-form-icon" />
              <div>
                <h3>Emergency Booking Form</h3>
                <p>Details go directly to our dispatch team</p>
              </div>
            </div>

            <form className="eb-form" onSubmit={(e) => e.preventDefault()}>
              <div className="eb-form-row">
                <div className="eb-form-group">
                  <label htmlFor="eb-name">Full Name *</label>
                  <input id="eb-name" type="text" placeholder="John Smith" required />
                </div>
                <div className="eb-form-group">
                  <label htmlFor="eb-phone">Phone Number *</label>
                  <input id="eb-phone" type="tel" placeholder="+44 7700 000000" required />
                </div>
              </div>

              <div className="eb-form-group">
                <label htmlFor="eb-pickup">Pickup Location *</label>
                <input id="eb-pickup" type="text" placeholder="e.g. M25 Junction 12, near Staines" required />
              </div>

              <div className="eb-form-group">
                <label htmlFor="eb-destination">Destination (optional)</label>
                <input id="eb-destination" type="text" placeholder="Home / nearest garage / dealer" />
              </div>

              <div className="eb-form-row">
                <div className="eb-form-group">
                  <label htmlFor="eb-vehicle">Vehicle Type *</label>
                  <select id="eb-vehicle" required>
                    <option value="">Select vehicle...</option>
                    <option>Car</option>
                    <option>Van</option>
                    <option>Motorcycle</option>
                    <option>Classic Car</option>
                    <option>Light Commercial</option>
                  </select>
                </div>
                <div className="eb-form-group">
                  <label htmlFor="eb-service">Service Required *</label>
                  <select id="eb-service" required>
                    <option value="">Select service...</option>
                    <option>Breakdown Recovery</option>
                    <option>Auction & Garage Collection</option>
                    <option>Jump Start & Tyre Change</option>
                    <option>Classic Car & Special Vehicle</option>
                  </select>
                </div>
              </div>

              <div className="eb-form-group">
                <label htmlFor="eb-notes">Additional Notes</label>
                <textarea id="eb-notes" rows={3} placeholder="Any extra details about the situation..."></textarea>
              </div>

              <button type="submit" className="eb-btn eb-btn-submit">
                <Zap size={18} />
                Submit Emergency Booking
              </button>

              <a
                href="https://wa.me/447438189791"
                target="_blank"
                rel="noopener noreferrer"
                className="eb-btn eb-btn-whatsapp"
              >
                <MessageCircle size={18} />
                Send via WhatsApp Instead
              </a>
            </form>
          </div>

          {/* Right: Why Choose + Phone */}
          <div className="eb-why">
            <h3 className="eb-why-title">Why Choose Cambridge Vehicle Recovery?</h3>

            <div className="eb-why-list">
              {whyFeatures.map((f, i) => (
                <div key={i} className="eb-why-item">
                  <div className="eb-why-icon" style={{ background: 'rgba(201,42,42,0.15)', color: f.color }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Available */}
            <div className="eb-whatsapp-note">
              <MessageCircle size={16} className="eb-wa-icon" />
              <div>
                <p className="eb-wa-label">WhatsApp Available</p>
                <p className="eb-wa-sub">Message us directly for instant confirmation from our dispatch team.</p>
              </div>
            </div>

            {/* Big Phone Button */}
            <a href="tel:07438189791" className="eb-phone-btn">
              <Phone size={20} />
              <div>
                <span className="eb-phone-number">07438 189791</span>
                <span className="eb-phone-sub">Free call — available 24/7</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencyBooking;
