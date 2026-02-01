export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl tracking-widest font-bold text-white">
              SIGNALPANEL
            </span>
          </div>

          <div className="max-w-2xl mx-auto p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-sm md:text-base text-teal-100 leading-relaxed">
              SignalPanel is an independent research organization. Research outputs are informational and do not constitute endorsements, evaluations, or recommendations.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-stone-400">
              © 2026 SignalPanel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
