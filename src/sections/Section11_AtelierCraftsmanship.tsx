import React, { useState } from 'react';
import { ShoppingBag, RotateCw } from 'lucide-react';

export const Section11_AtelierCraftsmanship: React.FC = () => {
  const [carat, setCarat] = useState<number>(3.5);
  const [cut, setCut] = useState<'Round Brilliant' | 'Emerald' | 'Oval' | 'Pear' | 'Cushion'>('Oval');
  const [metal, setMetal] = useState<'Platinum' | '18k Yellow Gold' | '18k White Gold' | '18k Rose Gold'>('Platinum');
  const [color] = useState<'D' | 'E' | 'Fancy Yellow' | 'Fancy Pink'>('D');

  const basePrice = 12000;
  const caratMultiplier = Math.pow(carat, 1.85);
  const colorMultiplier = color === 'Fancy Pink' ? 2.2 : color === 'Fancy Yellow' ? 1.6 : 1.2;
  const calculatedPrice = Math.round(basePrice * caratMultiplier * colorMultiplier);

  const imagesByCut: Record<string, string> = {
    'Round Brilliant': 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80',
    'Emerald': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
    'Oval': 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=80',
    'Pear': 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80',
    'Cushion': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
  };

  const currentImage = imagesByCut[cut] || imagesByCut['Oval'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          BESPOKE ATELIER
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          Build Your Bespoke Engagement Ring
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Configure your dream solitaire ring in real-time with GIA certified cut, carat weight, and gold band alloys.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#efebe4] p-6 sm:p-10 rounded shadow-sm border border-[#e5e0d8]">
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-md rounded overflow-hidden bg-white border border-[#e5e0d8] shadow-sm">
            <img
              src={currentImage}
              alt="Bespoke Custom Ring"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-white px-3 py-1 text-xs text-[#111111] font-bold rounded shadow-sm font-serif-luxury border border-[#e5e0d8]">
                {carat.toFixed(2)} Carat
              </span>
              <span className="bg-[#a38c6d] px-3 py-1 text-xs text-white rounded font-semibold">
                {cut} Cut
              </span>
            </div>

            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full text-[#a38c6d] shadow-sm">
              <RotateCw className="w-4 h-4 animate-spin" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 text-[#111111]">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase text-[#666666] tracking-wider font-semibold">1. Diamond Carat Weight:</label>
              <span className="text-sm font-bold text-[#111111] font-serif-luxury">{carat.toFixed(2)} ct</span>
            </div>
            <input
              type="range"
              min="0.75"
              max="8.0"
              step="0.25"
              value={carat}
              onChange={(e) => setCarat(parseFloat(e.target.value))}
              className="w-full accent-[#a38c6d] cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-[#666666] tracking-wider mb-2 font-semibold">2. Diamond Cut Shape:</label>
            <div className="flex flex-wrap gap-2">
              {(['Oval', 'Round Brilliant', 'Emerald', 'Pear', 'Cushion'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCut(c)}
                  className={`px-4 py-2 rounded text-xs transition-all ${
                    cut === c
                      ? 'bg-[#a38c6d] text-white font-semibold shadow-sm'
                      : 'bg-white text-[#444444] border border-[#e5e0d8] hover:text-[#111111]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-[#666666] tracking-wider mb-2 font-semibold">3. Precious Metal Band:</label>
            <div className="grid grid-cols-2 gap-2">
              {(['Platinum', '18k Yellow Gold', '18k White Gold', '18k Rose Gold'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMetal(m)}
                  className={`px-3 py-2 rounded text-xs transition-all text-left flex items-center gap-2 ${
                    metal === m
                      ? 'bg-[#a38c6d]/15 border border-[#a38c6d] text-[#111111] font-semibold'
                      : 'bg-white text-[#444444] border border-[#e5e0d8]'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${m.includes('Yellow') ? 'bg-amber-400' : m.includes('Rose') ? 'bg-rose-300' : 'bg-slate-300'}`} />
                  <span>{m}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#e5e0d8] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-[#666666] uppercase tracking-widest block font-medium">Estimated Bespoke Value</span>
              <span className="text-2xl font-serif-luxury text-[#a38c6d] font-bold">
                ${calculatedPrice.toLocaleString()} USD
              </span>
            </div>

            <button
              onClick={() => alert('Bespoke ring request submitted to London Atelier')}
              className="btn-graff-gold inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ADD TO BAG</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
