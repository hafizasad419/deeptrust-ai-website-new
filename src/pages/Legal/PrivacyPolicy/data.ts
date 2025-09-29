export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  subsections?: LegalSubsection[];
  items?: string[];
}

export interface LegalSubsection {
  id: string;
  title: string;
  content?: string;
  items?: string[];
}

export const privacyPolicyData: LegalSection[] = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    content: "DeepTrust AI (\"we,\" \"our,\" \"us\") provides A Trust Enablement Platform that helps individuals and organizations manage, enhance, and expand their trusted relationships.",
    subsections: [
      {
        id: "contact-info",
        title: "Contact Information",
        content: "Our website: https://mydeeptrust.ai\nContact: support@mydeeptrust.ai\nAddress: 7520 Standish Pl, Suite 260, Rockville, MD 20855\n\nIf you are located in the European Union, United Kingdom, or another jurisdiction with data protection laws, DeepTrust AI acts as the Data Controller for your personal data."
      }
    ]
  },
  {
    id: "policy-coverage",
    title: "2. What This Policy Covers",
    content: "This Privacy Policy explains how we collect, use, store, and share information when you use DeepTrust AI, including when you connect your Google or Microsoft accounts (Gmail, Outlook, Google Calendar, Outlook Calendar, and related services)."
  },
  {
    id: "information-collection",
    title: "3. Information We Collect",
    content: "We collect various types of information to provide and improve our services:",
    subsections: [
      {
        id: "account-info",
        title: "a) Account Information",
        items: [
          "Name, email address, and profile image (when you sign in with Google or Microsoft)."
        ]
      },
      {
        id: "contact-network-data",
        title: "b) Contact & Network Data",
        items: [
          "Contacts you import, sync, or assign into networks within DeepTrust AI."
        ]
      },
      {
        id: "google-microsoft-data",
        title: "c) Google and Microsoft User Data (if you authorize)",
        content: "If you choose to connect Gmail, Outlook, Google Calendar, or Outlook Calendar, we may access:",
        items: [
          "Email (Gmail/Outlook): message metadata (sender, recipient, subject, timestamps) and message drafts you explicitly approve to send.",
          "Calendar (Google/Outlook): event details (title, date/time, attendees, notes) to surface engagement opportunities and reminders."
        ]
      },
      {
        id: "technical-data",
        title: "d) Technical Data",
        items: [
          "Device/browser type, IP address, log data, and usage activity."
        ]
      }
    ]
  },
  {
    id: "data-usage",
    title: "4. How We Use Data",
    content: "We use collected data only to provide or improve user-facing features:",
    items: [
      "Identify you in the app (name, profile).",
      "Display and enrich your contacts and networks.",
      "Surface timely notifications (e.g., birthdays, promotions, meeting reminders).",
      "Prepare AI-suggested drafts of emails, texts, or call reminders that you explicitly approve before sending.",
      "Sync approved events with your Google or Microsoft calendar (if enabled).",
      "Maintain and improve security, investigate abuse, and comply with applicable law."
    ]
  },
  {
    id: "limited-use",
    title: "5. Limited Use of Google & Microsoft User Data",
    content: "Our use of data obtained via Google APIs complies with the Google API Services User Data Policy (including Limited Use). Our use of data obtained via Microsoft APIs complies with the Microsoft API Terms of Service and Microsoft Developer Policies.",
    items: [
      "Data is only used to provide or improve user-facing features within DeepTrust AI.",
      "We do not sell, rent, or share user data with third parties.",
      "We do not use data for advertising, including personalized or interest-based ads.",
      "We do not transfer data except:",
      "To provide or improve user-facing features, with your consent.",
      "For security purposes (fraud/abuse prevention).",
      "To comply with applicable law.",
      "As part of a merger/acquisition, with prior notice and consent.",
      "Human access to data is prohibited, unless:",
      "You explicitly consent for support/troubleshooting.",
      "Required for security/abuse investigations.",
      "Required to comply with law."
    ]
  },
  {
    id: "data-sharing",
    title: "6. Sharing of Data",
    content: "We may share limited information only with:",
    items: [
      "Service providers (sub-processors): cloud hosting, analytics, or support vendors who process data on our behalf, under strict confidentiality and data processing agreements.",
      "Legal compliance: where required by law.",
      "Business transfers: with user notice and consent in case of merger or acquisition."
    ],
    subsections: [
      {
        id: "no-selling",
        title: "We do not sell your data",
        content: "We do not sell your data or provide it to advertisers."
      }
    ]
  },
  {
    id: "legal-basis",
    title: "7. Legal Basis for Processing (GDPR/Global Laws)",
    content: "If you are located in the EU, UK, or other jurisdictions with similar requirements, our lawful bases for processing include:",
    items: [
      "Consent: when you connect Gmail, Outlook, or calendar integrations.",
      "Contract: to provide the services you requested.",
      "Legitimate Interests: improving features, preventing abuse, ensuring security.",
      "Legal Obligation: compliance with applicable laws."
    ]
  },
  {
    id: "your-rights",
    title: "8. Your Rights (GDPR, CCPA, Global)",
    content: "Depending on your location, you may have the following rights:",
    items: [
      "Access: Request a copy of the data we hold about you.",
      "Rectification: Request correction of inaccurate or incomplete data.",
      "Erasure (\"Right to be Forgotten\"): Request deletion of your data.",
      "Restriction: Request limits on how we process your data.",
      "Data Portability: Request your data in a structured, machine-readable format.",
      "Withdraw Consent: Disconnect Google/Microsoft integrations anytime at your account settings or directly via Google/Microsoft account security dashboards.",
      "Opt-out (CCPA): You may opt out of the sale of data (though we never sell data)."
    ],
    subsections: [
      {
        id: "exercise-rights",
        title: "To exercise your rights",
        content: "To exercise your rights, contact: support@mydeeptrust.ai"
      }
    ]
  },
  {
    id: "data-retention",
    title: "9. Data Retention",
    items: [
      "Account and API-connected data are retained while your account is active.",
      "Disconnecting Gmail/Outlook/Calendar deletes related data immediately.",
      "Account deletion results in erasure of all data within 30 days, except where retention is required by law.",
      "Backups auto-expire after 90 days."
    ]
  },
  {
    id: "security",
    title: "10. Security",
    content: "We implement technical and organizational measures to protect your data:",
    items: [
      "Encryption in transit (TLS 1.2+) and at rest (AES-256).",
      "Role-based access controls.",
      "Continuous monitoring and audit logging.",
      "Annual security reviews and third-party assessments for restricted scopes."
    ]
  },
  {
    id: "international-transfers",
    title: "11. International Data Transfers",
    content: "If your data is transferred outside your country (e.g., to the United States), safeguards such as Standard Contractual Clauses (SCCs) are applied to ensure adequate protection under GDPR."
  },
  {
    id: "children",
    title: "12. Children",
    content: "DeepTrust AI is not directed to children under 16. We do not knowingly collect personal data from children."
  },
  {
    id: "policy-changes",
    title: "13. Changes to this Policy",
    content: "We may update this Privacy Policy as our product evolves. Material changes will be communicated via email, in-app notice, or both."
  },
  {
    id: "contact",
    title: "14. Contact",
    content: "For privacy questions or data requests, contact:",
    items: [
      "Email: support@mydeeptrust.ai",
      "Address: 7520 Standish Pl, Suite 260, Rockville, MD 20855"
    ]
  }
];

export const privacyPolicyMeta = {
  title: "Privacy Policy — DeepTrust AI",
  effectiveDate: "September 1, 2025"
};
