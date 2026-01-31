import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'body' | 'muted' | 'accent' | 'light';
  className?: string;
}

const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

const variants = {
  body: 'text-stone-700',
  muted: 'text-stone-600',
  accent: 'text-cyan-800',
  light: 'text-cyan-50'
};

export default function Text({
  children,
  size = 'base',
  variant = 'body',
  className = ''
}: TextProps) {
  return (
    <p className={`${sizes[size]} ${variants[variant]} ${className}`} style={{ lineHeight: '1.7' }}>
      {children}
    </p>
  );
}
