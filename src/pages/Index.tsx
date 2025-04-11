
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, HelpCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FrameShapesSection from '../components/FrameShapesSection';

// Dummy products data
const featuredProducts = [
  {
    id: 1,
    name: 'Classic Aviator',
    price: 129,
    image: '/lovable-uploads/productmockup/2b61f335e979f96b25e95b1a527333b8e8cf3da6.png',
    category: 'sunglasses',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Modern Round',
    price: 149,
    image: '/lovable-uploads/productmockup/9e225f5dc69f0335cf2ff7fd4bbaf15322763546.png',
    category: 'eyeglasses',
    bestseller: false,
  },
  {
    id: 3,
    name: 'Sporty Rectangle',
    price: 159,
    image: '/lovable-uploads/productmockup/3435b33b8f6649ded6fc392bcf9471aa11742d28.png',
    category: 'sunglasses',
    bestseller: true,
  },
  {
    id: 4,
    name: 'Premium Cat-Eye',
    price: 179,
    image: '/lovable-uploads/productmockup/e9e88c5864ae35e00d6400c6e3d07f23b1e05d4b.png',
    category: 'eyeglasses',
    bestseller: false,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] md:min-h-[600px]" style={{ backgroundImage: 'url(/lovable-uploads/herosectionbg5.jpg)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Perfect Vision</h1>
            <p className="text-white/90 text-lg mb-8">
              Discover premium quality eyewear for every style and need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="px-8 py-6 text-base">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-base">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Shapes Section */}
      <FrameShapesSection />

      {/* Featured Products */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild className="group">
              <Link to="/products">
                View all
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Brands Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">We Work With Your Insurance</h2>
              <p className="text-gray-700 mb-6">
                We partner with all major insurance providers to make your eye care affordable and accessible. Our experts will help you maximize your benefits.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                <img src="/lovable-uploads/assurancebrandsmaghreb/allianz-logo.png" alt="Allianz" className="h-10 object-contain" />
                <img src="/lovable-uploads/assurancebrandsmaghreb/cnss.png" alt="CNSS" className="h-10 object-contain" />
                <img src="/lovable-uploads/assurancebrandsmaghreb/rma.png" alt="RMA" className="h-10 object-contain" />
                <img src="/lovable-uploads/assurancebrandsmaghreb/sanlam.png" alt="Sanlam" className="h-10 object-contain" />
              </div>
              <Button asChild className="flex items-center">
                <Link to="/contact">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Insurance Help
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="/lovable-uploads/sectionassuranceimage.png"
                alt="Insurance"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Trusted Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="/lovable-uploads/glassbrands/ray-ban.png" alt="Ray-Ban" className="h-12 grayscale hover:grayscale-0 transition-all" />
            <img src="/lovable-uploads/glassbrands/essilor.png" alt="Essilor" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="/lovable-uploads/glassbrands/zeiss.png" alt="Zeiss" className="h-10 grayscale hover:grayscale-0 transition-all" />
            <img src="/lovable-uploads/glassbrands/hoya.png" alt="Hoya" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="/lovable-uploads/glassbrands/indo.png" alt="Indo" className="h-10 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
