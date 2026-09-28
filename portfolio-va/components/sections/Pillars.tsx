import React from 'react';
import { getPillarsContent } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Pillars() {
  const content = getPillarsContent();

  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="w-full py-16 sm:py-20 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title={content.sectionTitle}
        subtitle={content.sectionSubtitle}
      />

      {/* 4 Pillars Grid (2x2 on mobile, 4 columns on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-ink bg-paper divide-y sm:divide-y-0 sm:divide-x divide-ink">
        {content.pillars.map((pillar) => {
          const isLinked = Boolean(pillar.relatedSection);

          return (
            <div
              key={pillar.id}
              className="p-6 sm:p-7 flex flex-col justify-between hover:bg-paper-raised transition-colors group"
            >
              <div>
                <h3 className="font-display font-medium text-2xl text-ink tracking-tight mb-4 flex items-center justify-between">
                  <span>{pillar.title}</span>
                  {isLinked && (
                    <span
                      className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      SEE WORK ↗
                    </span>
                  )}
                </h3>

                <ul className="space-y-2.5 text-sm font-body text-ink-soft">
                  {pillar.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2.5">
                      <span
                        className="text-accent font-bold select-none text-xs mt-0.5"
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span className="leading-snug">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {isLinked && (
                <div className="pt-6 mt-6 border-t border-ink/10">
                  <a
                    href={pillar.relatedSection}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink hover:text-accent transition-colors"
                  >
                    <span>Explore built systems</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
