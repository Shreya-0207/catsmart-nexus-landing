
import React from 'react';
import { BarChart3, Zap, Monitor, Network } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Process and analyze sensor data instantly for immediate insights"
    },
    {
      icon: Zap,
      title: "Sensor Integration",
      description: "Seamlessly connect with various photonic sensor systems"
    },
    {
      icon: Monitor,
      title: "Remote Control Interfaces",
      description: "Monitor and control systems from anywhere with intuitive dashboards"
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Built to grow with your needs, from single sensors to enterprise networks"
    }
  ];

  return (
    <section className="py-20 px-4 bg-catsmart-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-catsmart-gray p-8 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700"
            >
              <feature.icon className="w-12 h-12 text-catsmart-primary mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
