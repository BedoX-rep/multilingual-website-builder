import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormattedTranslation } from '../utils/translationHelper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { SelectLensesWizard } from '../components/lensSelector/SelectLensesWizard';
import { ProductOrder } from '../components/lensSelector/types';
import { LensProvider } from '../components/lensSelector/context/LensContext';

const mockProducts = [
  {
    id: '1',
    name: 'Bravo Browline',
    code: '15642',
    price: 159.95,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
  },
  {
    id: '2',
    name: 'Aviator Classic',
    price: 119.99,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
  }
];

const SelectLenses: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formattedT: t } = useFormattedTranslation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  const handleAddToCart = (orderDetails: ProductOrder) => {
    navigate('/product/' + id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Product Image Section */}
        <div className="bg-gray-50 p-8 flex items-center justify-center">
          <div className="max-w-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{t("product.code")}: {product.code}</p>
              <p className="text-lg font-bold mt-2">Frame price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Lens Selection Section */}
        <div className="p-8 overflow-y-auto">
          <LensProvider product={product}>
            <SelectLensesWizard 
              product={product} 
              onComplete={handleAddToCart}
            />
          </LensProvider>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SelectLenses;