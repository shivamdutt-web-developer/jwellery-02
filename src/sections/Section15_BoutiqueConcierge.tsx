import React, { useState } from 'react';
import { BOUTIQUES } from '../data/data';
import { Calendar, Clock, MapPin, Phone, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Section15_BoutiqueConcierge: React.FC = () => {
  const [selectedBoutique, setSelectedBoutique] = useState(BOUTIQUES[0].city);
  const [date, setDate] = useState('2026-08-15');
  const [time, setTime] = useState('14:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const activeBoutiqueObj = BOUTIQUES.find((b) => b.city === selectedBoutique) || BOUTIQUES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter your Name and Email address.');
      return;
    }
    setIsBooked(true);
  };

  return (
    <section id="boutique-booking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Private Salon Experience</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Book a Private Salon Viewing
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Reserve a private champagne viewing session at our global flagship boutiques in London, New York, Paris, or Tokyo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#f9f8f6] p-6 sm:p-10 rounded-2xl border border-[#e5e0d8] shadow-sm">
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 rounded-xl border border-[#e5e0d8] bg-white">
          <div>
            <div className="relative h-56 rounded-xl overflow-hidden mb-6 border border-[#e5e0d8]">
              <img
                src={activeBoutiqueObj.image}
                alt={activeBoutiqueObj.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 glass-panel px-3 py-1 text-xs text-[#897358] font-bold rounded-full border border-white/20">
                {activeBoutiqueObj.city} Flagship
              </span>
            </div>

            <h3 className="font-serif-luxury text-2xl text-[#1a1a1a] font-medium mb-3">
              {activeBoutiqueObj.name}
            </h3>

            <div className="space-y-3 text-xs text-[#666666]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#897358] shrink-0 mt-0.5" />
                <span>{activeBoutiqueObj.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#897358] shrink-0" />
                <span>{activeBoutiqueObj.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#897358] shrink-0" />
                <span>{activeBoutiqueObj.hours}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e5e0d8] text-[11px] text-[#333333] flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#897358]" />
            <span>Includes Armored Security Escort & Vintage Champagne Reception</span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          {isBooked ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 glass-panel rounded-xl border border-[#897358]/40 bg-white animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-[#897358]" />
              <h3 className="font-serif-luxury text-3xl text-[#1a1a1a] font-medium">Appointment Requested</h3>
              <p className="text-xs text-[#666666] max-w-md">
                Thank you, <strong className="text-[#1a1a1a]">{name}</strong>. A Senior Graff Director from our <strong className="text-[#1a1a1a]">{selectedBoutique} Flagship</strong> will contact you via {phone || email} within 2 hours to confirm your private salon reservation.
              </p>
              <button
                onClick={() => setIsBooked(false)}
                className="btn-pill px-6 py-2.5 bg-[#897358] text-white text-xs uppercase tracking-wider hover:bg-[#6e5a43] transition-all"
              >
                Schedule Another Session
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase text-[#666666] tracking-wider mb-2 font-semibold">1. Select Flagship City:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BOUTIQUES.map((b) => (
                    <button
                      type="button"
                      key={b.city}
                      onClick={() => setSelectedBoutique(b.city)}
                      className={`py-2 rounded-lg text-xs font-medium transition-all ${
                        selectedBoutique === b.city
                          ? 'bg-[#897358] text-white shadow-md'
                          : 'bg-white text-[#666666] border border-[#e5e0d8] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {b.city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-[#666666] tracking-wider mb-1 font-semibold">Preferred Date:</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] outline-none focus:border-[#897358]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-[#666666] tracking-wider mb-1 font-semibold">Preferred Time:</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] outline-none focus:border-[#897358]"
                  >
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:30">04:30 PM</option>
                    <option value="18:00">06:00 PM (Private Evening)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-[#666666] tracking-wider mb-1 font-semibold">Full Name:</label>
                  <input
                    type="text"
                    placeholder="e.g. Lord Harrington"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] placeholder-[#767676] outline-none focus:border-[#897358]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-[#666666] tracking-wider mb-1 font-semibold">Email Address:</label>
                  <input
                    type="email"
                    placeholder="vip@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] placeholder-[#767676] outline-none focus:border-[#897358]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-[#666666] tracking-wider mb-1 font-semibold">Phone / WhatsApp:</label>
                <input
                  type="tel"
                  placeholder="+44 7000 000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-xs text-[#1a1a1a] placeholder-[#767676] outline-none focus:border-[#897358]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-pill py-3.5 bg-gradient-to-r from-[#897358] to-[#a38c6d] text-white font-medium uppercase tracking-widest hover:shadow-lg hover:shadow-[#897358]/30 transition-all text-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm VIP Salon Reservation</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
