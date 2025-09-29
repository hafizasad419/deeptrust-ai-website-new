export interface LegalSection {
  id: string;
  title: string;
  content: string;
  items?: string[];
  subsections?: LegalSubsection[];
}

export interface LegalSubsection {
  id: string;
  title: string;
  content: string;
  items?: string[];
}

export const accessibilityData: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: "At DeepTrust AI, accessibility is not an afterthought — it's a core part of our mission to build technology that enables trust for everyone. We are committed to ensuring that all individuals, including people with disabilities, can fully access and benefit from our platform.",
    items: [
      "Our goal is to meet or exceed Web Content Accessibility Guidelines (WCAG) 2.1 AA standards across our website and applications. Accessibility is an ongoing journey, and we've made it a key part of our product and compliance roadmap."
    ]
  },
  {
    id: "our-approach",
    title: "Our Approach",
    subsections: [
      {
        id: "design-principles",
        title: "Design Principles",
        items: [
          "We incorporate accessibility requirements into our design and development processes from the start.",
          "We follow WCAG 2.1 AA guidelines for color contrast, readability, navigation, and interaction design."
        ]
      },
      {
        id: "testing-validation",
        title: "Testing and Validation",
        items: [
          "We regularly test our website and platform using accessibility tools, screen readers, and browser plugins.",
          "We monitor user feedback and conduct audits to identify and fix accessibility issues."
        ]
      },
      {
        id: "inclusive-features",
        title: "Inclusive Features",
        items: [
          "Alt text provided for images and meaningful visuals.",
          "Semantic HTML for clear structure and navigation.",
          "Keyboard navigation support for users who do not use a mouse.",
          "ARIA attributes used where needed to enhance assistive technology compatibility."
        ]
      },
      {
        id: "continuous-improvement",
        title: "Continuous Improvement",
        items: [
          "Accessibility improvements are included in our ongoing product roadmap.",
          "We partner with accessibility experts and stay updated with evolving standards.",
          "We recognize accessibility as part of trust — and trust is the foundation of our platform."
        ]
      }
    ]
  },
  {
    id: "feedback-commitment",
    title: "Feedback & Commitment",
    content: "We welcome feedback from our community to help us improve accessibility further.",
    items: [
      "If you encounter any accessibility barriers or need assistance, please contact us:",
      "📧 support@mydeeptrust.ai",
      "We will respond promptly and work with you to resolve the issue."
    ]
  },
  {
    id: "roadmap",
    title: "Roadmap for Accessibility",
    items: [
      "Ongoing WCAG 2.1 AA compliance testing.",
      "Accessibility audits conducted annually (or more frequently as needed).",
      "Accessibility integrated into quality assurance (QA) and release cycles.",
      "Future goals: explore WCAG 2.2 compliance, enhanced accessibility training for developers, and formal third-party accessibility certification."
    ]
  }
];

export const accessibilityMeta = {
  title: "Accessibility at DeepTrust AI"
};
