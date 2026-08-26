import './index.css';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { App } from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Services from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Footer from './components/Footer';

// React Router doesn't reset scroll position on navigation by default, so
// clicking a link from partway down one page previously landed you at the
// same scroll height on the next page instead of the top. Keyed on
// location.key (unique per navigation) rather than pathname, since several
// footer links point at the same URL (e.g. all four Services links go to
// /services) - pathname alone wouldn't change for those, so the effect
// would never re-fire.
function ScrollToTop() {
  const { key } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);
  return null;
}

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      {/* Render footer once here so it appears on all pages */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
