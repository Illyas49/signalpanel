import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const researchPillars = [
    {
      title: 'Onboarding & Entry Flows',
      summary: 'User navigation of initial platform exposure and account creation.',
      detail: 'Research observes user comprehension during registration flows, initial disclosures, and first-session experiences. Studies measure the clarity of entry requirements, age verification interfaces, and introductory communications across different platform implementations and jurisdictional contexts.'
    },
    {
      title: 'Information Architecture',
      summary: 'Content hierarchy and structural organization in regulated environments.',
      detail: 'Investigation focuses on how critical information is categorized, prioritized, and made accessible to users. Research examines the placement of regulatory disclosures, educational resources, and control mechanisms within broader interface structures.'
    },
    {
      title: 'Control Discoverability',
      summary: 'User ability to locate safety controls and self-management tools.',
      detail: 'Research tracks user paths to essential controls including spending limits, time management features, self-exclusion mechanisms, and privacy configurations. Studies measure both initial discoverability and repeated access patterns across different user interface implementations.'
    },
    {
      title: 'Communication Clarity',
      summary: 'Language comprehension in user-facing communications and interface text.',
      detail: 'Analysis evaluates the linguistic structure, terminology choices, and information density in disclosures, warnings, confirmations, and instructional content. Research includes cross-demographic comprehension testing and readability measurement of critical communications.'
    },
    {
      title: 'Jurisdictional Context',
      summary: 'Experience variation across regulatory frameworks and regions.',
      detail: 'Research documents how platform implementations differ based on local regulations, cultural contexts, and legal requirements. Studies examine consistency of core safety features, variation in disclosure approaches, and region-specific interface adaptations.'
    },
    {
      title: 'Device & Environment Variance',
      summary: 'Experience consistency across devices, screen sizes, and modalities.',
      detail: 'Research observes how critical features and information translate between desktop, mobile, and tablet environments. Studies assess the availability and accessibility of safety controls, disclosures, and navigation across different technical contexts and platform versions.'
    }
  ];

  return (
    <div>
      <section className="py-32 md:py-40 -mx-8 md:-mx-16 px-8 md:px-16">
        <div className="max-w-6xl">
          <div className="border-l-4 border-stone-900 pl-8 md:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-stone-900">
              Structured research on user experience in age-restricted digital environments
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-4xl">
              SignalPanel conducts panel-based research to document how users interact with regulated digital platforms across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-stone-50 -mx-8 md:-mx-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-stone-900">Core Research Domains</h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
              SignalPanel organizes investigation around six foundational areas of user experience in regulated digital environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchPillars.map((pillar, index) => (
              <div
                key={index}
                className="border-3 border-stone-300 bg-white transition-all hover:border-stone-700 group"
                style={{ borderWidth: '3px' }}
              >
                <button
                  onClick={() => setExpandedPillar(expandedPillar === index ? null : index)}
                  className="w-full text-left p-8 md:p-10 flex items-start justify-between gap-6"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-stone-900 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 flex-shrink-0 mt-1 transition-transform group-hover:text-stone-700 ${
                      expandedPillar === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedPillar === index && (
                  <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 border-t-2 border-stone-200">
                    <p className="text-stone-600 leading-relaxed mt-6">
                      {pillar.detail}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-stone-900">Methodological Framework</h2>
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                SignalPanel operates as an independent research organization focused on the design, execution, and analysis of structured user research in regulated digital environments.
              </p>
              <p>
                Work emphasizes methodological consistency, panel integrity, and aggregated findings rather than individual outcomes or platform-specific performance claims.
              </p>
              <p>
                Research protocols follow standardized observation procedures designed to ensure replicability, minimize bias, and maintain analytical independence from commercial interests.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="border-l-4 border-stone-800 pl-8">
              <h3 className="text-xl font-bold mb-4 text-stone-900">Panel Construction</h3>
              <p className="text-stone-700 leading-relaxed">
                Recruitment and qualification of demographically diverse participant groups following structured selection criteria reflecting user populations across age ranges, experience levels, and jurisdictional contexts.
              </p>
            </div>

            <div className="border-l-4 border-stone-800 pl-8">
              <h3 className="text-xl font-bold mb-4 text-stone-900">Structured Observation</h3>
              <p className="text-stone-700 leading-relaxed">
                Execution of controlled research protocols in which participants interact with specified digital environments under standardized conditions ensuring consistency and methodological integrity.
              </p>
            </div>

            <div className="border-l-4 border-stone-800 pl-8">
              <h3 className="text-xl font-bold mb-4 text-stone-900">Aggregated Analysis</h3>
              <p className="text-stone-700 leading-relaxed">
                Synthesis of behavioral data, interaction patterns, and qualitative findings into aggregated reports focusing on systemic observations rather than individual outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 border-t-2 border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-stone-900">Research Scope & Boundaries</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-6 font-semibold">Organizational Activities</h3>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p className="flex items-start gap-4">
                  <span className="text-stone-400 mt-1">—</span>
                  <span>Conduct structured, independent research on user experience in regulated digital environments</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-400 mt-1">—</span>
                  <span>Observe and document user interaction patterns across diverse participant populations</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-400 mt-1">—</span>
                  <span>Report findings at an aggregated level without identifying individual users or platforms</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-400 mt-1">—</span>
                  <span>Maintain methodological transparency through published research protocols</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-400 mt-1">—</span>
                  <span>Document jurisdictional variations in user experience and interface implementation</span>
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200">
              <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-6 font-semibold">Excluded Activities</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p className="flex items-start gap-4">
                  <span className="text-stone-300 mt-1">—</span>
                  <span>Platform promotion, endorsement, or ranking services</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-300 mt-1">—</span>
                  <span>Optimization consulting, marketing services, or compliance advice</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-300 mt-1">—</span>
                  <span>Claims about user outcomes, behavior modification, or intervention effectiveness</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-300 mt-1">—</span>
                  <span>Commercial partnerships with platforms under observation</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-stone-300 mt-1">—</span>
                  <span>Legal or regulatory compliance certification</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-stone-200">
        <div className="max-w-2xl">
          <p className="text-stone-600 leading-relaxed mb-8">
            Additional information on research methodology, panel composition, and study archives is accessible through organizational documentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('Methodology')}
              className="px-5 py-2.5 border-2 border-stone-800 bg-white text-stone-900 hover:bg-stone-800 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase"
            >
              Methodology
            </button>
            <button
              onClick={() => onNavigate('Research Areas')}
              className="px-5 py-2.5 border-2 border-stone-800 bg-white text-stone-900 hover:bg-stone-800 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase"
            >
              Research Areas
            </button>
            <button
              onClick={() => onNavigate('About')}
              className="px-5 py-2.5 border-2 border-stone-300 bg-white text-stone-700 hover:border-stone-800 hover:text-stone-900 transition-colors text-sm font-semibold tracking-wide uppercase"
            >
              About
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
