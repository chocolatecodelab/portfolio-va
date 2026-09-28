import React from 'react';

interface TagListProps {
  tags: string[];
  className?: string;
}

export function TagList({ tags, className = '' }: TagListProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-ink/20 bg-paper-raised px-2.5 py-0.5 text-xs font-mono text-ink-soft rounded-[2px] tracking-wide"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
