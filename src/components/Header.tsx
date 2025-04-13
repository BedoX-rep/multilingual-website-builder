import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/lovable-uploads/navlogo.png" alt="Logo" className="h-8" />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search glasses and contacts"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-gray-600 hover:text-gray-900">
                Visual Search
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/account" className="text-sm hover:text-gray-600 flex flex-col items-center">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/favorites" className="text-sm hover:text-gray-600 flex flex-col items-center">
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Link>
            <Link to="/help" className="text-sm hover:text-gray-600 flex flex-col items-center">
              <span className="h-5 w-5 text-xl">?</span>
              <span>Help</span>
            </Link>
            <Link to="/cart" className="text-sm hover:text-gray-600 flex flex-col items-center">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
          </nav>
        </div>

        {/* Categories */}
        <nav className="flex justify-center space-x-8 py-4">
          <Link to="/eyeglasses" className="text-sm font-medium hover:text-gray-600">Eyeglasses</Link>
          <Link to="/sunglasses" className="text-sm font-medium hover:text-gray-600">Sunglasses</Link>
          <Link to="/lenses" className="text-sm font-medium hover:text-gray-600">Lenses</Link>
          <Link to="/sports" className="text-sm font-medium hover:text-gray-600">Sports</Link>
          <Link to="/discover" className="text-sm font-medium hover:text-gray-600">Discover</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;