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
      summary: 'Examination of how users navigate initial platform exposure, account creation processes, and early-stage information presentation.',
      detail: 'Research observes user comprehension during registration flows, initial disclosures, and first-session experiences. Studies measure the clarity of entry requirements, age verification interfaces, and introductory communications across different platform implementations and jurisdictional contexts.'
    },
    {
      title: 'Information Architecture',
      summary: 'Analysis of content hierarchy, structural organization, and navigational systems within regulated digital environments.',
      detail: 'Investigation focuses on how critical information is categorized, prioritized, and made accessible to users. Research examines the placement of regulatory disclosures, educational resources, and control mechanisms within broader interface structures.'
    },
    {
      title: 'Control Discoverability',
      summary: 'Study of how users locate and access safety controls, privacy settings, and self-management tools.',
      detail: 'Research tracks user paths to essential controls including spending limits, time management features, self-exclusion mechanisms, and privacy configurations. Studies measure both initial discoverability and repeated access patterns across different user interface implementations.'
    },
    {
      title: 'Communication Clarity',
      summary: 'Assessment of language, readability, and comprehension in user-facing communications and interface text.',
      detail: 'Analysis evaluates the linguistic structure, terminology choices, and information density in disclosures, warnings, confirmations, and instructional content. Research includes cross-demographic comprehension testing and readability measurement of critical communications.'
    },
    {
      title: 'Jurisdictional Context',
      summary: 'Observation of variation in user experience across different regulatory frameworks and geographic regions.',
      detail: 'Research documents how platform implementations differ based on local regulations, cultural contexts, and legal requirements. Studies examine consistency of core safety features, variation in disclosure approaches, and region-specific interface adaptations.'
    },
    {
      title: 'Device & Environment Variance',
      summary: 'Investigation of user experience consistency across devices, screen sizes, and access modalities.',
      detail: 'Research observes how critical features and information translate between desktop, mobile, and tablet environments. Studies assess the availability and accessibility of safety controls, disclosures, and navigation across different technical contexts and platform versions.'
    }
  ];

  const processSteps = [
    {
      title: 'Panel Construction',
      description: 'Recruitment and qualification of demographically diverse participant groups following structured selection criteria. Panels are designed to reflect user populations across age ranges, experience levels, and jurisdictional contexts.'
    },
    {
      title: 'Structured Observation',
      description: 'Execution of controlled research protocols in which participants interact with specified digital environments. Observation follows standardized procedures to ensure consistency, replicability, and methodological integrity across studies.'
    },
    {
      title: 'Aggregated Analysis',
      description: 'Synthesis of behavioral data, interaction patterns, and qualitative findings into aggregated reports. Analysis focuses on patterns, trends, and systemic observations rather than individual user outcomes or platform-specific performance.'
    }
  ];

  return (
    <div className="space-y-24">
      <section className="bg-stone-100 -mx-8 px-8 py-20 md:-mx-16 md:px-16">
        <div className="border-l-4 border-stone-800 pl-6">
          <h1 className="mb-6">
            Structured research on user experience in age-restricted digital environments
          </h1>
          <p className="text-xl text-stone-700 leading-relaxed">
            SignalPanel conducts methodology-driven, panel-based research to understand how users
            interact with regulated digital platforms across jurisdictions.
          </p>
        </div>
      </section>

      <section className="relative w-full h-96 -mx-8 md:-mx-16 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Research and data analysis"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-4xl">
        <p className="text-lg leading-relaxed mb-6">
          SignalPanel is an independent research organization focused on the design, execution, and
          analysis of structured user research.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our work emphasizes methodological consistency, panel integrity, and aggregated findings
          rather than individual outcomes or performance claims.
        </p>
        <p className="text-lg leading-relaxed">
          Research is conducted across age-restricted and regulated digital environments where clarity,
          structure, and information design materially affect user experience.
        </p>
      </section>

      <section>
        <h2 className="mb-4">Research Pillars</h2>
        <p className="text-lg text-stone-700 mb-12 max-w-3xl">
          SignalPanel studies how users encounter, interpret, and navigate critical information and
          controls across six core research areas.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {researchPillars.map((pillar, index) => (
            <div
              key={index}
              className="border-2 border-stone-200 bg-white transition-all hover:border-stone-400"
            >
              <button
                onClick={() => setExpandedPillar(expandedPillar === index ? null : index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-stone-900">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-stone-500 flex-shrink-0 mt-1 transition-transform ${
                    expandedPillar === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedPillar === index && (
                <div className="px-6 pb-6 pt-0 border-t border-stone-200 mt-2">
                  <p className="text-stone-600 leading-relaxed mt-4">
                    {pillar.detail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 -mx-8 px-8 py-16 md:-mx-16 md:px-16">
        <h2 className="mb-12">How SignalPanel Works</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 text-white flex items-center justify-center font-semibold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-stone-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-stone-700 leading-relaxed ml-16">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8">Research Scope & Boundaries</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-stone-800 p-8 bg-stone-50">
            <h3 className="text-xl font-semibold mb-6 text-stone-900">SignalPanel Does</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-stone-800 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Conduct structured, independent research</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Observe user interaction patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Report findings at an aggregated level</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Maintain methodological transparency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Document jurisdictional variations</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-stone-300 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-6 text-stone-900">SignalPanel Does Not</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-stone-400 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Promote or endorse platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Rank or score services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Provide optimization, marketing, or compliance advice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Make claims about user outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 font-bold mt-1">•</span>
                <span className="text-stone-700 leading-relaxed">Offer commercial partnerships or consulting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 pt-12">
        <p className="text-stone-600 mb-8 max-w-3xl">
          Additional information on research methodology, panel composition, and study archives is available
          through the links below.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('Methodology')}
            className="px-6 py-3 border border-stone-400 bg-white text-stone-900 hover:border-stone-900 transition-colors"
          >
            Methodology
          </button>
          <button
            onClick={() => onNavigate('About')}
            className="px-6 py-3 border border-stone-400 bg-white text-stone-900 hover:border-stone-900 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('PanelsStudies')}
            className="px-6 py-3 border border-stone-400 bg-white text-stone-900 hover:border-stone-900 transition-colors"
          >
            Panels & Studies
          </button>
        </div>
      </section>
    </div>
  );
}
