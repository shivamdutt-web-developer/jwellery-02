import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import type { Product } from '../types';

interface Section12Props {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Section12_RunwayLookbook: React.FC<Section12Props> = ({ products, onSelectProduct }) => {
  const [activeHotspot, setActiveHotspot] = useState<Product | null>(null);

  const hotspots = [
    { x: '45%', y: '35%', product: products[1] || products[0] },
    { x: '62%', y: '25%', product: products[2] || products[0] },
    { x: '52%', y: '68%', product: products[0] },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Editorial Lookbook</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Haute Couture Runway Hotspots
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Click on the interactive glowing gold hotspots below to inspect individual pieces worn by our campaign muse.
        </p>
      </div>

      <div className="relative w-full h-[550px] md:h-[650px] rounded-2xl overflow-hidden glass-panel border border-[#e5e0d8] shadow-md">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=80"
          alt="High Jewelry Lookbook Muse"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {hotspots.map((spot, idx) => (
          <div
            key={idx}
            style={{ top: spot.y, left: spot.x }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <button
              onClick={() => setActiveHotspot(spot.product)}
              className="relative w-8 h-8 rounded-full bg-[#897358] text-white flex items-center justify-center shadow-xl shadow-[#897358] animate-bounce hover:scale-125 transition-transform"
            >
              <span className="absolute inset-0 rounded-full bg-[#897358] animate-ping opacity-75" />
              <Sparkles className="w-4 h-4 relative z-10" />
            </button>
          </div>
        ))}

        {activeHotspot && (
          <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 glass-panel p-6 rounded-2xl border border-[#897358] shadow-2xl z-30 animate-fade-in bg-white/95 text-[#1a1a1a]">
            <div className="flex gap-4 items-center">
              <img
                src={activeHotspot.images[0]}
                alt={activeHotspot.name}
                className="w-20 h-20 object-cover rounded-lg bg-gray-100 border border-gray-200"
              />
              <div className="flex-1">
                <span className="text-[10px] uppercase text-[#897358] tracking-widest font-semibold">{activeHotspot.collection}</span>
                <h4 className="font-serif-luxury text-sm text-[#1a1a1a] line-clamp-1">{activeHotspot.name}</h4>
                <p className="text-xs text-gold-gradient font-serif-luxury font-bold mt-1">${activeHotspot.price.toLocaleString()} USD</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  onSelectProduct(activeHotspot);
                  setActiveHotspot(null);
                }}
                className="w-full btn-pill py-2 bg-[#897358] text-white text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#6e5a43] transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Creation</span>
              </button>
              <button
                onClick={() => setActiveHotspot(null)}
                className="px-3 py-2 text-xs text-[#666666] hover:text-[#1a1a1a] glass-panel rounded-full border border-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
