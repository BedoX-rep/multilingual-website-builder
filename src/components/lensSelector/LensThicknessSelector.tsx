
import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { LensThicknessOption } from './types';
import { Check } from 'lucide-react';

interface LensThicknessSelectorProps {
  options: LensThicknessOption[];
  selected: LensThicknessOption | null;
  onChange: (selected: LensThicknessOption) => void;
  handleNext: () => void;
}

export const LensThicknessSelector: React.FC<LensThicknessSelectorProps> = ({
  options,
  selected,
  onChange,
  handleNext
}) => {
  const { formattedT: t } = useFormattedTranslation();

  const handleSelection = (option: LensThicknessOption) => {
    onChange(option);
    handleNext();
  };

  return (
    <div>
      <p className="text-gray-600 mb-6">
        {t('lenses.selectLensThicknessExplanation')}
      </p>

      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg p-6 cursor-pointer transition-all hover:border-blue-500 ${
              selected?.id === option.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
            }`}
            onClick={() => handleSelection(option)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  {option.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{option.name}</h4>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                  <p className="text-blue-600 font-semibold mt-2">
                    +${option.priceAdditional}
                  </p>
                </div>
              </div>
              {selected?.id === option.id && (
                <Check className="w-6 h-6 text-blue-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
