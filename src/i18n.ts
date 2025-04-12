
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  nav: {
    home: "Home",
    products: "Products",
    about: "About Us",
    contact: "Contact"
  },
  hero: {
    title: "See better, look better",
    subtitle: "Premium eyewear for every style",
    cta: "Shop Now"
  },
  collection: {
    title: "Our Collection",
    all: "All",
    optical: "Optical",
    sun: "Sunglasses",
    kids: "Kids"
  },
  bestsellers: {
    title: "Best Sellers",
    viewAll: "View All"
  },
  footer: {
    copyright: "© 2025 Lens Optique. All rights reserved.",
    shop: "Shop",
    eyeglasses: "Eyeglasses",
    sunglasses: "Sunglasses",
    bluelight: "BlueLight Glasses",
    help: "Help",
    faq: "FAQ",
    shipping: "Shipping",
    returns: "Returns",
    about: "About",
    story: "Our Story",
    press: "Press",
    careers: "Careers"
  },
  newsletter: {
    title: "Subscribe to Our Newsletter",
    placeholder: "Your email address",
    button: "Subscribe"
  },
  404: {
    title: "404",
    subtitle: "Page Not Found",
    description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    button: "Return to Homepage"
  }
};

// French translations
const frTranslations = {
  nav: {
    home: "Accueil",
    products: "Produits",
    about: "À Propos",
    contact: "Contact"
  },
  hero: {
    title: "Voir mieux, être mieux",
    subtitle: "Lunettes de qualité pour tous les styles",
    cta: "Acheter"
  },
  collection: {
    title: "Notre Collection",
    all: "Tous",
    optical: "Optique",
    sun: "Solaires",
    kids: "Enfants"
  },
  bestsellers: {
    title: "Meilleures Ventes",
    viewAll: "Voir Tout"
  },
  footer: {
    copyright: "© 2025 Lens Optique. Tous droits réservés.",
    shop: "Boutique",
    eyeglasses: "Lunettes",
    sunglasses: "Lunettes de Soleil",
    bluelight: "Lunettes Anti-Lumière Bleue",
    help: "Aide",
    faq: "FAQ",
    shipping: "Livraison",
    returns: "Retours",
    about: "À Propos",
    story: "Notre Histoire",
    press: "Presse",
    careers: "Carrières"
  },
  newsletter: {
    title: "Abonnez-vous à Notre Newsletter",
    placeholder: "Votre adresse e-mail",
    button: "S'abonner"
  },
  404: {
    title: "404",
    subtitle: "Page Non Trouvée",
    description: "La page que vous cherchez a peut-être été supprimée, renommée ou est temporairement indisponible.",
    button: "Retour à l'Accueil"
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
