import { useState, useEffect } from 'react';
import { ArrowRight, Users, Globe, FileText, Database, Shield, Layout } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function AnimatedStat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  const { current, animate } = useAnimatedNumber(value, 2000);

  useEffect(() => {
    if (isVisible) {
      animate();
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-light text-stone-800 mb-3 tracking-tight">
        {current}{suffix}
      </div>
      <div className="text-sm text-stone-600 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const heroRef = useScrollAnimation();
  const domainsRef = useScrollAnimation();

  const researchPillars = [
    {
      icon: Layout,
      title: 'Onboarding & Entry Flows',
      summary: 'User navigation of initial platform exposure and account creation.',
      detail: 'Research observes user comprehension during registration flows, initial disclosures, and first-session experiences. Studies measure the clarity of entry requirements, age verification interfaces, and introductory communications across different platform implementations and jurisdictional contexts.'
    },
    {
      icon: Database,
      title: 'Information Architecture',
      summary: 'Content hierarchy and structural organization in regulated environments.',
      detail: 'Investigation focuses on how critical information is categorized, prioritized, and made accessible to users. Research examines the placement of regulatory disclosures, educational resources, and control mechanisms within broader interface structures.'
    },
    {
      icon: Shield,
      title: 'Control Discoverability',
      summary: 'User ability to locate safety controls and self-management tools.',
      detail: 'Research tracks user paths to essential controls including spending limits, time management features, self-exclusion mechanisms, and privacy configurations. Studies measure both initial discoverability and repeated access patterns across different user interface implementations.'
    },
    {
      icon: FileText,
      title: 'Communication Clarity',
      summary: 'Language comprehension in user-facing communications and interface text.',
      detail: 'Analysis evaluates the linguistic structure, terminology choices, and information density in disclosures, warnings, confirmations, and instructional content. Research includes cross-demographic comprehension testing and readability measurement of critical communications.'
    },
    {
      icon: Globe,
      title: 'Jurisdictional Context',
      summary: 'Experience variation across regulatory frameworks and regions.',
      detail: 'Research documents how platform implementations differ based on local regulations, cultural contexts, and legal requirements. Studies examine consistency of core safety features, variation in disclosure approaches, and region-specific interface adaptations.'
    },
    {
      icon: Users,
      title: 'Device & Environment Variance',
      summary: 'Experience consistency across devices, screen sizes, and modalities.',
      detail: 'Research observes how critical features and information translate between desktop, mobile, and tablet environments. Studies assess the availability and accessibility of safety controls, disclosures, and navigation across different technical contexts and platform versions.'
    }
  ];

  return (
    <div>
      <section className="py-20 md:py-32 -mx-4 md:-mx-8 px-4 md:px-8 bg-white">
        <div ref={heroRef.ref} className={`max-w-5xl mx-auto ${heroRef.isVisible ? 'fade-in-up' : ''}`}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-10 text-stone-900 tracking-tight">
              Structured Research on User Experience in <span className="font-normal">Age-Restricted Digital Environments</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-12" style={{ lineHeight: '1.65' }}>
              SignalPanel conducts panel-based research to document how users interact with regulated digital platforms across jurisdictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('Methodology')}
                className="group px-8 py-4 bg-stone-800 text-white hover:bg-stone-900 transition-all text-sm font-medium tracking-wide flex items-center gap-2"
              >
                View Methodology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('Research Areas')}
                className="px-8 py-4 text-stone-700 hover:text-stone-900 transition-all text-sm font-medium tracking-wide border-b-2 border-transparent hover:border-stone-900"
              >
                Explore Research Areas
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-stone-50 border-y border-stone-200 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 md:gap-20">
            <AnimatedStat value={12} label="Research Areas" />
            <AnimatedStat value={8} label="Jurisdictions" />
            <AnimatedStat value={100000} label="Participants" suffix="+" />
          </div>
        </div>
      </section>

      <section ref={domainsRef.ref} className={`py-20 md:py-24 bg-white -mx-4 md:-mx-8 px-4 md:px-8 ${domainsRef.isVisible ? 'fade-in' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-stone-900 tracking-tight">Core Research Domains</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              SignalPanel organizes investigation around six foundational areas of user experience in regulated digital environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setExpandedPillar(expandedPillar === index ? null : index)}
                >
                  <div className="p-8 bg-stone-50 border border-stone-200 hover:border-stone-800 transition-all hover:shadow-sm">
                    <div className="mb-5">
                      <Icon className="w-6 h-6 text-stone-700" />
                    </div>
                    <h3 className="text-xl font-normal text-stone-900 mb-4 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {pillar.summary}
                    </p>
                    {expandedPillar === index && (
                      <p className="text-stone-600 text-sm leading-relaxed mt-4 pt-4 border-t border-stone-200">
                        {pillar.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-stone-50 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-stone-900 tracking-tight">Methodological Framework</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-stone-900">Panel Construction</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Recruitment and qualification of demographically diverse participant groups following structured selection criteria.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-stone-900">Structured Observation</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Execution of controlled research protocols ensuring consistency and methodological integrity.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-stone-900">Aggregated Analysis</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Synthesis of behavioral data into aggregated reports focusing on systemic observations.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="p-10 bg-white border border-stone-200">
              <div className="space-y-6 text-stone-700 text-center" style={{ lineHeight: '1.8' }}>
                <p>
                  SignalPanel operates as an independent research organization focused on the design, execution, and analysis of structured user research in regulated digital environments.
                </p>
                <p>
                  Work emphasizes methodological consistency, panel integrity, and aggregated findings rather than individual outcomes or platform-specific performance claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white border-t border-stone-200 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-stone-900 text-center tracking-tight">Research Scope & Boundaries</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-8 font-medium">Organizational Activities</h3>
              <div className="space-y-5 text-stone-700 text-sm" style={{ lineHeight: '1.8' }}>
                <p className="flex items-start gap-3">
                  <span className="text-stone-400 mt-1 font-light">—</span>
                  <span>Conduct structured, independent research on user experience in regulated digital environments</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-400 mt-1 font-light">—</span>
                  <span>Observe and document user interaction patterns across diverse participant populations</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-400 mt-1 font-light">—</span>
                  <span>Report findings at an aggregated level without identifying individual users or platforms</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-400 mt-1 font-light">—</span>
                  <span>Maintain methodological transparency through published research protocols</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-400 mt-1 font-light">—</span>
                  <span>Document jurisdictional variations in user experience and interface implementation</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-8 font-medium">Excluded Activities</h3>
              <div className="space-y-5 text-stone-500 text-sm" style={{ lineHeight: '1.8' }}>
                <p className="flex items-start gap-3">
                  <span className="text-stone-300 mt-1 font-light">—</span>
                  <span>Platform promotion, endorsement, or ranking services</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-300 mt-1 font-light">—</span>
                  <span>Optimization consulting, marketing services, or compliance advice</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-300 mt-1 font-light">—</span>
                  <span>Claims about user outcomes, behavior modification, or intervention effectiveness</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-300 mt-1 font-light">—</span>
                  <span>Commercial partnerships with platforms under observation</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-stone-300 mt-1 font-light">—</span>
                  <span>Legal or regulatory compliance certification</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
