import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import AuthForm from '../components/AuthForm';

interface AccessProps {
  onNavigate?: (page: string) => void;
}

export default function Access({ onNavigate }: AccessProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'login' | 'register'>('register');

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setLoading(false);
    })();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setIsAuthenticated(!!session);
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">Access</h1>
      </section>

      {!isAuthenticated ? (
        <>
          <section>
            <h2>Research Access</h2>
            <p>Access to panels, studies, and research outputs is limited.</p>
            <p>Eligibility may depend on:</p>
            <ul>
              <li>Jurisdiction</li>
              <li>Study scope</li>
              <li>Panel availability</li>
            </ul>
            <p>Participation is invitation-based and not guaranteed.</p>
          </section>

          <section className="border-2 border-stone-300 bg-stone-50 p-8">
            <h3 className="text-xl font-serif mb-4">Register or Sign In</h3>
            <p className="mb-8 text-stone-700">
              Create an account to access active study information and research materials.
            </p>

            <div className="flex justify-start">
              <AuthForm
                mode={mode}
                onSuccess={() => window.location.reload()}
                onToggleMode={toggleMode}
              />
            </div>

            {onNavigate && (
              <div className="mt-6">
                <button
                  onClick={() => onNavigate('Panels & Studies')}
                  className="text-stone-600 hover:text-stone-900 underline text-sm"
                >
                  View Panels & Studies
                </button>
              </div>
            )}
          </section>

          <section>
            <h2>Inquiries</h2>
            <p>General inquiries regarding research access may be submitted where applicable.</p>
            <p>SignalPanel does not offer open enrollment or public participation.</p>
          </section>
        </>
      ) : (
        <>
          <section>
            <div className="bg-stone-100 border border-stone-300 p-8">
              <h2 className="mt-0">Access Granted</h2>
              <p>You are currently signed in and have access to study materials.</p>
              <div className="flex gap-4 mt-6">
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('Panels & Studies')}
                    className="px-6 py-3 border-2 border-stone-900 bg-white text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                  >
                    View Active Studies
                  </button>
                )}
                <button
                  onClick={handleSignOut}
                  className="px-6 py-3 border-2 border-stone-300 bg-white text-stone-900 hover:border-stone-900 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2>Research Access</h2>
            <p>Access to panels, studies, and research outputs is limited.</p>
            <p>Eligibility may depend on:</p>
            <ul>
              <li>Jurisdiction</li>
              <li>Study scope</li>
              <li>Panel availability</li>
            </ul>
            <p>Participation is invitation-based and not guaranteed.</p>
          </section>

          <section>
            <h2>Inquiries</h2>
            <p>General inquiries regarding research access may be submitted where applicable.</p>
            <p>SignalPanel does not offer open enrollment or public participation.</p>
          </section>
        </>
      )}
    </div>
  );
}
