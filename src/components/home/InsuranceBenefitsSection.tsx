
import React from 'react';

const InsuranceBenefitsSection: React.FC = () => {
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

      <div className="luxury-container relative z-10">
        <div className="max-w-2xl text-black ml-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
            USE YOUR ASSURANCE ON THE PERFECT PAIR
          </h2>
          <p className="text-lg text-gray-800 mb-12 leading-relaxed">
            At Lens Optique we accept most insurance plans, including:
          </p>

          {/* Insurance Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { src: '/lovable-uploads/assurancebrandsmaghreb/allianz-logo.png', name: 'Allianz' },
              { src: '/lovable-uploads/assurancebrandsmaghreb/cnss.png', name: 'CNSS' },
              { src: '/lovable-uploads/assurancebrandsmaghreb/rma.png', name: 'RMA' },
              { src: '/lovable-uploads/assurancebrandsmaghreb/sanlam.png', name: 'Sanlam' },
            ].map((insurance, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={insurance.src} 
                  alt={insurance.name}
                  className="w-full h-12 object-contain"
                />
              </div>
            ))}
          </div>

          <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
            Find Out More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceBenefitsSection;
