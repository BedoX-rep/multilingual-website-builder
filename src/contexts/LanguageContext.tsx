
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en';

// Define the context type
export interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: (key: string) => key,
  changeLanguage: () => {},
});

// Create translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    'nav.login': 'Login',
    'nav.cart': 'Cart',
    
    // Hero Section
    'hero.subtitle': 'Premium Eyewear',
    'hero.title': 'See the World in Style and Clarity',
    'hero.description': 'Discover our collection of high-quality eyeglasses and sunglasses designed for your comfort and lifestyle.',
    'hero.cta': 'Shop Now',
    'hero.secondary': 'Learn More',
    
    // Products Section
    'products.subtitle': 'Our Collection',
    'products.title': 'Bestsellers',
    'products.viewAll': 'View All Products',
    
    // Features Section
    'features.subtitle': 'Why Choose Us',
    'features.title': 'Superior Quality & Service',
    'features.delivery.title': 'Free Shipping',
    'features.delivery.text': 'Free delivery on all orders over $100',
    'features.warranty.title': '2-Year Warranty',
    'features.warranty.text': 'All our frames come with a 2-year warranty',
    'features.returns.title': '30-Day Returns',
    'features.returns.text': 'Not satisfied? Return within 30 days for a full refund',
    
    // Testimonials
    'testimonials.subtitle': 'What Our Customers Say',
    'testimonials.title': 'Stories from Our Clients',
    
    // Newsletter
    'newsletter.title': 'Subscribe to Our Newsletter',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Subscribe',
    
    // Footer
    'footer.shop': 'Shop',
    'footer.eyeglasses': 'Eyeglasses',
    'footer.sunglasses': 'Sunglasses',
    'footer.bluelight': 'Blue Light Glasses',
    'footer.help': 'Help',
    'footer.faq': 'FAQ',
    'footer.shipping': 'Shipping & Delivery',
    'footer.returns': 'Returns & Exchanges',
    'footer.about': 'About Us',
    'footer.story': 'Our Story',
    'footer.press': 'Press',
    'footer.careers': 'Careers',
    'footer.copyright': '© 2025 Lens Optique. All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Function to change language
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
