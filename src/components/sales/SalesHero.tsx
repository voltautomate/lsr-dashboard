'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { salesHero } from '@/data/sales';

export default function SalesHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-gradient-to-br from-coral-100 via-cream to-teal-100 rounded-2xl p-8 md:p-12 shadow-lg border border-taupe-100"
    >
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-200 shadow-sm">
          <span className="text-sm font-medium text-charcoal">
            {salesHero.badge}
          </span>
        </div>
      </div>

      {/* Main Stat */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <div className="flex items-center justify-center gap-2">
            <AnimatedCounter
              value={salesHero.highlightStat.value}
              suffix={salesHero.highlightStat.suffix}
              duration={2}
              decimals={2}
              className="text-6xl md:text-8xl font-serif font-bold text-coral-500"
            />
          </div>
          <p className="text-xl md:text-2xl text-charcoal font-medium mt-2">
            {salesHero.highlightStat.label}
          </p>
        </motion.div>

        <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
          {salesHero.highlightStat.description}
        </p>
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-coral-200">
          <span className="text-sm text-coral-600 font-medium">
            Leads contacted within 5 minutes are 10x more likely to convert
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
