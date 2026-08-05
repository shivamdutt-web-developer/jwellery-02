import React, { useState } from 'react';
import { Sparkles, Shield, Award, Truck, Clock, CheckCircle2 } from 'lucide-react';

export const Section19_VIPNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="glass-panel-gold p-8 sm:p-14 rounded-2xl border border-[#897358]/40 text-center max-w-4xl mx-auto relative overflow-hidden mb-16 shadow-sm">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs text-[#897358] uppercase tracking-widest font-bold border border-[#897358]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join the World of Graff</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
            Subscribe to VIP Atelier Dispatch
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            Receive private invitations to High Jewellery debuts, private salon previews, and a complimentary <strong className="text-[#1a1a1a]">$5,000 USD welcome voucher code (GRAFFVIP)</strong>.
          </p>

          {subscribed ? (
            <div className="p-4 bg-white rounded-xl border border-emerald-500/40 text-emerald-700 text-xs flex items-center justify-center gap-2 animate-fade-in shadow-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Welcome to the Graff VIP Circle! Use voucher <strong>GRAFFVIP</strong> at checkout.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your VIP Email Address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-[#e5e0d8] rounded-full px-5 py-3 text-xs text-[#1a1a1a] placeholder-[#767676] outline-none focus:border-[#897358] shadow-sm"
                required
              />
              <button
                type="submit"
                className="btn-pill px-8 py-3 bg-[#897358] text-white text-xs uppercase tracking-widest hover:bg-[#6e5a43] transition-all font-medium shrink-0 shadow-md"
              >
                Join Atelier
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Shield, title: 'GIA Certified Diamonds', desc: 'Every solitaire diamond is individually graded by the Gemological Institute of America.' },
          { icon: Truck, title: 'Armored Insured Shipping', desc: 'Complimentary white-glove armored transit direct to your home or private boutique.' },
          { icon: Award, title: 'Lifetime Graff Guarantee', desc: 'Comprehensive warranty covering hand polishing and prong inspections for life.' },
          { icon: Clock, title: 'Bespoke Sizing Service', desc: 'Complimentary ring resizing and custom engraving by our London goldsmiths.' },
        ].map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div key={idx} className="glass-panel p-6 rounded-xl border border-[#e5e0d8] space-y-3 shadow-sm bg-white">
              <Icon className="w-6 h-6 text-[#897358]" />
              <h3 className="font-serif-luxury text-base text-[#1a1a1a] font-medium">{badge.title}</h3>
              <p className="text-xs text-[#666666] leading-relaxed">{badge.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
