import React from 'react';

export default function SacredLotusPattern({ className = "w-[600px] h-[600px] opacity-20" }) {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={`pointer-events-none transition-transform duration-1000 ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="lotusGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5d77f" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#d4af37" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#aa7c11" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dim Center Ambient Glow */}
      <circle cx="200" cy="200" r="180" fill="url(#lotusGlow)" opacity="0.15" />

      {/* Concentric Subtle 0.75px Sacred Geometry Circles */}
      <circle cx="200" cy="200" r="190" stroke="#f5d77f" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.6" />
      <circle cx="200" cy="200" r="160" stroke="#d4af37" strokeWidth="0.75" opacity="0.6" />
      <circle cx="200" cy="200" r="120" stroke="#f5d77f" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="200" cy="200" r="80" stroke="#d4af37" strokeWidth="0.75" opacity="0.6" />
      <circle cx="200" cy="200" r="40" stroke="#f5d77f" strokeWidth="0.75" opacity="0.6" />

      {/* 12 Outer Subtle Lotus Petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={`outer-${i}`} transform={`rotate(${i * 30} 200 200)`}>
          <path 
            d="M200 40 C235 90 235 140 200 180 C165 140 165 90 200 40 Z" 
            stroke="#f5d77f" 
            strokeWidth="0.8" 
            fill="rgba(245, 215, 127, 0.02)"
            opacity="0.6"
          />
          <circle cx="200" cy="30" r="2.5" fill="#f5d77f" opacity="0.7" />
        </g>
      ))}

      {/* 12 Inner Subtle Petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={`inner-${i}`} transform={`rotate(${i * 30 + 15} 200 200)`}>
          <path 
            d="M200 80 C220 115 220 145 200 170 C180 145 180 115 200 80 Z" 
            stroke="#d4af37" 
            strokeWidth="0.7" 
            fill="rgba(212, 175, 55, 0.03)"
            opacity="0.5"
          />
        </g>
      ))}

      {/* Center Golden Seed Core */}
      <circle cx="200" cy="200" r="8" fill="#f5d77f" opacity="0.8" />
      <circle cx="200" cy="200" r="4" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}
