'use client';

import { motion } from 'framer-motion';
import { roadmapProjects, roadmapSummary } from '@/data/projects';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];

const projectColors = [
  'from-coral-400 to-coral-500',
  'from-teal-400 to-teal-500',
  'from-gold-400 to-gold-500',
  'from-sage-400 to-sage-500',
  'from-taupe-400 to-taupe-500',
];

export default function RoadmapTimeline() {
  // Calculate positions based on timeline
  const getTimelinePosition = (priority: number, weeks: number) => {
    // Stagger start positions
    const startWeek = (priority - 1) * 3;
    const startPercent = (startWeek / 26) * 100;
    const widthPercent = (weeks / 26) * 100;
    return { left: `${startPercent}%`, width: `${Math.min(widthPercent, 100 - startPercent)}%` };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-taupe-100"
    >
      <h4 className="text-lg font-serif text-charcoal mb-6">Q1-Q2 2026 Timeline</h4>

      {/* Month headers */}
      <div className="flex border-b border-taupe-200 pb-2 mb-4">
        {months.map((month) => (
          <div key={month} className="flex-1 text-center text-sm font-medium text-charcoal-light">
            {month}
          </div>
        ))}
      </div>

      {/* Timeline bars */}
      <div className="space-y-3">
        {roadmapProjects.map((project, index) => {
          const position = getTimelinePosition(project.priority, project.timelineWeeks);

          return (
            <div key={project.id} className="relative h-8">
              {/* Background track */}
              <div className="absolute inset-0 bg-taupe-50 rounded-lg" />

              {/* Progress bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: position.width }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ left: position.left }}
                className={`absolute top-0 bottom-0 bg-gradient-to-r ${projectColors[index]} rounded-lg flex items-center px-3`}
              >
                <span className="text-white text-xs font-medium truncate">
                  {project.title}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-taupe-100 flex flex-wrap justify-between items-center gap-4 text-sm">
        <div>
          <span className="text-charcoal-light">Total Timeline: </span>
          <span className="font-medium text-charcoal">{roadmapSummary.totalTimeline}</span>
        </div>
        <div className="bg-sage-50 text-sage-700 px-3 py-1 rounded-full font-medium">
          Revenue Impact: {roadmapSummary.totalRevenueImpact}
        </div>
      </div>
    </motion.div>
  );
}
