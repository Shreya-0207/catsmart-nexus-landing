
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ApplicationsSection from '../components/ApplicationsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-inter bg-catsmart-dark">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ApplicationsSection />
      <Footer />
    </div>
  );
};

export default Index;
