
export interface MarketMetric {
  label: string;
  apartments: string | number;
  houses: string | number;
}

export interface LocationData {
  name: string;
  avgPrice?: string;
  pricePerM2?: string;
  units?: number;
  type: 'apartment' | 'house';
}

export enum SlideType {
  INTRO = 'INTRO',
  SUMMARY = 'SUMMARY',
  COMPARISON = 'COMPARISON',
  LOCATIONS = 'LOCATIONS',
  TRENDS = 'TRENDS',
  CONCLUSION = 'CONCLUSION'
}
