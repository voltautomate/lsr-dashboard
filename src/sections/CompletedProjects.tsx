'use client';

import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { completedProjects } from '@/data/projects';

export default function CompletedProjects() {
  return (
    <section id="completed" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Completed Projects"
          subtitle="Automation and infrastructure wins that are delivering value today"
          icon={CheckCircle2}
          iconColor="text-sage-500"
        />

        <div className="grid gap-6 md:gap-8">
          {completedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Value Summary */}
        <div className="mt-12 bg-gradient-to-r from-sage-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-sage-100">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-serif text-charcoal mb-3">
              The Transformation
            </h3>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              From zero visibility and manual processes to{' '}
              <span className="text-sage-600 font-medium">full funnel tracking</span>,{' '}
              <span className="text-teal-600 font-medium">automated posting</span>, and{' '}
              <span className="text-gold-500 font-medium">prioritized lead lists</span>.
            </p>
            <p className="mt-4 text-lg font-medium text-sage-600">
              &ldquo;You can&apos;t optimize what you can&apos;t see.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
