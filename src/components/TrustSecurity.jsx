import React, { useState } from 'react';
import { ShieldCheck, CreditCard } from 'lucide-react';
import PaymentModal from './PaymentModal';
import './TrustSecurity.css';

const TrustSecurity = () => {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-layout">

          {/* Worldpay Block */}
          <div className="trust-worldpay-block glass-panel">
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

