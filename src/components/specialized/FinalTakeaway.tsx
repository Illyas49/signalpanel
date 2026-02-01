import { ReactNode } from 'react';

interface FinalTakeawayProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'emphasis';
  className?: string;
}

const variants = {
  default: 'bg-gradient-to-br from-teal-700 via-cyan-700 to-cyan-900 text-white border-2 border-teal-600/30',
  emphasis: 'bg-gradient-to-br from-teal-800 via-cyan-800 to-cyan-950 text-white border-2 border-teal-700/40'
};

export default function FinalTakeaway({
  title,
  children,
  variant = 'default',
  className = ''
}: FinalTakeawayProps) {
  return (
    <div className={`${variants[variant]} p-12 md:p-16 lg:p-20 rounded-3xl shadow-2xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-teal-100 text-xs uppercase tracking-widest font-semibold mb-10 rounded-full shadow-lg">
          Final Summary
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-10 tracking-tight">
          {title}
        </h2>
        <div className="text-lg md:text-xl text-teal-50 space-y-6" style={{ lineHeight: '1.9' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
