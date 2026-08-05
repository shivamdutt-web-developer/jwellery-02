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

    // Draw the cover layer (Pristine White & Champagne Gold Silk Scratch Surface)
    const initCover = () => {
      ctx.fillStyle = '#f8f6f2';
      ctx.fillRect(0, 0, width, height);

      // Create subtle luxury silk pixel pattern
      const pixelSize = 14;
      for (let x = 0; x < width; x += pixelSize) {
        for (let y = 0; y < height; y += pixelSize) {
          const shade = Math.floor(Math.random() * 15);
          ctx.fillStyle = `rgb(${245 - shade}, ${240 - shade}, ${232 - shade})`;
          ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
        }
      }

      // Elegant Champagne Gold Typography Guidance
      ctx.font = '600 14px Cormorant Garamond, serif';
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
      ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2);
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

    ctx.fillStyle = '#f8f6f2';
    ctx.fillRect(0, 0, width, height);

    const pixelSize = 14;
    for (let x = 0; x < width; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
        const shade = Math.floor(Math.random() * 15);
        ctx.fillStyle = `rgb(${245 - shade}, ${240 - shade}, ${232 - shade})`;
        ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
      }
    }

    ctx.font = '600 14px Cormorant Garamond, serif';
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
        className="relative w-full h-[480px] md:h-[560px] rounded-2xl overflow-hidden shadow-md border border-[#e5e0d8] group bg-[#fdfbf7]"
      >
        {/* Revealed High-Res Jewelry Image Card */}
        <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-end p-8" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80')`
        }}>
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />

          {/* Unveiled Spec Overlay Light Card */}
          <div className="relative z-10 max-w-lg bg-white/95 backdrop-blur-md p-6 rounded-xl border border-[#e5e0d8] shadow-xl animate-fade-in text-[#1a1a1a]">
            <span className="text-[#897358] text-xs font-bold tracking-widest uppercase mb-1 block">Unveiled Masterpiece</span>
            <h3 className="font-serif-luxury text-2xl text-[#1a1a1a] mb-2 font-medium">The 105.42ct D-Flawless Graff Diamond Ring</h3>
            <p className="text-xs text-[#666666] mb-4 leading-relaxed">
              Discovered deep within Southern African deposits and transformed by master Graff gemcutters in London into an unparalleled brilliant cut oval gem.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="px-3 py-1 bg-[#897358]/15 border border-[#897358]/40 text-[#897358] rounded-full">Carat: 105.42 ct</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-200 text-[#1a1a1a] rounded-full">Color: D-Flawless</span>
            </div>
          </div>
        </div>

        {/* Scratch Canvas Overlay */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair z-20 transition-opacity duration-500"
        />

        {/* Top Floating Badge */}
        <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-[#897358]/40 shadow-md">
            <Sparkles className="w-4 h-4 text-[#897358] animate-spin" />
            <span className="text-xs font-semibold text-[#1a1a1a]">Swiss Silk Unveil: {revealedPercent}% Unveiled</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
          <button
            onClick={handleAutoReveal}
            className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-full text-xs text-[#1a1a1a] hover:border-[#897358] hover:text-[#897358] transition-all flex items-center gap-1.5 border border-[#e5e0d8] shadow-sm font-medium"
            title="Instant Unveil"
          >
            <Wand2 className="w-3.5 h-3.5 text-[#897358]" />
            <span>Instant Reveal</span>
          </button>
          <button
            onClick={handleReset}
            className="bg-white/90 backdrop-blur-md p-2 rounded-full text-[#1a1a1a] hover:text-[#897358] transition-all border border-[#e5e0d8] shadow-sm"
            title="Reset Canvas"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
