
import { useState } from 'react';
import { VisionNeed, PrescriptionData, LensTypeOption, LensThicknessOption } from '../types';

export const useLensSelection = () => {
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
      useSavedPrescription: false,
      isCompleted: false
    } as PrescriptionData,
    selectedLensType: null as LensTypeOption | null,
    selectedLensThickness: null as LensThicknessOption | null
  });

  const updateVisionNeed = (need: VisionNeed) => {
    setSelections(prev => ({
      ...prev,
      visionNeed: need,
      // Reset dependent fields when vision need changes
      selectedLensType: null,
      selectedLensThickness: null,
      prescription: need === 'singleVision' ? prev.prescription : {
        rightSphere: '',
        rightCylinder: '',
        rightAxis: '',
        leftSphere: '',
        leftCylinder: '',
        leftAxis: '',
        pupillaryDistance: '',
        useSavedPrescription: false,
        isCompleted: false
      }
    }));
  };

  const updatePrescription = (prescription: PrescriptionData) => {
    setSelections(prev => ({ ...prev, prescription }));
  };

  const updateLensType = (type: LensTypeOption) => {
    setSelections(prev => ({ ...prev, selectedLensType: type }));
  };

  const updateLensThickness = (thickness: LensThicknessOption) => {
    setSelections(prev => ({ ...prev, selectedLensThickness: thickness }));
  };

  return {
    selections,
    updateVisionNeed,
    updatePrescription,
    updateLensType,
    updateLensThickness
  };
};
