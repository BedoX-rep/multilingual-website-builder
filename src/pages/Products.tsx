
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Filter, SlidersHorizontal } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  rating: number;
  reviews: number;
  gender: 'men' | 'women' | 'unisex';
  frameSize: 'small' | 'medium' | 'large';
  frameShape: 'round' | 'square' | 'rectangle' | 'aviator' | 'cat-eye' | 'browline';
  material: 'metal' | 'acetate' | 'titanium' | 'plastic';
  rimType: 'full' | 'semi' | 'rimless';
}

const products: Product[] = [
  {
    id: '1',
    name: 'Bravo Browline',
    price: 159.95,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
    category: 'optical',
    colors: ['#000000', '#8B4513', '#0047AB'],
    rating: 4.5,
    reviews: 380,
    gender: 'men',
    frameSize: 'medium',
    frameShape: 'browline',
    material: 'metal',
    rimType: 'full'
  },
  {
    id: '2',
    name: 'Atlas Round',
    price: 139.95,
    image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
    category: 'optical',
    colors: ['#000000', '#8B4513', '#F5F5F5'],
    rating: 4.2,
    reviews: 215,
    gender: 'unisex',
    frameSize: 'small',
    frameShape: 'round',
    material: 'acetate',
    rimType: 'full'
  },
];

const FilterButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <Button
    variant={active ? "default" : "outline"}
    size="sm"
    onClick={onClick}
    className="whitespace-nowrap"
  >
    {children}
  </Button>
);

const Products: React.FC = () => {
  const [filters, setFilters] = useState({
    gender: '',
    frameSize: '',
    frameShape: '',
    material: '',
    rimType: '',
    priceRange: [0, 500] as [number, number],
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    if (!activeFilters.includes(value) && value !== '') {
      setActiveFilters(prev => [...prev, value]);
    } else if (value === '') {
      setActiveFilters(prev => prev.filter(f => f !== filters[filterType as keyof typeof filters]));
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
    Object.keys(filters).forEach(key => {
      if (filters[key as keyof typeof filters] === filter) {
        setFilters(prev => ({ ...prev, [key]: '' }));
      }
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (!filters.gender || product.gender === filters.gender) &&
      (!filters.frameSize || product.frameSize === filters.frameSize) &&
      (!filters.frameShape || product.frameShape === filters.frameShape) &&
      (!filters.material || product.material === filters.material) &&
      (!filters.rimType || product.rimType === filters.rimType) &&
      (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
    );
  });

  const FilterSection = () => (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Gender</h3>
          <div className="flex flex-wrap gap-2">
            {['men', 'women', 'unisex'].map((gender) => (
              <FilterButton
                key={gender}
                active={filters.gender === gender}
                onClick={() => handleFilterChange('gender', filters.gender === gender ? '' : gender)}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Frame Size</h3>
          <div className="flex flex-wrap gap-2">
            {['small', 'medium', 'large'].map((size) => (
              <FilterButton
                key={size}
                active={filters.frameSize === size}
                onClick={() => handleFilterChange('frameSize', filters.frameSize === size ? '' : size)}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Frame Shape</h3>
          <div className="flex flex-wrap gap-2">
            {['round', 'square', 'rectangle', 'aviator', 'cat-eye', 'browline'].map((shape) => (
              <FilterButton
                key={shape}
                active={filters.frameShape === shape}
                onClick={() => handleFilterChange('frameShape', filters.frameShape === shape ? '' : shape)}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Material</h3>
          <div className="flex flex-wrap gap-2">
            {['metal', 'acetate', 'titanium', 'plastic'].map((material) => (
              <FilterButton
                key={material}
                active={filters.material === material}
                onClick={() => handleFilterChange('material', filters.material === material ? '' : material)}
              >
                {material.charAt(0).toUpperCase() + material.slice(1)}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Rim Type</h3>
          <div className="flex flex-wrap gap-2">
            {['full', 'semi', 'rimless'].map((type) => (
              <FilterButton
                key={type}
                active={filters.rimType === type}
                onClick={() => handleFilterChange('rimType', filters.rimType === type ? '' : type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Price Range</h3>
          <div className="space-y-4">
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={filters.priceRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
              className="mb-6"
            />
            <div className="flex justify-between text-sm">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Eyewear Collection</h1>
            <p className="text-gray-600">{filteredProducts.length} products</p>
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <ScrollArea className="h-[calc(100vh-4rem)]">
                <div className="px-1 py-4">
                  <FilterSection />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {activeFilters.map((filter) => (
              <Button
                key={filter}
                variant="secondary"
                size="sm"
                onClick={() => removeFilter(filter)}
                className="flex items-center gap-1"
              >
                {filter}
                <Filter className="h-4 w-4 ml-1" />
              </Button>
            ))}
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-xl border">
              <FilterSection />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
