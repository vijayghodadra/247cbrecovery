import React from 'react';
import { Check, Phone, MessageCircle } from 'lucide-react';
import './ServicesGrid.css';

const servicesData = [
  {
    id: 1,
    title: 'Breakdown Recovery',
    icon: '🚛',
    description: 'Fast, reliable 24/7 breakdown recovery across the UK with 15-30 minute response times.',
    image: '/recovery.jpeg',
  },
  {
    id: 2,
    title: 'Auction & Garage Collection',
    icon: '🏭',
    description: 'Professional vehicle collection from auctions and garages across the UK — fully insured transport.',
    image: '/collection.jpeg',
  },
  {
    id: 3,
    title: 'Jump Start & Tyre Change',
    icon: '🔋',
    description: 'Fast on-the-spot jump start and tyre change service. We carry a wide range of tyres and equipment.',
    image: '/tirechange.jpeg',
  },
  {
    id: 4,
    title: 'Classic Car & Special Vehicle',
    icon: '🚘',
    description: 'Specialist handling and transport for classic cars and special vehicles with full care and insurance.',
    image: '/special.jpeg',
  },
];

const ServicesGrid = () => {
  return (
    <section className="services-grid-section" id="services">
      <div className="container">

        {/* Section Header */}
        <div className="sg-header">
          <span className="sg-badge">OUR SERVICES</span>
          <h2 className="sg-title">
            Everything You Need <span className="sg-highlight">On The Road</span>
          </h2>
          <p className="sg-subtitle">
            Professional emergency services available 24/7 across the entire United Kingdom
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-image">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <div className="availability">
                  <Check size={14} />
                  <span>24/7 Available</span>
                </div>
                <div className="service-title-row">
                  <div className="service-icon-box">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-desc">{service.description}</p>
                <div className="card-action-buttons">
                  <a href="tel:07438189791" className="card-btn card-btn-call">
                    <Phone size={15} />
                    Emergency Call
                  </a>
                  <a
                    href="https://wa.me/447438189791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn card-btn-whatsapp"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
