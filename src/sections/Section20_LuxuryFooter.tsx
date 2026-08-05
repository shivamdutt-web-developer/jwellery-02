import React from 'react';
import { PhoneCall, Globe, Shield } from 'lucide-react';

interface Section20Props {
  onOpenBooking: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Section20_LuxuryFooter: React.FC<Section20Props> = ({ onOpenBooking, onSelectCategory }) => {
  return (
    <footer className="bg-[#f9f8f6] text-[#666666] border-t border-[#e5e0d8] pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-serif-luxury text-3xl tracking-[0.25em] text-[#1a1a1a] uppercase font-bold">
            GRAFF
          </h2>
          <p className="text-xs leading-relaxed max-w-sm text-[#666666]">
            For over half a century, Graff has operated at the pinnacle of the luxury jewellery industry, discovering and crafting diamonds of unprecedented size and rarity.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs">
            <button
              onClick={onOpenBooking}
              className="btn-pill px-5 py-2.5 bg-[#897358] text-white hover:bg-[#6e5a43] transition-all flex items-center gap-2 shadow-sm font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact VIP Concierge</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif-luxury text-sm text-[#1a1a1a] uppercase tracking-widest font-bold">
            High Jewellery
          </h3>
          <ul className="space-y-2.5 text-xs font-medium">
            {['High Jewelry', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Timepieces', 'Bridal'].map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className="hover:text-[#897358] transition-colors"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif-luxury text-sm text-[#1a1a1a] uppercase tracking-widest font-bold">
            The House
          </h3>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><a href="#boutique-booking" className="hover:text-[#897358] transition-colors">London Atelier</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#897358] transition-colors">Historic Gem Archive</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#897358] transition-colors">Flagship Boutiques</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#897358] transition-colors">Responsible Sourcing</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#897358] transition-colors">GIA Gemological Guide</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif-luxury text-sm text-[#1a1a1a] uppercase tracking-widest font-bold">
            Client Care
          </h3>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><button onClick={onOpenBooking} className="hover:text-[#897358] transition-colors">Private Appointments</button></li>
            <li><a href="#" className="hover:text-[#897358] transition-colors">Armored Delivery Protocol</a></li>
            <li><a href="#" className="hover:text-[#897358] transition-colors">Ring Resizing & Repairs</a></li>
            <li><a href="#" className="hover:text-[#897358] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#897358] transition-colors">Privacy & Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#e5e0d8] pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] gap-4">
        <p>© 2026 Graff Diamonds Limited. All rights reserved. Designed with luxury design system tokens.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#1a1a1a] font-medium">
            <Globe className="w-3.5 h-3.5 text-[#897358]" /> English (International)
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <Shield className="w-3.5 h-3.5" /> WCAG 2.2 AA Compliant
          </span>
        </div>
      </div>
    </footer>
  );
};
