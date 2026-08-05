import React from 'react';

interface Section20Props {
  onOpenBooking: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Section20_LuxuryFooter: React.FC<Section20Props> = ({ onOpenBooking, onSelectCategory }) => {
  return (
    <footer className="bg-white text-[#666666] border-t border-[#e5e0d8] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16 text-xs">
        {/* Logo & House */}
        <div className="col-span-2 space-y-4">
          <h2 className="font-serif-luxury text-2xl tracking-[0.25em] text-[#111111] uppercase font-bold">
            GRAFF
          </h2>
          <p className="text-[11px] leading-relaxed max-w-sm text-[#666666]">
            For over half a century, Graff has operated at the pinnacle of the luxury jewellery industry, discovering and crafting diamonds of unprecedented size and rarity.
          </p>
        </div>

        {/* High Jewellery */}
        <div className="space-y-3">
          <h3 className="font-sans text-xs text-[#111111] uppercase tracking-[0.2em] font-semibold">
            HIGH JEWELLERY
          </h3>
          <ul className="space-y-2 text-[11px]">
            {['HIGH JEWELRY', 'RINGS', 'NECKLACES', 'EARRINGS', 'BRACELETS', 'TIMEPIECES', 'BRIDAL'].map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className="hover:text-[#a38c6d] transition-colors"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* The House */}
        <div className="space-y-3">
          <h3 className="font-sans text-xs text-[#111111] uppercase tracking-[0.2em] font-semibold">
            THE HOUSE
          </h3>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#boutique-booking" className="hover:text-[#a38c6d] transition-colors">London Atelier</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#a38c6d] transition-colors">Historic Gem Archive</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#a38c6d] transition-colors">Flagship Boutiques</a></li>
            <li><a href="#boutique-booking" className="hover:text-[#a38c6d] transition-colors">Responsible Sourcing</a></li>
          </ul>
        </div>

        {/* Client Care */}
        <div className="space-y-3">
          <h3 className="font-sans text-xs text-[#111111] uppercase tracking-[0.2em] font-semibold">
            CLIENT CARE
          </h3>
          <ul className="space-y-2 text-[11px]">
            <li><button onClick={onOpenBooking} className="hover:text-[#a38c6d] transition-colors">Book Appointment</button></li>
            <li><a href="#" className="hover:text-[#a38c6d] transition-colors">Armored Delivery</a></li>
            <li><a href="#" className="hover:text-[#a38c6d] transition-colors">Ring Resizing</a></li>
            <li><a href="#" className="hover:text-[#a38c6d] transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#e5e0d8] pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4 text-[#666666]">
        <p>© 2026 Graff Diamonds Limited. All rights reserved.</p>
        <p className="text-[10px] tracking-wider uppercase">London • New York • Paris • Tokyo</p>
      </div>
    </footer>
  );
};
