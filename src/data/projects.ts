export interface Metric {
  label: string;
  value: number | string;
  suffix?: string;
  prefix?: string;
  growth?: string;
}

export interface PlatformStats {
  platform: string;
  icon: string;
  color: string;
  views: number;
  viewsFormatted: string;
  viewsGrowth: string;
  newFollowers: number;
  followersGrowth: string;
  totalFollowers: number;
  highlights: { label: string; value: string; growth?: string }[];
}

export interface CompletedProject {
  id: string;
  title: string;
  status: 'completed';
  icon: string;
  before: string;
  after: string;
  metrics: Metric[];
  valueProposition?: string[];
  hasSocialMediaData?: boolean;
}

export interface InProgressProject {
  id: string;
  title: string;
  status: 'in-progress';
  icon: string;
  description: string;
  progress: number;
  components?: string[];
  currentStats?: Metric[];
}

export interface FutureProject {
  id: string;
  title: string;
  status: 'planned';
  icon: string;
  currentState?: string;
  targetState?: string;
  description: string;
  opportunity: string[];
  potentialImpact?: string;
}

export interface RoadmapProject {
  id: string;
  priority: number;
  title: string;
  icon: string;
  status: 'to-build' | 'ready' | 'in-progress';
  timeline: string;
  timelineWeeks: number;
  effort: 'Low' | 'Medium' | 'High';
  impactLevel: 1 | 2 | 3;
  impactLabel: string;
  problem: string;
  opportunity: string;
  whatWellBuild: string[];
  projectedImpact: {
    description: string;
    revenue?: string;
  };
  additionalDetails?: {
    label: string;
    items: { trigger: string; action: string }[];
  };
}

export interface FunnelStage {
  id: string;
  label: string;
  sublabel?: string;
  status: 'solved' | 'leak' | 'built';
  detail?: string;
}

// Social Media Growth Data (Last 90 days: Sep 26 - Dec 25, 2025)
export const socialMediaStats = {
  period: 'Last 90 Days',
  dateRange: 'Sep 26 - Dec 25, 2025',
  totalViews: 6760000,
  totalViewsFormatted: '6.76M',
  totalNewFollowers: 10843,
  totalAudience: 144220,
  platforms: [
    {
      platform: 'Facebook',
      icon: 'Facebook',
      color: 'blue',
      views: 5500000,
      viewsFormatted: '5.5M',
      viewsGrowth: '↑238%',
      newFollowers: 5375,
      followersGrowth: '↑61.8%',
      totalFollowers: 44723,
      highlights: [
        { label: 'Watch Time', value: '115 days 7 hrs', growth: '↑13,300%' },
        { label: 'Interactions', value: '64.4K', growth: '↑379%' },
        { label: 'Reels Published', value: '42', growth: '↑1,800%' },
        { label: 'Non-Follower Reach', value: '93.2%' },
        { label: 'Conversations Started', value: '111', growth: '↑54.2%' },
        { label: 'New Contacts', value: '90', growth: '↑47.5%' },
      ],
    },
    {
      platform: 'Instagram',
      icon: 'Instagram',
      color: 'pink',
      views: 1200000,
      viewsFormatted: '1.2M',
      viewsGrowth: '↑601%',
      newFollowers: 4700,
      followersGrowth: '↑110.9%',
      totalFollowers: 86507,
      highlights: [
        { label: 'Reach', value: '382.8K', growth: '↑534%' },
        { label: 'Content Interactions', value: '19.5K', growth: '↑1,100%' },
        { label: 'Post Interactions', value: '2.2K', growth: '↑430%' },
        { label: 'Content Published', value: '+100%' },
      ],
    },
    {
      platform: 'YouTube',
      icon: 'Youtube',
      color: 'red',
      views: 57100,
      viewsFormatted: '57.1K',
      viewsGrowth: '↑245%',
      newFollowers: 768,
      followersGrowth: '↑40%',
      totalFollowers: 12990,
      highlights: [
        { label: 'Watch Time', value: '1,800 hrs', growth: '↑19%' },
        { label: 'Shorts Views', value: '40.0K', growth: '↑>999%' },
        { label: 'Shorts Likes', value: '1.9K', growth: '↑>999%' },
        { label: 'New Viewers', value: '82.3%' },
      ],
    },
  ] as PlatformStats[],
  keyInsights: [
    '93.2% of Facebook views came from NON-followers — massive discovery',
    'YouTube Shorts went from essentially zero to 40K views (>999% increase)',
    '120 new people discovering LSR every single day',
    'Consistent automated posting drove algorithm rewards across all platforms',
  ],
};

