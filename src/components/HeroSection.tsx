import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import Magnet from './Magnet';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: 'mailto:murtazatiz@gmail.com' },
];

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-sm md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Heading — sits above the portrait (z-20) so the gradient letters stay
          readable even when the portrait rises behind them. */}
      <div className="relative z-20 overflow-hidden px-6 md:px-10">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full font-black uppercase tracking-tight leading-none whitespace-nowrap text-[11.5vw] sm:text-[12vw] md:text-[12.5vw] lg:text-[13vw] mt-4 sm:mt-3 md:mt-0"
        >
          Hi, i&apos;m Murtaza
        </FadeIn>
      </div>

      {/* Bottom bar — above the portrait so the contact button stays clickable. */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          product manager turning ambiguous challenges into shipped, measurable products
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait — sized by viewport height on sm+ so it fills the space
          between the heading and the bottom bar instead of leaving a gap.
          The centering transform lives on this static wrapper so it is not
          clobbered by Framer Motion's animated transform on FadeIn. */}
      <div className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="Murtaza portrait"
              className="select-none h-auto w-[260px] sm:w-auto sm:h-[62vh] md:h-[66vh] lg:h-[70vh] max-w-[92vw] object-contain"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
