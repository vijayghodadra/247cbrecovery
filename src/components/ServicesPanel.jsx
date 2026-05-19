import React, { useState, useContext } from 'react';
import { ChevronRight, Wrench, AlertTriangle, Disc, Zap, Navigation, BatteryCharging, PhoneCall } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './ServicesPanel.css';

const servicesList = [
  { id: 1, title: 'Breakdown Recovery',  icon: <Wrench size={18} />,         color: 'solid-green' },
  { id: 2, title: 'Accident Recovery',   icon: <AlertTriangle size={18} />,  color: 'solid-green' },
  { id: 3, title: 'Tyre Service',        icon: <Disc size={18} />,           color: 'solid-green' },
  { id: 4, title: 'Roadside Assistance', icon: <Navigation size={18} />,     color: 'solid-green' },
  { id: 5, title: 'Fuel Delivery',       icon: <Zap size={18} />,            color: 'solid-green' },
  { id: 6, title: 'Jump Start',          icon: <BatteryCharging size={18} />, color: 'solid-green' },
];

const ServicesPanel = () => {
  const { settings } = useContext(SettingsContext);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="services-panel">
      {/* Hero Image */}
      <div className="media-placeholder">
        <img
          src={settings.images.heroTruck}
          alt="Cambridge Vehicle Recovery — Recovery Truck In Action"
          className="hero-truck-img"
        />
      </div>

      {/* Services List Card */}
      <div className="glass-panel services-list-card">
        <div className="services-header">
          <Wrench size={20} />
          <h3>Our Services</h3>
        </div>

        <div className="accordion-list">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`accordion-item ${activeAccordion === service.id ? 'active' : ''}`}
            >
              <button
                className="accordion-trigger"
                onClick={() => toggleAccordion(service.id)}
              >
                <div className="accordion-title">
                  <span className={`icon-wrapper ${service.color}`}></span>
                  <span>{service.title}</span>
                </div>
                <ChevronRight
                  size={18}
                  className={`chevron ${activeAccordion === service.id ? 'rotated' : ''}`}
                />
              </button>
              <div className="accordion-content">
                <p>Professional and fast {service.title.toLowerCase()} tailored to get you back on the road safely and efficiently.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="bottom-action-bar">
          <span className="avg-response">⏱ Avg. Response: 15-30 Mins</span>
          <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary phone-btn">
            <PhoneCall size={16} /> {settings.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPanel;

