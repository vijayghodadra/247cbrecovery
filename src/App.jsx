import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesPanel from './components/ServicesPanel';
import ServicesGrid from './components/ServicesGrid';
import InfoStrip from './components/InfoStrip';
import HowItWorks from './components/HowItWorks';
import EmergencyBooking from './components/EmergencyBooking';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import AreasCover from './components/AreasCover';
import OurLocation from './components/OurLocation';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import TrustSecurity from './components/TrustSecurity';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Header />

      {/* Section 1: Hero */}
      <main className="container main-grid">
        <div className="left-column">
          <Hero />
        </div>
        <div className="right-column">
          <ServicesPanel />
        </div>
      </main>

      {/* Info Ticker Strip */}
      <InfoStrip />

      {/* Section 2: Services Grid */}
      <ServicesGrid />

      {/* Section 3: Emergency Booking */}
      <EmergencyBooking />

      {/* Section 4: How It Works */}
      <HowItWorks />

      {/* Section 4: Why Choose Us + Stats Bar */}
      <WhyChooseUs />

      {/* Section 5: What Our Customers Say */}
      <Reviews />

      {/* Section 6: Areas We Cover */}
      <AreasCover />

      {/* Section 7: Our Location */}
      <OurLocation />

      {/* Section 8: FAQ */}
      <FAQ />

      {/* Section 9: Contact */}
      <Contact />

      {/* Trust & Security */}
      <TrustSecurity />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/447438189791"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
