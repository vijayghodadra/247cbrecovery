import React, { useContext } from 'react';
import { AlertCircle, MapPin, Phone } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './TopBar.css';

const TopBar = () => {
  const { settings } = useContext(SettingsContext);

  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <AlertCircle size={14} className="text-red-light" />
            <span>24/7 Emergency Service</span>
          </div>
          <span className="separator">—</span>
          <div className="topbar-item">
            <MapPin size={14} className="text-red-light" />
            <span>Cambridge & Nationwide UK</span>
          </div>
          <span className="separator">—</span>
          <div className="topbar-item highlight">
            <span>Response in 30-45 Mins</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-item">
            <MapPin size={14} className="text-red-light" />
            <span>Cambridge, Cambridgeshire</span>
          </div>
          <span className="separator">|</span>
          <div className="topbar-item font-bold">
            <Phone size={14} className="text-red-light" />
            <span>{settings.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

