export default function Methodology() {
  return (
    <div className="space-y-20">
      <section>
        <h1 className="mb-8">Methodology</h1>
        <div className="h-1 w-24 bg-stone-800"></div>
      </section>

      <section className="max-w-4xl">
        <h2 className="mb-6">Overview</h2>
        <p className="mb-6 leading-relaxed">
          SignalPanel applies a structured research methodology built around curated panels, defined
          study scopes, and standardized evaluation criteria. Research design emphasizes internal
          consistency, transparent parameter selection, and reproducible procedures.
        </p>
        <p className="mb-6 leading-relaxed">
          The methodology prioritizes consistency, repeatability, and interpretability across studies and
          jurisdictions. Each study operates within clearly defined boundaries to limit variability and
          improve comparability between discrete research exercises.
        </p>
        <p className="leading-relaxed">
          Findings are intended to describe observed patterns in user interaction and interface design.
          They are not intended to predict future user behavior, assess platform quality, or inform
          commercial or regulatory decision-making.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Panel Construction</h2>
        <p className="mb-6 leading-relaxed">
          Research panels are composed of vetted participants selected based on predefined eligibility
          criteria. Recruitment processes follow documented protocols designed to ensure participants
          meet minimum requirements for age, residency, language proficiency, and technical access.
        </p>
        <p className="mb-6 leading-relaxed">
          Panels are structured to reflect variation across several dimensions:
        </p>
        <div className="bg-stone-50 p-6 mb-6 border-l-4 border-stone-300">
          <p className="mb-3 font-semibold text-stone-900">Age eligibility</p>
          <p className="mb-6 text-stone-700 leading-relaxed">
            Participants are recruited across adult age groups to reflect different levels of digital
            literacy and exposure to regulated environments.
          </p>

          <p className="mb-3 font-semibold text-stone-900">Jurisdictional relevance</p>
          <p className="mb-6 text-stone-700 leading-relaxed">
            Panel composition accounts for regulatory context, language, and regional variance in platform
            availability and interface design.
          </p>

          <p className="mb-3 font-semibold text-stone-900">Device and environment diversity</p>
          <p className="text-stone-700 leading-relaxed">
            Studies include participants using different devices, operating systems, and network
            conditions where such variation may affect user experience.
          </p>
        </div>
        <p className="leading-relaxed">
          Panel size and composition vary depending on study objectives. SignalPanel does not maintain
          standing panels; participants are recruited for specific studies and released upon completion.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Study Design</h2>
        <p className="mb-6 leading-relaxed">
          Each study is defined by a formal research protocol that specifies objectives, participant
          criteria, observation parameters, and analytical scope. Study design documents are prepared
          prior to recruitment and remain fixed throughout execution to preserve methodological integrity.
        </p>
        <p className="mb-6 leading-relaxed">
          Core elements of study design include:
        </p>
        <div className="bg-stone-50 p-6 mb-6 border-l-4 border-stone-300">
          <p className="mb-3 font-semibold text-stone-900">Research objective</p>
          <p className="mb-6 text-stone-700 leading-relaxed">
            A clearly articulated question or area of investigation related to user interaction,
            information design, or interface structure.
          </p>

          <p className="mb-3 font-semibold text-stone-900">Inclusion and exclusion criteria</p>
          <p className="mb-6 text-stone-700 leading-relaxed">
            Documented requirements that determine participant eligibility and environmental conditions
            under which observations are conducted.
          </p>

          <p className="mb-3 font-semibold text-stone-900">Standardized observation parameters</p>
          <p className="mb-6 text-stone-700 leading-relaxed">
            Defined tasks, scenarios, or interaction sequences used consistently across participants to
            enable pattern identification and aggregation.
          </p>

          <p className="mb-3 font-semibold text-stone-900">Limited scope and duration</p>
          <p className="text-stone-700 leading-relaxed">
            Studies are time-bounded and narrowly scoped to reduce confounding variables and maintain
            focus on specific research questions.
          </p>
        </div>
        <p className="leading-relaxed">
          Studies are designed to observe user interaction patterns and interface characteristics rather
          than measure outcomes, performance, or behavioral change.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Sampling Logic</h2>
        <p className="mb-6 leading-relaxed">
          Participant selection follows purposive sampling strategies rather than probabilistic methods.
          SignalPanel does not claim to produce statistically representative samples of broader user
          populations.
        </p>
        <p className="mb-6 leading-relaxed">
          Selection criteria are established to ensure participants possess characteristics relevant to
          the study objective. These may include jurisdictional residency, prior experience with
          regulated digital environments, language proficiency, or access to specific device types.
        </p>
        <p className="mb-6 leading-relaxed">
          Where appropriate, panels are balanced across variables such as age range, experience level,
          or regional context. The intent is to capture variation in user interaction patterns, not to
          achieve statistical representativeness.
        </p>
        <p className="leading-relaxed">
          Sample sizes are determined based on the complexity of the research question and the degree of
          expected variance. Studies prioritize depth of observation over breadth of participation.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Repeatability & Controls</h2>
        <p className="mb-6 leading-relaxed">
          Studies are designed with repeatability as a core principle. Research protocols are documented
          in sufficient detail to enable replication by independent researchers, subject to practical
          constraints such as platform availability and jurisdictional access.
        </p>
        <p className="mb-6 leading-relaxed">
          Standardization mechanisms include:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-stone-300 pl-6">
            <p className="font-semibold text-stone-900 mb-2">Uniform task presentation</p>
            <p className="text-stone-700 leading-relaxed">
              Participants receive identical instructions and are presented with equivalent scenarios to
              reduce variance introduced by framing or procedural differences.
            </p>
          </div>

          <div className="border-l-4 border-stone-300 pl-6">
            <p className="font-semibold text-stone-900 mb-2">Environmental consistency</p>
            <p className="text-stone-700 leading-relaxed">
              Where feasible, studies control for variables such as time of day, session duration, and
              initial interface state to limit external factors affecting user interaction.
            </p>
          </div>

          <div className="border-l-4 border-stone-300 pl-6">
            <p className="font-semibold text-stone-900 mb-2">Observation protocols</p>
            <p className="text-stone-700 leading-relaxed">
              Data collection follows predefined procedures that specify what is observed, how it is
              recorded, and under what conditions observations are excluded or flagged for review.
            </p>
          </div>
        </div>
        <p className="leading-relaxed">
          Despite these controls, full replication may not be possible due to platform updates, regional
          regulatory changes, or temporal variation in interface design. SignalPanel acknowledges that
          findings are necessarily time-bound and context-specific.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Aggregation & Analysis</h2>
        <p className="mb-6 leading-relaxed">
          Findings are aggregated at the study level and reported in summary form. Individual participant
          responses are not published. Platform-specific observations are anonymized in public-facing
          materials to maintain research independence and avoid endorsement or criticism.
        </p>
        <p className="mb-6 leading-relaxed">
          Analysis focuses on identifying patterns, common friction points, and structural characteristics
          across multiple observations. Analytical outputs describe what was observed, not why it occurred
          or what should be done in response.
        </p>
        <p className="mb-6 leading-relaxed">
          Primary areas of analytical focus include:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-stone-50 p-5 border border-stone-200">
            <p className="font-semibold text-stone-900 mb-2">Interaction patterns</p>
            <p className="text-sm text-stone-700 leading-relaxed">
              Common pathways, user behaviors, and navigation sequences observed across participants.
            </p>
          </div>

          <div className="bg-stone-50 p-5 border border-stone-200">
            <p className="font-semibold text-stone-900 mb-2">Structural friction points</p>
            <p className="text-sm text-stone-700 leading-relaxed">
              Interface elements or procedural steps where users encounter difficulty, confusion, or delay.
            </p>
          </div>

          <div className="bg-stone-50 p-5 border border-stone-200">
            <p className="font-semibold text-stone-900 mb-2">Information clarity</p>
            <p className="text-sm text-stone-700 leading-relaxed">
              Comprehension of disclosures, warnings, and instructional content as evidenced by user actions.
            </p>
          </div>

          <div className="bg-stone-50 p-5 border border-stone-200">
            <p className="font-semibold text-stone-900 mb-2">Contextual variation</p>
            <p className="text-sm text-stone-700 leading-relaxed">
              Differences in user experience across jurisdictions, device types, or regulatory frameworks.
            </p>
          </div>
        </div>
        <p className="leading-relaxed">
          All analytical interpretations are bounded by the study scope. Findings are not extrapolated
          beyond the observed sample or generalized to populations not represented in the panel.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Bias Mitigation</h2>
        <p className="mb-6 leading-relaxed">
          Bias is an inherent concern in user research. SignalPanel applies procedural controls to reduce
          several forms of bias, while acknowledging that complete elimination is not achievable.
        </p>
        <div className="space-y-6 mb-6">
          <div>
            <p className="font-semibold text-stone-900 mb-3">Selection bias</p>
            <p className="text-stone-700 leading-relaxed mb-3">
              Participant recruitment follows documented eligibility criteria to reduce arbitrary selection.
              However, self-selection effects remain a limitation, as participation is voluntary and may
              attract individuals with particular characteristics or motivations.
            </p>
          </div>

          <div>
            <p className="font-semibold text-stone-900 mb-3">Framing bias</p>
            <p className="text-stone-700 leading-relaxed mb-3">
              Study instructions and task descriptions are reviewed to minimize language that suggests
              expected outcomes or implies judgment. Participants are not informed of research hypotheses
              prior to observation.
            </p>
          </div>

          <div>
            <p className="font-semibold text-stone-900 mb-3">Expectation bias</p>
            <p className="text-stone-700 leading-relaxed mb-3">
              Researchers conducting observations do not interact with participants during task execution
              to avoid influencing behavior. Data collection procedures are designed to capture user actions
              without real-time interpretation or guidance.
            </p>
          </div>

          <div>
            <p className="font-semibold text-stone-900 mb-3">Aggregation as mitigation</p>
            <p className="text-stone-700 leading-relaxed">
              Reporting findings at an aggregated level reduces the risk of over-interpreting individual
              responses or attributing systemic significance to isolated observations. Patterns are identified
              only when observed across multiple participants under similar conditions.
            </p>
          </div>
        </div>
        <p className="leading-relaxed">
          Despite these measures, residual bias may persist due to unmeasured confounding variables,
          panel composition effects, or temporal factors. Users of SignalPanel findings should interpret
          results with appropriate caution.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Methodological Limitations</h2>
        <p className="mb-6 leading-relaxed">
          SignalPanel research is subject to inherent limitations that constrain the scope and
          interpretation of findings. These limitations are acknowledged explicitly to reduce the risk of
          misuse or over-extrapolation.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6">
          <p className="font-semibold text-amber-900 mb-4">What SignalPanel research does not measure:</p>
          <div className="space-y-3 text-stone-800">
            <p className="leading-relaxed">
              <span className="font-semibold">Long-term outcomes:</span> Studies observe user interactions
              during discrete sessions. They do not track sustained behavioral change, long-term user
              retention, or cumulative effects over time.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Causal relationships:</span> Findings describe observed
              patterns but do not establish causation. Correlation between interface characteristics and
              user behavior does not imply that one causes the other.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Population-level prevalence:</span> Studies use purposive
              sampling and do not produce statistically representative estimates of broader user populations.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Platform performance:</span> Research does not rank, score,
              or compare platforms. Observations are descriptive and do not constitute endorsements or
              quality assessments.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Compliance status:</span> Studies observe user experience, not
              legal or regulatory compliance. Findings should not be interpreted as compliance evaluations.
            </p>
          </div>
        </div>
        <p className="mb-6 leading-relaxed">
          Findings are descriptive rather than prescriptive. They document what was observed under specific
          conditions, not what should be done in response. SignalPanel does not provide recommendations for
          platform design, regulatory policy, or commercial strategy.
        </p>
        <p className="leading-relaxed">
          Results are necessarily time-bound and context-specific. Platform interfaces, regulatory
          frameworks, and user populations change over time. Findings from one study should not be assumed
          to apply to different contexts, time periods, or jurisdictions without independent verification.
        </p>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Methodological Boundaries</h2>
        <p className="mb-6 leading-relaxed">
          To maintain research independence and methodological integrity, SignalPanel observes strict
          boundaries regarding the scope and application of research activities.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-stone-300 p-6 bg-white">
            <p className="font-semibold text-stone-900 mb-4">SignalPanel does not:</p>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-stone-400 mt-1">•</span>
                <span>Promote or endorse platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 mt-1">•</span>
                <span>Rank or score services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 mt-1">•</span>
                <span>Provide marketing or optimization recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 mt-1">•</span>
                <span>Offer legal or compliance opinions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 mt-1">•</span>
                <span>Enter commercial partnerships with operators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400 mt-1">•</span>
                <span>Conduct research funded by industry participants</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-stone-800 p-6 bg-stone-50">
            <p className="font-semibold text-stone-900 mb-4">Research outputs are:</p>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-stone-800 mt-1">•</span>
                <span>Descriptive and informational</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 mt-1">•</span>
                <span>Aggregated to protect participant privacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 mt-1">•</span>
                <span>Neutral in tone and presentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 mt-1">•</span>
                <span>Limited to observed findings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 mt-1">•</span>
                <span>Transparent about methodological limitations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-800 mt-1">•</span>
                <span>Published independently of commercial influence</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200 mt-16"></div>

      <section className="max-w-4xl pb-8">
        <p className="text-stone-600 leading-relaxed">
          Questions regarding methodology, study design, or research scope may be directed to SignalPanel
          through the Access page. Methodological documentation for specific studies is available upon
          request, subject to participant privacy protections and confidentiality agreements.
        </p>
      </section>
    </div>
  );
}
