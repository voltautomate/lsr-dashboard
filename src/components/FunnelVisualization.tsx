'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Wrench, ArrowDown } from 'lucide-react';
import { funnelStages } from '@/data/projects';

function getStatusStyles(status: 'solved' | 'leak' | 'built') {
  switch (status) {
    case 'solved':
      return {
        bg: 'bg-sage-100',
        border: 'border-sage-300',
        text: 'text-sage-700',
        icon: CheckCircle2,
        iconColor: 'text-sage-500',
        label: 'SOLVED',
        labelBg: 'bg-sage-500',
      };
    case 'leak':
      return {
        bg: 'bg-coral-50',
        border: 'border-coral-300',
        text: 'text-coral-700',
        icon: AlertTriangle,
        iconColor: 'text-coral-500',
        label: 'LEAK',
        labelBg: 'bg-coral-500',
      };
    case 'built':
      return {
        bg: 'bg-teal-50',
        border: 'border-teal-300',
        text: 'text-teal-700',
        icon: Wrench,
        iconColor: 'text-teal-500',
        label: 'BUILT',
        labelBg: 'bg-teal-500',
      };
  }
}

export default function FunnelVisualization() {
  return (
    <div className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-xl font-serif text-charcoal mb-2">The Funnel Reality</h3>
        <p className="text-charcoal-light">Where the leaks are — and where we&apos;ll fix them</p>
      </motion.div>

      {/* Funnel Stages */}
      <div className="max-w-2xl mx-auto space-y-3">
        {funnelStages.map((stage, index) => {
          const styles = getStatusStyles(stage.status);
          const Icon = styles.icon;
          const isFirst = index === 0;
          const isLast = index === funnelStages.length - 1;

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Arrow between stages */}
              {index > 0 && (
                <div className="flex justify-center -my-1 relative z-0">
                  <div className="flex flex-col items-center text-taupe-300">
                    <ArrowDown className="w-5 h-5" />
                    {stage.status === 'leak' && (
                      <span className="text-xs text-coral-500 font-medium -mt-1">[THE LEAK]</span>
                    )}
                  </div>
                </div>
              )}

              {/* Stage Card */}
              <div
                className={`relative ${styles.bg} ${styles.border} border-2 rounded-xl p-4 ${
                  isFirst || isLast ? 'py-6' : ''
                }`}
              >
                {/* Status Badge */}
                <div className={`absolute -top-2 -right-2 ${styles.labelBg} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                  {styles.label}
                </div>

                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${styles.iconColor} flex-shrink-0`} />
                  <div className="flex-1">
                    <div className={`font-semibold ${styles.text} ${isFirst || isLast ? 'text-center text-lg' : ''}`}>
                      {stage.label}
                    </div>
                    {stage.sublabel && (
                      <div className={`text-sm ${styles.text} opacity-80 ${isFirst || isLast ? 'text-center' : ''}`}>
                        {stage.sublabel}
                      </div>
                    )}
                    {stage.detail && (
                      <div className={`text-sm mt-1 ${styles.text} opacity-70`}>
                        {stage.detail}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center gap-6 mt-8 text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sage-500" />
          <span className="text-charcoal-light">Solved</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500" />
          <span className="text-charcoal-light">Built (needs activation)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-coral-500" />
          <span className="text-charcoal-light">Leak (to fix in 2026)</span>
        </div>
      </motion.div>
    </div>
  );
}
