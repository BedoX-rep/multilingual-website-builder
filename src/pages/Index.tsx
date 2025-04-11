import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Hero section images
const heroImage = "/lovable-uploads/herosectionbg5.jpg";
const mobileHeroImage = "/lovable-uploads/mobileimg.png";

// Process step icons
const frameIcon = "/lovable-uploads/5c4c396f-836b-49e7-8833-be31c7cda22e.png";
const lensIcon = "/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png";
const prescriptionIcon = "/lovable-uploads/af178ea4-8b63-422a-9dba-cd74c382cd99.png";
const deliveryIcon = "/lovable-uploads/29f9550c-ba8d-45fe-8e22-1ffb62de3f75.png";

// Custom sunglasses image
const customSunglassesImage = "/lovable-uploads/4e0855d7-4ceb-4a1d-b74a-736f6b127820.png";

// Product images
const products = [
  {
    id: '1',
    name: 'Classic Frames',
    price: 95,
    image: '/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png',
    category: 'Optical'
  },
  {
    id: '2',
    name: 'Premium Shades',
    price: 120,
    image: '/lovable-uploads/1551cd86-4f1b-4880-afa5-1ac4eaa6aeb0.png',
    category: 'Sunglasses'
  },
  {
    id: '3',
    name: 'Sport Glasses',
    price: 150,
    image: '/lovable-uploads/29f9550c-ba8d-45fe-8e22-1ffb62de3f75.png',
    category: 'Sports'
  }
];

// Brand logos
const brandLogos = [
  {
    name: 'Brand 1',
    logo: 'https://via.placeholder.com/120x60?text=Brand+1'
  },
  {
    name: 'Brand 2',
    logo: 'https://via.placeholder.com/120x60?text=Brand+2'
  },
  {
    name: 'Brand 3',
    logo: 'https://via.placeholder.com/120x60?text=Brand+3'
  },
  {
    name: 'Brand 4',
    logo: 'https://via.placeholder.com/120x60?text=Brand+4'
  }
];

