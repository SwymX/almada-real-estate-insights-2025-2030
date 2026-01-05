
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  suffix?: string;
  icon: React.ReactNode;
  subtitle?: string;
  colorClass?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, suffix, icon, subtitle, colorClass = 'text-white' }) => {
  return (
    <div className="bg-zinc-950 p-8 rounded-[2rem] border border-zinc-900 shadow-2xl hover:border-[#E11D48]/30 transition-all group relative overflow-hidden">
      <div className="flex items-center justify-between mb-8 relative z-10">
        <span className={`p-3 rounded-2xl bg-zinc-900 text-zinc-500 group-hover:bg-[#E11D48] group-hover:text-white transition-all transform group-hover:scale-110 ${colorClass}`}>{icon}</span>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">{title}</span>
      </div>
      <div className="flex flex-col relative z-10">
        <span className={`text-4xl font-black tracking-tighter text-white mb-2`}>
          {typeof value === 'number' ? value.toLocaleString('pt-PT') : value}
          {suffix && <span className="text-sm ml-1 text-[#E11D48] font-black">{suffix}</span>}
        </span>
        {subtitle && <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{subtitle}</span>}
      </div>
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#E11D48]/[0.02] pointer-events-none"></div>
    </div>
  );
};
