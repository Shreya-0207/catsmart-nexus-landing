
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-catsmart-dark via-slate-900 to-catsmart-dark flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-left">
          {/* Small intro */}
          <p className="text-gray-400 text-lg mb-4 font-light">
            We turn high-frequency photonic data into meaningful action.
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The software backbone behind{' '}
            <span className="text-catsmart-primary">real-time, sensor-driven decisions</span>.
          </h1>

          {/* CTA Button */}
          <a
            href="https://catsmart.io/#/get-domain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-catsmart-primary hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Login to Dashboard
          </a>
        </div>

        {/* Right side - Abstract graphic */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Abstract sensor network visualization */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1890FF" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              
              {/* Central node */}
              <circle cx="200" cy="200" r="20" fill="#1890FF" opacity="0.8">
                <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Sensor nodes */}
              <circle cx="100" cy="100" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="300" cy="100" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="100" cy="300" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="300" cy="300" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="50" cy="200" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="350" cy="200" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="200" cy="50" r="8" fill="#1890FF" opacity="0.6"/>
              <circle cx="200" cy="350" r="8" fill="#1890FF" opacity="0.6"/>
              
              {/* Connection lines with animation */}
              <line x1="200" y1="200" x2="100" y2="100" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="300" y2="100" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="0.5s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="100" y2="300" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="1s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="300" y2="300" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="1.5s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="50" y2="200" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="2s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="350" y2="200" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="2.5s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="200" y2="50" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="3s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="200" y2="350" stroke="#1890FF" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="3.5s" repeatCount="indefinite"/>
              </line>
              
              {/* Data flow particles */}
              <circle r="3" fill="#1890FF" opacity="0.8">
                <animateMotion dur="4s" repeatCount="indefinite" path="M100,100 L200,200 L300,300"/>
              </circle>
              <circle r="3" fill="#1890FF" opacity="0.8">
                <animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M300,100 L200,200 L100,300"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
