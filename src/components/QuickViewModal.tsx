import React, { useState } from 'react';
import { X, Heart, ShoppingBag, CheckCircle } from 'lucide-react';
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

  const fallbackImg = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80';
  const ringSizes = ['5.0', '5.5', '6.0', '6.5', '7.0', '7.5', '8.0'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in text-[#111111]">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#e5e0d8] rounded overflow-y-auto shadow-2xl flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#666666] hover:text-[#111111] bg-gray-100 rounded-full border border-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-1/2 p-6 flex flex-col justify-between bg-[#efebe4]">
          <div className="relative aspect-square rounded overflow-hidden mb-4 border border-[#e5e0d8] bg-white">
            <img
              src={product.images[selectedImage] || product.images[0]}
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImg;
              }}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-all bg-white ${
                    selectedImage === idx ? 'border-[#a38c6d]' : 'border-transparent opacity-60'
                  }`}
                >
                  <img
                    src={img}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImg;
                    }}
                    alt="Thumbnail"
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase text-[#a38c6d] tracking-[0.2em] font-semibold block mb-1">
              {product.collection} COLLECTION
            </span>

            <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-2xl font-semibold text-[#a38c6d] font-serif-luxury">
                ${product.price.toLocaleString()} USD
              </span>
            </div>

            <p className="text-xs text-[#666666] leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="space-y-2 mb-6">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#333333]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#a38c6d]" />
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
                      className={`px-3 py-1.5 rounded text-xs transition-all ${
                        selectedRingSize === sz
                          ? 'bg-[#a38c6d] text-white font-bold'
                          : 'bg-gray-100 text-[#444444] border border-gray-200'
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
                className="flex-1 btn-graff-gold py-3 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded border transition-all ${
                  isWishlisted ? 'bg-red-50 border-red-400 text-red-500' : 'bg-gray-100 border-gray-200 text-[#111111]'
                }`}
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
