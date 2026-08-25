import React, { useState, useEffect, useContext } from 'react';
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
import AdminPanel from './components/AdminPanel';
import ServiceAreaPage from './components/ServiceAreaPage';
import CambridgeCoverage from './components/CambridgeCoverage';
import CambridgePage from './components/CambridgePage';
import AreasWeCoverPage from './components/AreasWeCoverPage';
import { serviceAreas } from './data/serviceAreas';
import { generateDynamicSeoPage } from './data/seoCities';
import { SettingsContext } from './context/SettingsContext';
import { MessageCircle } from 'lucide-react';
import './App.css';

function App() {
  const { settings } = useContext(SettingsContext);
  const [isAdminView, setIsAdminView] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync state with back/forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Find if current route corresponds to a service area slug (static or dynamic long-tail)
  let activeArea = serviceAreas.find((area) => `/${area.slug}` === currentPath);
  if (!activeArea) {
    const slugWithoutSlash = currentPath.substring(1);
    activeArea = generateDynamicSeoPage(slugWithoutSlash);
  }

  // Dynamically update page Title & Meta Description for SEO
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (activeArea) {
      document.title = activeArea.seoTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', activeArea.seoMetaDescription);
      }
    } else if (currentPath === '/areas-we-cover') {
      document.title = 'Areas We Cover Across Cambridge & Cambridgeshire & Huntingdon';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Fast, reliable 24/7 vehicle recovery, car recovery, van recovery, breakdown towing, and jump start services throughout Cambridgeshire and surrounding counties.');
      }
    } else if (currentPath === '/cambridge') {
      document.title = 'Cambridge Vehicle Recovery | 24/7 Breakdown Recovery & Roadside Assistance';
      if (metaDescription) {
        metaDescription.setAttribute('content', "Professional vehicle recovery anywhere across Cambridge city and county. Science Park, Addenbrooke's, all university colleges, business parks and residential areas covered 24/7. Specialist care for prestige vehicles.");
      }
    } else {
      document.title = '24/7 Vehicle Recovery & Breakdown Service | Towing UK';
      if (metaDescription) {
        metaDescription.setAttribute('content', "Fast 24/7 vehicle recovery, breakdown towing, car recovery & roadside assistance in Cambridge, Huntingdon & UK nationwide. 15-30 min response time.");
      }
    }
  }, [activeArea, currentPath]);

  if (isAdminView) {
    return <AdminPanel onClose={() => setIsAdminView(false)} />;
  }

  return (
    <div className="app-container">
      <TopBar />
      <Header
        setIsAdminView={setIsAdminView}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Conditionally Render Content: Service Area Subpage or Homepage */}
      {activeArea ? (
        <ServiceAreaPage 
          area={activeArea} 
          onNavigateHome={() => handleNavigate('/')} 
          onNavigate={handleNavigate} 
        />
      ) : currentPath === '/areas-we-cover' ? (
        <AreasWeCoverPage onNavigateHome={() => handleNavigate('/')} onNavigate={handleNavigate} />
      ) : currentPath === '/cambridge' ? (
        <CambridgePage onNavigateHome={() => handleNavigate('/')} onNavigate={handleNavigate} />
      ) : (
        <>
          {/* Section 1: Hero */}
          <main className="container main-grid">
            <div className="left-column">
              <Hero />
              <CambridgeCoverage />
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
          <AreasCover onNavigate={handleNavigate} />

          {/* Section 7: Our Location */}
          <OurLocation />

          {/* Section 8: FAQ */}
          <FAQ />

          {/* Section 9: Contact */}
          <Contact />

          {/* Trust & Security */}
          <TrustSecurity />
        </>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} setIsAdminView={setIsAdminView} />

      {/* Floating WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`}
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
