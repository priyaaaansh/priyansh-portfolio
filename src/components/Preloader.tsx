import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1600; // 1.6s
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Eased progress calculation
      const currentVal = Math.floor(progress * 100);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 650);
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-dark-950 flex flex-col justify-between p-8 md:p-14 select-none"
        >
          {/* Top moniker */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              priyansh.dev
            </span>
            <span>Jaipur, India [IST]</span>
          </div>

          {/* Central Reveal */}
          <div className="flex flex-col items-start max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs md:text-sm font-mono text-accent-cyan tracking-wider mb-3"
            >
              ... /PORTFOLIO 2026 ...
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tight text-white mb-2">
              Priyansh Thapar
            </h1>
            <p className="text-base md:text-xl text-neutral-400 font-light">
              Full Stack Web Developer &amp; Data Analyst
            </p>
          </div>

          {/* Bottom Counter & Status */}
          <div className="flex items-end justify-between border-t border-neutral-800/80 pt-6">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Initializing Engine &amp; Visuals
            </div>
            <div className="text-5xl md:text-8xl font-mono font-bold text-white tracking-tighter">
              {count.toString().padStart(2, '0')}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

