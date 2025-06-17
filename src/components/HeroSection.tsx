
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-catsmart-dark via-slate-900 to-catsmart-dark flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            CATSMART
          </h1>
          <div className="w-16 h-1 bg-catsmart-primary mx-auto"></div>
        </div>

        {/* Small text above headline */}
        <p className="text-gray-400 text-lg md:text-xl mb-6 font-light">
          Built for intelligence. Backed by precision.
        </p>

        {/* Main tagline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
          We provide the software backbone that powers{' '}
          <span className="text-catsmart-primary">sensor-driven decisions</span>{' '}
          — in real time.
        </h2>

        {/* CTA Button */}
        <a
          href="https://catsmart.io/#/get-domain"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-catsmart-primary hover:bg-blue-600 text-white font-semibold text-lg px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Login to Dashboard
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
