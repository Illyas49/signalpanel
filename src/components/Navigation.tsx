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
    <nav className="border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('Home')}
            className="text-base md:text-lg tracking-widest font-medium text-stone-900"
          >
            SIGNALPANEL
          </button>

          <div className="hidden lg:flex gap-10">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`text-sm transition-colors tracking-wide ${
                  currentPage === page
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t border-stone-200">
            <div className="flex flex-col gap-5">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavigate(page)}
                  className={`text-left text-sm py-2 transition-colors tracking-wide ${
                    currentPage === page
                      ? 'text-stone-900 font-medium'
                      : 'text-stone-600 hover:text-stone-900'
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
