import { useState, useEffect } from 'react';
import { ArrowRight, Users, Globe, FileText, Database, Shield, Layout } from 'lucide-react';
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
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-light text-white mb-3 tracking-tight">
        {current}{suffix}
      </div>
      <div className="text-sm text-teal-100 uppercase tracking-widest font-medium">{label}</div>
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
      <Hero
        imageUrl="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Research background"
        overlay="medium"
        height="md"
        rounded={true}
      >
        <div ref={heroRef.ref} className={`text-center ${heroRef.isVisible ? 'fade-in-up' : ''}`}>
          <Heading level={1} align="center" className="mb-10 text-white drop-shadow-sm">
            Structured Research on User Experience in <span className="font-normal">Age-Restricted Digital Environments</span>
          </Heading>
          <Text size="xl" variant="light" className="max-w-3xl mx-auto mb-12 drop-shadow-sm">
            SignalPanel conducts panel-based research to document how users interact with regulated digital platforms across jurisdictions.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('Methodology')}
              className="group px-8 py-4 bg-white text-teal-800 hover:bg-teal-50 transition-all text-sm font-medium tracking-wide flex items-center gap-2 shadow-lg"
            >
              View Methodology
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('Research Areas')}
              className="px-8 py-4 text-white hover:text-teal-100 transition-all text-sm font-medium tracking-wide border-b-2 border-white/50 hover:border-white"
            >
              Explore Research Areas
            </button>
          </div>
        </div>
      </Hero>

      <Section background="gradient" spacing="lg" className="mt-16 md:mt-24">
        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          <AnimatedStat value={12} label="Research Areas" />
          <AnimatedStat value={8} label="Jurisdictions" />
          <AnimatedStat value={100000} label="Participants" suffix="+" />
        </div>
      </Section>

      <Section ref={domainsRef.ref} background="white" spacing="lg" className={domainsRef.isVisible ? 'fade-in' : ''}>
        <AnalysisSection badge="Research Domains" title="Core Research Domains">
          <ContentColumn width="medium" className="text-center mb-12">
            <Text size="lg" variant="muted">
              SignalPanel organizes investigation around six foundational areas of user experience in regulated digital environments.
            </Text>
          </ContentColumn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setExpandedPillar(expandedPillar === index ? null : index)}
                >
                  <Card variant="default" padding="md" className="hover:border-teal-600 transition-all hover:shadow-md h-full">
                    <div className="mb-5 p-2.5 bg-teal-50 inline-flex rounded group-hover:bg-teal-100 transition-colors">
                      <Icon className="w-6 h-6 text-teal-700" />
                    </div>
                    <Heading level={3} className="mb-4">
                      {pillar.title}
                    </Heading>
                    <Text size="sm" variant="muted">
                      {pillar.summary}
                    </Text>
                    {expandedPillar === index && (
                      <div className="mt-4 pt-4 border-t border-teal-100">
                        <Text size="sm" variant="muted">
                          {pillar.detail}
                        </Text>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </AnalysisSection>
      </Section>

      <Section background="gray" spacing="lg">
        <AnalysisSection badge="Methodology" title="Methodological Framework">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <Card variant="default" padding="md" className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
              </div>
              <Heading level={3} align="center" className="mb-4">Panel Construction</Heading>
              <Text size="sm" variant="muted">
                Recruitment and qualification of demographically diverse participant groups following structured selection criteria.
              </Text>
            </Card>

            <Card variant="default" padding="md" className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
              </div>
              <Heading level={3} align="center" className="mb-4">Structured Observation</Heading>
              <Text size="sm" variant="muted">
                Execution of controlled research protocols ensuring consistency and methodological integrity.
              </Text>
            </Card>

            <Card variant="default" padding="md" className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
              </div>
              <Heading level={3} align="center" className="mb-4">Aggregated Analysis</Heading>
              <Text size="sm" variant="muted">
                Synthesis of behavioral data into aggregated reports focusing on systemic observations.
              </Text>
            </Card>
          </div>

          <ContentColumn width="medium">
            <InsightBlock variant="highlight">
              <p>
                SignalPanel operates as an independent research organization focused on the design, execution, and analysis of structured user research in regulated digital environments.
              </p>
              <p>
                Work emphasizes methodological consistency, panel integrity, and aggregated findings rather than individual outcomes or platform-specific performance claims.
              </p>
            </InsightBlock>
          </ContentColumn>
        </AnalysisSection>
      </Section>

      <Section background="white" spacing="lg" className="border-t border-stone-200">
        <AnalysisSection badge="Scope" title="Research Scope & Boundaries">
          <div className="grid md:grid-cols-2 gap-16">
            <InsightBlock title="Organizational Activities" variant="default">
              <p className="flex items-start gap-3">
                <span className="text-teal-600 mt-1 font-light">—</span>
                <span>Conduct structured, independent research on user experience in regulated digital environments</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-teal-600 mt-1 font-light">—</span>
                <span>Observe and document user interaction patterns across diverse participant populations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-teal-600 mt-1 font-light">—</span>
                <span>Report findings at an aggregated level without identifying individual users or platforms</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-teal-600 mt-1 font-light">—</span>
                <span>Maintain methodological transparency through published research protocols</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-teal-600 mt-1 font-light">—</span>
                <span>Document jurisdictional variations in user experience and interface implementation</span>
              </p>
            </InsightBlock>

            <div className="p-8 bg-stone-50 border-l-4 border-stone-300 rounded-r-lg">
              <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-6 font-medium">Excluded Activities</h3>
              <div className="space-y-4 text-stone-500 text-sm" style={{ lineHeight: '1.8' }}>
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
        </AnalysisSection>
      </Section>
    </div>
  );
}
