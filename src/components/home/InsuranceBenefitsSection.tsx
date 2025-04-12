
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
      </div>

      <div className="luxury-container relative z-10">
        <div className="max-w-2xl text-black ml-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
            Unlock Exclusive Benefits with Our Insurance Partners
          </h2>
          <p className="text-lg text-gray-800 mb-12 leading-relaxed">
            We've partnered with leading insurance providers to make quality eyewear more accessible and affordable. Discover how your insurance plan can help cover the cost of your next pair of glasses or contacts.
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

          <div className="flex flex-wrap gap-6 justify-start">
            <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
              Browse Insurance Options
            </button>
            <button className="px-8 py-3 border-2 border-black bg-black text-white font-medium hover:bg-gray-900 transition-colors rounded-lg">
              Learn More About Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceBenefitsSection;
