import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { CheckCircle, ChevronRight, Glasses, Shield, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
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
          <div className="grid grid-cols-2 gap-8 mb-8 md:hidden">
            {[
              { name: 'Rectangle' },
              { name: 'Square' },
              { name: 'Round' },
              { name: 'Cat-eye' },
              { name: 'Aviator' },
              { name: 'Browline' }
            ].map((shape) => (
              <a href="#" key={shape.name} className="flex flex-col items-center">
                <div className="w-32 h-32 mb-2">
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

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-6 md:gap-4 mb-8 relative">
            {[
              { name: 'Rectangle' },
              { name: 'Square' },
              { name: 'Round' },
              { name: 'Cat-eye' },
              { name: 'Aviator' },
              { name: 'Browline' }
            ].map((shape) => (
              <a href="#" key={shape.name} className="flex flex-col items-center group">
                <div className="w-full aspect-square bg-white rounded-lg p-4 flex flex-col items-center">
                  <img
                    src={`/lovable-uploads/frameshapes/frame_shape-${shape.name}.svg`}
                    alt={shape.name}
                    className="w-full h-full transition-transform group-hover:scale-110 mb-4"
                  />
                  <span className="text-sm font-medium text-center group-hover:underline">{shape.name}</span>
                </div>
              </a>
            ))}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2">
              <a href="#" className="flex items-center justify-center">
                <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
                  Shop all →
                </span>
              </a>
            </div>
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
      <section id="how-to-pick" className="py-8 md:py-12 bg-[#F5F7F9]">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-sans font-bold text-center mb-8 md:mb-16">
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
                    <p className="text-sm text-black">Discover our designer eyewear and select your favorite frame.</p>
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
                    <p className="text-sm text-black">Choose your vision need and add your prescription.</p>
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
                    <p className="text-sm text-black">Select lens type and thickness, then add specialized treatments.</p>
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
                    <p className="text-sm text-black">We ensure 100% satisfaction with our 30 day happiness guarantee.</p>
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

      {/* REDESIGNED: Custom Sunglasses Section */}
      <section className="py-16 md:py-28 bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left side content */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="max-w-lg mx-auto md:mx-0">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-800">
                  <Glasses className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">DESIGNED FOR YOU</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Create Your Own Unique Style</h2>
                <p className="text-lg text-gray-600 mb-10">
                  Express your individuality with our custom sunglasses. Select from premium frames, 
                  choose your lens color, and add personalized details for a look that's uniquely yours.
                </p>

                {/* Color Selection */}
                <div className="mb-10">
                  <p className="text-sm font-medium text-gray-500 mb-4">CHOOSE YOUR COLOR</p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { color: 'bg-rose-400', name: 'Rose' },
                      { color: 'bg-emerald-500', name: 'Emerald' },
                      { color: 'bg-amber-400', name: 'Amber' },
                      { color: 'bg-indigo-500', name: 'Indigo' },
                      { color: 'bg-purple-500', name: 'Purple' },
                      { color: 'bg-teal-500', name: 'Teal' }
                    ].map((item, index) => (
                      <button 
                        key={index}
                        className={`w-10 h-10 rounded-full ${item.color} border-2 border-white shadow-lg hover:scale-110 transition-transform relative group`}
                        aria-label={`Select ${item.name} color`}
                      >
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="default" className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg flex items-center gap-2">
                  Design Your Sunglasses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side image */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative w-full md:w-[120%] h-[300px] md:h-[500px] overflow-hidden rounded-2xl">
                <img 
                  src={customSunglassesImage} 
                  alt="Custom designer sunglasses" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-2xl"></div>
                
                {/* Feature Highlights */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  {['UV Protection', 'Polarized Options', 'Prescription Compatible', 'Lightweight'].map((feature, index) => (
                    <span key={index} className="bg-white/90 backdrop-blur-sm text-black text-sm px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED: Insurance Benefits Section */}
      <section className="py-16 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left side image */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/sectionassuranceimage.png" 
                  alt="Insurance Benefits" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                
                {/* Badge overlay */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Coverage & Benefits</span>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-800">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">INSURANCE COVERAGE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Maximize Your Vision Benefits</h2>
                <p className="text-lg text-gray-600 mb-10">
                  We work with leading insurance providers to help cover the cost of your eyewear. 
                  Our team will help you understand your benefits and get the most from your coverage.
                </p>

                {/* Insurance Partners */}
                <p className="text-sm font-medium text-gray-500 mb-4">OUR TRUSTED PARTNERS</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                  {[
                    { src: '/lovable-uploads/assurancebrandsmaghreb/allianz-logo.png', name: 'Allianz' },
                    { src: '/lovable-uploads/assurancebrandsmaghreb/cnss.png', name: 'CNSS' },
                    { src: '/lovable-uploads/assurancebrandsmaghreb/rma.png', name: 'RMA' },
                    { src: '/lovable-uploads/assurancebrandsmaghreb/sanlam.png', name: 'Sanlam' },
                  ].map((insurance, index) => (
                    <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="flex items-center justify-center p-4 h-20">
                        <img 
                          src={insurance.src} 
                          alt={insurance.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg">
                    Check Your Coverage
                  </Button>
                  <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white transition-colors px-6 py-2 rounded-lg">
                    Learn More
                  </Button>
                </div>

                {/* Benefits List */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'In-network with major providers',
                    'Easy claims processing',
                    'Out-of-network reimbursement',
                    'Vision care discounts'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                        className="w-full h-12 object-contain"
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
