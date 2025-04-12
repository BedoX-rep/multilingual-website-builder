
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
          <source media="(min-width: 769px)" srcSet="/lovable-uploads/67351f84-685a-4706-b6f9-a96b74cb0ef9.png" />
          <img 
            src="/lovable-uploads/67351f84-685a-4706-b6f9-a96b74cb0ef9.png"
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
              <span className="relative inline-block">
                Marocain
                <span className="absolute bottom-1 left-0 w-full h-[0.15em] bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-full transform skew-x-12 animate-shimmer"></span>
              </span><br />
              en Ligne
            </h1>
            <div className="flex flex-wrap gap-6 mb-8">
              <button className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                Men
              </button>
              <button className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                Women
              </button>
            </div>
            <a 
              href="#how-to-pick" 
              className="inline-flex items-center text-white md:text-blue-600 hover:text-blue-700 font-medium transition-all"
            >
              Learn more about our process <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="hidden md:block"> </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
