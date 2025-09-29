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

export const subProcessorsData: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: "To provide DeepTrust AI, we rely on carefully selected third-party service providers (\"Sub-Processors\"). These providers help us deliver secure, scalable, and reliable services while meeting enterprise expectations for privacy and security.",
    items: [
      "We recognize that when you entrust DeepTrust AI with your data, you also entrust the providers we use. That's why every Sub-Processor is vetted for security and compliance before engagement."
    ]
  },
  {
    id: "our-practices",
    title: "Our Practices",
    items: [
      "Strict Standards: We only engage Sub-Processors who meet rigorous data protection, confidentiality, and security requirements.",
      "Written Agreements: All Sub-Processors are bound by contracts that meet or exceed our own data protection obligations under GDPR, CCPA, LGPD, and other global privacy frameworks.",
      "Transparency: We maintain a list of all active Sub-Processors and will provide it upon request.",
      "Change Notification: Customers may request to be notified of new Sub-Processors and object to material changes within 30 days."
    ]
  },
  {
    id: "current-sub-processors",
    title: "Current Sub-Processor List",
    content: "DeepTrust AI uses Sub-Processors for functions such as:",
    items: [
      "Cloud Hosting & Infrastructure (e.g., compute, storage, networking)",
      "Database & Backup Services",
      "Analytics & Monitoring Tools",
      "Customer Support Systems",
      "Email & Notification Delivery"
    ],
    subsections: [
      {
        id: "action-needed",
        title: "👉 Action needed from you:",
        items: [
          "Which cloud infrastructure provider(s) do you currently use? (e.g., AWS, Google Cloud, Azure)",
          "Do you use any analytics or monitoring tools (e.g., Datadog, New Relic, LogRocket, etc.)?",
          "Which customer support platform do you use (if any)? (e.g., Zendesk, Intercom, Freshdesk)",
          "Do you have a backup provider or is this handled natively in your cloud platform?",
          "Any other specialized SaaS vendors integrated into your core product delivery?"
        ]
      }
    ]
  },
  {
    id: "access-list",
    title: "How to Access the List",
    content: "We maintain an up-to-date list of Sub-Processors. Customers can request the current list at any time by emailing support@mydeeptrust.ai.",
    items: [
      "If you'd like to subscribe to notifications of updates, please specify this in your request."
    ]
  },
  {
    id: "questions",
    title: "Questions?",
    content: "If you have questions about how we evaluate or manage Sub-Processors, or if you'd like to request our most current list, contact us at:",
    items: [
      "📧 support@mydeeptrust.ai"
    ]
  }
];

export const subProcessorsMeta = {
  title: "Our Sub-Processors"
};
