import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export const Section15_BoutiqueConcierge: React.FC = () => {
  const [avatar, setAvatar] = useState<'hand' | 'portrait'>('hand');

  const avatars = {
    hand: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=80',
    portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          VIRTUAL MIRROR
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          Virtual High Jewellery Try-On
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Experience how Graff solitaire rings and high jewellery align on hand and neck profiles with interactive AR controls.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#efebe4] p-6 sm:p-10 rounded border border-[#e5e0d8]">
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full h-[420px] rounded overflow-hidden bg-white border border-[#e5e0d8]">
            <img src={avatars[avatar]} alt="AR TryOn" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs text-emerald-700 font-semibold rounded border border-emerald-500/30">
              ● AR Tracking Active: 60 FPS
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4 text-[#111111]">
          <h3 className="font-serif-luxury text-2xl font-medium">Select Profile View:</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setAvatar('hand')}
              className={`flex-1 py-3 text-xs uppercase tracking-wider rounded transition-all ${
                avatar === 'hand' ? 'bg-[#a38c6d] text-white font-semibold' : 'bg-white text-[#111111] border border-[#e5e0d8]'
              }`}
            >
              Hand Ring Profile
            </button>
            <button
              onClick={() => setAvatar('portrait')}
              className={`flex-1 py-3 text-xs uppercase tracking-wider rounded transition-all ${
                avatar === 'portrait' ? 'bg-[#a38c6d] text-white font-semibold' : 'bg-white text-[#111111] border border-[#e5e0d8]'
              }`}
            >
              Necklace Portrait
            </button>
          </div>

          <button
            onClick={() => alert('Snapshot captured!')}
            className="w-full btn-graff-black py-3.5 text-xs flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>CAPTURE VIP SNAPSHOT</span>
          </button>
        </div>
      </div>
    </section>
  );
};
