import React from 'react';

export const Section10_VirtualTryOn: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:pr-6 text-center md:text-left order-2 md:order-1">
          <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
            EARRING CREATIONS
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal leading-tight">
            Diamond Earring Masterpieces
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-md">
            Versatile designs that sparkle with effortless elegance, framing the face with light from rare D-Flawless gemstones.
          </p>

          <div>
            <button className="graff-link pt-2">
              DISCOVER
            </button>
          </div>
        </div>

        <div className="w-full h-[450px] md:h-[520px] rounded overflow-hidden bg-[#efebe4] order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80';
            }}
            alt="Diamond Earring Masterpieces"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};
