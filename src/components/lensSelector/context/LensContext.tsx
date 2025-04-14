import React, { createContext, useContext, useState } from 'react';
import { VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption } from '../types';

interface LensState {
  currentStep: number;
  visionNeed: VisionNeed | null;
  prescription: PrescriptionData;
  selectedLensType: LensTypeOption | null;
  selectedLensThickness: LensThicknessOption | null;
}

interface LensContextType extends LensState {
  updateSelection: (updates: Partial<LensState>) => void;
  resetSelections: () => void;
  calculateTotalPrice: () => number;
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

  const trackStepCompletion = (step: number, selection?: any) => {
    // Track step completion
    const stepNames = {
      0: 'Vision Need',
      1: 'Prescription',
      2: 'Lens Type',
      3: 'Lens Thickness',
      4: 'Review'
    };
    
    console.log(`Step ${step} (${stepNames[step as keyof typeof stepNames]}) completed`, selection);
    // Here you can add your analytics implementation
  };

  const updateSelection = (updates: Partial<LensState>) => {
    setState(prev => {
      let newState = { ...prev };

      // Complete reset when going back to vision selection
      if (updates.currentStep === 0) {
        newState = { ...initialState };
      }
      // Apply new updates
      newState = { ...newState, ...updates };

      // Track meaningful selections
      if (updates.visionNeed) {
        trackStepCompletion(0, updates.visionNeed);
      }
      if (updates.selectedLensType) {
        trackStepCompletion(2, updates.selectedLensType);
      }
      if (updates.selectedLensThickness) {
        trackStepCompletion(3, updates.selectedLensThickness);
      }

      // Reset dependent selections when vision need changes
      if (updates.visionNeed && updates.visionNeed !== prev.visionNeed) {
        newState.selectedLensType = null;
        newState.selectedLensThickness = null;
        newState.prescription = initialState.prescription;
        
        // Set appropriate step based on vision need
        if (updates.visionNeed === 'frameOnly') {
          newState.currentStep = 4;
        } else if (updates.visionNeed === 'nonPrescription') {
          newState.currentStep = 2;
        } else {
          newState.currentStep = 1;
        }
      }

      // Handle back navigation
      if (updates.currentStep < prev.currentStep) {
        if (prev.currentStep === 2 && updates.currentStep === 0) {
          newState.visionNeed = null;
          newState.selectedLensType = null;
          newState.selectedLensThickness = null;
          newState.prescription = initialState.prescription;
        }
      }

      return newState;
    });
  };

  const resetSelections = () => setState(initialState);

  const calculateTotalPrice = () => {
    let total = product.price;
    if (state.selectedLensType) total += state.selectedLensType.priceAdditional;
    if (state.selectedLensThickness) total += state.selectedLensThickness.priceAdditional;
    return total;
  };

  return (
    <LensContext.Provider value={{
      ...state,
      updateSelection,
      resetSelections,
      calculateTotalPrice
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