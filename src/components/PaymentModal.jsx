import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, CreditCard, CheckCircle2 } from 'lucide-react';
import './PaymentModal.css';

const PaymentModal = ({ isOpen, onClose, defaultAmount = 150 }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reference: '',
    amount: defaultAmount,
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [cardType, setCardType] = useState('unknown');
  const [step, setStep] = useState('form'); // form | processing | success
  const [txRef, setTxRef] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setFormData(prev => ({
        ...prev,
        amount: defaultAmount,
        name: '',
        email: '',
        reference: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
      }));
      setErrors({});
    }
  }, [isOpen, defaultAmount]);

  const detectCardType = (num) => {
    const cleanNum = num.replace(/\s+/g, '');
    if (cleanNum.startsWith('4')) return 'visa';
    if (/^5[1-5]/.test(cleanNum)) return 'mastercard';
    if (/^3[47]/.test(cleanNum)) return 'amex';
    return 'unknown';
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    // Add spacing for formatting
    const isAmex = detectCardType(value) === 'amex';
    if (isAmex) {
      // Amex layout: 4-6-5 digits
      const match = value.match(/^(\d{1,4})(\d{1,6})?(\d{1,5})?$/);
      if (match) {
        formattedValue = match[1] + (match[2] ? ' ' + match[2] : '') + (match[3] ? ' ' + match[3] : '');
      } else {
        formattedValue = value;
      }
    } else {
      // Standard layout: 4-4-4-4 digits
      const matches = value.match(/\d{1,4}/g);
      if (matches) {
        formattedValue = matches.join(' ');
      } else {
        formattedValue = value;
      }
    }

    // Limit length
    const maxLength = isAmex ? 17 : 19; // 15 + 2 spaces or 16 + 3 spaces
    formattedValue = formattedValue.slice(0, maxLength);

    setCardType(detectCardType(formattedValue));
    setFormData(prev => ({ ...prev, cardNumber: formattedValue }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    value = value.slice(0, 5);
    setFormData(prev => ({ ...prev, expiry: value }));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setFormData(prev => ({ ...prev, cvv: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter a valid email address';
    if (!formData.amount || parseFloat(formData.amount) <= 0) newErrors.amount = 'Amount must be greater than £0';
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    
    const cleanCard = formData.cardNumber.replace(/\s+/g, '');
    const isAmex = cardType === 'amex';
    if (isAmex && cleanCard.length !== 15) {
      newErrors.cardNumber = 'Amex must be 15 digits';
    } else if (!isAmex && cleanCard.length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expiry = 'Use MM/YY format';
    } else {
      const [m, y] = formData.expiry.split('/').map(Number);
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      if (y < currentYear || (y === currentYear && m < currentMonth)) {
        newErrors.expiry = 'Card is expired';
      }
    }

    const minCvv = isAmex ? 4 : 3;
    if (formData.cvv.length < minCvv) {
      newErrors.cvv = `CVV must be ${minCvv} digits`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStep('processing');
    
    // Simulate payment API calls
    setTimeout(() => {
      const ref = 'CVR-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setTxRef(ref);
      setStep('success');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="payment-modal-overlay" role="dialog" aria-modal="true">
      <div className="payment-modal-card glass-panel">
        
        {/* Close Button */}
        <button className="payment-modal-close" onClick={onClose} aria-label="Close payment modal">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="payment-modal-header">
          <div className="worldpay-header-logo">
            <span className="wp-badge">W</span>
            <div>
              <h3>Worldpay</h3>
              <p>SECURE GATEWAY</p>
            </div>
          </div>
          <div className="security-lock-badge">
            <Lock size={14} />
            <span>256-bit SSL</span>
          </div>
        </div>

        {step === 'form' && (
          <form className="payment-modal-form" onSubmit={handleSubmit}>
            <h4 className="payment-section-title">Billing Information</h4>
            <div className="form-row-2">
              <div className="payment-group">
                <label>Customer Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  className={errors.name ? 'input-error' : ''}
                  required
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="payment-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'input-error' : ''}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row-2">
              <div className="payment-group">
                <label>Reference (e.g. Reg No, Invoice) *</label>
                <input
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleInputChange}
                  placeholder="e.g. AB12 CDE / Inv 102"
                  required
                />
              </div>
              <div className="payment-group">
                <label>Amount to Pay (£ GBP) *</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="150"
                  min="1"
                  className={errors.amount ? 'input-error' : ''}
                  required
                />
                {errors.amount && <span className="error-text">{errors.amount}</span>}
              </div>
            </div>

            <div className="payment-divider" />

            <h4 className="payment-section-title">Card Details</h4>
            <div className="payment-group">
              <label>Cardholder Name *</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Smith"
                className={errors.cardName ? 'input-error' : ''}
                required
              />
              {errors.cardName && <span className="error-text">{errors.cardName}</span>}
            </div>

            <div className="payment-group relative">
              <label>Card Number *</label>
              <div className="card-input-wrapper">
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="0000 0000 0000 0000"
                  className={errors.cardNumber ? 'input-error card-number-input' : 'card-number-input'}
                  required
                />
                <div className="card-type-icon">
                  {cardType === 'visa' && <span className="c-brand visa">VISA</span>}
                  {cardType === 'mastercard' && <span className="c-brand mastercard">MC</span>}
                  {cardType === 'amex' && <span className="c-brand amex">AMEX</span>}
                  {cardType === 'unknown' && <CreditCard size={18} />}
                </div>
              </div>
              {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
            </div>

            <div className="form-row-2">
              <div className="payment-group">
                <label>Expiry Date (MM/YY) *</label>
                <input
                  type="text"
                  value={formData.expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  className={errors.expiry ? 'input-error' : ''}
                  required
                />
                {errors.expiry && <span className="error-text">{errors.expiry}</span>}
              </div>
              <div className="payment-group">
                <label>Security Code (CVV) *</label>
                <input
                  type="password"
                  value={formData.cvv}
                  onChange={handleCvvChange}
                  placeholder="123"
                  className={errors.cvv ? 'input-error' : ''}
                  required
                />
                {errors.cvv && <span className="error-text">{errors.cvv}</span>}
              </div>
            </div>

            <button type="submit" className="payment-submit-btn">
              <ShieldCheck size={18} />
              <span>Confirm Secure Payment of £{formData.amount}</span>
            </button>

            <div className="payment-footer-badges">
              <span className="p-badge">PCI-DSS</span>
              <span className="p-badge">3D Secure</span>
              <span className="p-badge">Encrypted</span>
            </div>
          </form>
        )}

        {step === 'processing' && (
          <div className="payment-processing-view">
            <div className="payment-spinner" />
            <h3>Processing Payment</h3>
            <div className="processing-steps">
              <p className="step-active">Securing gateway connection...</p>
              <p>Authenticating card verification...</p>
              <p>Finalizing transaction...</p>
            </div>
            <p className="disclaimer">Please do not close this window or refresh the page.</p>
          </div>
        )}

        {step === 'success' && (
          <div className="payment-success-view">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="success-icon" />
            </div>
            <h2>Payment Successful</h2>
            <p className="success-intro">Thank you for your payment. Your booking has been confirmed.</p>

            <div className="payment-receipt-box">
              <div className="receipt-row">
                <span>Transaction Ref:</span>
                <span className="receipt-val">{txRef}</span>
              </div>
              <div className="receipt-row">
                <span>Reference:</span>
                <span className="receipt-val">{formData.reference}</span>
              </div>
              <div className="receipt-row">
                <span>Paid Amount:</span>
                <span className="receipt-val highlight-val">£{formData.amount} GBP</span>
              </div>
              <div className="receipt-row">
                <span>Cardholder Name:</span>
                <span className="receipt-val">{formData.cardName}</span>
              </div>
              <div className="receipt-row">
                <span>Payment Method:</span>
                <span className="receipt-val capitalize">{cardType !== 'unknown' ? cardType : 'Credit Card'}</span>
              </div>
              <div className="receipt-row">
                <span>Status:</span>
                <span className="receipt-val status-success">COMPLETED</span>
              </div>
            </div>

            <p className="email-conf">A confirmation receipt has been sent to <strong>{formData.email}</strong>.</p>

            <button className="receipt-done-btn" onClick={onClose}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
