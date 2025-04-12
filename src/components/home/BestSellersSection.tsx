
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface BestSellerProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  colors: string[];
}

interface BestSellersSectionProps {
  bestSellers: BestSellerProduct[];
}

const BestSellersSection: React.FC<BestSellersSectionProps> = ({ bestSellers }) => {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto max-w-[100%] w-full">
        <div className="flex items-center gap-8 mb-8 border-b">
          <button className="text-lg font-medium pb-4 border-b-2 border-black">Bestsellers</button>
          <button className="text-lg text-gray-500 pb-4">Trending</button>
          <button className="text-lg text-gray-500 pb-4">New</button>
        </div>

        <Carousel className="w-full relative mb-8">
          <CarouselContent>
            {bestSellers.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="bg-white rounded-xl p-2 relative group">
                  <div className="absolute top-3 right-3 z-10">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" fill="none"/>
                      </svg>
                    </button>
                  </div>
                  <div className="bg-[#E8F7F9] px-2 py-1 rounded-full text-xs inline-block mb-4">Try on virtually</div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain mb-4 bg-white"
                  />
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">${item.price}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm">{item.rating} ({item.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-green-600">Get it as early as Wed, Apr 16</p>
                    <div className="flex gap-2 pt-2">
                      {item.colors.map((color, index) => (
                        <button
                          key={index}
                          className="w-6 h-6 rounded-full hover:scale-110 transition-transform border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white text-blue-600 hover:bg-gray-50 h-12 w-12" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white text-blue-600 hover:bg-gray-50 h-12 w-12" />
        </Carousel>

        {/* Shop All Button - Desktop & Mobile */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all rounded-full">
            Shop all bestsellers
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
