import React, { createContext, useContext, useState } from 'react';
import { VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption } from '../types';
import { useLensOptions } from '../hooks/useLensOptions';

interface LensState {
  currentStep: number;
  visionNeed: VisionNeed | null;
  prescription: PrescriptionData;
  selectedLensType: LensTypeOption | null;
  selectedLensThickness: LensThicknessOption | null;
}

interface LensContextType extends LensState {
  setCurrentStep: (step: number) => void;
  updateSelection: (updates: Partial<LensState>) => void;
  resetSelections: () => void;
  canProceedToNextStep: () => boolean;
  calculateTotalPrice: () => number;
  navigateToNextStep: () => void;
  navigateToPreviousStep: () => void;
}

const initialState: LensState = {
  currentStep: 0,
  visionNeed: null,
  prescription: {
    rightSphere: '',
    rightCylinder: '',
    rightAxis: '',
    leftSphere: '',
    leftCylinder: '',
    leftAxis: '',
    pupillaryDistance: '',
    useSavedPrescription: false
  },
  selectedLensType: null,
  selectedLensThickness: null
};

const LensContext = createContext<LensContextType | undefined>(undefined);

export const LensProvider: React.FC<{
  children: React.ReactNode;
  product: { id: string; name: string; price: number; };
}> = ({ children, product }) => {
  const [state, setState] = useState<LensState>(initialState);

  const updateSelection = (updates: Partial<LensState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const resetSelections = () => setState(initialState);

  const canProceedToNextStep = () => {
    switch (state.currentStep) {
      case 0: return state.visionNeed !== null;
      case 1: return state.prescription.useSavedPrescription || 
        (state.prescription.rightSphere && state.prescription.leftSphere && state.prescription.pupillaryDistance);
      case 2: return state.selectedLensType !== null;
      case 3: return state.selectedLensThickness !== null;
      default: return true;
    }
  };

  const calculateTotalPrice = () => {
    let total = product.price;
    if (state.selectedLensType) total += state.selectedLensType.priceAdditional;
    if (state.selectedLensThickness) total += state.selectedLensThickness.priceAdditional;
    return total;
  };

  const navigateToNextStep = () => {
    if (state.currentStep === 0) {
      switch(state.visionNeed) {
        case 'frameOnly':
          updateSelection({ currentStep: 4 });
          break;
        case 'nonPrescription':
          updateSelection({ currentStep: 2 });
          break;
        case 'singleVision':
          updateSelection({ currentStep: 1 });
          break;
      }
    } else if (state.currentStep < 4) {
      updateSelection({ currentStep: state.currentStep + 1 });
    }
  };

  const navigateToPreviousStep = () => {
    if (state.currentStep > 0) {
      updateSelection({ currentStep: state.currentStep - 1 });
    }
  };

  return (
    <LensContext.Provider value={{
      ...state,
      setCurrentStep: (step) => updateSelection({ currentStep: step }),
      updateSelection,
      resetSelections,
      canProceedToNextStep,
      calculateTotalPrice,
      navigateToNextStep,
      navigateToPreviousStep
    }}>
      {children}
    </LensContext.Provider>
  );
};

export const useLensContext = () => {
  const context = useContext(LensContext);
  if (!context) {
    throw new Error('useLensContext must be used within a LensProvider');
  }
  return context;
};