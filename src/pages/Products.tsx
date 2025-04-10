
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Modern Square Frames',
    price: 129.99,
    image: '/lovable-uploads/4e0855d7-4ceb-4a1d-b74a-736f6b127820.png',
    category: 'eyeglasses',
  },
  {
    id: '2',
    name: 'Round Metal Frames',
    price: 149.99,
    image: '/lovable-uploads/29f9550c-ba8d-45fe-8e22-1ffb62de3f75.png',
    category: 'eyeglasses',
  },
  {
    id: '3',
    name: 'Classic Aviator Sunglasses',
    price: 159.99,
    image: '/lovable-uploads/1551cd86-4f1b-4880-afa5-1ac4eaa6aeb0.png',
    category: 'sunglasses',
  },
  {
    id: '4',
    name: 'Vintage Cat Eye Frames',
    price: 139.99,
    image: '/lovable-uploads/5c4c396f-836b-49e7-8833-be31c7cda22e.png',
    category: 'eyeglasses',
  },
  {
    id: '5',
    name: 'Sporty Wrap Sunglasses',
    price: 179.99,
    image: '/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png',
    category: 'sunglasses',
  },
  {
    id: '6',
    name: 'Blue Light Blocking Glasses',
    price: 119.99,
    image: '/lovable-uploads/af178ea4-8b63-422a-9dba-cd74c382cd99.png',
    category: 'bluelight',
  },
];

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [category, setCategory] = useState<string | null>(null);
  
  const filteredProducts = category 
    ? products.filter(product => product.category === category) 
    : products;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h4 className="section-subtitle">{t('products.subtitle')}</h4>
            <h2 className="section-title">{t('products.title')}</h2>
          </div>
          
          <div className="flex justify-center gap-4 mb-10">
            <button 
              className={`px-4 py-2 rounded-md ${!category ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              onClick={() => setCategory(null)}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${category === 'eyeglasses' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              onClick={() => setCategory('eyeglasses')}
            >
              Eyeglasses
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${category === 'sunglasses' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              onClick={() => setCategory('sunglasses')}
            >
              Sunglasses
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${category === 'bluelight' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              onClick={() => setCategory('bluelight')}
            >
              Blue Light
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
