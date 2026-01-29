interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="space-y-16">
      <section className="bg-stone-100 -mx-8 px-8 py-16 md:-mx-16 md:px-16">
        <h1 className="mb-8">
          Structured research on user experience in age-restricted digital environments
        </h1>
        <p className="text-xl text-stone-700">
          SignalPanel conducts methodology-driven, panel-based research to understand how users
          interact with regulated digital platforms across jurisdictions.
        </p>
      </section>

      <section className="relative w-full h-96 -mx-8 md:-mx-16 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Research and data analysis"
          className="w-full h-full object-cover"
        />
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

      <section className="pt-4">
        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('Methodology')}
            className="px-6 py-3 border-2 border-stone-900 bg-white text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
          >
            View Methodology
          </button>
          <button
            onClick={() => onNavigate('About')}
            className="px-6 py-3 border-2 border-stone-300 bg-white text-stone-900 hover:border-stone-900 transition-colors"
          >
            Explore Research Areas
          </button>
        </div>
      </section>
    </div>
  );
}
