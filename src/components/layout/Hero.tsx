import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  overlay?: 'light' | 'medium' | 'dark';
  height?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

const overlays = {
  light: 'bg-gradient-to-br from-cyan-700/70 to-cyan-900/75',
  medium: 'bg-gradient-to-br from-cyan-700/85 to-cyan-900/90',
  dark: 'bg-gradient-to-br from-cyan-700/95 to-cyan-900/95'
};

const heights = {
  sm: 'min-h-[400px] md:min-h-[500px]',
  md: 'min-h-[500px] md:min-h-[600px]',
  lg: 'min-h-[600px] md:min-h-[700px]'
};

export default function Hero({
  children,
  imageUrl,
  imageAlt = 'Hero background',
  overlay = 'medium',
  height = 'md',
  rounded = true
}: HeroProps) {
  const roundedClass = rounded ? 'rounded-3xl' : '';

  return (
    <section className={`-mx-4 md:-mx-8 px-4 md:px-8 relative overflow-hidden ${roundedClass}`}>
      <div className={`${heights[height]} flex items-center justify-center ${roundedClass}`}>
        {imageUrl && (
          <div className={`absolute inset-0 z-0 ${roundedClass} overflow-hidden`}>
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
              style={{ filter: 'blur(8px)' }}
            />
            <div className={`absolute inset-0 ${overlays[overlay]}`}></div>
          </div>
        )}
        <div className="relative z-10 w-full max-w-5xl mx-auto py-20 md:py-32">
          {children}
        </div>
      </div>
    </section>
  );
}
