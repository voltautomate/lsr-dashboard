'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  progress,
  className = '',
  showPercentage = true,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-charcoal-light">Progress</span>
        {showPercentage && (
          <span className="text-sm font-medium text-sage-600">{progress}%</span>
        )}
      </div>
      <div className="h-3 bg-taupe-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-sage-400 to-teal-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}
