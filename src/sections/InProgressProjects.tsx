'use client';

import { RefreshCw } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { inProgressProjects } from '@/data/projects';

export default function InProgressProjects() {
  return (
    <section id="in-progress" className="py-16 md:py-24 bg-gradient-to-b from-cream to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="In Progress"
          subtitle="Active development work building toward your next wins"
          icon={RefreshCw}
          iconColor="text-teal-500"
        />

        <div className="grid gap-6 md:gap-8">
          {inProgressProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <span className="text-sm text-charcoal-light">Actively building</span>
          </div>
          <div className="h-4 w-px bg-taupe-200"></div>
          <span className="text-sm text-charcoal-light">
            {inProgressProjects.length} projects in development
          </span>
        </div>
      </div>
    </section>
  );
}
