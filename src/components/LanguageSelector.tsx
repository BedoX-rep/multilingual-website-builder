
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Globe className="w-4 h-4" />
      <div className="flex items-center space-x-1">
        <button 
          onClick={() => changeLanguage('en')} 
          className={`text-xs font-medium px-1 py-0.5 ${currentLanguage === 'en' ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
        >
          EN
        </button>
        <span className="text-xs text-gray-400">|</span>
        <button 
          onClick={() => changeLanguage('fr')} 
          className={`text-xs font-medium px-1 py-0.5 ${currentLanguage === 'fr' ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
        >
          FR
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
