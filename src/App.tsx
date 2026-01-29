import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Methodology from './pages/Methodology';
import PanelsStudies from './pages/PanelsStudies';
import About from './pages/About';
import Access from './pages/Access';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={setCurrentPage} />;
      case 'Methodology':
        return <Methodology />;
      case 'Panels & Studies':
        return <PanelsStudies onNavigate={setCurrentPage} />;
      case 'About':
        return <About />;
      case 'Access':
        return <Access onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-8 py-16 md:py-20">
          {renderPage()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
