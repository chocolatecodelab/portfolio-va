import React from 'react';
import { getToolsContent } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Tools() {
  const content = getToolsContent();

  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title={content.sectionTitle}
        subtitle={content.sectionSubtitle}
      />

      {/* Categorized Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {content.categories.map((category) => (
          <div
            key={category.name}
            className="border border-ink bg-paper p-6 sm:p-7 rounded-[2px] hover:border-accent transition-colors duration-150 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-medium text-xl text-ink tracking-tight pb-3 mb-4 border-b border-ink/15">
                {category.name}
              </h3>

              <ul className="space-y-2.5">
                {category.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2.5 text-sm font-body text-ink-soft"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-ink/40"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs sm:text-sm text-ink tracking-wide">
                      {tool}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
