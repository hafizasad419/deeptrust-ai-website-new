// Mock data for DeepTrust AI website

export const mockAdvisors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Former VP of Strategy, Salesforce",
    company: "Salesforce",
    bio: "Led enterprise relationship initiatives that drove $2B+ in pipeline growth. Expert in trust-based selling methodologies.",
    quote: "DeepTrust AI is pioneering the next category in enterprise growth — trust enablement.",
    image: "/api/placeholder/200/200"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "CEO & Co-Founder",
    company: "NetworkGen AI",
    bio: "Serial entrepreneur with 3 successful exits. Specialist in AI-powered business relationship platforms.",
    quote: "This is the relationship intelligence system every executive has been waiting for.",
    image: "/api/placeholder/200/200"
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    title: "Chief Technology Officer",
    company: "TrustMetrics Inc",
    bio: "PhD in Social Network Analysis. Pioneer in quantifying relationship strength and trust coefficients.",
    quote: "The science behind DeepTrust AI is groundbreaking — it's relationship intelligence at scale.",
    image: "/api/placeholder/200/200"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Managing Director",
    company: "Venture Capital Partners",
    bio: "20+ years in enterprise sales and relationship management. Expert in scaling trust-based growth strategies.",
    quote: "Finally, a platform that treats relationships as the strategic asset they truly are.",
    image: "/api/placeholder/200/200"
  }
];

export const mockFeatures = [
  {
    id: 1,
    title: "Trust Coefficient™",
    description: "Measure and track trust strength across your network with our proprietary algorithm",
    icon: "TrendingUp"
  },
  {
    id: 2,
    title: "Smart Notifications",
    description: "Receive timely notifications for relationship maintenance and opportunity identification",
    icon: "Bell"
  },
  {
    id: 3,
    title: "Context-Aware Suggestions",
    description: "AI-generated drafts and recommendations that you can approve, edit, or customize",
    icon: "Brain"
  },
  {
    id: 4,
    title: "Relationship Memory",
    description: "Track commitments, milestones, and important moments across all your connections",
    icon: "Calendar"
  },
  {
    id: 5,
    title: "Referral Path Analyzer",
    description: "Discover warm introduction paths through your network for new opportunities",
    icon: "Network"
  },
  {
    id: 6,
    title: "Cultural Intelligence",
    description: "Adapt communication tone and etiquette based on cultural and personal preferences",
    icon: "Globe"
  }
];

export const mockWorkflow = [
  {
    id: 1,
    title: "Import & Enrich",
    description: "Connect your Gmail, Outlook, LinkedIn, and CRM to automatically import and enrich contact data",
    icon: "Upload"
  },
  {
    id: 2,
    title: "Create Your Networks & Define Your ICPs",
    description: "Create your professional networks and build out your Ideal Client Profiles",
    icon: "Users"
  },
  {
    id: 3,
    title: "Analyze & Recommend",
    description: "AI analyzes relationship patterns and designs Trust Enabelment Strategies",
    icon: "Search"
  },
  {
    id: 4,
    title: "Monitor & Notify",
    description: "AI monitors network connections, enhances profiles, suggests engagement that builds trust",
    icon: "Eye"
  },
  {
    id: 5,
    title: "Generate Quality Referrals",
    description: "AI will assess all networks for ideal referrals, and suggest engagement content",
    icon: "Target"
  }
];

export const mockPricingPlans = [
  {
    id: 1,
    name: "Individual",
    price: 197,
    period: "month",
    yearlyDiscount: 20,
    features: [
      "1 seat",
      "3 networks",
      "50 contacts",
      "Weekly monitoring",
      "Custom AI Trust Agent"
    ],
    popular: false
  },
  {
    id: 2,
    name: "SMB",
    price: 788,
    period: "month",
    additionalSeat: 147,
    yearlyDiscount: 20,
    features: [
      "5 seats",
      "250 contacts",
      "Twice-weekly monitoring",
      "Shared referral maps & analytics",
      "Priority support"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: 5000,
    period: "month",
    additionalSeat: 125,
    yearlyDiscount: 20,
    features: [
      "50 seats",
      "500 contacts/person",
      "Daily monitoring",
      "Full integrations",
      "Dedicated support",
      "Custom onboarding"
    ],
    popular: false
  }
];

export const mockStats = [
  {
    label: "C-Level referrals per year",
    value: "100–300"
  },
  {
    label: "Deals closed consistently",
    value: "6–7 figure"
  },
  {
    label: "Executive relationship expertise",
    value: "15+ years"
  }
];

// Animation variants for framer motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};