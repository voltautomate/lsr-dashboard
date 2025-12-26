'use client';

import { motion } from 'framer-motion';
import { Play, Users, TrendingUp, Eye } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { summaryStats, socialMediaStats } from '@/data/projects';

const heroStats = [
  {
    icon: Play,
    value: 6760000,
    displayValue: '6.76M',
    label: 'Video Views',
    description: 'Last 90 days',
    highlight: true,
  },
  {
    icon: Users,
    value: summaryStats.totalNewFollowers,
    suffix: '+',
    label: 'New Followers',
    description: '120/day average',
  },
  {
    icon: Eye,
    value: summaryStats.totalAudience,
    label: 'Total Audience',
    description: 'Across platforms',
  },
  {
    icon: TrendingUp,
    value: summaryStats.hotLeadsIdentified,
    suffix: '+',
    label: 'Hot Leads',
    description: 'Identified & tracked',
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sage-50 to-teal-50 pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-taupe-100"
          >
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse"></span>
            <span className="text-sm font-medium text-charcoal-light">Limbic System Rewire</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-4 leading-tight">
            Automation &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-500 to-teal-500">
              Infrastructure
            </span>{' '}
            Report
          </h1>

          <p className="text-xl md:text-2xl text-charcoal-light max-w-3xl mx-auto">
            2025 Progress & 2026 Roadmap
          </p>
        </motion.div>

        {/* Featured Stat - 6.76M Views */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative bg-gradient-to-r from-sage-500 via-teal-500 to-sage-600 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_50%)]" />
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,white_0%,transparent_40%)]" />
            </div>

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4"
              >
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Automation Impact - Last 90 Days</span>
              </motion.div>

              <div className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2 tracking-tight">
                <AnimatedCounter value={6760000} duration={3} />
              </div>
              <p className="text-2xl md:text-3xl font-light opacity-90">
                Total Video Views
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="font-semibold">Facebook:</span> 5.5M <span className="text-sage-200">↑238%</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="font-semibold">Instagram:</span> 1.2M <span className="text-sage-200">↑601%</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="font-semibold">YouTube:</span> 57.1K <span className="text-sage-200">↑245%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {heroStats.slice(1).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-taupe-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sage-100 text-sage-600 mb-4">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-charcoal mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix || ''}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm font-medium text-charcoal mb-1">{stat.label}</div>
                <div className="text-xs text-charcoal-light">{stat.description}</div>
              </div>
            </motion.div>
          ))}

          {/* Database stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-taupe-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold-100 text-gold-600 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-semibold text-charcoal mb-1">
                <AnimatedCounter
                  value={summaryStats.totalContacts}
                  duration={2.5}
                />
              </div>
              <div className="text-sm font-medium text-charcoal mb-1">Contacts in Database</div>
              <div className="text-xs text-charcoal-light">Ready to activate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key insight callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-coral-50 border border-coral-200 rounded-full px-5 py-2.5">
            <span className="text-coral-600 font-medium">93.2% of Facebook views from NON-followers</span>
            <span className="text-coral-400">— the algorithm rewards consistency</span>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-10"
        >
          <a
            href="#completed"
            className="inline-flex flex-col items-center gap-2 text-charcoal-light hover:text-sage-600 transition-colors"
          >
            <span className="text-sm">Explore the wins</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
