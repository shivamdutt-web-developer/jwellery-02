import React from 'react';
import { CinematicJewelryScrollHero } from '../components/animations/CinematicJewelryScrollHero';

interface Section01Props {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Section01_HeroShowcase: React.FC<Section01Props> = ({ onExploreClick, onBookClick }) => {
  return (
    <section className="w-full">
      <CinematicJewelryScrollHero onExploreClick={onExploreClick} onBookClick={onBookClick} />
    </section>
  );
};
