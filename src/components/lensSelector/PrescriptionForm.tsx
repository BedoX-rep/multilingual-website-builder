
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

interface PrescriptionFormProps {
  prescription: PrescriptionData;
  onChange: (prescription: PrescriptionData) => void;
}

export const PrescriptionForm: React.FC<PrescriptionFormProps> = ({ prescription, onChange }) => {
  const { formattedT: t } = useFormattedTranslation();

  const handleInputChange = (field: keyof PrescriptionData, value: string) => {
    onChange({
      ...prescription,
      [field]: value
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    onChange({
      ...prescription,
      useSavedPrescription: checked
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{t('lenses.useSavedPrescription')}</h4>
          <p className="text-sm text-gray-600">{t('lenses.useSavedPrescriptionDescription')}</p>
        </div>
        <Switch 
          checked={prescription.useSavedPrescription}
          onCheckedChange={handleSwitchChange}
        />
      </div>

      {!prescription.useSavedPrescription && (
        <div className="border p-4 rounded-lg">
          <h4 className="font-medium mb-4">{t('lenses.enterPrescriptionDetails')}</h4>
          
          {/* Right Eye */}
          <div className="mb-6">
            <h5 className="font-medium mb-2">{t('lenses.rightEye')} (OD)</h5>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="rightSphere">{t('lenses.sphere')}</Label>
                <Select 
                  value={prescription.rightSphere} 
                  onValueChange={(value) => handleInputChange('rightSphere', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('lenses.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sphereOptions.map(option => (
                      <SelectItem key={`rs-${option.value}`} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
