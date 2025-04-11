
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Sliders } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Esme',
    price: 95,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
    colors: ['#8B4513', '#CCCCCC', '#2E4F4F', '#4F6F52'],
    category: 'Optical',
    rating: 4.8,
    reviews: 425
  },
  {
    id: '2',
    name: 'Baird',
    price: 145,
    image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
    colors: ['#000000', '#FF0000', '#E6F4F1', '#435334', '#7B66FF'],
    category: 'Optical',
    rating: 4.7,
    reviews: 312
  },
  {
    id: '3',
    name: 'Durand',
    price: 95,
    image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
    colors: ['#8B4513', '#000000', '#2E4F4F', '#CCCCCC', '#7B66FF'],
    category: 'Optical',
    rating: 4.9,
    reviews: 567
  },
  {
    id: '4',
    name: 'Brady',
    price: 95,
    image: '/lovable-uploads/productmockup/d29bdfc9-8c61-4bd0-8a10-c0ef0355df3b.png',
    colors: ['#7B66FF', '#CCCCCC', '#000000'],
    category: 'Optical',
    rating: 4.6,
    reviews: 289
  },
  {
    id: '5',
    name: 'Bodie',
    price: 95,
    image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
    colors: ['#8B4513', '#000000', '#7B66FF'],
    category: 'Optical',
    rating: 4.8,
    reviews: 412
  },
  {
    id: '6',
    name: 'Crane',
    price: 95,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6 (copy).png',
    colors: ['#000000', '#8B4513', '#FF4500', '#CCCCCC'],
    category: 'Optical',
    rating: 4.7,
    reviews: 356
  },
  {
    id: '7',
    name: 'Winston',
    price: 95,
    image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546 (copy).png',
    colors: ['#8B4513', '#000000', '#2E4F4F'],
    category: 'Optical',
    rating: 4.9,
    reviews: 278
  },
  {
    id: '8',
    name: 'Felix',
    price: 95,
    image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b (copy).png',
    colors: ['#000000', '#8B4513', '#7B66FF'],
    category: 'Optical',
    rating: 4.8,
    reviews: 389
  }
];

const Products: React.FC = () => {
  const { t, dir } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeFilter);
  
  return (
    <div className={dir === 'rtl' ? 'font-sans rtl' : 'font-sans'}>
      <Header />
      
      {/* Products Hero */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-center">
            {t('collection.title')}
          </h1>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8">
            {/* Collection Filters */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <button 
                className={`px-4 py-1 text-sm rounded-full border transition-colors ${activeFilter === 'all' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-600 hover:border-blue-600'}`}
                onClick={() => setActiveFilter('all')}
              >
                {t('collection.all')}
              </button>
              <button 
                className={`px-4 py-1 text-sm rounded-full border transition-colors ${activeFilter === 'optical' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-600 hover:border-blue-600'}`}
                onClick={() => setActiveFilter('optical')}
              >
                {t('collection.optical')}
              </button>
              <button 
                className={`px-4 py-1 text-sm rounded-full border transition-colors ${activeFilter === 'sunglasses' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-600 hover:border-blue-600'}`}
                onClick={() => setActiveFilter('sunglasses')}
              >
                {t('collection.sun')}
              </button>
              <button 
                className={`px-4 py-1 text-sm rounded-full border transition-colors ${activeFilter === 'kids' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-600 hover:border-blue-600'}`}
                onClick={() => setActiveFilter('kids')}
              >
                {t('collection.kids')}
              </button>
            </div>
            
            {/* Additional Filters Toggle */}
            <button 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Sliders className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-gray-50 p-4 rounded-lg mb-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="0" 
                      max="300" 
                      className="w-full accent-blue-600" 
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>$0</span>
                    <span>$300+</span>
                  </div>
                </div>
                
                {/* Frame Shape */}
                <div>
                  <h3 className="font-medium mb-2">Frame Shape</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Rectangle</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Square</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Round</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Cat Eye</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Aviator</button>
                  </div>
                </div>
                
                {/* Frame Material */}
                <div>
                  <h3 className="font-medium mb-2">Frame Material</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Acetate</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Metal</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Titanium</button>
                    <button className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:border-blue-600">Mixed</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid with Navigation */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.slice(0, 8).map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  colors={product.colors}
                  rating={product.rating}
                  reviews={product.reviews}
                  category={product.category}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
              onClick={() => {
                // Implement product navigation logic here
                console.log('Navigate right');
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">...</button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
