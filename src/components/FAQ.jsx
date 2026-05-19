import React, { useState, useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    q: 'How quickly can you reach me?',
    a: 'Our average response time is 15-30 minutes within Cambridge and surrounding areas. For nationwide recovery, we aim to reach you within 45-60 minutes depending on your exact location.',
  },
  {
    id: 2,
    q: 'Do you operate 24 hours a day, 7 days a week?',
    a: 'Yes, absolutely. We provide full 24/7 emergency recovery services including bank holidays and weekends. Breakdowns don\'t keep office hours and neither do we.',
  },
  {
    id: 3,
    q: 'Are you fully insured?',
    a: 'Yes, Cambridge Vehicle Recovery is fully insured with comprehensive public liability and motor trade insurance, giving you complete peace of mind.',
  },
  {
    id: 4,
    q: 'Can you help if I\'ve had an accident?',
    a: 'Yes. We specialise in post-accident recovery. Our team will safely clear the scene, handle your vehicle with care, and can liaise directly with your insurance company on your behalf.',
  },
  {
    id: 5,
    q: 'What types of vehicles do you recover?',
    a: 'We recover cars, vans, motorcycles, and light commercial vehicles. For heavy goods vehicles or specialist transport, please call us directly so we can arrange appropriate equipment.',
  },
  {
    id: 6,
    q: 'Do you carry spare tyres or fuel?',
    a: 'Yes. Our vans carry a range of common tyres and a supply of emergency fuel so we can often fix the problem on the spot, avoiding the need to tow your vehicle entirely.',
  },
];

const FAQ = () => {
  const { settings } = useContext(SettingsContext);
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left">
            <p className="section-label">COMMON QUESTIONS</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about our recovery services. Can't find your answer?
              Call us directly — we're always here to help.
            </p>
            <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary faq-cta-btn">
              📞 Call Us Now
            </a>
          </div>

          <div className="faq-right">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${openId === faq.id ? 'open' : ''}`}
              >
                <button className="faq-trigger" onClick={() => toggle(faq.id)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`faq-chevron ${openId === faq.id ? 'rotated' : ''}`} />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

