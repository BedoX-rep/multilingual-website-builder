import React, { useState } from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { ProductOrder, VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption } from './types';
import { VisionNeedSelector } from './VisionNeedSelector';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
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

export const SelectLensesWizard: React.FC<SelectLensesWizardProps> = ({ product, onComplete }) => {
  const { formattedT: t } = useFormattedTranslation();
  const { lensTypeOptions, lensThicknessOptions } = useLensOptions();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    visionNeed: null as VisionNeed | null,
    prescription: {
      rightSphere: '',
      rightCylinder: '',
      rightAxis: '',
      leftSphere: '',
      leftCylinder: '',
      leftAxis: '',
      pupillaryDistance: '',
      useSavedPrescription: false
    } as PrescriptionData,
    selectedLensType: null as LensTypeOption | null,
    selectedLensThickness: null as LensThicknessOption | null
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSelection = (key: keyof typeof selections, value: any) => {
    setSelections(prev => ({ ...prev, [key]: value }));

    if (key === 'visionNeed') {
      if (value === 'frameOnly') {
        setCurrentStep(4);
      } else if (value === 'nonPrescription') {
        setCurrentStep(2);
      } else {
        setCurrentStep(1);
      }
    }
  };

  const calculateTotalPrice = () => {
    let total = product.price;
    if (selections.selectedLensType) total += selections.selectedLensType.priceAdditional;
    if (selections.selectedLensThickness) total += selections.selectedLensThickness.priceAdditional;
    return total;
  };

  const handleComplete = () => {
    const orderDetails: ProductOrder = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      visionNeed: selections.visionNeed!,
      prescription: selections.visionNeed === 'singleVision' ? selections.prescription : undefined,
      lensType: selections.visionNeed !== 'frameOnly' ? selections.selectedLensType : undefined,
      lensThickness: selections.visionNeed === 'singleVision' ? selections.selectedLensThickness : undefined,
      totalPrice: calculateTotalPrice()
    };
    onComplete(orderDetails);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <VisionNeedSelector
            selected={selections.visionNeed}
            onChange={(value) => handleSelection('visionNeed', value)}
          />
        );
      case 1:
        return (
          <div>
            <p className="text-gray-600 mb-6">{t('lenses.prescriptionExplanation')}</p>
            {/* Prescription form placeholder */}
          </div>
        );
      case 2:
        return (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={selections.selectedLensType}
            onChange={(value) => setSelections(prev => ({ ...prev, selectedLensType: value }))}
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={selections.selectedLensThickness}
            onChange={(value) => setSelections(prev => ({ ...prev, selectedLensThickness: value }))}
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-xl mb-4">{t('lenses.orderSummary')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>{t('lenses.frame')}</span>
                  <span>${product.price}</span>
                </div>
                {selections.selectedLensType && (
                  <div className="flex justify-between">
                    <span>{selections.selectedLensType.name}</span>
                    <span>+${selections.selectedLensType.priceAdditional}</span>
                  </div>
                )}
                {selections.selectedLensThickness && (
                  <div className="flex justify-between">
                    <span>{selections.selectedLensThickness.name}</span>
                    <span>+${selections.selectedLensThickness.priceAdditional}</span>
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

  const getStepTitle = () => {
    switch (currentStep) {
      case 0:
        return t('lenses.selectVisionType');
      case 1:
        return t('lenses.enterPrescription');
      case 2:
        return t('lenses.selectLensType');
      case 3:
        return t('lenses.selectLensThickness');
      case 4:
        return t('lenses.reviewOrder');
      default:
        return '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{t('lenses.customizeLenses')}</h2>
        <p className="text-gray-600 mb-4">{getStepTitle()}</p>
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

      {currentStep > 0 && (
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 mb-4 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </button>
      )}

      <div className="mb-8">
        {getStepContent()}
      </div>
    </div>
  );
};