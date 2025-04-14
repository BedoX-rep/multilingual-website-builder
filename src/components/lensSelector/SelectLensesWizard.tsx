
import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { VisionNeedSelector } from './VisionNeedSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { OrderReview } from './OrderReview';
import { ProductOrder, VisionNeed } from './types';
import { useLensContext } from './context/LensContext';
import { useLensOptions } from './hooks/useLensOptions';

interface SelectLensesWizardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onComplete: (orderDetails: ProductOrder) => void;
}

export const SelectLensesWizard: React.FC<SelectLensesWizardProps> = ({ 
  product, 
  onComplete 
}) => {
  const { formattedT: t } = useFormattedTranslation();
  const { lensTypeOptions, lensThicknessOptions } = useLensOptions();
  const {
    currentStep,
    visionNeed,
    prescription,
    selectedLensType,
    selectedLensThickness,
    updateSelection,
    calculateTotalPrice
  } = useLensContext();

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 0: return visionNeed !== null;
      case 1: return prescription.useSavedPrescription || 
        (prescription.rightSphere && prescription.leftSphere && prescription.pupillaryDistance);
      case 2: return selectedLensType !== null;
      case 3: return selectedLensThickness !== null;
      default: return true;
    }
  };

  const handleNext = () => {
    if (canProceedToNextStep()) {
      updateSelection({ currentStep: currentStep + 1 });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      updateSelection({ currentStep: currentStep - 1 });
    }
  };

  const handleSubmit = () => {
    const orderDetails: ProductOrder = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      visionNeed: visionNeed!,
      totalPrice: calculateTotalPrice()
    };

    if (visionNeed === 'singleVision') {
      orderDetails.prescription = prescription;
      orderDetails.lensType = selectedLensType!;
      orderDetails.lensThickness = selectedLensThickness!;
    } else if (visionNeed === 'nonPrescription') {
      orderDetails.lensType = selectedLensType!;
    }

    onComplete(orderDetails);
  };

  const handleVisionNeedChange = (need: VisionNeed) => {
    updateSelection({ visionNeed: need });
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('lenses.customizeLenses')}</h2>
        <div className="flex items-center space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Back Button */}
      {currentStep > 0 && (
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 mb-4 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </button>
      )}

      {/* Step Content */}
      <div className="mb-8">
        {currentStep === 0 && (
          <VisionNeedSelector
            selected={visionNeed}
            onChange={handleVisionNeedChange}
            handleNext={handleNext}
          />
        )}
        
        {currentStep === 1 && visionNeed === 'singleVision' && (
          <PrescriptionForm
            prescription={prescription}
            onChange={(newPrescription) => updateSelection({ prescription: newPrescription })}
          />
        )}
        
        {currentStep === 2 && visionNeed !== 'frameOnly' && (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={selectedLensType}
            onChange={(type) => updateSelection({ selectedLensType: type })}
            handleNext={handleNext}
          />
        )}
        
        {currentStep === 3 && visionNeed === 'singleVision' && (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={selectedLensThickness}
            onChange={(thickness) => updateSelection({ selectedLensThickness: thickness })}
            handleNext={handleNext}
          />
        )}
        
        {currentStep === 4 && (
          <OrderReview
            product={product}
            visionNeed={visionNeed!}
            prescription={prescription}
            lensType={selectedLensType}
            lensThickness={selectedLensThickness}
            totalPrice={calculateTotalPrice()}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {currentStep < 4 && (
          <Button
            onClick={handleNext}
            disabled={!canProceedToNextStep()}
            className="ml-auto"
          >
            {t('common.next')}
          </Button>
        )}
        
        {currentStep === 4 && (
          <Button onClick={handleSubmit} className="ml-auto">
            {t('common.addToCart')}
          </Button>
        )}
      </div>
    </div>
  );
};
