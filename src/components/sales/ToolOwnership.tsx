'use client';

import { motion } from 'framer-motion';
import { toolOwnership } from '@/data/sales';
import { Wrench, Database, Users, Zap } from 'lucide-react';

const ownerColorMap = {
  Sales: { bg: 'bg-coral-100', text: 'text-coral-700', badge: 'bg-coral-500' },
  Ops: { bg: 'bg-teal-100', text: 'text-teal-700', badge: 'bg-teal-500' },
  Marketing: { bg: 'bg-gold-100', text: 'text-gold-700', badge: 'bg-gold-500' }
};

const categoryIcons = [Wrench, Database, Users, Zap];

export default function ToolOwnership() {
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
          Tool Ownership Diagram
        </h3>
        <p className="text-charcoal-light">
          Clear responsibility for each system component
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolOwnership.map((category, categoryIndex) => {
          const CategoryIcon = categoryIcons[categoryIndex] || Wrench;

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl border border-taupe-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-taupe-100 to-taupe-50 p-5 border-b border-taupe-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <CategoryIcon className="w-5 h-5 text-charcoal" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-charcoal">
                    {category.category}
                  </h4>
                </div>
              </div>

              {/* Tools List */}
              <div className="p-5 space-y-4">
                {category.tools.map((tool, toolIndex) => {
                  const ownerColors = ownerColorMap[tool.owner];

                  return (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + toolIndex * 0.05
                      }}
                      className={`${ownerColors.bg} rounded-lg p-4 border border-${tool.owner === 'Sales' ? 'coral' : tool.owner === 'Ops' ? 'teal' : 'gold'}-200`}
                    >
                      {/* Tool Name + Owner Badge */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h5 className="font-semibold text-charcoal text-sm flex-1">
                          {tool.name}
                        </h5>
                        <span className={`${ownerColors.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap`}>
                          {tool.owner}
                        </span>
                      </div>

                      {/* Purpose */}
                      <p className="text-xs text-charcoal-light leading-relaxed">
                        {tool.purpose}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Owner Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mt-8 text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-coral-500" />
          <span className="text-charcoal-light font-medium">Sales Ownership</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500" />
          <span className="text-charcoal-light font-medium">Ops Ownership</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gold-500" />
          <span className="text-charcoal-light font-medium">Marketing Ownership</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
