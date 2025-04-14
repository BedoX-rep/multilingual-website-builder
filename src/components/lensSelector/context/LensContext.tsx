
import React, { createContext, useContext, useState } from 'react';
import { VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption, ProductOrder } from '../types';
import { useLensOptions } from '../hooks/useLensOptions';

interface LensContextType {
  currentStep: number;
  visionNeed: VisionNeed | null;
  prescription: PrescriptionData;
  selectedLensType: LensTypeOption | null;
  selectedLensThickness: LensThicknessOption | null;
  setCurrentStep: (step: number) => void;
  setVisionNeed: (need: VisionNeed) => void;
  setPrescription: (data: PrescriptionData) => void;
  setSelectedLensType: (type: LensTypeOption | null) => void;
  setSelectedLensThickness: (thickness: LensThicknessOption | null) => void;
  canProceedToNextStep: () => boolean;
  calculateTotalPrice: () => number;
  navigateToNextStep: () => void;
  navigateToPreviousStep: () => void;
  resetSelections: () => void;
}

const LensContext = createContext<LensContextType | undefined>(undefined);

export const LensProvider: React.FC<{
  children: React.ReactNode;
  product: { id: string; name: string; price: number; };
}> = ({ children, product }) => {
  const [currentStep, setCurrentStep] = useState(0);
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

  const resetSelections = () => {
    setPrescription({
      rightSphere: '',
      rightCylinder: '',
      rightAxis: '',
      leftSphere: '',
      leftCylinder: '',
      leftAxis: '',
      pupillaryDistance: '',
      useSavedPrescription: false
    });
    setSelectedLensType(null);
    setSelectedLensThickness(null);
  };

  const canProceedToNextStep = () => {
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

  const calculateTotalPrice = () => {
    let total = product.price;
    if (selectedLensType) total += selectedLensType.priceAdditional;
    if (selectedLensThickness) total += selectedLensThickness.priceAdditional;
    return total;
  };

  const navigateToNextStep = () => {
    if (currentStep === 0) {
      switch(visionNeed) {
        case 'frameOnly':
          setCurrentStep(4);
          break;
        case 'nonPrescription':
          setCurrentStep(2);
          break;
        case 'singleVision':
          setCurrentStep(1);
          break;
      }
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const navigateToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <LensContext.Provider value={{
      currentStep,
      visionNeed,
      prescription,
      selectedLensType,
      selectedLensThickness,
      setCurrentStep,
      setVisionNeed,
      setPrescription,
      setSelectedLensType,
      setSelectedLensThickness,
      canProceedToNextStep,
      calculateTotalPrice,
      navigateToNextStep,
      navigateToPreviousStep,
      resetSelections
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
