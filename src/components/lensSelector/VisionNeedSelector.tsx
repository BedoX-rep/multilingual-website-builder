import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { VisionNeed } from './types';
import { Glasses, Eye, Frame } from 'lucide-react';

interface VisionNeedSelectorProps {
  selected: VisionNeed | null;
  onChange: (selected: VisionNeed) => void;
  handleNext: () => void; // Added handleNext function
}

export const VisionNeedSelector: React.FC<VisionNeedSelectorProps> = ({ selected, onChange, handleNext }) => { // Added handleNext prop
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
    <div>
      <h2 className="text-xl font-medium mb-2">{t('lenses.chooseVisionNeed')}</h2>

      <p className="text-sm text-gray-600 mb-4">
        Based on your prescription, choose your lens from the options below or choose non-prescription if you want visual comfort without vision correction.
      </p>

      <p className="text-sm text-blue-600 mb-6 hover:underline cursor-pointer">
        Learn more about lens differences
      </p>

      <div className="space-y-3">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all hover:border-blue-500 ${
              selected?.id === option.id 
                ? 'border-blue-500 bg-white shadow-sm' 
                : 'border-gray-200 bg-white'
            }`}
            onClick={() => onChange(option.id)}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                {option.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-base mb-1">{option.title}</h4>
                <p className="text-gray-500 text-sm">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};