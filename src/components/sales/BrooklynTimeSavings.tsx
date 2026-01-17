'use client';

import { motion } from 'framer-motion';
import { brooklynTimeData } from '@/data/sales';
import { Clock, TrendingDown, Sparkles } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function BrooklynTimeSavings() {
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
          Brooklyn's Week: BEFORE vs AFTER
        </h3>
        <p className="text-charcoal-light">
          Giving the founder her time back by automating setter onboarding
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-coral-50 rounded-2xl p-6 md:p-8 border-2 border-coral-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-serif font-semibold text-charcoal">BEFORE</h4>
              <p className="text-sm text-coral-700">Manual setter onboarding</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {brooklynTimeData.before.map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-lg p-4 border border-coral-200"
              >
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-semibold text-charcoal text-sm">{task.task}</h5>
                  <span className="text-coral-600 font-bold text-sm whitespace-nowrap ml-2">
                    {task.monthlyHours}h/mo
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-charcoal-light">
                  <span>{task.timePerSetter}</span>
                  <span>•</span>
                  <span>{task.frequency}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-coral-500 rounded-xl p-4 text-center">
            <div className="text-white text-sm font-medium mb-1">Total Time per Month</div>
            <div className="flex items-baseline justify-center gap-2">
              <AnimatedCounter
                value={brooklynTimeData.totalBefore}
                className="text-4xl font-bold text-white"
              />
              <span className="text-2xl text-white font-semibold">hours</span>
            </div>
          </div>
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-sage-50 rounded-2xl p-6 md:p-8 border-2 border-sage-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-serif font-semibold text-charcoal">AFTER</h4>
              <p className="text-sm text-sage-700">Automated onboarding system</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {brooklynTimeData.after.map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-lg p-4 border border-sage-200"
              >
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-semibold text-charcoal text-sm">{task.task}</h5>
                  <span className="text-sage-600 font-bold text-sm whitespace-nowrap ml-2">
                    {task.monthlyHours}h/mo
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-charcoal-light">
                  <span>{task.timePerSetter}</span>
                  <span>•</span>
                  <span>{task.frequency}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-sage-500 rounded-xl p-4 text-center">
            <div className="text-white text-sm font-medium mb-1">Total Time per Month</div>
            <div className="flex items-baseline justify-center gap-2">
              <AnimatedCounter
                value={brooklynTimeData.totalAfter}
                className="text-4xl font-bold text-white"
              />
              <span className="text-2xl text-white font-semibold">hours</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-teal-500 via-teal-600 to-sage-600 rounded-2xl p-8 text-center shadow-xl"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <TrendingDown className="w-8 h-8 text-teal-100" />
          <h4 className="text-2xl font-serif font-bold text-white">Time Saved</h4>
        </div>
        <div className="flex items-baseline justify-center gap-3 mb-2">
          <AnimatedCounter
            value={brooklynTimeData.timeSaved}
            className="text-6xl font-bold text-white"
          />
          <span className="text-3xl text-teal-100 font-semibold">hours/month</span>
        </div>
        <p className="text-teal-50 text-lg">
          From onboarding tasks to strategic growth work
        </p>
      </motion.div>
    </motion.div>
  );
}
