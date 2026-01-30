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
    <nav className="border-b border-stone-300 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('Home')}
            className="font-serif text-lg md:text-xl tracking-wide"
          >
            SIGNALPANEL
          </button>

          <div className="hidden lg:flex gap-8">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-stone-300">
            <div className="flex flex-col gap-4">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavigate(page)}
                  className={`text-left text-sm py-2 transition-colors ${
                    currentPage === page
                      ? 'text-stone-900 font-semibold'
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
