import React from 'react';
import { getSelectedWork, getTechnicalCapability } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WorkCard } from '@/components/sections/WorkCard';

export function SelectedWork() {
  const works = getSelectedWork();
  const capability = getTechnicalCapability();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title="Things I've Built & Organized"
        subtitle="Operational systems designed from the ground up for data integrity, error-prevention, and non-technical user experience."
      />

      {/* Case Studies List */}
      <div className="flex flex-col gap-10 sm:gap-14">
        {works.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>

      {/* Supporting Technical Capability Box */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 border border-ink/30 bg-paper-raised rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-[70ch]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold block mb-1">
            {capability.heading}
          </span>
          <p className="text-sm font-body text-ink-soft leading-relaxed">
            {capability.note}
          </p>
        </div>

        <a
          href={capability.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink bg-paper px-4 py-2.5 border border-ink shadow-brutal-sm hover:border-accent hover:text-accent active:translate-x-[1px] active:translate-y-[1px] active:shadow-brutal-pressed transition-all shrink-0 rounded-[2px]"
        >
          <span>{capability.portfolioLabel}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
