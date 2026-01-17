'use client';

import { motion } from 'framer-motion';
import { callBreakdown, callBreakdownTotal, callBreakdownInsight } from '@/data/sales';
import { Phone, Voicemail, PhoneOff, AlertCircle } from 'lucide-react';

const iconMap = {
  Answered: Phone,
  Voicemail: Voicemail,
  Missed: PhoneOff
};

const colorMap = {
  sage: {
    bg: 'bg-sage-500',
    light: 'bg-sage-100',
    border: 'border-sage-200',
    text: 'text-sage-700'
  },
  gold: {
    bg: 'bg-gold-500',
    light: 'bg-gold-100',
    border: 'border-gold-200',
    text: 'text-gold-700'
  },
  coral: {
    bg: 'bg-coral-500',
    light: 'bg-coral-100',
    border: 'border-coral-200',
    text: 'text-coral-700'
  },
  teal: {
    bg: 'bg-teal-500',
    light: 'bg-teal-100',
    border: 'border-teal-200',
    text: 'text-teal-700'
  }
};

export default function CallBreakdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-taupe-100"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
          First-Call Breakdown
        </h3>
        <p className="text-charcoal-light">
          First-time calls to new leads - 375 total attempts
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Visual Donut (simplified with stacked bars) */}
          <div className="space-y-4">
            {callBreakdown.map((item, index) => {
              const colors = colorMap[item.color];
              const Icon = iconMap[item.status as keyof typeof iconMap];

              return (
                <motion.div
                  key={item.status}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  {/* Label */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                      <span className="font-semibold text-charcoal">{item.status}</span>
                    </div>
                    <span className="text-sm text-charcoal-light">
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-12 bg-taupe-100 rounded-xl overflow-hidden">
                    <motion.div
                      className={`h-full ${colors.bg} flex items-center justify-end px-4`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                        className="text-white font-bold text-sm"
                      >
                        {item.percentage}%
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            {/* Total Calls */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-br from-taupe-50 to-taupe-100 border border-taupe-200 rounded-xl p-6"
            >
              <p className="text-sm font-medium text-taupe-600 mb-2">TOTAL FIRST-CALL ATTEMPTS</p>
              <p className="text-4xl font-serif font-bold text-charcoal">{callBreakdownTotal}</p>
              <p className="text-sm text-charcoal-light mt-2">
                Out of 5,500 paid leads (6.8%)
              </p>
            </motion.div>

            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-coral-50 border-2 border-coral-200 rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-coral-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-coral-700 mb-1">THE PROBLEM</p>
                  <p className="text-2xl font-serif font-bold text-coral-700">80%</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-light">
                of first contact attempts fail to reach a live person
              </p>
            </motion.div>

            {/* Success Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-sage-50 border border-sage-200 rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <Phone className="w-6 h-6 text-sage-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-sage-700 mb-1">SUCCESSFUL CONTACT</p>
                  <p className="text-2xl font-serif font-bold text-sage-700">74</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-light">
                Real conversations out of 375 attempts
              </p>
            </motion.div>
          </div>
        </div>

        {/* Insight Callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gold-50 border-2 border-gold-200 rounded-2xl px-8 py-4 shadow-sm">
            <p className="text-gold-700 font-medium max-w-2xl">
              {callBreakdownInsight}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
