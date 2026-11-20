import React from 'react';
import { Trophy } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Forage',
      date: 'October 2026',
      badge: 'Job Simulation',
      skills: ['Data Analysis', 'Forensic Technology', 'Data Visualization', 'Hypothesis Testing'],
      description: 'Completed practical simulation involving client transaction forensic analysis, anomaly detection, and interactive visual reporting for leadership.',
    },
    {
      title: 'Datacom Software Development Job Simulation',
      issuer: 'Forage',
      date: 'October 2026',
      badge: 'Job Simulation',
      skills: ['Software Review', 'Root-Cause Analysis', 'Bug Fixing', 'Security Analysis'],
      description: 'Simulated enterprise software development lifecycle, diagnosing edge cases, performing code reviews, and resolving production defects.',
    },
    {
      title: '1st Place – SRM BUILDS 2.0 Hackathon',
      issuer: 'SRMIST',
      date: 'Hackathon Award',
      badge: 'UI/UX Track Winner',
      skills: ['Rapid Prototyping', 'Product Thinking', 'UI/UX Ergonomics', 'Full Stack Execution'],
      description: 'Won 1st place in the UI/UX Track for engineering an accessible, high-performance web solution under 36-hour sprint conditions.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-14 lg:px-20 max-w-6xl mx-auto">
      {/* Section Code Moniker */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs md:text-sm font-mono text-neutral-400 tracking-widest">
          ... /Certifications &amp; Accolades ...
        </span>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Certifications &amp; Hackathons
        </h2>
        <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-xl font-light">
          Industry simulations and competitive hackathon achievements validating software engineering and data analytics rigor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-dark-850 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 hover:shadow-xl transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-dark-800 text-accent-cyan border border-accent-cyan/20">
                  {item.badge}
                </span>
                <Trophy className="w-4 h-4 text-accent-amber opacity-75 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-neutral-400 mb-4">
                {item.issuer} &bull; {item.date}
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-dark-800 text-neutral-300 border border-neutral-700/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
