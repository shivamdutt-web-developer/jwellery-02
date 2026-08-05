import React from 'react';
import { Diamond } from 'lucide-react';

export const Section02_HeritageTicker: React.FC = () => {
  const items = [
    'GRAFF LONDON ATELIER',
    'HIGH JEWELLERY MASTERPIECES',
    'RARE FANCY INTENSE YELLOW DIAMONDS',
    'D-FLAWLESS GEMSTONES',
    'BESPOKE ENGAGEMENT CREATIONS',
    'SWISS HIGH HOROLOGY TIMEPIECES',
  ];

  return (
    <section className="w-full bg-[#f9f8f6] border-y border-[#e5e0d8] py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {items.concat(items).map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-[#666666] font-semibold">
            <span className="hover:text-[#1a1a1a] transition-colors cursor-default">{text}</span>
            <Diamond className="w-3 h-3 text-[#897358] fill-[#897358]" />
          </div>
        ))}
      </div>
    </section>
  );
};
