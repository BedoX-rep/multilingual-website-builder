
export type LensType = 'clear' | 'blueLight' | 'transition';
export type LensThickness = 'standard' | 'thin' | 'ultraThin';
export type VisionNeed = 'singleVision' | 'nonPrescription' | 'frameOnly';

export interface LensTypeOption {
  id: LensType;
  name: string;
  description: string;
  priceAdditional: number;
  image: string;
}

export interface LensThicknessOption {
  id: LensThickness;
  name: string;
  description: string;
  priceAdditional: number;
  image: string;
}

export interface PrescriptionData {
  rightSphere: string;
  rightCylinder: string;
  rightAxis: string;
  leftSphere: string;
  leftCylinder: string;
  leftAxis: string;
  pupillaryDistance: string;
  useSavedPrescription: boolean;
}

export interface ProductOrder {
  cartItemId?: string;
  productId: string;
  productName: string;
  productPrice: number;
  visionNeed: VisionNeed;
  prescription?: PrescriptionData;
  lensType?: LensTypeOption;
  lensThickness?: LensThicknessOption;
  totalPrice: number;
}
