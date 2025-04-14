import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { LensTypeOption } from './types';
import { Check } from 'lucide-react';
import { Card } from '../ui/card';

interface OptionSelectorProps<T> {
  options: T[];
  selected: T | null;
  onChange: (selected: T) => void;
  handleNext: () => void;
  isPrescriptionPage: boolean; // Added prop to indicate page type
}

export const LensTypeSelector: React.FC<OptionSelectorProps<LensTypeOption>> = ({ 
  options, 
  selected, 
  onChange, 
  handleNext,
  isPrescriptionPage
}) => {
  const { formattedT: t } = useFormattedTranslation();

  return (
    <div>
      <p className="text-gray-600 mb-6">
        {t('lenses.selectLensTypeExplanation')}
      </p>

      <div className="space-y-4">
        {options.map((option) => (
          <Card 
            key={option.id}
            className={`p-6 cursor-pointer transition-all hover:border-blue-500 ${
              selected?.id === option.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
            }`}
            onClick={() => {
              onChange(option);
              if (!isPrescriptionPage) {
                handleNext();
              }
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                  <img 
                    src={option.image} 
                    alt={option.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-lg">{option.name}</h4>
                    {option.priceAdditional > 0 && (
                      <span className="text-sm font-medium">
                        + ${option.priceAdditional.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>

              {selected?.id === option.id && (
                <div className="shrink-0 ml-4 text-blue-500">
                  <Check className="h-6 w-6" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      {isPrescriptionPage && <button>{t('common.next')}</button>} {/*Conditional rendering of the button*/}
    </div>
  );
};