export const completedProjects: CompletedProject[] = [
  {
    id: 'reels-automation',
    title: 'Reels Automation Workflow',
    status: 'completed',
    icon: 'Video',
    before: 'Manual posting to 3 platforms (Instagram, YouTube, Facebook). 1-2 minutes per platform, inconsistent frequency, done by human team member.',
    after: 'Fully automated daily posting across all platforms. Zero manual time required, consistent daily cadence via Make.com automation.',
    hasSocialMediaData: true,
    metrics: [
      { label: 'Total Views (90 days)', value: '6.76M', growth: 'Combined' },
      { label: 'New Followers', value: '~10,800', growth: '90 days' },
      { label: 'Total Audience', value: '144,220' },
      { label: 'Platforms Automated', value: 3 },
      { label: 'Time Saved Weekly', value: 30, suffix: '+ min' },
      { label: 'Annual Value Saved', value: 792, prefix: '$', suffix: '+' },
    ],
    valueProposition: [
      '6.76 MILLION video views in just 90 days',
      '~10,800 new followers — 120 new people per day',
      '93.2% of Facebook views from NON-followers (algorithm loves consistency)',
      'YouTube Shorts: 0 to 40K views (>999% growth)',
    ],
  },
  {
    id: 'video-tracking',
    title: 'Video Tracking Infrastructure',
    status: 'completed',
    icon: 'BarChart3',
    before: 'Zero tracking on video engagement. No visibility into who watched what or how much.',
    after: 'Full tracking across 5 replay pages with percentage-based segmentation (15%, 30%, 50%, 75%, 90% watch time).',
    metrics: [
      { label: 'Replay Pages Tracked', value: 5 },
      { label: 'Total Page Views', value: 12104 },
      { label: 'Unique Visitors', value: 4694 },
      { label: 'Hot Leads Identified', value: 300, suffix: '+' },
      { label: 'Total Contacts Tracked', value: 469 },
    ],
    valueProposition: [
      '300+ hot leads that were previously INVISIBLE',
      'Sales team now has prioritized prospect list',
      'Zero to Full visibility transformation',
    ],
  },
  {
    id: 'replay-tracking-setup',
    title: 'Tracking Setup for Replay Pages',
    status: 'completed',
    icon: 'Settings',
    before: 'No infrastructure for tracking video engagement across replay pages.',
    after: 'Complete tracking infrastructure with custom fields configured in GHL and team trained on accessing hot lead data.',
    metrics: [
      { label: 'Custom Fields Configured', value: 'Yes' },
      { label: 'Team Training', value: 'Complete' },
      { label: 'Integration Status', value: 'Live' },
    ],
  },
];

export const inProgressProjects: InProgressProject[] = [
  {
    id: 'ondemand-challenge',
    title: 'OnDemand Challenge Infrastructure',
    status: 'in-progress',
    icon: 'Layers',
    description: 'Building comprehensive infrastructure for on-demand challenge delivery with full tracking and analytics.',
    progress: 65,
    components: [
      'Video Tracking (in progress)',
      'Workflow Infrastructure (in progress)',
      'Analytics Reporting (in progress)',
    ],
  },
  {
    id: 'day1-video-tracking',
    title: 'Day 1 Challenge Video Tracking',
    status: 'in-progress',
    icon: 'PlayCircle',
    description: 'Setting up comprehensive tracking for Day 1 challenge videos with team notifications and funnel integration.',
    progress: 75,
    components: [
      'Set up Tracking + custom field for Day 1',
      'Video tracking workflow',
      'Notify team members for video tracking',
      'Replace element on main funnel with Day 1 video element',
    ],
    currentStats: [
      { label: 'Contacts Enrolled', value: 155 },
      { label: 'Workflow Status', value: 'Published' },
    ],
  },
  {
    id: 'seo-blog-flow',
    title: 'SEO Blog Flow - YouTube Transcription',
    status: 'in-progress',
    icon: 'FileText',
    description: 'Converting YouTube content into SEO-optimized blog posts for GHL. Content multiplication without additional creation time.',
    progress: 40,
  },
];

