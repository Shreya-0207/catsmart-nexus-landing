
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import SolutionsSection from '../components/SolutionsSection';
import ResearchSection from '../components/ResearchSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ApplicationsSection from '../components/ApplicationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-inter bg-catsmart-dark">
      <Navigation />
      <HeroSection />
      <CarouselSection />
      <SolutionsSection />
      <ResearchSection />
      <AboutSection />
      <FeaturesSection />
      <ApplicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
