import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Hero section image
const heroImage = "/lovable-uploads/herosectionbg4.png";

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

      {/* Hero Section - Adjusted with ml-[5%] for left/right margin and proper RTL support */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Person wearing glasses" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="luxury-container relative h-[80vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className={`text-gray-800 z-10 ${dir === 'rtl' ? 'mr-[5%] md:mr-[7%]' : 'ml-[5%] md:ml-[7%]'}`}>
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
      <section className="bg-blue-50">
        <div className="flex justify-between items-center py-4 px-6">
          <div className="text-center flex-1">
            <p className="text-base font-medium text-blue-800">{t('shipping.delivery')}</p>
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
      <section className="py-16 relative bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/bestsellersbackground.svg)' }}>
        <div className="luxury-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">BEST SELLERS ACROSS MOROCCO</h2>
            <a href="/products" className="text-sm font-medium hover:underline">Shop all</a>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <button className="hover:underline">Eyeglasses</button>
            <button className="hover:underline">Sunglasses</button>
            <button className="hover:underline">Designer Glasses</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {[
              { name: 'Rectangle', rating: 4.6, reviews: 679, price: 16.95 },
              { name: 'Cat-Eye', rating: 4.5, reviews: 2137, price: 16.95 },
              { name: 'Square', rating: 4.5, reviews: 722, price: 16.95 }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 relative group">
                <div className="absolute top-3 right-3 z-10">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" fill="none"/>
                    </svg>
                  </button>
                </div>
                <div className="bg-[#E8F7F9] px-2 py-1 rounded-full text-xs inline-block mb-4">Top rated</div>
                <img
                  src={`/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png`}
                  alt={`${item.name} glasses`}
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">CAD${item.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm">{item.rating} ({item.reviews})</span>
                    </div>
                  </div>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-green-600">Get it as early as Wed, Apr 16</p>
                  <div className="flex gap-2 mt-2">
                    {['bg-[#8B4513]', 'bg-black', 'bg-red-600', 'bg-white border'].map((color, i) => (
                      <button
                        key={i}
                        className={`w-6 h-6 rounded-full ${color} border-gray-200 hover:scale-110 transition-transform`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="luxury-container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="max-w-xl mx-auto md:mx-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {t('custom.title')}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {t('custom.desc')}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: '🎨', title: 'Custom Colors' },
                    { icon: '🌟', title: 'Premium Lenses' },
                    { icon: '⚡', title: 'UV Protection' },
                    { icon: '✨', title: 'Anti-Reflective' }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h3 className="font-medium">{feature.title}</h3>
                    </div>
                  ))}
                </div>

                {/* Color Options */}
                <div className="mb-8">
                  <p className="text-sm font-medium mb-4">Available Colors:</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="w-10 h-10 rounded-full bg-black border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-rose-500 border-2 border-white shadow-lg hover:scale-110 transition-transform"></button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors">
                    Customize Now
                  </button>
                  <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <img 
                  src={customSunglassesImage} 
                  alt="Custom designed sunglasses" 
                  className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-2xl"></div>
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
              {t('collection.viewmore')}
            </button>
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