import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  decimals = 0,
  label,
  sublabel,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1400;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeOutProgress * value;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={elementRef} className="p-5 md:p-6 rounded-3xl bg-dark-800/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
      <div className="text-3xl md:text-5xl font-mono font-bold text-white tracking-tight flex items-baseline">
        <span>{displayValue.toFixed(decimals)}</span>
        <span className="text-accent-cyan ml-0.5">{suffix}</span>
      </div>
      <div className="text-sm font-semibold text-neutral-200 mt-2 font-display">{label}</div>
      {sublabel && <div className="text-xs text-neutral-400 mt-0.5">{sublabel}</div>}
    </div>
  );
};

