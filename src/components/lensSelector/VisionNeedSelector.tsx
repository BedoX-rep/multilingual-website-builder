import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { VisionNeed } from './types';
import { Glasses, Eye, Frame } from 'lucide-react';
import { Check } from 'lucide-react'; // Added import for Check icon

interface VisionNeedSelectorProps {
  selected: VisionNeed | null;
  onChange: (selected: VisionNeed) => void;
  handleNext: () => void; 
  totalSteps: number; // Added totalSteps prop for progress tracker
  currentStep: number; // Added currentStep prop for progress tracker

}

export const VisionNeedSelector: React.FC<VisionNeedSelectorProps> = ({ selected, onChange, handleNext, totalSteps, currentStep }) => { 
  const { formattedT: t } = useFormattedTranslation();

  const options = [
    {
      id: 'singleVision' as VisionNeed,
      title: t('lenses.singleVisionLenses'),
      description: t('lenses.singleVisionDescription'),
      icon: <img src="/lovable-uploads/4e9518da-6945-4bfb-b417-e85e94b64c19.png" alt="Single Vision" className="h-16 w-16 object-contain" />
    },
    {
      id: 'nonPrescription' as VisionNeed,
      title: t('lenses.nonPrescriptionLenses'),
      description: t('lenses.nonPrescriptionDescription'),
      icon: <Eye className="h-10 w-10 text-blue-500" />
    },
    {
      id: 'frameOnly' as VisionNeed,
      title: t('lenses.frameOnly'),
      description: t('lenses.frameOnlyDescription'),
      icon: <Frame className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-medium text-gray-900">Choose your vision need</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Based on your prescription, choose your lens from the options below or choose non-prescription if you want visual comfort without vision correction.
        </p>
        <a href="#" className="text-blue-600 text-sm hover:underline">Learn more about lens differences</a>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`border rounded-lg p-6 cursor-pointer transition-all hover:border-blue-500 ${
              selected?.id === option.id 
                ? 'border-blue-600 shadow-sm' 
                : 'border-gray-200'
            }`}
            onClick={() => onChange(option.id)}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                {option.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg mb-1">{option.title}</h4>
                <p className="text-gray-500 text-sm">{option.description}</p>
              </div>
              {selected?.id === option.id && (
                <Check className="w-5 h-5 text-blue-600 ml-auto" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};