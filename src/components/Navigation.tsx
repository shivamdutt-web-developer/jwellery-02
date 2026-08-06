import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Globe, PhoneCall, ChevronDown, Sparkles, Volume2, VolumeX } from 'lucide-react';
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playChime = () => {
    if (!isAudioEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      // Audio fallback
    }
  };

  const categories = ['HIGH JEWELRY', 'RINGS', 'NECKLACES', 'EARRINGS', 'BRACELETS', 'TIMEPIECES', 'BRIDAL'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e0d8] transition-all duration-300">
      {/* Golden Scroll Progress Indicator Line */}
      <div
        className="h-[2px] bg-[#a38c6d] transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Official Top Announcement Bar in Sand Champagne Gold */}
      <div className="bg-[#b39c82] text-white py-1.5 px-4 sm:px-8 text-[11px] flex items-center justify-between font-sans font-medium">
        <div className="flex items-center gap-4">
          <button onClick={onOpenBooking} className="hover:text-white/80 transition-colors flex items-center gap-1.5">
            <PhoneCall className="w-3 h-3 text-white" />
            <span>VIP Salon Concierge</span>
          </button>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline">Complimentary Worldwide Insured Armored Delivery</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsAudioEnabled(!isAudioEnabled);
              playChime();
            }}
            className="flex items-center gap-1 hover:text-white/80 transition-colors text-[10px] uppercase font-semibold"
            title="Toggle Ambient Audio Feedback"
          >
            {isAudioEnabled ? <Volume2 className="w-3 h-3 text-white animate-pulse" /> : <VolumeX className="w-3 h-3 text-white/60" />}
            <span className="hidden sm:inline">{isAudioEnabled ? 'Audio Active' : 'Audio Muted'}</span>
          </button>

          <span className="text-white/40">|</span>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <Globe className="w-3 h-3 text-white" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-28 bg-white rounded shadow-xl hidden group-hover:block p-1 border border-[#e5e0d8] z-50 text-[#111111]">
              {['USD ($)', 'EUR (€)', 'GBP (£)', 'JPY (¥)', 'AED (د.إ)'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#b39c82]/10 hover:text-[#b39c82] rounded text-[11px] font-medium transition-colors"
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
        {/* Left Search */}
        <div className="flex items-center gap-4 lg:w-1/3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#111111] p-2"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={onOpenSearch}
            className="hidden lg:flex items-center gap-2 text-xs text-[#666666] hover:text-[#111111] bg-[#f9f8f6] px-4 py-2 rounded-full border border-[#e5e0d8] hover:border-[#a38c6d] transition-all"
          >
            <Search className="w-3.5 h-3.5 text-[#a38c6d]" />
            <span>Search High Jewellery...</span>
          </button>
        </div>

        {/* Center Brand Logo */}
        <div className="text-center lg:w-1/3">
          <a href="#" className="inline-block group">
            <h1 className="font-serif-luxury text-3xl sm:text-4xl tracking-[0.25em] font-bold text-[#111111] uppercase group-hover:text-[#a38c6d] transition-colors">
              GRAFF
            </h1>
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#a38c6d] block -mt-1 font-semibold">
              LONDON • HIGH JEWELLERY
            </span>
          </a>
        </div>

        {/* Right Utility */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 lg:w-1/3">
          <button
            onClick={onOpenSearch}
            className="lg:hidden text-[#111111] p-2"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              playChime();
              onOpenBooking();
            }}
            className="hidden sm:flex items-center gap-1.5 btn-graff-gold py-2 px-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>BOOK SALON</span>
          </button>

          <button
            onClick={() => {
              playChime();
              onOpenBooking();
            }}
            className="text-[#111111] hover:text-[#a38c6d] p-2 relative"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#a38c6d] text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              playChime();
              onOpenCart();
            }}
            className="text-[#111111] hover:text-[#a38c6d] p-2 relative flex items-center gap-2"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#111111]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#a38c6d] text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline text-xs text-[#666666] font-medium">Bag</span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:block border-t border-[#e5e0d8] bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-10 h-11">
          {categories.map((cat) => (
            <div
              key={cat}
              onMouseEnter={() => setActiveMegaMenu(cat)}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="relative py-2"
            >
              <button
                onClick={() => {
                  playChime();
                  onSelectCategory(cat);
                }}
                className="text-xs uppercase tracking-[0.22em] font-semibold text-[#222222] hover:text-[#a38c6d] transition-colors py-1"
              >
                {cat}
                {activeMegaMenu === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a38c6d] transition-all duration-300" />
                )}
              </button>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-28 bg-white z-50 p-6 overflow-y-auto border-t border-[#e5e0d8]">
          <div className="flex flex-col space-y-5 text-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className="font-serif-luxury text-lg text-[#111111] hover:text-[#a38c6d] py-2 border-b border-gray-100 uppercase tracking-widest"
              >
                {cat}
              </button>
            ))}

            <div className="pt-6">
              <button
                onClick={() => {
                  onOpenBooking();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full btn-graff-gold py-3 text-xs"
              >
                BOOK SALON APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
