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

export const exportComplianceData: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: "DeepTrust AI complies with U.S. export control and sanctions laws, as well as similar regulations worldwide. Our services may only be used in compliance with applicable trade, export, and re-export laws and regulations."
  },
  {
    id: "policy",
    title: "Policy",
    subsections: [
      {
        id: "export-administration-regulations",
        title: "Export Administration Regulations (EAR)",
        content: "Our services may not be used in violation of the U.S. Export Administration Regulations (EAR). This includes restrictions on the export, re-export, or transfer of certain software, technology, or services to prohibited destinations or entities."
      },
      {
        id: "ofac-sanctions",
        title: "OFAC Sanctions",
        content: "Use of DeepTrust AI is prohibited in countries or regions subject to comprehensive U.S. trade sanctions administered by the Office of Foreign Assets Control (OFAC), including but not limited to:",
        items: [
          "Cuba",
          "Iran",
          "North Korea",
          "Syria",
          "The Crimea, Donetsk, and Luhansk regions of Ukraine"
        ]
      },
      {
        id: "other-trade-controls",
        title: "Other Trade Controls",
        content: "In addition to U.S. laws, users are responsible for complying with other applicable trade and export control laws in their jurisdiction."
      },
      {
        id: "user-representation",
        title: "User Representation",
        content: "By using DeepTrust AI, you represent and warrant that:",
        items: [
          "You are not located in, or ordinarily resident in, an embargoed or restricted country.",
          "You are not listed on any U.S. Government denied-party or restricted lists (including the SDN List, Entity List, or Denied Persons List).",
          "You will not use the Services for purposes prohibited by export control laws, including nuclear, missile, or chemical/biological weapons proliferation."
        ]
      },
      {
        id: "us-government-use",
        title: "U.S. Government Use",
        content: "If you are a U.S. Government user, your use of DeepTrust AI is subject to \"Restricted Rights\" under the Federal Acquisition Regulations (FAR) and Defense Federal Acquisition Regulations (DFARS)."
      }
    ]
  },
  {
    id: "questions",
    title: "Questions",
    content: "If you have questions about DeepTrust AI's export compliance obligations, please contact us:",
    items: [
      "📧 support@mydeeptrust.ai"
    ]
  }
];

export const exportComplianceMeta = {
  title: "Export Compliance"
};
