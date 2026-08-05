import React, { useState } from 'react';
import { Gift, Sparkles, ArrowRight } from 'lucide-react';
import type { Product } from '../types';

interface Section13Props {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Section13_LuxuryGiftFinder: React.FC<Section13Props> = ({ products, onSelectProduct }) => {
  const [recipient, setRecipient] = useState<'For Her' | 'For Him' | 'Bridal' | 'Self Luxury'>('For Her');
  const [occasion, setOccasion] = useState<'Anniversary' | 'Engagement' | 'Gala' | 'Milestone'>('Anniversary');
  const [budget, setBudget] = useState<'$20k - $50k' | '$50k - $150k' | '$150k+'>('$50k - $150k');
  const [isCalculated, setIsCalculated] = useState(false);

  const recommendedProduct = products[0];

  const handleGenerate = () => {
    setIsCalculated(true);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Gift className="w-3.5 h-3.5" />
          <span>Curated VIP Concierge Assistant</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Bespoke Luxury Gift Finder
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Answer three brief questions to receive an instant bespoke recommendation from Graff’s London stylists.
        </p>
      </div>

      <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-2xl border border-[#e5e0d8] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <label className="block text-xs uppercase text-[#897358] tracking-widest mb-3 font-bold">
              1. Gift Recipient:
            </label>
            <div className="space-y-2">
              {(['For Her', 'For Him', 'Bridal', 'Self Luxury'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => { setRecipient(r); setIsCalculated(false); }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs text-left transition-all ${
                    recipient === r
                      ? 'bg-[#897358] text-white font-semibold shadow-md'
                      : 'bg-white text-[#666666] border border-[#e5e0d8] hover:text-[#1a1a1a]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-[#897358] tracking-widest mb-3 font-bold">
              2. Special Occasion:
            </label>
            <div className="space-y-2">
              {(['Anniversary', 'Engagement', 'Gala', 'Milestone'] as const).map((o) => (
                <button
                  key={o}
                  onClick={() => { setOccasion(o); setIsCalculated(false); }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs text-left transition-all ${
                    occasion === o
                      ? 'bg-[#897358] text-white font-semibold shadow-md'
                      : 'bg-white text-[#666666] border border-[#e5e0d8] hover:text-[#1a1a1a]'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-[#897358] tracking-widest mb-3 font-bold">
              3. Investment Tier:
            </label>
            <div className="space-y-2">
              {(['$20k - $50k', '$50k - $150k', '$150k+'] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => { setBudget(b); setIsCalculated(false); }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs text-left transition-all ${
                    budget === b
                      ? 'bg-[#897358] text-white font-semibold shadow-md'
                      : 'bg-white text-[#666666] border border-[#e5e0d8] hover:text-[#1a1a1a]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleGenerate}
            className="btn-pill px-8 py-3.5 bg-gradient-to-r from-[#897358] to-[#a38c6d] text-white text-xs uppercase tracking-widest font-medium hover:shadow-lg hover:shadow-[#897358]/30 transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Recommended Gift</span>
          </button>
        </div>

        {isCalculated && (
          <div className="mt-10 pt-10 border-t border-[#e5e0d8] flex flex-col md:flex-row items-center gap-8 animate-fade-in glass-panel p-6 rounded-xl border border-[#897358]/40 bg-white">
            <img
              src={recommendedProduct.images[0]}
              alt={recommendedProduct.name}
              className="w-36 h-36 object-cover rounded-xl bg-gray-100 border border-[#e5e0d8]"
            />
            <div className="flex-1 space-y-2 text-left">
              <span className="text-[10px] text-[#897358] uppercase tracking-widest font-bold block">
                Perfect Gift Match for {recipient} ({occasion})
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#1a1a1a] font-medium">{recommendedProduct.name}</h3>
              <p className="text-xs text-[#666666]">{recommendedProduct.description}</p>
              <p className="text-lg font-serif-luxury text-gold-gradient font-bold pt-1">
                ${recommendedProduct.price.toLocaleString()} USD
              </p>
            </div>
            <button
              onClick={() => onSelectProduct(recommendedProduct)}
              className="btn-pill px-6 py-3 bg-[#897358] text-white text-xs uppercase tracking-wider hover:bg-[#6e5a43] transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>View Piece</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
