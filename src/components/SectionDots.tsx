import React from 'react';

interface SectionDotsProps {
  activeSection: string;
}

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const SectionDots: React.FC<SectionDotsProps> = ({ activeSection }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3.5 p-2 rounded-full bg-dark-900/60 backdrop-blur-md border border-white/5"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${sec.label}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-7 px-2.5 py-1 rounded-md bg-dark-800 text-[11px] font-mono text-neutral-300 border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
              {sec.label}
            </span>

            {/* Indicator Dot */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-accent-cyan shadow-glow-sm'
                  : 'w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-300'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

