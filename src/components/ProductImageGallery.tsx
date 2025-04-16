
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
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative border-2 flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all ${
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
      
      {/* Main image */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
