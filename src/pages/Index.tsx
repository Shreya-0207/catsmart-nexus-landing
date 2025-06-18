
import React from 'react';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ApplicationsSection from '../components/ApplicationsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-inter bg-catsmart-dark">
      <HeroSection />
      <CarouselSection />
      <AboutSection />
      <FeaturesSection />
      <ApplicationsSection />
      <Footer />
    </div>
  );
};

export default Index;
