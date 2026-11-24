import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import cibil1 from '../assets/projects/cibil-1.webp';
import cibil2 from '../assets/projects/cibil-2.webp';
import cibil3 from '../assets/projects/cibil-3.webp';
import oshi1 from '../assets/projects/oshi-1.webp';
import oshi2 from '../assets/projects/oshi-2.webp';
import oshi3 from '../assets/projects/oshi-3.webp';
import dabbaz1 from '../assets/projects/dabbaz-1.webp';
import dabbaz2 from '../assets/projects/dabbaz-2.webp';
import dabbaz3 from '../assets/projects/dabbaz-3.webp';

type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  /** External live URL. When set, the card's button links out. */
  href?: string;
  /** Override for the button label (e.g. "Enterprise" for internal products). */
  liveLabel?: string;
  col1: [string, string];
  col2: string;
  alts: [string, string, string];
};

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Comprehensive Credit Report',
    category: 'TransUnion CIBIL · Fintech',
    summary: 'Tier 1 enterprise Web and API credit products serving financial institutions across India.',
    liveLabel: 'Enterprise',
    col1: [cibil1, cibil2],
    col2: cibil3,
    alts: [
      'Adoption and usage up 30% in 3 months after CCIR UI/UX enhancements',
      'Onboarding SLA cut from 3 days to 1 by automating manual validation',
      'Tier 1 credit intelligence: Comprehensive Credit Reports, Credit & Farm Report, enterprise Web & API channels, multi-agent AI assistants',
    ],
  },
  {
    number: '02',
    name: 'Oshi — AI Content Library',
    category: 'Independent · iOS & Android',
    summary: 'Save links from any app and let GPT-4o mini sort them into your own library. Built solo, end to end.',
    href: 'https://oshiai.netlify.app',
    col1: [oshi1, oshi2],
    col2: oshi3,
    alts: ['Oshi homepage', 'Oshi tech stack: React Native, Node.js, Supabase, GPT-4o mini and more', 'Oshi on mobile'],
  },
  {
    number: '03',
    name: 'Dabbaz — Tiffin Marketplace',
    category: 'Independent · Web Platform',
    summary: "A marketplace connecting Mumbai's home cooks with customers who want fresh, home-cooked tiffins.",
    href: 'https://dabbaz.co.in',
    col1: [dabbaz1, dabbaz2],
    col2: dabbaz3,
    alts: ['Dabbaz customer homepage', 'Dabbaz cook signup: why cook with Dabbaz and how it works', 'Dabbaz on mobile: sign-in, customer home and cook signup'],
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
                  className="sm:truncate font-medium uppercase text-[#D7E2EA] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.4vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
                <p
                  className="mt-1 max-w-xl font-light leading-snug text-[#D7E2EA]/70"
                  style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.05rem)' }}
                >
                  {project.summary}
                </p>
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
                alt={project.alts[0]}
                loading="lazy"
                className={`w-full object-cover ${CARD_RADIUS}`}
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1[1]}
                alt={project.alts[1]}
                loading="lazy"
                className={`w-full object-cover ${CARD_RADIUS}`}
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-3/5">
              <img
                src={project.col2}
                alt={project.alts[2]}
                loading="lazy"
                className={`h-full w-full object-cover ${CARD_RADIUS}`}
              />
            </div>
          </div>

          {project.href && (
            <LiveProjectButton
              href={project.href}
              label={project.liveLabel}
              className="sm:hidden mt-4 w-full"
            />
          )}
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
