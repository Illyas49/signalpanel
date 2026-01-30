export default function ControlDiscoverability() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">Control Discoverability</h1>
        <div className="h-1 w-24 bg-stone-800 mb-12"></div>

        <div className="max-w-4xl space-y-6">
          <p className="text-lg leading-relaxed">
            Safety controls, privacy settings, and self-management tools serve critical functions in
            regulated digital environments. However, their effectiveness depends fundamentally on whether
            users can locate them when needed. Discoverability encompasses both initial awareness and
            subsequent ability to relocate controls across multiple sessions.
          </p>
          <p className="text-lg leading-relaxed">
            Platforms may implement comprehensive control systems that remain functionally inaccessible
            if users cannot find them through normal navigation pathways. Visual prominence, menu
            placement, labeling clarity, and search accessibility all affect whether controls are
            discovered organically or remain effectively hidden despite technical availability.
          </p>
          <p className="text-lg leading-relaxed">
            SignalPanel research examines how users locate controls without external guidance, how long
            search processes take, and whether users successfully find specific controls when attempting
            to do so. Studies document navigation paths, search strategies, and indicators of frustration
            or abandonment during control-seeking behavior.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-10">Key Dimensions</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Visual Prominence</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Controls positioned prominently in primary navigation areas, rendered with high visual
              contrast, or called out through distinctive design elements achieve higher discovery rates
              than controls embedded in settings menus or presented with minimal visual differentiation.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research observes whether safety controls appear on main interface screens, whether they
              use visual markers such as icons or color coding, and whether their presence is immediately
              apparent without scrolling or menu interaction. Studies track eye movement patterns and
              initial attention distribution to measure practical visibility.
            </p>
            <p className="leading-relaxed text-stone-700">
              The balance between prominence and interface clutter is analyzed, as excessive visual
              emphasis on multiple controls may reduce the salience of any individual element through
              competition for attention.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Menu Placement</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Hierarchical placement within menu structures substantially affects discovery likelihood.
              Controls accessible through a single menu interaction achieve discovery more reliably than
              those requiring multi-level navigation through settings categories.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies document the navigational depth of critical controls, measuring how many clicks or
              menu expansions separate users from specific safety features. Research observes whether
              users correctly predict which menu categories contain specific controls and whether they
              exhaust navigation options when initial predictions fail.
            </p>
            <p className="leading-relaxed text-stone-700">
              The consistency of control placement across different safety features is examined, as users
              who successfully locate one control may expect related controls to appear in the same
              organizational context.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Label Clarity</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Control labels function as the primary textual indicator of functionality. Ambiguous labels,
              technical terminology, or inconsistent naming conventions reduce discoverability by failing
              to match user expectations about how controls will be described.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research examines whether control labels use plain language that clearly describes their
              function, whether they employ terms users would naturally search for, and whether naming
              remains consistent when the same control appears in different contexts. Studies observe
              user reactions to unfamiliar terminology and track whether label text provides sufficient
              information for users to understand control purpose.
            </p>
            <p className="leading-relaxed text-stone-700">
              Cross-demographic analysis assesses whether label comprehension varies by age group or
              digital literacy level, identifying terminology that creates barriers for specific user
              populations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Search Accessibility</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              When hierarchical navigation proves difficult, search functionality provides an alternative
              discovery pathway. Whether platforms index control names and descriptions for search,
              whether they surface controls in response to relevant queries, and whether search results
              link directly to functional controls all affect discovery through this mechanism.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies observe whether users employ search when unable to locate controls through menus,
              what terminology they use in search queries, and whether searches successfully return
              relevant control results. Research documents common query patterns and measures the
              frequency with which searches fail to surface appropriate controls.
            </p>
            <p className="leading-relaxed text-stone-700">
              The distinction between searching for help documentation versus functional controls is
              analyzed, as platforms may return explanatory articles without providing direct access to
              the settings users seek.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Contextual Presentation</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Controls presented at contextually relevant moments achieve higher discovery than those
              only accessible through settings menus. Contextual presentation includes controls offered
              at decision points, during relevant user actions, or in response to specific user behaviors.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research examines whether platforms present spending limit options during deposit actions,
              whether time management controls appear during extended sessions, or whether self-exclusion
              information is offered when users exhibit specific patterns. Studies assess user receptivity
              to contextual control offers and measure adoption rates.
            </p>
            <p className="leading-relaxed text-stone-700">
              The balance between helpful contextual presentation and intrusive interruption is observed,
              as excessive contextual prompting may generate user frustration or habituation that reduces
              effectiveness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Persistent Accessibility</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Users who discover controls once must be able to relocate them in subsequent sessions.
              Persistent accessibility depends on whether control locations remain stable across platform
              updates, whether navigation pathways remain consistent, and whether users retain mental
              models of where controls reside.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies track whether users who successfully accessed controls in initial sessions can
              relocate them without assistance in later sessions. Research documents navigation time
              reduction between first and subsequent access attempts as an indicator of retained
              knowledge.
            </p>
            <p className="leading-relaxed text-stone-700">
              The impact of interface updates on persistent accessibility is observed, particularly when
              platform redesigns alter control locations or navigation structures that users have
              previously learned.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Observed Patterns</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Research consistently demonstrates that visual prominence substantially affects initial
            discovery. Controls with dedicated navigation positions or distinctive visual treatments
            are located significantly faster than those embedded in generic settings lists without
            visual differentiation.
          </p>
          <p className="leading-relaxed text-stone-700">
            Deep menu nesting creates systematic discovery failures. Controls requiring three or more
            navigational steps exhibit substantially lower organic discovery rates, and users often
            abandon search attempts before exhausting all potential menu locations.
          </p>
          <p className="leading-relaxed text-stone-700">
            Label terminology mismatches between user expectations and platform naming conventions
            generate search failures. Users employ varied terminology when seeking controls, and
            platforms that use narrow technical labels miss opportunities for discovery through
            search mechanisms.
          </p>
          <p className="leading-relaxed text-stone-700">
            Contextual control presentation achieves higher visibility than settings-only access,
            particularly for users who do not proactively explore settings menus. However, contextual
            offers presented too frequently or at inappropriate moments show diminishing effectiveness
            through user habituation.
          </p>
          <p className="leading-relaxed text-stone-700">
            Persistent accessibility shows high variability. Users who discover controls through
            deliberate search generally relocate them successfully in subsequent sessions. Users who
            encounter controls through contextual presentation or external guidance show lower
            subsequent relocation success, suggesting passive discovery does not establish durable
            mental models of control location.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl pb-8">
        <h2 className="mb-6">Reporting & Aggregation</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Control discoverability findings are reported as aggregated observations of search success
            rates, navigation patterns, and time-to-discovery metrics. Individual user search attempts
            are not disclosed, and platform-specific control implementations are anonymized in public
            reports.
          </p>
          <p className="leading-relaxed text-stone-700">
            Research outputs describe observed discovery mechanisms, common navigation pathways, and
            patterns of search success or failure without identifying specific platforms or ranking
            implementations. Findings characterize approaches rather than evaluating performance.
          </p>
          <p className="leading-relaxed text-stone-700">
            Metrics include average time to locate specific controls, proportion of users successfully
            discovering controls without assistance, navigation depth measurements, and repeat-access
            success rates. These are presented descriptively to characterize observed patterns.
          </p>
          <p className="leading-relaxed text-stone-700">
            Reports emphasize variation in discoverability approaches and document observed relationships
            between design choices and discovery success without prescribing specific implementation
            strategies or recommending changes.
          </p>
        </div>
      </section>
    </div>
  );
}
