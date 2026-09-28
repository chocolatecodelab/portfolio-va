import React from 'react';
import { getHeroContent } from '@/lib/content';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const content = getHeroContent();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="w-full pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-ink/15"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Oversized Editorial Headline & Narrative */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Mobile Status Badge */}
          <div className="lg:hidden mb-6 hero-animate-badge">
            <div className="inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1 text-xs font-mono text-ink rounded-[2px]">
              <span
                className="inline-block w-2 h-2 rounded-full bg-[#1b873f]"
                aria-hidden="true"
              />
              <span className="font-medium tracking-wider uppercase">
                {content.badge}
              </span>
              <span className="text-ink/40" aria-hidden="true">
                /
              </span>
              <span className="text-ink-soft">{content.location}</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="hero-animate-headline font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[74px] text-ink leading-[1.03] tracking-tight uppercase whitespace-pre-line"
          >
            {content.headline}
          </h1>

          {/* Disciplines Strip */}
          <div className="hero-animate-disciplines mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-ink font-semibold">
            {content.disciplines.map((item, index) => (
              <React.Fragment key={item}>
                <span className="bg-paper-raised px-2.5 py-1 border border-ink/20 rounded-[2px]">
                  {item}
                </span>
                {index < content.disciplines.length - 1 && (
                  <span className="text-accent" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Subheadline Prose */}
          <p className="hero-animate-body mt-6 text-base sm:text-lg lg:text-xl font-body text-ink-soft max-w-prose leading-relaxed">
            {content.subheadline}
          </p>

          {/* Primary CTA */}
          <div className="hero-animate-cta mt-8 flex flex-wrap items-center gap-4">
            <Button href={content.cta.href} size="lg" variant="primary">
              <span>{content.cta.label}</span>
              <span aria-hidden="true">→</span>
            </Button>
            <a
              href="#work"
              className="text-sm font-body text-ink-soft hover:text-ink transition-colors underline decoration-ink/20 hover:decoration-accent underline-offset-4 py-2 px-1 focus-visible:ring-2 focus-visible:ring-focus focus:outline-none"
            >
              See systems I've built ↓
            </a>
          </div>
        </div>

        {/* Right Column (Desktop Only): Editorial Dispatch / Status Box */}
        <div className="hidden lg:flex lg:col-span-4 justify-end hero-animate-badge">
          <div className="w-full max-w-[280px] border border-ink bg-paper p-5 rounded-[2px]">
            <div className="flex items-center justify-between pb-3 border-b border-ink/15 text-[11px] font-mono uppercase tracking-wider text-ink/60">
              <span>STATUS: DISPATCH</span>
              <span>2026</span>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-ink">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#1b873f]"
                  aria-hidden="true"
                />
                <span className="tracking-wide">{content.badge}</span>
              </div>

              <div className="text-xs font-body text-ink-soft leading-relaxed pt-1">
                <p>
                  Focusing on async operations, data organization, and customized
                  workflow automations.
                </p>
              </div>

              <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink-soft">
                <span>LOCATION</span>
                <span className="font-medium text-ink">{content.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
