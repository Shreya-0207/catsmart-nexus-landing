
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-catsmart-dark relative overflow-hidden">
      {/* Cityscape background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 800 120" className="w-full h-full">
          <rect x="0" y="80" width="50" height="40" fill="#1890FF"/>
          <rect x="60" y="60" width="40" height="60" fill="#1890FF"/>
          <rect x="110" y="90" width="30" height="30" fill="#1890FF"/>
          <rect x="150" y="50" width="45" height="70" fill="#1890FF"/>
          <rect x="200" y="70" width="35" height="50" fill="#1890FF"/>
          <rect x="250" y="40" width="50" height="80" fill="#1890FF"/>
          <rect x="310" y="85" width="40" height="35" fill="#1890FF"/>
          <rect x="360" y="55" width="45" height="65" fill="#1890FF"/>
          <rect x="420" y="75" width="35" height="45" fill="#1890FF"/>
          <rect x="470" y="45" width="40" height="75" fill="#1890FF"/>
          <rect x="520" y="80" width="50" height="40" fill="#1890FF"/>
          <rect x="580" y="60" width="40" height="60" fill="#1890FF"/>
          <rect x="630" y="90" width="30" height="30" fill="#1890FF"/>
          <rect x="670" y="50" width="45" height="70" fill="#1890FF"/>
          <rect x="720" y="70" width="35" height="50" fill="#1890FF"/>
          <rect x="760" y="85" width="40" height="35" fill="#1890FF"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Let's Talk
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-catsmart-gray border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-catsmart-primary focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-catsmart-gray border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-catsmart-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-catsmart-gray border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-catsmart-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-catsmart-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-6">
                Get in touch
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Email:</span><br />
                    <a href="mailto:support@catsmart.io" className="text-catsmart-primary hover:text-blue-400 transition-colors">
                      support@catsmart.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
