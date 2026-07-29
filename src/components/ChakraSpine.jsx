import React from 'react';

const CHAKRAS_DATA = [
  {
    name: 'Sahasrara',
    english: 'Crown Chakra',
    color: '#f472b6',
    border: 'border-pink-400',
    glow: 'shadow-[0_0_25px_rgba(244,114,182,0.8)]',
    bg: 'bg-pink-500/20',
    symbol: '🪷',
    meaning: 'Enlightenment & Pure Awareness'
  },
  {
    name: 'Ajna',
    english: 'Third Eye Chakra',
    color: '#a78bfa',
    border: 'border-purple-400',
    glow: 'shadow-[0_0_25px_rgba(167,139,250,0.8)]',
    bg: 'bg-purple-500/20',
    symbol: '👁️',
    meaning: 'Wisdom & Inner Perception'
  },
  {
    name: 'Vishuddha',
    english: 'Throat Chakra',
    color: '#38bdf8',
    border: 'border-sky-400',
    glow: 'shadow-[0_0_25px_rgba(56,189,248,0.8)]',
    bg: 'bg-sky-500/20',
    symbol: '🗣️',
    meaning: 'Truth & Authentic Voice'
  },
  {
    name: 'Anahata',
    english: 'Heart Chakra',
    color: '#34d399',
    border: 'border-emerald-400',
    glow: 'shadow-[0_0_25px_rgba(52,211,153,0.8)]',
    bg: 'bg-emerald-500/20',
    symbol: '💚',
    meaning: 'Unconditional Love & Harmony'
  },
  {
    name: 'Manipura',
    english: 'Solar Plexus Chakra',
    color: '#fbbf24',
    border: 'border-amber-400',
    glow: 'shadow-[0_0_25px_rgba(251,191,36,0.8)]',
    bg: 'bg-amber-500/20',
    symbol: '☀️',
    meaning: 'Vitality & Personal Power'
  },
  {
    name: 'Svadhisthana',
    english: 'Sacral Chakra',
    color: '#f97316',
    border: 'border-orange-400',
    glow: 'shadow-[0_0_25px_rgba(249,115,22,0.8)]',
    bg: 'bg-orange-500/20',
    symbol: '🟠',
    meaning: 'Creativity & Passion'
  },
  {
    name: 'Muladhara',
    english: 'Root Chakra',
    color: '#f43f5e',
    border: 'border-rose-500',
    glow: 'shadow-[0_0_25px_rgba(244,63,94,0.8)]',
    bg: 'bg-rose-500/20',
    symbol: '🔴',
    meaning: 'Grounding & Physical Strength'
  }
];

export default function ChakraSpine() {
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-4">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 mb-3 shadow-[0_0_15px_rgba(245,215,127,0.2)]">
          <span className="text-sm">☸️</span>
          <span className="text-xs font-bold tracking-widest text-amber-200 uppercase">
            7 Sacred Buddha Chakras
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold gold-text-gradient">
          Align Your Mind, Body & Energy
        </h2>
      </div>

      {/* Chakras Spine Grid */}
      <div className="relative">
        
        {/* Central Connecting Sushumna Nadi Line */}
        <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400 via-emerald-400 to-rose-600 rounded-full shadow-[0_0_15px_rgba(245,215,127,0.8)] opacity-60"></div>

        {/* 7 Glowing Chakra Nodes */}
        <div className="space-y-6 sm:space-y-8 relative z-10">
          {CHAKRAS_DATA.map((chakra, idx) => (
            <div 
              key={idx}
              className={`flex items-center justify-between gap-4 ${
                idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              
              {/* Chakra Details Pill */}
              <div className={`w-1/2 max-w-sm p-4 sm:p-5 rounded-2xl bg-[#0c0919]/90 border ${chakra.border}/40 backdrop-blur-xl ${chakra.glow} transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-lg">{chakra.symbol}</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-100" style={{ color: chakra.color }}>
                      {chakra.english}
                    </h4>
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      {chakra.name}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-light mt-1">
                  {chakra.meaning}
                </p>
              </div>

              {/* Glowing Center Chakra Orb */}
              <div className="relative flex-shrink-0 flex items-center justify-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${chakra.bg} border-2 ${chakra.border} ${chakra.glow} flex items-center justify-center text-xl sm:text-2xl animate-pulse`}>
                  {chakra.symbol}
                </div>
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10 animate-ping opacity-25"></div>
              </div>

              {/* Empty placeholder for grid balance */}
              <div className="w-1/2 max-w-sm hidden sm:block"></div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
