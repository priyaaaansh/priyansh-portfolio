import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply 3D tilt on devices that support fine hover
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -4;
    const rY = ((x - centerX) / centerX) * 4;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleCardClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="relative rounded-3xl bg-dark-850 border border-neutral-800 p-6 md:p-8 flex flex-col justify-between group hover:border-neutral-700 hover:shadow-2xl transition-all cursor-pointer"
      title={`Click to open GitHub repository for ${project.title}`}
    >
      <div>
        {/* Top Media / Mockup Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-dark-900 border border-neutral-800/80 group-hover:border-neutral-700 transition-colors">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-50" />

          {/* Category Badge & Featured Tag */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-dark-900/90 backdrop-blur-md text-white border border-neutral-700/80">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Featured
              </span>
            )}
          </div>

          {/* Quick Action Floating Round Buttons */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-dark-900/90 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-dark-900 hover:scale-110 transition-all shadow-lg"
              title="View Source on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-full bg-dark-900/90 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-dark-900 hover:scale-110 transition-all shadow-lg"
                title="Open Live Preview"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Header */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>

        {/* Tech Pills Matrix */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-dark-800 text-neutral-300 border border-neutral-700/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Editorial Description with italics matching reference */}
        <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-4">
          <span className="italic text-neutral-100 font-medium">{project.tagline}</span> &mdash;{' '}
          {project.shortDescription}
        </p>

        {/* Key highlights bullet points */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-neutral-400 font-mono">
            {project.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-cyan mt-0.5">&bull;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white group-hover:text-accent-cyan transition-colors"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Architecture &amp; Details</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
          <Github className="w-3 h-3" />
          <span>Open Repo &rarr;</span>
        </span>
      </div>
    </motion.div>
  );
};
