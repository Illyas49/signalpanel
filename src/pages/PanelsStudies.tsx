interface PanelsStudiesProps {
  onNavigate?: (page: string) => void;
}

export default function PanelsStudies({ onNavigate }: PanelsStudiesProps) {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">Panels & Studies</h1>
      </section>

      <section>
        <h2>Panels</h2>
        <p>
          Panels are curated groups of participants assembled for structured observation under controlled
          conditions.
        </p>
        <p>Panels are study-specific and operate within defined eligibility and scope parameters.</p>
      </section>

      <section>
        <h2>Studies</h2>
        <p>A study represents a single research initiative conducted using one or more panels.</p>
        <p>Studies typically examine:</p>
        <ul>
          <li>User flows and task completion</li>
          <li>Information visibility and clarity</li>
          <li>Control placement and discoverability</li>
          <li>Interaction patterns across devices or regions</li>
        </ul>
      </section>

      <section>
        <h2>Active Studies</h2>

        <div className="bg-stone-50 border-2 border-stone-300 p-8 text-center">
          <p className="text-stone-500 mb-4">[Auth Gate Placeholder - Login required to view studies]</p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('Access')}
              className="text-stone-600 hover:text-stone-900 underline"
            >
              Go to Access Page
            </button>
          )}
        </div>

        <div className="space-y-8 mt-8 opacity-50">
          <div className="border-l-2 border-stone-300 pl-6">
            <p className="font-semibold">Study ID: SP-021</p>
            <p><span className="text-stone-600">Research Focus:</span> Onboarding comprehension</p>
            <p><span className="text-stone-600">Scope:</span> Account setup and early-stage information exposure</p>
            <p><span className="text-stone-600">Status:</span> Active</p>
          </div>

          <div className="border-l-2 border-stone-300 pl-6">
            <p className="font-semibold">Study ID: SP-022</p>
            <p><span className="text-stone-600">Research Focus:</span> Control discoverability</p>
            <p><span className="text-stone-600">Scope:</span> Visibility and access to user-managed settings</p>
            <p><span className="text-stone-600">Status:</span> Active</p>
          </div>
        </div>

        <p className="mt-8">Detailed study materials are not publicly accessible.</p>
      </section>
    </div>
  );
}
