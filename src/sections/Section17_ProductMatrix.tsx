import React, { useState } from 'react';
import type { Product } from '../types';
import { SlidersHorizontal, Eye, Heart, ShoppingBag, Sparkles } from 'lucide-react';

interface Section17Props {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const Section17_ProductMatrix: React.FC<Section17Props> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'High Jewelry', 'Timepieces'];

  let filtered = filterCategory === 'All'
    ? products
    : products.filter((p) => p.category === filterCategory || (filterCategory === 'High Jewelry' && p.isHighJewelry));

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <section id="catalog-matrix" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Storefront Matrix</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Explore The Full Storefront Matrix
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Filter and sort through Graff’s complete portfolio of fine jewellery and haute horologie creations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#e5e0d8]">
        <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#897358] text-white font-semibold shadow-md'
                  : 'bg-gray-100 text-[#666666] border border-gray-200 hover:text-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-[#666666] font-medium">
          <SlidersHorizontal className="w-4 h-4 text-[#897358]" />
          <span>Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#e5e0d8] rounded-lg px-3 py-1.5 text-xs text-[#1a1a1a] outline-none focus:border-[#897358]"
          >
            <option value="featured">Graff Curated Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((product) => {
          const isWish = wishlistIds.includes(product.id);
          return (
            <div
              key={product.id}
              className="group relative glass-panel rounded-2xl overflow-hidden border border-[#e5e0d8] hover:border-[#897358] transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl bg-white"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onSelectProduct(product)}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full glass-panel border transition-all z-10 ${
                    isWish ? 'border-red-400 text-red-500 bg-red-50' : 'border-gray-200 text-[#1a1a1a] hover:border-[#897358]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
                </button>

                {product.isNewArrival && (
                  <span className="absolute top-3 left-3 glass-panel-gold px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#897358] rounded-full font-bold border border-[#897358]/30">
                    New Arrival
                  </span>
                )}
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase text-[#897358] tracking-widest block font-bold">
                    {product.collection}
                  </span>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif-luxury text-base text-[#1a1a1a] font-medium line-clamp-1 cursor-pointer hover:text-[#897358] transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-gold-gradient font-serif-luxury mt-1">
                    ${product.price.toLocaleString()} USD
                  </p>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 btn-pill py-2.5 glass-panel text-[#1a1a1a] border border-[#e5e0d8] text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:border-[#897358] transition-all font-semibold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(product, 1)}
                    className="p-2.5 rounded-full bg-[#897358] text-white hover:bg-[#6e5a43] transition-all shadow-md"
                    title="Add to Bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
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
