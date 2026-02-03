import { useState, useEffect } from 'react';
import { ArrowRight, Users, Globe, FileText, Database, Shield, Layout, CheckCircle2, Target, TrendingUp, ChevronDown } from 'lucide-react';
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
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
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
          <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <span className="text-white text-xs font-bold tracking-wide uppercase">Structured Research Platform</span>
          </div>
          <Heading level={1} align="center" className="mb-6 text-white drop-shadow-lg leading-tight text-4xl md:text-5xl">
            User Experience Research in <br/><span className="font-bold bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">Age-Restricted Digital Environments</span>
          </Heading>
          <Text size="xl" variant="light" className="max-w-2xl mx-auto mb-8 drop-shadow-sm text-white/90 leading-relaxed text-base">
            SignalPanel conducts panel-based research to document how users interact with regulated digital platforms across jurisdictions.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('Methodology')}
              className="group px-6 py-3 bg-white text-teal-800 hover:bg-teal-50 transition-all text-sm font-semibold tracking-wide flex items-center gap-2 shadow-xl rounded-xl hover:-translate-y-1 duration-300"
            >
              View Methodology
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('Research Areas')}
              className="px-6 py-3 text-white hover:text-teal-100 transition-all text-sm font-semibold tracking-wide border-2 border-white/50 hover:border-white rounded-xl hover:-translate-y-1 duration-300"
            >
              Explore Research Areas
            </button>
          </div>
        </div>
      </Hero>

      <div className="h-16"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 rounded-2xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <AnimatedStat value={12} label="Research Areas" />
            <AnimatedStat value={8} label="Jurisdictions" />
            <AnimatedStat value={100} label="Participants" suffix="K+" />
          </div>
        </div>
      </div>

      <Section ref={domainsRef.ref} background="white" spacing="md" className={`relative ${domainsRef.isVisible ? 'fade-in' : ''}`}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full mb-4 font-bold text-xs shadow-md">
              <Target className="w-4 h-4" />
              Research Domains
            </div>
            <Heading level={2} align="center" className="mb-3 text-3xl">
              Core Research Domains
            </Heading>
            <Text size="lg" variant="muted" className="max-w-2xl mx-auto leading-relaxed text-base">
              SignalPanel organizes investigation around six foundational areas of user experience in regulated digital environments.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isExpanded = expandedPillar === index;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setExpandedPillar(isExpanded ? null : index)}
                >
                  <Card variant="compact" padding="sm" hover3d className="relative h-full bg-white">
                    <div className={`mb-3 p-2.5 bg-gradient-to-br ${pillar.color} inline-flex rounded-lg shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <Heading level={3} className="mb-2 text-base group-hover:text-teal-700 transition-colors">
                      {pillar.title}
                    </Heading>
                    <Text size="base" variant="muted" className="mb-3 leading-relaxed text-sm">
                      {pillar.summary}
                    </Text>
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-teal-100 fade-in">
                        <Text size="base" variant="muted" className="leading-relaxed text-sm">
                          {pillar.detail}
                        </Text>
                      </div>
                    )}
                    <div className="mt-3 flex items-center text-teal-600 font-semibold text-xs group-hover:text-teal-700 transition-all">
                      {isExpanded ? 'Show less' : 'Learn more'}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 transform -skew-y-3 origin-top-left shadow-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <Section ref={methodRef.ref} background="gray" spacing="md" className={`relative ${methodRef.isVisible ? 'fade-in' : ''}`}>
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full mb-4 font-bold text-xs shadow-lg">
              <CheckCircle2 className="w-4 h-4" />
              Methodology
            </div>
            <Heading level={2} align="center" className="mb-4 text-3xl">
              Methodological Framework
            </Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Panel Construction', desc: 'Recruitment and qualification of demographically diverse participant groups following structured selection criteria.', icon: Users },
              { title: 'Structured Observation', desc: 'Execution of controlled research protocols ensuring consistency and methodological integrity.', icon: Target },
              { title: 'Aggregated Analysis', desc: 'Synthesis of behavioral data into aggregated reports focusing on systemic observations.', icon: TrendingUp }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} variant="hover-lift" padding="md" hover3d className="text-center bg-white h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <Heading level={3} align="center" className="mb-3 text-base">{item.title}</Heading>
                  <Text size="base" variant="muted" className="leading-relaxed text-sm">
                    {item.desc}
                  </Text>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 p-6 md:p-8 shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -ml-24 -mb-24"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Heading level={3} className="text-white mb-3 text-lg">Independent Research Organization</Heading>
                    <Text size="lg" className="text-white/95 mb-3 leading-relaxed text-sm">
                      SignalPanel operates as an independent research organization focused on the design, execution, and analysis of structured user research in regulated digital environments.
                    </Text>
                    <Text size="lg" className="text-white/95 leading-relaxed text-sm">
                      Work emphasizes methodological consistency, panel integrity, and aggregated findings rather than individual outcomes or platform-specific performance claims.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-teal-600 via-cyan-500 to-teal-600 transform skew-y-3 origin-top-left shadow-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent"></div>
      </div>

      <Section background="white" spacing="md" className="relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full mb-4 font-bold text-xs shadow-md">
            <FileText className="w-4 h-4" />
            Scope
          </div>
          <Heading level={2} align="center" className="mb-3 text-3xl">
            Research Scope & Boundaries
          </Heading>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <Card variant="compact" padding="md" className="border-l-4 border-teal-600 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-teal-700" />
                </div>
                <Heading level={3} className="text-base">Organizational Activities</Heading>
              </div>
            </div>
            <div className="space-y-2">
              {[
                'Conduct structured, independent research on user experience in regulated digital environments',
                'Observe and document user interaction patterns across diverse participant populations',
                'Report findings at an aggregated level without identifying individual users or platforms',
                'Maintain methodological transparency through published research protocols',
                'Document jurisdictional variations in user experience and interface implementation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-teal-50/50 rounded-lg hover:bg-teal-50 transition-all duration-200">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <Text size="base" variant="body" className="leading-relaxed text-sm">{item}</Text>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="compact" padding="md" className="border-l-4 border-stone-400 bg-stone-50/50 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-stone-200 rounded-lg">
                  <FileText className="w-5 h-5 text-stone-600" />
                </div>
                <Heading level={3} className="text-stone-600 text-base">Excluded Activities</Heading>
              </div>
            </div>
            <div className="space-y-2">
              {[
                'Platform promotion, endorsement, or ranking services',
                'Optimization consulting, marketing services, or compliance advice',
                'Claims about user outcomes, behavior modification, or intervention effectiveness',
                'Commercial partnerships with platforms under observation',
                'Legal or regulatory compliance certification'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white/70 rounded-lg hover:bg-white transition-all duration-200">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                  <Text size="base" variant="muted" className="leading-relaxed text-sm">{item}</Text>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none"></div>
    </div>
  );
}
