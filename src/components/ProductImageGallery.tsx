
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
    <div className="flex flex-row gap-4">
      {/* Main image */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex flex-col space-y-2 justify-start">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative border-2 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md overflow-hidden transition-all ${
              currentIndex === index 
                ? 'border-black' 
                : 'border-transparent hover:border-gray-300'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
      
      
    </div>
  );
};

export default ProductImageGallery;
