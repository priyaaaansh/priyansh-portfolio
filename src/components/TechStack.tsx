import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Marquee } from './Marquee';

export const TechStack: React.FC = () => {
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
          &quot;Some of my favorite technologies, topics, and tools that I build with daily.&quot;
        </div>
      </div>

      {/* Bento Grid layout directly matching reference screenshot 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-14">
        {/* Card 1: INVERTED WHITE CARD (matching the Behance Front-end highlight card) */}
        <div className="md:col-span-7 rounded-3xl bg-white text-dark-900 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
                Core Competency
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-900 text-white font-medium">
                Primary Focus
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-dark-950 mb-4">
              Front-end Architecture
            </h3>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-mono font-medium">
              TypeScript / React.js / Next.js / TanStack Start / TanStack Query / Tailwind CSS / Redux Toolkit / Zustand / HTML5 &amp; CSS3 / Modern Web APIs / JWT / RBAC Client Systems
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono text-neutral-600">
            <span>Enterprise React &amp; SSR Dashboards</span>
            <span className="font-bold text-dark-900 flex items-center gap-1">
              60fps &bull; Zero CLS
            </span>
          </div>
        </div>

        {/* Card 2: Styles & Motion (matching Styles card in screenshot 2) */}
        <div className="md:col-span-5 rounded-3xl bg-dark-850 border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-neutral-700 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Styles &amp; Motion
              </h3>
              <div className="w-10 h-10 rounded-full bg-dark-750 border border-neutral-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark-900 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-mono">
              Tailwind CSS / Framer Motion / GSAP / Lenis Smooth Scroll / Micro-interactions / Figma / Responsive Layouts (360px &rarr; 4K)
            </p>
          </div>
          <div className="mt-8 text-xs font-mono text-neutral-500">
            Fluid ergonomics &amp; award-level motion
          </div>
        </div>

        {/* Card 3: Back-end & Cloud (matching Back-end card in screenshot 2) */}
        <div className="md:col-span-7 rounded-3xl bg-dark-850 border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-neutral-700 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Back-end &amp; Cloud Infrastructure
              </h3>
              <div className="w-10 h-10 rounded-full bg-dark-750 border border-neutral-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark-900 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-mono">
              Node.js / Express.js / REST APIs / MongoDB / MySQL / Redis / BullMQ Task Queues / AWS S3 / CloudFront CDN / ACID Transactions / Optimistic Locking / FFmpeg Transcoding
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-neutral-500">
            <span>Asynchronous streaming &amp; queue automation</span>
            <span className="text-accent-cyan">High Reliability</span>
          </div>
        </div>

        {/* Card 4: DevOps & Data Analytics */}
        <div className="md:col-span-5 rounded-3xl bg-dark-850 border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-neutral-700 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                DevOps &amp; Analytics
              </h3>
              <div className="w-10 h-10 rounded-full bg-dark-750 border border-neutral-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark-900 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-mono">
              Git &amp; GitHub / Linux / Postman / Swagger / Python / Scikit-learn / NumPy / Matplotlib / Tableau / PowerBI / Anomaly Detection
            </p>
          </div>
          <div className="mt-8 text-xs font-mono text-neutral-500">
            Predictive intelligence &amp; developer tooling
          </div>
        </div>
      </div>

      {/* Infinite scrolling ticker */}
      <Marquee items={allSkills} />
    </section>
  );
};

