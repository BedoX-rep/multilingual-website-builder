
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const BrandPartnersSection: React.FC = () => {
  const brands = [
    { name: 'Essilor', logo: '/lovable-uploads/glassbrands/essilor.png' },
    { name: 'Indo', logo: '/lovable-uploads/glassbrands/indo.png' },
    { name: 'Zeiss', logo: '/lovable-uploads/glassbrands/zeiss.png' },
    { name: 'Hoya', logo: '/lovable-uploads/glassbrands/hoya.png' },
    { name: 'Ray-Ban', logo: '/lovable-uploads/glassbrands/ray-ban.png' }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <p className="section-subtitle">
            OUR TRUSTED PARTNERS
          </p>
          <h2 className="section-title">
            Premium Lens Brands
          </h2>
        </div>

        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
