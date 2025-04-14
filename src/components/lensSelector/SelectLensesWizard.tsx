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
import { useLensContext } from './context/LensContext';
import { OrderReview } from './OrderReview';

interface SelectLensesWizardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onComplete: (orderDetails: ProductOrder) => void;
}

export const SelectLensesWizard: React.FC<SelectLensesWizardProps> = ({ product }) => {
  const { 
    currentStep,
    visionNeed,
    prescription,
    selectedLensType,
    selectedLensThickness,
    updateSelection,
    handleStepChange,
    handleSelectionComplete
  } = useLensContext();

  const { formattedT: t } = useFormattedTranslation();
  const { lensTypeOptions, lensThicknessOptions } = useLensOptions();

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <VisionNeedSelector
            selected={visionNeed}
            onChange={(need) => updateSelection({ visionNeed: need })}
          />
        );
      case 1:
        return (
          <PrescriptionForm
            prescription={prescription}
            onChange={(newPrescription) => updateSelection({ prescription: newPrescription })}
          />
        );
      case 2:
        return (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={selectedLensType}
            onChange={(type) => updateSelection({ selectedLensType: type })}
            handleNext={() => handleStepChange(3)}
          />
        );
      case 3:
        return (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={selectedLensThickness}
            onChange={(thickness) => updateSelection({ selectedLensThickness: thickness })}
            handleNext={() => handleStepChange(4)}
          />
        );
      case 4:
        return (
          <OrderReview
            frame={product}
            onComplete={handleSelectionComplete}
          />
        );
      default:
        return null;
    }
  };

  const totalSteps = visionNeed === 'frameOnly' ? 2 
                     : visionNeed === 'nonPrescription' ? 4 
                     : 5;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{t('lenses.customizeLenses')}</h2>
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {currentStep > 0 && (
        <button
          onClick={() => handleStepChange(currentStep - 1)}
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