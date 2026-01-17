'use client';

import { motion } from 'framer-motion';
import { ownershipStatement } from '@/data/sales';
import { AlertCircle, CheckCircle2, Wrench } from 'lucide-react';

export default function OwnershipStatement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal rounded-2xl p-8 md:p-12 text-center mb-8 shadow-xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-serif text-white mb-6"
        >
          {ownershipStatement.title}
        </motion.h3>

        {/* Problems List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mb-6 max-w-3xl mx-auto"
        >
          {ownershipStatement.problems.map((problem, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-cream text-lg">
              <AlertCircle className="w-5 h-5 text-coral-400 flex-shrink-0" />
              <p>{problem}</p>
            </div>
          ))}
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-4xl mx-auto"
        >
          <p className="text-cream text-xl font-semibold">
            {ownershipStatement.statement}
          </p>
        </motion.div>
      </div>

      {/* Fixes Section */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-sage-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-2xl font-serif text-charcoal font-semibold">
            What We're Fixing
          </h4>
        </div>

        <ul className="space-y-4">
          {ownershipStatement.fixes.map((fix, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <span className="text-charcoal-light text-lg">
                {fix}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
