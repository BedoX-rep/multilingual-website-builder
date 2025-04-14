export type VisionNeed = 'singleVision' | 'nonPrescription' | 'frameOnly';

export interface LensOption {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Prescription {
  rightEye: {
    sphere: string;
    cylinder: string;
    axis: string;
  };
  leftEye: {
    sphere: string;
    cylinder: string;
    axis: string;
  };
  pd: string;
  useSaved: boolean;
}

export interface LensOrder {
  visionNeed: VisionNeed;
  prescription?: Prescription;
  lensType?: LensOption;
  lensThickness?: LensOption;
  totalPrice: number;
}