
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define language type
type Language = 'en' | 'fr';

// Define translations interface
interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

// Define context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
  t: (key: string) => string;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    fr: 'Accueil',
  },
  'nav.products': {
    en: 'Products',
    fr: 'Produits',
  },
  'nav.about': {
    en: 'About Us',
    fr: 'À propos',
  },
  'nav.contact': {
    en: 'Contact',
    fr: 'Contact',
  },
  
  // Hero Section
  'hero.subtitle': {
    en: 'PREMIUM FRAMES FOR EVERY FACE',
    fr: 'MONTURES PREMIUM POUR CHAQUE VISAGE',
  },
  'hero.title': {
    en: 'Premium Eyewear For Your Digital Lifestyle',
    fr: 'Lunettes Premium Pour Votre Style De Vie Numérique',
  },
  'hero.description': {
    en: 'Enhance your vision with our premium frames and blue light filtering technology.',
    fr: 'Améliorez votre vision avec nos montures premium et notre technologie de filtrage de la lumière bleue.',
  },
  'hero.cta.shop': {
    en: 'Shop Now',
    fr: 'Acheter',
  },
  'hero.cta.learn': {
    en: 'Learn More',
    fr: 'En Savoir Plus',
  },
  
  // Features
  'features.title': {
    en: 'OUR LENSES FEATURE',
    fr: 'NOS VERRES INCLUENT',
  },
  'features.blue': {
    en: 'Blue Light Protection',
    fr: 'Protection Lumière Bleue',
  },
  'features.uv': {
    en: 'UV Protection',
    fr: 'Protection UV',
  },
  'features.scratch': {
    en: 'Scratch Resistance',
    fr: 'Résistance aux Rayures',
  },
  'features.anti': {
    en: 'Anti-Reflective Coating',
    fr: 'Revêtement Anti-Reflet',
  },
  
  // How To Pick
  'pick.subtitle': {
    en: 'SIMPLE STEPS TO YOUR PERFECT PAIR',
    fr: 'ÉTAPES SIMPLES VERS VOTRE PAIRE PARFAITE',
  },
  'pick.title': {
    en: 'How to Pick Your Pair',
    fr: 'Comment Choisir Votre Paire',
  },
  'pick.step1.title': {
    en: 'Choose Your Frame Style',
    fr: 'Choisissez Votre Style de Monture',
  },
  'pick.step1.desc': {
    en: 'Select your favorite style from dozens of options.',
    fr: 'Sélectionnez votre style préféré parmi des dizaines d\'options.',
  },
  'pick.step2.title': {
    en: 'Select Your Lens Type',
    fr: 'Sélectionnez Votre Type de Verre',
  },
  'pick.step2.desc': {
    en: 'Choose from clear, blue light filtering, or sun.',
    fr: 'Choisissez parmi clair, filtrant la lumière bleue ou soleil.',
  },
  'pick.step3.title': {
    en: 'Upload Your Prescription',
    fr: 'Téléchargez Votre Ordonnance',
  },
  'pick.step3.desc': {
    en: 'Send us your prescription for precision lenses.',
    fr: 'Envoyez-nous votre ordonnance pour des verres de précision.',
  },
  'pick.step4.title': {
    en: 'Receive Your Glasses',
    fr: 'Recevez Vos Lunettes',
  },
  'pick.step4.desc': {
    en: 'Delivery to your door with satisfaction guaranteed.',
    fr: 'Livraison à votre porte avec satisfaction garantie.',
  },
  'pick.button': {
    en: 'FIND YOUR PERFECT PAIR',
    fr: 'TROUVEZ VOTRE PAIRE PARFAITE',
  },
  
  // Featured Collection
  'collection.subtitle': {
    en: 'EXPLORE OUR EYEWEAR CATALOG',
    fr: 'EXPLOREZ NOTRE CATALOGUE DE LUNETTES',
  },
  'collection.title': {
    en: 'Featured Collection',
    fr: 'Collection en Vedette',
  },
  'collection.all': {
    en: 'All',
    fr: 'Tous',
  },
  'collection.optical': {
    en: 'Optical',
    fr: 'Optique',
  },
  'collection.sun': {
    en: 'Sunglasses',
    fr: 'Solaires',
  },
  'collection.kids': {
    en: 'Kids',
    fr: 'Enfants',
  },
  'collection.sports': {
    en: 'Sports',
    fr: 'Sports',
  },
  'collection.viewmore': {
    en: 'View More',
    fr: 'Voir Plus',
  },
  
  // Products
  'product.from': {
    en: 'From',
    fr: 'À partir de',
  },
  
  // Custom Sunglasses
  'custom.subtitle': {
    en: 'EXPRESS YOUR STYLE WITH OUR CUSTOMIZATION OPTIONS',
    fr: 'EXPRIMEZ VOTRE STYLE AVEC NOS OPTIONS DE PERSONNALISATION',
  },
  'custom.title': {
    en: 'Custom Designed Sunglasses',
    fr: 'Lunettes de Soleil Personnalisées',
  },
  'custom.desc': {
    en: 'Choose from a wide array of styles and customize your perfect pair of sunglasses with your choice of colors and lens options.',
    fr: 'Choisissez parmi une large gamme de styles et personnalisez votre paire parfaite de lunettes de soleil avec votre choix de couleurs et d\'options de lentilles.',
  },
  'custom.button': {
    en: 'CREATE YOUR CUSTOM PAIR',
    fr: 'CRÉEZ VOTRE PAIRE PERSONNALISÉE',
  },
  
  // Partners
  'partners.subtitle': {
    en: 'WE WORK WITH THE BEST IN THE INDUSTRY',
    fr: 'NOUS TRAVAILLONS AVEC LES MEILLEURS DE L\'INDUSTRIE',
  },
  'partners.title': {
    en: 'Our Brand Partners',
    fr: 'Nos Partenaires de Marque',
  },

  // Insurance Section
  'insurance.title': {
    en: 'Use Your Vision Benefits On The Perfect Pair',
    fr: 'Utilisez Vos Avantages Vision Pour La Paire Parfaite',
  },
  'insurance.description': {
    en: 'We accept most insurance plans to help you save on your eyewear purchase. Our experienced team will help you maximize your benefits.',
    fr: 'Nous acceptons la plupart des plans d\'assurance pour vous aider à économiser sur vos lunettes. Notre équipe expérimentée vous aidera à maximiser vos avantages.',
  },
  'insurance.browse': {
    en: 'Browse Glasses',
    fr: 'Parcourir Les Lunettes',
  },
  'insurance.learn': {
    en: 'Learn More',
    fr: 'En Savoir Plus',
  },
  // Frame Shapes
  'frame.title': {
    en: 'SHOP BY FRAME SHAPE',
    fr: 'ACHETEZ PAR FORME DE MONTURE',
  },
  'frame.subtitle': {
    en: 'Bloom into new frames with fresh shapes, colors, and patterns.',
    fr: 'Épanouissez-vous avec de nouvelles montures aux formes, couleurs et motifs frais.',
  },

  // Best Sellers
  'bestsellers.title': {
    en: 'BEST SELLERS ACROSS MOROCCO',
    fr: 'MEILLEURES VENTES AU MAROC',
  },
  'bestsellers.eyeglasses': {
    en: 'Eyeglasses',
    fr: 'Lunettes',
  },
  'bestsellers.sunglasses': {
    en: 'Sunglasses',
    fr: 'Lunettes de Soleil',
  },
  'bestsellers.designer': {
    en: 'Designer Glasses',
    fr: 'Lunettes de Designer',
  },
  'bestsellers.delivery': {
    en: 'Get it as early as Tue, Apr 15',
    fr: 'Recevez-le dès le mar. 15 avr.',
  },
  
  // Style Section
  'style.title': {
    en: 'Pick a style, any style:',
    fr: 'Choisissez un style, n\'importe quel style:',
  },
  'style.classic': {
    en: 'Classic',
    fr: 'Classique',
  },
  'style.ecofriendly': {
    en: 'Eco Friendly',
    fr: 'Écologique',
  },
  'style.artsy': {
    en: 'Artsy',
    fr: 'Artistique',
  },
  'style.retro': {
    en: 'Retro',
    fr: 'Rétro',
  },
  'style.streetstyle': {
    en: 'Street Style',
    fr: 'Style de Rue',
  },
  'style.bold': {
    en: 'Bold',
    fr: 'Audacieux',
  },
  
  // Hero Section New
  'hero.shopmen': {
    en: 'Shop Men',
    fr: 'Pour Hommes',
  },
  'hero.shopwomen': {
    en: 'Shop Women',
    fr: 'Pour Femmes',
  },
  'hero.learnmore': {
    en: 'Learn more about our process',
    fr: 'En savoir plus sur notre processus',
  },
  
  // Reviews
  'reviews.title': {
    en: 'Client Reviews',
    fr: 'Avis des Clients',
  },
  'reviews.content': {
    en: 'I absolutely love my new glasses! The blue light filtering has made a huge difference in my eye fatigue during long work days. The frame quality is excellent and the style is exactly what I wanted.',
    fr: 'J\'adore mes nouvelles lunettes ! Le filtrage de la lumière bleue a fait une énorme différence dans ma fatigue oculaire pendant les longues journées de travail. La qualité de la monture est excellente et le style est exactement ce que je voulais.',
  },
  'reviews.name': {
    en: 'Sarah Kaufman',
    fr: 'Sarah Kaufman',
  },
  
  // Newsletter
  'newsletter.title': {
    en: 'Join Our Newsletter',
    fr: 'Rejoignez Notre Newsletter',
  },
  'newsletter.placeholder': {
    en: 'Your Email Address',
    fr: 'Votre Adresse Email',
  },
  'newsletter.button': {
    en: 'SUBSCRIBE',
    fr: 'S\'ABONNER',
  },
  
  // Footer
  'footer.shop': {
    en: 'Shop',
    fr: 'Boutique',
  },
  'footer.eyeglasses': {
    en: 'Eyeglasses',
    fr: 'Lunettes de vue',
  },
  'footer.sunglasses': {
    en: 'Sunglasses',
    fr: 'Lunettes de soleil',
  },
  'footer.bluelight': {
    en: 'Blue Light',
    fr: 'Lumière Bleue',
  },
  'footer.help': {
    en: 'Help',
    fr: 'Aide',
  },
  'footer.faq': {
    en: 'FAQ',
    fr: 'FAQ',
  },
  'footer.shipping': {
    en: 'Shipping',
    fr: 'Livraison',
  },
  'footer.returns': {
    en: 'Returns',
    fr: 'Retours',
  },
  'footer.about': {
    en: 'About',
    fr: 'À propos',
  },
  'footer.story': {
    en: 'Our Story',
    fr: 'Notre Histoire',
  },
  'footer.press': {
    en: 'Press',
    fr: 'Presse',
  },
  'footer.careers': {
    en: 'Careers',
    fr: 'Carrières',
  },
  'footer.copyright': {
    en: '© 2025 Luxe Optique. All rights reserved.',
    fr: '© 2025 Luxe Optique. Tous droits réservés.',
  },
  
  // Shipping Info Banner
  'shipping.delivery': {
    en: 'Delivery within all of Morocco',
    fr: 'Livraison partout au Maroc',
  },
  'shipping.free': {
    en: 'Free shipping',
    fr: 'Livraison gratuite',
  },
  'shipping.returns': {
    en: 'Free 30-day returns',
    fr: 'Retours gratuits sous 30 jours',
  },
  'shipping.contacts': {
    en: 'We also offer contacts!',
    fr: 'Nous proposons aussi des lentilles!',
  },
};

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Update document language when language changes
  useEffect(() => {
    // Update the html lang attribute
    document.documentElement.lang = language;
    
    // Store the selected language in local storage
    localStorage.setItem('language', language);
  }, [language]);
  
  // Check for saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Translation function
  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Missing translation key: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
