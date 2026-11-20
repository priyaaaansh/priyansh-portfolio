import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects } from '../data/projects';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Frontend / Dashboard', 'Full Stack', 'AI / ML'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 md:px-14 lg:px-20 max-w-6xl mx-auto">
      {/* Section Code Moniker */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs md:text-sm font-mono text-neutral-400 tracking-widest">
          ... /Projects ...
        </span>
      </div>

      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-xl font-light">
            Engineered systems focusing on enterprise dashboards, microservices, async queues, and real-time data.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-white text-dark-900 font-semibold shadow-md'
                  : 'bg-dark-800 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

