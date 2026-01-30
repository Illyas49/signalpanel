export default function Footer() {
  return (
    <footer className="border-t-2 border-stone-200 bg-[#EEF1F5] mt-32">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4">
              Independent Research Organization
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              SignalPanel conducts structured, panel-based research on user experience in regulated
              digital environments without commercial affiliation or platform endorsement.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4">
              Research Principles
            </h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-0.5">—</span>
                <span>Methodological transparency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-0.5">—</span>
                <span>Aggregated findings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-0.5">—</span>
                <span>Non-commercial independence</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4">
              Disclaimer
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Research outputs are informational only and do not constitute endorsements, evaluations,
              rankings, or recommendations of any platform or service.
            </p>
          </div>
        </div>

        <div className="border-t border-stone-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-stone-500">
              © 2026 SignalPanel. All rights reserved.
            </p>
            <p className="text-xs text-stone-500">
              Structured research in age-restricted digital environments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
