
import React from 'react';

const ShippingBanner: React.FC = () => {
  return (
    <section className="bg-blue-50">
      <div className="flex flex-col md:flex-row justify-between items-center pt-4 pb-2 px-6">
        <div className="text-center md:hidden w-full">
          <p className="text-base font-medium text-blue-800">Free shipping within all of Morocco 🇲🇦</p>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <p className="text-base font-medium text-blue-800">Delivery within all of Morocco 🇲🇦</p>
        </div>
        <div className="hidden md:block h-8 w-[2px] bg-blue-200"></div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <p className="text-base font-medium text-blue-800">Free Shipping</p>
        </div>
        <div className="hidden md:block h-8 w-[2px] bg-blue-200"></div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <p className="text-base font-medium text-blue-800">30-Day Returns</p>
        </div>
        <div className="hidden md:block h-8 w-[2px] bg-blue-200"></div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <p className="text-base font-medium text-blue-800">Contacts & Support</p>
        </div>
      </div>
    </section>
  );
};

export default ShippingBanner;
