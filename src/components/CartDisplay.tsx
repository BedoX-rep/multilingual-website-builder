
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useFormattedTranslation } from '../utils/translationHelper';
import { Card } from './ui/card';

export const CartDisplay = () => {
  const { items } = useCart();
  const { formattedT: t } = useFormattedTranslation();

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p>{t('cart.empty')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.cartItemId} className="p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{item.productName}</h3>
              <p className="text-sm text-gray-600">{item.visionNeed}</p>
              {item.lensType && (
                <p className="text-sm">{item.lensType.name} (+${item.lensType.priceAdditional})</p>
              )}
              {item.lensThickness && (
                <p className="text-sm">{item.lensThickness.name} (+${item.lensThickness.priceAdditional})</p>
              )}
            </div>
            <div className="text-right">
              <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </Card>
      ))}
      <div className="pt-4 border-t">
        <div className="flex justify-between font-semibold">
          <span>{t('cart.total')}</span>
          <span>${items.reduce((total, item) => total + item.totalPrice, 0).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
