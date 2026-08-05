import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Section06_RingBuilder: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-[#f4f0eb] border-t border-[#e5e0d8]">
      <img
        src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1800&q=80"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=80';
        }}
        alt="High Jewellery Diamond Necklaces"
        className="w-full h-full object-cover object-center opacity-90 scale-100 hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center text-white z-10">
        <div className="max-w-md space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block">
            HIGH JEWELLERY
          </span>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-white font-normal leading-tight">
            Diamond Necklaces
          </h2>

          <div className="pt-2">
            <button className="btn-graff-gold inline-flex items-center gap-2">
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
