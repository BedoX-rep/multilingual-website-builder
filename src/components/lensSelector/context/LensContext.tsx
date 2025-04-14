
import React, { createContext, useContext, useState } from 'react';
import { VisionNeed, LensOption, Prescription, LensOrder } from '../types';

interface LensContextType {
  visionNeed: VisionNeed | null;
  setVisionNeed: (need: VisionNeed) => void;
  prescription: Prescription | null;
  setPrescription: (prescription: Prescription) => void;
  lensType: LensOption | null;
  setLensType: (type: LensOption) => void;
  lensThickness: LensOption | null;
  setLensThickness: (thickness: LensOption) => void;
  resetSelections: () => void;
  step: number;
  setStep: (step: number) => void;
  calculateTotal: (basePrice: number) => number;
}

export const LensContext = createContext<LensContextType | null>(null);

export const LensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visionNeed, setVisionNeed] = useState<VisionNeed | null>(null);
  const [prescription, setPrescription] = useState<Prescription | null>(null);
  const [lensType, setLensType] = useState<LensOption | null>(null);
  const [lensThickness, setLensThickness] = useState<LensOption | null>(null);
  const [step, setStep] = useState(0);

  const resetSelections = () => {
    setPrescription(null);
    setLensType(null);
    setLensThickness(null);
    setStep(0);
  };

  const calculateTotal = (basePrice: number): number => {
    let total = basePrice;
    if (lensType) total += lensType.price;
    if (lensThickness) total += lensThickness.price;
    return total;
  };

  return (
    <LensContext.Provider value={{
      visionNeed,
      setVisionNeed,
      prescription,
      setPrescription,
      lensType,
      setLensType,
      lensThickness,
      setLensThickness,
      resetSelections,
      step,
      setStep,
      calculateTotal
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
