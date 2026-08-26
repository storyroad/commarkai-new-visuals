import React, { useId } from 'react';

// Same two-overlapping-squares mark as public/favicon.svg, as an inline
// component so it can share the brand's gradient at any size.
export function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="62" height="62" rx="15" fill={`url(#${gradientId})`} opacity="0.8" />
      <rect x="19" y="19" width="62" height="62" rx="15" fill={`url(#${gradientId})`} opacity="0.8" />
    </svg>
  );
}
