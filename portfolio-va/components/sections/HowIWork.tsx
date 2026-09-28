import React from 'react';
import { getHowIWorkContent } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function HowIWork() {
  const content = getHowIWorkContent();

  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title={content.sectionTitle}
        subtitle={content.tagline}
      />

      {/* 4-Step Timeline Grid */}
      <div className="border border-ink bg-paper divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-ink">
        {content.steps.map((item, index) => (
          <div
            key={item.step}
            className="p-6 sm:p-7 flex flex-col justify-between hover:bg-paper-raised transition-colors group"
          >
            <div>
              {/* Step Number & Connector */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm font-semibold text-accent tracking-widest">
                  {item.step}
                </span>
                {index < content.steps.length - 1 && (
                  <span
                    className="hidden lg:inline text-xs font-mono text-ink/30 group-hover:text-accent transition-colors"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>

              {/* Step Title */}
              <h3 className="font-display font-medium text-xl sm:text-2xl text-ink tracking-tight mb-3">
                {item.title}
              </h3>

              {/* Step Narrative */}
              <p className="font-body text-sm text-ink-soft leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
