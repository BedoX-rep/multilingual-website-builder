
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr';

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
    'products.all': 'All',
    'products.eyeglasses': 'Eyeglasses',
    'products.sunglasses': 'Sunglasses',
    'products.bluelight': 'Blue Light',
    
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
    'newsletter.description': 'Stay updated with our latest products, promotions and eyecare tips.',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Subscribe',
    
    // About Page
    'about.title': 'About Us',
    'about.content': 'Content will go here...',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.content': 'Contact form will go here...',
    
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
    'footer.description': 'Premium eyewear for the modern lifestyle. Designed for comfort, style, and functionality with cutting-edge lens technology.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.search': 'Rechercher',
    'nav.login': 'Connexion',
    'nav.cart': 'Panier',
    
    // Hero Section
    'hero.subtitle': 'Lunettes Premium',
    'hero.title': 'Voir le monde avec style et clarté',
    'hero.description': 'Découvrez notre collection de lunettes et lunettes de soleil de haute qualité conçues pour votre confort et votre style de vie.',
    'hero.cta': 'Acheter Maintenant',
    'hero.secondary': 'En Savoir Plus',
    
    // Products Section
    'products.subtitle': 'Notre Collection',
    'products.title': 'Meilleures Ventes',
    'products.viewAll': 'Voir Tous les Produits',
    'products.all': 'Tous',
    'products.eyeglasses': 'Lunettes',
    'products.sunglasses': 'Lunettes de Soleil',
    'products.bluelight': 'Anti-Lumière Bleue',
    
    // Features Section
    'features.subtitle': 'Pourquoi Nous Choisir',
    'features.title': 'Qualité et Service Supérieurs',
    'features.delivery.title': 'Livraison Gratuite',
    'features.delivery.text': 'Livraison gratuite pour toutes les commandes de plus de 100€',
    'features.warranty.title': 'Garantie de 2 ans',
    'features.warranty.text': 'Toutes nos montures sont garanties 2 ans',
    'features.returns.title': 'Retours sous 30 jours',
    'features.returns.text': 'Non satisfait? Retournez dans les 30 jours pour un remboursement complet',
    
    // Testimonials
    'testimonials.subtitle': 'Ce Que Disent Nos Clients',
    'testimonials.title': 'Témoignages de Nos Clients',
    
    // Newsletter
    'newsletter.title': 'Abonnez-vous à Notre Newsletter',
    'newsletter.description': 'Restez informé de nos derniers produits, promotions et conseils pour les yeux.',
    'newsletter.placeholder': 'Entrez votre email',
    'newsletter.button': 'S\'abonner',
    
    // About Page
    'about.title': 'À Propos de Nous',
    'about.content': 'Le contenu sera ici...',
    
    // Contact Page
    'contact.title': 'Contactez-Nous',
    'contact.content': 'Le formulaire de contact sera ici...',
    
    // Footer
    'footer.shop': 'Boutique',
    'footer.eyeglasses': 'Lunettes',
    'footer.sunglasses': 'Lunettes de Soleil',
    'footer.bluelight': 'Lunettes Anti-Lumière Bleue',
    'footer.help': 'Aide',
    'footer.faq': 'FAQ',
    'footer.shipping': 'Expédition & Livraison',
    'footer.returns': 'Retours & Échanges',
    'footer.about': 'À Propos de Nous',
    'footer.story': 'Notre Histoire',
    'footer.press': 'Presse',
    'footer.careers': 'Carrières',
    'footer.copyright': '© 2025 Lens Optique. Tous droits réservés.',
    'footer.description': 'Lunettes premium pour un style de vie moderne. Conçues pour le confort, le style et la fonctionnalité avec une technologie de lentilles de pointe.',
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
