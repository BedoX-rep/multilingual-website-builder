
import React from 'react';

const HowToPickSection: React.FC = () => {
  return (
    <section id="how-to-pick" className="py-8 md:py-12 bg-[#F5F7F9]">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-sans font-bold text-center mb-8 md:mb-16">
          CUSTOMIZING YOUR GLASSES HAS NEVER BEEN SO EASY
        </h2>

        {/* Mobile Design */}
        <div className="md:hidden space-y-4">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-gray-300 h-full"></div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative flex items-start">
                <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Frame_icon.png" alt="Find your pair" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-12">
                  <h3 className="text-base font-medium mb-1">1 | Find your pair</h3>
                  <p className="text-sm text-black">Discover our designer eyewear and select your favorite frame.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start">
                <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Lenses_icon.png" alt="Select your lenses" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-12">
                  <h3 className="text-base font-medium mb-1">2 | Select your lenses</h3>
                  <p className="text-sm text-black">Choose your vision need and add your prescription.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start">
                <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Personalize_icon.png" alt="Personalize your lenses" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-12">
                  <h3 className="text-base font-medium mb-1">3 | Personalize your lenses</h3>
                  <p className="text-sm text-black">Select lens type and thickness, then add specialized treatments.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start">
                <div className="absolute left-6 -translate-x-1/2 bg-[#F5F7F9]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Shipping_icon.png" alt="Complete your purchase" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-12">
                  <h3 className="text-base font-medium mb-1">4 | Complete your purchase</h3>
                  <p className="text-sm text-black">We ensure 100% satisfaction with our 30 day happiness guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-12">
            Prepare your prescription, and sync your insurance at any point during selection to apply your vision benefits.
          </p>

          <div className="space-y-3">
            <button className="w-full py-4 bg-black text-white rounded-md font-medium">
              SHOP EYEWEAR
            </button>
            <button className="w-full py-4 bg-black text-white rounded-md font-medium">
              DISCOVER LENSES
            </button>
          </div>
        </div>

        {/* Desktop Design */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[60px] border-t-2 border-dashed border-gray-300 w-full"></div>

            <div className="grid grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="mb-16">
                  <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm relative z-10">
                    <img src="/lovable-uploads/iconspair/X_Frame_icon.png" alt="Find your pair" className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">1 | Find your pair</h3>
                <p className="text-gray-600 text-sm">Discover our designer eyewear and select your favorite frame.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="mb-16">
                  <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Lenses_icon.png" alt="Select your lenses" className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">2 | Select your lenses</h3>
                <p className="text-gray-600 text-sm">Choose your vision need and add your prescription.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="mb-16">
                  <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Personalize_icon.png" alt="Personalize your lenses" className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">3 | Personalize your lenses</h3>
                <p className="text-gray-600 text-sm">Select lens type and thickness, then add specialized treatments.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="mb-16">
                  <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm">
                    <img src="/lovable-uploads/iconspair/X_Shipping_icon.png" alt="Complete your purchase" className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">4 | Complete your purchase</h3>
                <p className="text-gray-600 text-sm">We ensure 100% satisfaction with our 30 day happiness guarantee.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-12">
            Prepare your prescription, and sync your insurance at any point during selection to apply your vision benefits.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button className="px-12 py-3 bg-black text-white rounded-md font-medium">
              SHOP EYEWEAR
            </button>
            <button className="px-12 py-3 bg-black text-white rounded-md font-medium">
              DISCOVER LENSES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPickSection;
