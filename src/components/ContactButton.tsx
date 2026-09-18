type ContactButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

const GRADIENT_STYLE = {
  background:
    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-3px',
} as const;

const BASE_CLASSES =
  'inline-block rounded-full text-white font-medium uppercase tracking-widest text-center transition-transform duration-200 hover:scale-[1.03] active:scale-100 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base';

/**
 * Gradient pill CTA used in the hero and about sections. Links to email by
 * default.
 */
export default function ContactButton({
  label = 'Contact Me',
  href = 'mailto:murtazatiz@gmail.com',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`${BASE_CLASSES} ${className}`}
      style={GRADIENT_STYLE}
    >
      {label}
    </a>
  );
}
