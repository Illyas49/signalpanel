import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSuccess: () => void;
  onToggleMode: () => void;
}

export default function AuthForm({ mode, onSuccess, onToggleMode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    (async () => {
      try {
        if (mode === 'register') {
          const { error } = await supabase.auth.signUp({
            email,
            password,
          });
          if (error) throw error;
          onSuccess();
        } else {
          const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (error) throw error;
          onSuccess();
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <div className="border border-stone-300 bg-stone-50 p-8 max-w-md">
      <h3 className="text-xl font-serif mb-6">
        {mode === 'login' ? 'Sign In' : 'Register'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-stone-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:border-stone-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-2 text-stone-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:border-stone-500"
          />
        </div>

        {error && (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors disabled:bg-stone-400"
        >
          {loading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Register'}
        </button>

        <button
          type="button"
          onClick={onToggleMode}
          className="w-full text-sm text-stone-600 hover:text-stone-900 underline"
        >
          {mode === 'login' ? 'Need an account? Register' : 'Already have an account? Sign In'}
        </button>
      </form>
    </div>
  );
}
