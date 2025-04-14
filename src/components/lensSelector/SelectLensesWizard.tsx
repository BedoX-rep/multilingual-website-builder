import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ProductOrder } from './types';
import { VisionNeedSelector } from './VisionNeedSelector';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { useLensOptions } from './hooks/useLensOptions';
import { useLensContext } from './hooks/useLensContext'; // Assuming this context is created
import { useLensSelection } from './hooks/useLensSelection'; //This hook needs to be replaced completely
import { useWizardNavigation } from './hooks/useWizardNavigation'; //This hook needs to be replaced completely

interface SelectLensesWizardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onComplete: (orderDetails: ProductOrder) => void;
}

export const SelectLensesWizard: React.FC<SelectLensesWizardProps> = ({ product, onComplete }) => {
  const { state, handleStepChange, handleSelectionComplete } = useLensContext();
  const { formattedT: t } = useFormattedTranslation();
  const { lensTypeOptions, lensThicknessOptions } = useLensOptions();

  const calculateTotalPrice = () => {
    let total = product.price;
    if (state.selectedLensType) total += state.selectedLensType.priceAdditional;
    if (state.selectedLensThickness) total += state.selectedLensThickness.priceAdditional;
    return total;
  };

  const handleComplete = () => {
    handleSelectionComplete(); // Use the context function to complete selection
    onComplete({
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      visionNeed: state.visionNeed!,
      prescription: state.visionNeed === 'singleVision' ? state.prescription : undefined,
      lensType: state.visionNeed !== 'frameOnly' ? state.selectedLensType : undefined,
      lensThickness: state.visionNeed === 'singleVision' ? state.selectedLensThickness : undefined,
      totalPrice: calculateTotalPrice()
    });
  };

  const renderStepContent = () => {
    switch (state.currentStep) { //Use context state
      case 0:
        return (
          <VisionNeedSelector
            selected={state.visionNeed}
            onChange={(need) => {
              handleStepChange(1, { visionNeed: need }); //Update state through context
            }}
          />
        );
      case 1:
        return state.visionNeed === 'singleVision' ? (
          <PrescriptionForm
            prescription={state.prescription}
            onChange={(prescription) => {
              handleStepChange(2, { prescription }); //Update state through context
            }}
          />
        ) : null;
      case 2:
        return state.visionNeed !== 'frameOnly' ? (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={state.selectedLensType}
            onChange={(type) => {
              handleStepChange(3, { selectedLensType: type }); //Update state through context
            }}
          />
        ) : null;
      case 3:
        return state.visionNeed === 'singleVision' ? (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={state.selectedLensThickness}
            onChange={(thickness) => {
              handleStepChange(4, { selectedLensThickness: thickness }); //Update state through context
            }}
          />
        ) : null;
      case 4:
        return (
          <div className="space-y-6">
            {/* Order summary */}
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-xl mb-4">{t('lenses.orderSummary')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>{t('lenses.frame')}</span>
                  <span>${product.price}</span>
                </div>
                {state.selectedLensType && (
                  <div className="flex justify-between">
                    <span>{state.selectedLensType.name}</span>
                    <span>+${state.selectedLensType.priceAdditional}</span>
                  </div>
                )}
                {state.selectedLensThickness && (
                  <div className="flex justify-between">
                    <span>{state.selectedLensThickness.name}</span>
                    <span>+${state.selectedLensThickness.priceAdditional}</span>
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>{t('lenses.total')}</span>
                    <span>${calculateTotalPrice()}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button onClick={handleComplete} className="w-full">
              {t('lenses.addToCart')}
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{t('lenses.customizeLenses')}</h2>
        <div className="flex items-center space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded ${
                index <= state.currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {state.currentStep > 0 && (
        <button
          onClick={() => handleStepChange(state.currentStep -1)} //Go back using context
          className="flex items-center text-gray-600 mb-4 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </button>
      )}

      <div className="mb-8">
        {renderStepContent()}
      </div>
    </div>
  );
};