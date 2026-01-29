import { useState } from 'react';
import AuthForm from './AuthForm';

interface AuthGateProps {
  onNavigate?: (page: string) => void;
}

export default function AuthGate({ onNavigate }: AuthGateProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="border-2 border-stone-300 bg-white p-12 text-center">
      <h3 className="text-2xl font-serif mb-4">Access Required</h3>
      <p className="text-stone-700 mb-8 max-w-xl mx-auto">
        Detailed study materials and active research data are available to registered participants only.
        Please sign in or register to view this content.
      </p>

      <div className="flex justify-center">
        <AuthForm
          mode={mode}
          onToggleMode={toggleMode}
        />
      </div>

      {onNavigate && (
        <div className="mt-8">
          <button
            onClick={() => onNavigate('Access')}
            className="text-stone-600 hover:text-stone-900 underline text-sm"
          >
            Learn more about research access
          </button>
        </div>
      )}
    </div>
  );
}
