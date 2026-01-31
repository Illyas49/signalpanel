import { ReactNode } from 'react';

interface AnalysisSectionProps {
  title?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}

export default function AnalysisSection({
  title,
  badge,
  children,
  className = ''
}: AnalysisSectionProps) {
  return (
    <div className={`${className}`}>
      {badge && (
        <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-800 text-xs uppercase tracking-widest font-medium mb-6 rounded-full">
          {badge}
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-stone-900 tracking-tight">
          {title}
        </h2>
      )}
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}
