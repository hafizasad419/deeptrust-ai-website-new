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

export const securityTrustData: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: "At DeepTrust AI, security and trust are at the core of everything we do. We understand that the foundation of trusted relationships is protecting your data. That's why our platform is built with enterprise-grade security, privacy, and compliance safeguards designed to meet the highest industry standards.",
    items: [
      "We view trust not as a feature, but as the foundation of our product and company."
    ]
  },
  {
    id: "security-commitments",
    title: "Our Security Commitments",
    subsections: [
      {
        id: "encryption",
        title: "Encryption",
        items: [
          "All data encrypted in transit (TLS 1.2+)",
          "All data encrypted at rest (AES-256)",
          "Keys managed securely and rotated regularly"
        ]
      },
      {
        id: "access-control",
        title: "Access Control",
        items: [
          "Role-Based Access Control (RBAC) and least-privilege",
          "Multi-Factor Authentication (MFA) for privileged access",
          "Session timeouts and re-auth for sensitive actions"
        ]
      },
      {
        id: "monitoring-logging",
        title: "Monitoring & Logging",
        items: [
          "24/7 infrastructure and application monitoring",
          "Audit logging of access to sensitive systems and data",
          "Anomaly detection to flag unusual activity"
        ]
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        items: [
          "Hosted on Supabase with globally recognized certifications (e.g., ISO 27001, SOC)",
          "Redundancy, failover, and physically secure data centers",
          "Tested business continuity and disaster recovery plans"
        ]
      }
    ]
  },
  {
    id: "compliance-roadmap",
    title: "Compliance Roadmap",
    items: [
      "SOC 2 Type II certification in progress",
      "GDPR, CCPA, LGPD ready practices embedded across the product and organization",
      "Alignment with NIST cybersecurity frameworks for continuous improvement"
    ]
  },
  {
    id: "breach-notification",
    title: "Breach Notification",
    content: "In the unlikely event of a confirmed data breach, we will:",
    items: [
      "Notify affected customers without undue delay (and within 72 hours where required by law)",
      "Share incident details, impacted data, and remediation steps",
      "Work transparently with customers and regulators"
    ]
  },
  {
    id: "responsible-disclosure",
    title: "Responsible Disclosure",
    content: "We welcome collaboration from the security research community. If you believe you've identified a vulnerability:",
    items: [
      "Email support@mydeeptrust.ai with detailed steps to reproduce",
      "We acknowledge reports within 72 hours and prioritize validation/remediation",
      "Safe Harbor: We will not pursue legal action against good-faith researchers following responsible disclosure"
    ]
  },
  {
    id: "data-protection-practices",
    title: "Data Protection Practices",
    items: [
      "Privacy by Design: Security and privacy embedded throughout development lifecycles",
      "Data Minimization: Collect only what's needed to deliver value",
      "User Control: Export, revoke integrations, or delete your data at any time",
      "Sub-Processors: Carefully vetted vendors under strict DPAs; current list available upon request at support@mydeeptrust.ai"
    ]
  },
  {
    id: "global-compliance",
    title: "Global Compliance Highlights",
    items: [
      "GDPR / UK GDPR: Rights of access, rectification, erasure, portability, restriction, and objection supported",
      "CCPA/CPRA: No sale of data; access and deletion rights supported",
      "LGPD: Lawful basis and transparency observed",
      "International Transfers: Protected via Standard Contractual Clauses (SCCs) and appropriate safeguards"
    ]
  },
  {
    id: "security-roadmap",
    title: "Security Roadmap",
    items: [
      "Complete SOC 2 Type II audit",
      "Regular third-party penetration testing and vulnerability management",
      "Expanded automated anomaly detection and threat intel",
      "Enterprise controls: SSO (SAML/SCIM), enhanced audit logs, customer-managed encryption keys (CMEK)"
    ]
  },
  {
    id: "questions",
    title: "Questions?",
    content: "We're happy to provide additional details (e.g., security whitepaper, pen-test summaries under NDA).",
    items: [
      "📧 support@mydeeptrust.ai"
    ]
  }
];

export const securityTrustMeta = {
  title: "Security & Trust at DeepTrust AI"
};
