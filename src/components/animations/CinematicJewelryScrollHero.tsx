import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface CardItem {
  id: string;
  kicker: string;
  title: string;
  desc: string;
  image: string;
}

export const CinematicJewelryScrollHero: React.FC<{
  onExploreClick?: () => void;
  onBookClick?: () => void; }> = ({ onExploreClick, onBookClick }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(5); // Start in middle set
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const sightCardsData: CardItem[] = [
    {
      id: 'c1',
      kicker: 'Solitaire Ring',
      title: 'Stari Most Solitaire',
      desc: 'The D-Flawless 105ct oval diamond set in London platinum.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c2',
      kicker: 'Boutique Collection',
      title: 'Butterfly Motif',
      desc: 'Sculptural wings of light set with pear shape white diamonds.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c3',
      kicker: 'Botanical Bloom',
      title: 'Wild Flower Bangle',
      desc: 'English botanical diamond clusters along continuous pavé bands.',
      image: 'https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c4',
      kicker: 'Couture Ribbons',
      title: "Tilda's Bow Drop",
      desc: 'High couture ribbons of brilliant round and baguette diamonds.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'c5',
      kicker: 'Swirling Pavé',
      title: 'Spiral Eternity Ring',
      desc: 'Endless swirling pavé diamond bands symbolizing infinite radiance.',
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Create 3 clone sets for seamless infinite slider looping
  const tripleCards = [...sightCardsData, ...sightCardsData, ...sightCardsData];

  useEffect(() => {
    let animationFrameId: number;
    let targetScroll = 0;
    let currentScroll = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const currentPos = -rect.top;
      targetScroll = Math.min(Math.max(currentPos / (totalScrollable || 1), 0), 1);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const loop = () => {
      // Lerp physics
      currentScroll += (targetScroll - currentScroll) * 0.12;
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      setScrollProgress(currentScroll);
      setMouseX(currentX);
      setMouseY(currentY);

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Calculated CSS Parallax & Transform values based on exact scroll math
  const titleY = -scrollProgress * 280;
  const titleScale = Math.max(0.85, 1 - scrollProgress * 0.25);
  const titleOpacity = Math.max(0, 1 - scrollProgress * 2.8);

  const introCopyOpacity = Math.max(0, 1 - scrollProgress * 3.2);
  const introCopyY = scrollProgress * 120;

  // Split-frame parting math
  const splitOffset = Math.pow(Math.min(Math.max((scrollProgress - 0.2) * 2.5, 0), 1), 1.5) * 55;
  const frame2Opacity = Math.min(Math.max((scrollProgress - 0.22) * 3, 0), 1) * (1 - Math.min(Math.max((scrollProgress - 0.65) * 3, 0), 1));
  const panel2Opacity = Math.min(Math.max((scrollProgress - 0.28) * 3, 0), 1) * (1 - Math.min(Math.max((scrollProgress - 0.58) * 3, 0), 1));

  // Story panel 3 (Bazaar / Atelier)
  const panel3Opacity = Math.min(Math.max((scrollProgress - 0.62) * 3, 0), 1) * (1 - Math.min(Math.max((scrollProgress - 0.85) * 3, 0), 1));

  // Slider enter math
  const sliderEnterProgress = Math.min(Math.max((scrollProgress - 0.72) * 4, 0), 1);
  const sliderEnterX = (1 - Math.pow(sliderEnterProgress, 1.55)) * 120;
  const sliderOpacity = sliderEnterProgress;

  const moveSlider = (dir: number) => {
    setActiveCardIndex((prev) => {
      let next = prev + dir;
      if (next >= sightCardsData.length * 2) next = sightCardsData.length;
      if (next < sightCardsData.length) next = sightCardsData.length * 2 - 1;
      return next;
    });
  };

  const cardWidth = 360;
  const cardGap = 20;
  const sliderShift = -(cardWidth + cardGap) * activeCardIndex;

  return (
    <div ref={containerRef} className="relative w-full h-[3800px] bg-[#0c1f19] text-[#fdf1e1]">
      {/* Sticky Camera Stage Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolation-isolate bg-gradient-to-b from-[#0c1f19] via-[#142e26] to-[#0a1813]">
        {/* Sky / Farthest Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=2000&q=80')`,
            transform: `translate3d(${mouseX * -0.5}px, ${mouseY * -0.5}px, 0) scale(${1.05 + scrollProgress * 0.15})`,
            filter: `brightness(${1 - scrollProgress * 0.3}) blur(${scrollProgress * 4}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Title: GRAFF MOSTAR */}
        <div
          className="absolute left-1/2 top-[18vh] -translate-x-1/2 text-center pointer-events-none z-10 w-full px-4 transition-all duration-75"
          style={{
            transform: `translate3d(calc(-50% + ${mouseX * 0.2}px), ${titleY}px, 0) scale(${titleScale})`,
            opacity: titleOpacity,
          }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-2">
            LONDON HAUTE JOAILLERIE
          </span>
          <h1 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl tracking-[0.15em] font-normal text-[#fdf1e1] drop-shadow-2xl">
            GRAFF
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#c4b5a0] pt-2">
            THE MOST FABULOUS JEWELS IN THE WORLD
          </p>
        </div>

        {/* Intro Copy & Pill Highlights */}
        <div
          className="absolute left-1/2 bottom-[14vh] -translate-x-1/2 text-center z-10 w-full max-w-xl px-6 transition-all duration-75"
          style={{
            transform: `translate3d(-50%, ${introCopyY}px, 0)`,
            opacity: introCopyOpacity,
          }}
        >
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#fdf1e1] leading-relaxed font-light drop-shadow-lg">
            "A rare D-Flawless stone, emerald water, and a London atelier made for slow mornings, late light, and one unforgettable creation."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {['Old Bridge Solitaire', 'Neretva Emeralds', 'UNESCO Masterpiece'].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full bg-[#fdf1e1] text-[#111111] text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-[#a38c6d] hover:text-white transition-all cursor-pointer"
                onClick={onExploreClick}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Split-Frame Left Diamond Layer */}
        <div
          className="absolute top-0 bottom-0 left-0 w-1/2 z-20 pointer-events-none transition-transform duration-75 overflow-hidden"
          style={{
            transform: `translate3d(${-splitOffset}vw, ${mouseY * 0.4}px, 0)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80"
            alt="Graff Split Left"
            className="w-[200%] h-full object-cover object-left opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
        </div>

        {/* Split-Frame Right Diamond Layer */}
        <div
          className="absolute top-0 bottom-0 right-0 w-1/2 z-20 pointer-events-none transition-transform duration-75 overflow-hidden"
          style={{
            transform: `translate3d(${splitOffset}vw, ${mouseY * 0.4}px, 0)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1400&q=80"
            alt="Graff Split Right"
            className="w-[200%] h-full object-cover object-right opacity-95 -translate-x-1/2"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
        </div>

        {/* Frame 2: Revealed Close-Up Diamond Gemstone Center Piece */}
        <div
          className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none transition-all duration-75"
          style={{
            opacity: frame2Opacity,
            transform: `scale(${1 + scrollProgress * 0.15})`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1800&q=80"
            alt="Revealed Masterwork"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
        </div>

        {/* Story Panel 2: Bridge Compass */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-25 max-w-2xl px-6 pointer-events-none transition-all duration-75"
          style={{ opacity: panel2Opacity }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a38c6d]/30 border border-[#d4af37]/40 backdrop-blur-md mb-4">
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#fdf1e1] font-semibold">LONDON ATELIER COMPASS</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#fdf1e1] font-normal leading-tight drop-shadow-2xl">
            The diamond is the city’s compass.
          </h2>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-md mx-auto pt-4 font-light">
            Stari Most links the banks of the Neretva and anchors a historic quarter shaped by Ottoman, Mediterranean, and European High Jewellery mastery.
          </p>

          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-8">
            <div className="border-t border-[#d4af37]/40 pt-3">
              <span className="font-serif-luxury text-4xl text-[#d4af37] font-bold block">1960</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-300">Founded in London</span>
            </div>
            <div className="border-t border-[#d4af37]/40 pt-3">
              <span className="font-serif-luxury text-4xl text-[#d4af37] font-bold block">105 ct</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-300">D-Flawless Record</span>
            </div>
          </div>
        </div>

        {/* Story Panel 3: Old Town Bazaar Details */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-25 max-w-2xl px-6 transition-all duration-75"
          style={{ opacity: panel3Opacity }}
        >
          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#fdf1e1] font-normal leading-tight drop-shadow-2xl">
            The bazaar keeps Mostar close.
          </h2>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-md mx-auto pt-4 font-light">
            Stone lanes, mosque courtyards, copper stalls, and riverside coffee stay within a short walk of Stari Most.
          </p>

          <div className="pt-6 pointer-events-auto">
            <button
              onClick={onBookClick}
              className="px-8 py-3.5 rounded-full bg-[#fdf1e1] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-[#a38c6d] hover:text-white transition-all shadow-xl inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#a38c6d]" />
              <span>OPEN OLD TOWN NOTES ↗</span>
            </button>
          </div>
        </div>

        {/* Interactive Infinite Sight Cards Track Slider */}
        <div
          className="absolute left-0 right-0 top-[20vh] z-30 pointer-events-auto transition-all duration-300"
          style={{
            opacity: sliderOpacity,
            transform: `translate3d(${sliderEnterX}vw, 0, 0)`,
            visibility: sliderOpacity > 0.05 ? 'visible' : 'hidden',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#fdf1e1]">
                MOSTAR SIGHTS CAROUSEL
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => moveSlider(-1)}
                className="p-3 rounded-full bg-[#fdf1e1] text-[#111111] hover:bg-[#a38c6d] hover:text-white transition-all shadow-lg"
                aria-label="Previous sight"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => moveSlider(1)}
                className="p-3 rounded-full bg-[#fdf1e1] text-[#111111] hover:bg-[#a38c6d] hover:text-white transition-all shadow-lg"
                aria-label="Next sight"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex gap-5 items-stretch transition-transform duration-700 ease-out px-6"
            style={{
              transform: `translate3d(calc(${sliderShift}px + 10vw), 0, 0)`,
            }}
          >
            {tripleCards.map((card, idx) => {
              const isActive = idx === activeCardIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`relative flex-none w-[340px] sm:w-[380px] h-[220px] p-6 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#fdf1e1] text-[#111111] border-[#a38c6d] scale-105 shadow-2xl ring-4 ring-[#a38c6d]/30'
                      : 'bg-white/90 text-[#111111] border-[#e5e0d8] opacity-80 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#a38c6d] block mb-1">
                        {card.kicker}
                      </span>
                      <h3 className="font-serif-luxury text-2xl font-bold text-[#111111] line-clamp-1">
                        {card.title}
                      </h3>
                    </div>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-14 h-14 object-cover rounded-xl border border-[#e5e0d8] shadow-sm shrink-0"
                    />
                  </div>

                  <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mt-2 font-medium">
                    {card.desc}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-[#a38c6d] uppercase tracking-wider">
                    <span>INSPECT CREATION</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
