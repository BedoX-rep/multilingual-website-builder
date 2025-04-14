
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
  lenses: {
    selectLenses: "Select Lenses",
    customizeLenses: "Customize Your Lenses",
    chooseVisionNeed: "Choose your vision need",
    enterPrescription: "Enter your prescription",
    selectLensType: "Select lens type",
    selectLensThickness: "Select lens thickness",
    reviewOrder: "Review your order",
    visionNeedExplanation: "Based on your prescription, choose your lens from the options below or choose non-prescription if you want visual comfort without vision correction.",
    learnMoreAboutLensDifferences: "Learn more about lens differences",
    singleVisionLenses: "Single vision lenses",
    singleVisionDescription: "Corrects one field of vision (near or distance).",
    nonPrescriptionLenses: "Non-prescription lenses",
    nonPrescriptionDescription: "Add premium and protective lens treatments, without vision correction.",
    frameOnly: "Frame only",
    frameOnlyDescription: "Buy your frame now, add prescription lenses in store.",
    selectLensTypeExplanation: "Choose the type of lens that best suits your needs.",
    selectLensThicknessExplanation: "Choose the thickness of your lenses based on your prescription strength.",
    reviewOrderExplanation: "Please review your selections before adding to cart.",
    clearLens: "Clear lenses",
    clearLensDescription: "Standard lenses with no additional features.",
    blueLightLens: "Blue light filtering",
    blueLightLensDescription: "Reduces eye strain from digital screens.",
    transitionLens: "Transition lenses",
    transitionLensDescription: "Darkens in sunlight, clear indoors.",
    standardThickness: "Standard thickness",
    standardThicknessDescription: "Recommended for light prescriptions.",
    thinLens: "Thin lenses",
    thinLensDescription: "Thinner and lighter, good for medium prescriptions.",
    ultraThinLens: "Ultra-thin lenses",
    ultraThinLensDescription: "Our thinnest, lightest lenses for strong prescriptions.",
    orderSummary: "Order Summary",
    frame: "Frame",
    visionNeed: "Vision Need",
    prescription: "Prescription",
    lensType: "Lens Type",
    lensThickness: "Lens Thickness",
    totalPrice: "Total Price",
    rightEye: "Right Eye",
    leftEye: "Left Eye",
    useSavedPrescription: "Use saved prescription",
    pupillaryDistance: "Pupillary Distance",
    sphere: "Sphere",
    cylinder: "Cylinder",
    axis: "Axis",
    priceAdditional: "+${price}",
    included: "Included",
    next: "Next",
    back: "Back",
    addToCart: "Add to Cart"
  },
  common: {
    back: "Back",
    continue: "Continue"
  },
  cart: {
    addToCart: "Add to Cart",
    itemAdded: "Item Added",
    hasBeenAddedToCart: "has been added to your cart"
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
  },
  product: {
    details: "Details",
    measurements: "Measurements",
    prescription: "Prescription",
    selectLenses: "Select Lenses",
    selectColor: "Select Color",
    addToFavorites: "Add to Favorites",
    addedToFavorites: "Added to Favorites",
    hasBeenAddedToFavorites: "has been added to your favorites",
    lensSelection: "Lens Selection",
    pleaseSelectLenses: "Please choose your lens options",
    reviews: "Reviews",
    includes: "Includes",
    size: "Size",
    material: "Material",
    weight: "Weight",
    rim: "Rim",
    shape: "Shape",
    range: "Range",
    prescriptionRange: "Prescription Range",
    progressive: "Progressive",
    bifocal: "Bifocal",
    readers: "Readers",
    share: "Share",
    code: "Product Code"
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
  lenses: {
    selectLenses: "Choisir les Verres",
    chooseVisionNeed: "Choisissez votre besoin de vision",
    enterPrescription: "Entrez votre prescription",
    selectLensType: "Sélectionnez le type de verre",
    selectLensThickness: "Sélectionnez l'épaisseur des verres",
    reviewOrder: "Vérifiez votre commande",
    visionNeedExplanation: "En fonction de votre prescription, choisissez vos verres parmi les options ci-dessous ou choisissez des verres sans prescription si vous souhaitez un confort visuel sans correction de la vision.",
    learnMoreAboutLensDifferences: "En savoir plus sur les différences entre les verres",
    singleVisionLenses: "Verres unifocaux",
    singleVisionDescription: "Corrige un champ de vision (près ou loin).",
    nonPrescriptionLenses: "Verres sans prescription",
    nonPrescriptionDescription: "Ajoutez des traitements de verres premium et protecteurs, sans correction de la vision.",
    frameOnly: "Monture seule",
    frameOnlyDescription: "Achetez votre monture maintenant, ajoutez des verres de prescription en magasin.",
    selectLensTypeExplanation: "Choisissez le type de verre qui convient le mieux à vos besoins.",
    selectLensThicknessExplanation: "Choisissez l'épaisseur de vos verres en fonction de la force de votre prescription.",
    reviewOrderExplanation: "Veuillez vérifier vos sélections avant d'ajouter au panier.",
    clearLens: "Verres transparents",
    clearLensDescription: "Verres standard sans fonctionnalités supplémentaires.",
    blueLightLens: "Filtrage de lumière bleue",
    blueLightLensDescription: "Réduit la fatigue oculaire des écrans numériques.",
    transitionLens: "Verres photochromiques",
    transitionLensDescription: "S'assombrissent au soleil, transparents à l'intérieur.",
    standardThickness: "Épaisseur standard",
    standardThicknessDescription: "Recommandé pour les prescriptions légères.",
    thinLens: "Verres fins",
    thinLensDescription: "Plus fins et plus légers, bons pour les prescriptions moyennes.",
    ultraThinLens: "Verres ultra-fins",
    ultraThinLensDescription: "Nos verres les plus fins et légers pour les prescriptions fortes.",
    orderSummary: "Résumé de Commande",
    frame: "Monture",
    visionNeed: "Besoin Visuel",
    prescription: "Prescription",
    lensType: "Type de Verre",
    lensThickness: "Épaisseur des Verres",
    totalPrice: "Prix Total",
    rightEye: "Œil Droit",
    leftEye: "Œil Gauche",
    usingSavedPrescription: "Utilisation de votre prescription enregistrée"
  },
  common: {
    back: "Retour",
    continue: "Continuer"
  },
  cart: {
    addToCart: "Ajouter au Panier",
    itemAdded: "Article Ajouté",
    hasBeenAddedToCart: "a été ajouté à votre panier"
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
  },
  product: {
    details: "Détails",
    measurements: "Dimensions",
    prescription: "Prescription",
    selectLenses: "Choisir les Verres",
    selectColor: "Sélectionner la Couleur",
    addToFavorites: "Ajouter aux Favoris",
    addedToFavorites: "Ajouté aux Favoris",
    hasBeenAddedToFavorites: "a été ajouté à vos favoris",
    lensSelection: "Sélection de Verres",
    pleaseSelectLenses: "Veuillez choisir vos options de verres",
    reviews: "Avis",
    includes: "Inclus",
    size: "Taille",
    material: "Matériau",
    weight: "Poids",
    rim: "Monture",
    shape: "Forme",
    range: "Gamme",
    prescriptionRange: "Gamme de Prescription",
    progressive: "Progressif",
    bifocal: "Bifocal",
    readers: "Loupes",
    share: "Partager",
    code: "Code Produit"
  }
};

// Define resources type to help TypeScript
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      en: typeof enTranslations;
      fr: typeof frTranslations;
    };
  }
}

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
