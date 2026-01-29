import AuthGate from '../components/AuthGate';

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
        <AuthGate onNavigate={onNavigate} />
      </section>
    </div>
  );
}
