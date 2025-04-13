
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormattedTranslation } from '../utils/translationHelper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { SelectLensesWizard } from '../components/lensSelector/SelectLensesWizard';

// Mock product data (this would normally come from an API)
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
  const { toast } = useToast();
  
  // Find product by ID
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  // State to track if the modal is open
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate(`/product/${id}`);
  };

  // This function will be called when the user adds the product to cart
  const handleAddToCart = (orderDetails: any) => {
    // Here you would typically dispatch to a cart context or call an API
    toast({
      title: t("cart.itemAdded"),
      description: `${product.name} ${t("cart.hasBeenAddedToCart")}`,
    });
    
    navigate('/product/' + id);
  };

  return (
    <div className="font-sans">
      <Header />
      
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-start overflow-y-auto z-50 p-4">
              <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-full overflow-y-auto">
                <div className="sticky top-0 bg-white flex justify-between items-center p-4 border-b">
                  <h2 className="text-xl font-bold">
                    {t("lenses.selectLenses")}
                  </h2>
                  <button 
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-auto object-contain"
                        />
                        <div className="mt-4">
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-gray-500">{t("product.code")}: {product.code}</p>
                          <div className="mt-2">
                            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <SelectLensesWizard 
                        product={product} 
                        onComplete={handleAddToCart}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SelectLenses;
