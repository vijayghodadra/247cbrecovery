import React from 'react';
import { Globe, Clock, PhoneCall, DollarSign } from 'lucide-react';
import './InfoStrip.css';

const items = [
  { icon: <Globe size={15} />, text: 'Nationwide UK Service Available' },
  { icon: <Clock size={15} />, text: 'Response in 30–45 Mins' },
  { icon: <PhoneCall size={15} />, text: 'Available 24/7, 365 Days' },
  { icon: <DollarSign size={15} />, text: 'No Call-Out Fee' },
];

const InfoStrip = () => {
  return (
    <div className="info-strip">
      <div className="info-strip-inner">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <div className="info-strip-item">
              <span className="info-strip-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
            <span className="info-strip-sep">|</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfoStrip;
