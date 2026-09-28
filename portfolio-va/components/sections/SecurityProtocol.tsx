import React from 'react';
import { getProtocolContent } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SecurityProtocol() {
  const content = getProtocolContent();

  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title={content.sectionTitle}
        subtitle={content.sectionSubtitle}
      />

      {/* 2x2 Editorial Protocol Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-ink bg-paper divide-y md:divide-y-0 divide-ink">
        {content.principles.map((principle, index) => {
          // Add border-t to bottom row on desktop for crisp grid
          const isBottomRow = index >= 2;
          const isRightCol = index % 2 === 1;

          return (
            <div
              key={principle.id}
              className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-paper-raised transition-colors group ${
                isBottomRow ? 'md:border-t md:border-ink' : ''
              } ${isRightCol ? 'md:border-l md:border-ink' : ''}`}
            >
              <div>
                {/* Monospaced Security Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="border border-ink/30 bg-paper-raised px-2.5 py-0.5 text-xs font-mono text-ink tracking-wider font-semibold rounded-[2px] group-hover:border-accent group-hover:text-accent transition-colors">
                    {principle.tag}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full bg-ink/30 group-hover:bg-accent transition-colors"
                    aria-hidden="true"
                  />
                </div>

                {/* Protocol Title */}
                <h3 className="font-display font-medium text-2xl text-ink tracking-tight mb-3">
                  {principle.title}
                </h3>

                {/* Protocol Description */}
                <p className="font-body text-sm sm:text-base text-ink-soft leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editorial Reassurance Banner */}
      <div className="mt-8 p-6 sm:p-8 border border-ink/30 bg-paper-raised rounded-[2px] flex items-start gap-4">
        <span
          className="text-accent text-2xl sm:text-3xl font-display select-none leading-none mt-1"
          aria-hidden="true"
        >
          “
        </span>
        <p className="font-body text-sm sm:text-base text-ink font-medium leading-relaxed italic max-w-prose">
          {content.reassurance}
        </p>
      </div>
    </section>
  );
}
