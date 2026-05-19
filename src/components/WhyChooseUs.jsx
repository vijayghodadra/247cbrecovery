import React from 'react';
import { Zap, ShieldCheck, DollarSign, PhoneCall } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    icon: <Zap size={22} />,
    title: '30-45 Min Nationwide Response',
    description: 'Fast dispatch to any UK location, guaranteed.',
  },
  {
    id: 2,
    icon: <ShieldCheck size={22} />,
    title: 'Fully Insured & Certified',
    description: 'All operators are trained, insured and DBS checked.',
  },
  {
    id: 3,
    icon: <DollarSign size={22} />,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no call-out charges.',
  },
  {
    id: 4,
    icon: <PhoneCall size={22} />,
    title: '24/7 Live Support',
    description: 'Real people answering, every hour of every day.',
  },
];

const stats = [
  { value: '9,000+', label: 'Happy Customers', sub: 'Served across the UK' },
  { value: '15–30', label: 'Min Response', sub: 'Average arrival time' },
  { value: '13+', label: 'Years Experience', sub: 'In recovery services' },
  { value: '99.9%', label: 'Satisfaction Rate', sub: 'Customer guarantee' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-section">
      <div className="container">
        <div className="why-layout">

          {/* Left: Image */}
          <div className="why-image-wrap">
            <img
              src="/why-truck.jpeg"
              alt="Trusted Vehicle Recovery Team"
              className="why-image"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="why-content">
            <span className="why-badge">WHY CHOOSE US</span>
            <h2 className="why-title">
              Trusted By Thousands{' '}
              <span className="why-highlight">Across<br />The UK</span>
            </h2>
            <p className="why-desc">
              With over 13 years of experience and 9,000+ successful recoveries, we
              are the UK's most reliable emergency breakdown and recovery service
              — available nationwide, day or night.
            </p>

            <div className="why-features">
              {features.map((f) => (
                <div key={f.id} className="why-feature-item">
                  <div className="why-feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="why-stats-bar">
        {stats.map((s, i) => (
          <div key={i} className="why-stat">
            <h3>{s.value}</h3>
            <p className="stat-label">{s.label}</p>
            <p className="stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
