import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize2 } from 'lucide-react';

export const VideoScrollShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollScale, setScrollScale] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll ratio when element enters viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Subtle luxurious scale effect from 0.96 to 1.04 as user scrolls
        const scale = 0.96 + Math.min(Math.max(progress * 0.12, 0), 0.08);
        setScrollScale(scale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div ref={containerRef} className="w-full py-6 flex flex-col items-center">
      <div
        className="relative w-full h-[500px] md:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-[#e5e0d8] group bg-[#0a1f18] transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scrollScale})` }}
      >
        {/* Cinematic High Jewellery Advertisement Video Loop */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1800&q=80"
          className="w-full h-full object-cover opacity-90 scale-105 group-hover:scale-100 transition-transform duration-1000"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-diamond-ring-close-up-5462/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video playback.
        </video>

        {/* Cinematic Subtle Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-[#a38c6d]/40 shadow-md">
            <Sparkles className="w-4 h-4 text-[#a38c6d] animate-spin" />
            <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
              Graff High Jewellery Film 2026
            </span>
          </div>
        </div>

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 space-y-4 pointer-events-none">
          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold drop-shadow-md">
            LONDON ATELIER CAMPAIGN
          </span>
          <h3 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight drop-shadow-lg max-w-2xl">
            The Fire of Rare Gems
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 tracking-widest uppercase max-w-md drop-shadow">
            Experience D-Flawless brilliance captured in 4K resolution.
          </p>
        </div>

        {/* Bottom Playback Control Bar */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between glass-panel p-4 rounded-xl border border-white/20 bg-white/90 backdrop-blur-md text-[#111111]">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-[#a38c6d] text-white hover:bg-[#8c7558] transition-all shadow-md"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
              {isPlaying ? 'Playing High Jewellery Film' : 'Paused'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-white border border-[#e5e0d8] text-[#111111] hover:text-[#a38c6d] transition-all"
              aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#a38c6d]" />}
            </button>

            <button
              onClick={() => {
                if (videoRef.current) {
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    videoRef.current.requestFullscreen();
                  }
                }
              }}
              className="p-2.5 rounded-full bg-white border border-[#e5e0d8] text-[#111111] hover:text-[#a38c6d] transition-all"
              aria-label="Full Screen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
