
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useFormattedTranslation } from '../utils/translationHelper';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

export const CartDisplay = () => {
  const { items, removeFromCart } = useCart();
  const { formattedT: t } = useFormattedTranslation();

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p>{t('cart.empty')}</p>
      </div>
    );
  }

  const total = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.cartItemId} className="p-4">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="font-semibold">{item.productName}</h3>
              <p className="text-sm text-gray-600">{item.visionNeed}</p>
              {item.lensType && (
                <p className="text-sm">{item.lensType.name} (+${item.lensType.priceAdditional})</p>
              )}
              {item.lensThickness && (
                <p className="text-sm">{item.lensThickness.name} (+${item.lensThickness.priceAdditional})</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.cartItemId!)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
      <div className="pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{t('cart.total')}</span>
          <span className="text-lg font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
