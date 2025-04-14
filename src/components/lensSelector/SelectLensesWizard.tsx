import React from 'react';
import { VisionNeedSelector } from './VisionNeedSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { OrderReview } from './OrderReview';
import { useLensContext } from './context/LensContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useFormattedTranslation } from '../../utils/translationHelper';

interface SelectLensesWizardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onComplete: (order: any) => void;
}

export const SelectLensesWizard: React.FC<SelectLensesWizardProps> = ({ product, onComplete }) => {
  const { formattedT: t } = useFormattedTranslation();
  const {
    visionNeed,
    prescription,
    lensType,
    lensThickness,
    step,
    setStep,
    calculateTotal
  } = useLensContext();

  const handleBack = () => setStep(step - 1);
  const handleNext = () => setStep(step + 1);

  const canProceed = () => {
    switch (step) {
      case 0: return !!visionNeed;
      case 1: return visionNeed === 'frameOnly' || !!prescription;
      case 2: return !!lensType;
      case 3: return !!lensThickness;
      default: return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0: return <VisionNeedSelector />;
      case 1: return visionNeed === 'singleVision' ? <PrescriptionForm /> : handleNext();
      case 2: return visionNeed !== 'frameOnly' ? <LensTypeSelector /> : handleNext();
      case 3: return visionNeed === 'singleVision' ? <LensThicknessSelector /> : handleNext();
      case 4: return <OrderReview product={product} />;
      default: return null;
    }
  };

  const getStepTitle = () => {
    switch (step) {
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
        <div className="h-1 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 mb-6">
        {renderStep()}
      </div>

      <div className="flex justify-between mt-auto">
        {step > 0 && (
          <Button onClick={handleBack} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Button>
        )}
        {step < 4 ? (
          <Button 
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center ml-auto"
          >
            {t('common.continue')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button 
            onClick={() => onComplete({
              visionNeed,
              prescription,
              lensType,
              lensThickness,
              totalPrice: calculateTotal(product.price)
            })}
            className="flex items-center ml-auto"
          >
            {t('cart.addToCart')}
            <Check className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};