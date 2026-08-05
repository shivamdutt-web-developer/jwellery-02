import React from 'react';
import { PixelRevealCanvas } from '../components/animations/PixelRevealCanvas';

export const Section12_RunwayLookbook: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          INTERACTIVE UNVEIL
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          Swiss Silk Scratch Reveal Studio
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Scratch across the silk canvas surface below to expose the rare 105ct D-Flawless Graff masterwork beneath.
        </p>
      </div>

      <PixelRevealCanvas />
    </section>
  );
};
