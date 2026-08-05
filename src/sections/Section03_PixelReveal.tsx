import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Section03Props {
  onExploreClick?: () => void;
}

export const Section03_PixelReveal: React.FC<Section03Props> = ({ onExploreClick }) => {
  const [activeDot, setActiveDot] = useState(0);

  const fallbackImg = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80';

  const rings = [
    {
      name: 'Laurence Graff Signature Yellow Gold Band',
      price: '$4,200 USD',
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Laurence Graff Signature White Gold Band',
      price: '$4,500 USD',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Laurence Graff Signature Rose Gold Ring',
      price: '$4,800 USD',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Laurence Graff Signature Pavé Diamond Ring',
      price: '$18,500 USD',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="relative group">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {rings.map((ring, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 cursor-pointer group/card">
              <div className="w-full aspect-square bg-[#ffffff] flex items-center justify-center p-4 overflow-hidden border border-transparent hover:border-[#e5e0d8] rounded transition-all">
                <img
                  src={ring.image}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImg;
                  }}
                  alt={ring.name}
                  className="max-h-full max-w-full object-contain group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-sans text-xs font-semibold text-[#111111] uppercase tracking-wider line-clamp-2 px-2 hover:text-[#a38c6d] transition-colors">
                {ring.name}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={() => setActiveDot((prev) => (prev > 0 ? prev - 1 : 2))}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-white border border-[#e5e0d8] text-[#111111] shadow-sm hover:border-[#a38c6d] transition-all hidden sm:flex"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveDot((prev) => (prev < 2 ? prev + 1 : 0))}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-white border border-[#e5e0d8] text-[#111111] shadow-sm hover:border-[#a38c6d] transition-all hidden sm:flex"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeDot === dot ? 'bg-[#a38c6d] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button onClick={onExploreClick} className="graff-link pt-2">
          EXPLORE RINGS
        </button>
      </div>
    </section>
  );
};
