
import React, { useState } from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { VisionNeedSelector } from './VisionNeedSelector';
import { PrescriptionForm } from './PrescriptionForm';
import { LensTypeSelector } from './LensTypeSelector';
import { LensThicknessSelector } from './LensThicknessSelector';
import { OrderReview } from './OrderReview';
import { useCart } from '../../contexts/CartContext';
import { useWizardNavigation } from './hooks/useWizardNavigation';
import { 
  VisionNeed, 
  PrescriptionData, 
  LensTypeOption, 
  LensThicknessOption,
  ProductOrder
} from './types';
import { useLensOptions } from './hooks/useLensOptions';

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
  const { addToCart } = useCart();
  
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
  
  // Get lens options from the hook
  const { lensTypeOptions, lensThicknessOptions } = useLensOptions();
  
  // Get wizard navigation from the hook
  const { 
    currentStep, 
    calculateProgress, 
    getStepTitle, 
    handleNext, 
    handleBack, 
    canProceed, 
    renderStepContent,
  } = useWizardNavigation({
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
  });
  
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
    
    // Add to cart
    addToCart(orderDetails);
    
    // Call the onComplete callback
    onComplete(orderDetails);
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
