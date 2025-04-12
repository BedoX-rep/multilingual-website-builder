
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
  mobileHeroImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroImage, mobileHeroImage }) => {
  return (
    <section className="relative h-[80vh]">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileHeroImage} />
          <source media="(min-width: 769px)" srcSet={heroImage} />
          <img 
            src={heroImage}
            alt="Person wearing glasses" 
            className="w-full h-full object-cover object-top"
          />
        </picture>
      </div>

      <div className="relative h-[80vh] flex items-end md:items-center pb-10 md:pb-0">
        <div className="grid md:grid-cols-2 items-end md:items-center w-full">
          <div className="text-white md:text-gray-800 z-10 pl-[5%]">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white md:text-gray-800">
              Votre Opticien<br />
              <span className="animate-shimmer">
                Marocain
              </span><br />
              en Ligne
            </h1>
            <div className="flex flex-wrap gap-6 mb-8">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all">
                Shop Men
              </button>
              <button className="px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all">
                Shop Women
              </button>
            </div>
            <a 
              href="#how-to-pick" 
              className="inline-flex items-center text-white md:text-blue-600 hover:text-blue-700 font-medium transition-all group"
            >
              Learn more about the process 
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="hidden md:block"> </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
