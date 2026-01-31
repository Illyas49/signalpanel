import { ReactNode } from 'react';

interface ChartBlockProps {
  title: string;
  chart: ReactNode;
  caption: string;
  className?: string;
}

export default function ChartBlock({
  title,
  chart,
  caption,
  className = ''
}: ChartBlockProps) {
  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-normal text-stone-900 mb-6 tracking-tight">
        {title}
      </h3>
      <div className="mb-6">
        {chart}
      </div>
      <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-lg border-l-4 border-stone-300">
        {caption}
      </p>
    </div>
  );
}
