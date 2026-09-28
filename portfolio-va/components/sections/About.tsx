import React from 'react';
import { getAboutContent } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  const content = getAboutContent();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading title={content.sectionTitle} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Narrative Biography (Left Column) */}
        <div className="lg:col-span-7 flex flex-col gap-6 font-body text-base sm:text-lg text-ink-soft leading-relaxed max-w-prose">
          {content.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className={idx === 0 ? 'text-ink font-medium leading-relaxed' : ''}
            >
              {paragraph}
            </p>
          ))}

          <div className="pt-4 border-t border-ink/10 flex items-center gap-4 text-xs font-mono text-ink-soft">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1b873f]" aria-hidden="true" />
            <span>Open for international remote contracts & ongoing operational retainers</span>
          </div>
        </div>

        {/* Credentials & Background Box (Right Column) */}
        <div className="lg:col-span-5 border border-ink bg-paper p-6 sm:p-8 rounded-[2px]">
          <h3 className="text-xs font-mono uppercase tracking-widest text-ink/60 font-semibold pb-4 border-b border-ink/15 mb-6">
            VERIFIED CREDENTIALS & BACKGROUND
          </h3>

          <dl className="space-y-5">
            {content.credentials.map((item) => (
              <div key={item.label} className="border-b border-ink/10 pb-4 last:border-b-0 last:pb-0">
                <dt className="text-xs font-mono uppercase tracking-wider text-accent font-medium mb-1">
                  {item.label}
                </dt>
                <dd className="text-sm font-body text-ink font-medium leading-snug">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
