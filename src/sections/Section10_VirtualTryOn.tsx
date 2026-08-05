import React, { useState } from 'react';
import { Camera, Sparkles, CheckCircle } from 'lucide-react';

export const Section10_VirtualTryOn: React.FC = () => {
  const [activeJewel, setActiveJewel] = useState<'ring' | 'necklace' | 'earrings'>('ring');
  const [avatar, setAvatar] = useState<'hand' | 'portrait'>('hand');
  const [brightness, setBrightness] = useState(100);
  const [isSnapshotTaken, setIsSnapshotTaken] = useState(false);

  const avatars = {
    hand: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=80',
    portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
  };

  const handleTakeSnapshot = () => {
    setIsSnapshotTaken(true);
    setTimeout(() => setIsSnapshotTaken(false), 3000);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Augmented Reality Mirror Simulator</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Virtual High Jewellery Try-On
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Simulate how Graff diamond creations align on hand and neck profiles with interactive lighting calibration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#f9f8f6] p-6 sm:p-10 rounded-2xl border border-[#e5e0d8] shadow-sm">
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden glass-panel border border-[#e5e0d8] group">
            <img
              src={avatars[avatar]}
              alt="AR Try-On Avatar"
              className="w-full h-full object-cover transition-all duration-300"
              style={{ filter: `brightness(${brightness}%)` }}
            />

            <div className="absolute inset-0 border-2 border-dashed border-[#897358]/40 pointer-events-none rounded-2xl" />

            <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full text-[11px] text-emerald-700 flex items-center gap-2 border border-emerald-500/30 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>AR Tracking Active: 60 FPS</span>
            </div>

            {isSnapshotTaken && (
              <div className="absolute inset-0 bg-white animate-fade-out z-30 flex items-center justify-center">
                <span className="text-[#1a1a1a] font-bold uppercase tracking-widest text-sm bg-white/95 px-6 py-3 rounded-full shadow-2xl border border-[#e5e0d8]">
                  Snapshot Saved to VIP Gallery!
                </span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass-panel p-3 rounded-xl border border-[#e5e0d8] z-20">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAvatar('hand')}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    avatar === 'hand' ? 'bg-[#897358] text-white font-medium shadow-sm' : 'text-[#666666] hover:text-[#1a1a1a]'
                  }`}
                >
                  Hand Profile
                </button>
                <button
                  onClick={() => setAvatar('portrait')}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    avatar === 'portrait' ? 'bg-[#897358] text-white font-medium shadow-sm' : 'text-[#666666] hover:text-[#1a1a1a]'
                  }`}
                >
                  Portrait Profile
                </button>
              </div>

              <button
                onClick={handleTakeSnapshot}
                className="btn-pill px-4 py-2 bg-[#897358] text-white text-xs flex items-center gap-1.5 hover:bg-[#6e5a43] transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>Take Snapshot</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-serif-luxury text-2xl text-[#1a1a1a] font-medium">Select Piece to Try On:</h3>

          <div className="space-y-3">
            {[
              { id: 'ring', name: 'Laurence Graff Signature Oval Ring', price: '$68,500' },
              { id: 'necklace', name: 'The Golden Empress Yellow Diamond Necklace', price: '$340,000' },
              { id: 'earrings', name: 'Butterfly Silhouette Diamond Earrings', price: '$24,500' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveJewel(item.id as any);
                  if (item.id === 'necklace' || item.id === 'earrings') setAvatar('portrait');
                  else setAvatar('hand');
                }}
                className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                  activeJewel === item.id
                    ? 'bg-[#897358]/15 border-[#897358] text-[#1a1a1a] font-semibold'
                    : 'glass-panel border-[#e5e0d8] text-[#666666] hover:text-[#1a1a1a]'
                }`}
              >
                <div>
                  <h4 className="font-serif-luxury text-sm text-[#1a1a1a] font-medium">{item.name}</h4>
                  <span className="text-xs text-[#897358] font-bold">{item.price} USD</span>
                </div>
                {activeJewel === item.id && <CheckCircle className="w-5 h-5 text-[#897358]" />}
              </button>
            ))}
          </div>

          <div className="glass-panel p-4 rounded-xl border border-[#e5e0d8] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#666666]">Ambient Salon Light Intensity:</span>
              <span className="text-[#1a1a1a] font-bold">{brightness}%</span>
            </div>
            <input
              type="range"
              min="60"
              max="140"
              value={brightness}
              onChange={(e) => setBrightness(parseInt(e.target.value))}
              className="w-full accent-[#897358] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
