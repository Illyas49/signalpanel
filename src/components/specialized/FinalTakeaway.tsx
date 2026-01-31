import { ReactNode } from 'react';

interface FinalTakeawayProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'emphasis';
  className?: string;
}

const variants = {
  default: 'bg-gradient-to-br from-cyan-700 to-cyan-900 text-white',
  emphasis: 'bg-gradient-to-br from-cyan-800 to-cyan-950 text-white'
};

export default function FinalTakeaway({
  title,
  children,
  variant = 'default',
  className = ''
}: FinalTakeawayProps) {
  return (
    <div className={`${variants[variant]} p-12 md:p-16 rounded-2xl shadow-2xl ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-white/20 text-cyan-100 text-xs uppercase tracking-widest font-medium mb-8 rounded-full">
          Final Summary
        </div>
        <h2 className="text-3xl md:text-4xl font-normal mb-8 tracking-tight">
          {title}
        </h2>
        <div className="text-lg md:text-xl text-cyan-50 space-y-6" style={{ lineHeight: '1.8' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
