
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-10">
            <img src="/lovable-uploads/navlogo1.png" alt="Lens Optique" className="h-8 md:h-10" />
            <span className={cn("font-serif text-xl font-medium transition-colors", 
              isScrolled ? "text-gray-900" : "text-gray-900"
            )}>Lens Optique</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className={cn(
              "text-sm uppercase tracking-wider hover:text-blue-600 transition-colors font-medium",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )}>
              {t('nav.home')}
            </Link>
            <Link to="/products" className={cn(
              "text-sm uppercase tracking-wider hover:text-blue-600 transition-colors font-medium",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )}>
              {t('nav.products')}
            </Link>
            <Link to="/about" className={cn(
              "text-sm uppercase tracking-wider hover:text-blue-600 transition-colors font-medium",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )}>
              {t('nav.about')}
            </Link>
            <Link to="/contact" className={cn(
              "text-sm uppercase tracking-wider hover:text-blue-600 transition-colors font-medium",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )}>
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className={cn(
              "hidden md:block transition-colors",
              isScrolled ? "text-gray-800 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"
            )}>
              <Search className="w-5 h-5" />
            </button>
            <button className={cn(
              "hidden md:block transition-colors",
              isScrolled ? "text-gray-800 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"
            )}>
              <User className="w-5 h-5" />
            </button>
            <button 
              className={cn(
                "relative transition-colors",
                isScrolled ? "text-gray-800 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"
              )}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-full">0</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className={cn(
                "md:hidden transition-colors",
                isScrolled ? "text-gray-800" : "text-gray-800"
              )}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <img src="/lovable-uploads/navlogo1.png" alt="Lens Optique" className="h-8" />
                <span className="font-serif text-xl font-medium">Lens Optique</span>
              </Link>
              <button onClick={toggleMobileMenu}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 p-6">
              <div className="space-y-6">
                <Link to="/" className="block text-2xl font-serif" onClick={toggleMobileMenu}>
                  {t('nav.home')}
                </Link>
                <Link to="/products" className="block text-2xl font-serif" onClick={toggleMobileMenu}>
                  {t('nav.products')}
                </Link>
                <Link to="/about" className="block text-2xl font-serif" onClick={toggleMobileMenu}>
                  {t('nav.about')}
                </Link>
                <Link to="/contact" className="block text-2xl font-serif" onClick={toggleMobileMenu}>
                  {t('nav.contact')}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
