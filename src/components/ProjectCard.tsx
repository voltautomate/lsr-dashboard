'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ChevronDown, CheckCircle2, RefreshCw, Lightbulb } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import ProgressBar from './ProgressBar';
import SocialMediaGrowth from './SocialMediaGrowth';
import type { CompletedProject, InProgressProject, FutureProject, Metric } from '@/data/projects';

type ProjectStatus = 'completed' | 'in-progress' | 'planned';

interface ProjectCardProps {
  project: CompletedProject | InProgressProject | FutureProject;
  index?: number;
}

function getIcon(iconName: string) {
  const iconMap: Record<string, Icons.LucideIcon> = {
    Video: Icons.Video,
    BarChart3: Icons.BarChart3,
    Settings: Icons.Settings,
    Layers: Icons.Layers,
    PlayCircle: Icons.PlayCircle,
    FileText: Icons.FileText,
    TrendingUp: Icons.TrendingUp,
    Zap: Icons.Zap,
    RefreshCw: Icons.RefreshCw,
    UserPlus: Icons.UserPlus,
    Target: Icons.Target,
    PenTool: Icons.PenTool,
    MessageCircle: Icons.MessageCircle,
    Bot: Icons.Bot,
    Circle: Icons.Circle,
  };
  return iconMap[iconName] || Icons.Circle;
}

function getStatusIcon(status: ProjectStatus) {
  switch (status) {
    case 'completed':
      return CheckCircle2;
    case 'in-progress':
      return RefreshCw;
    case 'planned':
      return Lightbulb;
  }
}

function getStatusColor(status: ProjectStatus) {
  switch (status) {
    case 'completed':
      return 'bg-sage-100 text-sage-600 border-sage-200';
    case 'in-progress':
      return 'bg-teal-50 text-teal-600 border-teal-200';
    case 'planned':
      return 'bg-gold-100 text-gold-500 border-gold-200';
  }
}

function getCardGradient(status: ProjectStatus) {
  switch (status) {
    case 'completed':
      return 'from-sage-50 to-white';
    case 'in-progress':
      return 'from-teal-50 to-white';
    case 'planned':
      return 'from-gold-50 to-white';
  }
}

function MetricDisplay({ metric }: { metric: Metric }) {
  const isNumeric = typeof metric.value === 'number';

  return (
    <div className="bg-white/60 rounded-lg p-3 text-center">
      <div className="text-xl md:text-2xl font-semibold text-charcoal">
        {isNumeric ? (
          <AnimatedCounter
            value={metric.value as number}
            prefix={metric.prefix || ''}
            suffix={metric.suffix || ''}
          />
        ) : (
          <span>{metric.prefix || ''}{metric.value}{metric.suffix || ''}</span>
        )}
      </div>
      <div className="text-xs text-charcoal-light mt-1">{metric.label}</div>
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = getIcon(project.icon);
  const StatusIcon = getStatusIcon(project.status);
  const statusColor = getStatusColor(project.status);
  const cardGradient = getCardGradient(project.status);

  const isCompleted = project.status === 'completed';
  const isInProgress = project.status === 'in-progress';
  const isPlanned = project.status === 'planned';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className={`relative bg-gradient-to-br ${cardGradient} rounded-2xl shadow-sm border border-taupe-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
        layout
      >
        {/* Pulse indicator for in-progress */}
        {isInProgress && (
          <div className="absolute top-4 right-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
          </div>
        )}

        {/* Card Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 rounded-t-2xl"
        >
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${statusColor} border flex items-center justify-center`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <StatusIcon className={`w-4 h-4 ${
                  isCompleted ? 'text-sage-500' :
                  isInProgress ? 'text-teal-500' :
                  'text-gold-500'
                }`} />
                <span className={`text-xs font-medium uppercase tracking-wide ${
                  isCompleted ? 'text-sage-600' :
                  isInProgress ? 'text-teal-600' :
                  'text-gold-600'
                }`}>
                  {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Planned'}
                </span>
              </div>
              <h3 className="text-xl font-serif text-charcoal group-hover:text-sage-600 transition-colors">
                {project.title}
              </h3>

              {/* Quick preview for in-progress */}
              {isInProgress && 'progress' in project && (
                <div className="mt-3">
                  <ProgressBar progress={project.progress} />
                </div>
              )}

              {/* Quick preview for planned */}
              {isPlanned && 'potentialImpact' in project && project.potentialImpact && (
                <p className="mt-2 text-sm text-coral-500 font-medium">
                  {project.potentialImpact}
                </p>
              )}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-taupe-400" />
            </motion.div>
          </div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 border-t border-taupe-100">
                {/* Completed Project Details */}
                {isCompleted && 'before' in project && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-coral-50 rounded-xl p-4 border border-coral-100">
                        <h4 className="text-sm font-semibold text-coral-600 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-coral-400"></span>
                          Before
                        </h4>
                        <p className="text-sm text-charcoal-light">{project.before}</p>
                      </div>
                      <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
                        <h4 className="text-sm font-semibold text-sage-600 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sage-400"></span>
                          After
                        </h4>
                        <p className="text-sm text-charcoal-light">{project.after}</p>
                      </div>
                    </div>

                    {'metrics' in project && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {project.metrics.map((metric, i) => (
                          <MetricDisplay key={i} metric={metric} />
                        ))}
                      </div>
                    )}

                    {'valueProposition' in project && project.valueProposition && (
                      <div className="bg-gold-50 rounded-xl p-4 border border-gold-100">
                        <h4 className="text-sm font-semibold text-gold-600 mb-3">Key Value</h4>
                        <ul className="space-y-2">
                          {project.valueProposition.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                              <CheckCircle2 className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {'hasSocialMediaData' in project && project.hasSocialMediaData && (
                      <SocialMediaGrowth />
                    )}
                  </>
                )}

                {/* In Progress Project Details */}
                {isInProgress && 'description' in project && (
                  <>
                    <p className="text-charcoal-light mb-4">{project.description}</p>

                    {'components' in project && project.components && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-charcoal mb-2">Components</h4>
                        <ul className="space-y-2">
                          {project.components.map((component, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-charcoal-light">
                              <RefreshCw className="w-4 h-4 text-teal-500" />
                              {component}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {'currentStats' in project && project.currentStats && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.currentStats.map((stat, i) => (
                          <MetricDisplay key={i} metric={stat} />
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Planned Project Details */}
                {isPlanned && 'description' in project && (
                  <>
                    <p className="text-charcoal-light mb-4">{project.description}</p>

                    {'currentState' in project && project.currentState && (
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-taupe-50 rounded-xl p-4 border border-taupe-100">
                          <h4 className="text-sm font-semibold text-taupe-500 mb-2">Current State</h4>
                          <p className="text-sm text-charcoal-light">{project.currentState}</p>
                        </div>
                        {'targetState' in project && project.targetState && (
                          <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
                            <h4 className="text-sm font-semibold text-sage-600 mb-2">Target State</h4>
                            <p className="text-sm text-charcoal-light">{project.targetState}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {'opportunity' in project && (
                      <div className="bg-gold-50 rounded-xl p-4 border border-gold-100">
                        <h4 className="text-sm font-semibold text-gold-600 mb-3">Opportunity</h4>
                        <ul className="space-y-2">
                          {project.opportunity.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                              <Lightbulb className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
