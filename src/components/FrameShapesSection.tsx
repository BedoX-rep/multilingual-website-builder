
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const frameShapes = [
  {
    name: 'Aviator',
    icon: '/lovable-uploads/frameshapes/frame_shape-Aviator.svg',
    link: '/products?shape=aviator',
  },
  {
    name: 'Browline',
    icon: '/lovable-uploads/frameshapes/frame_shape-Browline.svg',
    link: '/products?shape=browline',
  },
  {
    name: 'Cat-eye',
    icon: '/lovable-uploads/frameshapes/frame_shape-Cat-eye.svg',
    link: '/products?shape=cat-eye',
  },
  {
    name: 'Rectangle',
    icon: '/lovable-uploads/frameshapes/frame_shape-Rectangle.svg',
    link: '/products?shape=rectangle',
  },
  {
    name: 'Round',
    icon: '/lovable-uploads/frameshapes/frame_shape-Round.svg',
    link: '/products?shape=round',
  },
  {
    name: 'Square',
    icon: '/lovable-uploads/frameshapes/frame_shape-Square.svg',
    link: '/products?shape=square',
  },
];

const FrameShapesSection = () => {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center">SHOP BY FRAME SHAPE</h2>
          <p className="text-gray-500 text-center mt-2">Find your perfect fit</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
            {frameShapes.map((shape) => (
              <Link
                to={shape.link}
                key={shape.name}
                className="flex flex-col items-center justify-center group transition-all"
              >
                <div className="bg-gray-100 rounded-full p-4 h-20 w-20 md:h-24 md:w-24 flex items-center justify-center mb-2 group-hover:bg-gray-200 transition-all">
                  <img src={shape.icon} alt={shape.name} className="w-full h-full" />
                </div>
                <span className="text-sm text-gray-700">{shape.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="w-full flex md:justify-end">
            <Button
              variant="outline"
              asChild
              className="group border-gray-300"
            >
              <Link to="/products">
                Shop all
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameShapesSection;
