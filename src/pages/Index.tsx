
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeComponents from '../components/home';
import { TooltipWrapper } from '../components/TooltipWrapper';

const Index: React.FC = () => {
  return (
    <TooltipWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HomeComponents />
        </main>
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default Index;
