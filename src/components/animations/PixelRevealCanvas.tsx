import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, Sparkles, Wand2 } from 'lucide-react';

export const PixelRevealCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [revealedPercent, setRevealedPercent] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = container.clientWidth);
    const height = (canvas.height = container.clientHeight);

    const initCover = () => {
      ctx.fillStyle = '#0c0c0e';
      ctx.fillRect(0, 0, width, height);

      const pixelSize = 12;
      for (let x = 0; x < width; x += pixelSize) {
        for (let y = 0; y < height; y += pixelSize) {
          const shade = Math.floor(Math.random() * 30) + 15;
          ctx.fillStyle = `rgb(${shade}, ${shade + 4}, ${shade + 10})`;
          ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
        }
      }

      ctx.font = '500 14px Cormorant Garamond, serif';
      ctx.fillStyle = '#897358';
      ctx.textAlign = 'center';
      ctx.fillText('• DRAG OR HOVER CURSOR TO UNVEIL THE GRAFF DIAMOND •', width / 2, height / 2);
    };

    initCover();

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      const pos = getPos(e);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 45, 0, Math.PI * 2);
      ctx.fill();

      checkRevealPercent();
    };

    const checkRevealPercent = () => {
      try {
        const imageData = ctx.getImageData(0, 0, width, height);
        const pixels = imageData.data;
        let transparentPixels = 0;
        const totalPixels = pixels.length / 4;

        for (let i = 3; i < pixels.length; i += 64) {
          if (pixels[i] === 0) {
            transparentPixels++;
          }
        }

        const pct = Math.min(100, Math.round((transparentPixels / (totalPixels / 16)) * 100));
        setRevealedPercent(pct);
      } catch (err) {
        // Fallback
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      scratch(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
      scratch(e);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', scratch);
    canvas.addEventListener('touchmove', scratch);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', scratch);
      canvas.removeEventListener('touchmove', scratch);
    };
  }, []);

  const handleReset = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'source-over';
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0c0c0e';
    ctx.fillRect(0, 0, width, height);

    const pixelSize = 12;
    for (let x = 0; x < width; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
        const shade = Math.floor(Math.random() * 30) + 15;
        ctx.fillStyle = `rgb(${shade}, ${shade + 4}, ${shade + 10})`;
        ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
      }
    }

    ctx.font = '500 14px Cormorant Garamond, serif';
    ctx.fillStyle = '#897358';
    ctx.textAlign = 'center';
    ctx.fillText('• DRAG OR HOVER CURSOR TO UNVEIL THE GRAFF DIAMOND •', width / 2, height / 2);

    setRevealedPercent(0);
  };

  const handleAutoReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setRevealedPercent(100);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full h-[480px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
      >
        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-end p-8" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80')`
        }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="relative z-10 max-w-lg glass-panel p-6 rounded-xl border border-[#897358]/40 animate-fade-in">
            <span className="text-[#897358] text-xs font-semibold tracking-widest uppercase mb-1 block">Unveiled Masterpiece</span>
            <h3 className="font-serif-luxury text-2xl text-white mb-2">The 105.42ct D-Flawless Graff Diamond Ring</h3>
            <p className="text-xs text-[#767676] mb-4">
              Discovered deep within Southern African deposits and transformed by master Graff gemcutters in London into an unparalleled brilliant cut oval gem.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <span className="px-3 py-1 bg-[#897358]/20 border border-[#897358]/40 text-[#897358] rounded-full">Carat: 105.42 ct</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full">Color: D-Flawless</span>
            </div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair z-20 transition-opacity duration-500"
        />

        <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-[#897358]/40">
            <Sparkles className="w-4 h-4 text-[#897358] animate-spin" />
            <span className="text-xs font-medium text-white">Swiss Pixel Reveal: {revealedPercent}% Unveiled</span>
          </div>
        </div>

        <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
          <button
            onClick={handleAutoReveal}
            className="glass-panel px-3 py-2 rounded-full text-xs text-white hover:border-[#897358] transition-all flex items-center gap-1.5"
            title="Instant Unveil"
          >
            <Wand2 className="w-3.5 h-3.5 text-[#897358]" />
            <span>Instant Reveal</span>
          </button>
          <button
            onClick={handleReset}
            className="glass-panel p-2 rounded-full text-white hover:text-[#897358] transition-all"
            title="Reset Canvas"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
