
import { useState } from 'react';
import { useFormattedTranslation } from '../../../utils/translationHelper';
import { VisionNeedSelector } from '../VisionNeedSelector';
import { PrescriptionForm } from '../PrescriptionForm';
import { LensTypeSelector } from '../LensTypeSelector';
import { LensThicknessSelector } from '../LensThicknessSelector';
import { OrderReview } from '../OrderReview';
import { 
  VisionNeed, 
  PrescriptionData, 
  LensTypeOption, 
  LensThicknessOption 
} from '../types';

interface UseWizardNavigationProps {
  visionNeed: VisionNeed | null;
  prescription: PrescriptionData;
  selectedLensType: LensTypeOption | null;
  selectedLensThickness: LensThicknessOption | null;
  lensTypeOptions: LensTypeOption[];
  lensThicknessOptions: LensThicknessOption[];
  setVisionNeed: (need: VisionNeed) => void;
  setPrescription: (prescription: PrescriptionData) => void;
  setSelectedLensType: (type: LensTypeOption) => void;
  setSelectedLensThickness: (thickness: LensThicknessOption) => void;
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export const useWizardNavigation = ({
  visionNeed,
  prescription,
  selectedLensType,
  selectedLensThickness,
  lensTypeOptions,
  lensThicknessOptions,
  setVisionNeed,
  setPrescription,
  setSelectedLensType,
  setSelectedLensThickness,
  product
}: UseWizardNavigationProps) => {
  const { formattedT: t } = useFormattedTranslation();
  const [currentStep, setCurrentStep] = useState(0);

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

  // Next step handler with fix for frameOnly flow
  const handleNext = () => {
    if (currentStep === 0) {
      switch(visionNeed) {
        case 'frameOnly':
          setCurrentStep(4); // Skip to review
          break;
        case 'nonPrescription':
          setCurrentStep(2); // Skip prescription form
          break;
        case 'singleVision':
          setCurrentStep(1); // Go to prescription form
          break;
        default:
          break;
      }
      return;
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

  return {
    currentStep,
    calculateProgress,
    getStepTitle,
    handleNext,
    handleBack,
    canProceed,
    renderStepContent,
  };
};
