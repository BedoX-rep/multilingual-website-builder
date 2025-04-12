
import React, { createContext, useState, useContext, useEffect } from "react";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Translation dictionaries
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "home": "Home",
    "products": "Products",
    "about": "About",
    "contact": "Contact",
    
    // Hero Section
    "hero.title": "See Better, Look Better",
    "hero.subtitle": "High-quality eyewear for every style",
    "hero.cta": "Shop Now",
    
    // Best Sellers Section
    "bestsellers.title": "Best Sellers",
    "bestsellers.subtitle": "Discover our most popular frames",
    "bestsellers.viewAll": "View All",
    
    // Frame Shape Section
    "frameshapes.title": "Find Your Perfect Frame Shape",
    "frameshapes.subtitle": "Discover frames that complement your face",
    
    // Collections Section
    "collections.title": "New Collections",
    "collections.subtitle": "Explore our latest arrivals",
    
    // Insurance Benefits Section
    "insurance.title": "Use Your Vision Insurance",
    "insurance.subtitle": "We accept most major insurance plans",
    "insurance.learnMore": "Learn More",
    
    // Custom Sunglasses Section
    "sunglasses.title": "Custom Sunglasses",
    "sunglasses.subtitle": "Design your perfect pair",
    "sunglasses.cta": "Customize Now",
    
    // How To Pick Section
    "howTopick.title": "How to Pick the Perfect Pair",
    "howTopick.step1": "Select Your Frame",
    "howTopick.step2": "Choose Your Lenses",
    "howTopick.step3": "Personalize",
    "howTopick.step4": "Fast Shipping",
    
    // Client Reviews Section
    "reviews.title": "What Our Clients Say",
    "reviews.viewAll": "View All Reviews",
    
    // Shipping Banner
    "shipping.message": "Free Shipping on Orders Over $50",
    
    // Footer
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.stores": "Our Stores",
    "footer.help": "Help",
    "footer.faq": "FAQ",
    "footer.returns": "Returns",
    "footer.warranty": "Warranty",
    "footer.contact": "Contact Us",
    "footer.legal": "Legal",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2025 EyeWear. All rights reserved.",
    
    // Common
    "viewProduct": "View Product",
    "addToCart": "Add to Cart"
  },
  fr: {
    // Header
    "home": "Accueil",
    "products": "Produits",
    "about": "À propos",
    "contact": "Contact",
    
    // Hero Section
    "hero.title": "Voir Mieux, Paraître Mieux",
    "hero.subtitle": "Lunettes de haute qualité pour tous les styles",
    "hero.cta": "Acheter Maintenant",
    
    // Best Sellers Section
    "bestsellers.title": "Meilleures Ventes",
    "bestsellers.subtitle": "Découvrez nos montures les plus populaires",
    "bestsellers.viewAll": "Voir Tout",
    
    // Frame Shape Section
    "frameshapes.title": "Trouvez Votre Forme Parfaite",
    "frameshapes.subtitle": "Découvrez des montures qui complètent votre visage",
    
    // Collections Section
    "collections.title": "Nouvelles Collections",
    "collections.subtitle": "Explorez nos dernières arrivées",
    
    // Insurance Benefits Section
    "insurance.title": "Utilisez Votre Assurance Vision",
    "insurance.subtitle": "Nous acceptons la plupart des plans d'assurance majeurs",
    "insurance.learnMore": "En Savoir Plus",
    
    // Custom Sunglasses Section
    "sunglasses.title": "Lunettes de Soleil Personnalisées",
    "sunglasses.subtitle": "Concevez votre paire parfaite",
    "sunglasses.cta": "Personnaliser Maintenant",
    
    // How To Pick Section
    "howTopick.title": "Comment Choisir la Paire Parfaite",
    "howTopick.step1": "Sélectionnez Votre Monture",
    "howTopick.step2": "Choisissez Vos Verres",
    "howTopick.step3": "Personnalisez",
    "howTopick.step4": "Livraison Rapide",
    
    // Client Reviews Section
    "reviews.title": "Avis de Nos Clients",
    "reviews.viewAll": "Voir Tous les Avis",
    
    // Shipping Banner
    "shipping.message": "Livraison Gratuite pour les Commandes de Plus de 50€",
    
    // Footer
    "footer.company": "Entreprise",
    "footer.about": "À Propos de Nous",
    "footer.careers": "Carrières",
    "footer.stores": "Nos Magasins",
    "footer.help": "Aide",
    "footer.faq": "FAQ",
    "footer.returns": "Retours",
    "footer.warranty": "Garantie",
    "footer.contact": "Contactez-Nous",
    "footer.legal": "Mentions Légales",
    "footer.terms": "Conditions d'Utilisation",
    "footer.privacy": "Politique de Confidentialité",
    "footer.copyright": "© 2025 EyeWear. Tous droits réservés.",
    
    // Common
    "viewProduct": "Voir le Produit",
    "addToCart": "Ajouter au Panier"
  }
};

// Create the language context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get the stored language from localStorage, default to English
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    return storedLanguage === "fr" ? "fr" : "en";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
