import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 50000;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'GRAFFVIP' || promoCode.trim().toUpperCase() === 'ATELIER') {
      setDiscount(5000);
      setPromoApplied(true);
    } else {
      alert('Invalid VIP Voucher Code. Try: GRAFFVIP');
    }
  };

  const finalTotal = Math.max(0, subtotal - discount);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white h-full flex flex-col border-l border-[#e5e0d8] shadow-2xl relative text-[#1a1a1a]">
        <div className="p-6 border-b border-[#e5e0d8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#897358]" />
            <h2 className="font-serif-luxury text-xl text-[#1a1a1a] font-medium uppercase tracking-widest">
              Your Luxury Bag ({cartItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
            aria-label="Close Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#f9f8f6] p-4 border-b border-[#e5e0d8]">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-[#666666]">Armored Insured Express Delivery</span>
            <span className="text-[#897358] font-semibold">
              {subtotal >= freeShippingThreshold ? 'Unlocked' : `$${(freeShippingThreshold - subtotal).toLocaleString()} away`}
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#897358] to-[#a38c6d] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#666666]">
              <ShoppingBag className="w-12 h-12 stroke-[1] text-[#897358]" />
              <p className="font-serif-luxury text-lg text-[#1a1a1a]">Your Shopping Bag is empty.</p>
              <p className="text-xs max-w-xs">Explore our High Jewellery catalog to add iconic creations.</p>
              <button
                onClick={onClose}
                className="btn-pill px-6 py-2.5 bg-[#897358] text-white hover:bg-[#6e5a43] transition-all text-xs"
              >
                Explore Collections
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 glass-panel rounded-xl border border-[#e5e0d8] hover:border-[#897358]/60 transition-all"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-lg bg-gray-100"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#897358] tracking-widest font-semibold">{item.product.collection}</span>
                    <h3 className="font-serif-luxury text-sm text-[#1a1a1a] line-clamp-1">{item.product.name}</h3>
                    <p className="text-xs text-[#666666] mt-0.5">${item.product.price.toLocaleString()} USD</p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full border border-gray-200 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 hover:text-[#897358]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-[#1a1a1a] font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 hover:text-[#897358]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#666666] hover:text-red-500 p-1 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#e5e0d8] bg-[#f9f8f6] space-y-4">
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="VIP Voucher (GRAFFVIP)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] placeholder-[#767676] focus:border-[#897358] outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#897358] text-white rounded-lg text-xs hover:bg-[#6e5a43] transition-all font-medium"
              >
                Apply
              </button>
            </form>

            {promoApplied && (
              <div className="text-xs text-[#897358] flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>$5,000 VIP Welcome Discount Applied!</span>
              </div>
            )}

            <div className="space-y-1.5 text-xs text-[#666666]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="text-[#1a1a1a] font-medium">${subtotal.toLocaleString()} USD</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#897358]">
                  <span>VIP Voucher Discount:</span>
                  <span>-${discount.toLocaleString()} USD</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Insured Armored Delivery:</span>
                <span className="text-emerald-600 font-semibold">Complimentary</span>
              </div>
              <div className="flex justify-between font-serif-luxury text-lg text-[#1a1a1a] font-bold pt-2 border-t border-[#e5e0d8]">
                <span>Total:</span>
                <span className="text-gold-gradient">${finalTotal.toLocaleString()} USD</span>
              </div>
            </div>

            <button
              onClick={() => alert('Proceeding to Graff Secure Armored Checkout Protocol...')}
              className="w-full btn-pill py-3 bg-gradient-to-r from-[#897358] to-[#a38c6d] text-white font-medium uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#897358]/30 transition-all"
            >
              <span>Secure VIP Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#666666]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#897358]" />
              <span>256-Bit Encrypted Armored Vault Delivery Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
