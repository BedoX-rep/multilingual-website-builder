
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFormattedTranslation } from '../utils/translationHelper';
import { TooltipWrapper } from '../components/TooltipWrapper';

const NotFound: React.FC = () => {
  const { formattedT: t } = useFormattedTranslation();
  
  return (
    <TooltipWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">{t("404.title")}</h1>
            <h2 className="text-3xl font-medium mb-6">{t("404.subtitle")}</h2>
            <p className="max-w-md mx-auto mb-8 text-gray-600">
              {t("404.description")}
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              {t("404.button")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default NotFound;
