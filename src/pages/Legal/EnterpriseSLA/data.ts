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

export const enterpriseSLAData: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: "DeepTrust AI is built for reliability, scalability, and enterprise performance. This Service Level Agreement (\"SLA\") outlines our commitments to system availability and support response times for enterprise customers."
  },
  {
    id: "service-commitment",
    title: "Service Commitment",
    subsections: [
      {
        id: "uptime-guarantee",
        title: "Uptime Guarantee",
        content: "DeepTrust AI commits to 99.9% monthly uptime, excluding:",
        items: [
          "Planned maintenance (communicated in advance).",
          "Force majeure events (e.g., natural disasters, internet backbone outages, acts of government)."
        ]
      },
      {
        id: "monitoring",
        title: "Monitoring",
        content: "Our systems are monitored 24/7/365 to ensure availability and rapid detection of issues."
      },
      {
        id: "maintenance",
        title: "Maintenance",
        items: [
          "Planned maintenance is communicated to customers in advance via email or system notifications.",
          "Whenever possible, maintenance will be performed during off-peak hours to minimize disruption."
        ]
      }
    ]
  },
  {
    id: "support-commitment",
    title: "Support Commitment",
    content: "We categorize issues by severity and provide the following response times:",
    subsections: [
      {
        id: "critical-issues",
        title: "Critical Issues (Severity 1)",
        content: "Platform unavailable or severely degraded.",
        items: [
          "Response time: within 4 hours (24/7)."
        ]
      },
      {
        id: "high-priority",
        title: "High Priority (Severity 2)",
        content: "Major feature impaired but platform usable.",
        items: [
          "Response time: within 1 business day."
        ]
      },
      {
        id: "normal-priority",
        title: "Normal Priority (Severity 3)",
        content: "Minor issues, general questions, or cosmetic defects.",
        items: [
          "Response time: within 2 business days."
        ]
      }
    ]
  },
  {
    id: "remedies",
    title: "Remedies",
    content: "If DeepTrust AI fails to meet the uptime commitment in a given month:",
    items: [
      "Affected enterprise customers may request service credits.",
      "Service credits may be applied against future invoices, subject to terms in the customer's Order Form or Master Services Agreement.",
      "Service credits are the customer's sole and exclusive remedy for breach of the uptime commitment."
    ]
  },
  {
    id: "exclusions",
    title: "Exclusions",
    content: "This SLA does not apply to:",
    items: [
      "Downtime caused by factors outside of DeepTrust AI's reasonable control.",
      "Downtime resulting from customer misuse or failure to follow documentation.",
      "Issues related to third-party software, services, or APIs (including Google or Microsoft integrations).",
      "Beta or trial features offered without SLA coverage."
    ]
  },
  {
    id: "questions",
    title: "Questions",
    content: "For SLA-related inquiries, please contact:",
    items: [
      "📧 support@mydeeptrust.ai"
    ]
  }
];

export const enterpriseSLAMeta = {
  title: "Enterprise Service Level Agreement (SLA)"
};
