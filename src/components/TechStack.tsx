import React, { useState } from 'react';
import { Marquee } from './Marquee';

interface TechCategory {
  id: string;
  badge: string;
  focusTag: string;
  title: string;
  skills: string;
  footerLeft: string;
  footerRight: string;
}

export const TechStack: React.FC = () => {
  // State for active white card. Changes dynamically when hovering any of the 3 cards
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const categories: TechCategory[] = [
    {
      id: 'frontend',
      badge: 'Core Competency',
      focusTag: 'Primary Focus',
      title: 'Front-end Architecture',
      skills: 'TypeScript / React.js / Next.js / TanStack Start / TanStack Query / Tailwind CSS / Framer Motion / GSAP / Redux Toolkit / Zustand / HTML5 & CSS3 / Modern Web APIs / JWT / RBAC Client Systems',
      footerLeft: 'Enterprise React & SSR Dashboards',
      footerRight: '60fps • Zero CLS',
    },
    {
      id: 'backend',
      badge: 'Systems & Cloud',
      focusTag: 'Microservices',
      title: 'Back-end & Cloud Infrastructure',
      skills: 'Node.js / Express.js / REST APIs / MongoDB / MySQL / Redis / BullMQ Task Queues / AWS S3 / CloudFront CDN / ACID Transactions / Optimistic Locking / FFmpeg Transcoding',
      footerLeft: 'Asynchronous streaming & queue automation',
      footerRight: 'High Reliability',
    },
    {
      id: 'devops',
      badge: 'Data & Tooling',
      focusTag: 'Analytics & CI/CD',
      title: 'DevOps & Data Analytics',
      skills: 'Git & GitHub / Docker / CI/CD Pipelines / Linux / Postman / Swagger & OpenAPI / Python / Scikit-learn / NumPy / Matplotlib / Tableau / PowerBI / Anomaly Detection',
      footerLeft: 'Predictive intelligence & developer tooling',
      footerRight: 'Continuous Integration',
    },
  ];

  const allSkills = [
    'React.js',
    'TypeScript',
    'Next.js',
    'TanStack Query',
    'Node.js',
    'Express.js',
    'Tailwind CSS',
    'Framer Motion',
    'GSAP',
    'Lenis',
    'MongoDB',
    'Redis',
    'BullMQ',
    'AWS S3',
    'CloudFront',
    'Python',
    'Scikit-learn',
    'REST APIs',
    'Docker',
    'Git',
    'Linux',
  ];

  return (
    <section id="stack" className="relative py-20 md:py-32 px-6 md:px-14 lg:px-20 max-w-6xl mx-auto">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs md:text-sm font-mono text-neutral-400 tracking-widest">
          ... /Technologies &amp; Architecture ...
        </span>
      </div>

      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Tech Stack &amp; Skills
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-xl font-light">
            Engineered around performance, scalability, and type safety across every layer of the web stack.
          </p>
        </div>
        <div className="text-xs font-mono text-neutral-400 max-w-xs italic">
          &quot;Hover over any stack to inspect focus areas and engineering depth.&quot;
        </div>
      </div>

      {/* 3-Card Bento Grid: Hovering ANY card dynamically turns it crisp white with dark text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 items-stretch">
        {categories.map((cat, idx) => {
          const isActive = activeCardIndex === idx;

          return (
            <div
              key={cat.id}
              onMouseEnter={() => setActiveCardIndex(idx)}
              className={`rounded-3xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[380px] ${
                isActive
                  ? 'bg-white text-dark-950 shadow-2xl scale-[1.02] border border-white'
                  : 'bg-dark-850 text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest font-semibold transition-colors ${
                      isActive ? 'text-neutral-600' : 'text-neutral-400'
                    }`}
                  >
                    {cat.badge}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-3 py-1 rounded-full font-medium transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white'
                        : 'bg-dark-800 text-neutral-300 border border-neutral-700'
                    }`}
                  >
                    {cat.focusTag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-2xl font-display font-bold mb-4 transition-colors ${
                    isActive ? 'text-dark-950' : 'text-white'
                  }`}
                >
                  {cat.title}
                </h3>

                {/* Skills list */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed font-mono font-normal transition-colors ${
                    isActive ? 'text-neutral-800' : 'text-neutral-400'
                  }`}
                >
                  {cat.skills}
                </p>
              </div>

              {/* Bottom footer status */}
              <div
                className={`mt-8 pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono transition-colors ${
                  isActive
                    ? 'border-neutral-200 text-neutral-700'
                    : 'border-neutral-800 text-neutral-500'
                }`}
              >
                <span>{cat.footerLeft}</span>
                <span
                  className={`font-semibold shrink-0 ${
                    isActive ? 'text-dark-900' : 'text-accent-cyan'
                  }`}
                >
                  {cat.footerRight}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Infinite scrolling ticker */}
      <Marquee items={allSkills} />
    </section>
  );
};
