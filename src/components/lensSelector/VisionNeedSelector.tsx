
import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { VisionNeed } from './SelectLensesWizard';
import { Glasses, Eye, Frame } from 'lucide-react';

interface VisionNeedSelectorProps {
  selected: VisionNeed | null;
  onChange: (selected: VisionNeed) => void;
}

export const VisionNeedSelector: React.FC<VisionNeedSelectorProps> = ({ selected, onChange }) => {
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
      <h2 className="text-2xl font-semibold mb-4">{t('lenses.chooseVisionNeed')}</h2>
      
      <p className="text-gray-600 mb-3">
        {t('lenses.visionNeedExplanation')}
      </p>
      
      <p className="text-sm text-blue-600 mb-6 underline cursor-pointer">
        {t('lenses.learnMoreAboutLensDifferences')}
      </p>
      
      <div className="space-y-4">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selected === option.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onChange(option.id)}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                {option.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{option.title}</h4>
                <p className="text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
