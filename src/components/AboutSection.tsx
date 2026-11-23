import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

const ABOUT_TEXT =
  "With over ten years building enterprise web, API, and AI products in regulated fintech, I turn ambiguous business challenges into shipped, measurable outcomes. Currently leading Tier 1 credit intelligence products at TransUnion CIBIL. Let's build something impactful together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-center font-medium leading-relaxed text-[#D7E2EA] max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0} y={30}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
