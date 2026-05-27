import React from 'react';
import { GraduationCap, Activity, Cpu, Plane, TreePine, ParkingSquare, MapPin } from 'lucide-react';
import './CambridgeCoverage.css';

const coverageData = [
  {
    title: "Cambridge City Centre (CB1 & CB2)",
    icon: <GraduationCap size={20} className="coverage-icon text-blue" />,
    tags: ["University Colleges", "Historic Centre", "Railway Station"]
  },
  {
    title: "Addenbrooke's & Biomedical Campus (CB2)",
    icon: <Activity size={20} className="coverage-icon text-red" />,
    tags: ["Major Hospital", "Research Hub", "AstraZeneca"]
  },
  {
    title: "Cambridge Science Park & North Cambridge (CB4)",
    icon: <Cpu size={20} className="coverage-icon text-purple" />,
    tags: ["Tech Quarter", "ARM Holdings", "Innovation"]
  },
  {
    title: "Marshall Airport & East Cambridge (CB5)",
    icon: <Plane size={20} className="coverage-icon text-yellow" />,
    tags: ["Regional Airport", "Business Aviation", "Retail Parks"]
  },
  {
    title: "West Cambridge & Eddington (CB3)",
    icon: <TreePine size={20} className="coverage-icon text-green" />,
    tags: ["University West", "New Quarter", "Colleges"]
  },
  {
    title: "All Cambridge Park & Ride Sites",
    icon: <ParkingSquare size={20} className="coverage-icon text-teal" />,
    tags: ["Trumpington P&R", "Babraham P&R", "Milton P&R"]
  }
];

const CambridgeCoverage = () => {
  return (
    <div className="cambridge-coverage-container">
      <div className="coverage-header">
        <MapPin size={24} className="accent-red" />
        <h2>Cambridge Local Coverage Areas</h2>
      </div>
      <p className="coverage-intro">
        As Cambridge's premier local breakdown recovery service, we provide rapid response across all major research hubs, university quarters, business centers, and transit routes:
      </p>
      
      <div className="coverage-grid">
        {coverageData.map((item, index) => (
          <div key={index} className="glass-panel coverage-card">
            <div className="card-top">
              {item.icon}
              <h3 className="card-title">{item.title}</h3>
            </div>
            <div className="card-tags">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="coverage-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CambridgeCoverage;
