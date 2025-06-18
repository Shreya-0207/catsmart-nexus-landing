
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Wrench, AlertTriangle, Smartphone, Building, BarChart3 } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Wrench,
      title: "PIMS",
      description: "Gas pipeline integrity monitoring system using photonic sensors."
    },
    {
      icon: AlertTriangle,
      title: "SARATHI",
      description: "Asset management platform with alerting and digital traceability."
    },
    {
      icon: Smartphone,
      title: "Dr. T App",
      description: "Mobile app that connects to breath analysis devices in real time."
    },
    {
      icon: Building,
      title: "Saamveda",
      description: "Real-time hospital data aggregation across multiple medical devices."
    },
    {
      icon: BarChart3,
      title: "CATSMART Dashboard",
      description: "Live interface to visualize, analyze, and manage sensor data."
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Solutions
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {solutions.map((solution, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-catsmart-dark p-6 rounded-xl h-full hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 border border-slate-600 min-h-[200px] flex flex-col">
                    <solution.icon className="w-10 h-10 text-catsmart-primary mb-4" />
                    <h3 className="text-lg font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-slate-600 hover:bg-catsmart-primary hover:border-catsmart-primary hover:shadow-lg hover:shadow-catsmart-primary/25 transition-all duration-300" />
          <CarouselNext className="text-white border-slate-600 hover:bg-catsmart-primary hover:border-catsmart-primary hover:shadow-lg hover:shadow-catsmart-primary/25 transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default SolutionsSection;
