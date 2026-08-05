import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Section01Props {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Section01_HeroShowcase: React.FC<Section01Props> = ({ onExploreClick, onBookClick }) => {
  return (
    <section className="relative w-full h-[88vh] md:h-[92vh] flex items-center justify-center overflow-hidden bg-[#faf8f5]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=2000&q=80"
          alt="Graff High Jewelry"
          className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/70" />
        <div className="absolute inset-0 bg-gold-radial pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-4 py-1.5 rounded-full border border-[#897358]/40 animate-pulse">
          <Sparkles className="w-4 h-4 text-[#897358]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#897358] font-bold">
            London Atelier Masterpiece
          </span>
        </div>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1a1a1a] font-normal leading-[1.05]">
          The Most Fabulous Jewels <br />
          <span className="italic font-light text-gold-gradient">in the World</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#666666] tracking-widest font-medium uppercase leading-relaxed">
          Crafted with rare D-Flawless diamonds and unparalleled London master artistry since 1960.
        </p>

        {/* Dual Call to Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto btn-pill px-8 py-4 bg-gradient-to-r from-[#897358] to-[#a38c6d] text-white font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#897358]/40 hover:scale-105 transition-all"
          >
            <span>Explore High Jewellery</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBookClick}
            className="w-full sm:w-auto btn-pill px-8 py-4 glass-panel text-[#1a1a1a] border border-[#e5e0d8] hover:border-[#897358] hover:text-[#897358] uppercase tracking-[0.2em] transition-all font-semibold"
          >
            Book Private Salon Viewing
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] font-semibold">Scroll to Discover</span>
        <div className="w-5 h-8 border border-[#e5e0d8] rounded-full flex justify-center p-1 bg-white/80 shadow-sm">
          <div className="w-1 h-2 bg-[#897358] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
