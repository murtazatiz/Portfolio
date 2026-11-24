import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import photo from '../assets/murtaza.webp';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

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
          y={24}
          className="hero-heading w-full font-black uppercase tracking-tight leading-none whitespace-nowrap text-[9.3vw] md:text-[9.8vw] lg:text-[10.1vw] xl:text-[10.3vw] mt-4 sm:mt-3 md:mt-0"
        >
          Murtaza Tinwala
        </FadeIn>
      </div>

      {/* Bottom bar — above the portrait so the contact button stays clickable. */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20} className="max-w-[180px] sm:max-w-[260px] md:max-w-[320px]">
          <p
            className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)' }}
          >
            Product Manager
            <br />
            Fintech &amp; Generative AI
          </p>
          <p
            className="mt-2 text-[#D7E2EA]/60 font-light uppercase tracking-wider"
            style={{ fontSize: 'clamp(0.65rem, 1vw, 1rem)' }}
          >
            10+ years · TransUnion CIBIL
          </p>
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
              src={photo}
              alt="Murtaza Tinwala"
              className="portrait-fade select-none aspect-square w-[115vw] max-w-[480px] sm:w-auto sm:h-[70vh] md:h-[74vh] lg:h-[78vh] sm:max-w-[92vw] object-cover"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
