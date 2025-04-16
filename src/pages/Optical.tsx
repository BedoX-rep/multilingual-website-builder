import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpticalProductCard from '../components/OpticalProductCard';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from 'lucide-react';

const Optical: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Mock products data
  const products = [
    {
      id: '1',
      name: 'Classic Round Optical',
      price: 149.99,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
      colors: ['#000000', '#8B4513', '#0047AB'],
      type: 'optical'
    },
    {
      id: '2',
      name: 'Modern Rectangle Optical',
      price: 179.99,
      image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      colors: ['#000000', '#8B4513', '#F5F5F5'],
      type: 'optical'
    },
    // Add more products as needed
  ];

  const FilterButton: React.FC<{ label: string }> = ({ label }) => (
    <button
      className={`px-4 py-2 rounded-full text-sm ${
        selectedFilters.includes(label)
          ? 'bg-black text-white'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
      onClick={() => {
        if (selectedFilters.includes(label)) {
          setSelectedFilters(filters => filters.filter(f => f !== label));
        } else {
          setSelectedFilters(filters => [...filters, label]);
        }
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frames for men</h1>

          <div className="flex justify-between items-center mb-8">
            <div className="hidden md:flex gap-2">
              <FilterButton label="New" />
              <FilterButton label="Trending" />
              <FilterButton label="Best Sellers" />
              <FilterButton label="Price: Low to High" />
              <FilterButton label="Price: High to Low" />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-4 space-y-4">
                  <FilterButton label="New" />
                  <FilterButton label="Trending" />
                  <FilterButton label="Best Sellers" />
                  <FilterButton label="Price: Low to High" />
                  <FilterButton label="Price: High to Low" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 bg-white p-6 rounded-xl border">
                <div className="space-y-6">
                  {/* Frame Shape Filter */}
                  <div>
                    <h3 className="font-medium mb-4">Frame Shape</h3>
                    <div className="space-y-2">
                      {['Round', 'Square', 'Rectangle', 'Aviator', 'Cat-eye'].map((shape) => (
                        <label key={shape} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>{shape}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Material Filter */}
                  <div>
                    <h3 className="font-medium mb-4">Material</h3>
                    <div className="space-y-2">
                      {['Metal', 'Acetate', 'Titanium', 'Plastic'].map((material) => (
                        <label key={material} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>{material}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-medium mb-4">Price Range</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="price" className="rounded border-gray-300" />
                        <span>Under $100</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="price" className="rounded border-gray-300" />
                        <span>$100 - $200</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="price" className="rounded border-gray-300" />
                        <span>$200+</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <OpticalProductCard 
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Optical;