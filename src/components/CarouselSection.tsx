
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
      subheading: "Filters out noise in real time using AI — for high-stakes monitoring in industries like manufacturing and infrastructure."
    },
    {
      icon: Zap,
      heading: "Raw Signals to Smart Insights",
      subheading: "CATSMART translates sensor data into actionable info — powering systems in energy, healthcare, and smart cities."
    },
    {
      icon: Clock,
      heading: "Decisions in Milliseconds",
      subheading: "Monitors vibration, air quality, and temperature simultaneously — critical for real-time alerts in industrial automation."
    },
    {
      icon: Scale,
      heading: "Scales With Your Sensors",
      subheading: "Handles thousands of data points per second — ideal for large sensor networks in defense, transportation, and research."
    },
    {
      icon: Globe,
      heading: "Built for the Real World",
      subheading: "From pollution tracking to exhaled breath analysis, CATSMART adapts to diverse environments and data types."
    }
  ];

  return (
    <section className="py-20 px-4 bg-catsmart-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          How CATSMART Powers Real-World Intelligence
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6">
                  <div className="bg-catsmart-gray p-8 rounded-xl h-full flex flex-col items-center text-center hover:bg-slate-800 transition-all duration-300 border border-slate-700">
                    <slide.icon className="w-12 h-12 text-catsmart-primary mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {slide.heading}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {slide.subheading}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-slate-600 hover:bg-catsmart-primary hover:border-catsmart-primary" />
          <CarouselNext className="text-white border-slate-600 hover:bg-catsmart-primary hover:border-catsmart-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
