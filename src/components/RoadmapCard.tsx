'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ChevronDown, DollarSign, Clock, Zap, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import type { RoadmapProject } from '@/data/projects';

interface RoadmapCardProps {
  project: RoadmapProject;
  index: number;
}

function getIcon(iconName: string) {
  const iconMap: Record<string, Icons.LucideIcon> = {
    Zap: Icons.Zap,
    TrendingUp: Icons.TrendingUp,
    MessageCircle: Icons.MessageCircle,
    RefreshCw: Icons.RefreshCw,
    Users: Icons.Users,
  };
  return iconMap[iconName] || Icons.Circle;
}

function getPriorityStyles(priority: number) {
  switch (priority) {
    case 1:
      return { bg: 'bg-coral-500', text: 'text-coral-500', border: 'border-coral-200', light: 'bg-coral-50' };
    case 2:
      return { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-200', light: 'bg-teal-50' };
    case 3:
      return { bg: 'bg-gold-500', text: 'text-gold-600', border: 'border-gold-200', light: 'bg-gold-50' };
    case 4:
      return { bg: 'bg-sage-500', text: 'text-sage-600', border: 'border-sage-200', light: 'bg-sage-50' };
    case 5:
      return { bg: 'bg-taupe-400', text: 'text-taupe-600', border: 'border-taupe-200', light: 'bg-taupe-50' };
    default:
      return { bg: 'bg-charcoal', text: 'text-charcoal', border: 'border-taupe-200', light: 'bg-taupe-50' };
  }
}

function getStatusBadge(status: 'to-build' | 'ready' | 'in-progress') {
  switch (status) {
    case 'ready':
      return { label: 'Infrastructure Ready', icon: CheckCircle2, color: 'bg-teal-100 text-teal-700' };
    case 'in-progress':
      return { label: 'In Progress', icon: Wrench, color: 'bg-gold-100 text-gold-700' };
    default:
      return { label: 'To Build', icon: AlertCircle, color: 'bg-taupe-100 text-taupe-600' };
  }
}

export default function RoadmapCard({ project, index }: RoadmapCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = getIcon(project.icon);
  const styles = getPriorityStyles(project.priority);
  const statusBadge = getStatusBadge(project.status);
  const StatusIcon = statusBadge.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className={`relative bg-white rounded-2xl shadow-sm border ${styles.border} overflow-hidden transition-all duration-300 hover:shadow-lg`}
        layout
      >
        {/* Priority Badge */}
        <div className={`absolute top-0 left-0 ${styles.bg} text-white px-4 py-1 rounded-br-xl font-bold text-sm`}>
          P{project.priority}
        </div>

        {/* Card Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 pt-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
        >
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${styles.light} ${styles.text} flex items-center justify-center`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${statusBadge.color}`}>
                  <StatusIcon className="w-3 h-3" />
                  {statusBadge.label}
                </span>
                <span className="text-xs text-charcoal-light flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {project.timeline}
                </span>
              </div>
              <h3 className="text-xl font-serif text-charcoal group-hover:text-sage-600 transition-colors mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {/* Impact indicator */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((level) => (
                    <DollarSign
                      key={level}
                      className={`w-4 h-4 ${level <= project.impactLevel ? 'text-sage-500' : 'text-taupe-200'}`}
                    />
                  ))}
                </div>
                <span className={`text-sm font-medium ${styles.text}`}>
                  {project.impactLabel}
                </span>
              </div>
              {project.projectedImpact.revenue && (
                <div className="mt-2 inline-flex items-center gap-1 bg-sage-50 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  {project.projectedImpact.revenue}
                </div>
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
              <div className="px-6 pb-6 pt-2 border-t border-taupe-100 space-y-5">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-semibold text-coral-600 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    The Problem
                  </h4>
                  <p className="text-sm text-charcoal-light">{project.problem}</p>
                </div>

                {/* Opportunity */}
                <div>
                  <h4 className="text-sm font-semibold text-sage-600 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    The Opportunity
                  </h4>
                  <p className="text-sm text-charcoal-light">{project.opportunity}</p>
                </div>

                {/* What We'll Build */}
                <div>
                  <h4 className="text-sm font-semibold text-teal-600 mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    What We&apos;ll Build
                  </h4>
                  <ul className="space-y-2">
                    {project.whatWellBuild.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Details (if present) */}
                {project.additionalDetails && (
                  <div className="bg-taupe-50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-charcoal mb-3">
                      {project.additionalDetails.label}
                    </h4>
                    <div className="space-y-2">
                      {project.additionalDetails.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <span className="font-medium text-charcoal bg-white px-2 py-1 rounded">
                            {item.trigger}
                          </span>
                          <span className="text-taupe-400">→</span>
                          <span className="text-charcoal-light">{item.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projected Impact */}
                <div className="bg-gold-50 rounded-xl p-4 border border-gold-100">
                  <h4 className="text-sm font-semibold text-gold-600 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Projected Impact
                  </h4>
                  <p className="text-sm text-charcoal-light mb-2">{project.projectedImpact.description}</p>
                  {project.projectedImpact.revenue && (
                    <p className="text-lg font-semibold text-sage-600">{project.projectedImpact.revenue}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
