import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

type Project = {
  number: string;
  name: string;
  category: string;
  /** External live URL. When set, the card's button links out. */
  href?: string;
  /** Override for the button label (e.g. "Enterprise" for internal products). */
  liveLabel?: string;
  col1: [string, string];
  col2: string;
};

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Comprehensive Credit Report',
    category: 'TransUnion CIBIL · Fintech',
    liveLabel: 'Enterprise',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Oshi — AI Content Library',
    category: 'Independent · iOS & Android',
    href: 'https://oshiai.netlify.app',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Dabbaz — Tiffin Marketplace',
    category: 'Independent · Web Platform',
    href: 'https://dabbaz-fe.vercel.app',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

type CardProps = {
  index: number;
  total: number;
  project: Project;
  progress: MotionValue<number>;
};

function ProjectCard({ index, total, project, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <div className="sticky top-24 md:top-32">
        <motion.div
          className={`relative mx-auto max-w-6xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${CARD_RADIUS}`}
          style={{ scale, top: `${index * 28}px`, transformOrigin: 'top' }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 px-2 sm:px-4">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 min-w-0">
              <span
                className="font-black leading-none text-[#D7E2EA] shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="font-light uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm">
                  {project.category}
                </span>
                <h3
                  className="truncate font-medium uppercase text-[#D7E2EA] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.4vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            <LiveProjectButton
              href={project.href}
              label={project.liveLabel}
              className="hidden sm:inline-block shrink-0"
            />
          </div>

          {/* Bottom image grid */}
          <div className="mt-6 flex items-stretch gap-3 sm:gap-4">
            <div className="flex w-2/5 flex-col gap-3 sm:gap-4">
              <img
                src={project.col1[0]}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className={`w-full object-cover ${CARD_RADIUS}`}
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1[1]}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className={`w-full object-cover ${CARD_RADIUS}`}
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-3/5">
              <img
                src={project.col2}
                alt={`${project.name} preview 3`}
                loading="lazy"
                className={`h-full w-full object-cover ${CARD_RADIUS}`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Work
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            index={i}
            total={PROJECTS.length}
            project={project}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
