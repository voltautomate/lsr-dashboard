'use client';

import { motion } from 'framer-motion';
import { routingRules } from '@/data/sales';
import * as Icons from 'lucide-react';

const iconMap: Record<string, Icons.LucideIcon> = {
  Users: Icons.Users,
  Clock: Icons.Clock,
  AlertCircle: Icons.AlertCircle,
  Zap: Icons.Zap,
  CheckCircle: Icons.CheckCircle,
  RefreshCw: Icons.RefreshCw,
  AlertTriangle: Icons.AlertTriangle,
  RotateCcw: Icons.RotateCcw,
  Target: Icons.Target,
  Award: Icons.Award
};

export default function RoutingLogic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
          Routing Logic
        </h3>
        <p className="text-charcoal-light">
          How leads flow through the system
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {routingRules.map((rule, index) => {
          const Icon = iconMap[rule.icon] || Icons.AlertCircle;

          return (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border-2 border-teal-200 hover:border-teal-300 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h4 className="text-lg font-serif font-semibold text-charcoal">
                  {rule.title}
                </h4>
                <p className="text-sm text-charcoal-light">
                  {rule.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mt-4">
                  {rule.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icons.CheckCircle className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-charcoal-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
