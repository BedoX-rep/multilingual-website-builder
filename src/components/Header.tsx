
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white py-6'}`}>
      <div className="px-0">
        <div className="flex items-center justify-between">
          {/* Logo - adjusted with ml-[5%] for left margin */}
          <Link to="/" className="flex items-center gap-2 pl-[4%]">
            <span className="font-['Playfair_Display'] text-2xl font-medium tracking-wider">Lens Optique</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              {t('nav.home')}
            </Link>
            <Link to="/products" className="nav-link">
              {t('nav.products')}
            </Link>
            <Link to="/about" className="nav-link">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="nav-link">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 pr-[5%]">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            <button className="hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block">
              <User className="w-5 h-5" />
            </button>
            <button className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-xs flex items-center justify-center rounded-full">0</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
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
              <span className="font-serif text-2xl">Menu</span>
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
                <div className="pt-4 border-t border-gray-100">
                  <LanguageSelector />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
