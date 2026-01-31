import { FileText, BookOpen, Type, AlignLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import Hero from '../../components/layout/Hero';
import Section from '../../components/layout/Section';
import ContentColumn from '../../components/layout/ContentColumn';
import Card from '../../components/content/Card';
import InsightBlock from '../../components/content/InsightBlock';
import Heading from '../../components/typography/Heading';
import Text from '../../components/typography/Text';
import FinalTakeaway from '../../components/specialized/FinalTakeaway';
import AnalysisSection from '../../components/specialized/AnalysisSection';

export default function CommunicationClarity() {
  const dimensions = [
    {
      icon: BookOpen,
      title: 'Readability & Grade Level',
      content: [
        'Reading grade level measures the educational background required to comprehend written text. Platform communications written at high grade levels exclude users without advanced reading skills and create particular barriers for younger users in age-restricted environments.',
        'Research applies standardized readability metrics to terms of service, privacy policies, disclosure documents, warning messages, and instructional text. Studies document the grade levels at which critical communications are written and assess whether they exceed the reading capabilities of target user populations.',
        'Cross-demographic analysis examines whether readability barriers disproportionately affect specific user groups, including younger users, non-native speakers, or individuals with lower educational attainment.'
      ]
    },
    {
      icon: Type,
      title: 'Terminology & Jargon',
      content: [
        'Technical terminology, legal jargon, and industry-specific language create comprehension barriers when users lack familiarity with specialized vocabulary. Platform communications that employ undefined technical terms or assume knowledge of regulatory concepts limit accessibility to users with prior domain expertise.',
        'Studies identify technical terms used in critical communications and assess whether they are defined within text or explained through supplementary information. Research observes user reactions to unfamiliar terminology and measures comprehension through post-exposure recall and interpretation tasks.',
        'The balance between precision and accessibility is examined, recognizing that legal accuracy may sometimes require technical language while noting the comprehension costs this imposes on general user populations.'
      ]
    },
    {
      icon: AlignLeft,
      title: 'Message Length & Density',
      content: [
        'Lengthy communications with high information density challenge user attention and comprehension. Users exhibit declining attention across long documents and demonstrate reduced retention of information presented late in extensive texts.',
        'Research measures document length, sentence complexity, and information density in platform communications. Studies observe how far users scroll through long disclosures, how much time they spend reading, and whether they return to review information after initial presentation.',
        'The effectiveness of progressive disclosure techniques, summarization, and layered information presentation is assessed as potential approaches to managing information density while maintaining comprehensive content availability.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Warning Effectiveness',
      content: [
        'Warning messages serve to alert users to risks, consequences, or important considerations before action completion. Effective warnings clearly describe what risk exists, why it matters, and what users can do in response. Ineffective warnings use vague language, fail to specify consequences, or present warnings so frequently that users habituate.',
        'Studies examine the specificity of warning language, whether warnings describe concrete risks rather than abstract concerns, and whether they provide actionable information. Research observes user responses to warnings including whether users pause before proceeding, modify their actions, or click through without apparent consideration.',
        'The frequency of warning presentation is analyzed to identify potential habituation effects, where users become desensitized through repeated exposure to similar warning messages.'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Instructional Clarity',
      content: [
        'Instructions guide users through processes, explain control functionality, or describe how to complete specific tasks. Clear instructions use step-by-step formatting, concrete action verbs, and visual aids when appropriate. Unclear instructions employ passive voice, assume user knowledge, or fail to specify exact actions required.',
        'Research observes whether users successfully complete instructed tasks, where they encounter difficulty, and whether they request additional clarification. Studies track task completion rates, time spent interpreting instructions, and frequency of errors during execution.',
        'The match between instructional language and user mental models is examined, as instructions that use unfamiliar terminology or reference interface elements users cannot identify create execution barriers.'
      ]
    }
  ];

  return (
    <div>
      <Hero
        imageUrl="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Communication and clarity"
        overlay="dark"
        height="sm"
      >
        <div className="flex items-start gap-8 mb-8">
          <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg flex-shrink-0">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <div>
            <Heading level={1} weight="light" className="text-white mb-4">
              Communication Clarity
            </Heading>
            <div className="h-1 w-24 bg-white/80"></div>
          </div>
        </div>
        <Text size="xl" variant="light" className="max-w-3xl">
          Assessment of language, readability, and comprehension in user-facing communications
        </Text>
      </Hero>

      <Section spacing="lg" background="white">
        <ContentColumn width="medium">
          <Text size="lg" variant="body" className="mb-6">
            User-facing communications in regulated digital environments serve multiple critical functions.
            They explain regulatory requirements, describe platform functionality, warn of risks, confirm
            user actions, and provide instructions for control use. The clarity of these communications
            directly affects user comprehension and appropriate decision-making.
          </Text>
          <Text size="lg" variant="body">
            Complex language, excessive technical terminology, or poor information structure can render
            communications ineffective despite their presence. Disclosure documents written at advanced
            reading levels, warning messages that fail to clearly describe risks, or instruction text
            that assumes technical knowledge all create comprehension barriers that limit practical user
            understanding.
          </Text>
        </ContentColumn>

        <ContentColumn width="medium" className="mt-12">
          <InsightBlock variant="highlight">
            <p>
              SignalPanel research examines the linguistic characteristics of platform communications, user
              comprehension of critical messages, and the relationship between communication design and
              user behavior. Studies measure readability, assess terminology accessibility, and observe
              user responses to different communication approaches.
            </p>
          </InsightBlock>
        </ContentColumn>
      </Section>

      <Section spacing="lg" background="gray">
        <AnalysisSection badge="Key Dimensions" title="Communication Research Dimensions">
          <div className="grid md:grid-cols-2 gap-8">
            {dimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <Card key={index} variant="elevated" padding="lg" className="hover:shadow-lg transition-shadow">
                  <div className="mb-6 p-3 bg-cyan-50 inline-flex rounded-lg">
                    <Icon className="w-7 h-7 text-cyan-700" />
                  </div>
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
              );
            })}
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
                <strong className="text-cyan-800">Readability Gaps:</strong> Research consistently identifies substantial readability gaps between platform communications
                and target user populations. Terms of service and privacy policies frequently measure at
                college reading levels or higher, creating comprehension barriers for significant user
                segments including younger users near minimum age thresholds.
              </p>
            </InsightBlock>

            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Terminology Barriers:</strong> Technical terminology appears extensively in communications about safety controls and privacy
                settings. Terms like "self-exclusion," "geolocation," and "biometric authentication" are
                used without definition, limiting comprehension among users unfamiliar with these concepts.
              </p>
            </InsightBlock>

            <InsightBlock variant="default">
              <p>
                <strong className="text-cyan-800">Warning Variability:</strong> Warning message effectiveness shows high variability. Specific warnings that clearly describe
                risks and consequences generate measurable behavioral responses. Generic warnings using
                abstract language show minimal impact on user decision-making and exhibit habituation effects
                when presented frequently.
              </p>
            </InsightBlock>
          </div>
        </ContentColumn>
      </Section>

      <Section spacing="lg" background="gray" className="border-t-2 border-stone-200">
        <FinalTakeaway
          title="Communication Clarity Research Framework"
          variant="default"
        >
          <p>
            Communication clarity findings are reported as aggregated observations of readability
            measurements, comprehension indicators, and user response patterns. Specific platform
            communications are not quoted in public reports, and findings describe general patterns
            rather than identifying implementations.
          </p>
          <p>
            Research outputs include readability scores, terminology complexity assessments, message
            length distributions, and comprehension success rates aggregated across participants.
            These metrics characterize communication approaches without ranking specific platforms.
          </p>
          <p>
            Reports document observed relationships between communication characteristics and user
            comprehension without prescribing specific language or recommending particular communication
            strategies. Findings describe what was observed rather than what should be implemented.
          </p>
        </FinalTakeaway>
      </Section>
    </div>
  );
}
