import { useRef, useState, useEffect, MouseEvent } from 'react';

/**
 * Hook to apply subtle magnetic physics to buttons or circular nodes
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable magnetic effect on touch screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return { ref, position, handleMouseMove, handleMouseLeave };
}

