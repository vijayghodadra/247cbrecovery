import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard, FileText, User, LogIn } from 'lucide-react';
import PaymentModal from './PaymentModal';
import './TrustSecurity.css';

const encryptedItems = [
  { icon: <LogIn size={16} />, label: 'Login Data' },
  { icon: <CreditCard size={16} />, label: 'Payment Information' },
  { icon: <FileText size={16} />, label: 'Contact Forms' },
  { icon: <CreditCard size={16} />, label: 'Card Details' },
  { icon: <User size={16} />, label: 'Customer Information' },
];

const TrustSecurity = () => {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-layout">

          {/* SSL Block */}
          <div className="trust-ssl-block">
            <div className="trust-ssl-header">
              <div className="ssl-shield-icon">
                <Lock size={28} />
              </div>
              <div>
                <h3>SSL Encrypted & Secure</h3>
                <p>Your data is fully protected on this site</p>
              </div>
              <div className="ssl-badge-pill">
                <span className="ssl-dot" />
                256-bit SSL
              </div>
            </div>

            <div className="trust-ssl-divider" />

            <div className="ssl-encrypts-label">
              <ShieldCheck size={14} />
              <span>SSL encrypts:</span>
            </div>

            <div className="ssl-items-grid">
              {encryptedItems.map((item) => (
                <div key={item.label} className="ssl-item">
                  <span className="ssl-item-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="trust-vertical-divider" />

          {/* Worldpay Block */}
          <div className="trust-worldpay-block">
            <div className="worldpay-header">
              <div className="worldpay-logo-box">
                <span className="worldpay-logo-text">W</span>
              </div>
              <div>
                <h3>Worldpay Payment Links</h3>
                <p>Secure payments powered by Worldpay</p>
              </div>
            </div>

            <div className="worldpay-features">
              <div className="worldpay-feature">
                <ShieldCheck size={16} className="wf-icon" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="worldpay-feature">
                <ShieldCheck size={16} className="wf-icon" />
                <span>3D Secure Authentication</span>
              </div>
              <div className="worldpay-feature">
                <ShieldCheck size={16} className="wf-icon" />
                <span>Fraud Protection</span>
              </div>
              <div className="worldpay-feature">
                <ShieldCheck size={16} className="wf-icon" />
                <span>Encrypted Card Processing</span>
              </div>
            </div>

            <div className="worldpay-cards">
              <span className="card-chip clickable" onClick={() => setIsPayModalOpen(true)}>VISA</span>
              <span className="card-chip clickable" onClick={() => setIsPayModalOpen(true)}>Mastercard</span>
              <span className="card-chip clickable" onClick={() => setIsPayModalOpen(true)}>Amex</span>
              <span className="card-chip clickable" onClick={() => setIsPayModalOpen(true)}>Apple Pay</span>
              <span className="card-chip clickable" onClick={() => setIsPayModalOpen(true)}>Google Pay</span>
            </div>

            <button className="worldpay-pay-btn" onClick={() => setIsPayModalOpen(true)}>
              <CreditCard size={16} />
              <span>Pay Securely Online</span>
            </button>
          </div>

          {/* Divider */}
          <div className="trust-vertical-divider" />

          {/* Trust Badges */}
          <div className="trust-badges-block">
            <h3>Our Guarantees</h3>
            <div className="guarantee-list">
              <div className="guarantee-item">
                <div className="guarantee-icon green">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="guarantee-title">No Data Sharing</p>
                  <p className="guarantee-sub">Your info is never sold to third parties</p>
                </div>
              </div>
              <div className="guarantee-item">
                <div className="guarantee-icon blue">
                  <Lock size={20} />
                </div>
                <div>
                  <p className="guarantee-title">GDPR Compliant</p>
                  <p className="guarantee-sub">Full compliance with UK data protection law</p>
                </div>
              </div>
              <div className="guarantee-item">
                <div className="guarantee-icon red">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="guarantee-title">Secure Payments</p>
                  <p className="guarantee-sub">All transactions encrypted end-to-end</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <PaymentModal
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
        defaultAmount={150}
      />
    </section>
  );
};

export default TrustSecurity;

