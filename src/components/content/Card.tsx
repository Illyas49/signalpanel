import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'accent';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  default: 'bg-white border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow duration-300',
  elevated: 'bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100',
  bordered: 'bg-white border-2 border-stone-300 shadow-sm',
  accent: 'bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/60 shadow-md'
};

const paddings = {
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-10'
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = ''
}: CardProps) {
  return (
    <div className={`${variants[variant]} ${paddings[padding]} rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
