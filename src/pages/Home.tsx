interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">
          Structured research on user experience in age-restricted digital environments
        </h1>
        <p className="text-xl text-stone-700">
          SignalPanel conducts methodology-driven, panel-based research to understand how users
          interact with regulated digital platforms across jurisdictions.
        </p>
      </section>

      <section>
        <p>
          SignalPanel is an independent research organization focused on the design, execution, and
          analysis of structured user research.
        </p>
        <p>
          Our work emphasizes methodological consistency, panel integrity, and aggregated findings
          rather than individual outcomes or performance claims.
        </p>
        <p>
          Research is conducted across age-restricted and regulated digital environments where clarity,
          structure, and information design materially affect user experience.
        </p>
      </section>

      <section>
        <h2>Research Focus</h2>
        <p>
          SignalPanel studies how users encounter, interpret, and navigate critical information and
          controls.
        </p>
        <p>Areas of research include:</p>
        <ul>
          <li>User onboarding and early-stage comprehension</li>
          <li>Information architecture and content hierarchy</li>
          <li>Discoverability of controls and settings</li>
          <li>Cross-jurisdictional variation in user experience</li>
        </ul>
        <p>All findings are reported at an aggregated level.</p>
      </section>

      <section>
        <div className="flex gap-6 pt-8">
          <button
            onClick={() => onNavigate('Methodology')}
            className="text-stone-700 underline hover:text-stone-900 transition-colors"
          >
            View Methodology
          </button>
          <button
            onClick={() => onNavigate('Research Areas')}
            className="text-stone-700 underline hover:text-stone-900 transition-colors"
          >
            Explore Research Areas
          </button>
        </div>
      </section>
    </div>
  );
}
