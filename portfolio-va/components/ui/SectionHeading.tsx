import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  as: Component = 'h2',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-12 ${className}`}>
      <Component className="font-display font-medium text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-ink leading-[1.1]">
        {title}
      </Component>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg font-body text-ink-soft max-w-prose leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
