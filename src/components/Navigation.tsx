import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = ['Home', 'Methodology', 'Research Areas', 'Panels & Studies', 'About', 'Access'];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-stone-200/60 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('Home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-base md:text-lg tracking-widest font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
              SIGNALPANEL
            </span>
          </button>

          <div className="hidden lg:flex gap-2">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`px-5 py-2.5 text-sm transition-all tracking-wide rounded-xl ${
                  currentPage === page
                    ? 'text-white bg-gradient-to-r from-teal-600 to-cyan-600 font-semibold shadow-md'
                    : 'text-stone-700 hover:text-teal-700 hover:bg-teal-50 font-medium'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl hover:shadow-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t border-stone-200 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavigate(page)}
                  className={`text-left text-sm py-3 px-4 transition-all tracking-wide rounded-xl ${
                    currentPage === page
                      ? 'text-white bg-gradient-to-r from-teal-600 to-cyan-600 font-semibold shadow-md'
                      : 'text-stone-700 hover:bg-teal-50 hover:text-teal-700 font-medium'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
