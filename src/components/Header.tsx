import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormattedTranslation } from "../utils/translationHelper";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useCart } from "../contexts/CartContext";

// Basic CartDisplay component (needs improvement based on actual cart data structure)
const CartDisplay = () => {
  const { cartItems } = useCart(); // Assuming cartItems is available in CartContext
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name} - {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};


const Header: React.FC = () => {
  const { formattedT: t } = useFormattedTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, cartItems } = useCart();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-[5%] py-4 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-serif text-gray-800">Lens Optique</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            {t("nav.home")}
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
            {t("nav.products")}
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
            {t("nav.about")}
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <LanguageSelector />
          <div className="relative">
            <Link to="/cart">
              <Button variant="outline" size="icon" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
          <Button variant="outline" size="icon" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/products"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.products")}
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;