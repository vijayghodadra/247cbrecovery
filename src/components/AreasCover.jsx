import React from 'react';
import { MapPin } from 'lucide-react';
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

const AreasCover = () => {
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

        {/* Home Base Pill */}
        <div className="home-base-pill">
          <MapPin size={14} />
          <span>Cambridge — Our Home Base</span>
          <span className="home-base-tag">15 min avg</span>
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
