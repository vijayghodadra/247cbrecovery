import React from 'react';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '../data/serviceAreas';
import recoveryImg from '../../images/Recovery.png';
import './AreasCover.css';

const regions = [
  {
    name: 'England',
    cities: [
      'London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Bristol',
      'Sheffield', 'Nottingham', 'Newcastle', 'Leicester', 'Coventry',
      'Bradford', 'Stoke-on-Trent', 'Wolverhampton', 'Plymouth', 'Southampton',
    ],
  },
  {
    name: 'Scotland',
    cities: ['Glasgow', 'Edinburgh', 'Aberdeen', 'Dundee', 'Inverness', 'Perth'],
  },
  {
    name: 'Wales',
    cities: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Bangor'],
  },
];

const AreasCover = ({ onNavigate }) => {
  return (
    <section id="coverage" className="areas-section">
      <div className="container">

        {/* Header */}
        <div className="areas-header">
          <span className="areas-badge">COVERAGE</span>
          <h2 className="areas-title">
            Areas We <span className="areas-highlight">Cover</span>
          </h2>
          <p className="areas-subtitle">
            Based in Cambridge — 24/7 breakdown recovery across England, Scotland &amp; Wales.
            Nationwide response in 30–45 mins.
          </p>
        </div>

        {/* Coverage Layout Grid with Side Image */}
        <div className="coverage-layout-grid">
          <div className="coverage-pills-column">
            {serviceAreas.map((area) => {
              const isCambridge = area.slug === 'vehicle-recovery-cambridgeshire';
              return (
                <button
                  key={area.slug}
                  onClick={() => onNavigate(`/${area.slug}`)}
                  className="home-base-pill clickable-coverage-pill"
                >
                  <MapPin size={14} />
                  <span>
                    {isCambridge
                      ? 'Breakdown Vehicle Recovery Cambridge & Cambridgeshire'
                      : area.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="coverage-image-column">
            <img
              src={recoveryImg}
              alt="Professional roadside vehicle recovery service area"
              className="coverage-side-image"
            />
          </div>
        </div>

        {/* Region Groups */}
        <div className="regions-list">
          {regions.map((region) => (
            <div key={region.name} className="region-group">
              <div className="region-label">{region.name}</div>
              <div className="cities-wrap">
                {region.cities.map((city) => (
                  <div key={city} className="city-tag">
                    <MapPin size={12} className="city-pin" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AreasCover;
