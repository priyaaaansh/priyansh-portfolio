import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { getAssetUrl } from '../utils/assets';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll on open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-850 border border-neutral-700/80 shadow-2xl p-6 sm:p-10 z-10 text-neutral-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-dark-750 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-dark-700 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-dark-800 text-neutral-300 border border-neutral-700">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Flagship Project
              </span>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-accent-cyan font-mono text-sm mb-6">{project.tagline}</p>

          {/* Media preview */}
          {project.image && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-neutral-800">
              <img
                src={getAssetUrl(project.image || '')}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Deep Description */}
          <div className="space-y-4 mb-8">
            <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
              Overview &amp; Architecture
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              {project.longerDescription}
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="mb-8">
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Key Deliverables &amp; Performance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-dark-800/80 border border-neutral-800 flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-neutral-300">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-dark-800 text-neutral-200 border border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-dark-900 text-xs font-mono font-semibold hover:bg-neutral-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 bg-dark-800 text-xs font-mono text-white hover:border-neutral-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-accent-cyan" />
                <span>Live Interactive Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

