import React from 'react';
import { getEngagementModelsContent } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function EngagementModels() {
  const content = getEngagementModelsContent();

  return (
    <section
      id="engagement"
      aria-labelledby="engagement-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title={content.sectionTitle}
        subtitle={content.sectionSubtitle}
      />

      {/* 3-Column Engagement Models Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {content.models.map((model) => (
          <article
            key={model.id}
            className="border border-ink bg-paper p-6 sm:p-8 rounded-[2px] hover:border-accent transition-colors duration-150 flex flex-col justify-between group"
          >
            <div>
              {/* Badge & Title */}
              <div className="border-b border-ink/15 pb-4 mb-5">
                <span className="inline-block border border-ink/20 bg-paper-raised px-2.5 py-0.5 text-xs font-mono text-ink tracking-wider font-semibold rounded-[2px] group-hover:border-accent group-hover:text-accent transition-colors">
                  {model.badge}
                </span>
                <h3 className="font-display font-medium text-2xl text-ink tracking-tight mt-3">
                  {model.title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="font-body text-sm sm:text-base text-ink leading-relaxed mb-6 font-medium">
                {model.tagline}
              </p>

              {/* Best For Box */}
              <div className="bg-paper-raised/60 p-4 border-l-2 border-ink/40 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-ink/70 font-semibold block mb-1">
                  BEST SUITED FOR
                </span>
                <p className="text-xs sm:text-sm font-body text-ink-soft leading-relaxed">
                  {model.bestFor}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold block mb-3">
                  TYPICAL DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs sm:text-sm font-body text-ink">
                  {model.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="text-accent font-bold select-none text-xs mt-0.5"
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span className="text-ink-soft leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cadence & Direct Action */}
            <div className="pt-5 border-t border-ink/15 mt-auto">
              <div className="text-[11px] font-mono text-ink-soft mb-4">
                <span className="text-ink/50 uppercase block mb-0.5">Cadence & SLA</span>
                <span className="text-ink font-medium leading-snug block">{model.cadence}</span>
              </div>

              <Button
                href={`#contact`}
                variant="secondary"
                size="sm"
                className="w-full text-center group-hover:bg-accent group-hover:text-accent-ink group-hover:border-ink group-hover:shadow-brutal transition-all"
              >
                <span>{model.ctaLabel}</span>
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* Custom Scope / Trial Banner */}
      <div className="mt-8 p-6 sm:p-8 border border-ink/30 bg-paper-raised rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm font-body text-ink-soft leading-relaxed max-w-[65ch]">
          {content.customNote}
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink hover:text-accent border-b border-ink hover:border-accent transition-colors pb-0.5 shrink-0"
        >
          <span>Discuss custom arrangement</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
