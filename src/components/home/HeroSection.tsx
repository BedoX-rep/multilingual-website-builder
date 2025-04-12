
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

      <div className="relative h-[80vh] flex items-end md:items-center pb-20 md:pb-0">
        <div className="grid md:grid-cols-2 items-center w-full">
          <div className="text-white md:text-gray-800 z-10 pl-[5%]">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white md:text-gray-800">
              Votre Opticien<br />
              <span className="animate-shimmer">
                Marocain
              </span><br />
              en Ligne
            </h1>
            <div className="flex flex-wrap gap-6 mb-8">
              <button className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                Shop Men
              </button>
              <button className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                Shop Women
              </button>
            </div>
            <a 
              href="#how-to-pick" 
              className="inline-block text-white md:text-blue-600 hover:text-blue-700 font-medium transition-all px-4 py-2 border-2 border-white md:border-blue-600 hover:border-blue-700 rounded-lg hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
          <div className="hidden md:block"> </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
