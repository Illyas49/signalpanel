import { Lock, AlertCircle, Mail, ArrowRight } from 'lucide-react';

interface AccessProps {
  onNavigate?: (page: string) => void;
}

export default function Access({ onNavigate }: AccessProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="py-12 border-b-2 border-teal-200 mb-12">
        <h1 className="mb-4 text-4xl">Access</h1>
        <div className="h-1 w-20 bg-teal-600 mb-6"></div>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
          Access to research panels, studies, and materials
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-3">Research Access</h3>
              <p className="text-stone-700 leading-relaxed mb-4 text-sm">
                Access to panels, studies, and research outputs is limited.
              </p>
              <p className="text-stone-700 mb-3 font-semibold text-sm">Eligibility may depend on:</p>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  Jurisdiction
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  Study scope
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                  Panel availability
                </li>
              </ul>
              <p className="text-stone-700 leading-relaxed mt-4 text-sm font-medium">
                Participation is invitation-based and not guaranteed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Mail className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Inquiries</h3>
              <p className="text-stone-700 leading-relaxed mb-4 text-sm">
                General inquiries regarding research access may be submitted where applicable.
              </p>
              <p className="text-stone-700 leading-relaxed text-sm font-medium">
                SignalPanel does not offer open enrollment or public participation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-teal-600 rounded-lg">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-teal-900">Register or Sign In</h3>
        </div>

        <p className="mb-8 text-stone-700 leading-relaxed">
          Create an account to access active study information and research materials.
        </p>

        <div className="bg-white border-2 border-teal-200 rounded-xl p-8 text-center">
          <Lock className="w-12 h-12 text-teal-600 mx-auto mb-4 opacity-50" />
          <p className="text-stone-500 text-sm mb-6">
            Authentication interface would appear here
          </p>
          <div className="text-xs text-stone-400">
            Login and registration functionality
          </div>
        </div>

        {onNavigate && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onNavigate('Panels & Studies')}
              className="group flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold text-sm transition-all hover:shadow-lg"
            >
              View Panels & Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
