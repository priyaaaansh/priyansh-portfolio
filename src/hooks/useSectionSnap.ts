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
 * Precision One-Scroll Section Snapping Hook
 * Ensures a single scroll gesture or wheel tick cleanly transitions to the exact
 * next or previous section, aligned perfectly below the navbar with zero data cropping.
 */
export function useSectionSnap() {
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only apply controlled wheel-snap on fine pointer / desktop devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const navOffset = 65;

    const getSections = () => {
      return SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    };

    const handleWheel = (e: WheelEvent) => {
      // Do not snap if project modal is open
      if (document.body.style.overflow === 'hidden') return;

      const delta = e.deltaY;
      // Filter out micro trackpad vibrations
      if (Math.abs(delta) < 18) return;

      // Prevent continuous momentum drift
      e.preventDefault();

      if (isAnimatingRef.current) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Identify active section
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop - navOffset - 25;
        const bottom = top + sections[i].offsetHeight;
        if (currentScroll >= top && currentScroll < bottom) {
          currentIndex = i;
          break;
        }
      }

      const currentSec = sections[currentIndex];
      const secTop = Math.max(0, currentSec.offsetTop - navOffset);
      const secBottom = currentSec.offsetTop + currentSec.offsetHeight;
      const scrollBottom = currentScroll + viewportHeight;

      let targetScrollY = currentScroll;

      if (delta > 0) {
        // Scrolling DOWN
        // If current section is taller than viewport and bottom is not visible yet
        if (secBottom - scrollBottom > 120) {
          targetScrollY = Math.min(secBottom - viewportHeight + 20, currentScroll + viewportHeight * 0.85);
        } else if (currentIndex < sections.length - 1) {
          // Advance cleanly to top of next section with navbar offset
          targetScrollY = Math.max(0, sections[currentIndex + 1].offsetTop - navOffset);
        }
      } else {
        // Scrolling UP
        // If we are scrolled down inside a tall section
        if (currentScroll - secTop > 120) {
          targetScrollY = Math.max(secTop, currentScroll - viewportHeight * 0.85);
        } else if (currentIndex > 0) {
          // Go to top of previous section with navbar offset
          targetScrollY = Math.max(0, sections[currentIndex - 1].offsetTop - navOffset);
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
      // Don't intercept when typing in form inputs
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
