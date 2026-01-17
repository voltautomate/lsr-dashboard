'use client';

import SectionHeader from '@/components/SectionHeader';
import { Zap } from 'lucide-react';
import SalesHero from '@/components/sales/SalesHero';
import ProblemDashboard from '@/components/sales/ProblemDashboard';
import ConversionFunnel from '@/components/sales/ConversionFunnel';
import CallBreakdown from '@/components/sales/CallBreakdown';
import PriorityScoring from '@/components/sales/PriorityScoring';
import RoutingLogic from '@/components/sales/RoutingLogic';
import ToolOwnership from '@/components/sales/ToolOwnership';
import BrooklynTimeSavings from '@/components/sales/BrooklynTimeSavings';
import SetterOnboardingSystem from '@/components/sales/SetterOnboardingSystem';
import OwnershipStatement from '@/components/sales/OwnershipStatement';

export default function SalesSystem() {
  return (
    <section
      id="sales-system"
      className="py-16 md:py-24 bg-gradient-to-b from-coral-50/30 via-cream to-teal-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Sales System Architecture"
          subtitle="You're generating sales, but the data is scattered. I'm building a system to connect the pieces so you can see what's actually working — and fix what isn't."
          icon={Zap}
          iconColor="text-coral-500"
        />

        {/* 1. Hero Section with 0.04% Conversion Stat */}
        <SalesHero />

        {/* 2. Problem Dashboard - 4 Red Cards */}
        <ProblemDashboard />

        {/* 3. Conversion Funnel - Visual Leak */}
        <ConversionFunnel />

        {/* 4. Call Breakdown - Why 80% Fail */}
        <CallBreakdown />

        {/* Future sections - need data added */}
        {/* <SpeedProblem /> */}
        {/* <LeadFlowDiagram /> */}

        {/* 5. Priority Scoring System */}
        <PriorityScoring />

        {/* 6. Routing Logic */}
        <RoutingLogic />

        {/* 7. Setter Onboarding System - Brooklyn's Time Back */}
        <SetterOnboardingSystem />

        {/* 8. Brooklyn's Week: BEFORE vs AFTER */}
        <BrooklynTimeSavings />

        {/* 9. Tool Ownership Diagram */}
        <ToolOwnership />

        {/* 10. Ownership Statement */}
        <OwnershipStatement />
      </div>
    </section>
  );
}
