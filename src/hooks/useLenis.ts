import { useEffect } from 'react';

/**
 * Smooth scrolling initialization
 * Clean, hardware-accelerated scrolling with zero momentum drift.
 */
export function useLenis() {
  useEffect(() => {
    // Native smooth scroll behavior on root
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
}
