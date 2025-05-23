import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sunglasses from "./pages/Sunglasses";
import Optical from "./pages/Optical";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import SelectLenses from "./pages/SelectLenses";
import Cart from "./pages/Cart";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import i18n configuration
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Wrap all components with I18nextProvider to fix type issues */}
      <I18nextProvider i18n={i18n}>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sunglasses" element={<Sunglasses />} />
            <Route path="/optical" element={<Optical />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/select-lenses/:id" element={<SelectLenses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </CartProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;