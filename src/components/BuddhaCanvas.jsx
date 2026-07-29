import React, { useEffect, useRef } from 'react';
import SacredLotusPattern from './SacredLotusPattern';

export default function BuddhaCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle Golden Stardust Particles
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      pulse: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.3 ? '#ffd740' : '#f5d77f'
    }));

    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Floating Subtle Stardust Particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(tick * 0.04) * p.pulse;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.5, p.alpha));
        ctx.shadowColor = '#ffd740';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      tick++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      {/* 1. Canvas for floating subtle golden stardust particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* 2. Soft, Dimmed Sacred Lotus Mandala Flower in Background (Guarantees High Text Visibility!) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 sm:opacity-20">
        <SacredLotusPattern className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[850px] lg:h-[850px] animate-spin-slow" />
      </div>
    </div>
  );
}
