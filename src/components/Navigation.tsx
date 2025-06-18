
import React from 'react';

const Navigation = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Research', href: '#research' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-catsmart-dark border-b border-slate-700 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          CATSMART
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
          
          <a
            href="https://catsmart.io/#/get-domain"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-catsmart-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-catsmart-primary/25 font-semibold"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
