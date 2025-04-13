
import React, { useState } from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { VisionNeedSelector } from './VisionNeedSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { OrderReview } from './OrderReview';

// Define lens option types and prices
export type LensType = 'clear' | 'blueLight' | 'transition';
export type LensThickness = 'standard' | 'thin' | 'ultraThin';
export type VisionNeed = 'singleVision' | 'nonPrescription' | 'frameOnly';

export interface LensTypeOption {
  id: LensType;
  name: string;
  description: string;
  priceAdditional: number;
  image: string;
}

export interface LensThicknessOption {
  id: LensThickness;
  name: string;
  description: string;
  priceAdditional: number;
  image: string;
}

export interface PrescriptionData {
  rightSphere: string;
  rightCylinder: string;
  rightAxis: string;
  leftSphere: string;
  leftCylinder: string;
  leftAxis: string;
  pupillaryDistance: string;
  useSavedPrescription: boolean;
}

export interface ProductOrder {
  productId: string;
  productName: string;
  productPrice: number;
  visionNeed: VisionNeed;
  prescription?: PrescriptionData;
  lensType?: LensTypeOption;
  lensThickness?: LensThicknessOption;
  totalPrice: number;
}

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
  
  // Wizard step state
  const [currentStep, setCurrentStep] = useState(0);
  
  // User selections state
  const [visionNeed, setVisionNeed] = useState<VisionNeed | null>(null);
  const [prescription, setPrescription] = useState<PrescriptionData>({
    rightSphere: '',
    rightCylinder: '',
    rightAxis: '',
    leftSphere: '',
    leftCylinder: '',
    leftAxis: '',
    pupillaryDistance: '',
    useSavedPrescription: false
  });
  const [selectedLensType, setSelectedLensType] = useState<LensTypeOption | null>(null);
  const [selectedLensThickness, setSelectedLensThickness] = useState<LensThicknessOption | null>(null);
  
  // Available options with pricing
  const lensTypeOptions: LensTypeOption[] = [
    {
      id: 'clear', 
      name: t('lenses.clearLens'), 
      description: t('lenses.clearLensDescription'),
      priceAdditional: 0,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'blueLight', 
      name: t('lenses.blueLightLens'), 
      description: t('lenses.blueLightLensDescription'),
      priceAdditional: 50,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'transition', 
      name: t('lenses.transitionLens'), 
      description: t('lenses.transitionLensDescription'),
      priceAdditional: 100,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    }
  ];
  
  const lensThicknessOptions: LensThicknessOption[] = [
    {
      id: 'standard', 
      name: t('lenses.standardThickness'), 
      description: t('lenses.standardThicknessDescription'),
      priceAdditional: 0,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'thin', 
      name: t('lenses.thinLens'), 
      description: t('lenses.thinLensDescription'),
      priceAdditional: 30,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'ultraThin', 
      name: t('lenses.ultraThinLens'), 
      description: t('lenses.ultraThinLensDescription'),
      priceAdditional: 60,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    }
  ];
  
  // Calculate total price based on selections
  const calculateTotalPrice = () => {
    let total = product.price;
    
    if (visionNeed === 'frameOnly') {
      return total;
    }
    
    if (selectedLensType) {
      total += selectedLensType.priceAdditional;
    }
    
    if (visionNeed === 'singleVision' && selectedLensThickness) {
      total += selectedLensThickness.priceAdditional;
    }
    
    return total;
  };
  
  // Handle form submission
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
  
  // Next step handler with fix for frameOnly flow
  const handleNext = () => {
    if (currentStep === 0) {
      // Special case for frameOnly which now properly jumps to the review step
      if (visionNeed === 'frameOnly') {
        setCurrentStep(4); // Skip directly to the review step (index 4)
        return;
      }
      
      // Special case for nonPrescription which skips the prescription form step
      if (visionNeed === 'nonPrescription') {
        setCurrentStep(2); // Skip to lens type selection
        return;
      }
    }
    
    if (currentStep < getMaxSteps() - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Back step handler with fixes for special flows
  const handleBack = () => {
    // Special case for frameOnly which jumps back to vision need selection
    if (visionNeed === 'frameOnly' && currentStep === 4) {
      setCurrentStep(0);
      return;
    }
    
    // Special case for nonPrescription which skips the prescription form step
    if (visionNeed === 'nonPrescription' && currentStep > 0) {
      if (currentStep === 2) {
        setCurrentStep(0); // From lens type back to vision need
        return;
      } else if (currentStep === 4) {
        setCurrentStep(2); // From review back to lens type
        return;
      }
    }
    
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Get maximum steps based on vision need
  const getMaxSteps = () => {
    return 5; // We always keep 5 steps total, but navigate through them differently
  };
  
  // Determine if we can proceed to the next step
  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return visionNeed !== null;
      case 1:
        return prescription.useSavedPrescription || 
          (prescription.rightSphere && prescription.leftSphere && prescription.pupillaryDistance);
      case 2:
        return selectedLensType !== null;
      case 3:
        return selectedLensThickness !== null;
      default:
        return true;
    }
  };
  
  // Get step title
  const getStepTitle = () => {
    switch (currentStep) {
      case 0:
        return t('lenses.chooseVisionNeed');
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
  
  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <VisionNeedSelector
            selected={visionNeed}
            onChange={setVisionNeed}
          />
        );
      case 1:
        return (
          <PrescriptionForm 
            prescription={prescription}
            onChange={setPrescription}
          />
        );
      case 2:
        return (
          <LensTypeSelector
            options={lensTypeOptions}
            selected={selectedLensType}
            onChange={setSelectedLensType}
          />
        );
      case 3:
        return (
          <LensThicknessSelector
            options={lensThicknessOptions}
            selected={selectedLensThickness}
            onChange={setSelectedLensThickness}
          />
        );
      case 4:
        return (
          <OrderReview
            product={product}
            visionNeed={visionNeed!}
            prescription={visionNeed === 'singleVision' ? prescription : undefined}
            lensType={visionNeed !== 'frameOnly' ? selectedLensType : undefined}
            lensThickness={visionNeed === 'singleVision' ? selectedLensThickness : undefined}
            totalPrice={calculateTotalPrice()}
          />
        );
      default:
        return null;
    }
  };
  
  // Calculate progress based on vision need and current step
  const calculateProgress = () => {
    // For frame only, we only have 2 meaningful steps (selection and review)
    if (visionNeed === 'frameOnly') {
      return currentStep === 0 ? 0 : 1;
    }
    
    // For non-prescription, we have 3 steps (selection, lens type, review)
    if (visionNeed === 'nonPrescription') {
      if (currentStep === 0) return 0;
      if (currentStep === 2) return 0.5;
      if (currentStep === 4) return 1;
      return 0;
    }
    
    // For single vision, we have all 5 steps
    return currentStep / 4; // Divide by (steps-1) to get proportion
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-3">{getStepTitle()}</h3>
        
        {/* Progress indicator */}
        <div className="flex justify-between mb-6">
          <div 
            className="flex-1 h-1 rounded-full bg-blue-600"
            style={{ width: `${calculateProgress() * 100}%` }}
          />
          <div 
            className="flex-1 h-1 rounded-full bg-gray-200"
            style={{ width: `${(1 - calculateProgress()) * 100}%` }}
          />
        </div>
      </div>
      
      <div className="flex-1 mb-6">
        {renderStepContent()}
      </div>
      
      <div className="flex justify-between mt-auto">
        {currentStep > 0 && (
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Button>
        )}
        
        {currentStep === 0 && (
          <div></div> // Empty div to maintain layout when there's no back button
        )}
        
        {currentStep < 4 ? (
          <Button 
            disabled={!canProceed()}
            onClick={handleNext}
            className="flex items-center"
          >
            {t('common.continue')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            className="flex items-center"
          >
            {t('cart.addToCart')}
            <Check className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
