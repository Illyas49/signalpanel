export default function JurisdictionalContext() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <section className="border-b-2 border-teal-200 pb-8">
        <h1 className="mb-4 text-4xl">Jurisdictional Context</h1>
        <div className="h-1 w-20 bg-teal-600 mb-8"></div>

        <div className="max-w-4xl space-y-6">
          <p className="text-lg leading-relaxed">
            Regulated digital environments operate under varying regulatory frameworks across geographic
            regions. These jurisdictional differences create substantial variation in platform design,
            disclosure requirements, control availability, and age verification stringency. User experience
            cannot be characterized uniformly without accounting for regional regulatory context.
          </p>
          <p className="text-lg leading-relaxed">
            Jurisdictional variation affects not only compliance-driven elements but also broader interface
            design patterns, available features, and communication approaches. Users in different regions
            may encounter fundamentally different experiences on nominally identical platforms due to
            localized implementation decisions driven by regulatory requirements.
          </p>
          <p className="text-lg leading-relaxed">
            SignalPanel research documents how user experience varies across jurisdictions, examining
            differences in control availability, disclosure presentation, age verification approaches, and
            feature accessibility. Studies identify region-specific patterns and assess whether regulatory
            variation creates material differences in practical user experience.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-10">Key Dimensions</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Regulatory Framework Differences</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Jurisdictions impose different requirements for age verification, disclosure presentation,
              control availability, advertising restrictions, and responsible operation measures. These
              regulatory differences manifest in varied platform implementations that users encounter
              based on their geographic location.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research documents which regulatory requirements vary across studied jurisdictions, how
              platforms adapt implementations to meet different standards, and whether users in stricter
              regulatory environments experience measurably different interfaces than those in lighter
              regulatory contexts.
            </p>
            <p className="leading-relaxed text-stone-700">
              The relationship between regulatory stringency and user experience characteristics is
              observed, though studies do not assess regulatory quality or make normative claims about
              which frameworks are preferable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Age Verification Variation</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Age verification requirements differ substantially between jurisdictions. Some regions
              accept simple date-of-birth declarations while others mandate document verification or
              third-party identity confirmation. These differences create varied entry barriers and
              privacy implications across regions.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies compare verification methods across jurisdictions, documenting friction levels,
              user abandonment rates, expressed privacy concerns, and completion times. Research examines
              whether stricter verification creates measurable barriers to access while acknowledging
              that verification stringency serves regulatory objectives beyond user convenience.
            </p>
            <p className="leading-relaxed text-stone-700">
              Cross-jurisdictional consistency in verification implementation is analyzed, as some
              platforms may apply stricter standards globally while others implement jurisdiction-specific
              approaches.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Control Availability Differences</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Mandatory control requirements vary across jurisdictions. Some regions require specific
              time limit tools, spending controls, or self-exclusion mechanisms while others leave these
              as optional platform decisions. Users in different regions may encounter different control
              suites based on local regulatory mandates.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research documents which controls are universally available versus jurisdiction-specific,
              whether mandated controls exhibit different design characteristics than voluntary ones, and
              whether users in jurisdictions with extensive control requirements demonstrate higher
              awareness or usage rates.
            </p>
            <p className="leading-relaxed text-stone-700">
              The visibility and accessibility of jurisdiction-mandated controls is examined to assess
              whether regulatory requirements translate into practical user access or whether mandated
              controls remain difficult to discover despite their required presence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Disclosure and Communication Requirements</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Jurisdictions mandate different disclosure content, warning language, and informational
              communications. Some require specific risk warnings, odds disclosure, or educational
              messaging while others impose lighter informational requirements. These mandates affect
              the volume, content, and presentation of user-facing communications.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies compare disclosure presentation across regions, examining whether jurisdiction-
              specific requirements create additional user burden through increased message volume, whether
              mandated warnings achieve measurable user attention, and whether disclosure approaches
              differ in comprehension effectiveness.
            </p>
            <p className="leading-relaxed text-stone-700">
              Language localization is analyzed separately from regulatory content, as some variation in
              communications reflects translation rather than substantive regional requirement differences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Feature and Functionality Restrictions</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Some jurisdictions restrict specific platform features, payment methods, promotional
              activities, or interaction patterns deemed inconsistent with regulatory objectives. These
              restrictions create feature availability differences where users in some regions access
              reduced functionality compared to others.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research documents feature availability variation across jurisdictions, observing which
              functionalities are universally present versus region-restricted. Studies examine whether
              users in restricted jurisdictions express awareness of limitations or attempt to access
              unavailable features.
            </p>
            <p className="leading-relaxed text-stone-700">
              The clarity with which platforms communicate feature unavailability is observed, including
              whether users receive explanations linking restrictions to regulatory requirements or
              encounter generic unavailability messages.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Language and Cultural Adaptation</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Beyond regulatory variation, platforms must adapt to local languages and cultural contexts.
              Translation quality, cultural appropriateness of messaging, and localization of support
              resources all affect user experience independently of regulatory requirements.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies assess translation quality where platforms operate in multiple languages, examining
              whether critical safety communications, control labels, and instructional content maintain
              clarity across language versions. Research identifies terminology that translates poorly or
              creates comprehension barriers in specific languages.
            </p>
            <p className="leading-relaxed text-stone-700">
              Cultural variation in communication preferences is observed, though studies acknowledge
              limitations in making cross-cultural assessments and focus on functional comprehension
              rather than subjective appropriateness.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Observed Patterns</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Research consistently identifies substantial variation in user experience across jurisdictions
            driven by regulatory differences. Platforms operating in stricter regulatory environments
            exhibit more extensive disclosure requirements, additional verification steps, and broader
            control availability, though these elements do not always translate into higher user engagement
            with safety features.
          </p>
          <p className="leading-relaxed text-stone-700">
            Age verification stringency creates inverse relationships between access friction and privacy
            confidence. Stricter verification generates higher abandonment rates but also increases user
            confidence in age-restriction enforcement. Simple declaration methods enable easier access
            but generate expressed concerns about effectiveness.
          </p>
          <p className="leading-relaxed text-stone-700">
            Mandated controls show higher availability but variable visibility. Jurisdictions requiring
            specific safety features ensure their technical presence, but control discoverability and
            accessibility vary substantially based on implementation approaches that regulation does not
            typically specify.
          </p>
          <p className="leading-relaxed text-stone-700">
            Translation quality varies considerably across language versions. Critical safety communications
            sometimes exhibit linguistic complexity or terminology choices that create greater comprehension
            barriers in translated versions than in source languages.
          </p>
          <p className="leading-relaxed text-stone-700">
            Users demonstrate limited awareness of jurisdictional differences affecting their experience.
            Most users do not recognize that their interface, available controls, or disclosure volume
            differs from what users in other regions encounter on the same platforms.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl pb-8">
        <h2 className="mb-6">Reporting & Aggregation</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Jurisdictional research findings are reported as comparative observations of regional patterns
            without making normative claims about regulatory quality or effectiveness. Studies describe
            variation in user experience across jurisdictions without advocating for specific regulatory
            approaches.
          </p>
          <p className="leading-relaxed text-stone-700">
            Reports document observed differences in verification methods, control availability, disclosure
            requirements, and feature restrictions across studied regions while maintaining platform
            anonymity and avoiding identification of specific implementations.
          </p>
          <p className="leading-relaxed text-stone-700">
            Findings characterize how regulatory frameworks translate into practical user experience
            differences, describing observed patterns without assessing whether regulatory requirements
            achieve their intended objectives or comparing regulatory effectiveness between jurisdictions.
          </p>
          <p className="leading-relaxed text-stone-700">
            Cross-jurisdictional metrics include verification completion rates, control awareness levels,
            disclosure engagement measurements, and feature availability distributions, presented
            descriptively to characterize regional variation.
          </p>
        </div>
      </section>
    </div>
  );
}
