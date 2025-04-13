
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFormattedTranslation } from '../utils/translationHelper';
import { TooltipWrapper } from '../components/TooltipWrapper';

const About: React.FC = () => {
  const { formattedT: t } = useFormattedTranslation();
  
  return (
    <TooltipWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-24 mt-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">{t("nav.about")}</h1>
            
            {/* Content goes here */}
            <div className="prose prose-lg mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                Praesent non justo at nisi tincidunt luctus. Phasellus vel risus eget 
                nulla tristique laoreet.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Aenean at velit nibh. Maecenas vel mauris vitae libero 
                tempor euismod.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default About;
