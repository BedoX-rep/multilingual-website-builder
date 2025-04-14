import React, { createContext, useContext, useState } from 'react';
import { VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption, ProductOrder } from '../types';
import { useFormattedTranslation } from '../../../utils/translationHelper';

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
  handleStepChange: (step: number) => void;
  handleSelectionComplete: () => void;
}

const initialPrescription: PrescriptionData = {
  rightSphere: '',
  rightCylinder: '',
  rightAxis: '',
  leftSphere: '',
  leftCylinder: '',
  leftAxis: '',
  pupillaryDistance: '',
  useSavedPrescription: false,
  isCompleted: false
};

const initialState: LensState = {
  currentStep: 0,
  visionNeed: null,
  prescription: initialPrescription,
  selectedLensType: null,
  selectedLensThickness: null
};

const LensContext = createContext<LensContextType | undefined>(undefined);

export const LensProvider: React.FC<{
  children: React.ReactNode;
  product: { id: string; name: string; price: number; };
  onComplete: (orderDetails: ProductOrder) => void;
}> = ({ children, product, onComplete }) => {
  const [state, setState] = useState<LensState>(initialState);
  const { formattedT: t } = useFormattedTranslation();

  const handleStepChange = (step: number) => {
    setState(prev => ({ ...prev, currentStep: step }));
  };

  const handleSelectionComplete = () => {
    const orderDetails: ProductOrder = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      visionNeed: state.visionNeed!,
      prescription: state.visionNeed === 'singleVision' ? state.prescription : undefined,
      lensType: state.visionNeed !== 'frameOnly' ? state.selectedLensType : undefined,
      lensThickness: state.visionNeed === 'singleVision' ? state.selectedLensThickness : undefined,
      totalPrice: calculateTotalPrice()
    };
    onComplete(orderDetails);
  };

  const updateSelection = (updates: Partial<LensState>) => {
    setState(prev => {
      let newState = { ...prev };

      if (updates.visionNeed && updates.visionNeed !== prev.visionNeed) {
        // Reset selections when vision type changes
        newState = {
          ...initialState,
          visionNeed: updates.visionNeed,
          currentStep: updates.visionNeed === 'frameOnly' ? 4 
                      : updates.visionNeed === 'nonPrescription' ? 2 
                      : 1
        };
      } else {
        // Apply new updates
        newState = { ...newState, ...updates };
      }

      return newState;
    });
  };

  const resetSelections = () => setState(initialState);

  const calculateTotalPrice = () => {
    let total = product.price;
    if (state.selectedLensType) {
      total += state.selectedLensType.priceAdditional;
    }
    if (state.selectedLensThickness) {
      total += state.selectedLensThickness.priceAdditional;
    }
    return total;
  };

  return (
    <LensContext.Provider value={{
      ...state,
      updateSelection,
      resetSelections,
      calculateTotalPrice,
      handleStepChange,
      handleSelectionComplete
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