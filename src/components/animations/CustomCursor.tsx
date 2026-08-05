import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.getAttribute('role') === 'button' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.group'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let animId: number;
    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Gold Cursor Point */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#a38c6d] rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 shadow-md transition-transform duration-75"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />

      {/* Magnetic Trailing Ring with Glow */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a38c6d] transition-all duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-[#a38c6d]/15 border-[#a38c6d] scale-125 shadow-lg shadow-[#a38c6d]/40 animate-pulse'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{ transform: `translate3d(${trail.x}px, ${trail.y}px, 0)` }}
      />
    </>
  );
};
