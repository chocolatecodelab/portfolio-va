import React from 'react';
import { getNavigationContent } from '@/lib/content';
import { Button } from '@/components/ui/Button';

export function SiteNav() {
  const nav = getNavigationContent();

  return (
    <header className="sticky top-0 z-50 w-full bg-paper border-b border-ink/15">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Identity */}
        <a
          href="#"
          className="flex flex-col group focus-visible:ring-2 focus-visible:ring-focus focus:outline-none"
        >
          <span className="font-display font-semibold text-lg tracking-tight text-ink group-hover:text-accent transition-colors">
            {nav.brand}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
            {nav.role}
          </span>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-body text-ink-soft"
          aria-label="Main Navigation"
        >
          {nav.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-ink transition-colors py-1 focus-visible:ring-2 focus-visible:ring-focus focus:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Button href={nav.ctaButton.href} size="sm">
            {nav.ctaButton.label}
          </Button>
        </div>
      </div>

      {/* Mobile Anchor Strip */}
      <div className="md:hidden flex items-center justify-around border-t border-ink/10 py-2 px-4 bg-paper-raised text-xs font-mono text-ink-soft">
        {nav.navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-ink transition-colors py-1 px-2"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
