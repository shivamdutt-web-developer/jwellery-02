import React, { useState } from 'react';
import { HISTORIC_GEMS } from '../data/data';
import { Sparkles, Calendar, Award } from 'lucide-react';

export const Section09_HeritageTimeline: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const currentGem = HISTORIC_GEMS[selectedIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Historic Diamond Discoveries</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Legendary Historic Gems Timeline
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Laurence Graff has handled more diamonds of historic significance than any other family atelier in history.
        </p>
      </div>

      <div className="flex justify-between items-center relative mb-12 max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        {HISTORIC_GEMS.map((gem, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative z-10 flex flex-col items-center gap-2 group focus:outline-none`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-serif-luxury transition-all duration-300 ${
                selectedIndex === idx
                  ? 'bg-[#897358] text-white scale-125 shadow-md ring-4 ring-[#897358]/20 font-bold'
                  : 'bg-white border border-[#e5e0d8] text-[#666666] hover:border-[#897358] hover:text-[#1a1a1a]'
              }`}
            >
              {gem.year}
            </div>
            <span className={`text-[10px] uppercase tracking-wider hidden sm:block font-semibold ${selectedIndex === idx ? 'text-[#897358]' : 'text-[#666666]'}`}>
              {gem.name}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-panel p-8 sm:p-12 rounded-2xl border border-[#e5e0d8] max-w-5xl mx-auto shadow-sm">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 text-xs text-[#897358] font-bold">
            <Calendar className="w-4 h-4" />
            <span className="uppercase tracking-widest">Discovered in {currentGem.year}</span>
          </div>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1a1a1a] font-medium">
            {currentGem.name}
          </h3>

          <div className="inline-block glass-panel-gold px-4 py-2 rounded-lg border border-[#897358]/30">
            <span className="text-xs text-[#666666] uppercase tracking-wider block font-semibold">Carat Weight Spec</span>
            <span className="text-xl font-serif-luxury text-[#1a1a1a] font-bold">{currentGem.carat}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            {currentGem.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-[#333333] pt-2 font-medium">
            <Award className="w-4 h-4 text-[#897358]" />
            <span>Preserved in the Graff Global High Jewellery Archives</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative h-80 rounded-xl overflow-hidden border border-[#e5e0d8] group shadow-sm">
            <img
              src={currentGem.image}
              alt={currentGem.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
