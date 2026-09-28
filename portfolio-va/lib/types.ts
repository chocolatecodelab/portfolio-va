export interface HeroContent {
  badge: string;
  location: string;
  headline: string;
  disciplines: string[];
  subheadline: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface PillarItem {
  id: string;
  title: string;
  examples: string[];
  relatedSection?: string;
}

export interface PillarsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  pillars: PillarItem[];
}

export interface WorkItem {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  results: string[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  videoUrl?: string;
}

export interface TechnicalCapabilityContent {
  heading: string;
  note: string;
  portfolioLabel: string;
  portfolioUrl: string;
}

export interface HowIWorkStep {
  step: string;
  title: string;
  description: string;
}

export interface HowIWorkContent {
  sectionTitle: string;
  tagline: string;
  steps: HowIWorkStep[];
}

export interface ToolCategory {
  name: string;
  tools: string[];
}

export interface ToolsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  categories: ToolCategory[];
}

export interface CredentialItem {
  label: string;
  detail: string;
}

export interface AboutContent {
  sectionTitle: string;
  bio: string[];
  credentials: CredentialItem[];
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface ContactMeta {
  location: string;
  timezone: string;
  status: string;
  copyright: string;
}

export interface ContactContent {
  sectionTitle: string;
  subtitle: string;
  ctaButton: {
    label: string;
    href: string;
  };
  contactChannels: ContactChannel[];
  meta: ContactMeta;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationContent {
  brand: string;
  role: string;
  navItems: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface ProtocolPrinciple {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export interface ProtocolContent {
  sectionTitle: string;
  sectionSubtitle: string;
  principles: ProtocolPrinciple[];
  reassurance: string;
}

export interface EngagementModelItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  bestFor: string;
  deliverables: string[];
  cadence: string;
  ctaLabel: string;
}

export interface EngagementModelsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  models: EngagementModelItem[];
  customNote: string;
}

export interface CalculatorSliderConfig {
  label: string;
  description: string;
  min: number;
  max: number;
  step: number;
  default: number;
  unit: string;
}

export interface CalculatorContent {
  sectionTitle: string;
  sectionSubtitle: string;
  inputs: {
    hours: CalculatorSliderConfig;
    rate: CalculatorSliderConfig;
    teamSize: CalculatorSliderConfig;
  };
  metrics: {
    hoursReclaimedMonthly: string;
    hoursReclaimedAnnual: string;
    annualValueReclaimed: string;
    efficiencyRate: number;
    efficiencyNote: string;
  };
  recommendations: {
    badge: string;
    sprintTitle: string;
    sprintCondition: string;
    retainerTitle: string;
    retainerCondition: string;
    ctaLabel: string;
  };
  footnote: string;
}

