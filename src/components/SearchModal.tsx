import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import type { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.gemstone.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-md animate-fade-in text-[#1a1a1a]">
      <div className="w-full max-w-3xl bg-white border border-[#e5e0d8] rounded-2xl p-6 shadow-2xl relative">
        <div className="flex items-center gap-3 border-b border-[#e5e0d8] pb-4">
          <Search className="w-5 h-5 text-[#897358]" />
          <input
            type="text"
            placeholder="Search diamonds, collections, rings, necklaces..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-lg text-[#1a1a1a] placeholder-[#767676] outline-none font-serif-luxury"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {query.trim() === '' && (
          <div className="py-6 space-y-4">
            <span className="text-xs uppercase text-[#666666] tracking-widest block font-semibold">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {['Yellow Diamond', 'Laurence Graff', 'Butterfly', 'High Jewelry', 'Engagement Ring', 'Emerald Cut'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="glass-panel px-4 py-2 rounded-full text-xs text-[#1a1a1a] hover:border-[#897358] hover:text-[#897358] transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#897358]" />
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {query.trim() !== '' && (
          <div className="py-6 max-h-[60vh] overflow-y-auto space-y-4">
            <span className="text-xs uppercase text-[#666666] tracking-widest block font-semibold">
              Results ({filteredProducts.length})
            </span>

            {filteredProducts.length === 0 ? (
              <p className="text-sm text-[#666666] py-8 text-center font-serif-luxury">
                No Graff creations found matching "{query}".
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="glass-panel p-3 rounded-xl flex items-center gap-4 cursor-pointer hover:border-[#897358] transition-all group"
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                    />
                    <div className="flex-1">
                      <span className="text-[9px] uppercase text-[#897358] tracking-widest font-semibold">{prod.collection}</span>
                      <h4 className="font-serif-luxury text-sm text-[#1a1a1a] line-clamp-1 group-hover:text-[#897358] transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-[#666666]">${prod.price.toLocaleString()} USD</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#897358] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
