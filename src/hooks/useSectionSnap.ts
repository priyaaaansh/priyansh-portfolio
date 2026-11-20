import { useEffect, useRef } from 'react';

export const SECTION_IDS = [
  'hero',
  'about',
  'stack',
  'projects',
  'experience',
  'certifications',
  'contact',
];

/**
 * Section Snapping Hook
 * Ensures that a single scroll gesture or wheel tick cleanly transitions
 * to the exact next/previous section without overshooting or moving extra up/down.
 */
export function useSectionSnap() {
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only apply controlled wheel-snap on fine pointer/desktop devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const getSections = () => {
      return SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    };

    const handleWheel = (e: WheelEvent) => {
      // Do not snap if project modal is open
      if (document.body.style.overflow === 'hidden') return;

      const delta = e.deltaY;
      // Filter out micro trackpad vibrations
      if (Math.abs(delta) < 18) return;

      // Prevent native continuous momentum drift that causes overshooting
      e.preventDefault();

      if (isAnimatingRef.current) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Identify active section
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop;
        const bottom = top + sections[i].offsetHeight;
        if (currentScroll >= top - 140 && currentScroll < bottom - 140) {
          currentIndex = i;
          break;
        }
      }

      const currentSec = sections[currentIndex];
      const secTop = currentSec.offsetTop;
      const secBottom = secTop + currentSec.offsetHeight;
      const scrollBottom = currentScroll + viewportHeight;

      let targetScrollY = currentScroll;

      if (delta > 0) {
        // Scrolling DOWN
        // If current section is taller than viewport and bottom is not visible yet
        if (secBottom - scrollBottom > 160) {
          targetScrollY = Math.min(secBottom - viewportHeight, currentScroll + viewportHeight * 0.85);
        } else if (currentIndex < sections.length - 1) {
          // Advance to top of next section
          targetScrollY = sections[currentIndex + 1].offsetTop;
        }
      } else {
        // Scrolling UP
        // If we are scrolled down inside a tall section
        if (currentScroll - secTop > 160) {
          targetScrollY = Math.max(secTop, currentScroll - viewportHeight * 0.85);
        } else if (currentIndex > 0) {
          // Go to previous section
          const prevSec = sections[currentIndex - 1];
          if (prevSec.offsetHeight > viewportHeight + 100) {
            targetScrollY = prevSec.offsetTop + prevSec.offsetHeight - viewportHeight;
          } else {
            targetScrollY = prevSec.offsetTop;
          }
        }
      }

      if (Math.abs(targetScrollY - currentScroll) > 8) {
        isAnimatingRef.current = true;

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth',
        });

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing inside form inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (['ArrowDown', 'PageDown'].includes(e.code) || (e.code === 'Space' && !e.shiftKey)) {
        e.preventDefault();
        handleWheel({ deltaY: 100, preventDefault: () => {} } as WheelEvent);
      } else if (['ArrowUp', 'PageUp'].includes(e.code) || (e.code === 'Space' && e.shiftKey)) {
        e.preventDefault();
        handleWheel({ deltaY: -100, preventDefault: () => {} } as WheelEvent);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
}
