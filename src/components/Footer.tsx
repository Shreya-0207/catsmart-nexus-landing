
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-catsmart-dark py-16 px-4 overflow-hidden">
      {/* Cityscape background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-catsmart-primary/20 to-transparent"></div>
        <svg
          className="absolute bottom-0 w-full h-40"
          viewBox="0 0 1200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified cityscape silhouette */}
          <rect x="0" y="100" width="80" height="100" fill="currentColor" className="text-slate-600" />
          <rect x="80" y="80" width="60" height="120" fill="currentColor" className="text-slate-700" />
          <rect x="140" y="120" width="40" height="80" fill="currentColor" className="text-slate-600" />
          <rect x="180" y="60" width="90" height="140" fill="currentColor" className="text-slate-700" />
          <rect x="270" y="90" width="50" height="110" fill="currentColor" className="text-slate-600" />
          <rect x="320" y="70" width="70" height="130" fill="currentColor" className="text-slate-700" />
          <rect x="390" y="110" width="45" height="90" fill="currentColor" className="text-slate-600" />
          <rect x="435" y="50" width="85" height="150" fill="currentColor" className="text-slate-700" />
          <rect x="520" y="85" width="55" height="115" fill="currentColor" className="text-slate-600" />
          <rect x="575" y="95" width="65" height="105" fill="currentColor" className="text-slate-700" />
          <rect x="640" y="75" width="75" height="125" fill="currentColor" className="text-slate-600" />
          <rect x="715" y="105" width="40" height="95" fill="currentColor" className="text-slate-700" />
          <rect x="755" y="65" width="80" height="135" fill="currentColor" className="text-slate-600" />
          <rect x="835" y="90" width="60" height="110" fill="currentColor" className="text-slate-700" />
          <rect x="895" y="55" width="70" height="145" fill="currentColor" className="text-slate-600" />
          <rect x="965" y="100" width="50" height="100" fill="currentColor" className="text-slate-700" />
          <rect x="1015" y="80" width="85" height="120" fill="currentColor" className="text-slate-600" />
          <rect x="1100" y="120" width="100" height="80" fill="currentColor" className="text-slate-700" />
        </svg>
        
        {/* Network overlay effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-catsmart-primary rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-2 h-2 bg-catsmart-primary rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-40 left-1/3 w-2 h-2 bg-catsmart-primary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-24 right-1/3 w-2 h-2 bg-catsmart-primary rounded-full animate-pulse delay-300"></div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="20%" x2="33%" y2="40%" stroke="#1890FF" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
            <line x1="33%" y1="40%" x2="80%" y2="32%" stroke="#1890FF" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
            <line x1="80%" y1="32%" x2="67%" y2="24%" stroke="#1890FF" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">CATSMART</h3>
          <p className="text-gray-400">Powering the future of sensor-driven intelligence</p>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <p className="text-gray-400 mb-4">
            © 2025 Castle Smart Advanced Technologies and Systems Pvt Ltd
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-catsmart-primary transition-colors">
              Terms of Use
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-catsmart-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
