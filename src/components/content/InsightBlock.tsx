import { ReactNode } from 'react';

interface InsightBlockProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'conclusion';
  className?: string;
}

const variants = {
  default: 'bg-cyan-50 border-l-4 border-cyan-600',
  highlight: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-l-4 border-cyan-600',
  conclusion: 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-l-4 border-cyan-700'
};

export default function InsightBlock({
  title,
  children,
  variant = 'default',
  className = ''
}: InsightBlockProps) {
  return (
    <div className={`${variants[variant]} p-8 md:p-10 rounded-r-lg ${className}`}>
      {title && (
        <h3 className="text-xs uppercase tracking-widest text-cyan-800 mb-6 font-medium">
          {title}
        </h3>
      )}
      <div className="space-y-4 text-stone-700" style={{ lineHeight: '1.8' }}>
        {children}
      </div>
    </div>
  );
}
