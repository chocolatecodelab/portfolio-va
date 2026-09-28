import React from 'react';

interface StatusBadgeProps {
  label?: string;
  location?: string;
  className?: string;
}

export function StatusBadge({
  label = 'AVAILABLE FOR REMOTE WORK',
  location = 'Indonesia · GMT+7',
  className = '',
}: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1 text-xs font-mono text-ink rounded-[2px] ${className}`}
      role="status"
      aria-label={`${label}, located in ${location}`}
    >
      <span
        className="inline-block w-2 h-2 rounded-full bg-[#1b873f] animate-pulse"
        aria-hidden="true"
      />
      <span className="font-medium tracking-wider">{label}</span>
      {location && (
        <>
          <span className="text-ink/40" aria-hidden="true">
            /
          </span>
          <span className="text-ink-soft hidden sm:inline">{location}</span>
        </>
      )}
    </div>
  );
}
