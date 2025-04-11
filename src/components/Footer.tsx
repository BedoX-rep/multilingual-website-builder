
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="font-serif text-2xl font-medium mb-6 inline-block">
              Luxe Optique
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Quality eyewear for every style
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Eyeglasses
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sunglasses
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blue Light Glasses
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Help</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-serif mb-4">Newsletter</h3>
            <form className="flex">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-3 bg-gray-900 border border-gray-800 focus:border-white transition-colors outline-none text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-white text-black px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
