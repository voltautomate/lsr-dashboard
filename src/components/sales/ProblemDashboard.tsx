'use client';

import { motion } from 'framer-motion';
import { problemCards } from '@/data/sales';
import * as Icons from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const iconMap: Record<string, Icons.LucideIcon> = {
  PhoneOff: Icons.PhoneOff,
  XCircle: Icons.XCircle,
  AlertTriangle: Icons.AlertTriangle,
  Clock: Icons.Clock
};

export default function ProblemDashboard() {
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
          The Problem Dashboard
        </h3>
        <p className="text-charcoal-light">
          Real numbers from LSR's GoHighLevel - January 2026
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {problemCards.map((card, index) => {
          const Icon = iconMap[card.icon] || Icons.AlertCircle;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-2 border-coral-200 hover:border-coral-300 hover:shadow-lg transition-all relative overflow-hidden">
                {/* Red indicator pulse */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-coral-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-coral-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-coral-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-serif font-semibold text-charcoal mb-1">
                      {card.title}
                    </h4>
                  </div>
                </div>

                {/* Main Stat */}
                <div className="mb-3">
                  {typeof card.mainStat === 'number' ? (
                    <AnimatedCounter
                      value={card.mainStat}
                      duration={2}
                      className="text-4xl md:text-5xl font-serif font-bold text-coral-600"
                    />
                  ) : (
                    <span className="text-4xl md:text-5xl font-serif font-bold text-coral-600">
                      {card.mainStat}
                    </span>
                  )}
                  <p className="text-charcoal-light text-sm mt-1">{card.subtitle}</p>
                </div>

                {/* Context */}
                <div className="bg-coral-50 rounded-lg p-3 mb-3 border border-coral-100">
                  <p className="text-sm text-charcoal-light">{card.context}</p>
                </div>

                {/* Target */}
                <div className="flex items-center gap-2">
                  <Icons.Target className="w-4 h-4 text-sage-600" />
                  <p className="text-sm font-medium text-sage-700">{card.target}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-coral-50 border-2 border-coral-200 rounded-2xl px-8 py-4 shadow-sm">
          <Icons.AlertTriangle className="w-6 h-6 text-coral-500" />
          <span className="text-coral-700 font-semibold">
            98% of paid leads are not being contacted - this is a systems problem, not a lead problem
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
