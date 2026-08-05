import React from 'react';

interface Section04Props {
  onExploreClick?: () => void;
}

export const Section04_3DParticleSphere: React.FC<Section04Props> = ({ onExploreClick }) => {
  const fallbackImg = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center space-y-4 group cursor-pointer" onClick={onExploreClick}>
          <div className="w-full h-[420px] md:h-[480px] overflow-hidden rounded bg-[#f7f5f0]">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImg;
              }}
              alt="A Sculptural Gold Signature"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111] font-normal pt-2">
            A Sculptural Gold Signature
          </h3>
          <p className="text-xs text-[#666666] tracking-wide font-normal max-w-sm">
            Modern facets reflect light from every angle, creating a bold architectural diamond statement.
          </p>

          <span className="graff-link pt-1">DISCOVER</span>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 group cursor-pointer" onClick={onExploreClick}>
          <div className="w-full h-[420px] md:h-[480px] overflow-hidden rounded bg-[#efebe4]">
            <img
              src="https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=80"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImg;
              }}
              alt="Graphic Beauty, Reimagined"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111] font-normal pt-2">
            Graphic Beauty, Reimagined
          </h3>
          <p className="text-xs text-[#666666] tracking-wide font-normal max-w-sm">
            Architectural gold bangles set with rare Graff diamonds in an endless tactile spiral.
          </p>

          <span className="graff-link pt-1">DISCOVER</span>
        </div>
      </div>
    </section>
  );
};
