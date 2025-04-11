
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/navlogo.png"
              alt="Lovable Eyewear"
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium ${
                isActiveLink("/") ? "text-primary" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium ${
                isActiveLink("/products") ? "text-primary" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium ${
                isActiveLink("/about") ? "text-primary" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium ${
                isActiveLink("/contact") ? "text-primary" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto py-4 px-4 space-y-3">
            <Link
              to="/"
              className={`block py-2 px-3 rounded-md ${
                isActiveLink("/") ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block py-2 px-3 rounded-md ${
                isActiveLink("/products") ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block py-2 px-3 rounded-md ${
                isActiveLink("/about") ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 px-3 rounded-md ${
                isActiveLink("/contact") ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/account"
              className="block py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
