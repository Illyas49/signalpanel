interface AccessProps {
  onNavigate?: (page: string) => void;
}

export default function Access({ onNavigate }: AccessProps) {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">Access</h1>
      </section>

      <section>
        <h2>Research Access</h2>
        <p>Access to panels, studies, and research outputs is limited.</p>
        <p>Eligibility may depend on:</p>
        <ul>
          <li>Jurisdiction</li>
          <li>Study scope</li>
          <li>Panel availability</li>
        </ul>
        <p>Participation is invitation-based and not guaranteed.</p>
      </section>

      <section className="border-2 border-stone-300 bg-stone-50 p-8">
        <h3 className="text-xl font-serif mb-4">Register or Sign In</h3>
        <p className="mb-8 text-stone-700">
          Create an account to access active study information and research materials.
        </p>

        <div className="bg-white border border-stone-400 p-6 text-center text-stone-500">
          [Auth Form Placeholder - Login/Registration would appear here]
        </div>

        {onNavigate && (
          <div className="mt-6">
            <button
              onClick={() => onNavigate('Panels & Studies')}
              className="text-stone-600 hover:text-stone-900 underline text-sm"
            >
              View Panels & Studies
            </button>
          </div>
        )}
      </section>

      <section>
        <h2>Inquiries</h2>
        <p>General inquiries regarding research access may be submitted where applicable.</p>
        <p>SignalPanel does not offer open enrollment or public participation.</p>
      </section>
    </div>
  );
}
