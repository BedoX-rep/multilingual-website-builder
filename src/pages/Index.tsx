
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  HeroSection,
  ShippingBanner,
  CollectionsSection,
  BestSellersSection,
  FrameShapeSection,
  HowToPickSection,
  InsuranceBenefitsSection,
  BrandPartnersSection,
  ClientReviewsSection
} from '../components/home';

// Hero section images
const heroImage = "/lovable-uploads/herosectionbg5.jpg";
const mobileHeroImage = "/lovable-uploads/mobileimg.png";

// Process step icons
const frameIcon = "/lovable-uploads/5c4c396f-836b-49e7-8833-be31c7cda22e.png";
const lensIcon = "/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png";
const prescriptionIcon = "/lovable-uploads/af178ea4-8b63-422a-9dba-cd74c382cd99.png";
const deliveryIcon = "/lovable-uploads/29f9550c-ba8d-45fe-8e22-1ffb62de3f75.png";

// Product images
const products = [
  {
    id: '1',
    name: 'Classic Frames',
    price: 95,
    image: '/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png',
    category: 'Optical'
  },
  {
    id: '2',
    name: 'Premium Shades',
    price: 120,
    image: '/lovable-uploads/1551cd86-4f1b-4880-afa5-1ac4eaa6aeb0.png',
    category: 'Sunglasses'
  },
  {
    id: '3',
    name: 'Sport Glasses',
    price: 150,
    image: '/lovable-uploads/29f9550c-ba8d-45fe-8e22-1ffb62de3f75.png',
    category: 'Sports'
  }
];

// Brand logos
const brandLogos = [
  {
    name: 'Brand 1',
    logo: 'https://via.placeholder.com/120x60?text=Brand+1'
  },
  {
    name: 'Brand 2',
    logo: 'https://via.placeholder.com/120x60?text=Brand+2'
  },
  {
    name: 'Brand 3',
    logo: 'https://via.placeholder.com/120x60?text=Brand+3'
  },
  {
    name: 'Brand 4',
    logo: 'https://via.placeholder.com/120x60?text=Brand+4'
  }
];

const Index: React.FC = () => {
  const bestSellers = [
    {
      id: '1',
      name: 'Esme',
      price: 95,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6 (copy) 1.png',
      rating: 4.8,
      reviews: 425,
      colors: ['#8B4513', '#CCCCCC', '#2E4F4F', '#4F6F52']
    },
    {
      id: '2',
      name: 'Baird',
      price: 145,
      image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      rating: 4.7,
      reviews: 312,
      colors: ['#000000', '#FF0000', '#E6F4F1', '#435334']
    },
    {
      id: '3',
      name: 'Durand',
      price: 95,
      image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
      rating: 4.9,
      reviews: 567,
      colors: ['#8B4513', '#000000', '#2E4F4F', '#CCCCCC']
    },
    {
      id: '4',
      name: 'Brady',
      price: 95,
      image: '/lovable-uploads/productmockup/d29bdfc9-8c61-4bd0-8a10-c0ef0355df3b.png',
      rating: 4.6,
      reviews: 289,
      colors: ['#7B66FF', '#CCCCCC', '#000000']
    },
    {
      id: '5',
      name: 'Claire',
      price: 115,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6 (copy).png',
      rating: 4.8,
      reviews: 342,
      colors: ['#8B4513', '#000000', '#4F6F52']
    },
    {
      id: '6',
      name: 'Felix',
      price: 125,
      image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546 (copy).png',
      rating: 4.7,
      reviews: 278,
      colors: ['#435334', '#CCCCCC', '#2E4F4F']
    },
    {
      id: '7',
      name: 'Grace',
      price: 105,
      image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b (copy).png',
      rating: 4.9,
      reviews: 456,
      colors: ['#000000', '#8B4513', '#4F6F52']
    },
    {
      id: '8',
      name: 'Henry',
      price: 135,
      image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
      rating: 4.8,
      reviews: 312,
      colors: ['#2E4F4F', '#CCCCCC', '#435334']
    }
  ];

  // This array defines the order of sections - you can easily reorder them by changing this array
  const sections = [
    { component: <HeroSection heroImage={heroImage} mobileHeroImage={mobileHeroImage} />, id: 'hero' },
    { component: <ShippingBanner />, id: 'shipping-banner' },
    { component: <BestSellersSection bestSellers={bestSellers} />, id: 'bestsellers' },
    { component: <CollectionsSection />, id: 'collections' },
    { component: <HowToPickSection />, id: 'how-to-pick' },
    { component: <FrameShapeSection />, id: 'frame-shapes' },
    { component: <InsuranceBenefitsSection />, id: 'insurance-benefits' },
    { component: <BrandPartnersSection />, id: 'brand-partners' },
    { component: <ClientReviewsSection />, id: 'client-reviews' }
  ];

  return (
    <div className="font-sans">
      <Header />
      
      {/* Render all sections with uniform 8px spacing */}
      <div>
        <section>{sections[0].component}</section>
        {sections.slice(1).map(section => (
          <section key={section.id} className="py-2">
            {section.component}
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
