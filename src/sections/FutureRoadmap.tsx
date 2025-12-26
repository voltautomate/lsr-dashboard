'use client';

import { motion } from 'framer-motion';
import { Rocket, Quote, ArrowRight } from 'lucide-react';
import FunnelVisualization from '@/components/FunnelVisualization';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import RoadmapCard from '@/components/RoadmapCard';
import { roadmapProjects, roadmapSummary } from '@/data/projects';

export default function FutureRoadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-gradient-to-b from-teal-50/30 via-cream to-gold-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Year of Systems Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Strategic Roadmap</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            2026: The Year of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-500 to-teal-500">
              Systems
            </span>
          </h2>

          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Growth got you here. Systems will get you there.
          </p>
        </motion.div>

        {/* Opening Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-r from-sage-50 via-white to-teal-50 rounded-2xl p-8 md:p-10 border border-sage-100">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-sage-200" />
            <div className="relative max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4">
                In 2025, we built the engine that generated{' '}
                <span className="font-semibold text-teal-600">6.76 million views</span> and nearly{' '}
                <span className="font-semibold text-teal-600">11,000 new followers</span>.
                The top of funnel is working.
              </p>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4">
                But views don&apos;t pay the bills — <span className="font-semibold">customers do</span>.
              </p>
              <p className="text-xl md:text-2xl font-serif text-sage-600">
                2026 is the year we turn attention into revenue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Funnel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-taupe-100"
        >
          <FunnelVisualization />
        </motion.div>

        {/* Priority Roadmap Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
            Priority Roadmap
          </h3>
          <p className="text-charcoal-light">
            Ranked by impact potential and implementation readiness
          </p>
        </motion.div>

        {/* Roadmap Cards */}
        <div className="space-y-6 mb-12">
          {roadmapProjects.map((project, index) => (
            <RoadmapCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mb-16">
          <RoadmapTimeline />
        </div>

        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 overflow-x-auto"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden min-w-[600px]">
            <table className="w-full">
              <thead className="bg-taupe-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Priority</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">System</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Timeline</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Effort</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Revenue Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe-100">
                {roadmapProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-taupe-50/50">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm ${
                        project.priority === 1 ? 'bg-coral-500' :
                        project.priority === 2 ? 'bg-teal-500' :
                        project.priority === 3 ? 'bg-gold-500' :
                        project.priority === 4 ? 'bg-sage-500' : 'bg-taupe-400'
                      }`}>
                        {project.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-charcoal">{project.title}</td>
                    <td className="px-6 py-4 text-charcoal-light">{project.timeline}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        project.effort === 'Low' ? 'bg-sage-100 text-sage-700' :
                        project.effort === 'Medium' ? 'bg-gold-100 text-gold-700' :
                        'bg-coral-100 text-coral-700'
                      }`}>
                        {project.effort}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-sage-600">
                      {project.projectedImpact.revenue || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-sage-50">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-sm font-medium text-charcoal">
                    Total Q1-Q2 2026 Timeline: {roadmapSummary.totalTimeline}
                  </td>
                  <td colSpan={2} className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-2 bg-sage-500 text-white px-4 py-2 rounded-full font-semibold">
                      Total Impact: {roadmapSummary.totalRevenueImpact}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-charcoal via-charcoal to-charcoal rounded-2xl p-8 md:p-12 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,white_0%,transparent_40%)]" />
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,white_0%,transparent_40%)]" />
            </div>

            <div className="relative max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
                The top of funnel is solved.{' '}
                <span className="font-semibold">2026 is about converting attention into revenue.</span>
              </p>
              <p className="text-lg text-white/80 mb-6">
                Every system we build closes a gap. Every workflow we automate means no opportunity falls through the cracks.
                Every week we execute brings LSR closer to a business that{' '}
                <span className="text-sage-300 font-medium">scales</span> — not just grows.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-serif text-lg">The foundation is set. Now we build.</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
