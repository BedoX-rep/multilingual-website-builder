import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormattedTranslation } from '../utils/translationHelper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductImageGallery from '../components/ProductImageGallery';
import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';


const mockProducts = [
  {
    id: '1',
    name: 'Bravo Browline',
    code: '156421',
    price: 15.95,
    rating: 4.5,
    reviewCount: 3800,
    description: 'Classic browline frames with a modern twist.',
    measurements: [
      { name: 'Frame Width', value: '132 mm / 5.2 in' },
      { name: 'Bridge', value: '22 mm / 0.9 in' },
      { name: 'Lens Width', value: '52 mm / 2 in' },
      { name: 'Lens Height', value: '44 mm / 1.7 in' },
      { name: 'Temple Length', value: '146 mm / 5.7 in' }
    ],
    details: {
      size: 'Adult Medium (126 - 132 mm / 5.0 - 5.2 in)',
      material: 'Mixed',
      weight: 'Lightweight (17 grams / 0.6 ounces)',
      rim: 'Full Rim',
      shape: 'Browline',
      feature: 'Nose Pads, Custom engraving'
    },
    prescription: {
      pdRange: '50 - 79 mm',
      range: '-20.00 - +12.00',
      progressive: 'Yes',
      readers: 'Yes'
    },
    images: [
      '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
      '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
      '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
      '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
    ]
  }
];

interface ProductMeasurement {
  name: string;
  value: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formattedT: t } = useFormattedTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
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
    <div className="font-sans bg-white">
      <Header />

      <div className="container mx-auto px-4 py-4 max-w-7xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Product Images */}
          <div>
            <ProductImageGallery images={product.images} />
          </div>

          {/* Right Column - Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.code}</p>
            </div>

            <div className="flex items-center mb-4">
              <span className="text-sm">REVIEWS ({product.reviewCount})</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-blue-500' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span>Adult Medium</span>
              <a href="#" className="text-blue-600 underline text-sm">Size Chart</a>
            </div>

            <div className="text-xl font-bold mb-4">
              ${product.price}
            </div>

            <div className="bg-blue-50 p-4 rounded-md mb-4">
              <p className="text-sm">Get it as early as Wed, Apr 16</p>
              <p className="text-sm">Rush Delivery starts at $19</p>
              <a href="#" className="text-sm text-blue-600 underline">See restrictions</a>
            </div>

            <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 mb-3" onClick={handleSelectLenses}>
              Select Lenses
            </Button>

            <Button variant="outline" className="w-full mb-3 flex items-center justify-center gap-2" onClick={handleAddToFavorites}>
              <Heart className="w-4 h-4" />
              Add to favorites
            </Button>

            <div className="text-center text-sm mb-6">
              <span>Pay with insurance or FSA. </span>
              <a href="#" className="text-blue-600 underline" onClick={handleLearnMore}>Learn more</a>
            </div>

            <div className="mb-6">
              <span className="text-sm text-gray-600">Share: </span>
              <button className="text-gray-500 hover:text-gray-700">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Frame Measurements</h3>
                    {product.measurements.map((m, i) => (
                      <div key={i} className="flex items-center text-sm mb-1">
                        <span className="text-gray-600 w-32">{m.name}:</span>
                        <span>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Frame Details</h3>
                    <div className="text-sm space-y-1">
                      <div><span className="text-gray-600">Size:</span> {product.details.size}</div>
                      <div><span className="text-gray-600">Material:</span> {product.details.material}</div>
                      <div><span className="text-gray-600">Weight:</span> {product.details.weight}</div>
                      <div><span className="text-gray-600">Rim:</span> {product.details.rim}</div>
                      <div><span className="text-gray-600">Shape:</span> {product.details.shape}</div>
                      <div><span className="text-gray-600">Feature:</span> {product.details.feature}</div>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <h3 className="font-medium mb-2">Prescription Details</h3>
                    <div className="text-sm space-y-1">
                      <div><span className="text-gray-600">PD Range:</span> {product.prescription.pdRange}</div>
                      <div className="text-xs text-gray-500">Additional fee for PDs below this range.</div>
                      <div><span className="text-gray-600">Prescription Range:</span> {product.prescription.range}</div>
                      <div><span className="text-gray-600">Available as Progressive / Bifocal:</span> {product.prescription.progressive}</div>
                      <div><span className="text-gray-600">Available as Readers:</span> {product.prescription.readers}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;