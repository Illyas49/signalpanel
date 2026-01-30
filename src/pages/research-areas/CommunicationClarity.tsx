import { FileText, BookOpen, Type, AlignLeft, AlertTriangle, CheckCircle } from 'lucide-react';

export default function CommunicationClarity() {
  return (
    <div>
      <section className="py-16 md:py-20 border-b-2 border-stone-200 bg-gradient-to-b from-white to-[#F6F7F9] -mx-8 md:-mx-16 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 bg-slate-100 rounded">
              <FileText className="w-10 h-10 text-slate-700" />
            </div>
            <div>
              <h1 className="mb-4">Communication Clarity</h1>
              <div className="h-1 w-24 bg-slate-700"></div>
            </div>
          </div>
          <p className="text-xl text-stone-600 max-w-3xl" style={{ lineHeight: '1.7' }}>
            Assessment of language, readability, and comprehension in user-facing communications
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto">
        <div className="space-y-6">
          <p className="text-lg" style={{ lineHeight: '1.7' }}>
            User-facing communications in regulated digital environments serve multiple critical functions.
            They explain regulatory requirements, describe platform functionality, warn of risks, confirm
            user actions, and provide instructions for control use. The clarity of these communications
            directly affects user comprehension and appropriate decision-making.
          </p>
          <p className="text-lg" style={{ lineHeight: '1.7' }}>
            Complex language, excessive technical terminology, or poor information structure can render
            communications ineffective despite their presence. Disclosure documents written at advanced
            reading levels, warning messages that fail to clearly describe risks, or instruction text
            that assumes technical knowledge all create comprehension barriers that limit practical user
            understanding.
          </p>
        </div>

        <div className="bg-[#EEF1F5] p-8 border-l-4 border-slate-700 mt-10">
          <p style={{ lineHeight: '1.7' }}>
            SignalPanel research examines the linguistic characteristics of platform communications, user
            comprehension of critical messages, and the relationship between communication design and
            user behavior. Studies measure readability, assess terminology accessibility, and observe
            user responses to different communication approaches.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#EEF1F5] -mx-8 md:-mx-16 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12">Key Dimensions</h2>

          <div className="space-y-8">
            <div className="bg-white border-3 border-stone-300 p-8" style={{ borderWidth: '3px' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2.5 bg-slate-100 rounded">
                  <BookOpen className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 pt-1">Readability & Grade Level</h3>
              </div>
              <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.7' }}>
                <p>
                  Reading grade level measures the educational background required to comprehend written text.
                  Platform communications written at high grade levels exclude users without advanced reading
                  skills and create particular barriers for younger users in age-restricted environments.
                </p>
                <p>
                  Research applies standardized readability metrics to terms of service, privacy policies,
                  disclosure documents, warning messages, and instructional text. Studies document the grade
                  levels at which critical communications are written and assess whether they exceed the
                  reading capabilities of target user populations.
                </p>
                <p>
                  Cross-demographic analysis examines whether readability barriers disproportionately affect
                  specific user groups, including younger users, non-native speakers, or individuals with
                  lower educational attainment.
                </p>
              </div>
            </div>

            <div className="bg-white border-3 border-stone-300 p-8" style={{ borderWidth: '3px' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2.5 bg-slate-100 rounded">
                  <Type className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 pt-1">Terminology & Jargon</h3>
              </div>
              <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.7' }}>
                <p>
                  Technical terminology, legal jargon, and industry-specific language create comprehension
                  barriers when users lack familiarity with specialized vocabulary. Platform communications
                  that employ undefined technical terms or assume knowledge of regulatory concepts limit
                  accessibility to users with prior domain expertise.
                </p>
                <p>
                  Studies identify technical terms used in critical communications and assess whether they
                  are defined within text or explained through supplementary information. Research observes
                  user reactions to unfamiliar terminology and measures comprehension through post-exposure
                  recall and interpretation tasks.
                </p>
                <p>
                  The balance between precision and accessibility is examined, recognizing that legal accuracy
                  may sometimes require technical language while noting the comprehension costs this imposes
                  on general user populations.
                </p>
              </div>
            </div>

            <div className="bg-white border-3 border-stone-300 p-8" style={{ borderWidth: '3px' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2.5 bg-slate-100 rounded">
                  <AlignLeft className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 pt-1">Message Length & Density</h3>
              </div>
              <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.7' }}>
                <p>
                  Lengthy communications with high information density challenge user attention and
                  comprehension. Users exhibit declining attention across long documents and demonstrate
                  reduced retention of information presented late in extensive texts.
                </p>
                <p>
                  Research measures document length, sentence complexity, and information density in platform
                  communications. Studies observe how far users scroll through long disclosures, how much
                  time they spend reading, and whether they return to review information after initial
                  presentation.
                </p>
                <p>
                  The effectiveness of progressive disclosure techniques, summarization, and layered
                  information presentation is assessed as potential approaches to managing information
                  density while maintaining comprehensive content availability.
                </p>
              </div>
            </div>

            <div className="bg-white border-3 border-stone-300 p-8" style={{ borderWidth: '3px' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2.5 bg-slate-100 rounded">
                  <AlertTriangle className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 pt-1">Warning Effectiveness</h3>
              </div>
              <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.7' }}>
                <p>
                  Warning messages serve to alert users to risks, consequences, or important considerations
                  before action completion. Effective warnings clearly describe what risk exists, why it
                  matters, and what users can do in response. Ineffective warnings use vague language,
                  fail to specify consequences, or present warnings so frequently that users habituate.
                </p>
                <p>
                  Studies examine the specificity of warning language, whether warnings describe concrete
                  risks rather than abstract concerns, and whether they provide actionable information.
                  Research observes user responses to warnings including whether users pause before
                  proceeding, modify their actions, or click through without apparent consideration.
                </p>
                <p>
                  The frequency of warning presentation is analyzed to identify potential habituation effects,
                  where users become desensitized through repeated exposure to similar warning messages.
                </p>
              </div>
            </div>

            <div className="bg-white border-3 border-stone-300 p-8" style={{ borderWidth: '3px' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2.5 bg-slate-100 rounded">
                  <CheckCircle className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 pt-1">Instructional Clarity</h3>
              </div>
              <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.7' }}>
                <p>
                  Instructions guide users through processes, explain control functionality, or describe how
                  to complete specific tasks. Clear instructions use step-by-step formatting, concrete action
                  verbs, and visual aids when appropriate. Unclear instructions employ passive voice, assume
                  user knowledge, or fail to specify exact actions required.
                </p>
                <p>
                  Research observes whether users successfully complete instructed tasks, where they
                  encounter difficulty, and whether they request additional clarification. Studies track
                  task completion rates, time spent interpreting instructions, and frequency of errors
                  during execution.
                </p>
                <p>
                  The match between instructional language and user mental models is examined, as instructions
                  that use unfamiliar terminology or reference interface elements users cannot identify create
                  execution barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="mb-8">Observed Patterns</h2>
        <div className="space-y-6" style={{ lineHeight: '1.7' }}>
          <p className="text-stone-700">
            Research consistently identifies substantial readability gaps between platform communications
            and target user populations. Terms of service and privacy policies frequently measure at
            college reading levels or higher, creating comprehension barriers for significant user
            segments including younger users near minimum age thresholds.
          </p>
          <p className="text-stone-700">
            Technical terminology appears extensively in communications about safety controls and privacy
            settings. Terms like "self-exclusion," "geolocation," and "biometric authentication" are
            used without definition, limiting comprehension among users unfamiliar with these concepts.
          </p>
          <p className="text-stone-700">
            Warning message effectiveness shows high variability. Specific warnings that clearly describe
            risks and consequences generate measurable behavioral responses. Generic warnings using
            abstract language show minimal impact on user decision-making and exhibit habituation effects
            when presented frequently.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto border-t-2 border-stone-200">
        <h2 className="mb-8">Reporting & Aggregation</h2>
        <div className="space-y-6" style={{ lineHeight: '1.7' }}>
          <p className="text-stone-700">
            Communication clarity findings are reported as aggregated observations of readability
            measurements, comprehension indicators, and user response patterns. Specific platform
            communications are not quoted in public reports, and findings describe general patterns
            rather than identifying implementations.
          </p>
          <p className="text-stone-700">
            Research outputs include readability scores, terminology complexity assessments, message
            length distributions, and comprehension success rates aggregated across participants.
            These metrics characterize communication approaches without ranking specific platforms.
          </p>
          <p className="text-stone-700">
            Reports document observed relationships between communication characteristics and user
            comprehension without prescribing specific language or recommending particular communication
            strategies. Findings describe what was observed rather than what should be implemented.
          </p>
        </div>
      </section>
    </div>
  );
}
