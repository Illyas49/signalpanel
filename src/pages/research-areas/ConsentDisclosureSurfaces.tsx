export default function ConsentDisclosureSurfaces() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <section className="border-b-2 border-teal-200 pb-8">
        <h1 className="mb-4 text-4xl">Consent & Disclosure Surfaces</h1>
        <div className="h-1 w-20 bg-teal-600 mb-8"></div>

        <div className="max-w-4xl space-y-6">
          <p className="text-lg leading-relaxed">
            Consent mechanisms and disclosure presentations serve critical legal and informational
            functions in regulated digital environments. They communicate terms of service, privacy
            practices, regulatory obligations, and risk information while collecting legally required
            user acknowledgments. The design of these surfaces affects both compliance validity and
            practical user comprehension.
          </p>
          <p className="text-lg leading-relaxed">
            Disclosure surfaces must balance competing objectives. Legal precision requires comprehensive
            information and specific terminology, while user comprehension benefits from brevity and
            plain language. Consent mechanisms must document user acknowledgment while avoiding patterns
            that suggest users consent without actual understanding.
          </p>
          <p className="text-lg leading-relaxed">
            SignalPanel research examines how platforms present disclosures and collect consent, how
            users interact with these surfaces, and whether design approaches facilitate or impede
            informed acknowledgment. Studies observe reading behaviors, comprehension indicators, and
            consent patterns across different presentation approaches.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-10">Key Dimensions</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Presentation Timing</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              When disclosures appear affects user attention and comprehension. Consent requests
              presented during registration compete with other information demands, while disclosures
              shown before specific actions benefit from contextual relevance but may interrupt user
              workflows.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research observes whether platforms present all disclosures during initial registration
              or distribute them across relevant interaction points. Studies track user attention
              levels at different presentation moments and measure whether timing affects engagement
              with disclosure content.
            </p>
            <p className="leading-relaxed text-stone-700">
              The balance between comprehensive upfront disclosure and progressive contextual presentation
              is analyzed, recognizing that each approach carries different implications for user burden
              and comprehension opportunity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Content Accessibility</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Long legal documents require appropriate presentation mechanisms to enable user review.
              Scrollable containers, expandable sections, and linked full-document access each affect
              whether users can practically access complete disclosure content.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies examine whether users can scroll through full disclosure documents, how far they
              scroll before consenting, and whether they access linked full documents when summaries
              are provided. Research documents the length of disclosure documents and assesses whether
              presentation mechanisms accommodate extensive content.
            </p>
            <p className="leading-relaxed text-stone-700">
              Mobile versus desktop presentation differences are analyzed, as screen size constraints
              affect disclosure accessibility and may require different presentation approaches to
              maintain content availability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Summarization and Layering</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Platforms may provide summary versions of legal documents alongside full text, or employ
              layered disclosure where users access increasingly detailed information progressively.
              These approaches attempt to balance comprehension and completeness.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research observes whether summaries accurately represent full document content, whether
              users rely primarily on summaries without accessing complete documents, and whether
              summary language improves comprehension compared to full legal text. Studies measure
              how frequently users access full documents when summaries are provided.
            </p>
            <p className="leading-relaxed text-stone-700">
              The risk of summary over-simplification is examined, as attempts to improve readability
              may omit material information that affects user understanding of actual terms or privacy
              practices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Consent Mechanism Design</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Consent collection mechanisms range from simple checkboxes to active acknowledgment
              buttons to signature requirements. The friction imposed by different mechanisms affects
              both user completion rates and the likelihood of actual comprehension before consent.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies examine whether users must take explicit action to consent or whether passive
              mechanisms allow continuation without active acknowledgment. Research observes whether
              consent mechanisms require users to scroll through disclosures before enabling consent
              buttons, and whether such requirements actually increase engagement or simply create
              friction users bypass minimally.
            </p>
            <p className="leading-relaxed text-stone-700">
              The specificity of consent requests is analyzed, distinguishing between blanket consent
              to all terms and granular consent mechanisms that allow users to accept different
              categories of data usage or communication separately.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Visual Hierarchy and Emphasis</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Not all disclosure content carries equal importance. Visual design can emphasize critical
              information through formatting, color, positioning, or typographic treatment. Alternatively,
              undifferentiated presentation treats all content equally regardless of importance to user
              decision-making.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research documents whether platforms use visual hierarchy to highlight critical terms,
              risk information, or privacy implications. Studies observe whether emphasized content
              receives greater user attention and whether users correctly identify the most important
              aspects of disclosure documents.
            </p>
            <p className="leading-relaxed text-stone-700">
              The potential for visual emphasis to mislead is examined, as highlighting some information
              may inappropriately de-emphasize other material content, creating selective attention
              patterns that do not serve user comprehension.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Update and Change Communication</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Terms of service and privacy policies change over time. How platforms communicate updates,
              whether they require renewed consent, and whether they clearly explain what changed affects
              user awareness of modified terms under which they continue to operate.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies observe whether users receive notifications of policy changes, whether change
              summaries clearly explain modifications, and whether users must actively acknowledge
              updated terms. Research examines whether platforms highlight specific changes or simply
              notify users that documents have been revised.
            </p>
            <p className="leading-relaxed text-stone-700">
              User engagement with update notifications is tracked, including whether users access
              updated documents, how much time they spend reviewing changes, and whether they understand
              what has been modified from previous versions.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Observed Patterns</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Research consistently observes minimal user engagement with full disclosure documents during
            registration. Users exhibit rapid scrolling behaviors, brief viewing times, and immediate
            consent actions suggesting acknowledgment without comprehensive review of content.
          </p>
          <p className="leading-relaxed text-stone-700">
            Summary presentations achieve higher engagement than full legal documents, but users rarely
            access complete documents even when summaries explicitly indicate they contain partial
            information. This creates tension between practical comprehension and complete disclosure.
          </p>
          <p className="leading-relaxed text-stone-700">
            Forced scrolling mechanisms that disable consent buttons until users scroll through documents
            do not reliably increase actual reading. Users frequently scroll rapidly to enable buttons
            without engaging with content, suggesting mechanical compliance without comprehension.
          </p>
          <p className="leading-relaxed text-stone-700">
            Visual emphasis of critical terms shows mixed effectiveness. While highlighted content
            receives more attention than undifferentiated text, users still demonstrate limited
            comprehension of emphasized material in post-consent recall tasks.
          </p>
          <p className="leading-relaxed text-stone-700">
            Policy update notifications generate even lower engagement than initial disclosures. Users
            frequently acknowledge updates without accessing revised documents, and few demonstrate
            awareness of what changes occurred in updated versions.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl pb-8">
        <h2 className="mb-6">Reporting & Aggregation</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Consent and disclosure research findings are reported as aggregated observations of user
            interaction patterns with these surfaces. Specific disclosure content is not quoted in
            public reports, and platform-specific approaches are anonymized.
          </p>
          <p className="leading-relaxed text-stone-700">
            Research outputs describe presentation mechanisms, user engagement patterns, and comprehension
            indicators without identifying specific platforms or ranking disclosure quality. Findings
            characterize approaches and observed user responses.
          </p>
          <p className="leading-relaxed text-stone-700">
            Metrics include disclosure viewing times, scroll depth measurements, full document access
            rates, comprehension assessment results, and consent completion patterns, presented
            descriptively to characterize observed behaviors.
          </p>
          <p className="leading-relaxed text-stone-700">
            Reports acknowledge the inherent tension between legal compliance requirements and practical
            user comprehension without making claims about how this tension should be resolved or
            recommending specific disclosure approaches.
          </p>
        </div>
      </section>
    </div>
  );
}
