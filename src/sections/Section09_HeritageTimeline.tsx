import React from 'react';

export const Section09_HeritageTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-[450px] md:h-[520px] rounded overflow-hidden bg-[#f9f8f6]">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80';
            }}
            alt="London Atelier Craftsmanship"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="space-y-6 md:pl-6 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
            ATELIER ARTISTRY
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal leading-tight">
            Crafted by Hand in Our London Atelier
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-md">
            Every piece is designed to accentuate the natural brilliance of every diamond, sculpted in custom platinum by master goldsmiths.
          </p>

          <div>
            <button className="graff-link pt-2">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
