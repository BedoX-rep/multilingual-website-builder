
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="font-serif text-9xl font-bold mb-2 text-blue-600 opacity-80">404</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            
            <h2 className="text-2xl md:text-3xl mb-4 text-gray-800 font-medium">Page Not Found</h2>
            <p className="mb-10 text-gray-600 max-w-lg mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary flex items-center justify-center gap-2 group">
                <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
                Return to Homepage
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn-outline flex items-center justify-center gap-2 group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
