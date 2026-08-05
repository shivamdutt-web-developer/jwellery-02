import React, { useState } from 'react';
import { Heart } from 'lucide-react';

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8] bg-white">
      <div className="bg-[#efebe4] p-10 sm:p-16 rounded text-center max-w-5xl mx-auto space-y-6">
        <Heart className="w-6 h-6 text-[#a38c6d] mx-auto fill-[#a38c6d]" />

        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#111111] font-normal">
          Subscribe to our newsletter
        </h2>

        <p className="text-xs sm:text-sm text-[#666666] tracking-wide font-normal max-w-md mx-auto">
          Be the first to receive updates on our latest collections, high jewellery debuts, and private salon viewings.
        </p>

        {subscribed ? (
          <p className="text-xs text-[#a38c6d] font-semibold tracking-wider uppercase pt-2">
            Thank you for subscribing to the House of Graff.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-[#e5e0d8] px-4 py-3 text-xs text-[#111111] placeholder-[#767676] outline-none focus:border-[#a38c6d] rounded-sm"
              required
            />
            <button
              type="submit"
              className="btn-graff-black px-8 py-3 text-xs uppercase tracking-widest font-semibold shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
