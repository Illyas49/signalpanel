import { Target, Shield, Scale } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-12 border-b-2 border-teal-200 mb-12">
        <h1 className="mb-4 text-4xl">About SignalPanel</h1>
        <div className="h-1 w-20 bg-teal-600 mb-6"></div>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          Independent research organization focused on user experience in regulated digital environments
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
          <div className="p-3 bg-teal-600 rounded-lg w-fit mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-3 text-stone-900">Purpose</h3>
          <p className="text-stone-700 leading-relaxed text-sm">
            SignalPanel was established to conduct structured, independent research on user experience in
            regulated digital environments.
          </p>
          <p className="text-stone-700 leading-relaxed mt-3 text-sm">
            The organization operates with a focus on methodological rigor, neutrality, and transparency of
            process.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
          <div className="p-3 bg-cyan-600 rounded-lg w-fit mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-3 text-stone-900">Independence</h3>
          <p className="text-stone-700 leading-relaxed text-sm">
            SignalPanel conducts research independently.
          </p>
          <p className="text-stone-700 leading-relaxed mt-3 text-sm">
            The organization does not represent platforms, operators, or service providers and does not
            accept sponsorships that influence research design or reporting.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200">
          <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-3 text-stone-900">Governance</h3>
          <p className="text-stone-700 leading-relaxed text-sm">
            Research methodologies and standards are internally defined and periodically reviewed to
            ensure consistency and relevance.
          </p>
        </div>
      </div>

      <section className="pt-8 border-t border-stone-200">
        <h2 className="text-2xl font-bold mb-6">Research Areas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Onboarding & Entry Flows',
              description: 'How users encounter and interpret information during initial access and early use. Research examines first impressions, comprehension barriers, and the effectiveness of introductory messaging across different user contexts and regulatory frameworks.',
              color: 'border-teal-300'
            },
            {
              title: 'Information Architecture',
              description: 'The organization, hierarchy, and presentation of content across interfaces. Studies evaluate how structural decisions impact user comprehension, navigation efficiency, and ability to locate critical information within complex digital environments.',
              color: 'border-cyan-300'
            },
            {
              title: 'User Controls',
              description: 'Discoverability and clarity of settings, limits, and user-managed tools. Research focuses on accessibility of control mechanisms, clarity of available options, and user awareness of self-management features across platform interfaces.',
              color: 'border-blue-300'
            },
            {
              title: 'Jurisdictional Context',
              description: 'Variation in user experience driven by regional or regulatory environments. Studies document how compliance frameworks and localization requirements shape interface design, information disclosure, and available functionality across different markets.',
              color: 'border-teal-300'
            },
            {
              title: 'Communication Clarity',
              description: 'How instructions, notices, and system messages are presented and understood. Research evaluates the effectiveness of mandatory disclosures, warning systems, and procedural communications in supporting informed user decision-making within regulated contexts.',
              color: 'border-cyan-300'
            }
          ].map((area, idx) => (
            <div key={idx} className={`border-l-4 ${area.color} pl-6 py-3 bg-stone-50/50 rounded-r-lg hover:bg-stone-100/50 transition-colors`}>
              <h3 className="text-lg font-semibold mb-2 text-stone-900">{area.title}</h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
