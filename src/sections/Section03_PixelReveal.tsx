import React from 'react';
import { PixelRevealCanvas } from '../components/animations/PixelRevealCanvas';
import { Sparkles } from 'lucide-react';

export const Section03_PixelReveal: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Swiss Pixel Unveil</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Unveil the 105ct D-Flawless Graff Diamond
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
          Hover or drag across the metallic raw mineral canvas below to scratch away the raw earth and expose the legendary 105-carat Graff masterwork beneath.
        </p>
      </div>

      <PixelRevealCanvas />
    </section>
  );
};
