import React from 'react';

export const Section13_LuxuryGiftFinder: React.FC = () => {
  const fallbackImg = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';

  const cards = [
    {
      title: 'Artistic Inspiration',
      subtitle: 'NATURE & BOTANICAL BLOOMS',
      image: 'https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Brilliant Appointments',
      subtitle: 'PRIVATE SALON EXPERIENCES',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Unique Diamond Creations',
      subtitle: 'RARE FANCY INTENSE GEMS',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          The World of Graff
        </h2>
        <div>
          <span className="graff-link">DISCOVER</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-4 group cursor-pointer">
            <div className="w-full h-80 rounded overflow-hidden bg-[#f7f5f0]">
              <img
                src={card.image}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImg;
                }}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="font-serif-luxury text-2xl text-[#111111] font-medium pt-1">
              {card.title}
            </h3>

            <p className="text-[11px] text-[#666666] tracking-[0.2em] font-semibold uppercase">
              {card.subtitle}
            </p>

            <span className="graff-link pt-1">DISCOVER</span>
          </div>
        ))}
      </div>
    </section>
  );
};
