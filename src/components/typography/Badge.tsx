import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

const variants = {
  default: 'bg-stone-100 text-stone-700',
  accent: 'bg-cyan-100 text-cyan-800'
};

export default function Badge({
  children,
  variant = 'accent',
  className = ''
}: BadgeProps) {
  return (
    <div className={`inline-block px-4 py-1 ${variants[variant]} text-xs uppercase tracking-widest font-medium rounded-full ${className}`}>
      {children}
    </div>
  );
}
