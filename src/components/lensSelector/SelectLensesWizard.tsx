
import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { VisionNeedSelector } from './VisionNeedSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { OrderReview } from './OrderReview';
import { ProductOrder } from './types';
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
    canProceedToNextStep,
    calculateTotalPrice,
    navigateToNextStep,
    navigateToPreviousStep
  } = useLensContext();

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

  const getStepTitle = () => {
    switch (currentStep) {
      case 0: return t('lenses.chooseVisionNeed');
      case 1: return t('lenses.enterPrescription');
      case 2: return t('lenses.selectLensType');
      case 3: return t('lenses.selectLensThickness');
      case 4: return t('lenses.reviewOrder');
      default: return '';
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-3">{getStepTitle()}</h3>
        <div className="h-1 w-full bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 mb-6">
        {currentStep === 0 && (
          <VisionNeedSelector
            selected={visionNeed}
            onChange={(need) => {
              updateSelection({ 
                visionNeed: need,
                currentStep: 0,
                prescription: initialState.prescription,
                selectedLensType: null,
                selectedLensThickness: null
              });
              navigateToNextStep();
            }}
          />
        )}
        {currentStep === 1 && (
          <PrescriptionForm
            prescription={prescription}
            onChange={(data) => updateSelection({ prescription: data })}
          />
        )}
        {currentStep === 2 && (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={selectedLensType}
            onChange={(type) => {
              updateSelection({ selectedLensType: type });
              navigateToNextStep();
            }}
          />
        )}
        {currentStep === 3 && (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={selectedLensThickness}
            onChange={(thickness) => {
              updateSelection({ selectedLensThickness: thickness });
              navigateToNextStep();
            }}
          />
        )}
        {currentStep === 4 && (
          <OrderReview
            product={product}
            visionNeed={visionNeed!}
            prescription={visionNeed === 'singleVision' ? prescription : undefined}
            lensType={visionNeed !== 'frameOnly' ? selectedLensType : undefined}
            lensThickness={visionNeed === 'singleVision' ? selectedLensThickness : undefined}
            totalPrice={calculateTotalPrice()}
          />
        )}
      </div>

      <div className="flex justify-between mt-auto">
        {currentStep > 0 && (
          <Button onClick={navigateToPreviousStep} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Button>
        )}
        {currentStep < 4 ? (
          <Button 
            disabled={!canProceedToNextStep()}
            onClick={navigateToNextStep}
            className="ml-auto"
          >
            {t('common.continue')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            className="ml-auto"
          >
            {t('cart.addToCart')}
            <Check className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
