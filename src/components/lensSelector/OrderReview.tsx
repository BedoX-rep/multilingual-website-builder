
import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { VisionNeed, LensTypeOption, LensThicknessOption, PrescriptionData } from './types';
import { Check } from 'lucide-react';

interface OrderReviewProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  visionNeed: VisionNeed;
  prescription?: PrescriptionData;
  lensType?: LensTypeOption;
  lensThickness?: LensThicknessOption;
  totalPrice: number;
}

export const OrderReview: React.FC<OrderReviewProps> = ({ 
  product,
  visionNeed,
  prescription,
  lensType,
  lensThickness,
  totalPrice
}) => {
  const { formattedT: t } = useFormattedTranslation();
  
  const renderVisionNeedType = () => {
    switch (visionNeed) {
      case 'singleVision':
        return t('lenses.singleVisionLenses');
      case 'nonPrescription':
        return t('lenses.nonPrescriptionLenses');
      case 'frameOnly':
        return t('lenses.frameOnly');
      default:
        return '';
    }
  };
  
  const renderPrescriptionSummary = () => {
    if (!prescription || prescription.useSavedPrescription) {
      return (
        <div className="text-gray-600">
          {t('lenses.usingSavedPrescription')}
        </div>
      );
    }
    
    return (
      <div className="text-xs">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div>
            <span className="font-medium">{t('lenses.rightEye')}:</span> {prescription.rightSphere} / {prescription.rightCylinder} / {prescription.rightAxis}°
          </div>
          <div>
            <span className="font-medium">{t('lenses.leftEye')}:</span> {prescription.leftSphere} / {prescription.leftCylinder} / {prescription.leftAxis}°
          </div>
          <div className="col-span-2">
            <span className="font-medium">PD:</span> {prescription.pupillaryDistance} mm
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <p className="text-gray-600 mb-6">
        {t('lenses.reviewOrderExplanation')}
      </p>
      
      <div className="border rounded-lg overflow-hidden mb-6">
        <div className="p-4 border-b bg-gray-50">
          <h4 className="font-semibold">{t('lenses.orderSummary')}</h4>
        </div>
        
        {/* Frame */}
        <div className="p-4 border-b">
          <div className="flex justify-between mb-2">
            <h5 className="font-medium">{t('lenses.frame')}</h5>
            <span className="font-medium">${product.price.toFixed(2)}</span>
          </div>
          <div className="text-gray-600">
            {product.name}
          </div>
        </div>
        
        {/* Vision Need */}
        <div className="p-4 border-b">
          <h5 className="font-medium mb-2">{t('lenses.visionNeed')}</h5>
          <div className="text-gray-600">
            {renderVisionNeedType()}
          </div>
        </div>
        
        {/* Prescription (if applicable) */}
        {visionNeed === 'singleVision' && (
          <div className="p-4 border-b">
            <h5 className="font-medium mb-2">{t('lenses.prescription')}</h5>
            {renderPrescriptionSummary()}
          </div>
        )}
        
        {/* Lens Type (if applicable) */}
        {visionNeed !== 'frameOnly' && lensType && (
          <div className="p-4 border-b">
            <div className="flex justify-between mb-2">
              <h5 className="font-medium">{t('lenses.lensType')}</h5>
              {lensType.priceAdditional > 0 && (
                <span className="font-medium">+${lensType.priceAdditional.toFixed(2)}</span>
              )}
            </div>
            <div className="text-gray-600">
              {lensType.name}
            </div>
          </div>
        )}
        
        {/* Lens Thickness (if applicable) */}
        {visionNeed === 'singleVision' && lensThickness && (
          <div className="p-4 border-b">
            <div className="flex justify-between mb-2">
              <h5 className="font-medium">{t('lenses.lensThickness')}</h5>
              {lensThickness.priceAdditional > 0 && (
                <span className="font-medium">+${lensThickness.priceAdditional.toFixed(2)}</span>
              )}
            </div>
            <div className="text-gray-600">
              {lensThickness.name}
            </div>
          </div>
        )}
        
        {/* Total */}
        <div className="p-4 bg-gray-50">
          <div className="flex justify-between">
            <h5 className="font-semibold">{t('lenses.totalPrice')}</h5>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
