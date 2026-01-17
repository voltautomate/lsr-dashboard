'use client';

import { motion } from 'framer-motion';
import { setterOnboardingSystem } from '@/data/sales';
import { Zap, ArrowRight, CheckCircle2, Users } from 'lucide-react';

export default function SetterOnboardingSystem() {
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
          {setterOnboardingSystem.title}
        </h3>
        <p className="text-charcoal-light text-lg">
          {setterOnboardingSystem.subtitle}
        </p>
      </div>

      {/* Current Problem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-coral-50 border-2 border-coral-200 rounded-2xl p-6 md:p-8 mb-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-serif font-semibold text-charcoal mb-2">
              Current Problem
            </h4>
            <p className="text-charcoal-light text-lg leading-relaxed">
              {setterOnboardingSystem.currentProblem}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Solution: Automated Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white border-2 border-sage-200 rounded-2xl p-6 md:p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl font-serif font-semibold text-charcoal">
            {setterOnboardingSystem.solution}
          </h4>
        </div>

        {/* Automation Steps */}
        <div className="space-y-6">
          {setterOnboardingSystem.automationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              {/* Step Card */}
              <div className="bg-gradient-to-r from-sage-50 to-teal-50 rounded-xl p-6 border border-sage-200">
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className="w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    {/* Step Title */}
                    <h5 className="text-lg font-semibold text-charcoal mb-2">
                      {step.step}
                    </h5>

                    {/* Automation + Result */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Zap className="w-4 h-4 text-teal-600" />
                          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                            Automation
                          </span>
                        </div>
                        <p className="text-sm text-charcoal-light">{step.automation}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="w-4 h-4 text-sage-600" />
                          <span className="text-xs font-semibold text-sage-700 uppercase tracking-wide">
                            Result
                          </span>
                        </div>
                        <p className="text-sm text-charcoal-light">{step.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < setterOnboardingSystem.automationSteps.length - 1 && (
                <div className="flex justify-center my-3">
                  <ArrowRight className="w-6 h-6 text-sage-400 transform rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl p-6 text-center shadow-lg">
          <div className="text-coral-100 text-sm font-medium mb-2">Brooklyn's Time Saved</div>
          <div className="text-3xl font-bold text-white mb-1">
            {setterOnboardingSystem.impact.brooklynTimeSaved}
          </div>
          <div className="text-coral-100 text-xs">Back to strategy work</div>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-center shadow-lg">
          <div className="text-teal-100 text-sm font-medium mb-2">Time to Productivity</div>
          <div className="text-3xl font-bold text-white mb-1">
            {setterOnboardingSystem.impact.setterTimeToProductivity}
          </div>
          <div className="text-teal-100 text-xs">From hire to first call</div>
        </div>

        <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl p-6 text-center shadow-lg">
          <div className="text-sage-100 text-sm font-medium mb-2">Annual ROI</div>
          <div className="text-3xl font-bold text-white mb-1">
            {setterOnboardingSystem.impact.roiAnnual}
          </div>
          <div className="text-sage-100 text-xs">Opportunity cost savings</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
