
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as HomeComponents from '../components/home';
import { TooltipWrapper } from '../components/TooltipWrapper';

const Index: React.FC = () => {
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
          <HomeComponents.CollectionsSection />
          <HomeComponents.BestSellersSection />
          <HomeComponents.FrameShapeSection />
          <HomeComponents.HowToPickSection />
          <HomeComponents.InsuranceBenefitsSection />
          <HomeComponents.BrandPartnersSection />
          <HomeComponents.ClientReviewsSection />
        </main>
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default Index;
