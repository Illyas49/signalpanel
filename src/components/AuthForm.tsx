interface AuthFormProps {
  mode: 'login' | 'register';
  onToggleMode: () => void;
}

export default function AuthForm({ mode, onToggleMode }: AuthFormProps) {
  return (
    <div className="border border-stone-300 bg-stone-50 p-8 max-w-md">
      <h3 className="text-xl font-serif mb-6">
        {mode === 'login' ? 'Sign In' : 'Register'}
      </h3>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-stone-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="[Auth placeholder]"
            disabled
            className="w-full px-4 py-2 border border-stone-300 bg-stone-100 text-stone-400"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-2 text-stone-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="[Auth placeholder]"
            disabled
            className="w-full px-4 py-2 border border-stone-300 bg-stone-100 text-stone-400"
          />
        </div>

        <button
          type="button"
          disabled
          className="w-full py-3 bg-stone-400 text-stone-50 cursor-not-allowed"
        >
          {mode === 'login' ? 'Sign In [Placeholder]' : 'Register [Placeholder]'}
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
