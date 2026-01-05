
import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-12 py-6 bg-transparent">
      <div className="flex items-center gap-6">
        <div className="text-xl font-black tracking-tighter text-white">
          Almada<span className="text-[#E11D48]">.</span>
        </div>
        <div className="h-4 w-px bg-zinc-900"></div>
        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-600">
          Strategic Advisory
        </div>
      </div>
      
      <div className="flex items-center gap-4">
         <div className="text-right">
            <p className="text-[8px] font-black text-white uppercase tracking-widest leading-none">SwymX</p>
            <p className="text-[6px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Senior Consultant</p>
         </div>
         <div className="w-8 h-8 rounded-full border border-zinc-900 flex items-center justify-center bg-zinc-950/50 transition-all">
            <User size={14} className="text-zinc-700" />
         </div>
      </div>
    </header>
  );
};
