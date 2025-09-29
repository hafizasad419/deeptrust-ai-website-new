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

export const cookiePolicyData: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: "DeepTrust AI (\"we,\" \"our,\" \"us\") uses cookies and similar technologies on our website and platform to improve performance, personalize your experience, enhance security, and analyze usage. This Cookie Policy explains what cookies are, how we use them, and the choices you have.",
    items: [
      "By continuing to use our site after being presented with our cookie banner, you consent to our use of cookies as described below."
    ]
  },
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: "Cookies are small text files stored on your device when you visit a website or use a web application. They are widely used to make websites work more efficiently, as well as to provide information to the site owners.",
    subsections: [
      {
        id: "cookie-types",
        title: "Cookies may be:",
        items: [
          "Session cookies (deleted when you close your browser).",
          "Persistent cookies (remain on your device until they expire or are deleted).",
          "First-party cookies (set by DeepTrust AI).",
          "Third-party cookies (set by external providers we use for functionality or analytics)."
        ]
      }
    ]
  },
  {
    id: "types-of-cookies",
    title: "Types of Cookies We Use",
    subsections: [
      {
        id: "essential-cookies",
        title: "Essential Cookies",
        content: "Required for authentication, login sessions, and core functionality of the DeepTrust AI platform.",
        items: [
          "Ensure the security of user sessions and protect against fraud.",
          "These cookies cannot be disabled, as they are necessary for the service to function."
        ]
      },
      {
        id: "analytics-cookies",
        title: "Analytics Cookies",
        content: "Help us understand how users interact with our website and platform.",
        items: [
          "Provide insights that allow us to improve usability, performance, and new feature development.",
          "May include services such as Google Analytics or equivalent tools."
        ]
      },
      {
        id: "preference-cookies",
        title: "Preference Cookies",
        content: "Store your settings, such as language, time zone, and display preferences.",
        items: [
          "Allow us to remember your choices for a more personalized experience."
        ]
      },
      {
        id: "marketing-cookies",
        title: "Marketing Cookies",
        content: "Currently not used.",
        items: [
          "We do not use cookies for advertising, behavioral profiling, or third-party tracking."
        ]
      }
    ]
  },
  {
    id: "your-choices",
    title: "Your Choices",
    subsections: [
      {
        id: "cookie-management",
        title: "Cookie Management",
        content: "You can manage or disable cookies in your browser settings. Most browsers allow you to:",
        items: [
          "View which cookies are stored on your device.",
          "Delete cookies.",
          "Block cookies entirely or from specific sites.",
          "Set preferences for how cookies are handled."
        ]
      },
      {
        id: "eu-uk-visitors",
        title: "EU/UK Visitors (GDPR/ePrivacy)",
        items: [
          "Visitors from the EU/UK will be presented with a cookie consent banner upon first visit.",
          "This banner allows you to accept all cookies, reject non-essential cookies, or customize preferences.",
          "You may update your preferences at any time via the \"Cookie Settings\" link in the footer."
        ]
      },
      {
        id: "california-residents",
        title: "California Residents (CCPA/CPRA)",
        items: [
          "We do not sell personal information.",
          "If our practices change, you will be notified and given the ability to opt-out."
        ]
      }
    ],
    items: [
      "Please note: Disabling essential cookies may limit the functionality of DeepTrust AI."
    ]
  },
  {
    id: "policy-changes",
    title: "Changes to This Policy",
    content: "We may update this Cookie Policy from time to time. If we make material changes, we will update the \"Effective Date\" and notify you through our site or by other appropriate means.",
    items: [
      "Effective Date: September 1, 2025"
    ]
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: "If you have questions about this Cookie Policy or how we use cookies:",
    items: [
      "📧 support@mydeeptrust.ai",
      "📍 Affiniti Solutions, Inc. — 7520 Standish Pl, Suite 260, Rockville, MD 20855"
    ]
  }
];

export const cookiePolicyMeta = {
  title: "Cookie Policy",
  effectiveDate: "September 1, 2025"
};
