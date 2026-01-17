'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Lightbulb } from 'lucide-react';
import { priorityLevels } from '@/data/sales';

function getPriorityStyles(color: string) {
  const map: Record<string, any> = {
    coral: {
      bg: 'bg-coral-500',
      light: 'bg-coral-50',
      border: 'border-coral-200',
      text: 'text-coral-700',
      gradient: 'from-coral-500 to-coral-600'
    },
    teal: {
      bg: 'bg-teal-500',
      light: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-700',
      gradient: 'from-teal-500 to-teal-600'
    },
    gold: {
      bg: 'bg-gold-500',
      light: 'bg-gold-50',
      border: 'border-gold-200',
      text: 'text-gold-700',
      gradient: 'from-gold-500 to-gold-600'
    },
    sage: {
      bg: 'bg-sage-500',
      light: 'bg-sage-50',
      border: 'border-sage-200',
      text: 'text-sage-700',
      gradient: 'from-sage-500 to-sage-600'
    }
  };
  return map[color] || map.sage;
}

export default function PriorityScoring() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
          Priority Scoring System
        </h3>
        <p className="text-charcoal-light">
          Not all leads are equal - respond accordingly
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {priorityLevels.map((priority, index) => {
          const styles = getPriorityStyles(priority.color);
          const isExpanded = expandedRow === priority.level;

          return (
            <motion.div
              key={priority.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-white rounded-2xl shadow-sm border-2 ${styles.border} overflow-hidden hover:shadow-md transition-all`}>
                {/* Header Row */}
                <button
                  onClick={() => setExpandedRow(isExpanded ? null : priority.level)}
                  className="w-full p-6 text-left hover:bg-taupe-50/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Priority Badge */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${styles.gradient} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
                      {priority.level}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-serif text-charcoal mb-1">
                        {priority.label}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm text-charcoal-light">
                          Response Time:
                        </span>
                        <span className={`font-semibold ${styles.text} text-sm`}>
                          {priority.responseTime}
                        </span>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-taupe-400" />
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
                        {/* Criteria */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sage-600" />
                            Criteria:
                          </h5>
                          <ul className="space-y-2 pl-1">
                            {priority.criteria.map((criterion, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                                <span className={`w-1.5 h-1.5 rounded-full ${styles.bg} flex-shrink-0 mt-1.5`}></span>
                                {criterion}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Example Scenarios */}
                        <div className={`${styles.light} rounded-xl p-4 border ${styles.border}`}>
                          <h5 className={`text-sm font-semibold ${styles.text} mb-3 flex items-center gap-2`}>
                            <Lightbulb className="w-4 h-4" />
                            Example Scenarios:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {priority.exampleScenarios.map((scenario, i) => (
                              <span
                                key={i}
                                className="bg-white px-3 py-1.5 rounded-full text-xs text-charcoal-light font-medium border border-taupe-200"
                              >
                                {scenario}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-charcoal-light max-w-3xl mx-auto">
          Click any priority level to expand and view detailed criteria and example scenarios.
          The scoring system automatically routes leads to ensure high-value prospects receive immediate attention.
        </p>
      </motion.div>
    </motion.div>
  );
}
