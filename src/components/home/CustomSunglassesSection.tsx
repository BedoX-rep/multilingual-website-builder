
import React from 'react';

interface CustomSunglassesSectionProps {
  customSunglassesImage: string;
}

const CustomSunglassesSection: React.FC<CustomSunglassesSectionProps> = ({ customSunglassesImage }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl ml-[5%]">
            <p className="section-subtitle">
              DESIGNED FOR YOU
            </p>
            <h2 className="section-title">
              Custom Sunglasses
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Create your own unique pair of sunglasses by choosing from a wide range of frames, lenses, and colors. Express your individuality and stand out from the crowd with custom eyewear.
            </p>

            {/* Color Options */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-6">
                <button className="w-12 h-12 rounded-full bg-rose-400 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                <button className="w-12 h-12 rounded-full bg-emerald-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                <button className="w-12 h-12 rounded-full bg-amber-400 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                <button className="w-12 h-12 rounded-full bg-indigo-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                <button className="w-12 h-12 rounded-full bg-purple-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                <button className="w-12 h-12 rounded-full bg-teal-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
              </div>
            </div>

            <button className="btn-primary">
              Design Your Own
            </button>
          </div>
          <div className="relative">
            <div className="relative w-[140%]">
              <img 
                src={customSunglassesImage} 
                alt="Custom designed sunglasses" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSunglassesSection;
