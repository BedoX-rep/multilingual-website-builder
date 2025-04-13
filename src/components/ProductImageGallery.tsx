
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Try On Button */}
      <div className="absolute top-4 left-4 z-10">
        <button className="bg-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
          <img src="/lovable-uploads/try-on-icon.png" alt="Try On" className="w-4 h-4" />
          Try On
        </button>
      </div>

      {/* Main image */}
      <div className="relative aspect-[4/3] bg-gray-50">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full h-full object-contain"
        />
        
        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
          onClick={handleNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square border ${
              currentIndex === index 
                ? 'border-black' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
