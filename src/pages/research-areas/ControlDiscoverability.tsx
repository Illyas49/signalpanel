import { Shield } from 'lucide-react';
import Hero from '../../components/layout/Hero';
import Section from '../../components/layout/Section';
import ContentColumn from '../../components/layout/ContentColumn';
import Card from '../../components/content/Card';
import InsightBlock from '../../components/content/InsightBlock';
import Heading from '../../components/typography/Heading';
import Text from '../../components/typography/Text';
import FinalTakeaway from '../../components/specialized/FinalTakeaway';
import AnalysisSection from '../../components/specialized/AnalysisSection';

export default function ControlDiscoverability() {
  const dimensions = [
    {
      title: 'Visual Prominence',
      content: [
        'Controls positioned prominently in primary navigation areas, rendered with high visual contrast, or called out through distinctive design elements achieve higher discovery rates than controls embedded in settings menus or presented with minimal visual differentiation.',
        'Research observes whether safety controls appear on main interface screens, whether they use visual markers such as icons or color coding, and whether their presence is immediately apparent without scrolling or menu interaction. Studies track eye movement patterns and initial attention distribution to measure practical visibility.',
        'The balance between prominence and interface clutter is analyzed, as excessive visual emphasis on multiple controls may reduce the salience of any individual element through competition for attention.'
      ]
    },
    {
      title: 'Menu Placement',
      content: [
        'Hierarchical placement within menu structures substantially affects discovery likelihood. Controls accessible through a single menu interaction achieve discovery more reliably than those requiring multi-level navigation through settings categories.',
        'Studies document the navigational depth of critical controls, measuring how many clicks or menu expansions separate users from specific safety features. Research observes whether users correctly predict which menu categories contain specific controls and whether they exhaust navigation options when initial predictions fail.',
        'The consistency of control placement across different safety features is examined, as users who successfully locate one control may expect related controls to appear in the same organizational context.'
      ]
    },
    {
      title: 'Label Clarity',
      content: [
        'Control labels function as the primary textual indicator of functionality. Ambiguous labels, technical terminology, or inconsistent naming conventions reduce discoverability by failing to match user expectations about how controls will be described.',
        'Research examines whether control labels use plain language that clearly describes their function, whether they employ terms users would naturally search for, and whether naming remains consistent when the same control appears in different contexts. Studies observe user reactions to unfamiliar terminology and track whether label text provides sufficient information for users to understand control purpose.',
        'Cross-demographic analysis assesses whether label comprehension varies by age group or digital literacy level, identifying terminology that creates barriers for specific user populations.'
      ]
    },
    {
      title: 'Search Accessibility',
      content: [
        'When hierarchical navigation proves difficult, search functionality provides an alternative discovery pathway. Whether platforms index control names and descriptions for search, whether they surface controls in response to relevant queries, and whether search results link directly to functional controls all affect discovery through this mechanism.',
        'Studies observe whether users employ search when unable to locate controls through menus, what terminology they use in search queries, and whether searches successfully return relevant control results. Research documents common query patterns and measures the frequency with which searches fail to surface appropriate controls.',
        'The distinction between searching for help documentation versus functional controls is analyzed, as platforms may return explanatory articles without providing direct access to the settings users seek.'
      ]
    },
    {
      title: 'Contextual Presentation',
      content: [
        'Controls presented at contextually relevant moments achieve higher discovery than those only accessible through settings menus. Contextual presentation includes controls offered at decision points, during relevant user actions, or in response to specific user behaviors.',
        'Research examines whether platforms present spending limit options during deposit actions, whether time management controls appear during extended sessions, or whether self-exclusion information is offered when users exhibit specific patterns. Studies assess user receptivity to contextual control offers and measure adoption rates.',
        'The balance between helpful contextual presentation and intrusive interruption is observed, as excessive contextual prompting may generate user frustration or habituation that reduces effectiveness.'
      ]
    },
    {
      title: 'Persistent Accessibility',
      content: [
        'Users who discover controls once must be able to relocate them in subsequent sessions. Persistent accessibility depends on whether control locations remain stable across platform updates, whether navigation pathways remain consistent, and whether users retain mental models of where controls reside.',
        'Studies track whether users who successfully accessed controls in initial sessions can relocate them without assistance in later sessions. Research documents navigation time reduction between first and subsequent access attempts as an indicator of retained knowledge.',
        'The impact of interface updates on persistent accessibility is observed, particularly when platform redesigns alter control locations or navigation structures that users have previously learned.'
      ]
    }
  ];

  return (
    <div>
      <Hero
        imageUrl="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Control discoverability and safety"
        overlay="dark"
        height="sm"
      >
        <div className="flex items-start gap-8 mb-8">
          <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg flex-shrink-0">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div>
            <Heading level={1} weight="light" className="text-white mb-4">
              Control Discoverability
            </Heading>
            <div className="h-1 w-24 bg-white/80"></div>
          </div>
        </div>
        <Text size="xl" variant="light" className="max-w-3xl">
          User ability to locate safety controls and self-management tools in digital environments
        </Text>
      </Hero>

      <Section spacing="lg" background="white">
        <ContentColumn width="medium">
          <Text size="lg" variant="body" className="mb-6">
            Safety controls, privacy settings, and self-management tools serve critical functions in
            regulated digital environments. However, their effectiveness depends fundamentally on whether
            users can locate them when needed. Discoverability encompasses both initial awareness and
            subsequent ability to relocate controls across multiple sessions.
          </Text>
          <Text size="lg" variant="body" className="mb-6">
            Platforms may implement comprehensive control systems that remain functionally inaccessible
            if users cannot find them through normal navigation pathways. Visual prominence, menu
            placement, labeling clarity, and search accessibility all affect whether controls are
            discovered organically or remain effectively hidden despite technical availability.
          </Text>
          <Text size="lg" variant="body">
            SignalPanel research examines how users locate controls without external guidance, how long
            search processes take, and whether users successfully find specific controls when attempting
            to do so. Studies document navigation paths, search strategies, and indicators of frustration
            or abandonment during control-seeking behavior.
          </Text>
        </ContentColumn>
      </Section>

      <Section spacing="lg" background="gray">
        <AnalysisSection badge="Key Dimensions" title="Control Discoverability Dimensions">
          <div className="grid md:grid-cols-2 gap-8">
            {dimensions.map((dimension, index) => (
              <Card key={index} variant="elevated" padding="lg" className="hover:shadow-lg transition-shadow">
                <Heading level={3} weight="medium" className="mb-6">
                  {dimension.title}
                </Heading>
                <div className="space-y-4">
                  {dimension.content.map((paragraph, pIndex) => (
                    <Text key={pIndex} size="base" variant="body">
                      {paragraph}
                    </Text>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </AnalysisSection>
      </Section>

      <Section spacing="lg" background="white">
        <Heading level={2} weight="normal" className="mb-10">
          Observed Patterns
        </Heading>

        <ContentColumn width="medium">
          <div className="space-y-8">
            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Visual Prominence Impact:</strong> Research consistently demonstrates that visual prominence substantially affects initial
                discovery. Controls with dedicated navigation positions or distinctive visual treatments
                are located significantly faster than those embedded in generic settings lists without
                visual differentiation.
              </p>
            </InsightBlock>

            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Navigation Depth Barriers:</strong> Deep menu nesting creates systematic discovery failures. Controls requiring three or more
                navigational steps exhibit substantially lower organic discovery rates, and users often
                abandon search attempts before exhausting all potential menu locations.
              </p>
            </InsightBlock>

            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Label Terminology Mismatches:</strong> Label terminology mismatches between user expectations and platform naming conventions
                generate search failures. Users employ varied terminology when seeking controls, and
                platforms that use narrow technical labels miss opportunities for discovery through
                search mechanisms.
              </p>
            </InsightBlock>

            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Contextual Presentation Success:</strong> Contextual control presentation achieves higher visibility than settings-only access,
                particularly for users who do not proactively explore settings menus. However, contextual
                offers presented too frequently or at inappropriate moments show diminishing effectiveness
                through user habituation.
              </p>
            </InsightBlock>

            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Access Retention Variance:</strong> Persistent accessibility shows high variability. Users who discover controls through
                deliberate search generally relocate them successfully in subsequent sessions. Users who
                encounter controls through contextual presentation or external guidance show lower
                subsequent relocation success, suggesting passive discovery does not establish durable
                mental models of control location.
              </p>
            </InsightBlock>
          </div>
        </ContentColumn>
      </Section>

      <Section spacing="lg" background="gray" className="border-t-2 border-stone-200">
        <FinalTakeaway
          title="Control Discoverability Research Framework"
          variant="default"
        >
          <p>
            Control discoverability findings are reported as aggregated observations of search success
            rates, navigation patterns, and time-to-discovery metrics. Individual user search attempts
            are not disclosed, and platform-specific control implementations are anonymized in public
            reports.
          </p>
          <p>
            Research outputs describe observed discovery mechanisms, common navigation pathways, and
            patterns of search success or failure without identifying specific platforms or ranking
            implementations. Findings characterize approaches rather than evaluating performance.
          </p>
          <p>
            Metrics include average time to locate specific controls, proportion of users successfully
            discovering controls without assistance, navigation depth measurements, and repeat-access
            success rates. These are presented descriptively to characterize observed patterns without
            prescribing specific implementation strategies or recommending changes.
          </p>
        </FinalTakeaway>
      </Section>
    </div>
  );
}
