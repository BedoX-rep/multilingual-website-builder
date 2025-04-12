import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Slider } from '../components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';

// Mock data for products
const productsData = [
  {
    id: '1',
    name: 'Classic Frames',
    price: 95,
    image: '/lovable-uploads/45bb2648-7da7-44ab-bd32-7044f1470203.png',
    category: 'Optical'
  },
  {
    id: '2',
    name: 'Premium Shades',
    price: 120,
    image: '/lovable-uploads/1551cd86-4f1b-4880-afa5-1ac4eaa6aeb0.png',
    category: 'Sunglasses'
  },
  {
    id: '3',
    name: 'Sport Glasses',
    price: 150,
    image: '/lovable-uploads/29f9550c-ba8d-45fe-8e22-1ffb62de3f75.png',
    category: 'Sports'
  }
];

// Product categories and filters
const categories = ["All", "Eyeglasses", "Sunglasses", "Blue Light"];
const shapes = ["Rectangle", "Square", "Round", "Cat-eye", "Aviator", "Browline"];
const materials = ["Acetate", "Metal", "Combination", "Wood", "Titanium"];
const colors = [
  { name: "Black", value: "#000000" },
  { name: "Tortoise", value: "#8B4513" }, 
  { name: "Crystal", value: "#E6F4F1" },
  { name: "Gold", value: "#FFD700" },
  { name: "Silver", value: "#C0C0C0" },
  { name: "Blue", value: "#0000FF" },
  { name: "Red", value: "#FF0000" },
  { name: "Green", value: "#008000" }
];

const Products: React.FC = () => {
  const { t } = useLanguage();
  
  // State for filters
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  
  // Toggle filter selections
  const toggleShape = (shape: string) => {
    setSelectedShapes(prev => 
      prev.includes(shape) 
        ? prev.filter(s => s !== shape) 
        : [...prev, shape]
    );
  };
  
  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material) 
        : [...prev, material]
    );
  };
  
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color.name) 
        ? prev.filter(c => c !== color.name) 
        : [...prev, color.name]
    );
  };
  
  return (
    <div className="font-sans">
      <Header />
      
      {/* Products Hero */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-center">
            {t('products')}
          </h1>
        </div>
      </section>
      
      {/* Products Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-1/4">
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 400]}
                    min={0}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>
              </div>
              
              {/* Frame Shape */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Frame Shape</h3>
                <div className="space-y-2">
                  {shapes.map(shape => (
                    <div key={shape} className="flex items-center">
                      <Checkbox
                        id={`shape-${shape}`}
                        checked={selectedShapes.includes(shape)}
                        onCheckedChange={() => toggleShape(shape)}
                      />
                      <Label htmlFor={`shape-${shape}`} className="ml-2 cursor-pointer">
                        {shape}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Frame Material */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Frame Material</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <div key={material} className="flex items-center">
                      <Checkbox
                        id={`material-${material}`}
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={() => toggleMaterial(material)}
                      />
                      <Label htmlFor={`material-${material}`} className="ml-2 cursor-pointer">
                        {material}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Frame Color */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Frame Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <div 
                      key={color.name}
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColors.includes(color.name) ? 'border-blue-500' : 'border-transparent'}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => toggleColor(color.name)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              {/* Categories */}
              <Tabs defaultValue="All" className="mb-8">
                <TabsList>
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {/* This would normally be filtered based on the active filters */}
                  {/* For this example, just show product cards */}
                  <ProductCard 
                    id="1"
                    name="Esme"
                    price={95}
                    image="/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png"
                    rating={4.8}
                    reviews={425}
                    colors={['#8B4513', '#CCCCCC', '#2E4F4F', '#4F6F52']}
                  />
                  
                  <ProductCard 
                    id="2"
                    name="Baird"
                    price={145}
                    image="/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png"
                    rating={4.7}
                    reviews={312}
                    colors={['#000000', '#FF0000', '#E6F4F1', '#435334']}
                  />
                  
                  <ProductCard 
                    id="3"
                    name="Durand"
                    price={95}
                    image="/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png"
                    rating={4.9}
                    reviews={567}
                    colors={['#8B4513', '#000000', '#2E4F4F', '#CCCCCC']}
                  />
                  
                  <ProductCard 
                    id="4"
                    name="Brady"
                    price={95}
                    image="/lovable-uploads/productmockup/d29bdfc9-8c61-4bd0-8a10-c0ef0355df3b.png"
                    rating={4.6}
                    reviews={289}
                    colors={['#7B66FF', '#CCCCCC', '#000000']}
                  />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
