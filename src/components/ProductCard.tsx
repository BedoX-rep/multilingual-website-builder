
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  const { t } = useLanguage();
  
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="product-card group overflow-hidden">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="product-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick action buttons */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button className="p-2.5 bg-white/90 hover:bg-white rounded-full text-blue-600 shadow-lg">
              <Eye size={18} />
            </button>
            <button className="p-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-lg">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
        
        <div className="product-details">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{category}</span>
            <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-md font-medium">New</span>
          </div>
          <h3 className="font-serif text-lg font-medium mb-1 group-hover:text-blue-600 transition-colors">{name}</h3>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">${price.toFixed(2)}</span>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="w-3.5 h-3.5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(5.0)</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
