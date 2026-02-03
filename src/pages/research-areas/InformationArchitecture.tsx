export default function InformationArchitecture() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <section className="border-b-2 border-teal-200 pb-8">
        <h1 className="mb-4 text-4xl">Information Architecture</h1>
        <div className="h-1 w-20 bg-teal-600 mb-8"></div>

        <div className="max-w-4xl space-y-6">
          <p className="text-lg leading-relaxed">
            Information architecture defines how content, controls, and navigational systems are organized
            within digital environments. In regulated contexts, architectural decisions determine where
            critical disclosures appear, how safety controls are categorized, and whether users can locate
            essential information when needed.
          </p>
          <p className="text-lg leading-relaxed">
            Poor information architecture creates systemic accessibility problems. Regulatory disclosures
            buried in deep menu structures, safety controls scattered across inconsistent locations, and
            confusing category labels all reduce the practical effectiveness of compliance efforts and
            limit user ability to exercise self-management.
          </p>
          <p className="text-lg leading-relaxed">
            SignalPanel research examines how platforms structure information, how users navigate these
            structures to find specific content or controls, and how architectural choices affect
            accessibility and comprehension. Studies document organizational patterns, categorization
            approaches, and the discoverability of critical platform elements.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-10">Key Dimensions</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Content Hierarchy</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Hierarchical organization establishes relationships between parent categories and nested
              subcategories. In regulated environments, hierarchy determines whether safety controls
              appear at top-level navigation or require traversal through multiple menu layers to access.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research observes how deeply critical content is nested, whether users understand categorical
              relationships, and whether hierarchical structures align with user mental models of where
              information should reside. Studies track navigation paths users take to locate specific
              controls and measure time spent searching.
            </p>
            <p className="leading-relaxed text-stone-700">
              Variation in hierarchical depth across different platform areas is documented to identify
              inconsistencies that may confuse users or create unequal accessibility between different
              types of information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Category Labeling</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Category names and menu labels function as signposts guiding users to information. Ambiguous,
              technical, or inconsistent labeling creates confusion about where specific content resides
              and reduces the effectiveness of organizational structures.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies examine whether category labels use plain language or technical jargon, whether they
              accurately describe contained content, and whether users correctly predict what they will
              find under specific labels. Research also observes whether labeling conventions remain
              consistent across different platform areas.
            </p>
            <p className="leading-relaxed text-stone-700">
              Cross-demographic analysis assesses whether label comprehension varies across user age
              groups, language backgrounds, or experience levels, identifying labels that create
              disproportionate difficulty for specific user populations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Search Functionality</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Search tools provide an alternative to hierarchical navigation, enabling users to locate
              specific information through keyword queries. Search effectiveness depends on query
              interpretation, result relevance, and whether critical content is properly indexed.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research documents whether platforms provide search functionality for help content and
              settings, whether search results successfully surface relevant controls when users query
              for safety features, and whether result ranking prioritizes regulatory content appropriately.
            </p>
            <p className="leading-relaxed text-stone-700">
              Studies observe common search queries users employ when attempting to locate controls,
              whether these queries return useful results, and how often users resort to search after
              unsuccessful hierarchical navigation attempts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Settings Organization</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Settings areas consolidate configuration options, privacy controls, and account management
              tools. How these elements are organized within settings affects user ability to locate and
              modify specific configurations. Flat lists, categorized groupings, and search-based settings
              interfaces each present different navigational challenges.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research examines whether related settings are grouped logically, whether critical safety
              controls appear prominently or require scrolling through extensive lists, and whether users
              understand setting categories. Studies track how long users spend searching for specific
              settings and whether they successfully locate target controls.
            </p>
            <p className="leading-relaxed text-stone-700">
              The distinction between privacy settings, security settings, and safety controls is analyzed
              to determine whether users understand these categories and whether organizational boundaries
              align with user expectations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Help and Support Structure</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Help documentation and support resources require their own information architecture. How
              help articles are categorized, whether they are searchable, and whether they link to
              relevant controls affects user ability to resolve questions and understand platform
              functionality.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Studies observe whether help content is organized by user task or by platform feature,
              whether article titles clearly describe content, and whether cross-references between
              related help topics are provided. Research also examines whether help content links
              directly to relevant settings or controls.
            </p>
            <p className="leading-relaxed text-stone-700">
              The accessibility of help resources from different platform contexts is documented,
              including whether contextual help is provided at relevant decision points or error states.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-stone-900">Cross-Platform Consistency</h3>
            <p className="mb-4 leading-relaxed text-stone-700">
              Users often access platforms across multiple devices and interfaces. Information architecture
              consistency between web, mobile, and tablet versions affects user ability to transfer
              knowledge between contexts and locate controls across environments.
            </p>
            <p className="mb-4 leading-relaxed text-stone-700">
              Research documents whether category structures, labels, and navigation patterns remain
              consistent across device types, or whether users must relearn information locations when
              switching between platforms. Studies observe user confusion when architectural patterns
              differ between interfaces.
            </p>
            <p className="leading-relaxed text-stone-700">
              Particular attention is paid to whether critical safety controls maintain consistent
              locations across devices, as users who configure controls on one device may expect to
              find them in equivalent locations on others.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl">
        <h2 className="mb-6">Observed Patterns</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Research consistently observes that deep hierarchical nesting reduces control discoverability.
            Safety features buried three or more levels deep in menu structures exhibit substantially
            lower access rates and longer search times compared to controls positioned at top-level
            navigation or single-level submenu depth.
          </p>
          <p className="leading-relaxed text-stone-700">
            Category label ambiguity creates systematic navigation failures. When users cannot predict
            which category contains specific controls based on label text alone, they resort to
            exhaustive search through multiple categories or abandon search attempts entirely.
          </p>
          <p className="leading-relaxed text-stone-700">
            Search functionality, when provided, shows variable effectiveness. Users demonstrate
            preference for search over hierarchical navigation when seeking specific controls, but
            success depends heavily on whether platforms index settings content and whether result
            ranking prioritizes functional controls over help documentation.
          </p>
          <p className="leading-relaxed text-stone-700">
            Settings organization reveals frequent inconsistency in where safety controls are categorized.
            Time limits may appear under different category names across platforms, creating confusion
            for users attempting to transfer knowledge between environments.
          </p>
          <p className="leading-relaxed text-stone-700">
            Cross-platform architectural inconsistency generates measurable user difficulty. Users who
            successfully locate controls on web interfaces frequently fail to find equivalent controls
            on mobile applications when organizational structures differ substantially between versions.
          </p>
        </div>
      </section>

      <div className="border-t border-stone-200"></div>

      <section className="max-w-4xl pb-8">
        <h2 className="mb-6">Reporting & Aggregation</h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-stone-700">
            Information architecture findings are reported as aggregated observations of navigational
            patterns, search behaviors, and structural characteristics. Individual platform implementations
            are not identified in public reports, and user-level navigation data is synthesized into
            pattern descriptions.
          </p>
          <p className="leading-relaxed text-stone-700">
            Research outputs describe common organizational approaches observed across studies, documenting
            hierarchical depth patterns, category labeling conventions, and consistency characteristics
            without attributing specific structures to identified platforms.
          </p>
          <p className="leading-relaxed text-stone-700">
            Metrics reported include average navigation depth to critical controls, category search success
            rates, label comprehension scores, and cross-platform consistency measurements. These are
            presented as descriptive statistics summarizing observed patterns rather than performance
            rankings.
          </p>
          <p className="leading-relaxed text-stone-700">
            Findings emphasize variation in architectural approaches and document observed effects on user
            navigation success without prescribing specific organizational structures or recommending
            changes to existing implementations.
          </p>
        </div>
      </section>
    </div>
  );
}
