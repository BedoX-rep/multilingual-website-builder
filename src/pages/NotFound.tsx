
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="font-sans">
      <Header />
      
      <section className="min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-gray-900">{t('404.title')}</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-600">{t('404.subtitle')}</h2>
          <p className="mb-8 text-gray-600 max-w-md mx-auto">
            {t('404.description')}
          </p>
          <Link to="/" className="btn-primary">
            {t('404.button')}
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
