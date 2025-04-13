
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useFormattedTranslation } from '../utils/translationHelper';
import { TooltipWrapper } from '../components/TooltipWrapper';

// Mock products data
const products = [
  {
    id: '1',
    name: 'Bravo Browline',
    price: 159.95,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
    category: 'optical',
    colors: ['#000000', '#8B4513', '#0047AB'],
    rating: 4.5,
    reviews: 380
  },
  {
    id: '2',
    name: 'Atlas Round',
    price: 139.95,
    image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
    category: 'optical',
    colors: ['#000000', '#8B4513', '#F5F5F5'],
    rating: 4.2,
    reviews: 215
  },
  {
    id: '3',
    name: 'Dawn Aviator',
    price: 179.95,
    image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
    category: 'sun',
    colors: ['#000000', '#8B4513', '#0047AB'],
    rating: 4.7,
    reviews: 102
  },
  {
    id: '4',
    name: 'Horizon Cat-Eye',
    price: 149.95,
    image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
    category: 'sun',
    colors: ['#000000', '#8B4513', '#F5F5F5'],
    rating: 4.0,
    reviews: 178
  },
  {
    id: '5',
    name: 'Neo Rectangle',
    price: 129.95,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
    category: 'optical',
    colors: ['#000000', '#8B4513', '#0047AB'],
    rating: 4.3,
    reviews: 95
  },
  {
    id: '6',
    name: 'Pixel Square',
    price: 139.95,
    image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
    category: 'optical',
    colors: ['#000000', '#8B4513', '#F5F5F5'],
    rating: 4.6,
    reviews: 230
  },
  {
    id: '7',
    name: 'Junior Round',
    price: 119.95,
    image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
    category: 'kids',
    colors: ['#000000', '#8B4513', '#0047AB'],
    rating: 4.1,
    reviews: 42
  },
  {
    id: '8',
    name: 'Youth Rectangle',
    price: 109.95,
    image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
    category: 'kids',
    colors: ['#000000', '#8B4513', '#F5F5F5'],
    rating: 4.4,
    reviews: 67
  }
];

type Category = 'all' | 'optical' | 'sun' | 'kids';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { formattedT: t } = useFormattedTranslation();
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  return (
    <TooltipWrapper>
      <div>
        <Header />
        
        <main className="container mx-auto px-4 py-16 mt-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-6">{t("collection.title")}</h1>
            
            {/* Category filter */}
            <div className="inline-flex space-x-2 p-1 bg-gray-100 rounded-full">
              <button 
                className={`py-2 px-6 rounded-full transition-colors ${
                  activeCategory === 'all' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                {t("collection.all")}
              </button>
              
              <button 
                className={`py-2 px-6 rounded-full transition-colors ${
                  activeCategory === 'optical' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('optical')}
              >
                {t("collection.optical")}
              </button>
              
              <button 
                className={`py-2 px-6 rounded-full transition-colors ${
                  activeCategory === 'sun' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('sun')}
              >
                {t("collection.sun")}
              </button>
              
              <button 
                className={`py-2 px-6 rounded-full transition-colors ${
                  activeCategory === 'kids' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('kids')}
              >
                {t("collection.kids")}
              </button>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                colors={product.colors}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default Products;
