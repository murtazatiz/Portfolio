import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

const ABOUT_TEXT =
  "I'm a Product Manager with 10+ years shipping enterprise web and API products in regulated fintech and SaaS. At TransUnion CIBIL I lead Tier 1 credit intelligence products for India's financial institutions, and build internal AI agents that help teams move faster. I turn ambiguous business problems into shipped, measurable outcomes.";

const STATS = [
  { value: '10+', label: 'Years building products' },
  { value: '+30%', label: 'Adoption & usage in 3 months' },
  { value: '3 → 1', label: 'Days to onboard a user' },
  { value: '3×', label: 'Quarterly Best Performer' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-16 sm:gap-20 md:gap-24">
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
            className="text-center font-medium leading-relaxed text-[#D7E2EA] max-w-[620px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <dl className="grid w-full max-w-5xl grid-cols-2 md:grid-cols-4 border-t border-[#D7E2EA]/15">
          {STATS.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={i * 0.08}
              y={20}
              className="flex flex-col-reverse items-center gap-2 border-b border-[#D7E2EA]/15 px-3 py-8 text-center md:py-10 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
            >
              <dt
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
              >
                {stat.label}
              </dt>
              <dd
                className="hero-heading font-black leading-none whitespace-nowrap"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
              >
                {stat.value}
              </dd>
            </FadeIn>
          ))}
        </dl>

        <FadeIn delay={0} y={30}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
