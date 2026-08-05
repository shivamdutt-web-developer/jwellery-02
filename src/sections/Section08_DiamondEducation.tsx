import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Check } from 'lucide-react';

export const Section08_DiamondEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Carat' | 'Cut' | 'Color' | 'Clarity'>('Carat');

  const cDetails = {
    Carat: {
      title: 'Carat Weight & Magnitude',
      desc: 'Carat measures a diamond’s weight, not merely its physical dimensions. Graff is famed for cutting the world’s largest rough diamonds into breathtaking, high-carat masterworks.',
      points: [
        '1 Carat = 200 milligrams of pure diamond crystal',
        'Graff cuts specimens ranging from 1.0ct everyday rings to 300+ ct museum pieces',
        'Visual impact exponentially expands with precision proportions'
      ],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    },
    Cut: {
      title: 'Master Cut Proportions & Radiance',
      desc: 'The only 4C governed by human artistry. Graff’s master cutters align each of the 58 facets down to the micron to optimize light refraction, fire, and scintillation.',
      points: [
        'Precision 58-Facet Symmetry for maximum light bounce',
        'Ideal Proportions prevent light leakage through the pavilion',
        'Hand-polished using traditional diamond-dusted wheels in London'
      ],
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    },
    Color: {
      title: 'Colorless Purity & Fancy Intense Hues',
      desc: 'D is the absolute highest color grade on the GIA scale, representing completely colorless perfection. Graff is also celebrated globally for rare Fancy Intense Yellow and Pink diamonds.',
      points: [
        'D-Grade: Completely colorless and pure light transmission',
        'Fancy Intense Yellow: Naturally saturated warm golden radiance',
        'Only 1 in 10,000 gem-quality diamonds exhibits fancy color'
      ],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    },
    Clarity: {
      title: 'Flawless Micro-Structure Purity',
      desc: 'Clarity measures the presence of microscopic internal inclusions. Graff specializes in Flawless (FL) and Internally Flawless (IF) diamonds possessing crystal purity.',
      points: [
        'FL (Flawless): Zero internal or external blemishes under 10x magnification',
        'VVS1/VVS2: Microscopic inclusions invisible to the naked eye',
        'Every Graff solitaire gem comes with GIA grading verification'
      ],
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    }
  };

  const current = cDetails[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GIA Certified Diamond Standards</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          The 4 Cs of Graff Excellence
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Understand the universal criteria of gemology that make every Graff solitaire diamond an extraordinary heirloom.
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-12 overflow-x-auto">
        {(['Carat', 'Cut', 'Color', 'Clarity'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn-pill px-8 py-3 text-xs uppercase tracking-widest transition-all ${
              activeTab === tab
                ? 'bg-[#897358] text-white shadow-md scale-105 font-bold'
                : 'glass-panel text-[#666666] hover:text-[#1a1a1a] border border-[#e5e0d8]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-panel p-8 sm:p-12 rounded-2xl border border-[#e5e0d8] shadow-sm">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase text-[#897358] tracking-widest font-bold block">
            Master Criteria: {activeTab}
          </span>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1a1a1a] font-medium">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            {current.desc}
          </p>

          <div className="space-y-3 pt-2">
            {current.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-[#333333] font-medium">
                <Check className="w-4 h-4 text-[#897358] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden border border-[#e5e0d8] group shadow-sm">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 glass-panel px-4 py-2 rounded-full text-xs text-white flex items-center gap-2 border border-white/20">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Verified by GIA Gemologists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
