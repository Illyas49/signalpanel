export default function About() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">About</h1>
      </section>

      <section>
        <h2>Purpose</h2>
        <p>
          SignalPanel was established to conduct structured, independent research on user experience in
          regulated digital environments.
        </p>
        <p>
          The organization operates with a focus on methodological rigor, neutrality, and transparency of
          process.
        </p>
      </section>

      <section>
        <h2>Independence</h2>
        <p>SignalPanel conducts research independently.</p>
        <p>
          The organization does not represent platforms, operators, or service providers and does not
          accept sponsorships that influence research design or reporting.
        </p>
      </section>

      <section>
        <h2>Governance</h2>
        <p>
          Research methodologies and standards are internally defined and periodically reviewed to
          ensure consistency and relevance.
        </p>
      </section>

      <section className="mt-20 pt-12 border-t border-stone-200">
        <h2>Research Areas</h2>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border-l-2 border-stone-300 pl-6">
          <h3>Onboarding & Entry Flows</h3>
          <p>
            How users encounter and interpret information during initial access and early use. Research examines
            first impressions, comprehension barriers, and the effectiveness of introductory messaging across
            different user contexts and regulatory frameworks.
          </p>
        </div>

        <div className="border-l-2 border-stone-300 pl-6">
          <h3>Information Architecture</h3>
          <p>
            The organization, hierarchy, and presentation of content across interfaces. Studies evaluate how
            structural decisions impact user comprehension, navigation efficiency, and ability to locate
            critical information within complex digital environments.
          </p>
        </div>

        <div className="border-l-2 border-stone-300 pl-6">
          <h3>User Controls</h3>
          <p>
            Discoverability and clarity of settings, limits, and user-managed tools. Research focuses on
            accessibility of control mechanisms, clarity of available options, and user awareness of
            self-management features across platform interfaces.
          </p>
        </div>

        <div className="border-l-2 border-stone-300 pl-6">
          <h3>Jurisdictional Context</h3>
          <p>
            Variation in user experience driven by regional or regulatory environments. Studies document how
            compliance frameworks and localization requirements shape interface design, information disclosure,
            and available functionality across different markets.
          </p>
        </div>

        <div className="border-l-2 border-stone-300 pl-6 md:col-span-2">
          <h3>Communication Clarity</h3>
          <p>
            How instructions, notices, and system messages are presented and understood. Research evaluates
            the effectiveness of mandatory disclosures, warning systems, and procedural communications in
            supporting informed user decision-making within regulated contexts.
          </p>
        </div>
      </section>
    </div>
  );
}
