import { useState, useEffect } from 'react';
import { ArrowRight, Users, Globe, FileText, Database, Shield, Layout, CheckCircle2, Target, TrendingUp, Sparkles, AlertCircle, Ban, ChevronDown } from 'lucide-react';
import Modal from '../components/Modal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';
import Hero from '../components/layout/Hero';
import Section from '../components/layout/Section';
import ContentColumn from '../components/layout/ContentColumn';
import Card from '../components/content/Card';
import MetricCard from '../components/content/MetricCard';
import InsightBlock from '../components/content/InsightBlock';
import Heading from '../components/typography/Heading';
import Text from '../components/typography/Text';
import Badge from '../components/typography/Badge';
import AnalysisSection from '../components/specialized/AnalysisSection';
import FinalTakeaway from '../components/specialized/FinalTakeaway';

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
    <div ref={ref} className="text-center relative z-10">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-white/40 cursor-default">
        <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          {current}{suffix}
        </div>
        <div className="text-xs text-white/90 uppercase tracking-widest font-semibold">{label}</div>
      </div>
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [expandedWeDo, setExpandedWeDo] = useState<number | null>(null);
  const [expandedWeDont, setExpandedWeDont] = useState<number | null>(null);
  const heroRef = useScrollAnimation();
  const domainsRef = useScrollAnimation();
  const methodRef = useScrollAnimation();

  const researchPillars = [
    {
      icon: Layout,
      title: 'Onboarding & Entry Flows',
      summary: 'User navigation of initial platform exposure and account creation.',
      detail: 'Research observes user comprehension during registration flows, initial disclosures, and first-session experiences. Studies measure the clarity of entry requirements, age verification interfaces, and introductory communications across different platform implementations and jurisdictional contexts.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Database,
      title: 'Information Architecture',
      summary: 'Content hierarchy and structural organization in regulated environments.',
      detail: 'Investigation focuses on how critical information is categorized, prioritized, and made accessible to users. Research examines the placement of regulatory disclosures, educational resources, and control mechanisms within broader interface structures.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Control Discoverability',
      summary: 'User ability to locate safety controls and self-management tools.',
      detail: 'Research tracks user paths to essential controls including spending limits, time management features, self-exclusion mechanisms, and privacy configurations. Studies measure both initial discoverability and repeated access patterns across different user interface implementations.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FileText,
      title: 'Communication Clarity',
      summary: 'Language comprehension in user-facing communications and interface text.',
      detail: 'Analysis evaluates the linguistic structure, terminology choices, and information density in disclosures, warnings, confirmations, and instructional content. Research includes cross-demographic comprehension testing and readability measurement of critical communications.',
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Jurisdictional Context',
      summary: 'Experience variation across regulatory frameworks and regions.',
      detail: 'Research documents how platform implementations differ based on local regulations, cultural contexts, and legal requirements. Studies examine consistency of core safety features, variation in disclosure approaches, and region-specific interface adaptations.',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Device & Environment Variance',
      summary: 'Experience consistency across devices, screen sizes, and modalities.',
      detail: 'Research observes how critical features and information translate between desktop, mobile, and tablet environments. Studies assess the availability and accessibility of safety controls, disclosures, and navigation across different technical contexts and platform versions.',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl -mr-96 -mt-96 pointer-events-none"></div>

      <Hero
        imageUrl="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Research background"
        overlay="medium"
        height="md"
        rounded={true}
      >
        <div ref={heroRef.ref} className={`text-center ${heroRef.isVisible ? 'fade-in-up' : ''}`}>
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
            <span className="text-white text-xs font-bold tracking-wide uppercase">Structured Research Platform</span>
          </div>
          <Heading level={1} align="center" className="mb-4 text-white drop-shadow-lg leading-tight text-3xl md:text-4xl">
            User Experience Research in <br/><span className="font-bold bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">Age-Restricted Digital Environments</span>
          </Heading>
          <Text size="xl" variant="light" className="max-w-2xl mx-auto mb-6 drop-shadow-sm text-white/90 leading-relaxed text-sm">
            SignalPanel conducts panel-based research to document how users interact with regulated digital platforms across jurisdictions.
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => onNavigate('Methodology')}
              className="group px-5 py-2.5 bg-white text-teal-800 hover:bg-teal-50 transition-all text-sm font-semibold tracking-wide flex items-center gap-2 shadow-xl rounded-xl hover:-translate-y-1 duration-300"
            >
              View Methodology
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('Research Areas')}
              className="px-5 py-2.5 text-white hover:text-teal-100 transition-all text-sm font-semibold tracking-wide border-2 border-white/50 hover:border-white rounded-xl hover:-translate-y-1 duration-300"
            >
              Explore Research Areas
            </button>
          </div>
        </div>
      </Hero>

      <div className="h-6"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            <AnimatedStat value={12} label="Research Areas" />
            <AnimatedStat value={8} label="Jurisdictions" />
            <AnimatedStat value={100} label="Participants" suffix="K+" />
          </div>
        </div>
      </div>

      <Section ref={domainsRef.ref} background="white" spacing="sm" className={`relative ${domainsRef.isVisible ? 'fade-in' : ''}`}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-800 rounded-full mb-3 font-bold text-xs shadow-md">
              <Target className="w-4 h-4" />
              Research Domains
            </div>
            <Heading level={2} align="center" className="mb-2 text-2xl">
              Core Research Domains
            </Heading>
            <Text size="lg" variant="muted" className="max-w-2xl mx-auto leading-relaxed text-sm">
              SignalPanel organizes investigation around six foundational areas of user experience in regulated digital environments.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPillar(index)}
                >
                  <Card variant="compact" padding="xs" hover3d className="relative h-full bg-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`flex-shrink-0 p-1.5 bg-gradient-to-br ${pillar.color} rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <Heading level={3} className="text-[6px] font-semibold group-hover:text-teal-700 transition-colors leading-tight">
                        {pillar.title}
                      </Heading>
                    </div>
                    <Text size="base" variant="muted" className="mb-1.5 leading-relaxed text-[6px] pl-8">
                      {pillar.summary}
                    </Text>
                    <div className="flex items-center text-teal-600 font-medium text-xs group-hover:text-teal-700 transition-all pl-8">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <Modal isOpen={selectedPillar !== null} onClose={() => setSelectedPillar(null)}>
            {selectedPillar !== null && (
              <div className="p-8">
                {(() => {
                  const pillar = researchPillars[selectedPillar];
                  const Icon = pillar.icon;
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 bg-gradient-to-br ${pillar.color} rounded-xl shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <Heading level={2} className="text-2xl">{pillar.title}</Heading>
                      </div>
                      <div className="mb-4">
                        <Text size="lg" className="text-teal-700 font-semibold mb-3">Overview</Text>
                        <Text size="base" variant="body" className="leading-relaxed">{pillar.summary}</Text>
                      </div>
                      <div>
                        <Text size="lg" className="text-teal-700 font-semibold mb-3">Research Focus</Text>
                        <Text size="base" variant="body" className="leading-relaxed">{pillar.detail}</Text>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </Modal>
        </div>
      </Section>

      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 transform -skew-y-2 origin-top-left shadow-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <Section ref={methodRef.ref} background="gray" spacing="sm" className={`relative ${methodRef.isVisible ? 'fade-in' : ''}`}>
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full mb-3 font-bold text-xs shadow-lg">
              <CheckCircle2 className="w-4 h-4" />
              Methodology
            </div>
            <Heading level={2} align="center" className="mb-2 text-2xl">
              Methodological Framework
            </Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Panel Construction', desc: 'Recruitment and qualification of demographically diverse participant groups following structured selection criteria.', icon: Users, color: 'from-teal-500 to-cyan-600' },
              { title: 'Structured Observation', desc: 'Execution of controlled research protocols ensuring consistency and methodological integrity.', icon: Target, color: 'from-cyan-500 to-blue-600' },
              { title: 'Aggregated Analysis', desc: 'Synthesis of behavioral data into aggregated reports focusing on systemic observations.', icon: TrendingUp, color: 'from-blue-500 to-teal-600' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group hover-3d-card">
                  <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${item.color} p-6 shadow-xl h-full`}>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Heading level={3} className="text-white mb-2 text-sm font-bold">{item.title}</Heading>
                      <Text size="base" className="text-white/90 leading-relaxed text-xs">
                        {item.desc}
                      </Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 p-5 shadow-2xl group hover-3d-card">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -ml-20 -mb-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Heading level={3} className="text-white mb-2 text-base font-bold">Independent Research Organization</Heading>
                    <Text size="lg" className="text-white/90 mb-2 leading-relaxed text-xs">
                      SignalPanel operates as an independent research organization focused on the design, execution, and analysis of structured user research in regulated digital environments.
                    </Text>
                    <Text size="lg" className="text-white/90 leading-relaxed text-xs">
                      Work emphasizes methodological consistency, panel integrity, and aggregated findings rather than individual outcomes or platform-specific performance claims.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-teal-600 via-cyan-500 to-teal-600 transform skew-y-2 origin-top-left shadow-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent"></div>
      </div>

      <Section background="white" spacing="xs" className="relative pt-12">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 text-stone-700 rounded-full mb-3 font-bold text-xs shadow-md">
            <FileText className="w-4 h-4" />
            Scope
          </div>
          <Heading level={2} align="center" className="mb-2 text-2xl">
            Research Scope & Boundaries
          </Heading>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-6xl mx-auto items-start">
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-teal-200 p-6 shadow-xl h-fit">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-md">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <Heading level={3} className="text-teal-900 text-xl font-bold">What We Do</Heading>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      icon: Target,
                      title: 'Structured Independent Research',
                      detail: 'We conduct rigorous, methodologically sound research on user experience in age-restricted and regulated digital environments. Our research follows established protocols and maintains independence from commercial influences.'
                    },
                    {
                      icon: Users,
                      title: 'Diverse User Observation',
                      detail: 'We observe and document how real users interact with digital platforms across different demographic groups, experience levels, and behavioral patterns. This includes tracking navigation paths, comprehension challenges, and decision-making processes.'
                    },
                    {
                      icon: Database,
                      title: 'Aggregated Reporting',
                      detail: 'Our findings are reported at an aggregated, anonymized level that protects individual privacy while revealing systemic patterns. We never identify specific users, platforms, or make comparative performance claims.'
                    },
                    {
                      icon: FileText,
                      title: 'Methodological Transparency',
                      detail: 'We publish our research protocols, participant selection criteria, and analytical frameworks. This transparency allows others to evaluate our methodology and understand the scope and limitations of our findings.'
                    },
                    {
                      icon: Globe,
                      title: 'Jurisdictional Analysis',
                      detail: 'We document how user experiences vary across different regulatory frameworks, cultural contexts, and regional implementations. This helps identify universal patterns as well as region-specific design considerations.'
                    }
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    const isExpanded = expandedWeDo === idx;
                    return (
                      <div key={idx} className="border border-teal-100 rounded-lg overflow-hidden bg-gradient-to-r from-teal-50/50 to-cyan-50/50 hover:border-teal-300 transition-all">
                        <button
                          onClick={() => setExpandedWeDo(isExpanded ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-teal-50/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-white rounded-lg shadow-sm">
                              <ItemIcon className="w-4 h-4 text-teal-600" />
                            </div>
                            <Text size="base" className="text-stone-900 font-semibold text-sm">{item.title}</Text>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                          <div className="px-4 pb-4 pt-0">
                            <Text size="base" className="text-stone-700 leading-relaxed">{item.detail}</Text>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-stone-300 p-6 shadow-xl h-fit">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-stone-400/10 to-stone-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-gradient-to-br from-stone-600 to-stone-700 rounded-xl shadow-md">
                    <Ban className="w-6 h-6 text-white" />
                  </div>
                  <Heading level={3} className="text-stone-900 text-xl font-bold">What We Don't Do</Heading>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      icon: AlertCircle,
                      title: 'Platform Promotion or Endorsement',
                      detail: 'We do not provide endorsements, rankings, certifications, or promotional services for any platforms. Our research is observational and analytical, not evaluative or comparative in nature.'
                    },
                    {
                      icon: TrendingUp,
                      title: 'Optimization or Marketing Services',
                      detail: 'We are not a consulting firm and do not offer optimization advice, marketing services, conversion rate improvement strategies, or user acquisition guidance to platforms or operators.'
                    },
                    {
                      icon: Target,
                      title: 'Outcome or Effectiveness Claims',
                      detail: 'We do not make claims about user behavior modification, intervention effectiveness, harm reduction outcomes, or the real-world impact of specific design choices on user welfare or safety.'
                    },
                    {
                      icon: Users,
                      title: 'Commercial Platform Partnerships',
                      detail: 'We maintain independence by avoiding commercial partnerships, sponsorships, or financial relationships with platforms under observation. Our funding model does not create conflicts of interest with research integrity.'
                    },
                    {
                      icon: Shield,
                      title: 'Compliance Certification',
                      detail: 'We do not provide legal opinions, regulatory compliance assessments, audit services, or certifications regarding adherence to laws, regulations, or industry standards.'
                    }
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    const isExpanded = expandedWeDont === idx;
                    return (
                      <div key={idx} className="border border-stone-200 rounded-lg overflow-hidden bg-stone-50/50 hover:border-stone-400 transition-all">
                        <button
                          onClick={() => setExpandedWeDont(isExpanded ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-100/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-white rounded-lg shadow-sm">
                              <ItemIcon className="w-4 h-4 text-stone-600" />
                            </div>
                            <Text size="base" className="text-stone-900 font-semibold text-sm">{item.title}</Text>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-stone-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                          <div className="px-4 pb-4 pt-0">
                            <Text size="base" className="text-stone-700 leading-relaxed">{item.detail}</Text>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none"></div>
    </div>
  );
}
