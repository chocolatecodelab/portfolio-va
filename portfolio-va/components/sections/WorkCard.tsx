import React from 'react';
import type { WorkItem } from '@/lib/types';
import { TagList } from '@/components/ui/TagList';

interface WorkCardProps {
  work: WorkItem;
  className?: string;
}

export function WorkCard({ work, className = '' }: WorkCardProps) {
  return (
    <article
      className={`border border-ink bg-paper p-6 sm:p-8 lg:p-10 rounded-[2px] transition-colors duration-150 hover:border-accent flex flex-col justify-between group ${className}`}
    >
      <div>
        {/* Header / Title */}
        <div className="border-b border-ink/15 pb-4 mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50 block mb-1">
              CASE STUDY · OPERATIONAL SYSTEM
            </span>
            <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-accent transition-colors">
              {work.title}
            </h3>
          </div>

          {/* Quick Action Badges if liveUrl or videoUrl exist */}
          <div className="flex flex-wrap items-center gap-2">
            {work.videoUrl && (
              <a
                href={work.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent bg-paper-raised px-2.5 py-1 border border-accent/40 rounded-[2px] hover:border-accent transition-colors"
              >
                <span>90s Walkthrough</span>
                <span aria-hidden="true">▶</span>
              </a>
            )}
            {work.liveUrl && (
              <a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink bg-paper-raised px-2.5 py-1 border border-ink/30 rounded-[2px] hover:border-ink transition-colors"
              >
                <span>Live Sheet</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Framing / Core Value */}
        <p className="font-body text-base sm:text-lg text-ink leading-relaxed mb-6 font-medium">
          {work.tagline}
        </p>

        {/* Optional Visual Preview Slot (Screenshot/Artifact) */}
        {work.image && (
          <div className="mb-8 border border-ink bg-paper-raised overflow-hidden rounded-[2px]">
            <img
              src={work.image}
              alt={`${work.title} interface preview`}
              className="w-full h-auto object-cover max-h-[380px]"
              loading="lazy"
            />
          </div>
        )}

        {/* Problem & Solution Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm font-body">
          <div className="bg-paper-raised/60 p-4 border-l-2 border-ink/40">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink/70 font-semibold mb-2">
              The Operational Challenge
            </h4>
            <p className="text-ink-soft leading-relaxed">{work.problem}</p>
          </div>

          <div className="bg-paper-raised/60 p-4 border-l-2 border-accent">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2">
              System Architecture & Solution
            </h4>
            <p className="text-ink-soft leading-relaxed">{work.solution}</p>
          </div>
        </div>

        {/* Measurable Results / Built Capabilities */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-3 font-semibold">
            KEY SYSTEM ATTRIBUTES & RESULTS
          </h4>
          <ul className="space-y-2 text-sm font-body text-ink">
            {work.results.map((result) => (
              <li key={result} className="flex items-start gap-2.5">
                <span
                  className="text-accent font-bold select-none text-base leading-tight mt-[-1px]"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="text-ink-soft leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Capability Tags & Live Actions */}
      <div className="pt-6 border-t border-ink/15 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <TagList tags={work.tags} />

        {(work.liveUrl || work.videoUrl) && (
          <div className="flex items-center gap-3 text-xs font-mono">
            {work.liveUrl && (
              <a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent font-medium underline underline-offset-4"
              >
                Open Google Sheet ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
