import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { BOUTIQUES } from '../data/data';

export const Section18_SocialGallery: React.FC = () => {
  const [selectedBoutique, setSelectedBoutique] = useState(BOUTIQUES[0].city);
  const [booked, setBooked] = useState(false);

  return (
    <section id="boutique-booking" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          PRIVATE SALONS
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          Book a Private Salon Viewing
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Reserve a private viewing session at our global flagship boutiques in London, New York, Paris, or Tokyo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#efebe4] p-6 sm:p-10 rounded border border-[#e5e0d8] max-w-4xl mx-auto">
        <div className="space-y-4">
          <label className="block text-xs uppercase text-[#666666] tracking-wider font-semibold">Select Flagship Boutique:</label>
          <div className="grid grid-cols-2 gap-2">
            {BOUTIQUES.map((b) => (
              <button
                key={b.city}
                onClick={() => setSelectedBoutique(b.city)}
                className={`py-2 px-3 text-xs uppercase tracking-wider rounded font-medium transition-all ${
                  selectedBoutique === b.city ? 'bg-[#a38c6d] text-white' : 'bg-white text-[#111111] border border-[#e5e0d8]'
                }`}
              >
                {b.city}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-center">
          {booked ? (
            <p className="text-xs text-[#a38c6d] font-bold uppercase tracking-wider">
              Appointment requested for {selectedBoutique} Flagship.
            </p>
          ) : (
            <button
              onClick={() => setBooked(true)}
              className="w-full btn-graff-gold py-4 text-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>CONFIRM SALON RESERVATION</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
