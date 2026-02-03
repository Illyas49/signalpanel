import { Users, FlaskConical, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PanelsStudiesProps {
  onNavigate?: (page: string) => void;
}

export default function PanelsStudies({ onNavigate }: PanelsStudiesProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-12 border-b-2 border-teal-200 mb-12">
        <h1 className="mb-4 text-4xl">Panels & Studies</h1>
        <div className="h-1 w-20 bg-teal-600 mb-6"></div>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
          Structured research initiatives and participant panels
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-7 border-2 border-teal-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-teal-600 rounded-lg flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-3">Panels</h2>
              <p className="text-stone-700 leading-relaxed mb-3">
                Panels are curated groups of participants assembled for structured observation under controlled
                conditions.
              </p>
              <p className="text-stone-700 leading-relaxed text-sm">
                Panels are study-specific and operate within defined eligibility and scope parameters.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-7 border-2 border-cyan-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-cyan-600 rounded-lg flex-shrink-0">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-3">Studies</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A study represents a single research initiative conducted using one or more panels.
              </p>
              <p className="text-stone-700 mb-2 font-semibold text-sm">Studies typically examine:</p>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  User flows and task completion
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  Information visibility and clarity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  Control placement and discoverability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  Interaction patterns across devices or regions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Active Studies</h2>

        <div className="bg-gradient-to-br from-stone-50 to-stone-100 border-2 border-stone-300 rounded-xl p-8 text-center mb-8">
          <Lock className="w-12 h-12 text-stone-400 mx-auto mb-4" />
          <p className="text-stone-600 mb-6 font-medium">Authentication required to view studies</p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('Access')}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Go to Access Page
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        <div className="space-y-6 blur-sm select-none pointer-events-none">
          <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <FlaskConical className="w-5 h-5 text-teal-700" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg text-stone-900 mb-3">Study ID: SP-021</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold text-stone-700">Research Focus:</span> <span className="text-stone-600">Onboarding comprehension</span></p>
                  <p><span className="font-semibold text-stone-700">Scope:</span> <span className="text-stone-600">Account setup and early-stage information exposure</span></p>
                  <p><span className="font-semibold text-stone-700">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <FlaskConical className="w-5 h-5 text-cyan-700" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg text-stone-900 mb-3">Study ID: SP-022</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold text-stone-700">Research Focus:</span> <span className="text-stone-600">Control discoverability</span></p>
                  <p><span className="font-semibold text-stone-700">Scope:</span> <span className="text-stone-600">Visibility and access to user-managed settings</span></p>
                  <p><span className="font-semibold text-stone-700">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-stone-500 text-sm font-medium">
          Detailed study materials are not publicly accessible.
        </p>
      </section>
    </div>
  );
}
