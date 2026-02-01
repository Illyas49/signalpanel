import { ReactNode } from 'react';

interface InsightBlockProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'conclusion';
  className?: string;
}

const variants = {
  default: 'bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-600 shadow-md',
  highlight: 'bg-gradient-to-br from-teal-100 to-cyan-100 border-l-4 border-teal-700 shadow-lg',
  conclusion: 'bg-gradient-to-br from-teal-600 to-cyan-700 border-l-4 border-teal-800 shadow-xl text-white'
};

export default function InsightBlock({
  title,
  children,
  variant = 'default',
  className = ''
}: InsightBlockProps) {
  return (
    <div className={`${variants[variant]} p-8 md:p-10 rounded-r-2xl ${className}`}>
      {title && (
        <h3 className={`text-xs uppercase tracking-widest mb-6 font-semibold ${variant === 'conclusion' ? 'text-teal-100' : 'text-teal-800'}`}>
          {title}
        </h3>
      )}
      <div className={`space-y-4 ${variant === 'conclusion' ? 'text-white' : 'text-stone-700'}`} style={{ lineHeight: '1.8' }}>
        {children}
      </div>
    </div>
  );
}
