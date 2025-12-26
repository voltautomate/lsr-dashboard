'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, Play, Users, Eye, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { summaryStats } from '@/data/projects';

const footerStats = [
  { icon: Play, value: 6760000, label: 'Video Views', color: 'text-teal-400' },
  { icon: Users, value: summaryStats.totalNewFollowers, suffix: '+', label: 'New Followers', color: 'text-sage-400' },
  { icon: Eye, value: summaryStats.totalAudience, label: 'Total Audience', color: 'text-gold-400' },
  { icon: TrendingUp, value: summaryStats.hotLeadsIdentified, suffix: '+', label: 'Hot Leads', color: 'text-coral-400' },
];

export default function Footer() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <footer className="bg-charcoal text-white">
      {/* Stats Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-semibold">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix || ''}
                    duration={2}
                  />
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-400 to-teal-400 flex items-center justify-center">
              <span className="text-white font-bold">LSR</span>
            </div>
            <div>
              <p className="font-serif text-lg">Limbic System Rewire</p>
              <p className="text-sm text-white/60">Automation & Infrastructure Report</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Generated: {currentDate}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40 flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-coral-400" /> for Brooklyn & Nick Hanna
          </p>
        </div>
      </div>
    </footer>
  );
}
