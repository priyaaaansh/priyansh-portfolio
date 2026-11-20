import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import { StatCounter } from './StatCounter';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 md:px-14 lg:px-20 max-w-6xl mx-auto">
      {/* Section Code Moniker */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs md:text-sm font-mono text-neutral-400 tracking-widest">
          ... /About me ...
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
        {/* Left Column: B&W Framed Photo Card (matching Behance screenshot) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative group rounded-3xl overflow-hidden border border-neutral-800 bg-dark-850 p-3 shadow-2xl">
            {/* Visual Photo Container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center">
              {/* Fallback stylized avatar / photo placeholder */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                alt="Priyansh Thapar - Full Stack Developer (TODO: Replace with your photo)"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80" />

              {/* Status Pill Badge inside photo */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-dark-900/90 backdrop-blur-md border border-neutral-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-medium text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Priyansh Thapar
                  </div>
                  <div className="text-[11px] text-neutral-400">Jaipur, Rajasthan, India</div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  CSE &apos;26
                </span>
              </div>
            </div>

            {/* Subtle placeholder indicator */}
            <div className="mt-2 text-center">
              <span className="text-[11px] font-mono text-neutral-500">
                [ TODO: Place your profile picture in public/profile.jpg ]
              </span>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-2xl bg-dark-800/60 border border-neutral-800/80 flex items-center gap-2.5">
              <GraduationCap className="w-4 h-4 text-accent-cyan shrink-0" />
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">Education</div>
                <div className="text-white font-medium text-[11px]">B.Tech CSE, SRMIST</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-dark-800/60 border border-neutral-800/80 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-accent-cyan shrink-0" />
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">Location</div>
                <div className="text-white font-medium text-[11px]">Jaipur, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Copy & Live Stat Counters */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              Hello! I&apos;m Priyansh, a <span className="italic font-medium text-neutral-200">full-stack developer</span> with hands-on enterprise engineering experience.
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed font-light">
              <p>
                Recent <strong className="text-white font-semibold">B.Tech Computer Science graduate</strong> from SRMIST with 6 months of enterprise full-stack internship experience at <strong className="text-white font-semibold">Octal IT Solution</strong>, building robust web applications and multi-tenant admin dashboards with <span className="text-white font-mono text-xs px-2 py-0.5 rounded bg-dark-800 border border-neutral-700">React.js</span>, <span className="text-white font-mono text-xs px-2 py-0.5 rounded bg-dark-800 border border-neutral-700">TypeScript</span>, <span className="text-white font-mono text-xs px-2 py-0.5 rounded bg-dark-800 border border-neutral-700">Node.js</span>, and <span className="text-white font-mono text-xs px-2 py-0.5 rounded bg-dark-800 border border-neutral-700">MongoDB</span>.
              </p>

              <p>
                Beyond full-stack development, I spent <span className="text-white italic">3 years leading operations, crowd management, and CRM ticketing data</span> for <strong className="text-white font-semibold">PRISMA</strong> (SRM&apos;s annual flagship techno-cultural festival), orchestrating next-day footfall forecasting for thousands of attendees.
              </p>

              <p>
                I thrive at the intersection of <span className="text-accent-cyan font-mono text-xs">Type-Safe Frontend Architecture</span>, <span className="text-accent-cyan font-mono text-xs">High-Throughput Async Pipelines</span> (BullMQ, Redis, AWS S3), and <span className="text-accent-cyan font-mono text-xs">Predictive ML Modeling</span> (85.92% accuracy, 94% recall).
              </p>
            </div>
          </div>

          {/* Stat Counters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-10">
            <StatCounter
              value={6}
              suffix=" mo"
              label="Enterprise Exp"
              sublabel="Octal IT Solution"
            />
            <StatCounter
              value={3}
              suffix=" yrs"
              label="Fest Leadership"
              sublabel="PRISMA SRMIST"
            />
            <StatCounter
              value={85.9}
              suffix="%"
              decimals={1}
              label="ML Accuracy"
              sublabel="Risk Model"
            />
            <StatCounter
              value={100}
              suffix="%"
              label="Type Safety"
              sublabel="TypeScript First"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
