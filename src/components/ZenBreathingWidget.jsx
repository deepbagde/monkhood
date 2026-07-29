import React, { useState, useEffect } from 'react';
import { X, Sparkles, Wind, Play, Pause, RefreshCw } from 'lucide-react';

export default function ZenBreathingWidget({ isOpen, onClose }) {
  const [phase, setPhase] = useState('Inhale'); // Inhale (4s), Hold (7s), Exhale (8s)
  const [counter, setCounter] = useState(4);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isOpen || !isActive) return;

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) return prev - 1;

        // Transition phases
        if (phase === 'Inhale') {
          setPhase('Hold');
          return 7;
        } else if (phase === 'Hold') {
          setPhase('Exhale');
          return 8;
        } else {
          setPhase('Inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isActive, phase]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141026] via-[#0c0919] to-[#06040d] border border-amber-500/40 shadow-[0_0_60px_rgba(212,175,55,0.3)] text-center overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="text-2xl">🪷</span>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-text-gradient">
            Mindful Breathing
          </h3>
        </div>
        <p className="text-xs text-amber-300/80 mb-8 font-medium">
          4-7-8 Cyber-Sangha Relaxation Technique
        </p>

        {/* Breathing Orb Visualization */}
        <div className="relative flex items-center justify-center h-64 my-4">
          
          {/* Pulsing Aura Rings */}
          <div 
            className={`absolute w-48 h-48 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-600/30 blur-xl transition-all duration-[4000ms] ease-in-out ${
              phase === 'Inhale' ? 'scale-125 opacity-80' : phase === 'Hold' ? 'scale-125 opacity-100' : 'scale-75 opacity-40'
            }`}
          ></div>

          {/* Glowing Center Orb */}
          <div 
            className={`relative flex flex-col items-center justify-center w-40 h-40 rounded-full border-2 border-amber-400/60 bg-gradient-to-br from-amber-400/20 via-purple-900/40 to-slate-950/80 shadow-[0_0_40px_rgba(245,215,127,0.5)] transition-all duration-[4000ms] ease-in-out ${
              phase === 'Inhale' ? 'scale-125 border-amber-300' : phase === 'Hold' ? 'scale-125 border-yellow-200 shadow-[0_0_60px_rgba(245,215,127,0.8)]' : 'scale-85 border-amber-500/40'
            }`}
          >
            <span className="text-3xl font-cinzel font-bold text-amber-100 drop-shadow-md">
              {counter}s
            </span>
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mt-1">
              {phase}
            </span>
          </div>

        </div>

        {/* Instructions */}
        <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
          {phase === 'Inhale' && 'Slowly breathe in through your nose, expanding your diaphragm...'}
          {phase === 'Hold' && 'Gently hold your breath in stillness and mental quietude...'}
          {phase === 'Exhale' && 'Release fully through your mouth with a peaceful sigh...'}
        </p>

        {/* Play/Pause Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 border border-amber-400/50 text-amber-200 hover:bg-amber-500/30 transition-all flex items-center space-x-2"
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Resume</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setPhase('Inhale');
              setCounter(4);
              setIsActive(true);
            }}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-amber-200 transition-all"
            title="Reset Breathing"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
