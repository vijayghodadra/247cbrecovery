import React, { useState, useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import { Lock, Save, ArrowLeft, RefreshCw, Upload, Image as ImageIcon, Eye } from 'lucide-react';
import './AdminPanel.css';

const IMAGE_LABELS = {
  heroTruck: 'Hero Banner Image (Truck)',
  whyTruck: 'Why Choose Us Banner',
  recovery: 'Service: Breakdown Recovery',
  collection: 'Service: Auction & Garage Collection',
  tirechange: 'Service: Jump Start & Tyre Change',
  special: 'Service: Classic & Special Vehicle',
};

const AdminPanel = ({ onClose }) => {
  const { settings, updateSettings, resetSettings } = useContext(SettingsContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState('');

  // Form State
  const [phone, setPhone] = useState(settings.phone);
  const [phoneRaw, setPhoneRaw] = useState(settings.phoneRaw);
  const [whatsapp, setWhatsapp] = useState(settings.whatsapp);
  const [images, setImages] = useState({ ...settings.images });
  
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPassError('');
    } else {
      setPassError('Invalid password. Try "admin123"');
    }
  };

  const handleImageURLChange = (key, val) => {
    setImages(prev => ({
      ...prev,
      [key]: val
    }));
  };

  const handleImageUpload = (key, e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Limit to 2.5MB for local storage sanity
    if (file.size > 2.5 * 1024 * 1024) {
      alert('Image file is too large! Please select an image smaller than 2.5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages(prev => ({
        ...prev,
        [key]: reader.result // Base64 data URL
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSettings({
      phone,
      phoneRaw,
      whatsapp,
      images,
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to system defaults? This will erase custom images and numbers.')) {
      resetSettings();
      // Reload states
      setPhone(settings.phone);
      setPhoneRaw(settings.phoneRaw);
      setWhatsapp(settings.whatsapp);
      setImages({ ...settings.images });
      window.location.reload(); // Quick refresh to update everything
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-overlay">
        <div className="admin-login-card glass-panel">
          <div className="admin-login-header">
            <div className="admin-lock-icon">
              <Lock size={24} />
            </div>
            <h2>Cambridge Vehicle Recovery</h2>
            <p>ADMIN PANEL LOGIN</p>
          </div>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="login-group">
              <label>Enter Admin Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passError && <span className="login-error-text">{passError}</span>}
            </div>

            <button type="submit" className="admin-login-btn">
              <span>Access Control</span>
            </button>

            <button type="button" className="admin-back-btn" onClick={onClose}>
              <ArrowLeft size={16} /> Back to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      <header className="admin-panel-header">
        <div className="admin-header-title">
          <span className="admin-badge">ADMIN MODE</span>
          <h2>Website Configuration</h2>
        </div>
        <button className="admin-exit-btn" onClick={onClose}>
          <ArrowLeft size={16} /> Save & Exit Panel
        </button>
      </header>

      <div className="admin-panel-grid">
        {/* Left Side: Text Inputs */}
        <div className="admin-panel-column">
          <div className="admin-card glass-panel">
            <div className="admin-card-header">
              <h3>Contact Configurations</h3>
              <p>Update phone numbers and WhatsApp links across the entire site.</p>
            </div>

            <form onSubmit={handleSave} className="admin-form">
              <div className="admin-group">
                <label>Formatted Phone Number (Displays on UI)</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+447438189791"
                  required
                />
                <span className="group-desc">Example: +447438189791 (spaces included)</span>
              </div>

              <div className="admin-group">
                <label>Raw Phone Number (Click to call hyperlink)</label>
                <input
                  type="text"
                  value={phoneRaw}
                  onChange={(e) => setPhoneRaw(e.target.value)}
                  placeholder="+447438189791"
                  required
                />
                <span className="group-desc">Used for &lt;a href="tel:..."&gt; (e.g. +447438189791)</span>
              </div>

              <div className="admin-group">
                <label>WhatsApp Number (Country Code + Number)</label>
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="447438189791"
                  required
                />
                <span className="group-desc">Used for WhatsApp links. Do not add +, spaces or starting 00. Example: 447438189791</span>
              </div>

              <div className="admin-actions">
                <button type="submit" className="admin-save-btn">
                  <Save size={18} />
                  <span>{saveSuccess ? 'Saved Successfully!' : 'Save Contact Details'}</span>
                </button>

                <button type="button" className="admin-reset-btn" onClick={handleReset}>
                  <RefreshCw size={16} />
                  Reset Defaults
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Image Management */}
        <div className="admin-panel-column">
          <div className="admin-card glass-panel">
            <div className="admin-card-header">
              <h3>Website Image Management</h3>
              <p>Upload new files or specify online links to dynamically change site graphics.</p>
            </div>

            <div className="admin-images-list">
              {Object.keys(IMAGE_LABELS).map((imgKey) => (
                <div key={imgKey} className="admin-image-item">
                  <div className="admin-image-info">
                    <span className="img-label">{IMAGE_LABELS[imgKey]}</span>
                    
                    {/* Thumbnail preview */}
                    <div className="admin-img-preview-box">
                      {images[imgKey] ? (
                        <img src={images[imgKey]} alt="preview" className="admin-thumb" />
                      ) : (
                        <div className="admin-thumb-empty"><ImageIcon size={20} /></div>
                      )}
                    </div>
                  </div>

                  <div className="admin-image-inputs">
                    {/* URL Input */}
                    <div className="image-input-sub-group">
                      <label>Image URL</label>
                      <input
                        type="text"
                        value={images[imgKey].startsWith('data:') ? 'Local Upload (Base64)' : images[imgKey]}
                        onChange={(e) => handleImageURLChange(imgKey, e.target.value)}
                        placeholder="https://images.unsplash.com/photo-..."
                        disabled={images[imgKey].startsWith('data:')}
                      />
                    </div>

                    {/* Upload button and Clear button */}
                    <div className="image-actions-row">
                      <label className="image-upload-btn">
                        <Upload size={14} />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(imgKey, e)}
                        />
                      </label>

                      {images[imgKey].startsWith('data:') && (
                        <button
                          type="button"
                          className="image-clear-btn"
                          onClick={() => handleImageURLChange(imgKey, '')}
                        >
                          Clear Upload
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleSave} className="admin-save-btn img-save-block">
              <Save size={18} />
              <span>{saveSuccess ? 'All Changes Saved!' : 'Save Images Configuration'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