const Index: React.FC = () => {
  const { t, dir } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const bestSellers = [
    {
      id: '1',
      name: 'Esme',
      price: 95,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6 (copy) 1.png',
      rating: 4.8,
      reviews: 425,
      colors: ['#8B4513', '#CCCCCC', '#2E4F4F', '#4F6F52']
    },
    {
      id: '2',
      name: 'Baird',
      price: 145,
      image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      rating: 4.7,
      reviews: 312,
      colors: ['#000000', '#FF0000', '#E6F4F1', '#435334']
    },
    {
      id: '3',
      name: 'Durand',
      price: 95,
      image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
      rating: 4.9,
      reviews: 567,
      colors: ['#8B4513', '#000000', '#2E4F4F', '#CCCCCC']
    },
    {
      id: '4',
      name: 'Brady',
      price: 95,
      image: '/lovable-uploads/productmockup/d29bdfc9-8c61-4bd0-8a10-c0ef0355df3b.png',
      rating: 4.6,
      reviews: 289,
      colors: ['#7B66FF', '#CCCCCC', '#000000']
    },
    {
      id: '5',
      name: 'Claire',
      price: 115,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6 (copy).png',
      rating: 4.8,
      reviews: 342,
      colors: ['#8B4513', '#000000', '#4F6F52']
    },
    {
      id: '6',
      name: 'Felix',
      price: 125,
      image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546 (copy).png',
      rating: 4.7,
      reviews: 278,
      colors: ['#435334', '#CCCCCC', '#2E4F4F']
    },
    {
      id: '7',
      name: 'Grace',
      price: 105,
      image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b (copy).png',
      rating: 4.9,
      reviews: 456,
      colors: ['#000000', '#8B4513', '#4F6F52']
    },
    {
      id: '8',
      name: 'Henry',
      price: 135,
      image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
      rating: 4.8,
      reviews: 312,
      colors: ['#2E4F4F', '#CCCCCC', '#435334']
    }
  ];

  return (
    <div className={dir === 'rtl' ? 'font-sans rtl' : 'font-sans'}>
      <Header />

      {/* Hero Section - Adjusted with ml-[5%] for left/right margin and proper RTL support */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 768px)" srcSet={mobileHeroImage} />
            <source media="(min-width: 769px)" srcSet={heroImage} />
            <img 
              src={heroImage}
              alt="Person wearing glasses" 
              className="w-full h-full object-cover object-top"
            />
          </picture>
        </div>

        <div className="relative h-[80vh] flex items-end md:items-center pb-20 md:pb-0">
          <div className="grid md:grid-cols-2 items-center w-full">
            <div className="text-white md:text-gray-800 z-10 pl-[5%]">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white md:text-gray-800">
                Votre Opticien<br />
                <span className="relative">
                  Marocain
                  <span className="absolute bottom-1 left-0 w-full h-[0.15em] bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-full transform skew-x-12 animate-shimmer"></span>
                </span><br />
                De Confiance<br />
                en Ligne
              </h1>
              <div className="flex flex-wrap gap-6 mb-8">
                <button className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                  {t('hero.shopmen')}
                </button>
                <button className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                  {t('hero.shopwomen')}
                </button>
              </div>
              <a 
                href="#how-to-pick" 
                className="inline-block text-white md:text-blue-600 hover:text-blue-700 font-medium transition-all px-4 py-2 border-2 border-white md:border-blue-600 hover:border-blue-700 rounded-lg hover:-translate-y-1"
              >
                {t('hero.learnmore')}
              </a>
            </div>
            <div className="hidden md:block"> </div>
          </div>
        </div>
      </section>

      {/* Shipping Info Banner */}
      <section className="bg-blue-50">
        <div className="flex justify-between items-center py-4 px-6">
          <div className="text-center flex-1">
            <p className="text-base font-medium text-blue-800">Delivery within all of Morocco 🇲🇦</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-base font-medium text-blue-800">{t('shipping.free')}</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-base font-medium text-blue-800">{t('shipping.returns')}</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-base font-medium text-blue-800">{t('shipping.contacts')}</p>
          </div>
        </div>
      </section>

      {/* Frame Shape Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="luxury-container">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">{t('frame.title')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t('frame.subtitle')}</p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              { name: 'Rectangle', color: 'bg-blue-100 text-blue-800' },
              { name: 'Square', color: 'bg-purple-100 text-purple-800' },
              { name: 'Round', color: 'bg-pink-100 text-pink-800' },
              { name: 'Cat-eye', color: 'bg-indigo-100 text-indigo-800' },
              { name: 'Aviator', color: 'bg-violet-100 text-violet-800' },
              { name: 'Browline', color: 'bg-cyan-100 text-cyan-800' }
            ].map((shape) => (
              <div key={shape.name} className="text-center group cursor-pointer">
                <div className={`${shape.color} p-6 rounded-xl shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                  <div className="mb-4">
                    <img
                      src={`/lovable-uploads/frameshapes/frame_shape-${shape.name}.svg`}
                      alt={shape.name}
                      className="w-20 h-12 mx-auto object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium">{shape.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="luxury-container">
          <div className="flex items-center gap-8 mb-8 border-b">
            <button className="text-lg font-medium pb-4 border-b-2 border-black">Bestsellers</button>
            <button className="text-lg text-gray-500 pb-4">Trending</button>
            <button className="text-lg text-gray-500 pb-4">New</button>
            <button className="text-lg text-gray-500 pb-4">Home Try-On</button>
            <div className="ml-auto">
              <button className="text-blue-600 hover:underline">Shop all bestsellers</button>
            </div>
          </div>

          <Carousel className="w-full relative">
            <CarouselContent>
              {bestSellers.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white rounded-xl p-4 relative group">
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
        </div>
      </section>

      {/* How to Pick Section */}
      <section id="how-to-pick" className="py-24 bg-gray-50">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              CUSTOMIZING YOUR GLASSES HAS NEVER BEEN SO EASY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-40 h-40 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={frameIcon} alt="Eyeglass frames" className="w-24 h-24 object-contain" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('pick.step1.title')}</h3>
              <p className="text-gray-600">{t('pick.step1.desc')}</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-40 h-40 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={lensIcon} alt="Eyeglass lenses" className="w-24 h-24 object-contain" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('pick.step2.title')}</h3>
              <p className="text-gray-600">{t('pick.step2.desc')}</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-40 h-40 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={prescriptionIcon} alt="Prescription" className="w-24 h-24 object-contain" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('pick.step3.title')}</h3>
              <p className="text-gray-600">{t('pick.step3.desc')}</p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-40 h-40 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={deliveryIcon} alt="Delivery" className="w-24 h-24 object-contain" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('pick.step4.title')}</h3>
              <p className="text-gray-600">{t('pick.step4.desc')}</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="btn-primary">
              {t('pick.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Custom Sunglasses Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`${dir === 'rtl' ? 'order-2' : 'order-1'} max-w-xl ${dir === 'rtl' ? 'mr-[5%]' : 'ml-[5%]'}`}>
              <p className="section-subtitle">
                {t('custom.subtitle')}
              </p>
              <h2 className="section-title">
                {t('custom.title')}
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                {t('custom.desc')}
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
                {t('custom.button')}
              </button>
            </div>
            <div className={`${dir === 'rtl' ? 'order-1' : 'order-2'} relative`}>
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

      {/* Insurance Benefits Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/sectionassuranceimage.png" 
            alt="Insurance Benefits" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        <div className="luxury-container relative z-10">
          <div className={`max-w-2xl text-black ${dir === 'rtl' ? 'mr-auto' : 'ml-auto'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              {t('insurance.title')}
            </h2>
            <p className="text-lg text-gray-800 mb-12 leading-relaxed">
              {t('insurance.description')}
            </p>

            {/* Insurance Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { src: '/lovable-uploads/assurancebrandsmaghreb/allianz-logo.png', name: 'Allianz' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/cnss.png', name: 'CNSS' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/rma.png', name: 'RMA' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/sanlam.png', name: 'Sanlam' },
              ].map((insurance, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={insurance.src} 
                    alt={insurance.name}
                    className="w-full h-12 object-contain"
                  />
                </div>
              ))}
            </div>

            <div className={`flex flex-wrap gap-6 ${dir === 'rtl' ? 'justify-start' : 'justify-start'}`}>
              <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
                {t('insurance.browse')}
              </button>
              <button className="px-8 py-3 border-2 border-black bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
                {t('insurance.learn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <p className="section-subtitle">
              {t('partners.subtitle')}
            </p>
            <h2 className="section-title">
              {t('partners.title')}
            </h2>
          </div>

          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                autoPlay: true,
                interval: 2000,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { name: 'Essilor', logo: '/lovable-uploads/glassbrands/essilor.png' },
                  { name: 'Indo', logo: '/lovable-uploads/glassbrands/indo.png' },
                  { name: 'Zeiss', logo: '/lovable-uploads/glassbrands/zeiss.png' },
                  { name: 'Hoya', logo: '/lovable-uploads/glassbrands/hoya.png' },
                  { name: 'Ray-Ban', logo: '/lovable-uploads/glassbrands/ray-ban.png' }
                ].map((brand, index) => (
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

      {/* Client Reviews */}
      <section className="py-24">
        <div className="luxury-container">
          <h2 className="section-title text-center">
            {t('reviews.title')}
          </h2>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-12 mt-16">
            <div className="text-center">
              <p className="text-xl text-gray-600 italic mb-8 font-serif">
                "{t('reviews.content')}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Sarah Kaufman" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-serif text-lg">{t('reviews.name')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;