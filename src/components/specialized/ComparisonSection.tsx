import { ReactNode } from 'react';

interface ComparisonSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function ComparisonSection({
  title,
  description,
  children,
  className = ''
}: ComparisonSectionProps) {
  return (
    <div className={`bg-gradient-to-br from-cyan-50 to-stone-50 p-10 md:p-12 rounded-xl border-2 border-cyan-200 shadow-lg ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-stone-600 text-lg" style={{ lineHeight: '1.7' }}>
            {description}
          </p>
        )}
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}
