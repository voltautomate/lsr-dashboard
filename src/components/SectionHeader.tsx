'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconColor?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  iconColor = 'text-sage-500',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      {Icon && (
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-50 ${iconColor} mb-4`}>
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
