import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { CheckCircle, ChevronRight } from 'lucide-react';
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
    <div className="font-sans">
      <Header />

      {/* Hero Section */}
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
                en Ligne
              </h1>
              <div className="flex flex-wrap gap-6 mb-8">
                <button className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                  Shop Men
                </button>
                <button className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                  Shop Women
                </button>
              </div>
              <a 
                href="#how-to-pick" 
                className="inline-block text-white md:text-blue-600 hover:text-blue-700 font-medium transition-all px-4 py-2 border-2 border-white md:border-blue-600 hover:border-blue-700 rounded-lg hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
            <div className="hidden md:block"> </div>
          </div>
        </div>
      </section>

      {/* Shipping Info Banner - Updated for mobile responsiveness */}
      <section className="bg-blue-50">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6">
          <div className="text-center md:hidden w-full">
            <p className="text-base font-medium text-blue-800">Free shipping within all of Morocco 🇲🇦</p>
          </div>
          <div className="hidden md:block text-center flex-1">
            <p className="text-base font-medium text-blue-800">Delivery within all of Morocco 🇲🇦</p>
          </div>
          <div className="hidden md:block text-center flex-1">
            <p className="text-base font-medium text-blue-800">Free Shipping</p>
          </div>
          <div className="hidden md:block text-center flex-1">
            <p className="text-base font-medium text-blue-800">30-Day Returns</p>
          </div>
          <div className="hidden md:block text-center flex-1">
            <p className="text-base font-medium text-blue-800">Contacts & Support</p>
          </div>
        </div>
      </section>

      {/* Best Sellers Section - Moved up below shipping banner */}
      <section className="py-16 bg-white">
        <div className="luxury-container">
          <div className="flex items-center gap-8 mb-8 border-b">
            <button className="text-lg font-medium pb-4 border-b-2 border-black">Bestsellers</button>
            <button className="text-lg text-gray-500 pb-4">Trending</button>
            <button className="text-lg text-gray-500 pb-4">New</button>
          </div>

          <Carousel className="w-full relative mb-8">
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

          {/* Shop All Button - Desktop & Mobile */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Shop all bestsellers
            </button>
          </div>
        </div>
      </section>

      {/* Frame Shape Section */}
      <section className="py-12 md:py-24 bg-white px-4">
        <div className="container mx-auto max-w-md md:max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">SHOP BY FRAME SHAPE</h2>
          <p className="text-center text-gray-600 mb-12">
            Bloom into new frames with fresh shapes, colors, and patterns.
          </p>

          {/* Mobile Layout */}
          <div className="grid grid-cols-2 gap-4 mb-8 md:hidden px-4">
            {[
              { name: 'Rectangle' },
              { name: 'Square' },
              { name: 'Round' },
              { name: 'Cat-eye' },
              { name: 'Aviator' },
              { name: 'Browline' }
            ].map((shape) => (
              <a href="#" key={shape.name} className="flex flex-col items-center">
                <div className="w-24 h-24 mb-1">
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
          <div className="md:hidden flex justify-center">
            <button className="w-full mx-4 bg-black text-white py-3 rounded-full text-sm">
              Shop all
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-4">
            {[
              { name: 'Rectangle' },
              { name: 'Square' },
              { name: 'Round' },
              { name: 'Cat-eye' },
              { name: 'Aviator' },
              { name: 'Browline' }
            ].map((shape) => (
              <a href="#" key={shape.name} className="flex flex-col items-center group">
                <div className="w-28 h-28 mb-2">
                  <img
                    src={`/lovable-uploads/frameshapes/frame_shape-${shape.name}.svg`}
                    alt={shape.name}
                    className="w-full h-full transition-transform group-hover:scale-110"
                  />
                </div>
                <span className="text-sm font-medium text-center">{shape.name}</span>
              </a>
            ))}
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
              Shop all →
            </button>
          </div>

          {/* Mobile Shop All Button */}
          <div className="flex justify-center md:hidden">
            <button className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
              Shop all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How to Pick Section */}
      <section id="how-to-pick" className="py-8 md:py-24 bg-[#F5F7F9]">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-8 md:mb-16">
            CUSTOMIZING YOUR GLASSES HAS NEVER BEEN SO EASY
          </h2>

          {/* Mobile Design */}
          <div className="md:hidden space-y-4">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gray-300"></div>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Frame_icon.png" alt="Find your pair" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-12">
                    <h3 className="text-base font-medium mb-1">1 | Find your pair</h3>
                    <p className="text-sm text-gray-600">Discover our designer eyewear and select your favorite frame.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Lenses_icon.png" alt="Select your lenses" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-12">
                    <h3 className="text-base font-medium mb-1">2 | Select your lenses</h3>
                    <p className="text-sm text-gray-600">Choose your vision need and add your prescription.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Personalize_icon.png" alt="Personalize your lenses" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-12">
                    <h3 className="text-base font-medium mb-1">3 | Personalize your lenses</h3>
                    <p className="text-sm text-gray-600">Select lens type and thickness, then add specialized treatments.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Shipping_icon.png" alt="Complete your purchase" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-12">
                    <h3 className="text-base font-medium mb-1">4 | Complete your purchase</h3>
                    <p className="text-sm text-gray-600">We ensure 100% satisfaction with our 30 day happiness guarantee.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 text-sm mt-12">
              Prepare your prescription, and sync your insurance at any point during selection to apply your vision benefits.
            </p>

            <div className="space-y-3">
              <button className="w-full py-4 bg-black text-white rounded-md font-medium">
                SHOP EYEWEAR
              </button>
              <button className="w-full py-4 bg-black text-white rounded-md font-medium">
                DISCOVER LENSES
              </button>
            </div>
          </div>

          {/* Desktop Design */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gray-300"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="text-center relative">
                  <div className="mb-16">
                    <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Frame_icon.png" alt="Find your pair" className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">1 | Find your pair</h3>
                  <p className="text-gray-600 text-sm">Discover our designer eyewear and select your favorite frame.</p>
                </div>

                {/* Step 2 */}
                <div className="text-center relative">
                  <div className="mb-16">
                    <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Lenses_icon.png" alt="Select your lenses" className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">2 | Select your lenses</h3>
                  <p className="text-gray-600 text-sm">Choose your vision need and add your prescription.</p>
                </div>

                {/* Step 3 */}
                <div className="text-center relative">
                  <div className="mb-16">
                    <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Personalize_icon.png" alt="Personalize your lenses" className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">3 | Personalize your lenses</h3>
                  <p className="text-gray-600 text-sm">Select lens type and thickness, then add specialized treatments.</p>
                </div>

                {/* Step 4 */}
                <div className="text-center relative">
                  <div className="mb-16">
                    <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                      <img src="/lovable-uploads/iconspair/X_Shipping_icon.png" alt="Complete your purchase" className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">4 | Complete your purchase</h3>
                  <p className="text-gray-600 text-sm">We ensure 100% satisfaction with our 30 day happiness guarantee.</p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 text-sm mt-12">
              Prepare your prescription, and sync your insurance at any point during selection to apply your vision benefits.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button className="px-12 py-3 bg-black text-white rounded-md font-medium">
                SHOP EYEWEAR
              </button>
              <button className="px-12 py-3 bg-black text-white rounded-md font-medium">
                DISCOVER LENSES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sunglasses Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl ml-[5%]">
              <p className="section-subtitle">
                DESIGNED FOR YOU
              </p>
              <h2 className="section-title">
                Custom Sunglasses
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Create your own unique pair of sunglasses by choosing from a wide range of frames, lenses, and colors. Express your individuality and stand out from the crowd with custom eyewear.
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
                Design Your Own
              </button>
            </div>
            <div className="relative">
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
          <div className="max-w-2xl text-black ml-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              Unlock Exclusive Benefits with Our Insurance Partners
            </h2>
            <p className="text-lg text-gray-800 mb-12 leading-relaxed">
              We've partnered with leading insurance providers to make quality eyewear more accessible and affordable. Discover how your insurance plan can help cover the cost of your next pair of glasses or contacts.
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

            <div className="flex flex-wrap gap-6 justify-start">
              <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
                Browse Insurance Options
              </button>
              <button className="px-8 py-3 border-2 border-black bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
                Learn More About Coverage
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
            What Our Clients Say
          </h2>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-12 mt-16">
            <div className="text-center">
              <p className="text-xl text-gray-600 italic mb-8 font-serif">
                "I'm so happy with my new glasses! The quality is excellent, and the customer service was outstanding. I highly recommend this store to anyone looking for stylish and affordable eyewear."
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
                  <p className="font-serif text-lg">Sarah Kaufman</p>
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
