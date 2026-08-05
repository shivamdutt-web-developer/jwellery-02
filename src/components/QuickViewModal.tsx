import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Shield, Award, CheckCircle, Sparkles } from 'lucide-react';
import type { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, ringSize?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedRingSize, setSelectedRingSize] = useState('6.0');

  const ringSizes = ['5.0', '5.5', '6.0', '6.5', '7.0', '7.5', '8.0'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in text-[#1a1a1a]">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#e5e0d8] rounded-2xl overflow-y-auto shadow-2xl flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#666666] hover:text-[#1a1a1a] bg-gray-100/80 rounded-full border border-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-1/2 p-6 flex flex-col justify-between bg-[#f9f8f6]">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border border-[#e5e0d8] group">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {product.isHighJewelry && (
              <span className="absolute top-4 left-4 glass-panel-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#897358] rounded-full border border-[#897358]/30">
                High Jewellery Creation
              </span>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#897358] scale-95 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#897358]" />
              <span className="text-xs uppercase text-[#897358] tracking-[0.2em] font-semibold">
                {product.collection} Collection
              </span>
            </div>

            <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#1a1a1a] font-medium mb-3">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-2xl font-semibold text-gold-gradient font-serif-luxury">
                ${product.price.toLocaleString()} USD
              </span>
              {product.caratWeight && (
                <span className="text-xs text-[#666666] bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200 font-medium">
                  Carat: {product.caratWeight}
                </span>
              )}
            </div>

            <p className="text-xs text-[#666666] leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="space-y-2 mb-6">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#333333]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#897358]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {product.category === 'Rings' && (
              <div className="mb-6">
                <label className="block text-xs text-[#666666] mb-2 uppercase tracking-wider font-semibold">
                  Select Ring Size (US):
                </label>
                <div className="flex flex-wrap gap-2">
                  {ringSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedRingSize(sz)}
                      className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                        selectedRingSize === sz
                          ? 'bg-[#897358] text-white font-bold shadow-md'
                          : 'bg-gray-100 text-[#444444] border border-gray-200 hover:text-[#1a1a1a]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-[#e5e0d8] space-y-3">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onAddToCart(product, 1, selectedRingSize);
                  onClose();
                }}
                className="flex-1 btn-pill py-3 bg-gradient-to-r from-[#897358] to-[#a38c6d] text-white font-medium uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#897358]/30 transition-all text-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Bag</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-full border transition-all ${
                  isWishlisted
                    ? 'bg-red-50 border-red-400 text-red-500'
                    : 'bg-gray-100 border-gray-200 text-[#1a1a1a] hover:border-[#897358]'
                }`}
                title="Add to Wishlist"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            <div className="flex items-center justify-around text-[10px] text-[#666666] pt-2">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#897358]" /> GIA Certified
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#897358]" /> Lifetime Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
