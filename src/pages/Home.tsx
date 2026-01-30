import { useState, useEffect } from 'react';
import { ChevronDown, Users, Globe, FileText, Database, Shield, Layout } from 'lucide-react';
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
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {current}{suffix}
      </div>
      <div className="text-sm text-slate-200 uppercase tracking-wider font-semibold">{label}</div>
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
      <section className="py-12 md:py-16 -mx-4 md:-mx-8 px-4 md:px-8 bg-gradient-to-b from-white to-[#F6F7F9]">
        <div ref={heroRef.ref} className={`max-w-7xl mx-auto ${heroRef.isVisible ? 'fade-in-up' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border-l-4 border-slate-700 pl-8 md:pl-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-stone-900">
                Structured research on user experience in age-restricted digital environments
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-10" style={{ lineHeight: '1.6' }}>
                SignalPanel conducts panel-based research to document how users interact with regulated digital platforms across jurisdictions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('Methodology')}
                  className="px-6 py-3 bg-slate-700 text-white hover:bg-slate-800 transition-all text-sm font-semibold tracking-wide uppercase shadow-sm hover:shadow-md"
                >
                  View Methodology
                </button>
                <button
                  onClick={() => onNavigate('Research Areas')}
                  className="px-6 py-3 border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-all text-sm font-semibold tracking-wide uppercase"
                >
                  Explore Research Areas
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Research and data analysis"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-slate-700 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <AnimatedStat value={12} label="Research Areas" />
            <AnimatedStat value={8} label="Jurisdictions" />
            <AnimatedStat value={100000} label="Participants" suffix="+" />
          </div>
        </div>
      </section>

      <section ref={domainsRef.ref} className={`py-12 md:py-16 section-bg-subtle -mx-4 md:-mx-8 px-4 md:px-8 ${domainsRef.isVisible ? 'fade-in' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-stone-900">Core Research Domains</h2>
            <p className="text-lg text-stone-600 max-w-3xl" style={{ lineHeight: '1.7' }}>
              SignalPanel organizes investigation around six foundational areas of user experience in regulated digital environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="border-3 border-stone-300 bg-white transition-all hover:border-slate-700 hover:shadow-lg group"
                  style={{ borderWidth: '3px' }}
                >
                  <button
                    onClick={() => setExpandedPillar(expandedPillar === index ? null : index)}
                    className="w-full text-left p-8 md:p-10 flex items-start justify-between gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2.5 bg-slate-100 rounded group-hover:bg-slate-700 transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-stone-900 tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-stone-600" style={{ lineHeight: '1.7' }}>
                        {pillar.summary}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 flex-shrink-0 mt-1 transition-transform group-hover:text-slate-700 ${
                        expandedPillar === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedPillar === index && (
                    <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 border-t-2 border-stone-200">
                      <p className="text-stone-600 mt-6" style={{ lineHeight: '1.7' }}>
                        {pillar.detail}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-bg-light -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-stone-900">Methodological Framework</h2>
              <div className="space-y-6 text-stone-700" style={{ lineHeight: '1.7' }}>
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
              <div className="border-l-4 border-slate-700 pl-8 transition-all hover:pl-10">
                <h3 className="text-xl font-bold mb-4 text-stone-900">Panel Construction</h3>
                <p className="text-stone-700" style={{ lineHeight: '1.7' }}>
                  Recruitment and qualification of demographically diverse participant groups following structured selection criteria reflecting user populations across age ranges, experience levels, and jurisdictional contexts.
                </p>
              </div>

              <div className="border-l-4 border-slate-700 pl-8 transition-all hover:pl-10">
                <h3 className="text-xl font-bold mb-4 text-stone-900">Structured Observation</h3>
                <p className="text-stone-700" style={{ lineHeight: '1.7' }}>
                  Execution of controlled research protocols in which participants interact with specified digital environments under standardized conditions ensuring consistency and methodological integrity.
                </p>
              </div>

              <div className="border-l-4 border-slate-700 pl-8 transition-all hover:pl-10">
                <h3 className="text-xl font-bold mb-4 text-stone-900">Aggregated Analysis</h3>
                <p className="text-stone-700" style={{ lineHeight: '1.7' }}>
                  Synthesis of behavioral data, interaction patterns, and qualitative findings into aggregated reports focusing on systemic observations rather than individual outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-stone-900">Research Scope & Boundaries</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-6 font-semibold">Organizational Activities</h3>
              <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.7' }}>
                <p className="flex items-start gap-4">
                  <span className="text-slate-600 mt-1">—</span>
                  <span>Conduct structured, independent research on user experience in regulated digital environments</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-slate-600 mt-1">—</span>
                  <span>Observe and document user interaction patterns across diverse participant populations</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-slate-600 mt-1">—</span>
                  <span>Report findings at an aggregated level without identifying individual users or platforms</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-slate-600 mt-1">—</span>
                  <span>Maintain methodological transparency through published research protocols</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-slate-600 mt-1">—</span>
                  <span>Document jurisdictional variations in user experience and interface implementation</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-6 font-semibold">Excluded Activities</h3>
              <div className="space-y-4 text-stone-600" style={{ lineHeight: '1.7' }}>
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
    </div>
  );
}
