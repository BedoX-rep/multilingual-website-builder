
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  colors = [],
  rating = 0,
  reviews = 0
}) => {
  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10 flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <Link to={`/product/${id}`} className="block">
        <div className="bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-lg">
          <div className="relative mb-4">
            <img 
              src={image} 
              alt={name}
              className="w-full h-48 object-contain bg-white"
            />
            <div className="absolute top-0 left-0">
              <div className="bg-[#E8F7F9] px-3 py-1 rounded-full text-xs">
                Try on virtually
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">${price}</span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm">{rating} ({reviews})</span>
              </div>
            </div>
            
            <h3 className="text-lg font-medium">{name}</h3>
            
            <p className="text-sm text-green-600">
              Get it as early as Wed, Apr 16
            </p>
            
            <div className="flex gap-2 pt-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="w-6 h-6 rounded-full hover:scale-110 transition-transform border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
