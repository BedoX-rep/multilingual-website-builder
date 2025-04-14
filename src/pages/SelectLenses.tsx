import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormattedTranslation } from '../utils/translationHelper';
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
    addToCart(orderDetails);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-white">
      <LensProvider product={product}>
        <SelectLensesWizard 
          product={product} 
          onComplete={handleAddToCart}
          onClose={() => window.history.back()}
        />
      </LensProvider>
    </div>
  );
};

export default SelectLenses;