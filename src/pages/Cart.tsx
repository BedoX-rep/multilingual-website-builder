
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartDisplay } from '../components/CartDisplay';

const Cart: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <CartDisplay />
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
