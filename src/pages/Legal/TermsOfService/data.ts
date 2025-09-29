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

export const termsOfServiceData: LegalSection[] = [
  {
    id: "agreement-to-terms",
    title: "1. Agreement to Terms",
    content: "By accessing or using DeepTrust AI (\"DeepTrust AI,\" \"we,\" \"our,\" \"us,\" or \"the Service\"), you agree to these Terms of Service (\"Terms\"), our Privacy Policy, and any applicable Order Forms or subscription agreements. If you do not agree, you may not use the Service.",
    items: [
      "If you are entering into this Agreement on behalf of an organization, you represent that you have authority to bind the organization."
    ]
  },
  {
    id: "the-service",
    title: "2. The Service",
    content: "DeepTrust AI provides A Trust Enablement Platform that helps individuals and organizations manage, enhance, and expand their trusted relationships. The Service may include web and mobile applications, APIs, and integrations with third-party platforms such as Google Workspace (Gmail, Calendar) and Microsoft 365 (Outlook Mail, Calendar, Teams)."
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content: "You must be at least 16 years old to use the Service. If the age of majority in your jurisdiction is higher, you must meet that minimum age."
  },
  {
    id: "accounts-security",
    title: "4. Accounts and Security",
    items: [
      "You must provide accurate registration information.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "You agree to promptly notify us of any unauthorized use of your account.",
      "We reserve the right to suspend or terminate accounts for suspicious or abusive activity."
    ]
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use",
    content: "You agree not to:",
    items: [
      "Use the Service for spam, harassment, or illegal purposes.",
      "Misuse Google, Microsoft, or other API integrations beyond the scopes you authorized.",
      "Attempt to reverse engineer, decompile, or disrupt the Service.",
      "Infringe intellectual property rights or violate applicable laws."
    ],
    subsections: [
      {
        id: "violation-consequences",
        title: "Violation Consequences",
        content: "DeepTrust AI may suspend or terminate accounts that violate these rules."
      }
    ]
  },
  {
    id: "user-data-integrations",
    title: "6. User Data and Integrations",
    items: [
      "Google & Microsoft APIs: If you connect Gmail, Outlook, or calendar services, DeepTrust AI will only access the minimum data required to provide visible, user-facing features.",
      "We comply with Google API Services User Data Policy (Limited Use) and Microsoft API Terms of Service.",
      "You retain ownership of your data. By using the Service, you grant us a limited license to process your data solely to provide and improve the Service.",
      "You may revoke access at any time via your account settings or directly through Google/Microsoft account dashboards."
    ]
  },
  {
    id: "subscriptions-payment",
    title: "7. Subscriptions and Payment",
    items: [
      "Certain features require a paid subscription.",
      "Fees are billed in advance on a monthly or annual basis, unless otherwise stated in an Order Form.",
      "Subscriptions renew automatically unless canceled prior to the renewal date.",
      "Pricing and features are subject to change with prior notice."
    ]
  },
  {
    id: "service-levels",
    title: "8. Service Levels and Availability",
    content: "We aim for 99.9% uptime availability excluding planned maintenance and circumstances beyond our reasonable control. DeepTrust AI does not guarantee uninterrupted or error-free service."
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    items: [
      "All intellectual property rights in the Service are owned by Affiniti Solutions, Inc. (d/b/a DeepTrust AI).",
      "You may not copy, modify, or distribute our software, trademarks, or content without prior written consent.",
      "Feedback you provide may be used by us without restriction."
    ]
  },
  {
    id: "confidentiality",
    title: "10. Confidentiality",
    content: "If you receive non-public information from DeepTrust AI (such as product roadmaps or security documentation), you agree to protect it as confidential and not disclose it without our written permission."
  },
  {
    id: "data-protection-compliance",
    title: "11. Data Protection and Compliance",
    items: [
      "DeepTrust AI complies with GDPR, CCPA, and other applicable data protection laws.",
      "Standard Contractual Clauses (SCCs) are used for international data transfers.",
      "A Data Processing Agreement (DPA) is available for enterprise customers.",
      "We maintain appropriate technical and organizational measures to safeguard data."
    ]
  },
  {
    id: "disclaimers",
    title: "12. Disclaimers",
    content: "The Service is provided \"as is\" and \"as available\" without warranties of any kind. We disclaim all implied warranties including merchantability, fitness for a particular purpose, and non-infringement."
  },
  {
    id: "limitation-liability",
    title: "13. Limitation of Liability",
    content: "To the maximum extent permitted by law:",
    items: [
      "DeepTrust AI is not liable for indirect, incidental, or consequential damages.",
      "Our aggregate liability for all claims is limited to the greater of (i) the fees you paid to us in the 12 months preceding the claim, or (ii) USD $100.",
      "Certain jurisdictions do not allow such limitations, so some terms may not apply to you."
    ]
  },
  {
    id: "indemnification",
    title: "14. Indemnification",
    content: "You agree to indemnify and hold harmless DeepTrust AI, its affiliates, employees, and contractors from any claims, damages, or expenses arising from your use of the Service or violation of these Terms."
  },
  {
    id: "termination",
    title: "15. Termination",
    items: [
      "You may terminate your account at any time.",
      "We may suspend or terminate accounts that violate these Terms, misuse integrations, or fail to pay fees.",
      "Upon termination, your right to access the Service ends immediately."
    ]
  },
  {
    id: "export-controls",
    title: "16. Export Controls and Government Use",
    content: "You agree to comply with all U.S. and international export control laws. If you are a U.S. Government entity, use of the Service is subject to \"Restricted Rights\" under applicable regulations."
  },
  {
    id: "governing-law",
    title: "17. Governing Law and Dispute Resolution",
    items: [
      "These Terms are governed by the laws of the State of Maryland, USA, without regard to conflict of law principles.",
      "Any disputes shall be resolved through binding arbitration in Montgomery County, Maryland, under the rules of the American Arbitration Association.",
      "Class action waivers apply — you may only bring claims in your individual capacity."
    ]
  },
  {
    id: "changes-to-terms",
    title: "18. Changes to Terms",
    content: "We may update these Terms from time to time. Material changes will be communicated via email or in-app notification. Continued use after changes means acceptance."
  },
  {
    id: "contact",
    title: "19. Contact",
    content: "For questions about these Terms:",
    items: [
      "Email: support@mydeeptrust.ai",
      "Address: 7520 Standish Pl, Suite 260, Rockville, MD 20855"
    ]
  }
];

export const termsOfServiceMeta = {
  title: "Terms of Service — DeepTrust AI",
  effectiveDate: "September 1, 2025"
};
