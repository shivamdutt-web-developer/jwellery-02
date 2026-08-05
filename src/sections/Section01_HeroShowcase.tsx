import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Section01Props {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Section01_HeroShowcase: React.FC<Section01Props> = ({ onExploreClick }) => {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-[#0a1f18]">
      <img
        src="https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=2000&q=80"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=80';
        }}
        alt="Laurence Graff Signature Campaign"
        className="w-full h-full object-cover object-center scale-100"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center text-white z-10">
        <div className="max-w-xl space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold block">
            COLLECTION
          </span>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl tracking-tight text-white font-normal leading-[1.08]">
            Laurence Graff <br />
            Signature
          </h1>

          <p className="text-xs sm:text-sm text-gray-200 tracking-wider font-light max-w-md pb-2">
            An iconic collection defined by faceted gold architecture and hand-set D-Flawless diamonds.
          </p>

          <div>
            <button
              onClick={onExploreClick}
              className="btn-graff-gold hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
