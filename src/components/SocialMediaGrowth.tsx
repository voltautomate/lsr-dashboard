'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, TrendingUp, Sparkles } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { socialMediaStats } from '@/data/projects';

const platformIcons = {
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
};

const platformColors: Record<string, { bg: string; border: string; text: string; accent: string; gradient: string }> = {
  Facebook: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    accent: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600',
  },
  Instagram: {
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600',
    accent: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
  },
  YouTube: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-600',
    accent: 'bg-red-500',
    gradient: 'from-red-500 to-red-600',
  },
};

const defaultColors = {
  bg: 'bg-taupe-50',
  border: 'border-taupe-200',
  text: 'text-taupe-600',
  accent: 'bg-taupe-500',
  gradient: 'from-taupe-500 to-taupe-600',
};

export default function SocialMediaGrowth() {
  return (
    <div className="mt-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-400 to-teal-400 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-serif text-charcoal">Social Media Growth</h3>
          <p className="text-sm text-charcoal-light">{socialMediaStats.dateRange}</p>
        </div>
      </motion.div>

      {/* Platform Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {socialMediaStats.platforms.map((platform, index) => {
          const Icon = platformIcons[platform.platform as keyof typeof platformIcons] || TrendingUp;
          const colors = platformColors[platform.platform] || defaultColors;

          return (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${colors.bg} ${colors.border} border rounded-2xl p-5 hover:shadow-md transition-shadow`}
            >
              {/* Platform Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg ${colors.accent} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className={`font-semibold ${colors.text}`}>{platform.platform}</span>
                </div>
                <span className={`text-xs font-medium ${colors.text} bg-white/60 px-2 py-1 rounded-full`}>
                  {platform.viewsGrowth}
                </span>
              </div>

              {/* Views */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-charcoal">
                  {platform.viewsFormatted}
                </div>
                <div className="text-sm text-charcoal-light">Views</div>
              </div>

              {/* Followers */}
              <div className="flex items-center justify-between py-3 border-t border-dashed border-current/10">
                <div>
                  <div className="text-lg font-semibold text-charcoal">
                    +<AnimatedCounter value={platform.newFollowers} duration={2} />
                  </div>
                  <div className="text-xs text-charcoal-light">New Followers</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-charcoal">
                    <AnimatedCounter value={platform.totalFollowers} duration={2} />
                  </div>
                  <div className="text-xs text-charcoal-light">Total</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4 space-y-2">
                {platform.highlights.slice(0, 3).map((highlight, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-light">{highlight.label}</span>
                    <span className={`font-medium ${colors.text}`}>
                      {highlight.value}
                      {highlight.growth && (
                        <span className="ml-1 text-xs opacity-75">{highlight.growth}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 bg-gradient-to-r from-gold-50 to-sage-50 rounded-xl p-5 border border-gold-100"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-gold-500" />
          <span className="font-semibold text-charcoal">Key Insights</span>
        </div>
        <ul className="grid md:grid-cols-2 gap-2">
          {socialMediaStats.keyInsights.map((insight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-charcoal-light">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-1.5 flex-shrink-0" />
              {insight}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
