export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                SignalPanel
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Independent research organization documenting user experience in regulated digital environments.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Research</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">Research Areas</a></li>
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">Methodology</a></li>
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">Panels & Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Organization</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-stone-400 hover:text-teal-400 transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-500">
              © 2026 SignalPanel. Research outputs are informational and do not constitute endorsements.
            </p>
            <p className="text-xs text-stone-500">
              Built for transparency in regulated digital environments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
