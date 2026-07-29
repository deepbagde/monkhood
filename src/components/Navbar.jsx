import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Wind, ShieldCheck, Flame } from 'lucide-react';
import { playZenSound, stopZenSound } from '../utils/audio';

export default function Navbar({ onOpenBreathing }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopZenSound();
      setIsPlayingAudio(false);
    } else {
      playZenSound('singing_bowl');
      setIsPlayingAudio(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080612]/80 border-b border-amber-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-purple-900/30 border border-amber-400/40 group-hover:border-amber-300 group-hover:shadow-[0_0_20px_rgba(245,215,127,0.4)] transition-all">
            <span className="text-2xl animate-pulse">🪷</span>
            <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-md -z-10 group-hover:bg-amber-400/30"></div>
          </div>
          <div>
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest gold-text-gradient block">
              MONKHOOD
            </span>
            <span className="text-[10px] tracking-[0.25em] text-amber-300/70 font-semibold block uppercase">
              Digital Sangha
            </span>
          </div>
        </div>

        {/* Action Buttons & Features */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Zen Sound Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
              isPlayingAudio 
                ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(245,215,127,0.3)]' 
                : 'bg-white/5 border-amber-500/30 text-slate-300 hover:border-amber-400/60 hover:text-amber-200'
            }`}
            title="Toggle 528Hz Zen Ambient Audio"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
                <span className="hidden sm:inline">528Hz Sound: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Ambient Audio</span>
              </>
            )}
          </button>

          {/* Breathe Meditation Widget Trigger */}
          <button
            onClick={onOpenBreathing}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-purple-900/40 to-amber-900/40 border border-amber-500/40 text-amber-200 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
          >
            <Wind className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span className="hidden md:inline">Zen Mode</span>
          </button>

          {/* Direct CTA */}
          <a
            href="#membership"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(245,215,127,0.4)] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Sangha</span>
          </a>

        </div>

      </div>
    </header>
  );
}
