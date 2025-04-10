import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Hero section image
const heroImage = "/lovable-uploads/herosectionbg2.jpg";

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

  return (
    <div className={dir === 'rtl' ? 'font-sans rtl' : 'font-sans'}>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[75vh]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Person wearing glasses" 
            className="w-full h-full object-cover object-top"
          />
          </div>

        <div className="luxury-container relative h-[75vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-800 z-10">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] text-gray-800">
                {t('hero.title')}
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
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {t('hero.learnmore')}
              </a>
            </div>
            <div className="hidden md:block"> </div>
          </div>
        </div>
      </section>

      {/* Shipping Info Banner */}
      <section className="bg-white border-y border-gray-200">
        <div className="luxury-container">
          <div className="grid grid-cols-4 divide-x divide-gray-200">
            <div className="py-6 text-center">
              <p className="text-base font-medium">Free shipping</p>
            </div>
            <div className="py-6 text-center">
              <p className="text-base font-medium">Free 30-day returns</p>
            </div>
            <div className="py-6 text-center">
              <p className="text-base font-medium">Free eye tests</p>
            </div>
            <div className="py-6 text-center">
              <p className="text-base font-medium">We also offer contacts!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Shape Section */}
      <section className="py-16 bg-white">
        <div className="luxury-container">
          <h2 className="text-3xl font-bold text-center mb-4">{t('frame.title')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('frame.subtitle')}</p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {['Rectangle', 'Square', 'Round', 'Cat-Eye', 'Aviator', 'Browline'].map((shape) => (
              <div key={shape} className="text-center group cursor-pointer">
                <div className="mb-4 transform transition-transform group-hover:scale-110">
                  <img
                    src={`/lovable-uploads/${shape.toLowerCase()}-frame.png`}
                    alt={shape}
                    className="w-20 h-12 mx-auto object-contain"
                  />
                </div>
                <p className="text-sm">{shape}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-[#E5F6F8]">
        <div className="luxury-container">
          <h2 className="text-3xl font-bold text-center mb-8">{t('bestsellers.title')}</h2>
          <div className="flex gap-4 justify-center mb-8">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm">{t('bestsellers.eyeglasses')}</button>
            <button className="px-4 py-2 text-gray-600 rounded-full text-sm">{t('bestsellers.sunglasses')}</button>
            <button className="px-4 py-2 text-gray-600 rounded-full text-sm">{t('bestsellers.designer')}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 relative group">
                <button className="absolute right-4 top-4 text-gray-400 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <img
                  src={`/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png`}
                  alt="Best seller glasses"
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold">CAD$20.95</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm ml-1">4.8 (2972)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Get it as early as Tue, Apr 15</p>
                <div className="flex gap-2">
                  {['red', 'black', 'blue', 'gray'].map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full bg-${color}-500 border-2 border-white shadow`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Selection Section */}
      <section className="py-16 bg-white">
        <div className="luxury-container">
          <h2 className="text-3xl font-bold text-center mb-12">Pick a style, any style:</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {['Classic', 'Eco Friendly', 'Artsy', 'Retro', 'Street Style', 'Bold'].map((style) => (
              <div key={style} className="text-center group cursor-pointer">
                <div className="rounded-full bg-gray-100 p-4 mb-4 transform transition-transform group-hover:scale-110">
                  <img
                    src={`/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png`}
                    alt={style}
                    className="w-full h-24 object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Pick Section */}
      <section id="how-to-pick" className="py-24 bg-gray-50">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <p className="section-subtitle">
              {t('pick.subtitle')}
            </p>
            <h2 className="section-title">
              {t('pick.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={frameIcon} alt="Eyeglass frames" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-serif text-xl mb-3">{t('pick.step1.title')}</h3>
              <p className="text-gray-600">{t('pick.step1.desc')}</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={lensIcon} alt="Eyeglass lenses" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-serif text-xl mb-3">{t('pick.step2.title')}</h3>
              <p className="text-gray-600">{t('pick.step2.desc')}</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={prescriptionIcon} alt="Prescription" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-serif text-xl mb-3">{t('pick.step3.title')}</h3>
              <p className="text-gray-600">{t('pick.step3.desc')}</p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={deliveryIcon} alt="Delivery" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-serif text-xl mb-3">{t('pick.step4.title')}</h3>
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
            <div className={`${dir === 'rtl' ? 'order-2' : 'order-1'} max-w-xl`}>
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
                  <button className="w-12 h-12 rounded-full bg-eyewear-gold border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                  <button className="w-12 h-12 rounded-full bg-eyewear-silver border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                  <button className="w-12 h-12 rounded-full bg-eyewear-bronze border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                  <button className="w-12 h-12 rounded-full bg-eyewear-pearl border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                  <button className="w-12 h-12 rounded-full bg-eyewear-copper border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                  <button className="w-12 h-12 rounded-full bg-eyewear-platinum border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
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

      {/* Featured Collection */}
      <section className="py-24">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <p className="section-subtitle">
              {t('collection.subtitle')}
            </p>
            <h2 className="section-title">
              {t('collection.title')}
            </h2>

            {/* Collection Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button 
                className={`px-6 py-2 text-sm rounded-full border-2 transition-colors ${activeFilter === 'all' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                onClick={() => setActiveFilter('all')}
              >
                {t('collection.all')}
              </button>
              <button 
                className={`px-6 py-2 text-sm rounded-full border-2 transition-colors ${activeFilter === 'optical' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                onClick={() => setActiveFilter('optical')}
              >
                {t('collection.optical')}
              </button>
              <button 
                className={`px-6 py-2 text-sm rounded-full border-2 transition-colors ${activeFilter === 'sun' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                onClick={() => setActiveFilter('sun')}
              >
                {t('collection.sun')}
              </button>
              <button 
                className={`px-6 py-2 text-sm rounded-full border-2 transition-colors ${activeFilter === 'kids' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                onClick={() => setActiveFilter('kids')}
              >
                {t('collection.kids')}
              </button>
              <button 
                className={`px-6 py-2 text-sm rounded-full border-2 transition-colors ${activeFilter === 'sports' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                onClick={() => setActiveFilter('sports')}
              >
                {t('collection.sports')}
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <button className="btn-outline">
              View More
            </button>
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
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { name: 'Essilor', logo: '/lovable-uploads/essilor.png' },
                  { name: 'Indo', logo: '/lovable-uploads/indo.png' },
                  { name: 'Zeiss', logo: '/lovable-uploads/zeiss.png' },
                  { name: 'Hoya', logo: '/lovable-uploads/hoya.png' },
                  { name: 'Rodenstock', logo: '/lovable-uploads/rodenstock.png' },
                  { name: 'Shamir', logo: '/lovable-uploads/shamir.png' },
                  { name: 'Seiko', logo: '/lovable-uploads/seiko.png' },
                  { name: 'Nikon', logo: '/lovable-uploads/nikon.png' }
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