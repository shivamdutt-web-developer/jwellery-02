import React, { useState } from 'react';
import { Camera, X, Heart } from 'lucide-react';

export const Section18_SocialGallery: React.FC = () => {
  const [selectedSocial, setSelectedSocial] = useState<string | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
          <Camera className="w-3.5 h-3.5" />
          <span>@Graff Official Community</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          The World of Graff on Instagram
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Tag #GraffJewels to be featured across our global editorial luxury showcases.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedSocial(img)}
            className="group relative h-48 rounded-xl overflow-hidden cursor-pointer border border-[#e5e0d8] hover:border-[#897358] transition-all shadow-sm hover:shadow-md"
          >
            <img src={img} alt="Graff Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
        ))}
      </div>

      {selectedSocial && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-white border border-[#e5e0d8] rounded-2xl p-6 shadow-2xl text-[#1a1a1a]">
            <button
              onClick={() => setSelectedSocial(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#1a1a1a] p-2 bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedSocial} alt="Social Detail" className="w-full h-80 object-cover rounded-xl mb-4" />
            <div className="flex items-center justify-between text-xs text-[#666666]">
              <span className="text-[#897358] font-bold">@Graff Official London</span>
              <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-500 fill-current" /> 14.8k Likes</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
