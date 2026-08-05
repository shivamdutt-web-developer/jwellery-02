import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Section05Props {
  onSelectCategory: (collection: string) => void;
}

export const Section05_IconicCollections: React.FC<Section05Props> = ({ onSelectCategory }) => {
  const collections = [
    {
      name: 'Laurence Graff Signature',
      subtitle: 'Faceted Diamond Architecture',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      count: '24 Creations'
    },
    {
      name: 'Butterfly Motif',
      subtitle: 'Sculptural Grace & Wings of Light',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      count: '18 Creations'
    },
    {
      name: 'Wild Flower',
      subtitle: 'English Botanical Diamond Blooms',
      image: 'https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=800&q=80',
      count: '15 Creations'
    },
    {
      name: 'Tilda\'s Bow',
      subtitle: 'High Couture Ribbons of Diamonds',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      count: '12 Creations'
    },
    {
      name: 'Spiral',
      subtitle: 'Endless Swirling Pavé Bands',
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=800&q=80',
      count: '20 Creations'
    },
    {
      name: 'Threads',
      subtitle: 'Architectural Geometric Lines',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      count: '16 Creations'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase text-[#897358] tracking-[0.3em] font-semibold mb-2 block">
            Signature Design Houses
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
            The Icon Collections
          </h2>
        </div>
        <p className="text-xs text-[#666666] max-w-md leading-relaxed">
          Each iconic Graff collection represents a masterwork of diamond geometry, handcrafted in London with signature pavé and rare stone settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col, idx) => (
          <div
            key={idx}
            onClick={() => onSelectCategory(col.name)}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer glass-panel border border-[#e5e0d8] hover:border-[#897358] transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <img
              src={col.image}
              alt={col.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-4 right-4">
              <span className="glass-panel px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-wider font-medium">
                {col.count}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] uppercase text-[#d4af37] tracking-widest block font-semibold">
                  {col.subtitle}
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-medium group-hover:text-[#f3e5ab] transition-colors">
                  {col.name}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#897358] group-hover:border-[#897358] transition-all shrink-0">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
