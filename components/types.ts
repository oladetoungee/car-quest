// types.ts

export type ImageKey = 'wtwd' | 'wtwd1' | 'logo' | 'carHome' | 'wtwd2';

// Ensure your Car type uses ImageKey
export interface Car {
  image: ImageKey;
  name: string;
  transmission: string;
  model: string;
  rentalRatePerHour: number;
  additionalInfo: string;
}
