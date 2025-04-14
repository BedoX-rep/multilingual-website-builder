import { useState, useCallback } from 'react';
import { VisionNeed } from '../types';

interface UseWizardNavigationProps {
  visionNeed: VisionNeed | null;
}

export const useWizardNavigation = ({ visionNeed }: UseWizardNavigationProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const getMaxSteps = useCallback(() => {
    switch (visionNeed) {
      case 'frameOnly':
        return 2; // Vision need -> Review
      case 'nonPrescription':
        return 3; // Vision need -> Lens type -> Review
      case 'singleVision':
        return 5; // Vision need -> Prescription -> Lens type -> Thickness -> Review
      default:
        return 5;
    }
  }, [visionNeed]);

  const handleNext = useCallback(() => {
    if (currentStep < getMaxSteps() - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, getMaxSteps]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const jumpToStep = useCallback((step: number) => {
    if (step >= 0 && step < getMaxSteps()) {
      setCurrentStep(step);
    }
  }, [getMaxSteps]);

  return {
    currentStep,
    handleNext,
    handleBack,
    jumpToStep,
    maxSteps: getMaxSteps()
  };
};