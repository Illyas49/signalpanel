interface ResearchAreasProps {
  onNavigate: (page: string) => void;
}

export default function ResearchAreas({ onNavigate }: ResearchAreasProps) {
  const researchAreas = [
    {
      name: 'Onboarding & Entry Flows',
      slug: 'onboarding-entry-flows',
      description: 'Examination of how users navigate initial platform exposure, account creation processes, and early-stage information presentation in regulated environments.'
    },
    {
      name: 'Information Architecture',
      slug: 'information-architecture',
      description: 'Analysis of content hierarchy, structural organization, and navigational systems within regulated digital environments.'
    },
    {
      name: 'Control Discoverability',
      slug: 'control-discoverability',
      description: 'Study of how users locate and access safety controls, privacy settings, and self-management tools across platform interfaces.'
    },
    {
      name: 'Communication Clarity',
      slug: 'communication-clarity',
      description: 'Assessment of language, readability, and comprehension in user-facing communications and interface text.'
    },
    {
      name: 'Jurisdictional Context',
      slug: 'jurisdictional-context',
      description: 'Observation of variation in user experience across different regulatory frameworks and geographic regions.'
    },
    {
      name: 'Consent & Disclosure Surfaces',
      slug: 'consent-disclosure-surfaces',
      description: 'Examination of how consent requests, regulatory disclosures, and informational notices are presented to users.'
    },
    {
      name: 'Error States & Recovery',
      slug: 'error-states-recovery',
      description: 'Study of how systems communicate errors, exceptions, and failures, and the pathways provided for user recovery.'
    },
    {
      name: 'Navigation & Wayfinding',
      slug: 'navigation-wayfinding',
      description: 'Analysis of how users orient themselves within digital environments and locate specific features or information.'
    },
    {
      name: 'Account Settings & Self-Management',
      slug: 'account-settings-self-management',
      description: 'Investigation of interfaces for account configuration, preference management, and user-initiated account actions.'
    },
    {
      name: 'Trust Signals & User Confidence',
      slug: 'trust-signals-user-confidence',
      description: 'Observation of interface elements and communications that affect user perceptions of legitimacy and safety.'
    },
    {
      name: 'Device & Environment Variance',
      slug: 'device-environment-variance',
      description: 'Investigation of user experience consistency across devices, screen sizes, and access modalities.'
    },
    {
      name: 'Cross-Session Continuity',
      slug: 'cross-session-continuity',
      description: 'Study of how user state, preferences, and progress are maintained across multiple interaction sessions.'
    }
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">Research Areas</h1>
        <div className="h-1 w-24 bg-stone-800"></div>
      </section>

      <section className="max-w-4xl space-y-6">
        <p className="text-lg leading-relaxed">
          User experience in regulated digital environments is multidimensional. Interface design,
          information presentation, control accessibility, and communication clarity each function as
          distinct variables that affect how users encounter, interpret, and respond to structured
          digital interactions.
        </p>
        <p className="text-lg leading-relaxed">
          SignalPanel organizes research around discrete areas of investigation to maintain methodological
          focus and enable systematic observation. Each research area represents a bounded dimension of
          user experience that can be studied independently while acknowledging interactions with adjacent
          areas.
        </p>
        <p className="text-lg leading-relaxed">
          Research areas serve as organizing frameworks for study design. They define scope, inform
          participant task selection, and guide analytical focus. By studying these dimensions separately,
          SignalPanel produces findings that describe specific aspects of user interaction rather than
          attempting to characterize overall platform quality or user satisfaction.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section>
        <h2 className="mb-8">Active Research Areas</h2>
        <p className="text-stone-700 mb-12 max-w-3xl leading-relaxed">
          SignalPanel currently conducts research across twelve distinct areas. Each area page includes
          detailed information on key dimensions, observed patterns, and reporting approaches.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <button
              key={area.slug}
              onClick={() => onNavigate(area.slug)}
              className="border-2 border-stone-200 bg-white p-6 text-left transition-all hover:border-stone-800 hover:shadow-md group"
            >
              <h3 className="text-lg font-semibold mb-3 text-stone-900 group-hover:text-stone-800">
                {area.name}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {area.description}
              </p>
              <div className="mt-4 text-xs text-stone-500 group-hover:text-stone-700 transition-colors">
                View details →
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="border-t border-stone-200 mt-16"></div>

      <section className="max-w-4xl pb-8">
        <p className="text-stone-600 leading-relaxed">
          Research area focus may expand or contract based on evolving regulatory frameworks, technological
          changes, or emerging patterns in digital environment design. Study archives and methodological
          documentation are available through the Panels & Studies page.
        </p>
      </section>
    </div>
  );
}
