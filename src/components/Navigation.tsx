interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = ['Home', 'Methodology', 'Research Areas', 'Panels & Studies', 'About', 'Access'];

  return (
    <nav className="border-b border-stone-300 bg-stone-50">
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('Home')}
            className="font-serif text-xl tracking-wide"
          >
            SIGNALPANEL
          </button>

          <div className="flex gap-8">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`text-sm transition-colors ${
                  currentPage === page
                    ? 'text-stone-900'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
