// The real brand mark (circuit "C", no wordmark baked in — "COMMARKAI" is set
// separately in type wherever this appears). Source: CommarkaiVectorLogo.svg,
// cropped to a padded square and stored as public/logo-mark.svg. The favicon
// (public/favicon.svg) intentionally still uses the older overlapping-squares
// mark and is untouched by this.
export function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return <img src="/logo-mark.svg" alt="" aria-hidden="true" className={className} />;
}