export const futureProjects: FutureProject[] = [
  {
    id: 'video-percentage-workflows',
    title: 'Video Watching Percentage Workflows',
    status: 'planned',
    icon: 'TrendingUp',
    currentState: 'Tracking tags contacts but doesn\'t trigger actions',
    targetState: 'Automated nurture sequences based on watch time',
    description: 'Transform passive tracking into active lead nurturing with automated workflows.',
    opportunity: [
      '50% watchers - Send testimonial sequence',
      '75% watchers - Book-a-call CTA',
      '90% watchers - Direct sales outreach trigger',
    ],
    potentialImpact: 'Automated high-intent lead conversion',
  },
  {
    id: 'speed-to-lead',
    title: 'Speed to Lead System',
    status: 'planned',
    icon: 'Zap',
    currentState: 'Response time measured in HOURS',
    targetState: 'Under 3 minutes',
    description: 'Dramatically improve lead qualification and close rates through rapid response automation.',
    opportunity: [
      'Responding within 5 minutes = 21x more likely to qualify lead',
      '78% of customers buy from first responder',
      'Dramatic close rate improvement potential',
    ],
    potentialImpact: '21x lead qualification improvement',
  },
  {
    id: 'reactivation-campaign',
    title: 'Reactivation Campaign',
    status: 'planned',
    icon: 'RefreshCw',
    description: 'Re-engage the massive existing contact database with targeted reactivation sequences.',
    opportunity: [
      '244,510 total contacts in database',
      'If 1% re-engage: 2,445 reactivated leads',
      'If 0.5% convert to paid: 1,222 new customers',
    ],
    potentialImpact: '1,222+ potential new customers',
  },
  {
    id: 'sales-onboarding',
    title: 'Sales Onboarding System',
    status: 'planned',
    icon: 'UserPlus',
    description: 'Streamlined onboarding process for new sales team members.',
    opportunity: [
      'New hire process documentation',
      'CRM training workflows',
      'Tools onboarding sequences',
      'Performance tracking setup',
    ],
  },
  {
    id: 'sales-optimization',
    title: 'Sales Optimization System',
    status: 'planned',
    icon: 'Target',
    description: 'Enhanced visibility and analytics for sales performance.',
    opportunity: [
      'Pipeline visibility improvements',
      'Conversion tracking',
      'Team performance analytics',
    ],
  },
  {
    id: 'content-automation',
    title: 'Content Writing Automation',
    status: 'planned',
    icon: 'PenTool',
    description: 'AI-assisted content generation for reels and social media.',
    opportunity: [
      'Automated content ideation',
      'AI-powered script writing',
      'Consistent brand voice',
    ],
  },
  {
    id: 'social-engagement',
    title: 'Social Media Engagement Tool',
    status: 'planned',
    icon: 'MessageCircle',
    description: 'Automated comment responses and nurture triggers for social engagement.',
    opportunity: [
      'Automated comment monitoring',
      'Smart response suggestions',
      'Nurture sequence triggers',
    ],
  },
  {
    id: 'sales-ai-agent',
    title: 'Sales AI Agent',
    status: 'planned',
    icon: 'Bot',
    description: 'AI-powered lead qualification and response system.',
    opportunity: [
      'Automated lead qualification',
      'Intelligent response generation',
      '24/7 lead engagement',
    ],
    potentialImpact: 'Round-the-clock lead engagement',
  },
];

