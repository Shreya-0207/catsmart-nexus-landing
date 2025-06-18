
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-catsmart-gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About CATSMART
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          CATSMART is the software division of CATS Global, focused on real-time analytics 
          for photonic data. We power intelligent, sensor-based decision systems across industries.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
