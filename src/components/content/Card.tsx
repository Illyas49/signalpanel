import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'accent' | 'compact' | 'hover-lift';
  padding?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  hover3d?: boolean;
}

const variants = {
  default: 'bg-white border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow duration-300',
  elevated: 'bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100',
  bordered: 'bg-white border-2 border-stone-300 shadow-sm',
  accent: 'bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/60 shadow-md',
  compact: 'bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300',
  'hover-lift': 'bg-white border border-stone-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
};

const paddings = {
  xs: 'p-4',
  sm: 'p-5',
  md: 'p-6',
  lg: 'p-8'
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover3d = false
}: CardProps) {
  const hover3dClass = hover3d ? 'hover-3d-card' : '';

  return (
    <div className={`${variants[variant]} ${paddings[padding]} rounded-xl ${hover3dClass} ${className}`}>
      {children}
    </div>
  );
}
