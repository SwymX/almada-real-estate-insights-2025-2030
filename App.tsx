
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home,
  TrendingUp, 
  ChevronRight, 
  ChevronLeft,
  Activity,
  Zap,
  Globe,
  ShieldCheck,
  UserCheck,
  Users,
  TrainFront,
  Waves,
  GraduationCap,
  Target,
  ArrowUpRight,
  MapPin,
  PieChart,
  BarChart3,
  Clock,
  Rocket,
  Search,
  CheckCircle2,
  Timer,
  Link2,
  Navigation,
  Crosshair,
  CircleDot,
  User
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { Header } from './components/Header';
import { 
  PRICE_EVOLUTION,
  HOT_SPOTS_2025,
  MEGAPROJECTS_DETAIL,
  STRATEGIC_ROADMAP,
  COLORS 
} from './constants';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // SLIDE 1: COVER
    <div key="slide-1" className="w-full h-full flex flex-col justify-center items-center text-center px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(225,29,72,0.1)_0%,_transparent_60%)]"></div>
      <div className="max-w-6xl animate-in fade-in zoom-in duration-1000 relative z-10">
        <div className="mb-6 inline-flex items-center gap-4 bg-zinc-950/50 border border-zinc-800 px-5 py-2 rounded-full backdrop-blur-md">
           <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Exclusivo: Ana Catarino</span>
        </div>
        <h1 className="text-7xl md:text-[9rem] font-serif font-bold text-white mb-4 leading-[0.85] tracking-tighter">
          ALMADA<br/><span className="text-[#E11D48]">2030.</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-zinc-500 mb-12 tracking-[0.25em] uppercase italic">
          A Tese de Investimento da Próxima Década
        </p>
        <button onClick={() => setCurrentSlide(1)} className="group text-[10px] font-black uppercase tracking-[0.5em] text-white hover:text-[#E11D48] transition-all">
            Explorar Dados <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={14} />
        </button>
      </div>
    </div>,

    // SLIDE 2: O CONTEXTO HISTÓRICO
    <div key="slide-2" className="w-full max-w-[1400px] px-12 h-full flex items-center mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <div className="lg:col-span-5">
           <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Capítulo 01</span>
           <h2 className="text-6xl font-serif font-bold text-white mb-6 tracking-tighter leading-tight">Um Alicerce de<br/>Crescimento.</h2>
           <p className="text-zinc-500 text-base leading-relaxed mb-8 font-medium">
              Almada consolidou-se como alternativa premium. O crescimento de <span className="text-white">84%</span> em 5 anos não foi um acaso.
           </p>
           <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
              <div className="flex justify-between items-end">
                 <div>
                    <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mb-1">CAGR Médio</p>
                    <p className="text-3xl font-bold text-[#E11D48]">14,3% / ano</p>
                 </div>
                 <Activity className="text-zinc-800" size={32} />
              </div>
           </div>
        </div>
        <div className="lg:col-span-7 h-[400px] bg-zinc-950/50 p-8 rounded-[2.5rem] border border-zinc-900 backdrop-blur-sm">
           <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PRICE_EVOLUTION}>
                 <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#E11D48" stopOpacity={0.4}/>
                       <stop offset="95%" stopColor="#E11D48" stopOpacity={0}/>
                    </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#18181b" />
                 <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#52525b', fontSize: 10, fontWeight: 800}} />
                 <YAxis hide />
                 <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #27272a', borderRadius: '12px' }} />
                 <Area type="monotone" dataKey="price" stroke="#E11D48" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={4} />
              </AreaChart>
           </ResponsiveContainer>
        </div>
      </div>
    </div>,

    // SLIDE 3: O PRESENTE (2025)
    <div key="slide-3" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
      <div className="mb-12 text-center">
        <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 02</span>
        <h2 className="text-5xl font-serif font-bold text-white tracking-tighter">Geografia da Liquidez 2025</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-[3rem] group hover:border-white transition-all backdrop-blur-sm">
           <Building2 className="text-zinc-600 mb-6 group-hover:text-white" size={32} />
           <h3 className="text-2xl font-bold mb-4">Apartamentos: <span className="text-zinc-500 font-light">O Motor</span></h3>
           <div className="space-y-3">
              {HOT_SPOTS_2025.apartments.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-zinc-900">
                   <span className="text-sm font-bold">{item.zone}</span>
                   <span className="text-[#E11D48] text-sm font-black">{item.growth}</span>
                </div>
              ))}
           </div>
        </div>
        <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-[3rem] group hover:border-[#E11D48] transition-all backdrop-blur-sm">
           <Home className="text-zinc-600 mb-6 group-hover:text-[#E11D48]" size={32} />
           <h3 className="text-2xl font-bold mb-4">Moradias: <span className="text-zinc-500 font-light">O Refúgio</span></h3>
           <div className="space-y-3">
              {HOT_SPOTS_2025.houses.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-zinc-900">
                   <span className="text-sm font-bold">{item.zone}</span>
                   <span className="text-[#E11D48] text-sm font-black">{item.growth}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>,

    // SLIDE 4: TRANSFORMAÇÃO ESTRUTURAL
    <div key="slide-4" className="w-full max-w-[1400px] px-12 h-full flex items-center mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <div>
             <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 03</span>
             <h2 className="text-6xl font-serif font-bold text-white mb-6 tracking-tighter">A Escassez<br/>Estratégica.</h2>
             <p className="text-zinc-500 text-base leading-relaxed mb-8">
                O novo PDM foca na <span className="text-white">Regeneração e Densificação</span>. A terra pronta a construir terá um prémio histórico.
             </p>
             <div className="flex gap-3">
                <div className="px-4 py-2 bg-zinc-900 rounded-full text-[8px] font-black uppercase tracking-widest">Solo Consolidado</div>
                <div className="px-4 py-2 bg-zinc-900 rounded-full text-[8px] font-black uppercase tracking-widest">ARU Prioritária</div>
             </div>
          </div>
          <div className="bg-zinc-950 p-10 rounded-[4rem] border border-zinc-900 relative backdrop-blur-sm">
             <h3 className="text-3xl font-serif font-bold mb-8">O Veredito</h3>
             <ul className="space-y-6">
                {[
                  "Fim do Solo Urbanizável descontrolado.",
                  "Prémio imediato para terrenos com PIP aprovado.",
                  "Foco na colmatação de vazios urbanos."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-[#E11D48] shrink-0" size={20} />
                    <p className="text-zinc-400 text-sm font-medium">{text}</p>
                  </li>
                ))}
             </ul>
          </div>
       </div>
    </div>,

    // SLIDE 5: OS 3 MOTORES
    <div key="slide-5" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-12">
          <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 04</span>
          <h2 className="text-5xl font-serif font-bold text-white tracking-tighter">Catalisadores de Valor</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEGAPROJECTS_DETAIL.map((p, i) => (
             <div key={i} className="bg-zinc-950 p-8 rounded-[3rem] border border-zinc-900 hover:border-[#E11D48]/50 transition-all flex flex-col justify-between group backdrop-blur-sm">
                <div>
                   <div className="w-12 h-12 rounded-xl bg-zinc-900 mb-6 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
                      {p.icon}
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-white mb-3">{p.name}</h3>
                   <p className="text-zinc-500 text-xs leading-relaxed mb-6 font-medium">{p.highlight}</p>
                </div>
                <div className="pt-6 border-t border-zinc-900">
                   <p className="text-white font-bold text-base">{p.impact}</p>
                   <p className="text-zinc-600 text-[8px] font-black uppercase mt-1 tracking-widest">{p.scale}</p>
                </div>
             </div>
          ))}
       </div>
    </div>,

    // SLIDE 6: INNOVATION DISTRICT
    <div key="slide-6" className="w-full max-w-[1400px] px-12 h-full flex items-center mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center group h-[450px]">
             <GraduationCap size={200} className="text-zinc-800 group-hover:text-[#E11D48] transition-all duration-700 transform group-hover:scale-110" strokeWidth={0.3} />
             <div className="absolute bottom-10 left-10 text-left">
                <p className="text-4xl font-serif font-bold text-white tracking-tighter leading-none mb-2">+€800M Investimento</p>
                <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Monte da Caparica Epicentro</p>
             </div>
          </div>
          <div className="flex flex-col justify-center">
             <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 05</span>
             <h2 className="text-5xl font-serif font-bold text-white mb-6 tracking-tighter leading-tight">O Cluster do<br/>Conhecimento.</h2>
             <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                Ancorado pela Universidade Nova, irá criar <span className="text-white font-bold">17.000 postos de trabalho</span> qualificados.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-[2rem]">
                   <Users className="text-[#E11D48] mb-3" size={24} />
                   <p className="text-white font-bold text-base">População Ativa</p>
                </div>
                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-[2rem]">
                   <Target className="text-[#E11D48] mb-3" size={24} />
                   <p className="text-white font-bold text-base">Valorização</p>
                </div>
             </div>
          </div>
       </div>
    </div>,

    // SLIDE 7: EXPANSÃO DO METRO
    <div key="slide-7" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-8">
          <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 06</span>
          <h2 className="text-6xl font-serif font-bold text-white tracking-tighter">O Prémio Metro.</h2>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
             <div className="bg-[#E11D48] p-10 rounded-[3rem] text-white relative overflow-hidden group">
                <div className="relative z-10">
                   <div className="text-5xl font-serif font-bold mb-2 tracking-tighter">+15% a 25%</div>
                   <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80 mb-6">Valorização Estimada no traçado</p>
                   <div className="flex items-center gap-4">
                      <Timer className="shrink-0" size={20} />
                      <p className="font-bold text-sm">19 min Campus FCT &harr; Terminal Trafaria</p>
                   </div>
                </div>
             </div>
             <div className="bg-zinc-950 p-6 rounded-[2rem] border border-zinc-900 flex items-start gap-4 backdrop-blur-sm">
                <Link2 className="text-[#E11D48] shrink-0" size={20} />
                <p className="text-zinc-500 text-xs leading-relaxed">Unifica a FCT ao Terminal Fluvial da Trafaria, criando um corredor de mobilidade.</p>
             </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-zinc-900/30 p-8 rounded-[2rem] border border-zinc-900 backdrop-blur-sm">
                <div className="space-y-4">
                   <div>
                      <p className="text-white font-black text-2xl">7.3 km</p>
                      <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-widest">Nova Extensão</p>
                   </div>
                   <div>
                      <p className="text-white font-black text-2xl">10</p>
                      <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-widest">Estações</p>
                   </div>
                </div>
             </div>
             <div className="bg-zinc-950 p-8 rounded-[2rem] border border-zinc-900 backdrop-blur-sm">
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-900">
                      <span className="font-bold text-white text-sm">Trafaria</span>
                      <span className="text-[#E11D48] font-black text-[9px] uppercase">Hub</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-900">
                      <span className="font-bold text-white text-sm">Monte Caparica</span>
                      <span className="text-[#E11D48] font-black text-[9px] uppercase">Tech</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                      <span className="font-bold text-white text-sm">São João Caparica</span>
                      <span className="text-[#E11D48] font-black text-[9px] uppercase">Coastal</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>,

    // SLIDE 8: O CRONOGRAMA
    <div key="slide-8" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-12 text-center">
          <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 07</span>
          <h2 className="text-5xl font-serif font-bold text-white tracking-tighter">Horizonte 2025 - 2030</h2>
       </div>
       <div className="relative py-12">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-900 -translate-y-1/2"></div>
          <div className="grid grid-cols-4 gap-4 relative z-10">
             {[
               { year: '2025', desc: 'Janela Crítica de Posicionamento' },
               { year: '2026-27', desc: 'Início das Obras (Lisnave / AID)' },
               { year: '2028-29', desc: 'Conclusão da Expansão do Metro' },
               { year: '2030+', desc: 'Maturação Total do Ativo' }
             ].map((t, i) => (
                <div key={i} className="text-center group cursor-pointer px-2">
                   <div className="w-12 h-12 bg-black border border-zinc-900 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:border-[#E11D48] group-hover:scale-[1.5] transition-all duration-500">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-[#E11D48] transition-colors"></div>
                   </div>
                   <h4 className="text-2xl font-serif font-bold text-white mb-2 transition-all duration-500">{t.year}</h4>
                   <p className="text-zinc-500 group-hover:text-[#E11D48] text-[11px] font-black uppercase tracking-wider group-hover:scale-105 transition-all duration-500">
                     {t.desc}
                   </p>
                </div>
             ))}
          </div>
       </div>
    </div>,

    // SLIDE 9: MAPA TÁTICO PREMIUM (ESCALA OTIMIZADA E LEGENDA INTEGRADA)
    <div key="slide-9" className="w-full max-w-[1600px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-6 flex justify-between items-end animate-in slide-in-from-left duration-700">
          <div>
            <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 08</span>
            <h2 className="text-6xl font-serif font-bold text-white tracking-tighter leading-none">Mapa da Valorização</h2>
          </div>
          <div className="text-right flex flex-col items-end opacity-40">
             <div className="flex items-center gap-2 text-[8px] font-mono text-zinc-500 tracking-widest"><Crosshair size={10} /> TARGET_ACQUISITION_MODE</div>
             <div className="h-px w-32 bg-gradient-to-l from-zinc-800 to-transparent mt-1"></div>
          </div>
       </div>
       
       <div className="relative bg-zinc-950 rounded-[4rem] border border-zinc-900 h-[650px] overflow-hidden group/map shadow-[0_60px_120px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-1000">
          {/* Tactical Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-10">
             <div className="w-full h-full bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          
          {/* Geographical Blueprint (Reduzido para 60% para criar mais espaço para tooltips) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <svg viewBox="0 0 800 600" className="w-[60%] h-[60%] text-zinc-900/60 fill-current opacity-80 transform group-hover/map:scale-[1.02] transition-transform duration-[2s]">
                <path d="M120,50 L300,30 C450,20 600,60 720,100 L780,250 C790,380 750,520 680,580 L450,590 C300,580 150,550 80,450 L40,250 L120,50 Z" 
                      fill="url(#blueprintGrad)" 
                      stroke="#E11D48" 
                      strokeWidth="1.5" 
                      strokeOpacity="0.15" />
                <defs>
                   <radialGradient id="blueprintGrad" cx="50%" cy="50%" r="50%">
                     <stop offset="0%" stopColor="#27272a" stopOpacity={1} />
                     <stop offset="100%" stopColor="#09090b" stopOpacity={1} />
                   </radialGradient>
                </defs>
             </svg>
          </div>

          {/* Radar Sweep Effect */}
          <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#E11D48]/10 to-transparent animate-scan z-20 pointer-events-none"></div>

          {/* NOVO: Legenda Tática Integrada (Pequena e discreta) */}
          <div className="absolute bottom-8 left-10 z-40 animate-in fade-in duration-1000 delay-500">
             <div className="bg-black/80 border border-zinc-900/50 backdrop-blur-xl p-4 rounded-3xl flex flex-col gap-3 min-w-[140px] shadow-2xl ring-1 ring-white/5">
                <div className="flex items-center gap-3 group/leg">
                   <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_white] ring-2 ring-white/20"></div>
                   <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest group-hover/leg:text-white transition-colors">Apartamentos</span>
                </div>
                <div className="flex items-center gap-3 group/leg">
                   <div className="w-3 h-3 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48] ring-2 ring-[#E11D48]/20"></div>
                   <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest group-hover/leg:text-white transition-colors">Moradias</span>
                </div>
             </div>
          </div>
          
          {/* APARTMENT DATA NODES */}
          {HOT_SPOTS_2025.apartments.map((pt, i) => {
             const latNum = parseInt(pt.lat);
             const lngNum = parseInt(pt.lng);
             // Orientação inteligente: evitar sair do ecran
             const isTop = latNum < 35;
             const isRight = lngNum > 70;
             const tooltipPosClass = isTop ? 'top-full mt-6' : 'bottom-full mb-6';
             const tooltipAlignClass = isRight ? 'right-0' : 'left-1/2 -translate-x-1/2';

             return (
               <div key={`apt-${i}`} className="absolute group/node cursor-pointer z-30" style={{ top: pt.lat, left: pt.lng }}>
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                     <div className="absolute inset-0 w-16 h-16 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover/node:bg-white/10 group-hover/node:scale-150 transition-all duration-700 animate-pulse"></div>
                     <div className="w-10 h-10 bg-black/80 border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl group-hover/node:scale-125 group-hover/node:bg-white group-hover/node:border-white group-hover/node:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500">
                        <Building2 size={16} className="text-white group-hover/node:text-black transition-colors" />
                     </div>

                     {/* Glassmorphism Tooltip with Intelligent Positioning */}
                     <div className={`absolute ${tooltipPosClass} ${tooltipAlignClass} opacity-0 translate-y-4 group-hover/node:opacity-100 group-hover/node:translate-y-0 transition-all duration-500 pointer-events-none z-50`}>
                        <div className="bg-black/95 border border-zinc-800 p-6 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,1)] backdrop-blur-3xl w-72 ring-1 ring-white/10">
                           <div className="flex justify-between items-center mb-4">
                              <span className="text-[10px] font-black uppercase text-[#E11D48] tracking-widest flex items-center gap-2"><CircleDot size={10} className="animate-pulse" /> Urban Liquidity</span>
                              <Navigation size={12} className="text-zinc-700" />
                           </div>
                           <h5 className="text-2xl font-serif font-bold text-white mb-2 leading-none">{pt.zone}</h5>
                           <div className="space-y-3">
                              <div className="flex justify-between items-baseline"><span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Growth</span><span className="text-white font-black text-sm">{pt.growth}</span></div>
                              <div className="flex justify-between items-baseline"><span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Ticket</span><span className="text-white font-black text-sm">{pt.ticket}</span></div>
                           </div>
                           <div className="mt-6 pt-5 border-t border-zinc-900"><p className="text-[11px] text-zinc-400 italic font-medium leading-tight">"{pt.metric}"</p></div>
                        </div>
                     </div>
                  </div>
               </div>
             );
          })}

          {/* HOUSE DATA NODES */}
          {HOT_SPOTS_2025.houses.map((pt, i) => {
             const latNum = parseInt(pt.lat);
             const lngNum = parseInt(pt.lng);
             // Orientação inteligente
             const isTop = latNum < 35;
             const isRight = lngNum > 70;
             const tooltipPosClass = isTop ? 'top-full mt-6' : 'bottom-full mb-6';
             const tooltipAlignClass = isRight ? 'right-0' : 'left-1/2 -translate-x-1/2';

             return (
               <div key={`hse-${i}`} className="absolute group/node cursor-pointer z-30" style={{ top: pt.lat, left: pt.lng }}>
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                     <div className="absolute inset-0 w-16 h-16 bg-[#E11D48]/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover/node:bg-[#E11D48]/10 group-hover/node:scale-150 transition-all duration-700 animate-pulse"></div>
                     <div className="w-10 h-10 bg-black/80 border border-[#E11D48]/20 rounded-2xl flex items-center justify-center backdrop-blur-xl group-hover/node:scale-125 group-hover/node:bg-[#E11D48] group-hover/node:border-[#E11D48] group-hover/node:shadow-[0_0_40px_rgba(225,29,72,0.4)] transition-all duration-500">
                        <Home size={16} className="text-[#E11D48] group-hover/node:text-white transition-colors" />
                     </div>

                     <div className={`absolute ${tooltipPosClass} ${tooltipAlignClass} opacity-0 translate-y-4 group-hover/node:opacity-100 group-hover/node:translate-y-0 transition-all duration-500 pointer-events-none z-50`}>
                        <div className="bg-black/95 border border-zinc-800 p-6 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,1)] backdrop-blur-3xl w-72 ring-1 ring-[#E11D48]/20">
                           <div className="flex justify-between items-center mb-4">
                              <span className="text-[10px] font-black uppercase text-[#E11D48] tracking-widest flex items-center gap-2"><CircleDot size={10} className="animate-pulse" /> Premium Asset</span>
                              <Target size={12} className="text-zinc-700" />
                           </div>
                           <h5 className="text-2xl font-serif font-bold text-white mb-2 leading-none">{pt.zone}</h5>
                           <div className="space-y-3">
                              <div className="flex justify-between items-baseline"><span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Growth</span><span className="text-[#E11D48] font-black text-sm">{pt.growth}</span></div>
                              <div className="flex justify-between items-baseline"><span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Type</span><span className="text-white font-black text-sm">{pt.ticket}</span></div>
                           </div>
                           <div className="mt-6 pt-5 border-t border-zinc-900"><p className="text-[11px] text-zinc-400 italic font-medium leading-tight">"{pt.metric}"</p></div>
                        </div>
                     </div>
                  </div>
               </div>
             );
          })}
       </div>

       <style>{`
          @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(400%); } }
          .animate-scan { animation: scan 18s linear infinite; }
       `}</style>
    </div>,

    // SLIDE 10: PROJEÇÕES 2030
    <div key="slide-10" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-12">
          <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 09</span>
          <h2 className="text-5xl font-serif font-bold text-white tracking-tighter">Projeções de Valorização</h2>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
             {STRATEGIC_ROADMAP.slice(0, 3).map((item, i) => (
                <div key={i} className="p-8 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] flex items-center justify-between backdrop-blur-sm">
                   <div>
                      <h4 className="text-xl font-bold mb-1">{item.zone}</h4>
                      <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">{item.driver}</p>
                   </div>
                   <div className="text-right">
                      <div className="text-3xl font-serif font-bold text-[#E11D48]">{item.projection}</div>
                   </div>
                </div>
             ))}
          </div>
          <div className="bg-zinc-950 p-12 rounded-[3.5rem] border border-zinc-900 flex flex-col justify-center text-center relative backdrop-blur-sm">
             <Rocket size={48} className="mx-auto mb-6 text-[#E11D48]" strokeWidth={1} />
             <h3 className="text-2xl font-serif font-bold mb-4 text-white">Foco Agressivo:<br/>Monte da Caparica</h3>
             <p className="text-zinc-500 text-sm leading-relaxed px-10">
                O maior potencial de valorização (+50%) devido ao impacto direto do Innovation District.
             </p>
          </div>
       </div>
    </div>,

    // SLIDE 11: PERFIS DE INVESTIMENTO
    <div key="slide-11" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-12 text-center">
          <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 10</span>
          <h2 className="text-5xl font-serif font-bold text-white tracking-tighter">Perfis de Investimento</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { type: 'Conservador', goal: '6-8%', zones: 'Cova Piedade', strategy: 'Buy-and-Hold' },
            { type: 'Equilibrado', goal: '10-12%', zones: 'Charneca da Caparica', strategy: 'Valorização Pré-Infra' },
            { type: 'Agressivo', goal: '15%+', zones: 'Monte Caparica', strategy: 'Transformação Radical' }
          ].map((p, i) => (
             <div key={i} className={`p-8 rounded-[3rem] border transition-all flex flex-col justify-between ${i === 2 ? 'bg-[#E11D48] border-transparent text-white' : 'bg-zinc-950 border-zinc-900 text-white'}`}>
                <div>
                   <h3 className="text-2xl font-serif font-bold mb-3">Perfil {p.type}</h3>
                   <p className="text-xs mb-8 opacity-60 font-medium">{p.strategy}</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                   <div className="text-3xl font-bold mb-4">{p.goal}</div>
                   <p className="font-bold text-xs">{p.zones}</p>
                </div>
             </div>
          ))}
       </div>
    </div>,

    // SLIDE 12: ROADMAP TABLE
    <div key="slide-12" className="w-full max-w-[1400px] px-12 h-full flex flex-col justify-center mx-auto">
       <div className="mb-10">
          <span className="text-[#E11D48] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Capítulo 11</span>
          <h2 className="text-5xl font-serif font-bold text-white tracking-tighter">Sintese de Oportunidades</h2>
       </div>
       <div className="overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-zinc-950 backdrop-blur-sm">
          <table className="w-full text-left">
             <thead>
                <tr className="border-b border-zinc-900">
                   <th className="px-8 py-5 text-[8px] font-black uppercase tracking-widest text-zinc-500">Zona</th>
                   <th className="px-8 py-5 text-[8px] font-black uppercase tracking-widest text-zinc-500">Driver</th>
                   <th className="px-8 py-5 text-[8px] font-black uppercase tracking-widest text-zinc-500">Horizonte</th>
                   <th className="px-8 py-5 text-[8px] font-black uppercase tracking-widest text-zinc-500">Potencial</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-zinc-900">
                {STRATEGIC_ROADMAP.map((row, i) => (
                   <tr key={i} className="hover:bg-zinc-900/50 transition-colors">
                      <td className="px-8 py-4 font-bold text-white text-base">{row.zone}</td>
                      <td className="px-8 py-4 text-zinc-400 text-xs">{row.driver}</td>
                      <td className="px-8 py-4 text-zinc-400 text-xs">{row.horizon}</td>
                      <td className="px-8 py-4 text-xl font-serif font-bold text-[#E11D48]">{row.projection}</td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>,

    // SLIDE 13: CONCLUSÃO
    <div key="slide-13" className="w-full h-full flex flex-col justify-center items-center px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/10 blur-[200px] rounded-full pointer-events-none"></div>
      <div className="max-w-4xl text-center relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tighter leading-tight italic">
          "A transformação de Almada não é <span className="text-[#E11D48] not-italic underline decoration-1 underline-offset-8">SE</span>, mas <span className="text-[#E11D48] not-italic underline decoration-1 underline-offset-8">QUANDO</span> e <span className="text-[#E11D48] not-italic underline decoration-1 underline-offset-8">ONDE</span>."
        </h2>
        <div className="bg-zinc-950 border border-zinc-900 p-10 rounded-[3rem] mb-8 relative overflow-hidden group backdrop-blur-xl">
           <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light italic mb-6">
              "2025 representa a janela crítica para o positioning estratégico que irá capturar a próxima década de valor em Almada. O momento é agora!"
           </p>
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-inner">
                 <User size={24} className="text-[#E11D48]" />
              </div>
              <div className="text-left">
                 <p className="text-lg font-black text-white leading-none mb-1">Ana Catarino</p>
                 <p className="text-[9px] font-bold text-[#E11D48] uppercase tracking-[0.4em]">Senior Advisory | DILS</p>
              </div>
           </div>
        </div>
        <button onClick={() => setCurrentSlide(0)} className="px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.5em] transition-all hover:bg-[#E11D48] hover:text-white">
          Reiniciar Relatório
        </button>
      </div>
    </div>
  ];

  const handleNext = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const handlePrev = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden selection:bg-[#E11D48]/30 font-sans">
      <Header />
      
      <main className="flex-1 relative flex flex-col items-center justify-center pt-16 pb-20">
        {/* Superior Slim Progress */}
        <div className="fixed top-0 left-0 w-full h-[1px] bg-zinc-950 z-[1000]">
          <div 
            className="h-full bg-[#E11D48] transition-all duration-1000 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Stage Area: This ensures perfect centering and no scroll */}
        <div className="w-full h-full max-h-[85vh] flex items-center justify-center animate-in fade-in duration-1000 px-4">
          {slides[currentSlide]}
        </div>

        {/* Side Controls */}
        <button onClick={handlePrev} className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-24 flex items-center justify-center border-l border-zinc-900 text-zinc-800 hover:text-[#E11D48] transition-all z-50 ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}>
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button onClick={handleNext} className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-24 flex items-center justify-center border-r border-zinc-900 text-zinc-800 hover:text-[#E11D48] transition-all z-50 ${currentSlide === slides.length - 1 ? 'opacity-0' : 'opacity-100'}`}>
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        {/* Simplified Dots */}
        <div className="fixed bottom-10 flex items-center gap-3 z-50">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-[2px] transition-all duration-500 ${currentSlide === i ? 'w-10 bg-[#E11D48]' : 'w-2 bg-zinc-900'}`} />
          ))}
          <span className="text-[9px] font-black text-zinc-800 ml-4 font-mono">
            {currentSlide + 1}/{slides.length}
          </span>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full py-4 px-12 flex justify-between items-center pointer-events-none z-[100] opacity-30">
        <div className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.5em]">DILS GLOBAL REAL ESTATE</div>
        <div className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.5em]">ALMADA STRATEGY 2030</div>
      </footer>
    </div>
  );
};

export default App;
