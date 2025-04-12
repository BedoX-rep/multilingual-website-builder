
import React from 'react';

const ClientReviewsSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="luxury-container">
        <h2 className="section-title text-center">
          What Our Clients Say
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-12 mt-16">
          <div className="text-center">
            <p className="text-xl text-gray-600 italic mb-8 font-serif">
              "I'm so happy with my new glasses! The quality is excellent, and the customer service was outstanding. I highly recommend this store to anyone looking for stylish and affordable eyewear."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Kaufman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-serif text-lg">Sarah Kaufman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
