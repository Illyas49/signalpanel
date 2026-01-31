import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'accent';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  default: 'bg-white border border-stone-200',
  elevated: 'bg-white shadow-md',
  bordered: 'bg-white border-2 border-stone-300',
  accent: 'bg-cyan-50 border border-cyan-200'
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
    <div className={`${variants[variant]} ${paddings[padding]} rounded-lg ${className}`}>
      {children}
    </div>
  );
}
