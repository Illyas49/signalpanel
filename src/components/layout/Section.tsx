import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'white' | 'gray' | 'cyan' | 'gradient' | 'dark' | 'accent';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gradient-to-b from-stone-50 to-stone-100',
  cyan: 'bg-gradient-to-br from-teal-50 to-cyan-50',
  gradient: 'bg-gradient-to-br from-teal-700 via-cyan-700 to-cyan-900',
  dark: 'bg-gradient-to-br from-stone-800 to-stone-900 text-white',
  accent: 'bg-gradient-to-br from-teal-600 to-cyan-700 text-white'
};

const spacings = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-20'
};

export default function Section({
  children,
  background = 'white',
  spacing = 'lg',
  className = ''
}: SectionProps) {
  return (
    <section className={`${backgrounds[background]} ${spacings[spacing]} -mx-4 md:-mx-8 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
