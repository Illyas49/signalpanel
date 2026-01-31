import { ReactNode } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
  className?: string;
}

const levels = {
  1: 'text-4xl md:text-5xl lg:text-6xl',
  2: 'text-3xl md:text-4xl',
  3: 'text-2xl md:text-3xl',
  4: 'text-xl md:text-2xl'
};

const lineHeights = {
  1: 'leading-tight',
  2: 'leading-tight',
  3: 'leading-snug',
  4: 'leading-snug'
};

const weights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold'
};

const aligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

export default function Heading({
  level,
  children,
  align = 'left',
  weight = 'light',
  className = ''
}: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={`${levels[level]} ${lineHeights[level]} ${weights[weight]} ${aligns[align]} text-stone-900 tracking-tight ${className}`}
    >
      {children}
    </Component>
  );
}
