
import React from 'react';
import { Building2, Home, TrendingUp, MapPin, BarChart3, Users, Percent, ShieldCheck, Globe, Zap, TrainFront, Waves, GraduationCap } from 'lucide-react';
import { MarketMetric, LocationData } from './types';

export const COLORS = {
  primary: '#000000',
  secondary: '#E11D48', // Dils Red
  apartments: '#FFFFFF',
  houses: '#E11D48',
  accent: '#18181B' // Zinc 900
};

export const PRICE_EVOLUTION = [
  { year: '2019', price: 1515 },
  { year: '2020', price: 1720 },
  { year: '2021', price: 1950 },
  { year: '2022', price: 2380 },
  { year: '2023', price: 2784 },
  { year: '2024', price: 3200 },
  { year: '2025', price: 3591 },
];

export const HOT_SPOTS_2025 = {
  apartments: [
    { zone: 'Cova da Piedade', metric: 'Volume / Liquidez', growth: '+12%', ticket: '€200k-€400k', lat: '22%', lng: '58%' },
    { zone: 'Laranjeiro', metric: 'Foco Yield', growth: '+9%', ticket: '€180k-€350k', lat: '38%', lng: '62%' },
    { zone: 'Cacilhas', metric: 'Efeito Lifestyle', growth: '+15%', ticket: '€250k-€500k', lat: '12%', lng: '65%' }
  ],
  houses: [
    { zone: 'Aroeira', metric: 'Luxury Standard', growth: '+22%', lat: '78%', lng: '42%', ticket: '€1.2M+' },
    { zone: 'Verdizela', metric: 'Private Enclave', growth: '+18%', lat: '82%', lng: '55%', ticket: '€900k+' },
    { zone: 'Charneca da Caparica', metric: 'Growth Hub', growth: '+14%', lat: '52%', lng: '38%', ticket: '€450k-€750k' }
  ]
};

export const MEGAPROJECTS_DETAIL = [
  {
    name: 'Parque Cidades do Tejo',
    scale: '519 hectares',
    impact: '94.000 empregos',
    highlight: 'Regeneração Urbana (Ex-Lisnave)',
    icon: <Waves size={24} />
  },
  {
    name: 'Innovation District',
    scale: '399 hectares',
    impact: '17.000 especialistas',
    highlight: 'Campus UNL / Porto Brandão',
    icon: <GraduationCap size={24} />
  },
  {
    name: 'Metro Sul do Tejo',
    scale: '7.3 km expansão',
    impact: '10 novas estações',
    highlight: 'Conectividade Estruturante',
    icon: <TrainFront size={24} />
  }
];

export const STRATEGIC_ROADMAP = [
  { zone: 'Monte da Caparica', profile: 'Agressivo', driver: 'Innovation District', projection: '+40-50%', horizon: '2028-2030' },
  { zone: 'Trafaria / Porto Brandão', profile: 'Equilibrado', driver: 'Hub Intermodal', projection: '+30-40%', horizon: '2027-2029' },
  { zone: 'Verdizela / Aroeira', profile: 'Premium', driver: 'Escassez de Solo', projection: '+20-30%', horizon: '2026-2030' },
  { zone: 'Cova da Piedade', profile: 'Conservador', driver: 'Densidade / ARU', projection: '+15-20%', horizon: 'Imediato' },
  { zone: 'Charneca da Caparica', profile: 'Rendimento', driver: 'Volume / Yield', projection: '+15-25%', horizon: 'Curto Prazo' }
];
