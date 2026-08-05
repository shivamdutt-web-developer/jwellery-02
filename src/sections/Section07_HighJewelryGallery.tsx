import React, { useState } from 'react';
import { LayoutGrid, Grid3X3, Maximize2, Heart, Eye } from 'lucide-react';
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
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'grid' | 'spotlight'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'High Jewelry'];

  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory || (selectedCategory === 'High Jewelry' && p.isHighJewelry));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <span className="text-xs uppercase text-[#a38c6d] tracking-[0.35em] font-semibold mb-2 block">
            STOREFRONT GALLERY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
            High Jewellery Masterpieces
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#efebe4] p-1 rounded flex items-center gap-1 border border-[#e5e0d8]">
            <button
              onClick={() => setLayoutMode('editorial')}
              className={`px-3 py-1.5 rounded text-xs flex items-center gap-1.5 transition-all ${
                layoutMode === 'editorial' ? 'bg-[#a38c6d] text-white font-medium' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">2 Column</span>
            </button>

            <button
              onClick={() => setLayoutMode('grid')}
              className={`px-3 py-1.5 rounded text-xs flex items-center gap-1.5 transition-all ${
                layoutMode === 'grid' ? 'bg-[#a38c6d] text-white font-medium' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">4 Column Grid</span>
            </button>

            <button
              onClick={() => setLayoutMode('spotlight')}
              className={`px-3 py-1.5 rounded text-xs flex items-center gap-1.5 transition-all ${
                layoutMode === 'spotlight' ? 'bg-[#a38c6d] text-white font-medium' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Spotlight</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-2 pb-4 mb-8 border-b border-[#e5e0d8]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded text-xs uppercase tracking-widest transition-all ${
              selectedCategory === cat
                ? 'bg-[#111111] text-white font-semibold'
                : 'bg-white text-[#666666] hover:text-[#111111] border border-[#e5e0d8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className={`grid gap-6 transition-all duration-500 ${
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
              className="group relative bg-white rounded overflow-hidden border border-[#e5e0d8] hover:border-[#a38c6d] transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-[#ffffff] p-4 cursor-pointer" onClick={() => onSelectProduct(item)}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(item);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full border transition-all z-10 ${
                    isWish ? 'border-red-400 text-red-500 bg-red-50' : 'border-[#e5e0d8] text-[#111111] bg-white hover:border-[#a38c6d]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="p-5 space-y-2 border-t border-[#e5e0d8] flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase text-[#a38c6d] tracking-widest block font-bold">
                    {item.collection}
                  </span>
                  <h3
                    onClick={() => onSelectProduct(item)}
                    className="font-serif-luxury text-base text-[#111111] font-medium line-clamp-1 cursor-pointer hover:text-[#a38c6d] transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#a38c6d] font-serif-luxury mt-1">
                    ${item.price.toLocaleString()} USD
                  </p>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="w-full btn-graff-gold py-2.5 text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>QUICK VIEW</span>
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
