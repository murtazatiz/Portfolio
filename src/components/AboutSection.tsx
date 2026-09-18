import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

const BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const MOON_ICON = `${BASE}/moon_icon.11395d36.png`;
const OBJECT_3D = `${BASE}/p59_1.4659672e.png`;
const LEGO_ICON = `${BASE}/lego_icon-1.703bb594.png`;
const GROUP_3D = `${BASE}/Group_134-1.2e04f3ce.png`;

const ABOUT_TEXT =
  "With over ten years building enterprise web, api, and ai products in regulated fintech, i turn ambiguous business challenges into shipped, measurable outcomes. Currently leading tier 1 credit intelligence products at TransUnion CIBIL. Let's build something impactful together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative corner objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={MOON_ICON} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={LEGO_ICON} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src={OBJECT_3D} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={GROUP_3D} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Content */}
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
