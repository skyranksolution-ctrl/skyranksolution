export interface ServiceItem {
  slug: string;
  title: string;
  navTitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string[];
  icon: string;
  heroHeadline: string;
  features: { title: string; description: string }[];
  deliverables: string[];
  processSteps: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  targetAudience: string[];
  relatedServices: string[];
}

export interface CityLandingItem {
  slug: string;
  cityName: string;
  state: string;
  country: string;
  headline: string;
  subheadline: string;
  marketOverview: string;
  localChallenges: { title: string; description: string }[];
  strategies: { title: string; description: string }[];
  keyIndustries: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  clientNamePlaceholder: string;
  industry: string;
  timeline: string;
  startingPosition: string;
  challenges: string[];
  strategy: string[];
  workPerformed: string[];
  results: { metric: string; label: string; context: string }[];
  summary: string;
  isDemo: boolean;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  excerpt: string;
  tableOfContents: { id: string; title: string }[];
  contentSections: {
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  targetBusiness: string;
  keywordTargeting: string;
  features: string[];
  deliverables: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  keyBenefits: string[];
  focusAreas: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
