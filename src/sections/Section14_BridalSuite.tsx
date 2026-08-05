import React from 'react';
import { ParticleSphereCanvas } from '../components/animations/ParticleSphereCanvas';

export const Section14_BridalSuite: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-[#e5e0d8]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#a38c6d] font-semibold block">
          WEBGL SIMULATION
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#111111] font-normal">
          The 3D Gemstone Particle Sphere
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Orbit through 900 sparkling diamond crystal points with real-time mouse gravitational physics and gemstone color selection.
        </p>
      </div>

      <ParticleSphereCanvas />
    </section>
  );
};
