
import React, { useMemo } from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { PrescriptionData } from './types';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface FieldOption {
  value: string;
  label: string;
}

interface PrescriptionFormProps {
  prescription: PrescriptionData;
  onChange: (prescription: PrescriptionData) => void;
}

const generateOptions = (start: number, end: number, step: number, format: (val: number) => string): FieldOption[] => {
  const options = [];
  for (let i = start; i <= end; i += step) {
    const value = format(i);
    options.push({ value, label: value });
  }
  return options;
};

export const PrescriptionForm: React.FC<PrescriptionFormProps> = ({ prescription, onChange }) => {
  const { formattedT: t } = useFormattedTranslation();

  const sphereOptions = useMemo(() => generateOptions(-10, 10, 0.25, 
    (val) => (val >= 0 ? `+${val.toFixed(2)}` : val.toFixed(2))), []);

  const cylinderOptions = useMemo(() => generateOptions(-6, 6, 0.25,
    (val) => (val >= 0 ? `+${val.toFixed(2)}` : val.toFixed(2))), []);

  const axisOptions = useMemo(() => generateOptions(1, 180, 1,
    (val) => val.toString()), []);

  const pdOptions = useMemo(() => generateOptions(50, 76, 0.5,
    (val) => val.toFixed(1)), []);

  const handleInputChange = (field: keyof PrescriptionData, value: string) => {
    const updatedPrescription = {
      ...prescription,
      [field]: value
    };
    // Only update the prescription without triggering navigation
    onChange({...updatedPrescription, preventNavigation: true});
  };

  const PrescriptionField = ({ label, options, value, onChange }: {
    label: string;
    options: FieldOption[];
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div>
      <Label>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={t('lenses.select')} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const canContinue = prescription.useSavedPrescription || (
    prescription.rightSphere && 
    prescription.leftSphere && 
    prescription.pupillaryDistance
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{t('lenses.useSavedPrescription')}</h4>
          <p className="text-sm text-gray-600">{t('lenses.useSavedPrescriptionDescription')}</p>
        </div>
        <Switch 
          checked={prescription.useSavedPrescription}
          onCheckedChange={(checked) => handleInputChange('useSavedPrescription', checked.toString())}
        />
      </div>

      {!prescription.useSavedPrescription && (
        <div className="border p-4 rounded-lg">
          <h4 className="font-medium mb-4">{t('lenses.enterPrescriptionDetails')}</h4>

          <div className="mb-6">
            <h5 className="font-medium mb-2">{t('lenses.rightEye')} (OD)</h5>
            <div className="grid grid-cols-3 gap-4">
              <PrescriptionField
                label={t('lenses.sphere')}
                options={sphereOptions}
                value={prescription.rightSphere}
                onChange={(value) => handleInputChange('rightSphere', value)}
              />
              <PrescriptionField
                label={t('lenses.cylinder')}
                options={cylinderOptions}
                value={prescription.rightCylinder}
                onChange={(value) => handleInputChange('rightCylinder', value)}
              />
              <PrescriptionField
                label={t('lenses.axis')}
                options={axisOptions}
                value={prescription.rightAxis}
                onChange={(value) => handleInputChange('rightAxis', value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-medium mb-2">{t('lenses.leftEye')} (OS)</h5>
            <div className="grid grid-cols-3 gap-4">
              <PrescriptionField
                label={t('lenses.sphere')}
                options={sphereOptions}
                value={prescription.leftSphere}
                onChange={(value) => handleInputChange('leftSphere', value)}
              />
              <PrescriptionField
                label={t('lenses.cylinder')}
                options={cylinderOptions}
                value={prescription.leftCylinder}
                onChange={(value) => handleInputChange('leftCylinder', value)}
              />
              <PrescriptionField
                label={t('lenses.axis')}
                options={axisOptions}
                value={prescription.leftAxis}
                onChange={(value) => handleInputChange('leftAxis', value)}
              />
            </div>
          </div>

          <div>
            <h5 className="font-medium mb-2">{t('lenses.pupillaryDistance')} (PD)</h5>
            <div className="grid grid-cols-2 gap-4">
              <PrescriptionField
                label={t('lenses.pupillaryDistance')}
                options={pdOptions}
                value={prescription.pupillaryDistance}
                onChange={(value) => handleInputChange('pupillaryDistance', value)}
              />
            </div>
          </div>
        </div>
      )}

      {prescription.useSavedPrescription && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h4 className="font-medium text-blue-800">{t('lenses.savedPrescriptionWillBeUsed')}</h4>
          <p className="text-sm text-blue-600">{t('lenses.savedPrescriptionExplanation')}</p>
        </div>
      )}
      
      <Button 
        type="button"
        className="w-full mt-6"
        onClick={() => {
          if (canContinue) {
            onChange({...prescription});
          }
        }}
        disabled={!canContinue}
      >
        {t('common.continue')}
      </Button>
    </div>
  );
};
