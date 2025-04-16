
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpticalProductCard from '../components/OpticalProductCard';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter, SlidersHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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

const Optical: React.FC = () => {
  const { t } = useTranslation();
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

  const FilterSection = () => (
    <div className="space-y-6">
      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-semibold">
          <span>Gender</span>
          <SlidersHorizontal className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
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
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-semibold">
          <span>Frame Size</span>
          <SlidersHorizontal className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
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
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-semibold">
          <span>Frame Shape</span>
          <SlidersHorizontal className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="flex flex-wrap gap-2">
            {['round', 'square', 'rectangle', 'aviator', 'cat-eye'].map((shape) => (
              <FilterButton
                key={shape}
                active={filters.frameShape === shape}
                onClick={() => handleFilterChange('frameShape', filters.frameShape === shape ? '' : shape)}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </FilterButton>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-semibold">
          <span>Material</span>
          <SlidersHorizontal className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
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
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-semibold">
          <span>Price Range</span>
          <SlidersHorizontal className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  // Mock products data
  const products = [
    {
      id: '1',
      name: 'Classic Round Optical',
      price: 149.99,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
      colors: ['#000000', '#8B4513', '#0047AB'],
      type: 'optical',
      gender: 'unisex',
      frameSize: 'medium',
      frameShape: 'round',
      material: 'metal',
      rimType: 'full'
    },
    {
      id: '2',
      name: 'Modern Rectangle Optical',
      price: 179.99,
      image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      colors: ['#000000', '#8B4513', '#F5F5F5'],
      type: 'optical',
      gender: 'men',
      frameSize: 'large',
      frameShape: 'rectangle',
      material: 'acetate',
      rimType: 'full'
    },
    {
      id: '3',
      name: 'Elegant Cat-Eye Optical',
      price: 169.99,
      image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
      colors: ['#C0C0C0', '#8B4513', '#000000'],
      type: 'optical',
      gender: 'women',
      frameSize: 'small',
      frameShape: 'cat-eye',
      material: 'metal',
      rimType: 'semi'
    },
    {
      id: '4',
      name: 'Square Business Optical',
      price: 189.99,
      image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
      colors: ['#000000', '#4169E1', '#8B4513'],
      type: 'optical',
      gender: 'men',
      frameSize: 'medium',
      frameShape: 'square',
      material: 'titanium',
      rimType: 'full'
    },
    {
      id: '5',
      name: 'Vintage Browline Optical',
      price: 159.99,
      image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
      colors: ['#8B4513', '#000000', '#C0C0C0'],
      type: 'optical',
      gender: 'unisex',
      frameSize: 'medium',
      frameShape: 'browline',
      material: 'acetate',
      rimType: 'semi'
    },
    {
      id: '6',
      name: 'Minimalist Rectangle Optical',
      price: 199.99,
      image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      colors: ['#000000', '#C0C0C0', '#4169E1'],
      type: 'optical',
      gender: 'unisex',
      frameSize: 'large',
      frameShape: 'rectangle',
      material: 'titanium',
      rimType: 'rimless'
    },
    {
      id: '7',
      name: 'Modern Aviator Optical',
      price: 169.99,
      image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
      colors: ['#C0C0C0', '#000000', '#8B4513'],
      type: 'optical',
      gender: 'men',
      frameSize: 'large',
      frameShape: 'aviator',
      material: 'metal',
      rimType: 'full'
    }
  ];

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Optical Collection</h1>
            <p className="text-gray-600">Find your perfect pair of optical frames</p>
          </div>
          
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
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <OpticalProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-72">
            <div className="sticky top-24">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full mb-4">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="bg-white p-6 rounded-xl border">
                    <FilterSection />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Optical;
