
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Brain, Zap, Clock, Scale, Globe } from 'lucide-react';

const CarouselSection = () => {
  const slides = [
    {
      icon: Brain,
      heading: "Clean Data, Confident Decisions",
      subheading: "AI algorithms filter noise in real time for high-stakes monitoring."
    },
    {
      icon: Zap,
      heading: "Raw Signals to Smart Insights",
      subheading: "We transform sensor data into actionable intelligence."
    },
    {
      icon: Clock,
      heading: "Decisions in Milliseconds",
      subheading: "Real-time sensing of vibration, temperature, and air quality."
    },
    {
      icon: Scale,
      heading: "Scales With Your Sensors",
      subheading: "Thousands of data points processed per second across environments."
    },
    {
      icon: Globe,
      heading: "Built for the Real World",
      subheading: "Flexible for defense, healthcare, and environmental use-cases."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          CATSMART 5Vs Capabilities
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-catsmart-gray p-8 rounded-xl h-full flex flex-col items-center text-center hover:bg-slate-800 transition-all duration-300 border border-slate-700 min-h-[240px] justify-center">
                    <slide.icon className="w-14 h-14 text-catsmart-primary mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {slide.heading}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {slide.subheading}
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

export default CarouselSection;
