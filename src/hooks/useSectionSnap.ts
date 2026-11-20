import { useEffect } from 'react';

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
 * Natural Section Navigation Hook
 * Works in tandem with CSS scroll-snap-type: y mandatory and scroll-snap-stop: always
 * for seamless section-by-section transitions with a completely hidden scrollbar.
 */
export function useSectionSnap() {
  useEffect(() => {
    const navOffset = 65;

    const getSections = () =>
      SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing inside form inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      let currentIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop - navOffset - 25;
        const bottom = top + sections[i].offsetHeight;
        if (currentScroll >= top && currentScroll < bottom) {
          currentIndex = i;
          break;
        }
      }

      if (['ArrowDown', 'PageDown'].includes(e.code) || (e.code === 'Space' && !e.shiftKey)) {
        if (currentIndex < sections.length - 1) {
          e.preventDefault();
          const targetY = Math.max(0, sections[currentIndex + 1].offsetTop - navOffset);
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.code) || (e.code === 'Space' && e.shiftKey)) {
        if (currentIndex > 0) {
          e.preventDefault();
          const targetY = Math.max(0, sections[currentIndex - 1].offsetTop - navOffset);
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
