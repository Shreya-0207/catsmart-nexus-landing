
import React from 'react';
import { Activity, Wind, Heart, Shield } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: Activity,
      title: "Condition & Vibration Monitoring",
      description: "Industrial equipment health monitoring"
    },
    {
      icon: Wind,
      title: "Air Quality & Gas Detection",
      description: "Environmental monitoring solutions"
    },
    {
      icon: Heart,
      title: "Real-Time Breath Analysis",
      description: "Healthcare diagnostic applications"
    },
    {
      icon: Shield,
      title: "Eavesdropping Detection & Virtual Wall Systems",
      description: "Defense and security applications"
    }
  ];

  return (
    <section className="py-20 px-4 bg-catsmart-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Application Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-catsmart-dark p-8 rounded-xl hover:bg-slate-900 transition-all duration-300 border border-slate-600 flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <app.icon className="w-10 h-10 text-catsmart-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
