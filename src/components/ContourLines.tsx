import React from 'react';

export const ContourLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Topographic flowing lines SVG styled after the reference Behance design */}
      <svg
        className="w-full h-full opacity-35"
        viewBox="0 0 1440 2400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="contourGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="40%" stopColor="#818CF8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="contourGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Ambient sweeping curves mirroring reference screens */}
        <path
          d="M-100 280 C320 180, 580 420, 920 320 C1220 230, 1400 480, 1600 400"
          stroke="url(#contourGrad1)"
          strokeWidth="1.2"
        />
        <path
          d="M-80 340 C340 240, 600 480, 940 380 C1240 290, 1420 540, 1620 460"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
        />
        <path
          d="M-60 400 C360 300, 620 540, 960 440 C1260 350, 1440 600, 1640 520"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="0.8"
        />

        {/* Mid-page wave divider */}
        <path
          d="M-150 1100 C200 950, 650 1250, 1100 1020 C1350 890, 1500 1150, 1680 1080"
          stroke="url(#contourGrad2)"
          strokeWidth="1.4"
        />
        <path
          d="M-120 1160 C230 1010, 680 1310, 1130 1080 C1380 950, 1530 1210, 1710 1140"
          stroke="rgba(56, 189, 248, 0.08)"
          strokeWidth="1"
        />

        {/* Bottom footer wave contour */}
        <path
          d="M-50 1950 C380 1800, 750 2150, 1200 1900 C1400 1790, 1550 2050, 1650 1980"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1.2"
        />
        <path
          d="M-30 2020 C400 1870, 770 2220, 1220 1970 C1420 1860, 1570 2120, 1670 2050"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
};

