import React, { useState } from 'react';
import { LayoutGrid, Grid3X3, Maximize2, Sparkles, Heart, Eye } from 'lucide-react';
import type { Product } from '../types';

interface Section07Props {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const Section07_HighJewelryGallery: React.FC<Section07Props> = ({
  products,
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'grid' | 'spotlight'>('editorial');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'High Jewelry', 'Rings', 'Necklaces', 'Earrings'];

  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory || (selectedCategory === 'High Jewelry' && p.isHighJewelry));

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Layout State Toggle</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
            High Jewellery Masterpieces
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="glass-panel p-1.5 rounded-full flex items-center gap-1 border border-[#e5e0d8]">
            <button
              onClick={() => setLayoutMode('editorial')}
              className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all ${
                layoutMode === 'editorial' ? 'bg-[#897358] text-white font-medium shadow-md' : 'text-[#666666] hover:text-[#1a1a1a]'
              }`}
              title="Editorial 2-Column Mode"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Editorial</span>
            </button>

            <button
              onClick={() => setLayoutMode('grid')}
              className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all ${
                layoutMode === 'grid' ? 'bg-[#897358] text-white font-medium shadow-md' : 'text-[#666666] hover:text-[#1a1a1a]'
              }`}
              title="Grid Mode"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setLayoutMode('spotlight')}
              className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all ${
                layoutMode === 'spotlight' ? 'bg-[#897358] text-white font-medium shadow-md' : 'text-[#666666] hover:text-[#1a1a1a]'
              }`}
              title="Spotlight Full View Mode"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Spotlight</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-6 mb-8 border-b border-[#e5e0d8]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
              selectedCategory === cat
                ? 'bg-[#1a1a1a] text-white font-semibold'
                : 'bg-gray-100 text-[#666666] hover:text-[#1a1a1a] border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className={`grid gap-8 transition-all duration-500 ${
          layoutMode === 'editorial'
            ? 'grid-cols-1 md:grid-cols-2'
            : layoutMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}
      >
        {filtered.map((item) => {
          const isWish = wishlistIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`group relative glass-panel rounded-2xl overflow-hidden border border-[#e5e0d8] hover:border-[#897358] transition-all duration-500 shadow-sm hover:shadow-xl ${
                layoutMode === 'spotlight' ? 'h-[500px]' : 'h-[420px]'
              }`}
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleWishlist(item);
                }}
                className={`absolute top-4 right-4 p-2.5 rounded-full glass-panel border transition-all z-10 ${
                  isWish ? 'border-red-500 text-red-500 bg-red-50' : 'border-white/30 text-white hover:border-[#897358]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <span className="text-[10px] uppercase text-[#d4af37] tracking-widest block font-semibold">
                  {item.collection} Collection
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium">
                  {item.name}
                </h3>
                <p className="text-sm font-light text-[#f3e5ab]">
                  ${item.price.toLocaleString()} USD
                </p>

                <div className="pt-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="flex-1 btn-pill py-2.5 bg-[#897358] text-white text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#6e5a43] transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
