
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductOrder } from '../components/lensSelector/types';
import { useToast } from '@/components/ui/use-toast';

interface CartContextType {
  items: ProductOrder[];
  addToCart: (item: ProductOrder) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartCount: number;
  getCartItems: () => ProductOrder[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ProductOrder[]>([]);
  const { toast } = useToast();

  const addToCart = (item: ProductOrder) => {
    // Create a unique ID for the cart item
    const cartItem = { 
      ...item, 
      cartItemId: `${item.productId}-${Date.now()}`  
    };
    
    setItems((prevItems) => [...prevItems, cartItem]);
    
    toast({
      title: "Item added to cart",
      description: `${item.productName} has been added to your cart`,
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems((prevItems) => prevItems.filter(item => item.cartItemId !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartItems = () => items;

return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      clearCart,
      cartCount: items.length,
      getCartItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
