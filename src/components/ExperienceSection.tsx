import FadeIn from './FadeIn';

type Role = {
  company: string;
  title: string;
  dates: string;
  progression?: string;
  points: string[];
};

const ROLES: Role[] = [
  {
    company: 'TransUnion CIBIL',
    title: 'Product Manager',
    dates: 'Nov 2022 — Present',
    points: [
      'Lead Tier 1 enterprise Web and API credit products, including Comprehensive Credit Reports and the Credit & Farm Report, for financial institutions across India.',
      'Lifted adoption and usage of CCIR and downstream channel products by 30% in 3 months with UI/UX enhancements.',
      'Cut the CCIR onboarding SLA from 3 days to 1 by finding and automating manual validation bottlenecks.',
      'Designed multi-agent AI assistants that let 3 departments self-serve product knowledge, plus AI agents that draft PRDs.',
      'Quarterly Best Performer: Q4 2023, Q3 2024 and Q3 2025.',
    ],
  },
  {
    company: 'Packt',
    title: 'Product Owner',
    dates: 'Jul 2015 — Nov 2022',
    progression: 'Technical Editor → Sr. Technical Editor → Operations Manager → Product Owner',
    points: [
      'Owned vision and roadmap for internal systems, including CRM, production management and automation trackers.',
      'Led the CRM migration from SugarCRM to SuiteCRM with zero disruption to ongoing workflows.',
      'Manager of the Quarter (2018) and Employee of the Year nominee (2019).',
    ],
  },
  {
    company: 'Robogenesis',
    title: 'Trainer',
    dates: 'Mar 2014 — Jul 2015',
    points: ['Trained 500+ learners in web development and security fundamentals.'],
  },
];

const CREDENTIALS = [
  { title: 'MBA, Operations & Marketing', detail: 'NMIMS · 2021 · CGPA 4.0/4.0, rank 3 of 90' },
  { title: 'Certified SAFe® 6 Product Owner / Product Manager', detail: 'Scaled Agile, Inc.' },
  { title: 'Generative AI Mastermind', detail: 'Outskill' },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 pb-24 sm:pb-28 md:pb-36"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-14 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {ROLES.map((role) => (
          <FadeIn
            key={role.company}
            y={30}
            className="grid gap-4 border-t border-[#D7E2EA]/15 py-8 sm:py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12"
          >
            <div className="flex flex-col gap-2">
              <span className="font-light uppercase tracking-widest text-[#D7E2EA]/50 text-xs sm:text-sm">
                {role.dates}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.35rem, 2.6vw, 2.1rem)' }}
              >
                {role.company}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="font-medium uppercase tracking-wide text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
                >
                  {role.title}
                </p>
                {role.progression && (
                  <p className="mt-1 font-light text-[#D7E2EA]/50 text-xs sm:text-sm">
                    {role.progression}
                  </p>
                )}
              </div>
              <ul className="flex flex-col gap-2.5">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 font-light leading-relaxed text-[#D7E2EA]/75"
                    style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(123deg, #B600A8, #BE4C00)' }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}

        <FadeIn
          y={30}
          className="grid gap-6 border-t border-[#D7E2EA]/15 pt-8 sm:pt-10 sm:grid-cols-3"
        >
          {CREDENTIALS.map((item) => (
            <div key={item.title} className="flex flex-col gap-1.5">
              <span className="font-medium text-[#D7E2EA] leading-snug" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}>
                {item.title}
              </span>
              <span className="font-light text-[#D7E2EA]/50 text-xs sm:text-sm">{item.detail}</span>
            </div>
          ))}
        </FadeIn>

        <FadeIn y={20} className="mt-12 flex justify-center">
          <a
            href={`${import.meta.env.BASE_URL}Murtaza-Tinwala-CV.pdf`}
            download
            className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
          >
            Download full CV ↓
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
