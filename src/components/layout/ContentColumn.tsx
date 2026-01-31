import { ReactNode } from 'react';

interface ContentColumnProps {
  children: ReactNode;
  width?: 'narrow' | 'medium' | 'wide';
  className?: string;
}

const widths = {
  narrow: 'max-w-2xl',
  medium: 'max-w-3xl',
  wide: 'max-w-4xl'
};

export default function ContentColumn({
  children,
  width = 'medium',
  className = ''
}: ContentColumnProps) {
  return (
    <div className={`${widths[width]} mx-auto ${className}`} style={{ lineHeight: '1.7' }}>
      {children}
    </div>
  );
}
