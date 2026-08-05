import React, { useState } from 'react';

export const Section17_ProductMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Carat' | 'Cut' | 'Color' | 'Clarity'>('Carat');

  const details = {
    Carat: 'Carat measures a diamond’s weight. Graff is famed for cutting the world’s largest rough diamonds into extraordinary masterworks.',
    Cut: 'The only 4C governed by human artistry. Graff’s master cutters align each of the 58 facets down to the micron to optimize light refraction.',
    Color: 'D is the absolute highest color grade on the GIA scale. Graff also specializes in rare Fancy Intense Yellow and Pink diamonds.',
    Clarity: 'Clarity measures internal purity. Graff specializes in Flawless (FL) and Internally Flawless (IF) diamonds possessing crystal purity.',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          GEMOLOGY MASTERY
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          The 4 Cs of Graff Excellence
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Understand the universal criteria of gemology that make every Graff solitaire diamond an extraordinary heirloom.
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        {(['Carat', 'Cut', 'Color', 'Clarity'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 text-xs uppercase tracking-widest transition-all rounded ${
              activeTab === tab ? 'bg-[#a38c6d] text-white font-semibold' : 'bg-[#efebe4] text-[#666666]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-[#efebe4] p-8 rounded border border-[#e5e0d8] max-w-3xl mx-auto text-center space-y-3">
        <h3 className="font-serif-luxury text-2xl text-[#111111] font-medium">{activeTab} Mastery Standard</h3>
        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">{details[activeTab]}</p>
      </div>
    </section>
  );
};
