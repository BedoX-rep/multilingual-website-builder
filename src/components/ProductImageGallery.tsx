
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Side thumbnails */}
      <div className="flex">
        <div className="w-16 space-y-2 mr-4">
          {images.map((image, index) => (
            <button
              key={index}
              className={`w-16 h-16 border rounded overflow-hidden ${
                currentIndex === index ? 'border-black' : 'border-gray-200'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
          <button className="w-16 h-16 border rounded-full border-gray-200 flex items-center justify-center">
            <RotateCw className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Main image */}
        <div className="flex-1 relative">
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <img
              src={images[currentIndex]}
              alt="Product view"
              className="w-full h-full object-contain"
            />
          </div>
          
          <button className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-sm">
            <RotateCw className="w-4 h-4" />
            Try On
          </button>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Color variants */}
      <div className="flex justify-center space-x-4 mt-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <button
            key={index}
            className={`w-16 h-16 border rounded-md overflow-hidden ${
              index === 0 ? 'border-black' : 'border-gray-200'
            }`}
          >
            <img
              src={images[0]}
              alt={`Color variant ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
      <div className="text-center text-sm text-gray-600">Black</div>
    </div>
  );
};

export default ProductImageGallery;
