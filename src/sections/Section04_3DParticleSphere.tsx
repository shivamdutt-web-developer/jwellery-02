import React from 'react';
import { ParticleSphereCanvas } from '../components/animations/ParticleSphereCanvas';
import { Sparkles, Layers, MousePointerClick } from 'lucide-react';

export const Section04_3DParticleSphere: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e5e0d8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 glass-panel-gold px-3 py-1 rounded-full text-xs text-[#897358] uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WebGL / Canvas Particle Engine</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1a1a1a] font-normal leading-tight">
            The 3D Gemstone Particle Sphere
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            Experience Graff’s diamond fire in three dimensions. Our real-time particle simulation constructs an orbiting sphere of 900 individual sparkling light points representing raw diamond crystal lattices.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3 glass-panel p-3 rounded-xl border border-[#e5e0d8]">
              <MousePointerClick className="w-5 h-5 text-[#897358] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs text-[#1a1a1a] font-semibold uppercase tracking-wider">Mouse Orbit Control</h4>
                <p className="text-[11px] text-[#666666]">Hover over the sphere to bend its gravitational rotational matrix in real time.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 glass-panel p-3 rounded-xl border border-[#e5e0d8]">
              <Layers className="w-5 h-5 text-[#897358] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs text-[#1a1a1a] font-semibold uppercase tracking-wider">Bespoke Color Filters</h4>
                <p className="text-[11px] text-[#666666]">Switch live between D-Flawless White, Canary Yellow, Emerald Green, and Royal Sapphire.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ParticleSphereCanvas />
        </div>
      </div>
    </section>
  );
};
