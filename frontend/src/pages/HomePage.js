import React from 'react';
import { useEffect, useState } from 'react';
import HeroSection from '../components/landing-page/HeroSection';
import AboutSection from '../components/landing-page/AboutSection';
import AppointmentSection from '../components/landing-page/AppointmentSection';

function HomePage() {
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSection1(true), 100);
    setTimeout(() => setShowSection2(true), 400);
    setTimeout(() => setShowSection3(true), 700);
  }, []);

  // Smooth scroll with delay
  const handleScheduleClick = () => {
    const el = document.getElementById('appointment-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full font-sans">
      <HeroSection 
        handleScheduleClick={handleScheduleClick} 
        handleAboutClick={handleAboutClick} 
        showSection1={showSection1} 
      />
      <AboutSection 
        handleScheduleClick={handleScheduleClick} 
        showSection2={showSection2} 
      />
      <AppointmentSection 
        showSection3={showSection3} 
        handleScrollToTop={handleScrollToTop}
      />
    </div>
  );
}

export default HomePage;
