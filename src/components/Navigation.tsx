import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Globe, PhoneCall, ChevronDown, Sparkles } from 'lucide-react';
import type { CartItem } from '../types';

interface NavigationProps {
  cartItems: CartItem[];
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenBooking: () => void;
  onSelectCategory: (category: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  cartItems,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenBooking,
  onSelectCategory,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [currency, setCurrency] = useState('USD ($)');

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const categories = ['High Jewelry', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Timepieces', 'Bridal'];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e5e0d8] transition-all duration-300 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-[#f9f8f6] border-b border-[#e5e0d8] py-1.5 px-4 text-[11px] text-[#666666] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onOpenBooking} className="hover:text-[#897358] transition-colors flex items-center gap-1.5">
            <PhoneCall className="w-3 h-3 text-[#897358]" />
            <span>VIP Salon Concierge</span>
          </button>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="hidden sm:inline">Complimentary Worldwide Insured Armored Delivery</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#1a1a1a] transition-colors font-medium">
              <Globe className="w-3 h-3 text-[#897358]" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-28 glass-panel rounded-lg hidden group-hover:block p-1 border border-[#e5e0d8] shadow-xl z-50">
              {['USD ($)', 'EUR (€)', 'GBP (£)', 'JPY (¥)', 'AED (د.إ)'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#897358]/10 hover:text-[#897358] rounded text-[11px] text-[#1a1a1a] transition-colors"
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Mobile Toggle & Search */}
        <div className="flex items-center gap-4 lg:w-1/3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#1a1a1a] hover:text-[#897358] p-2"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={onOpenSearch}
            className="hidden lg:flex items-center gap-2 text-xs text-[#666666] hover:text-[#1a1a1a] glass-panel px-3 py-2 rounded-full border border-[#e5e0d8] hover:border-[#897358] transition-all"
          >
            <Search className="w-3.5 h-3.5 text-[#897358]" />
            <span>Search High Jewellery...</span>
          </button>
        </div>

        {/* Center Brand Logo */}
        <div className="text-center lg:w-1/3">
          <a href="#" className="inline-block">
            <h1 className="font-serif-luxury text-3xl sm:text-4xl tracking-[0.25em] font-bold text-[#1a1a1a] uppercase hover:text-[#897358] transition-colors">
              GRAFF
            </h1>
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#897358] block -mt-1 font-semibold">
              London • High Jewellery
            </span>
          </a>
        </div>

        {/* Right Utility Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 lg:w-1/3">
          <button
            onClick={onOpenSearch}
            className="lg:hidden text-[#1a1a1a] hover:text-[#897358] p-2"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-1.5 btn-pill px-4 py-2 bg-[#897358] text-white hover:bg-[#6e5a43] transition-all shadow-md shadow-[#897358]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Salon</span>
          </button>

          <div className="relative">
            <button className="text-[#1a1a1a] hover:text-[#897358] p-2 relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#897358] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={onOpenCart}
            className="text-[#1a1a1a] hover:text-[#897358] p-2 relative flex items-center gap-2"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#1a1a1a]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#897358] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline text-xs text-[#666666] font-medium group-hover:text-[#1a1a1a]">Bag</span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links & Mega Menu */}
      <nav className="hidden lg:block border-t border-[#e5e0d8] bg-[#f9f8f6]/80">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-10 h-12">
          {categories.map((cat) => (
            <div
              key={cat}
              onMouseEnter={() => setActiveMegaMenu(cat)}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="relative py-3"
            >
              <button
                onClick={() => onSelectCategory(cat)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#444444] hover:text-[#897358] transition-colors relative py-1"
              >
                {cat}
                {activeMegaMenu === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#897358] transition-all" />
                )}
              </button>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-28 bg-white/98 z-50 p-6 overflow-y-auto animate-fade-in border-t border-[#e5e0d8]">
          <div className="flex flex-col space-y-6 text-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className="font-serif-luxury text-xl text-[#1a1a1a] hover:text-[#897358] py-2 border-b border-[#e5e0d8] uppercase tracking-widest"
              >
                {cat}
              </button>
            ))}

            <div className="pt-6 flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  onOpenBooking();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full btn-pill py-3 bg-[#897358] text-white font-medium uppercase tracking-widest"
              >
                Book Private Salon Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
