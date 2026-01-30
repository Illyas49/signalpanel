import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Methodology from './pages/Methodology';
import PanelsStudies from './pages/PanelsStudies';
import About from './pages/About';
import Access from './pages/Access';
import ResearchAreas from './pages/ResearchAreas';
import OnboardingEntryFlows from './pages/research-areas/OnboardingEntryFlows';
import InformationArchitecture from './pages/research-areas/InformationArchitecture';
import ControlDiscoverability from './pages/research-areas/ControlDiscoverability';
import CommunicationClarity from './pages/research-areas/CommunicationClarity';
import JurisdictionalContext from './pages/research-areas/JurisdictionalContext';
import ConsentDisclosureSurfaces from './pages/research-areas/ConsentDisclosureSurfaces';
import ErrorStatesRecovery from './pages/research-areas/ErrorStatesRecovery';
import NavigationWayfinding from './pages/research-areas/NavigationWayfinding';
import AccountSettingsSelfManagement from './pages/research-areas/AccountSettingsSelfManagement';
import TrustSignalsUserConfidence from './pages/research-areas/TrustSignalsUserConfidence';
import DeviceEnvironmentVariance from './pages/research-areas/DeviceEnvironmentVariance';
import CrossSessionContinuity from './pages/research-areas/CrossSessionContinuity';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={setCurrentPage} />;
      case 'Methodology':
        return <Methodology />;
      case 'Research Areas':
        return <ResearchAreas onNavigate={setCurrentPage} />;
      case 'Panels & Studies':
        return <PanelsStudies onNavigate={setCurrentPage} />;
      case 'About':
        return <About />;
      case 'Access':
        return <Access onNavigate={setCurrentPage} />;
      case 'onboarding-entry-flows':
        return <OnboardingEntryFlows />;
      case 'information-architecture':
        return <InformationArchitecture />;
      case 'control-discoverability':
        return <ControlDiscoverability />;
      case 'communication-clarity':
        return <CommunicationClarity />;
      case 'jurisdictional-context':
        return <JurisdictionalContext />;
      case 'consent-disclosure-surfaces':
        return <ConsentDisclosureSurfaces />;
      case 'error-states-recovery':
        return <ErrorStatesRecovery />;
      case 'navigation-wayfinding':
        return <NavigationWayfinding />;
      case 'account-settings-self-management':
        return <AccountSettingsSelfManagement />;
      case 'trust-signals-user-confidence':
        return <TrustSignalsUserConfidence />;
      case 'device-environment-variance':
        return <DeviceEnvironmentVariance />;
      case 'cross-session-continuity':
        return <CrossSessionContinuity />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
          {renderPage()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
