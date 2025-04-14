
import React from 'react';
import { useFormattedTranslation } from '../../utils/translationHelper';
import { PrescriptionData } from './types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  const updateField = (field: keyof PrescriptionData) => (value: string) => {
    onChange({
      ...prescription,
      [field]: value
    });
  };

  // Generate sphere options (-10.00 to +10.00 in 0.25 increments)
  const sphereOptions = [];
  for (let i = -10; i <= 10; i += 0.25) {
    const value = i.toFixed(2);
    const label = i >= 0 ? `+${value}` : value;
    sphereOptions.push({ value, label });
  }

  // Generate cylinder options (-6.00 to +6.00 in 0.25 increments)
  const cylinderOptions = [];
  for (let i = -6; i <= 6; i += 0.25) {
    const value = i.toFixed(2);
    const label = i >= 0 ? `+${value}` : value;
    cylinderOptions.push({ value, label });
  }

  // Generate axis options (1 to 180 in 1 increments)
  const axisOptions = [];
  for (let i = 1; i <= 180; i++) {
    axisOptions.push({ value: i.toString(), label: i.toString() });
  }

  // Generate PD options (50 to 76 in 0.5 increments)
  const pdOptions = [];
  for (let i = 50; i <= 76; i += 0.5) {
    const value = i.toFixed(1);
    pdOptions.push({ value, label: value });
  }

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{t('lenses.useSavedPrescription')}</h4>
          <p className="text-sm text-gray-600">{t('lenses.useSavedPrescriptionDescription')}</p>
        </div>
        <Switch 
          checked={prescription.useSavedPrescription}
          onCheckedChange={(checked) => onChange({ ...prescription, useSavedPrescription: checked })}
        />
      </div>

      {!prescription.useSavedPrescription && (
        <div className="border p-4 rounded-lg">
          <h4 className="font-medium mb-4">{t('lenses.enterPrescriptionDetails')}</h4>
          
          {/* Right Eye */}
          <div className="mb-6">
            <h5 className="font-medium mb-2">{t('lenses.rightEye')} (OD)</h5>
            <div className="grid grid-cols-3 gap-4">
              <PrescriptionField
                label={t('lenses.sphere')}
                options={sphereOptions}
                value={prescription.rightSphere}
                onChange={updateField('rightSphere')}
              />
              <PrescriptionField
                label={t('lenses.cylinder')}
                options={cylinderOptions}
                value={prescription.rightCylinder}
                onChange={updateField('rightCylinder')}
              />
              <PrescriptionField
                label={t('lenses.axis')}
                options={axisOptions}
                value={prescription.rightAxis}
                onChange={updateField('rightAxis')}
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
                onChange={updateField('leftSphere')}
              />
              <PrescriptionField
                label={t('lenses.cylinder')}
                options={cylinderOptions}
                value={prescription.leftCylinder}
                onChange={updateField('leftCylinder')}
              />
              <PrescriptionField
                label={t('lenses.axis')}
                options={axisOptions}
                value={prescription.leftAxis}
                onChange={updateField('leftAxis')}
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
                onChange={updateField('pupillaryDistance')}
              />
            </div>
          </div>
              <div>
                <Label htmlFor="rightCylinder">{t('lenses.cylinder')}</Label>
                <Select 
                  value={prescription.rightCylinder}
                  onValueChange={(value) => handleInputChange('rightCylinder', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {cylinderOptions.map(option => (
                      <SelectItem key={`rc-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rightAxis">{t('lenses.axis')}</Label>
                <Select 
                  value={prescription.rightAxis}
                  onValueChange={(value) => handleInputChange('rightAxis', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {axisOptions.map(option => (
                      <SelectItem key={`ra-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Left Eye */}
          <div className="mb-6">
            <h5 className="font-medium mb-2">{t('lenses.leftEye')} (OS)</h5>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="leftSphere">{t('lenses.sphere')}</Label>
                <Select 
                  value={prescription.leftSphere}
                  onValueChange={(value) => handleInputChange('leftSphere', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sphereOptions.map(option => (
                      <SelectItem key={`ls-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="leftCylinder">{t('lenses.cylinder')}</Label>
                <Select 
                  value={prescription.leftCylinder}
                  onValueChange={(value) => handleInputChange('leftCylinder', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {cylinderOptions.map(option => (
                      <SelectItem key={`lc-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="leftAxis">{t('lenses.axis')}</Label>
                <Select 
                  value={prescription.leftAxis}
                  onValueChange={(value) => handleInputChange('leftAxis', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {axisOptions.map(option => (
                      <SelectItem key={`la-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Pupillary Distance */}
          <div>
            <h5 className="font-medium mb-2">{t('lenses.pupillaryDistance')} (PD)</h5>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pupillaryDistance">{t('lenses.pupillaryDistance')}</Label>
                <Select 
                  value={prescription.pupillaryDistance}
                  onValueChange={(value) => handleInputChange('pupillaryDistance', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {pdOptions.map(option => (
                      <SelectItem key={`pd-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
    </div>
  );
};
