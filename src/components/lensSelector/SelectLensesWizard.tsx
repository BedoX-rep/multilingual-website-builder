
import React, { useState } from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { ProductOrder, VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption } from './types';

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

  const lensTypeOptions: LensTypeOption[] = [
    {
      id: 'clear',
      name: t('lenses.clearLens'),
      description: t('lenses.clearLensDescription'),
      priceAdditional: 0,
      image: '/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png'
    },
    {
      id: 'blueLight',
      name: t('lenses.blueLightLens'),
      description: t('lenses.blueLightLensDescription'),
      priceAdditional: 50,
      image: '/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png'
    },
    {
      id: 'transition',
      name: t('lenses.transitionLens'),
      description: t('lenses.transitionLensDescription'),
      priceAdditional: 100,
      image: '/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png'
    }
  ];

  const lensThicknessOptions: LensThicknessOption[] = [
    {
      id: 'standard',
      name: t('lenses.standardThickness'),
      description: t('lenses.standardThicknessDescription'),
      priceAdditional: 0,
      image: '/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png'
    },
    {
      id: 'thin',
      name: t('lenses.thinLens'),
      description: t('lenses.thinLensDescription'),
      priceAdditional: 30,
      image: '/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png'
    },
    {
      id: 'ultraThin',
      name: t('lenses.ultraThinLens'),
      description: t('lenses.ultraThinLensDescription'),
      priceAdditional: 60,
      image: '/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png'
    }
  ];

  const visionNeedOptions = [
    {
      id: 'singleVision' as VisionNeed,
      title: t('lenses.singleVisionLenses'),
      description: t('lenses.singleVisionDescription'),
      icon: <img src="/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png" alt="Single Vision" className="h-16 w-16 object-contain" />
    },
    {
      id: 'nonPrescription' as VisionNeed,
      title: t('lenses.nonPrescriptionLenses'),
      description: t('lenses.nonPrescriptionDescription'),
      icon: <Eye className="h-10 w-10 text-blue-500" />
    },
    {
      id: 'frameOnly' as VisionNeed,
      title: t('lenses.frameOnly'),
      description: t('lenses.frameOnlyDescription'),
      icon: <Frame className="h-10 w-10 text-blue-500" />
    }
  ];

  const handleSelection = (key: keyof typeof selections, value: any) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    
    if (key === 'visionNeed') {
      if (value === 'frameOnly') {
        setCurrentStep(4);
      } else if (value === 'nonPrescription') {
        setCurrentStep(2);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else if (key !== 'prescription') {
      setCurrentStep(currentStep + 1);
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

  const renderVisionNeedSelector = () => (
    <div className="space-y-4">
      {visionNeedOptions.map((option) => (
        <div
          key={option.id}
          className={`border rounded-lg p-6 cursor-pointer transition-all hover:border-blue-500 ${
            selections.visionNeed === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelection('visionNeed', option.id)}
        >
          <div className="flex items-center gap-6">
            <div className="shrink-0 w-16 h-16 flex items-center justify-center">
              {option.icon}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{option.title}</h4>
              <p className="text-gray-600">{option.description}</p>
            </div>
            {selections.visionNeed === option.id && (
              <Check className="w-6 h-6 text-blue-500 ml-auto" />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderLensType = () => (
    <div className="space-y-4">
      {lensTypeOptions.map((option) => (
        <div
          key={option.id}
          className={`border rounded-lg p-6 cursor-pointer transition-all hover:border-blue-500 ${
            selections.selectedLensType?.id === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelection('selectedLensType', option)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <img src={option.image} alt={option.name} className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{option.name}</h4>
                <p className="text-gray-600 text-sm">{option.description}</p>
                <p className="text-blue-600 font-semibold mt-2">+${option.priceAdditional}</p>
              </div>
            </div>
            {selections.selectedLensType?.id === option.id && (
              <Check className="w-6 h-6 text-blue-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderLensThickness = () => (
    <div className="space-y-4">
      {lensThicknessOptions.map((option) => (
        <div
          key={option.id}
          className={`border rounded-lg p-6 cursor-pointer transition-all hover:border-blue-500 ${
            selections.selectedLensThickness?.id === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelection('selectedLensThickness', option)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <img src={option.image} alt={option.name} className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{option.name}</h4>
                <p className="text-gray-600 text-sm">{option.description}</p>
                <p className="text-blue-600 font-semibold mt-2">+${option.priceAdditional}</p>
              </div>
            </div>
            {selections.selectedLensThickness?.id === option.id && (
              <Check className="w-6 h-6 text-blue-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderReview = () => (
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

  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderVisionNeedSelector();
      case 1:
        return (
          <>
            <p className="text-gray-600 mb-6">{t('lenses.prescriptionExplanation')}</p>
            {/* Your existing prescription form JSX */}
          </>
        );
      case 2:
        return renderLensType();
      case 3:
        return renderLensThickness();
      case 4:
        return renderReview();
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
          onClick={() => setCurrentStep(currentStep - 1)}
          className="flex items-center text-gray-600 mb-4 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </button>
      )}

      <div className="mb-8">
        {getStepContent()}
      </div>

      {currentStep === 1 && (
        <Button
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={!selections.prescription.useSavedPrescription && 
            (!selections.prescription.rightSphere || !selections.prescription.leftSphere || !selections.prescription.pupillaryDistance)}
          className="ml-auto"
        >
          {t('common.next')}
        </Button>
      )}
    </div>
  );
};
