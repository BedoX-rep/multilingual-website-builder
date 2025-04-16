
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useFormattedTranslation } from '../utils/translationHelper';
import { TooltipWrapper } from '../components/TooltipWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
  // Add more products with similar structure...
];

const Products: React.FC = () => {
  const { formattedT: t } = useFormattedTranslation();
  const [filters, setFilters] = useState({
    gender: '',
    frameSize: '',
    frameShape: '',
    material: '',
    rimType: '',
    priceRange: [0, 500],
    colors: [] as string[]
  });

  const filteredProducts = products.filter(product => {
    return (
      (!filters.gender || product.gender === filters.gender) &&
      (!filters.frameSize || product.frameSize === filters.frameSize) &&
      (!filters.frameShape || product.frameShape === filters.frameShape) &&
      (!filters.material || product.material === filters.material) &&
      (!filters.rimType || product.rimType === filters.rimType) &&
      (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]) &&
      (filters.colors.length === 0 || product.colors.some(color => filters.colors.includes(color)))
    );
  });

  return (
    <TooltipWrapper>
      <div>
        <Header />
        
        <main className="container mx-auto px-4 py-16 mt-16">
          <div className="grid grid-cols-12 gap-6">
            {/* Filters Sidebar */}
            <div className="col-span-3 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label>Gender</Label>
                    <Select onValueChange={(value) => setFilters(prev => ({ ...prev, gender: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="men">Men</SelectItem>
                        <SelectItem value="women">Women</SelectItem>
                        <SelectItem value="unisex">Unisex</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Frame Size</Label>
                    <Select onValueChange={(value) => setFilters(prev => ({ ...prev, frameSize: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Frame Shape</Label>
                    <Select onValueChange={(value) => setFilters(prev => ({ ...prev, frameShape: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shape" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="round">Round</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="rectangle">Rectangle</SelectItem>
                        <SelectItem value="aviator">Aviator</SelectItem>
                        <SelectItem value="cat-eye">Cat-Eye</SelectItem>
                        <SelectItem value="browline">Browline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Material</Label>
                    <Select onValueChange={(value) => setFilters(prev => ({ ...prev, material: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="metal">Metal</SelectItem>
                        <SelectItem value="acetate">Acetate</SelectItem>
                        <SelectItem value="titanium">Titanium</SelectItem>
                        <SelectItem value="plastic">Plastic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Rim Type</Label>
                    <Select onValueChange={(value) => setFilters(prev => ({ ...prev, rimType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Rim</SelectItem>
                        <SelectItem value="semi">Semi Rimless</SelectItem>
                        <SelectItem value="rimless">Rimless</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Price Range</Label>
                    <div className="pt-4">
                      <Slider
                        defaultValue={[0, 500]}
                        max={500}
                        step={10}
                        onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                      />
                      <div className="flex justify-between mt-2">
                        <span>${filters.priceRange[0]}</span>
                        <span>${filters.priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </TooltipWrapper>
  );
};

export default Products;
