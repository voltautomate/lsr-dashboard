// Sales System Architecture Data - REAL LSR DATA (January 2026)

export interface ProblemCard {
  id: string;
  title: string;
  mainStat: string | number;
  subtitle: string;
  context: string;
  target: string;
  icon: string;
}

export interface FunnelStage {
  label: string;
  value: number;
  percentage: number;
  isLeak: boolean;
  leakReason?: string;
}

export interface CallStatus {
  status: string;
  count: number;
  percentage: number;
  color: 'sage' | 'coral' | 'gold' | 'teal';
}

export interface PipelineStage {
  stage: string;
  opportunities: number;
  value: number;
  isGoal?: boolean;
}

export interface SpeedTiming {
  time: string;
  contactRate: number;
  color: 'sage' | 'teal' | 'gold' | 'coral';
  status: string;
}

export interface MetricComparison {
  metric: string;
  current: string | number;
  target: string | number;
  status: 'critical' | 'poor' | 'fair' | 'good';
  icon: string;
}

export interface PriorityLevel {
  level: 'P1' | 'P2' | 'P3' | 'P4';
  label: string;
  criteria: string[];
  color: 'coral' | 'teal' | 'gold' | 'sage';
  responseTime: string;
  exampleScenarios: string[];
}

export interface RoutingRule {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface ToolOwnershipCategory {
  category: string;
  tools: {
    name: string;
    owner: 'Sales' | 'Ops' | 'Marketing';
    purpose: string;
  }[];
}

// Hero Section Data
export const salesHero = {
  badge: 'System Owner: Anthony | Revenue Operations Architect',
  title: 'Outbound Sales System',
  subtitle: 'You\'re generating sales, but the data is scattered. I\'m building a system to connect the pieces so you can see what\'s actually working — and fix what isn\'t.',
  highlightStat: {
    value: 0.08,
    suffix: '%',
    label: 'Phone Sales Conversion Rate',
    description: '2,088 booked calls → 2 enrolled = broken call system (Self-Study at 15.79% is working)'
  }
};

// Problem Dashboard - 4 Red Problem Cards
export const problemCards: ProblemCard[] = [
  {
    id: 'first-call-answer',
    title: 'First-Call Answer Rate',
    mainStat: '19.7%',
    subtitle: 'of new leads answer',
    context: '60.5% go to voicemail immediately',
    target: 'Target: 40%+',
    icon: 'PhoneOff'
  },
  {
    id: 'pipeline-graveyard',
    title: 'Pipeline Graveyard',
    mainStat: 2088,
    subtitle: '"Booked Calls" at $0',
    context: 'Only 2 enrolled (0.08% conversion)',
    target: 'Target: 2%+ conversion',
    icon: 'XCircle'
  },
  {
    id: 'paid-lead-leak',
    title: 'Paid Lead Leak',
    mainStat: 5500,
    subtitle: 'paid leads generated',
    context: '$0 in tracked sales',
    target: '98.7% not contacted',
    icon: 'AlertTriangle'
  },
  {
    id: 'call-quality',
    title: 'Call Quality',
    mainStat: '1m 5s',
    subtitle: 'avg call duration',
    context: 'Not real conversations',
    target: 'Target: 5-10 min',
    icon: 'Clock'
  }
];

// Conversion Funnel Data
export const conversionFunnel: FunnelStage[] = [
  {
    label: 'Paid Traffic (Page Views)',
    value: 52000,
    percentage: 100,
    isLeak: false
  },
  {
    label: 'Opt-ins',
    value: 5500,
    percentage: 10.6,
    isLeak: false
  },
  {
    label: 'First-Call Attempts',
    value: 375,
    percentage: 0.7,
    isLeak: true,
    leakReason: 'LEAK: Only 6.8% of leads called'
  },
  {
    label: 'Calls Answered',
    value: 74,
    percentage: 0.14,
    isLeak: true,
    leakReason: 'LEAK: Only 19.7% answer rate'
  },
  {
    label: 'Enrolled',
    value: 2,
    percentage: 0.004,
    isLeak: true,
    leakReason: 'LEAK: Unknown conversion from call to close'
  }
];

// Call Breakdown Data (First-Time Calls to New Leads)
export const callBreakdown: CallStatus[] = [
  {
    status: 'Answered',
    count: 74,
    percentage: 19.7,
    color: 'sage'
  },
  {
    status: 'Voicemail',
    count: 227,
    percentage: 60.5,
    color: 'gold'
  },
  {
    status: 'Missed',
    count: 74,
    percentage: 19.7,
    color: 'coral'
  }
];

export const callBreakdownTotal = 375;
export const callBreakdownInsight = '80% of first contact attempts fail to reach a live person. This usually means we\'re calling too slow — the lead has gone cold.';

// Pipeline Reality Data
export const pipelineData: PipelineStage[] = [
  {
    stage: 'Booked Call',
    opportunities: 2088,
    value: 0
  },
  {
    stage: 'Not a Fit',
    opportunities: 423,
    value: 3990
  },
  {
    stage: 'Warm List',
    opportunities: 4,
    value: 18200
  },
  {
    stage: 'Hot List',
    opportunities: 2,
    value: 11300
  },
  {
    stage: 'General List',
    opportunities: 2,
    value: 4000
  },
  {
    stage: 'Enrolled',
    opportunities: 2,
    value: 4640,
    isGoal: true
  },
  {
    stage: 'No Show',
    opportunities: 1,
    value: 0
  },
  {
    stage: 'Cancelled Call',
    opportunities: 2,
    value: 0
  }
];

export const pipelineTotal = {
  opportunities: 2524,
  value: 42130
};

export const pipelineInsight = '2,088 people booked calls. 2 enrolled. Where did 2,086 go?';

// Speed Problem Timeline
export const speedTimeline: SpeedTiming[] = [
  {
    time: '0-5 min',
    contactRate: 90,
    color: 'sage',
    status: 'Hot Lead'
  },
  {
    time: '5-30 min',
    contactRate: 60,
    color: 'teal',
    status: 'Warm Lead'
  },
  {
    time: '30-60 min',
    contactRate: 30,
    color: 'gold',
    status: 'Cooling'
  },
  {
    time: '1-2 hrs',
    contactRate: 10,
    color: 'coral',
    status: 'Cold Lead'
  },
  {
    time: '2+ hrs',
    contactRate: 5,
    color: 'coral',
    status: 'Dead Lead'
  }
];

export const speedInsight = {
  current: '19.7% first-call answer rate',
  implication: 'This suggests average speed-to-lead is: 1-2+ HOURS'
};

// Before/After Comparison
export const beforeAfter = {
  current: [
    { metric: 'Response time', value: 'HOURS' },
    { metric: 'First-call answer', value: '19.7%' },
    { metric: 'Leads called', value: '6.8%' },
    { metric: 'Pipeline visibility', value: 'None' },
    { metric: 'Setter accountability', value: 'None' }
  ],
  future: [
    { metric: 'Response time', value: '< 3 MINUTES' },
    { metric: 'First-call answer', value: '40%+' },
    { metric: 'Leads called', value: '95%+' },
    { metric: 'Pipeline visibility', value: 'Full attribution' },
    { metric: 'Setter accountability', value: 'Real-time data' }
  ]
};

// Priority Scoring (adjusted for LSR's actual lead types)
export const priorityLevels: PriorityLevel[] = [
  {
    level: 'P1',
    label: 'Scholarship Applicant + High Engagement',
    criteria: [
      'Scholarship application submitted',
      '50%+ video watch time',
      'Application form completed',
      'Clicked "Book a Call" within last hour'
    ],
    color: 'coral',
    responseTime: '< 60 seconds',
    exampleScenarios: ['Scholarship app submitted', 'Challenge complete + application', 'High-engagement video viewer']
  },
  {
    level: 'P2',
    label: 'Challenge Complete + Video Watched 50%+',
    criteria: [
      'Completed challenge content',
      'Watched 50%+ of training videos',
      'Replied to nurture email',
      'Engaged with multiple touchpoints'
    ],
    color: 'teal',
    responseTime: '< 3 minutes',
    exampleScenarios: ['Challenge graduate', 'Video engagement', 'Email responder']
  },
  {
    level: 'P3',
    label: 'Standard Opt-in (Paid or Organic)',
    criteria: [
      'New paid traffic opt-in',
      'Organic lead magnet download',
      'Low engagement (< 50%)',
      'General inquiry form'
    ],
    color: 'gold',
    responseTime: '< 10 minutes',
    exampleScenarios: ['Just opted in', 'Downloaded lead magnet', 'Newsletter subscriber']
  },
  {
    level: 'P4',
    label: 'Recycled (No contact after 3 attempts)',
    criteria: [
      'No contact after 3 attempts',
      '48+ hours since last touch',
      'Sent to nurture sequence',
      'Re-engagement trigger'
    ],
    color: 'sage',
    responseTime: 'Next business day',
    exampleScenarios: ['Missed 3 calls', 'Old lead reactivation', 'Re-engaged from nurture']
  }
];

// Routing Rules
export const routingRules: RoutingRule[] = [
  {
    id: 'assignment',
    title: 'Assignment Rules',
    icon: 'Users',
    description: '5 setters in round-robin rotation',
    details: [
      'Only routes to "available" setters',
      '90-second max hold for P1/P2',
      'Auto-escalation if no one available'
    ]
  },
  {
    id: 'missed-lead',
    title: 'Missed Lead Protocol',
    icon: 'AlertTriangle',
    description: 'Immediate reassignment (no waiting)',
    details: [
      'Original setter auto-toggled to "away"',
      '2 consecutive misses = manual re-enable',
      'Manager alert on patterns'
    ]
  },
  {
    id: 'voicemail',
    title: 'Voicemail Follow-up',
    icon: 'Voicemail',
    description: '60.5% of calls hit voicemail currently',
    details: [
      'New rule: VM + immediate SMS + email',
      'Retry schedule: 2 hrs, 24 hrs, 48 hrs',
      'After 3 attempts → nurture sequence'
    ]
  }
];

// Tool Ownership (with real LSR numbers)
export const toolOwnership: ToolOwnershipCategory[] = [
  {
    category: 'Kixie (Dialer)',
    tools: [
      { name: 'Power dialing', owner: 'Ops', purpose: 'Configure power dial settings' },
      { name: 'Call routing', owner: 'Ops', purpose: 'Set up routing for 5 setters' },
      { name: '798 calls/week', owner: 'Sales', purpose: 'Current call volume tracking' },
      { name: 'Voicemail drop', owner: 'Sales', purpose: 'Handle 60.5% VM rate' },
      { name: 'Recording', owner: 'Sales', purpose: 'Quality assurance' }
    ]
  },
  {
    category: 'GoHighLevel (CRM)',
    tools: [
      { name: '2,524 opportunities', owner: 'Ops', purpose: 'Total pipeline management' },
      { name: 'Pipeline management', owner: 'Sales', purpose: 'Track 2,088 booked calls' },
      { name: '1,663 scholarship apps', owner: 'Ops', purpose: 'High-priority lead database' },
      { name: 'Workflows', owner: 'Ops', purpose: 'Automation triggers' },
      { name: 'Attribution', owner: 'Ops', purpose: 'Fix sales tracking to lead sources' }
    ]
  },
  {
    category: 'Brooklyn (Founder)',
    tools: [
      { name: 'Setter hiring', owner: 'Sales', purpose: 'Recruit and vet new setters' },
      { name: 'Manual onboarding', owner: 'Sales', purpose: 'BEFORE: 4-8 hours per setter' },
      { name: 'Auto onboarding', owner: 'Ops', purpose: 'AFTER: 30 min oversight (Anthony built)' },
      { name: 'Team coaching', owner: 'Sales', purpose: 'Strategy and performance reviews' },
      { name: 'Offer creation', owner: 'Marketing', purpose: 'Design scholarship programs' }
    ]
  },
  {
    category: 'Anthony (System Owner)',
    tools: [
      { name: 'Architecture', owner: 'Ops', purpose: 'Design end-to-end system flow' },
      { name: 'Routing logic', owner: 'Ops', purpose: 'Fix 6.8% contact rate' },
      { name: 'Fix the leaks', owner: 'Ops', purpose: 'Recover phone call conversion' },
      { name: 'Accountability', owner: 'Ops', purpose: 'Real-time setter tracking' },
      { name: 'Optimization', owner: 'Ops', purpose: 'Improve 19.7% answer rate' }
    ]
  }
];

// Metrics Comparison Table
export const metricsComparison: MetricComparison[] = [
  {
    metric: 'Speed to First Dial',
    current: 'Unknown (hours?)',
    target: '< 3 min',
    status: 'critical',
    icon: 'Clock'
  },
  {
    metric: 'First-Call Answer Rate',
    current: '19.7%',
    target: '40%+',
    status: 'critical',
    icon: 'Phone'
  },
  {
    metric: 'Leads Contacted (% of opt-ins)',
    current: '6.8%',
    target: '95%+',
    status: 'critical',
    icon: 'Users'
  },
  {
    metric: 'Avg Call Duration',
    current: '1m 5s',
    target: '5-10 min',
    status: 'critical',
    icon: 'Timer'
  },
  {
    metric: 'Pipeline → Enrolled',
    current: '0.08%',
    target: '2%+',
    status: 'critical',
    icon: 'TrendingUp'
  },
  {
    metric: 'Setter Availability',
    current: 'Unknown',
    target: '80%+',
    status: 'critical',
    icon: 'UserCheck'
  },
  {
    metric: 'Lead Loss Rate',
    current: '~98%',
    target: '< 5%',
    status: 'critical',
    icon: 'AlertCircle'
  }
];

// Revenue Calculator Data
export const revenueCalculator = {
  currentState: {
    leads: 5500,
    enrolled: 2,
    conversion: 0.04,
    dealValue: 5000
  },
  scenarios: [
    {
      label: '1% Conversion',
      conversion: 1,
      enrollments: 55,
      revenue: 275000,
      annual: 275000
    },
    {
      label: '2% Conversion',
      conversion: 2,
      enrollments: 110,
      revenue: 550000,
      annual: 550000
    }
  ],
  insight: 'Every 1% improvement = ~$275K/year'
};

// Ownership Statement
export const ownershipStatement = {
  title: 'The Bottom Line',
  problems: [
    'You\'re generating sales (Self-Study: 15.79% conversion)',
    'But phone calls aren\'t converting (2,088 booked → 2 enrolled)',
    'And Brooklyn spends 4-8 hours per setter on manual onboarding'
  ],
  statement: 'That\'s not a lead problem or a traffic problem. That\'s a systems problem.',
  fixes: [
    'Speed to lead (hours → minutes)',
    'First-call answer rate (20% → 40%+)',
    'Pipeline visibility (who\'s stuck where)',
    'Setter accountability (real-time tracking)',
    'Lead loss prevention (zero silent failures)',
    'Brooklyn\'s time (onboarding hours → strategy hours)'
  ]
};

// Brooklyn's Time Savings Data
export interface BrooklynTimeComparison {
  before: {
    task: string;
    timePerSetter: string;
    frequency: string;
    monthlyHours: number;
  }[];
  after: {
    task: string;
    timePerSetter: string;
    frequency: string;
    monthlyHours: number;
  }[];
  totalBefore: number;
  totalAfter: number;
  timeSaved: number;
}

export const brooklynTimeData: BrooklynTimeComparison = {
  before: [
    {
      task: 'Manual Slack onboarding',
      timePerSetter: '1-2 hours',
      frequency: 'Per new setter',
      monthlyHours: 6
    },
    {
      task: 'GHL access setup',
      timePerSetter: '1 hour',
      frequency: 'Per new setter',
      monthlyHours: 3
    },
    {
      task: 'Kixie training calls',
      timePerSetter: '2-3 hours',
      frequency: 'Per new setter',
      monthlyHours: 9
    },
    {
      task: 'Troubleshooting access issues',
      timePerSetter: '30-60 min',
      frequency: 'Per setter per week',
      monthlyHours: 12
    }
  ],
  after: [
    {
      task: 'Review auto-onboarding reports',
      timePerSetter: '15 min',
      frequency: 'Per new setter',
      monthlyHours: 1
    },
    {
      task: 'Spot-check training completion',
      timePerSetter: '15 min',
      frequency: 'Per new setter',
      monthlyHours: 1
    }
  ],
  totalBefore: 30,
  totalAfter: 2,
  timeSaved: 28
};

export const setterOnboardingSystem = {
  title: 'Setter Onboarding System',
  subtitle: 'Giving Brooklyn her time back',
  currentProblem: 'Brooklyn spends 4-8 hours per setter on manual Slack invites, GHL access, Kixie training, and troubleshooting.',
  solution: 'Anthony builds an automated onboarding system',
  automationSteps: [
    {
      step: 'New setter hired',
      automation: 'Auto-triggered workflow',
      result: 'Slack invite sent instantly'
    },
    {
      step: 'Setter accepts Slack',
      automation: 'GHL access auto-provisioned',
      result: 'Login credentials sent via email'
    },
    {
      step: 'GHL login detected',
      automation: 'Kixie training module unlocked',
      result: 'Video walkthrough + practice dialer'
    },
    {
      step: 'Training complete',
      automation: 'Manager notification sent',
      result: 'Brooklyn reviews in 15 minutes'
    }
  ],
  impact: {
    brooklynTimeSaved: '28 hours/month',
    setterTimeToProductivity: '2 days → 4 hours',
    roiAnnual: '$50,400 (at $150/hr opportunity cost)'
  }
};
