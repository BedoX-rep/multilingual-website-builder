
import React from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

const InsuranceBenefitsSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/sectionassuranceimage.png" 
          alt="Insurance Benefits" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Design */}
      {isMobile ? (
        <div className="luxury-container relative z-10 py-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-serif font-medium mb-4 text-center">
              USE YOUR ASSURANCE ON THE PERFECT PAIR
            </h2>
            <p className="text-base text-center mb-8">
              At Lens Optique we accept most insurance plans, including:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { src: '/lovable-uploads/assurancebrandsmaghreb/allianz-logo.png', name: 'Allianz' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/cnss.png', name: 'CNSS' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/rma.png', name: 'RMA' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/sanlam.png', name: 'Sanlam' },
              ].map((insurance, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img 
                    src={insurance.src} 
                    alt={insurance.name}
                    className="w-full h-10 object-contain"
                  />
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-black text-white font-medium text-sm uppercase tracking-wider rounded-lg hover:bg-gray-900 transition-colors">
              Find Out More
            </button>
          </div>
        </div>
      ) : (
        /* Desktop Design */
        <div className="relative z-10 pr-0">
          <div className="max-w-2xl text-black ml-auto mr-16 pr-8">
            <h2 className="text-2xl md:text-4xl font-sans font-bold text-center md:text-left mb-8">
              USE YOUR ASSURANCE ON THE PERFECT PAIR
            </h2>
            <p className="text-lg mb-12 leading-relaxed">
              At Lens Optique we accept most insurance plans, including:
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { src: '/lovable-uploads/assurancebrandsmaghreb/allianz-logo.png', name: 'Allianz' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/cnss.png', name: 'CNSS' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/rma.png', name: 'RMA' },
                { src: '/lovable-uploads/assurancebrandsmaghreb/sanlam.png', name: 'Sanlam' },
              ].map((insurance, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={insurance.src} 
                    alt={insurance.name}
                    className="w-full h-12 object-contain"
                  />
                </div>
              ))}
            </div>

            <button className="px-12 py-4 bg-black text-white font-medium text-base uppercase tracking-wider rounded-lg hover:bg-gray-900 transition-colors">
              Find Out More
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default InsuranceBenefitsSection;
