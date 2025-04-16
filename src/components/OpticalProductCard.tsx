
import React from 'react';
import { Link } from 'react-router-dom';

interface OpticalProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

const OpticalProductCard: React.FC<OpticalProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  colors = []
}) => {
  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="bg-white transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">${price}</span>
            <div className="flex gap-1">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OpticalProductCard;
