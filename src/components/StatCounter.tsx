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
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-4 sm:p-5 rounded-3xl bg-dark-800/90 border border-neutral-800 hover:border-neutral-700 transition-colors min-w-0 overflow-hidden flex flex-col justify-between"
    >
      <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-mono font-bold text-white tracking-tight flex items-baseline flex-nowrap overflow-hidden">
        <span className="tabular-nums truncate">{displayValue.toFixed(decimals)}</span>
        <span className="text-accent-cyan ml-0.5 shrink-0">{suffix}</span>
      </div>
      <div className="mt-2.5">
        <div className="text-xs sm:text-sm font-semibold text-neutral-200 font-display truncate">
          {label}
        </div>
        {sublabel && (
          <div className="text-[11px] text-neutral-400 mt-0.5 truncate">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
};
