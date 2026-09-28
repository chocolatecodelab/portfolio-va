import React from 'react';
import { getContactContent } from '@/lib/content';
import { Button } from '@/components/ui/Button';

export function ClosingCta() {
  const content = getContactContent();

  return (
    <section
      id="contact"
      aria-labelledby="closing-cta-heading"
      className="w-full py-16 sm:py-24 scroll-mt-16"
    >
      <div className="border-2 border-ink bg-paper-raised p-8 sm:p-12 lg:p-16 rounded-[2px] shadow-brutal relative">
        <div className="max-w-[70ch]">
          {/* Dispatch Eyebrow (Editorial) */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/70 mb-4 font-semibold">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-[#1b873f]"
              aria-hidden="true"
            />
            <span>{content.meta.status}</span>
          </div>

          {/* Heading */}
          <h2
            id="closing-cta-heading"
            className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink leading-[1.08] tracking-tight uppercase mb-5"
          >
            {content.sectionTitle}
          </h2>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg text-ink-soft leading-relaxed mb-8 max-w-prose">
            {content.subtitle}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
            <Button
              href={content.ctaButton.href}
              size="lg"
              variant="primary"
            >
              <span>{content.ctaButton.label}</span>
              <span aria-hidden="true">→</span>
            </Button>

            <span className="text-xs font-mono text-ink-soft">
              Typical response time: &lt; 24h
            </span>
          </div>

          {/* Direct Communication Channels Strip */}
          <div className="pt-8 border-t border-ink/15">
            <span className="text-xs font-mono uppercase tracking-wider text-ink/60 font-semibold block mb-3">
              DIRECT REACHOUT
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              {content.contactChannels.map((channel) => (
                <div key={channel.label} className="flex flex-col">
                  <span className="text-ink/50 uppercase">{channel.label}</span>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      channel.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="text-ink font-medium hover:text-accent transition-colors truncate underline decoration-ink/20 hover:decoration-accent underline-offset-4 mt-0.5"
                  >
                    {channel.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
