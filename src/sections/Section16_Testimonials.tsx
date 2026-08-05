import React, { useState } from 'react';
import { HISTORIC_GEMS } from '../data/data';

export const Section16_Testimonials: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const currentGem = HISTORIC_GEMS[selectedIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          HERITAGE ARCHIVE
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          Legendary Historic Gems Timeline
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Laurence Graff has handled more historic diamonds of international importance than any other family atelier.
        </p>
      </div>

      <div className="flex justify-between items-center relative mb-10 max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        {HISTORIC_GEMS.map((gem, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative z-10 flex flex-col items-center gap-2 group focus:outline-none`}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-serif-luxury transition-all duration-300 ${
                selectedIndex === idx
                  ? 'bg-[#a38c6d] text-white font-bold scale-110 shadow-md'
                  : 'bg-white border border-[#e5e0d8] text-[#666666]'
              }`}
            >
              {gem.year}
            </div>
            <span className={`text-[10px] uppercase tracking-wider hidden sm:block font-semibold ${selectedIndex === idx ? 'text-[#a38c6d]' : 'text-[#666666]'}`}>
              {gem.name}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#efebe4] p-6 sm:p-10 rounded border border-[#e5e0d8] max-w-5xl mx-auto">
        <div className="lg:col-span-6 space-y-4 text-[#111111]">
          <span className="text-xs uppercase text-[#a38c6d] tracking-widest font-bold block">Discovered in {currentGem.year}</span>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-medium">{currentGem.name}</h3>
          <p className="text-xs text-[#666666] leading-relaxed">{currentGem.description}</p>
          <span className="inline-block text-xs text-[#a38c6d] font-bold uppercase tracking-wider">Weight: {currentGem.carat}</span>
        </div>

        <div className="lg:col-span-6">
          <div className="h-72 rounded overflow-hidden bg-white border border-[#e5e0d8]">
            <img src={currentGem.image} alt={currentGem.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
