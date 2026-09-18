type LiveProjectButtonProps = {
  label?: string;
  /** External URL. When provided, renders an anchor opening in a new tab.
   *  When omitted, renders a non-interactive pill (e.g. for internal/enterprise
   *  products with no public link). */
  href?: string;
  className?: string;
};

const PILL_CLASSES =
  'inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-center px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base';

/**
 * Ghost / outline pill used on project cards.
 */
export default function LiveProjectButton({
  label = 'Live Project',
  href,
  className = '',
}: LiveProjectButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`${PILL_CLASSES} transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
      >
        {label}
      </a>
    );
  }

  return <span className={`${PILL_CLASSES} opacity-70 ${className}`}>{label}</span>;
}
