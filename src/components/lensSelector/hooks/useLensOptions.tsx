
import { useFormattedTranslation } from '../../../utils/translationHelper';
import { LensTypeOption, LensThicknessOption } from '../types';

export const useLensOptions = () => {
  const { formattedT: t } = useFormattedTranslation();

  // Available options with pricing
  const lensTypeOptions: LensTypeOption[] = [
    {
      id: 'clear', 
      name: t('lenses.clearLens'), 
      description: t('lenses.clearLensDescription'),
      priceAdditional: 0,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'blueLight', 
      name: t('lenses.blueLightLens'), 
      description: t('lenses.blueLightLensDescription'),
      priceAdditional: 50,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'transition', 
      name: t('lenses.transitionLens'), 
      description: t('lenses.transitionLensDescription'),
      priceAdditional: 100,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    }
  ];
  
  const lensThicknessOptions: LensThicknessOption[] = [
    {
      id: 'standard', 
      name: t('lenses.standardThickness'), 
      description: t('lenses.standardThicknessDescription'),
      priceAdditional: 0,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'thin', 
      name: t('lenses.thinLens'), 
      description: t('lenses.thinLensDescription'),
      priceAdditional: 30,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    },
    {
      id: 'ultraThin', 
      name: t('lenses.ultraThinLens'), 
      description: t('lenses.ultraThinLensDescription'),
      priceAdditional: 60,
      image: '/lovable-uploads/3059e7f4-414f-4f26-8bcc-81da396de129.png'
    }
  ];

  return { lensTypeOptions, lensThicknessOptions };
};
