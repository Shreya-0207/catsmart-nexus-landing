
import React from 'react';
import { Wrench, AlertTriangle, Smartphone, Building, BarChart3 } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Wrench,
      title: "PIMS",
      subtitle: "Gas Pipeline Integrity Monitoring",
      description: "Monitors gas pipelines for vibration anomalies and structural risks — ensuring safety and compliance with real-time photonic sensing."
    },
    {
      icon: AlertTriangle,
      title: "SARATHI",
      subtitle: "Asset Management & Intelligent Alerts",
      description: "Tracks industrial assets digitally, organizes them hierarchically, and triggers real-time alerts for potential failures or safety breaches."
    },
    {
      icon: Smartphone,
      title: "Dr. T App",
      subtitle: "Personal Health + Breath Diagnostics",
      description: "A mobile app that enables users to monitor vitals and connect with breath-analysis devices for deeper diagnostic insights — powered by CATSMART."
    },
    {
      icon: Building,
      title: "Saamveda",
      subtitle: "Hospital Device Data Aggregation",
      description: "Connects hospital hardware (from CATS Global) to CATSMART's big data engine — enabling real-time insights and alerts."
    },
    {
      icon: BarChart3,
      title: "CATSMART Dashboard",
      subtitle: "Central Intelligence for All Your Data",
      description: "Unified login point to access live analytics, device monitoring, alerts, and reports — across all CATSMART-powered systems."
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 bg-catsmart-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Real-Time Solutions Built for Critical Systems
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-catsmart-dark p-8 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2 border border-slate-600"
            >
              <solution.icon className="w-12 h-12 text-catsmart-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                {solution.title}
              </h3>
              <h4 className="text-lg font-semibold text-catsmart-primary mb-4">
                {solution.subtitle}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
