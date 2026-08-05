import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, RotateCw, Palette } from 'lucide-react';

export const ParticleSphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [colorTheme, setColorTheme] = useState<'diamond' | 'yellow' | 'emerald' | 'sapphire'>('diamond');
  const [speed, setSpeed] = useState<number>(0.008);
  const particleCount = 900;

  // Rich high-contrast colors for pristine white background
  const colors = {
    diamond: ['#897358', '#b39268', '#444444', '#1a1a1a', '#d4af37'],
    yellow: ['#ca8a04', '#eab308', '#897358', '#a16207', '#d97706'],
    emerald: ['#059669', '#047857', '#10b981', '#065f46', '#897358'],
    sapphire: ['#1d4ed8', '#1e40af', '#3b82f6', '#1e3a8a', '#897358'],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
      size: number;
    }

    const points: Point3D[] = [];
    const radius = Math.min(width, height) * 0.32;
    const activePalette = colors[colorTheme];

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        color: activePalette[Math.floor(Math.random() * activePalette.length)],
        size: Math.random() * 2.2 + 0.8,
      });
    }

    let angleX = 0;
    let angleY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.0002;
      mouseY = (e.clientY - rect.top - height / 2) * 0.0002;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += isHovering ? mouseX : speed;
      angleX += isHovering ? mouseY : speed * 0.5;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const cx = width / 2;
      const cy = height / 2;

      // Soft light radial background glow
      const radial = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius * 1.2);
      radial.addColorStop(0, 'rgba(137, 115, 88, 0.1)');
      radial.addColorStop(0.6, 'rgba(137, 115, 88, 0.02)');
      radial.addColorStop(1, 'transparent');
      ctx.fillStyle = radial;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      const projected = points.map((p) => {
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;
        let y2 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        const perspective = 600 / (600 + z2);
        const screenX = cx + x1 * perspective;
        const screenY = cy + y2 * perspective;

        return {
          screenX,
          screenY,
          z2,
          color: p.color,
          size: p.size * perspective,
          alpha: Math.max(0.25, (z2 + radius) / (2 * radius)),
        };
      });

      projected.sort((a, b) => a.z2 - b.z2);

      projected.forEach((pt) => {
        ctx.save();
        ctx.globalAlpha = pt.alpha;
        ctx.fillStyle = pt.color;
        ctx.shadowBlur = pt.size > 2 ? 6 : 1;
        ctx.shadowColor = pt.color;

        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, Math.max(0.6, pt.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [colorTheme, speed, particleCount]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl bg-white border border-[#e5e0d8] p-4 shadow-sm">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      <div className="absolute bottom-6 left-6 right-6 glass-panel-gold p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs z-10 bg-white/90 backdrop-blur-md border border-[#e5e0d8] shadow-md text-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#897358] animate-pulse" />
          <span className="font-serif-luxury text-sm tracking-wider uppercase text-[#1a1a1a] font-semibold">3D Gemstone Particle Sphere</span>
        </div>

        <div className="flex items-center gap-2">
          <Palette className="w-3.5 h-3.5 text-[#666666]" />
          <span className="text-[#666666] font-medium mr-1">Gem Color:</span>
          {(['diamond', 'yellow', 'emerald', 'sapphire'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setColorTheme(t)}
              className={`px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider transition-all ${
                colorTheme === t
                  ? 'bg-[#897358] text-white shadow-md'
                  : 'bg-gray-100 text-[#666666] hover:text-[#1a1a1a] border border-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <RotateCw className="w-3.5 h-3.5 text-[#666666]" />
          <span className="text-[#666666] font-medium">Spin Speed:</span>
          <input
            type="range"
            min="0.002"
            max="0.02"
            step="0.002"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-24 accent-[#897358] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
