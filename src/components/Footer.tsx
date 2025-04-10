
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-2xl font-medium mb-2">{t('newsletter.title')}</h3>
          <p className="text-gray-400 mb-6">Stay updated with our latest products, promotions and eyecare tips.</p>
          <form className="flex flex-col sm:flex-row w-full gap-4">
            <input 
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 min-w-0 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 transition-colors outline-none text-sm"
              required
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors rounded-lg flex items-center justify-center gap-2"
            >
              {t('newsletter.button')}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="font-serif text-2xl font-medium mb-6 inline-block">
              Lens Optique
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Premium eyewear for the modern lifestyle. Designed for comfort, style, and functionality with cutting-edge lens technology.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 text-blue-400">{t('footer.shop')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.eyeglasses')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.sunglasses')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.bluelight')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 text-blue-400">{t('footer.help')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.returns')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 text-blue-400">{t('footer.about')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.story')}
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.press')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.careers')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Payment */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
          
          <div className="flex flex-wrap gap-4">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-6 w-auto opacity-75" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-6 w-auto opacity-75" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="Amex" className="h-6 w-auto opacity-75" />
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968749.png" alt="PayPal" className="h-6 w-auto opacity-75" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
