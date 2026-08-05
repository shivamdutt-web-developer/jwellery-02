import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Section01Props {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Section01_HeroShowcase: React.FC<Section01Props> = ({ onExploreClick, onBookClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[88vh] md:h-[92vh] overflow-hidden bg-[#0c1f19] flex items-center">
      {/* Background Campaign Image with Subtle Mouse Tilt Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=2000&q=80"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=80';
          }}
          alt="Laurence Graff Signature Campaign"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-300 ease-out opacity-90"
          style={{
            transform: `translate3d(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px, 0) scale(1.05)`,
          }}
        />

        {/* Soft Vignette Overlay for Crisp Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Hero Content (Exact Official Graff Layout & Typography Scale) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex flex-col justify-center text-white">
        <div className="max-w-xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-semibold">
              COLLECTION 2026
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-normal leading-[1.05] drop-shadow-2xl">
            Laurence Graff <br />
            <span className="italic text-[#f3e5ab] font-light">Signature</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-200 tracking-wider font-light max-w-md leading-relaxed pb-2 drop-shadow">
            An iconic collection defined by faceted gold architecture and hand-set D-Flawless diamonds, crafted in our London atelier.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="btn-graff-gold inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBookClick}
              className="px-6 py-3 rounded-sm border border-white/40 bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-[#111111] transition-all"
            >
              BOOK PRIVATE SALON
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-medium">SCROLL TO DISCOVER</span>
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
