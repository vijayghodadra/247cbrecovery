import React from 'react';
import { Phone, MapPin, Truck, CheckSquare, Clock } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    id: '01',
    color: '#c92a2a',
    icon: <Phone size={32} strokeWidth={1.5} />,
    title: 'Call Us',
    description: 'Contact our 24/7 emergency line and speak to our friendly dispatch team.',
    time: '1 min',
  },
  {
    id: '02',
    color: '#e07b39',
    icon: <MapPin size={32} strokeWidth={1.5} />,
    title: 'Share Location',
    description: 'Tell us your exact location and vehicle details for quick dispatch.',
    time: '2 min',
  },
  {
    id: '03',
    color: '#c92a2a',
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: 'We Arrive',
    description: 'Our expert team reaches you within 15-30 minutes anywhere in the UK.',
    time: '15-30 min',
  },
  {
    id: '04',
    color: '#16a34a',
    icon: <CheckSquare size={32} strokeWidth={1.5} />,
    title: 'Problem Solved',
    description: 'We recover your vehicle safely and get you back on track, stress-free.',
    time: '30 min',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">

        {/* Header */}
        <div className="hiw-header">
          <span className="hiw-badge">HOW IT WORKS</span>
          <h2 className="hiw-title">
            Get Help In <span className="hiw-highlight">4 Simple Steps</span>
          </h2>
          <p className="hiw-subtitle">
            Our streamlined process ensures you get the fastest possible assistance
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-steps">
          {steps.map((step, index) => (
            <div key={step.id} className="hiw-step">
              {/* Number Badge */}
              <div className="hiw-step-number" style={{ backgroundColor: step.color }}>
                {step.id}
              </div>

              {/* Icon */}
              <div className="hiw-step-icon" style={{ color: step.color }}>
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-desc">{step.description}</p>

              {/* Time */}
              <div className="hiw-step-time">
                <Clock size={14} style={{ color: '#e07b39' }} />
                <span>{step.time}</span>
              </div>

              {/* Connector line (not after last step) */}
              {index < steps.length - 1 && (
                <div className="hiw-connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Total Time Banner */}
        <div className="hiw-banner">
          <p>
            Total Average Time:{' '}
            <span className="hiw-banner-highlight">15-30 Minutes</span>{' '}
            from your call
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
