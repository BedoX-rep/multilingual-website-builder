
import React from 'react';
import { ChevronRight } from 'lucide-react';

const FrameShapeSection: React.FC = () => {
  const shapes = [
    { name: 'Rectangle' },
    { name: 'Square' },
    { name: 'Round' },
    { name: 'Cat-eye' },
    { name: 'Aviator' },
    { name: 'Browline' }
  ];

  return (
    <section className="py-12 md:py-24 bg-white px-4">
      <div className="container mx-auto max-w-md md:max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">SHOP BY FRAME SHAPE</h2>
        <p className="text-center text-gray-600 mb-12">
          Bloom into new frames with fresh shapes, colors, and patterns.
        </p>

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-8 mb-8 md:hidden">
          {shapes.map((shape) => (
            <a href="#" key={shape.name} className="flex flex-col items-center">
              <div className="w-32 h-32 mb-2">
                <img
                  src={`/lovable-uploads/frameshapes/frame_shape-${shape.name}.svg`}
                  alt={shape.name}
                  className="w-full h-full"
                />
              </div>
              <span className="text-sm font-medium text-center">{shape.name}</span>
            </a>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-8">
          {shapes.map((shape) => (
            <a href="#" key={shape.name} className="flex flex-col items-center group">
              <div className="w-56 h-56 bg-white rounded-lg p-4 flex flex-col items-center">
                <img
                  src={`/lovable-uploads/frameshapes/frame_shape-${shape.name}.svg`}
                  alt={shape.name}
                  className="w-full h-full transition-transform group-hover:scale-110 mb-4"
                />
                <span className="text-sm font-medium text-center group-hover:underline">{shape.name}</span>
              </div>
            </a>
          ))}
          <a href="#" className="flex items-center justify-center ml-2">
            <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
              Shop all →
            </span>
          </a>
        </div>

        {/* Mobile Shop All Button */}
        <div className="flex justify-center md:hidden">
          <button className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
            Shop all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameShapeSection;
