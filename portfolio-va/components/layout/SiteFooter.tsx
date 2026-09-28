import React from 'react';
import { getContactContent } from '@/lib/content';

export function SiteFooter() {
  const contact = getContactContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-paper border-t-2 border-ink mt-auto">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-ink/15">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <p className="font-display text-2xl font-medium tracking-tight text-ink mb-2">
                Nazar Gunawan
              </p>
              <p className="text-sm font-body text-ink-soft max-w-[45ch] leading-relaxed">
                Tech-savvy remote assistant building resilient operational systems, data models, and workflow automations for founders and small teams.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-ink-soft">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1b873f]" aria-hidden="true" />
              <span>{contact.meta.status}</span>
            </div>
          </div>

          {/* Channels & Verification Links */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-ink/60 mb-3">
                Channels
              </h3>
              <ul className="space-y-2 text-sm font-body">
                {contact.contactChannels.slice(0, 3).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-ink hover:text-accent transition-colors underline decoration-ink/20 hover:decoration-accent underline-offset-4"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-ink/60 mb-3">
                Engineering Baseline
              </h3>
              <p className="text-xs text-ink-soft mb-2 leading-relaxed">
                Looking for deep software engineering proof?
              </p>
              <a
                href="https://nazargunawan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-ink hover:text-accent font-medium border-b border-ink hover:border-accent transition-colors pb-0.5"
              >
                <span>nazargunawan.vercel.app</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ink-soft">
          <p>
            © {currentYear} {contact.meta.copyright}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Location: {contact.meta.location}</span>
            <span className="text-ink/30" aria-hidden="true">|</span>
            <span>Timezone: {contact.meta.timezone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
