
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CollectionsSection: React.FC = () => {
  return (
    <section className="pb-16 bg-white overflow-hidden w-full">
      <div className="w-full">
        {/* Desktop Version */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  title: "CHASE STOKES",
                  subtitle: "DYNAMIC VIEWS",
                  description: "Renew your style with bold looks.",
                  cta: "Shop collection",
                  image: "/lovable-uploads/collectionsectiondesktop/250318_chase_hp_small_2_card_carousel-xl.png",
                  gradient: "from-sky-100/90",
                },
                {
                  title: "BLOKZ",
                  subtitle: "BLUE LIGHT GLASSES",
                  description: "Filter blue-light, anytime, anywhere.",
                  cta: "Shop now",
                  image: "/lovable-uploads/collectionsectiondesktop/250318_blokz_hp_small_2_card_carousel-xl.png",
                  gradient: "from-orange-100/90",
                },
                {
                  title: "SAM CASSELL",
                  subtitle: "SIGNATURE SERIES",
                  description: "Classic style meets modern design.",
                  cta: "Shop collection",
                  image: "/lovable-uploads/collectionsectiondesktop/032525_Sam_Cassell_HP_small_card-xl.png",
                  gradient: "from-yellow-100/90",
                },
                {
                  title: "UNDER 30",
                  subtitle: "AFFORDABLE STYLE",
                  description: "Trendy frames at amazing prices.",
                  cta: "Shop now",
                  image: "/lovable-uploads/collectionsectiondesktop/250327_under_30_hp_small_2_card_carousel-xl.png",
                  gradient: "from-green-100/90",
                }
              ].map((collection, index) => (
                <CarouselItem key={index} className="pl-4 basis-[40%]">
                  <div className="relative h-[700px] rounded-xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0">
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${collection.gradient} to-transparent`}></div>
                    </div>
                    <div className="relative h-full p-8 flex flex-col justify-center">
                      <div className="max-w-[50%]">
                        <h3 className="text-sm font-bold text-black mb-1">{collection.title}</h3>
                        <h2 className="text-[32px] leading-tight font-bold text-black mb-4">{collection.subtitle}</h2>
                        <p className="text-base text-gray-800 mb-8">{collection.description}</p>
                        <button className="bg-black text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                          {collection.cta}
                        </button>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                      Frames
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden px-4 pt-8">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex snap-x snap-mandatory overflow-x-auto hide-scrollbar pb-6">
                {[
                  {
                    title: "CHASE STOKES",
                    subtitle: "DYNAMIC VIEWS",
                    description: "Renew your style with bold looks.",
                    cta: "Shop collection",
                    image: "/lovable-uploads/collectionsectionmobile/250318_chase_hp_small_2_card_carousel-sm.png",
                    bgColor: "bg-sky-100"
                  },
                  {
                    title: "BLOKZ",
                    subtitle: "BLUE LIGHT GLASSES",
                    description: "Filter blue-light, anytime, anywhere.",
                    cta: "Shop now",
                    image: "/lovable-uploads/collectionsectionmobile/250318_blokz_hp_small_2_card_carousel-md.png",
                    bgColor: "bg-orange-100"
                  },
                  {
                    title: "SAM CASSELL",
                    subtitle: "SIGNATURE SERIES",
                    description: "Classic style meets modern design.",
                    cta: "Shop collection",
                    image: "/lovable-uploads/collectionsectionmobile/032525_Sam_Cassell_HP_small_card-sm.png",
                    bgColor: "bg-yellow-100"
                  },
                  {
                    title: "UNDER 30",
                    subtitle: "AFFORDABLE STYLE",
                    description: "Trendy frames at amazing prices.",
                    cta: "Shop now",
                    image: "/lovable-uploads/collectionsectionmobile/250327_under_30_hp_small_2_card_carousel-md.png",
                    bgColor: "bg-green-100"
                  }
                ].map((collection, index) => (
                  <div 
                    key={index}
                    className={`${collection.bgColor} min-w-[300px] w-[85vw] mr-4 rounded-2xl overflow-hidden snap-center shadow-sm`}
                  >
                    <div className="p-6 h-[420px] flex flex-col relative">
                      <div className="mb-auto">
                        <h3 className="text-sm font-bold mb-2 text-gray-800">{collection.title}</h3>
                        <h2 className="text-2xl font-bold mb-3 leading-tight">{collection.subtitle}</h2>
                        <p className="text-sm text-gray-600">{collection.description}</p>
                      </div>
                      <button className="bg-black text-white text-sm px-6 py-3 rounded-full mt-4 inline-block w-fit hover:bg-gray-900 transition-colors z-10">
                        {collection.cta}
                      </button>
                      <div className="absolute bottom-0 right-0 w-full h-[250px]">
                        <img 
                          src={collection.image} 
                          alt={collection.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <span className="sr-only">Previous</span>
                ←
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <span className="sr-only">Next</span>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
