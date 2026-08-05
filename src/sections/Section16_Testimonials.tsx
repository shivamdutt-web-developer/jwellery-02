import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/data';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Section16_Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="max-w-4xl mx-auto text-center space-y-8 glass-panel p-8 sm:p-14 rounded-2xl border border-[#e5e0d8] relative shadow-sm">
        <Quote className="w-12 h-12 text-[#897358] mx-auto opacity-40 stroke-[1]" />

        <div className="min-h-[140px] flex flex-col justify-center">
          <p className="font-serif-luxury text-2xl sm:text-4xl text-[#1a1a1a] font-light italic leading-relaxed">
            "{current.quote}"
          </p>

          <div className="mt-6">
            <span className="text-xs uppercase text-[#897358] tracking-[0.25em] font-bold block">
              {current.author}
            </span>
            <span className="text-[11px] text-[#666666] tracking-widest uppercase font-semibold">
              {current.publication}
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 pt-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-[#e5e0d8] text-[#666666] hover:text-[#1a1a1a] hover:border-[#897358] transition-all bg-white"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === i ? 'bg-[#897358] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-[#e5e0d8] text-[#666666] hover:text-[#1a1a1a] hover:border-[#897358] transition-all bg-white"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
