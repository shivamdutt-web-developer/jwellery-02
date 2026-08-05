import React, { useState } from 'react';
import { Heart, Download, Ruler, HelpCircle } from 'lucide-react';

export const Section14_BridalSuite: React.FC = () => {
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative h-[500px] rounded-2xl overflow-hidden glass-panel border border-[#e5e0d8] group shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
            alt="Graff Bridal Solitaire"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-xl border border-white/20 text-white">
            <span className="text-[10px] text-[#d4af37] uppercase tracking-widest block font-bold">Bridal Suite</span>
            <h3 className="font-serif-luxury text-2xl text-white font-medium">The Promise of Forever</h3>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Exclusive Bridal & Engagement</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal leading-tight">
            Graff Bridal & Solitaire Suite
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            Every Graff engagement ring is a singular celebration of love. Hand-selected for exceptional fire and set in custom platinum architectural mountings designed to last generations.
          </p>

          <div className="space-y-4 pt-2">
            <button
              onClick={() => setShowSizeGuide(!showSizeGuide)}
              className="w-full glass-panel p-4 rounded-xl border border-[#e5e0d8] hover:border-[#897358] transition-all flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <Ruler className="w-5 h-5 text-[#897358]" />
                <div>
                  <h4 className="text-xs text-[#1a1a1a] font-semibold uppercase tracking-wider">Interactive Ring Size Calculator</h4>
                  <p className="text-[11px] text-[#666666]">Find your precise ring size using international measurement standards.</p>
                </div>
              </div>
              <HelpCircle className="w-4 h-4 text-[#666666]" />
            </button>

            {showSizeGuide && (
              <div className="glass-panel-gold p-4 rounded-xl border border-[#897358]/30 space-y-2 text-xs animate-fade-in">
                <span className="text-[#897358] font-bold block uppercase tracking-wider">US vs EU Ring Size Conversion:</span>
                <div className="grid grid-cols-4 gap-2 text-center text-[#1a1a1a] text-[11px] pt-1">
                  <div className="bg-white p-2 rounded border border-[#e5e0d8] font-semibold">US 5 = 49mm</div>
                  <div className="bg-white p-2 rounded border border-[#e5e0d8] font-semibold">US 6 = 52mm</div>
                  <div className="bg-white p-2 rounded border border-[#e5e0d8] font-semibold">US 7 = 54mm</div>
                  <div className="bg-white p-2 rounded border border-[#e5e0d8] font-semibold">US 8 = 57mm</div>
                </div>
              </div>
            )}

            <button
              onClick={() => alert('Downloading Graff GIA Bridal Diamond Guide PDF...')}
              className="w-full btn-pill py-3.5 bg-[#897358] text-white text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#6e5a43] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Graff Bridal Guide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
