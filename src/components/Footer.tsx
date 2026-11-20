import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [jaipurTime, setJaipurTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setJaipurTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-800/80 bg-dark-950 py-12 px-6 md:px-14 lg:px-20 text-xs font-mono text-neutral-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Jaipur, IN &bull; {jaipurTime} IST
          </span>
          <span>&copy; {new Date().getFullYear()} Priyansh Thapar. All rights reserved.</span>
        </div>

        {/* Center Tech Note */}
        <div className="hidden lg:block text-neutral-600">
          Crafted with React, TypeScript, GSAP &amp; Lenis
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-700 bg-dark-850 text-neutral-400 hover:text-white transition-all group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

