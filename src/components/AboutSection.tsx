
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-catsmart-gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About CATSMART
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          CATSMART enables seamless integration between photonic sensors and actionable insights. 
          From ingesting raw data to powering control systems, it offers robust infrastructure 
          for monitoring, analysis, and decision automation.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
