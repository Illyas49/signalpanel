import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  description?: string;
  variant?: 'default' | 'compact';
  className?: string;
}

export default function MetricCard({
  icon: Icon,
  label,
  value,
  description,
  variant = 'default',
  className = ''
}: MetricCardProps) {
  if (variant === 'compact') {
    return (
      <div className={`bg-white p-6 rounded-lg border border-stone-200 ${className}`}>
        <div className="flex items-start gap-4">
          {Icon && (
            <div className="p-3 bg-cyan-50 rounded-lg flex-shrink-0">
              <Icon className="w-6 h-6 text-cyan-700" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="text-sm text-stone-600 mb-1">{label}</div>
            <div className="text-2xl font-light text-stone-900">{value}</div>
            {description && (
              <div className="text-xs text-stone-500 mt-1">{description}</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-8 rounded-lg border border-stone-200 hover:border-cyan-600 transition-all ${className}`}>
      {Icon && (
        <div className="mb-5 p-2.5 bg-cyan-50 inline-flex rounded">
          <Icon className="w-6 h-6 text-cyan-700" />
        </div>
      )}
      <div className="text-sm text-stone-600 mb-2 uppercase tracking-wide">{label}</div>
      <div className="text-4xl font-light text-stone-900 mb-3">{value}</div>
      {description && (
        <div className="text-stone-600 text-sm leading-relaxed">{description}</div>
      )}
    </div>
  );
}
