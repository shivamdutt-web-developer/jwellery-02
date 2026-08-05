import React, { useState } from 'react';
import { Sparkles, PenTool, Gem, ShieldCheck } from 'lucide-react';

export const Section11_AtelierCraftsmanship: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Hand Gouache Illustration',
      icon: PenTool,
      desc: 'Every High Jewellery masterpiece begins as a hand-rendered gouache illustration by Graff’s senior designers on London’s New Bond Street.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02',
      title: 'Rare Gem Curation & Matching',
      icon: Gem,
      desc: 'Gemologists spend years selecting, matching, and balancing color hue, tone, and brilliance to assemble harmonious pairs of diamonds.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03',
      title: 'Hand-Sculpted Platinum Mounts',
      icon: Sparkles,
      desc: 'Master goldsmiths hand-carve platinum mountings around each individual diamond, ensuring metal is minimized to allow light maximum entry.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04',
      title: 'Micro-Pavé Setting & Polish',
      icon: ShieldCheck,
      desc: 'Using high-magnification microscopes, setters secure pavé diamonds with microscopic prongs before a final mirror polish.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Master Artistry in London</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          London Atelier Craftsmanship Workflow
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Discover the traditional heritage techniques and modern precision gemology that transform raw earth into timeless Graff icons.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-4">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#897358]/10 border-[#897358] shadow-md'
                    : 'glass-panel border-[#e5e0d8] hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#897358]' : 'text-[#666666]'}`}>
                      {st.num}
                    </span>
                    <h3 className={`font-serif-luxury text-lg ${isActive ? 'text-[#1a1a1a] font-semibold' : 'text-[#666666]'}`}>
                      {st.title}
                    </h3>
                  </div>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#897358]' : 'text-[#666666]'}`} />
                </div>
                {isActive && (
                  <p className="text-xs text-[#666666] leading-relaxed pt-2 border-t border-[#e5e0d8] animate-fade-in">
                    {st.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-[480px] rounded-2xl overflow-hidden glass-panel border border-[#e5e0d8] group shadow-sm">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-white/20 text-white">
              <span className="text-[10px] text-[#d4af37] uppercase tracking-widest block font-bold">Stage {steps[activeStep].num} Workflow</span>
              <h4 className="font-serif-luxury text-2xl text-white font-medium">{steps[activeStep].title}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
