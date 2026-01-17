'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { conversionFunnel } from '@/data/sales';
import { ArrowDown, AlertTriangle } from 'lucide-react';

export default function ConversionFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Find max value for relative sizing
  const maxValue = Math.max(...conversionFunnel.map(stage => stage.value));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-taupe-100"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
          The Conversion Funnel Leak
        </h3>
        <p className="text-charcoal-light">
          Visualizing where 5,500 paid leads disappear
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {conversionFunnel.map((stage, index) => {
          // Calculate width percentage relative to max value (52,000)
          const widthPercent = (stage.value / maxValue) * 100;

          return (
            <div key={stage.label}>
              {/* Arrow Connector */}
              {index > 0 && (
                <div className="flex justify-center -my-3">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  >
                    <ArrowDown className="w-6 h-6 text-taupe-300" />
                  </motion.div>
                </div>
              )}

              {/* Stage Bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="space-y-2"
              >
                {/* Label */}
                <div className="flex justify-between items-center px-2">
                  <span className="font-semibold text-charcoal">{stage.label}</span>
                  <span className="text-sm text-charcoal-light">
                    {stage.value.toLocaleString()} ({stage.percentage.toFixed(2)}%)
                  </span>
                </div>

                {/* Animated Bar */}
                <div className="relative h-16 bg-taupe-100 rounded-xl overflow-hidden">
                  <motion.div
                    className={`h-full rounded-xl flex items-center px-4 ${
                      stage.isLeak
                        ? 'bg-gradient-to-r from-coral-400 to-coral-500'
                        : 'bg-gradient-to-r from-sage-400 to-teal-400'
                    }`}
                    initial={{ width: 0 }}
                    animate={{
                      width: isInView ? `${widthPercent}%` : 0
                    }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.3, ease: 'easeOut' }}
                  >
                    {isInView && widthPercent > 15 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                        className="text-white font-bold text-sm"
                      >
                        {stage.value.toLocaleString()}
                      </motion.span>
                    )}
                  </motion.div>
                </div>

                {/* Leak Reason */}
                {stage.isLeak && stage.leakReason && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isInView ? { opacity: 1, height: 'auto' } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
                    className="flex items-center gap-2 bg-coral-50 border border-coral-200 rounded-lg px-4 py-2"
                  >
                    <AlertTriangle className="w-4 h-4 text-coral-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-coral-700">
                      {stage.leakReason}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Final Result Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-10 text-center"
      >
        <div className="inline-block bg-gradient-to-br from-coral-50 to-coral-100 border-2 border-coral-300 rounded-2xl px-8 py-6 shadow-lg">
          <p className="text-sm font-medium text-coral-600 mb-2">FINAL RESULT</p>
          <p className="text-3xl font-serif font-bold text-coral-700 mb-2">
            5,500 paid leads → 2 enrolled
          </p>
          <p className="text-lg font-semibold text-coral-600">
            = 0.04% conversion rate
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