export const summaryStats = {
  // Social Media Stats
  totalViews: 6760000,
  totalViewsFormatted: '6.76M',
  totalNewFollowers: 10843,
  totalAudience: 144220,
  // GHL / Tracking Stats
  totalContacts: 244510,
  replayPageViews: 12104,
  uniqueVisitors: 4694,
  hotLeadsIdentified: 300,
  trackedContacts: 469,
  replayPagesTracked: 5,
  // Operational
  platformsAutomated: 3,
  timeSavedWeekly: 30,
  currentSpeedToLead: 'Hours',
  targetSpeedToLead: '< 3 min',
  contractorRate: 33,
};

// 2026 Roadmap Data
export const roadmapProjects: RoadmapProject[] = [
  {
    id: 'speed-to-lead',
    priority: 1,
    title: 'Speed to Lead System',
    icon: 'Zap',
    status: 'to-build',
    timeline: '3-4 weeks',
    timelineWeeks: 4,
    effort: 'Medium',
    impactLevel: 3,
    impactLabel: 'Critical Revenue Recovery',
    problem: 'Current response time to new leads is measured in HOURS. After 30 minutes, lead qualification drops by 21x.',
    opportunity: 'These are people who already raised their hand — filled a form, booked a call, showed intent. They\'re warm and waiting. And right now, they\'re waiting too long.',
    whatWellBuild: [
      'Instant notification system to sales team (SMS + app notification)',
      'Auto-response within 60 seconds (personalized text/email)',
      'Round-robin assignment to available reps',
      'Escalation workflow if no response in 5 minutes',
      'Response time tracking dashboard',
    ],
    projectedImpact: {
      description: 'If 20 calls book monthly and 30% are lost to slow response = 6 lost customers',
      revenue: '$36,000+/year recovered',
    },
  },
  {
    id: 'video-watch-workflows',
    priority: 2,
    title: 'Video Watch Percentage Workflows',
    icon: 'TrendingUp',
    status: 'ready',
    timeline: '3 weeks',
    timelineWeeks: 3,
    effort: 'Low',
    impactLevel: 3,
    impactLabel: 'Immediate ROI (Low Effort)',
    problem: 'We built tracking that identifies 300+ hot leads who watched 50%+ of replay content. They\'re tagged in GoHighLevel. But nothing happens next. They sit there.',
    opportunity: 'This is the lowest-effort, highest-ROI play available. The hard work (tracking infrastructure) is done. We just need to wire up the automated responses.',
    whatWellBuild: [
      'Testimonial/social proof sequence for 50% watchers',
      'Book-a-call CTA + urgency messaging for 75% watchers',
      'Sales team alert for direct outreach to 90% watchers',
    ],
    projectedImpact: {
      description: '300 hot leads currently sitting idle. If 10% convert to calls = 30 new calls. If 20% close = 6 new customers/month.',
      revenue: '$36-72K/year new revenue',
    },
    additionalDetails: {
      label: 'Trigger Actions',
      items: [
        { trigger: '50% watched', action: 'Trigger testimonial/social proof sequence' },
        { trigger: '75% watched', action: 'Push book-a-call CTA + urgency messaging' },
        { trigger: '90% watched', action: 'Alert sales team for direct personal outreach' },
      ],
    },
  },
  {
    id: 'social-engagement',
    priority: 3,
    title: 'Social Media Engagement System',
    icon: 'MessageCircle',
    status: 'to-build',
    timeline: '4-5 weeks',
    timelineWeeks: 5,
    effort: 'Medium',
    impactLevel: 2,
    impactLabel: 'High Leverage for Brand + Conversions',
    problem: '6.76 million views generated thousands of comments. Comments = highest intent signal on social media. Currently, these high-intent prospects receive: nothing.',
    opportunity: 'This isn\'t about vanity engagement. It\'s about capturing intent and converting it. Someone who takes time to comment is 10x more likely to convert than a passive viewer.',
    whatWellBuild: [
      'Reply within 1 hour of comment (algorithm boost + trust)',
      'Soft qualifying questions in responses',
      'Route to challenge signup, DM conversation, or lead capture',
      'Get commenters INTO GoHighLevel (comment → lead)',
    ],
    projectedImpact: {
      description: 'If 1% of commenters convert to challenge signups = hundreds of new leads/month. Improved algorithm performance.',
      revenue: 'Brand + Lead Gen multiplier',
    },
  },
  {
    id: 'database-reactivation',
    priority: 4,
    title: 'Database Reactivation Campaign',
    icon: 'RefreshCw',
    status: 'to-build',
    timeline: '5-6 weeks',
    timelineWeeks: 6,
    effort: 'Medium',
    impactLevel: 3,
    impactLabel: 'Massive Potential (If Done Right)',
    problem: '244,510 contacts sitting in GoHighLevel. Most are cold. This is either a goldmine or a liability depending on how we approach it.',
    opportunity: 'Even 0.5% reactivation = 1,222 potential customers. Careful segmentation and value-first approach prevents list burn.',
    whatWellBuild: [
      'Segmentation by last engagement (6mo, 12mo, 18mo+)',
      'Value-first re-engagement sequence (NOT sales pitch)',
      'Routing: Engaged → funnel, No response → suppress',
      'Automated list cleaning & engagement scoring',
    ],
    projectedImpact: {
      description: 'If 2% of 6-month segment re-engages = ~2,000 leads. If 5% convert = 100 new customers.',
      revenue: '$50,000+ potential recovery',
    },
  },
  {
    id: 'sales-systems',
    priority: 5,
    title: 'Sales Onboarding & Optimization',
    icon: 'Users',
    status: 'to-build',
    timeline: '6-8 weeks',
    timelineWeeks: 8,
    effort: 'High',
    impactLevel: 2,
    impactLabel: 'Multiplier Effect on All Systems',
    problem: 'Every system above feeds the sales team. If sales processes are inconsistent or dependent on tribal knowledge, we\'re building on a shaky foundation.',
    opportunity: 'A systematized sales operation means: new hires ramp faster, performance is measurable, and every other system converts better.',
    whatWellBuild: [
      'Process documentation (SOPs)',
      'CRM training workflows',
      '30/60/90 day milestone tracking',
      'Pipeline visibility dashboard',
      'Stage-by-stage conversion tracking',
      'Team performance analytics',
    ],
    projectedImpact: {
      description: 'Faster rep ramp time. Even 5% close rate improvement = significant revenue. Scalable foundation for growth.',
      revenue: 'Multiplier on all above',
    },
  },
];

