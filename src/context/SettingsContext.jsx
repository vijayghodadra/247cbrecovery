import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

const DEFAULT_SETTINGS = {
  phone: '+447438189791',
  phoneRaw: '+447438189791',
  whatsapp: '447438189791',
  images: {
    heroTruck: '/hero-truck.jpeg',
    whyTruck: '/why-truck.jpeg',
    recovery: '/recovery.jpeg',
    collection: '/collection.jpeg',
    tirechange: '/tirechange.jpeg',
    special: '/special.jpeg',
  }
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('cvr_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Force the new phone number format globally
        parsed.phone = '+447438189791';
        parsed.phoneRaw = '+447438189791';
        localStorage.setItem('cvr_settings', JSON.stringify(parsed));
        // Merge with defaults in case of missing keys
        return {
          ...DEFAULT_SETTINGS,
          ...parsed,
          images: {
            ...DEFAULT_SETTINGS.images,
            ...(parsed.images || {})
          }
        };
      } catch (e) {
        console.error('Error parsing settings from localStorage', e);
        return DEFAULT_SETTINGS;
      }
    }
    return DEFAULT_SETTINGS;
  });

  const updateSettings = (newSettings) => {
    setSettings((prev) => {
      const updated = {
        ...prev,
        ...newSettings,
        images: {
          ...prev.images,
          ...(newSettings.images || {})
        }
      };
      localStorage.setItem('cvr_settings', JSON.stringify(updated));
      return updated;
    });
  };

  const resetSettings = () => {
    localStorage.removeItem('cvr_settings');
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
