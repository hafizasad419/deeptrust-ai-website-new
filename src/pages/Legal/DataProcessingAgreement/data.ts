export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  items?: string[];
  subsections?: LegalSubsection[];
}

export interface LegalSubsection {
  id: string;
  title: string;
  content?: string;
  items?: string[];
}

export const dataProcessingAgreementData: LegalSection[] = [
  {
    id: "definitions",
    title: "1. Definitions",
    items: [
      "\"Data Protection Laws\" means all applicable data protection and privacy laws, including the EU GDPR, UK GDPR, CCPA, LGPD, and similar laws.",
      "\"Personal Data\" means any information relating to an identified or identifiable natural person processed by DeepTrust AI on behalf of Controller.",
      "\"Processing\" means any operation performed on Personal Data, including collection, storage, retrieval, use, disclosure, or erasure.",
      "\"Sub-Processor\" means any third party engaged by DeepTrust AI to process Personal Data."
    ]
  },
  {
    id: "roles-parties",
    title: "2. Roles of the Parties",
    items: [
      "Controller: Determines the purpose and means of processing Personal Data.",
      "Processor (DeepTrust AI): Processes Personal Data on behalf of Controller, only in accordance with Controller's instructions."
    ]
  },
  {
    id: "scope-purpose",
    title: "3. Scope and Purpose",
    content: "DeepTrust AI will process Personal Data solely:",
    items: [
      "To provide the Services described in the Agreement.",
      "To comply with Controller's documented instructions.",
      "To maintain and improve security, investigate abuse, and comply with applicable law."
    ]
  },
  {
    id: "data-categories",
    title: "4. Data Subject Categories and Types of Data",
    items: [
      "Categories of Data Subjects: end users, employees, contractors, advisors, contacts in customer networks.",
      "Types of Personal Data: names, email addresses, contact metadata, message metadata, calendar event details, and any user-provided notes or tags.",
      "Special Categories: DeepTrust AI does not require or intentionally process special category data (sensitive data) unless explicitly provided by Controller."
    ]
  },
  {
    id: "processor-obligations",
    title: "5. Processor Obligations",
    content: "DeepTrust AI shall:",
    items: [
      "Process Personal Data only in accordance with Controller's instructions.",
      "Ensure personnel authorized to process data are bound by confidentiality.",
      "Implement technical and organizational security measures, including encryption in transit and at rest, role-based access controls, and audit logging.",
      "Notify Controller without undue delay upon becoming aware of a data breach.",
      "Assist Controller in responding to Data Subject requests (access, correction, erasure, portability, restriction, objection).",
      "Assist Controller in complying with data protection impact assessments (DPIAs) and consultations with supervisory authorities.",
      "Delete or return all Personal Data at the end of the Agreement, except where retention is required by law."
    ]
  },
  {
    id: "sub-processors",
    title: "6. Sub-Processors",
    items: [
      "Controller authorizes DeepTrust AI to engage Sub-Processors necessary to deliver the Services (e.g., cloud hosting, analytics).",
      "DeepTrust AI will maintain a current list of Sub-Processors, which will be made available upon request to support@mydeeptrust.ai.",
      "DeepTrust AI will ensure Sub-Processors are bound by written agreements providing no less protection than this DPA.",
      "Controller may request to be notified of new Sub-Processors and may object to material changes within 30 days of notice."
    ]
  },
  {
    id: "international-transfers",
    title: "7. International Transfers",
    items: [
      "DeepTrust AI may transfer Personal Data outside the EEA, UK, or other regions only where adequate safeguards are in place.",
      "Standard Contractual Clauses (SCCs) are incorporated by reference for such transfers.",
      "Where required, DeepTrust AI will implement supplementary measures to ensure equivalent protection."
    ]
  },
  {
    id: "data-subject-rights",
    title: "8. Data Subject Rights",
    content: "DeepTrust AI will:",
    items: [
      "Forward requests from Data Subjects to Controller.",
      "Provide tools for Controller to fulfill rights under GDPR/CCPA, including export, erasure, and revocation of integrations (Google/Microsoft)."
    ]
  },
  {
    id: "security",
    title: "9. Security",
    content: "DeepTrust AI will implement security measures appropriate to the risk, including but not limited to:",
    items: [
      "Encryption (AES-256 at rest, TLS 1.2+ in transit).",
      "Role-based access controls.",
      "Regular penetration testing and vulnerability management.",
      "Logging and monitoring of access."
    ]
  },
  {
    id: "data-breach-notification",
    title: "10. Data Breach Notification",
    content: "In the event of a Personal Data breach, DeepTrust AI shall notify Controller without undue delay (and in any case within 72 hours of confirmation), including:",
    items: [
      "The nature of the breach.",
      "Categories and approximate number of data subjects affected.",
      "Likely consequences.",
      "Measures taken or proposed to mitigate harm."
    ]
  },
  {
    id: "audit-rights",
    title: "11. Audit Rights",
    items: [
      "Controller may request information to verify compliance with this DPA.",
      "Once per year, with 30 days' notice, Controller may conduct (or appoint an independent auditor to conduct) an on-site or remote audit, subject to confidentiality.",
      "DeepTrust AI will reasonably cooperate and remediate material issues identified."
    ]
  },
  {
    id: "term-termination",
    title: "12. Term and Termination",
    content: "This DPA is effective as long as DeepTrust AI processes Personal Data on behalf of Controller. Upon termination, DeepTrust AI will delete or return all Personal Data, unless retention is required by law."
  },
  {
    id: "governing-law",
    title: "13. Governing Law",
    content: "This DPA is governed by the same law and jurisdiction as the Agreement (Maryland, USA, unless otherwise specified in an enterprise Order Form)."
  },
  {
    id: "contact",
    title: "14. Contact for Data Protection Matters",
    content: "If you have questions or requests regarding this DPA or data protection, contact:",
    items: [
      "Email: support@mydeeptrust.ai",
      "Address: 7520 Standish Pl, Suite 260, Rockville, MD 20855"
    ]
  }
];

export const dataProcessingAgreementMeta = {
  title: "Data Processing Agreement (DPA)",
  effectiveDate: "September 1, 2025"
};
