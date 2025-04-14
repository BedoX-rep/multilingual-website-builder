
import React, { useState } from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X } from 'lucide-react';
import { ProductOrder, VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption } from './types';
import { VisionNeedSelector } from './VisionNeedSelector';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { useLensOptions } from './hooks/useLensOptions';

interface SelectLensesWizardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onComplete: (orderDetails: ProductOrder) => void;
  onClose: () => void;
}

export const SelectLensesWizard: React.FC<SelectLensesWizardProps> = ({ product, onComplete, onClose }) => {
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

  const calculateTotalPrice = () => {
    let total = product.price;
    if (selections.selectedLensType) total += selections.selectedLensType.priceAdditional;
    if (selections.selectedLensThickness) total += selections.selectedLensThickness.priceAdditional;
    return total;
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => {
      if (selections.visionNeed === 'nonPrescription' && prev === 4) {
        return 2;
      }
      if ((selections.visionNeed === 'frameOnly') || 
          (prev === 2 && selections.visionNeed !== 'singleVision')) {
        setSelections(prevSelections => ({
          ...prevSelections,
          visionNeed: null,
          selectedLensType: null,
          selectedLensThickness: null,
          prescription: {
            rightSphere: '',
            rightCylinder: '',
            rightAxis: '',
            leftSphere: '',
            leftCylinder: '',
            leftAxis: '',
            pupillaryDistance: '',
            useSavedPrescription: false
          }
        }));
        return 0;
      }
      return prev - 1;
    });
  };

  const handleVisionNeedSelect = (need: VisionNeed) => {
    setSelections(prev => ({ ...prev, visionNeed: need }));
    if (need === 'frameOnly') {
      setCurrentStep(4);
    } else if (need === 'nonPrescription') {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  };

  const handleLensTypeSelect = (type: LensTypeOption) => {
    setSelections(prev => ({ ...prev, selectedLensType: type }));
    if (selections.visionNeed === 'singleVision') {
      setCurrentStep(3);
    } else {
      setCurrentStep(4);
    }
  };

  const handleLensThicknessSelect = (thickness: LensThicknessOption) => {
    setSelections(prev => ({ ...prev, selectedLensThickness: thickness }));
    setCurrentStep(4);
  };

  const handlePrescriptionSubmit = (prescriptionData: PrescriptionData) => {
    if (!('preventNavigation' in prescriptionData)) {
      setSelections(prev => ({ ...prev, prescription: prescriptionData }));
      setCurrentStep(2);
    } else {
      const { preventNavigation, ...prescription } = prescriptionData;
      setSelections(prev => ({ ...prev, prescription }));
    }
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
            onChange={handleVisionNeedSelect}
          />
        );
      case 1:
        return (
          <PrescriptionForm
            prescription={selections.prescription}
            onChange={handlePrescriptionSubmit}
          />
        );
      case 2:
        return (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={selections.selectedLensType}
            onChange={handleLensTypeSelect}
          />
        );
      case 3:
        return (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={selections.selectedLensThickness}
            onChange={handleLensThicknessSelect}
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

  return (
    <div className="fixed inset-0 bg-white z-50 flex">
      {/* Left side - Product Image */}
      <div className="w-1/2 bg-gray-50 p-8 flex items-center justify-center relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="max-w-md w-full object-contain"
        />
      </div>

      {/* Right side - Selection Interface */}
      <div className="w-1/2 p-8 overflow-y-auto relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col h-full max-w-xl mx-auto">
          <div className="flex-grow">
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

          {/* Price display at bottom */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{t('lenses.framePrice')}:</span>
              <span className="font-medium">${calculateTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
