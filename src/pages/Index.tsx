import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as HomeComponents from '../components/home';
import { TooltipWrapper } from '../components/TooltipWrapper';

const Index: React.FC = () => {
  // Mock data for BestSellers section
  const bestSellers = [
    {
      id: "1",
      name: "Clearsight Round",
      price: 89.99,
      image: "/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png",
      rating: 4.8,
      reviews: 432,
      colors: ["#000000", "#6B4226", "#C13B3B", "#1E5162"]
    },
    {
      id: "2",
      name: "Aviator Classic",
      price: 119.99,
      image: "/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png",
      rating: 4.9,
      reviews: 621,
      colors: ["#C19A6B", "#000000", "#4A4A4A"]
    },
    {
      id: "3",
      name: "Urban Rectangles",
      price: 99.99,
      image: "/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png", 
      rating: 4.7,
      reviews: 389,
      colors: ["#000000", "#3A6EA5", "#6B4226", "#4A4A4A"]
    },
    {
      id: "4",
      name: "Designer Cat Eye",
      price: 129.99,
      image: "/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png",
      rating: 4.8,
      reviews: 512,
      colors: ["#C13B3B", "#000000", "#4A4A4A", "#C19A6B"]
    }
  ];

  return (
    <TooltipWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HomeComponents.HeroSection 
            heroImage="/lovable-uploads/herosectionbg5.jpg" 
            mobileHeroImage="/lovable-uploads/mobileimg3.png" 
          />
          <HomeComponents.ShippingBanner />
          <div className="py-16">
            <HomeComponents.CollectionsSection />
          </div>
          <div className="py-16">
            <HomeComponents.BestSellersSection bestSellers={bestSellers} />
          </div>
          <div className="py-16">
            <HomeComponents.FrameShapeSection />
          </div>
          <div className="py-16">
            <HomeComponents.HowToPickSection />
          </div>
          <div className="py-16">
            <HomeComponents.InsuranceBenefitsSection />
          </div>
          <div className="py-16">
            <HomeComponents.BrandPartnersSection />
          </div>
          <div className="py-16">
            <HomeComponents.ClientReviewsSection />
          </div>
        </main>
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default Index;