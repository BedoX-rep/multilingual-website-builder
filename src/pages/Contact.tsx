
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">{t('contact.title')}</h1>
          <p className="mb-4">{t('contact.content')}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
