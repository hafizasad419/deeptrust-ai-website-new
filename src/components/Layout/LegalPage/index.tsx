import BackToHome from "@/components/BackToHome";

interface LegalSection {
  id: string;
  title: string;
  content: string;
  items?: string[];
  subsections?: LegalSubsection[];
}

interface LegalSubsection {
  id: string;
  title: string;
  content: string;
  items?: string[];
}

interface LegalPageProps {
  title: string;
  effectiveDate?: string;
  sections: LegalSection[];
}

function LegalPage({ title, effectiveDate, sections }: LegalPageProps) {
  return (
    <>
      <div className="min-h-screen bg-white py-8">
      <BackToHome />
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-black mb-4">{title}</h1>
            {effectiveDate && (
              <p className="text-gray-600 mb-4">Effective Date: {effectiveDate}</p>
            )}
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <div key={section.id || index} className="mb-8">
                <h2 className="text-2xl font-light text-black mb-4">{section.title}</h2>

                {section.content && (
                  <p className="text-gray-800 leading-relaxed mb-4">{section.content}</p>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="text-gray-800 leading-relaxed mb-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2 ml-4">
                        <span className="text-gray-600">•</span>
                        <span className="ml-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.map((subsection, subIndex) => (
                  <div key={subsection.id || subIndex} className="mb-6">
                    <h3 className="text-xl font-light text-black mb-3">{subsection.title}</h3>

                    {subsection.content && (
                      <p className="text-gray-800 leading-relaxed mb-3">{subsection.content}</p>
                    )}

                    {subsection.items && subsection.items.length > 0 && (
                      <ul className="text-gray-800 leading-relaxed">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-2 ml-4">
                            <span className="text-gray-600">•</span>
                            <span className="ml-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              For questions about this document, contact{' '}
              <a href="mailto:support@mydeeptrust.ai" className="text-black hover:underline">
                support@mydeeptrust.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalPage;