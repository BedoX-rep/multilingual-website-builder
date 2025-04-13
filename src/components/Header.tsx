
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useFormattedTranslation } from '../utils/translationHelper';
import { Search, Heart, User, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { useMobile } from '@/hooks/use-mobile';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const { formattedT: t } = useFormattedTranslation();
  const isMobile = useMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-[#E8F7F9] text-sm py-2 text-center">
        <p>{t("header.freeLensesPromo")}</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="flex flex-col gap-4">
                    <Link to="/products" className="text-lg">{t("nav.eyeglasses")}</Link>
                    <Link to="/products" className="text-lg">{t("nav.sunglasses")}</Link>
                    <Link to="/products" className="text-lg">{t("nav.contactLenses")}</Link>
                    <Link to="/about" className="text-lg">{t("nav.about")}</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <nav className="hidden md:flex items-center gap-8">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{t("nav.eyeglasses")}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                          <div className="grid grid-cols-2 gap-4">
                            <Link to="/products" className="block group">
                              <div className="text-lg font-medium mb-1">{t("nav.men")}</div>
                              <p className="text-sm text-gray-500">{t("nav.mensEyeglasses")}</p>
                            </Link>
                            <Link to="/products" className="block group">
                              <div className="text-lg font-medium mb-1">{t("nav.women")}</div>
                              <p className="text-sm text-gray-500">{t("nav.womensEyeglasses")}</p>
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{t("nav.sunglasses")}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                          <div className="grid grid-cols-2 gap-4">
                            <Link to="/products" className="block group">
                              <div className="text-lg font-medium mb-1">{t("nav.men")}</div>
                              <p className="text-sm text-gray-500">{t("nav.mensSunglasses")}</p>
                            </Link>
                            <Link to="/products" className="block group">
                              <div className="text-lg font-medium mb-1">{t("nav.women")}</div>
                              <p className="text-sm text-gray-500">{t("nav.womensSunglasses")}</p>
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/products" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t("nav.contactLenses")}
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t("nav.about")}
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            )}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/lovable-uploads/navlogo.png" alt="Logo" className="h-8" />
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/favorites">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
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
            <LanguageSelector />
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t("header.searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-black"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
