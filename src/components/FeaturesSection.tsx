
import React from 'react';
import { BarChart3, Zap, Monitor, Network } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Process and analyze sensor data instantly for immediate insights and decision-making capabilities across all connected systems."
    },
    {
      icon: Zap,
      title: "Sensor Integration",
      description: "Seamlessly connect with various photonic sensor systems and hardware configurations for comprehensive data collection."
    },
    {
      icon: Monitor,
      title: "Remote Control Interfaces",
      description: "Monitor and control systems from anywhere with intuitive dashboards and real-time status monitoring capabilities."
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Built to grow with your needs, from single sensors to enterprise networks with thousands of connected devices."
    }
  ];

  return (
    <section className="py-20 px-4 bg-catsmart-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Core Features
        </h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-catsmart-gray p-8 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <feature.icon className="w-16 h-16 text-catsmart-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
