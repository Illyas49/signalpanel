import { Layout, Database, Shield, FileText, Globe, CheckSquare, AlertCircle, Navigation, Settings, Award, Monitor, RefreshCw } from 'lucide-react';

interface ResearchAreasProps {
  onNavigate: (page: string) => void;
}

export default function ResearchAreas({ onNavigate }: ResearchAreasProps) {
  const researchAreas = [
    {
      name: 'Onboarding & Entry Flows',
      slug: 'onboarding-entry-flows',
      icon: Layout,
      description: 'Examination of how users navigate initial platform exposure, account creation processes, and early-stage information presentation in regulated environments.'
    },
    {
      name: 'Information Architecture',
      slug: 'information-architecture',
      icon: Database,
      description: 'Analysis of content hierarchy, structural organization, and navigational systems within regulated digital environments.'
    },
    {
      name: 'Control Discoverability',
      slug: 'control-discoverability',
      icon: Shield,
      description: 'Study of how users locate and access safety controls, privacy settings, and self-management tools across platform interfaces.'
    },
    {
      name: 'Communication Clarity',
      slug: 'communication-clarity',
      icon: FileText,
      description: 'Assessment of language, readability, and comprehension in user-facing communications and interface text.'
    },
    {
      name: 'Jurisdictional Context',
      slug: 'jurisdictional-context',
      icon: Globe,
      description: 'Observation of variation in user experience across different regulatory frameworks and geographic regions.'
    },
    {
      name: 'Consent & Disclosure Surfaces',
      slug: 'consent-disclosure-surfaces',
      icon: CheckSquare,
      description: 'Examination of how consent requests, regulatory disclosures, and informational notices are presented to users.'
    },
    {
      name: 'Error States & Recovery',
      slug: 'error-states-recovery',
      icon: AlertCircle,
      description: 'Study of how systems communicate errors, exceptions, and failures, and the pathways provided for user recovery.'
    },
    {
      name: 'Navigation & Wayfinding',
      slug: 'navigation-wayfinding',
      icon: Navigation,
      description: 'Analysis of how users orient themselves within digital environments and locate specific features or information.'
    },
    {
      name: 'Account Settings & Self-Management',
      slug: 'account-settings-self-management',
      icon: Settings,
      description: 'Investigation of interfaces for account configuration, preference management, and user-initiated account actions.'
    },
    {
      name: 'Trust Signals & User Confidence',
      slug: 'trust-signals-user-confidence',
      icon: Award,
      description: 'Observation of interface elements and communications that affect user perceptions of legitimacy and safety.'
    },
    {
      name: 'Device & Environment Variance',
      slug: 'device-environment-variance',
      icon: Monitor,
      description: 'Investigation of user experience consistency across devices, screen sizes, and access modalities.'
    },
    {
      name: 'Cross-Session Continuity',
      slug: 'cross-session-continuity',
      icon: RefreshCw,
      description: 'Study of how user state, preferences, and progress are maintained across multiple interaction sessions.'
    }
  ];

  return (
    <div>
      <section className="py-16 md:py-12 border-b-2 border-stone-200 bg-gradient-to-b from-white to-[#F6F7F9] -mx-8 md:-mx-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-6">Research Areas</h1>
          <div className="h-1 w-24 bg-slate-700 mb-8"></div>
          <p className="text-xl text-stone-600 max-w-3xl" style={{ lineHeight: '1.7' }}>
            Twelve distinct dimensions of user experience in regulated digital environments
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto">
        <div className="space-y-6 mb-16">
          <p className="text-lg" style={{ lineHeight: '1.7' }}>
            User experience in regulated digital environments is multidimensional. Interface design,
            information presentation, control accessibility, and communication clarity each function as
            distinct variables that affect how users encounter, interpret, and respond to structured
            digital interactions.
          </p>
          <p className="text-lg" style={{ lineHeight: '1.7' }}>
            SignalPanel organizes research around discrete areas of investigation to maintain methodological
            focus and enable systematic observation. Each research area represents a bounded dimension of
            user experience that can be studied independently while acknowledging interactions with adjacent
            areas.
          </p>
        </div>

        <div className="bg-[#EEF1F5] p-8 border-l-4 border-slate-700">
          <p style={{ lineHeight: '1.7' }}>
            Research areas serve as organizing frameworks for study design. They define scope, inform
            participant task selection, and guide analytical focus. By studying these dimensions separately,
            SignalPanel produces findings that describe specific aspects of user interaction rather than
            attempting to characterize overall platform quality or user satisfaction.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#EEF1F5] -mx-8 md:-mx-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-4">Active Research Areas</h2>
          <p className="text-stone-700 mb-12 max-w-3xl" style={{ lineHeight: '1.7' }}>
            SignalPanel currently conducts research across twelve distinct areas. Each area page includes
            detailed information on key dimensions, observed patterns, and reporting approaches.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              return (
                <button
                  key={area.slug}
                  onClick={() => onNavigate(area.slug)}
                  className="border-3 border-stone-300 bg-white p-6 text-left transition-all hover:border-slate-700 hover:shadow-lg group"
                  style={{ borderWidth: '3px' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 bg-slate-100 rounded group-hover:bg-slate-700 transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 pt-1">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600" style={{ lineHeight: '1.7' }}>
                    {area.description}
                  </p>
                  <div className="mt-4 text-xs text-stone-500 group-hover:text-slate-700 transition-colors font-semibold">
                    View Details →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto">
        <p className="text-stone-600" style={{ lineHeight: '1.7' }}>
          Research area focus may expand or contract based on evolving regulatory frameworks, technological
          changes, or emerging patterns in digital environment design. Study archives and methodological
          documentation are available through the Panels & Studies page.
        </p>
      </section>
    </div>
  );
}