export const funnelStages: FunnelStage[] = [
  {
    id: 'top-of-funnel',
    label: 'TOP OF FUNNEL',
    sublabel: '6.76M Views | 11K Followers',
    status: 'solved',
    detail: 'Automation Working',
  },
  {
    id: 'social-engagement-gap',
    label: 'Social Engagement Gap',
    status: 'leak',
    detail: 'Thousands comment → Zero follow-up → Lost opportunity',
  },
  {
    id: 'video-tracking',
    label: 'Video Tracking Infrastructure',
    status: 'built',
    detail: '300+ hot leads identified watching 50%+ of content',
  },
  {
    id: 'no-nurture',
    label: 'No Automated Nurture',
    status: 'leak',
    detail: 'Hot leads tagged but not triggered into sequences',
  },
  {
    id: 'speed-to-lead-gap',
    label: 'Speed to Lead Problem',
    status: 'leak',
    detail: 'Response time: HOURS | Industry standard: <5 MINUTES',
  },
  {
    id: 'bottom-of-funnel',
    label: 'BOTTOM OF FUNNEL',
    sublabel: 'Closed Deals / Revenue',
    status: 'solved',
  },
];

export const roadmapSummary = {
  totalTimeline: '20-26 weeks (5-6 months)',
  totalRevenueImpact: '$120K-200K+ annually',
  q1q2Timeline: 'Q1-Q2 2026',
};
