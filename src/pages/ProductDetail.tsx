import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormattedTranslation } from '../utils/translationHelper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { ChevronRight, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '../components/ProductImageGallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

interface ProductMeasurement {
  name: string;
  value: string;
}

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Bravo Browline',
    code: '15642',
    price: 159.95,
    rating: 4.5,
    reviewCount: 380,
    description: 'Classic browline frames with a modern twist. These lightweight frames are perfect for everyday wear.',
    features: [
      'High quality frame',
      'Basic prescription lenses',
      'Anti scratch coating',
      'UV protection'
    ],
    measurements: [
      { name: 'Frame Width', value: '132 mm / 5.2 in' },
      { name: 'Bridge', value: '22 mm / 0.9 in' },
      { name: 'Lens Width', value: '52 mm / 2 in' },
      { name: 'Lens Height', value: '44 mm / 1.7 in' },
      { name: 'Temple Length', value: '146 mm / 5.7 in' }
    ],
    details: {
      size: 'Adult Medium (128 - 132 mm / 5.0 - 5.2 in)',
      material: 'Mixed',
      weight: 'Lightweight (17 grams / 0.6 ounces)',
      rim: 'Full Rim',
      shape: 'Browline',
      features: ['Nose Pads', 'Custom engraving']
    },
    prescription: {
      pdRange: '50 - 76 mm',
      range: '20.00 - +12.00',
      progressive: true,
      bifocal: true,
      readers: true
    },
    images: [
      '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
      '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
      '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Tortoise', hex: '#8B4513' },
      { name: 'Blue', hex: '#0047AB' },
      { name: 'Crystal', hex: '#F5F5F5' }
    ]
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formattedT: t } = useFormattedTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // In a real app, fetch product by ID from API
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToFavorites = () => {
    toast({
      title: t("product.addedToFavorites"),
      description: `${product.name} ${t("product.hasBeenAddedToFavorites")}`,
    });
  };

  const handleSelectLenses = () => {
    navigate(`/select-lenses/${id}`);
  };

  const handleLearnMore = () => {
    toast({
      title: "Insurance Info",
      description: "Learn more about insurance and FSA coverage",
    });
  };

  return (
    <div className="font-sans bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("nav.home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">{t("nav.products")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium">
              {product.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        {/* Product Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Product Images */}
          <div className="sticky top-24">
            <ProductImageGallery images={product.images} />
          </div>
          
          {/* Right Column - Product Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
              <p className="text-gray-600 text-sm">{product.code}</p>
              
              <div className="flex items-center mt-2 mb-4">
                <span className="text-sm mr-2">REVIEWS ({product.reviewCount})</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm">Adult Medium</span>
                <a href="#" className="text-sm text-blue-600 underline">Size Chart</a>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-${i < Math.floor(product.rating) ? 'yellow' : 'gray'}-400 mr-1`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {product.reviewCount} {t("product.reviews")}
                </span>
              </div>
              
              <div className="text-2xl font-bold mb-6">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">{t("product.includes")}:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">{t("product.selectColor")}:</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor.name === color.name 
                          ? 'border-black ring-2 ring-offset-2 ring-black' 
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md"
                  onClick={handleSelectLenses}
                >
                  {t("product.selectLenses")}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center"
                  onClick={handleAddToFavorites}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  {t("product.addToFavorites")}
                </Button>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">{t("product.details")}</TabsTrigger>
                    <TabsTrigger value="measurements">{t("product.measurements")}</TabsTrigger>
                    <TabsTrigger value="prescription">{t("product.prescription")}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="pt-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.size")}:</p>
                        <p className="text-sm">{product.details.size}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.material")}:</p>
                        <p className="text-sm">{product.details.material}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.weight")}:</p>
                        <p className="text-sm">{product.details.weight}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.rim")}:</p>
                        <p className="text-sm">{product.details.rim}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.shape")}:</p>
                        <p className="text-sm">{product.details.shape}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="measurements" className="pt-4">
                    <div className="space-y-3">
                      {product.measurements.map((measurement: ProductMeasurement, index: number) => (
                        <div key={index} className="grid grid-cols-2 gap-2">
                          <p className="text-sm text-gray-500">{measurement.name}:</p>
                          <p className="text-sm">{measurement.value}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="prescription" className="pt-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">PD {t("product.range")}:</p>
                        <p className="text-sm">{product.prescription.pdRange}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.prescriptionRange")}:</p>
                        <p className="text-sm">{product.prescription.range}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.progressive")}:</p>
                        <p className="text-sm">{product.prescription.progressive ? '✓' : '✗'}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.bifocal")}:</p>
                        <p className="text-sm">{product.prescription.bifocal ? '✓' : '✗'}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm text-gray-500">{t("product.readers")}:</p>
                        <p className="text-sm">{product.prescription.readers ? '✓' : '✗'}</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-500">{t("product.share")}:</p>
                <button className="text-gray-500 hover:text-gray-700">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
