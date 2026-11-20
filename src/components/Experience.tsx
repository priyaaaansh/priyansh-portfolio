import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'May 2026 – Oct 2026',
      duration: '6 months',
      company: 'Octal IT Solution',
      role: 'Full Stack Developer Intern',
      location: 'Jaipur, India (On-site Internship)',
      type: 'Engineering Internship',
      points: [
        'Architected and built enterprise web apps and admin dashboards using React.js, TypeScript, Node.js, Express.js, and MongoDB.',
        'Engineered ACID transactions and optimistic locking algorithms for concurrent data synchronization without race conditions.',
        'Automated background video upload, transcoding, and streaming pipelines using BullMQ, Redis, AWS S3, and CloudFront.',
        'Implemented multi-tenant RBAC, state approval workflows, transactional audit logs, and FEFO/FIFO inventory tracking.',
      ],
      skills: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'BullMQ', 'Redis', 'AWS S3', 'CloudFront', 'ACID'],
    },
    {
      period: '2023 – 2026',
      duration: '3 years',
      company: 'PRISMA – Annual Techno-Cultural Fest, SRM University',
      role: 'Event Operations & Data Lead',
      location: 'SRM University, Delhi NCR',
      type: 'Campus Leadership',
      points: [
        'Directed end-to-end event operations, crowd management, and stakeholder coordination for SRM University’s flagship annual festival.',
        'Managed attendance, ticketing systems, and centralized CRM data across 3 consecutive years.',
        'Formulated next-day footfall forecasting and emergency resource distribution models for multi-thousand student gatherings.',
      ],
      skills: ['Event Operations', 'Data Analytics', 'Footfall Forecasting', 'Crowd Management', 'Stakeholder Leadership'],
    },
    {
      period: '2022 – 2024',
      duration: '2 years',
      company: 'Fashionova – Fashion Society, SRM University',
      role: 'Operations & Event Coordination',
      location: 'SRM University, Delhi NCR',
      type: 'Society Operations',
      points: [
        'Spearheaded team coordination, runway event logistics, and society operational planning.',
        'Handled crowd control, VIP ticketing hospitality, and day-of-event execution across major inter-college showcases.',
      ],
      skills: ['Team Coordination', 'Stage Operations', 'Logistics', 'Budgeting'],
    },
  ];

  return (
    <section id="experience" className="snap-section relative py-20 md:py-32 px-6 md:px-14 lg:px-20 max-w-6xl mx-auto">
      {/* Section Code Moniker */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs md:text-sm font-mono text-neutral-400 tracking-widest">
          ... /Work Experience &amp; Leadership ...
        </span>
      </div>

      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-xl font-light">
            Hands-on enterprise software engineering combined with 3+ years of large-scale event operations and data stewardship.
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">Total Experience</span>
          <span className="text-xl md:text-2xl font-mono font-bold text-accent-cyan">3+ years combined</span>
        </div>
      </div>

      {/* Minimalist Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-dark-850 border border-neutral-800 p-6 sm:p-8 md:p-10 hover:border-neutral-700 transition-all group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Dates & Timeline info */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-semibold block mb-1">
                    {exp.type}
                  </span>
                  <h4 className="text-lg font-mono font-bold text-white">{exp.period}</h4>
                  <span className="text-xs font-mono text-neutral-400 block mt-1">
                    Duration: {exp.duration}
                  </span>
                </div>

                <div className="mt-4 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Role & Achievement points */}
              <div className="md:col-span-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-medium text-neutral-300 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech / Competency Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-dark-800 text-neutral-300 border border-neutral-700/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
