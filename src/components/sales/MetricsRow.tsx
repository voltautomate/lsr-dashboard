'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { keyMetrics } from '@/data/sales';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const iconMap = {
  0: Users,
  1: Clock,
  2: DollarSign,
  3: TrendingUp
};

const colorMap = {
  sage: {
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    text: 'text-sage-600',
    icon: 'bg-sage-100'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-600',
    icon: 'bg-teal-100'
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-200',
    text: 'text-gold-600',
    icon: 'bg-gold-100'
  },
  coral: {
    bg: 'bg-coral-50',
    border: 'border-coral-200',
    text: 'text-coral-600',
    icon: 'bg-coral-100'
  }
};

export default function MetricsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
      {keyMetrics.map((metric, index) => {
        const Icon = iconMap[index as keyof typeof iconMap];
        const colors = colorMap[metric.color];

        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${colors.bg} ${colors.border} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>

            <div className="mb-2">
              <AnimatedCounter
                value={typeof metric.value === 'number' ? metric.value : 0}
                prefix={metric.prefix}
                suffix={metric.suffix}
                duration={2}
                className={`text-3xl md:text-4xl font-serif font-bold ${colors.text}`}
              />
              {typeof metric.value === 'string' && (
                <span className={`text-3xl md:text-4xl font-serif font-bold ${colors.text}`}>
                  {metric.value}
                </span>
              )}
            </div>

            <p className="text-sm text-charcoal-light font-medium">
              {metric.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
