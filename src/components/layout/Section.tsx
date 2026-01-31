import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'white' | 'gray' | 'cyan' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-stone-50',
  cyan: 'bg-cyan-50',
  gradient: 'bg-gradient-to-br from-cyan-700 to-cyan-900'
};

const spacings = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24'
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
