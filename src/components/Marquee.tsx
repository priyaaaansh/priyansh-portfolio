import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden py-4 select-none border-y border-neutral-800/80 bg-dark-950/60 backdrop-blur-sm">
      {/* Gradient masks for edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {/* Double items for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800 bg-dark-800/60 text-xs md:text-sm font-mono text-neutral-300 hover:text-white hover:border-accent-cyan/50 hover:bg-dark-800 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

