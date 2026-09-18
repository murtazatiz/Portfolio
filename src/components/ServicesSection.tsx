import FadeIn from './FadeIn';

type Service = {
  number: string;
  name: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Product Strategy & Roadmaps',
    description:
      'Translating ambiguous business goals into prioritised backlogs, clear roadmaps, and shipped products with measurable outcomes.',
  },
  {
    number: '02',
    name: 'Agile & SAFe Delivery',
    description:
      'Driving sprint planning, backlog management, and cross-functional delivery across engineering, UX, QA, and cybersecurity teams.',
  },
  {
    number: '03',
    name: 'Generative AI & Automation',
    description:
      'Designing conversational AI agents, multi-agent systems, and automation that cut SLAs and accelerate documentation and delivery.',
  },
  {
    number: '04',
    name: 'Fintech & Credit Products',
    description:
      'Building Tier 1 enterprise Web and API credit products for India’s financial institutions under strict regulatory and governance standards.',
  },
  {
    number: '05',
    name: '0-to-1 Product Building',
    description:
      'Shipping independent products end-to-end — strategy, UX, React Native, Node.js, and AI pipelines — from first idea to live app.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="expertise"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Expertise
      </h2>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 border-t border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 [&:not(:first-child)]:border-t-0"
          >
            <span
              className="font-black text-[#0C0C0C] leading-none shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-3 pt-1 sm:pt-2">
              <h3
                className="font-medium uppercase text-[#0C0C0C] leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                style={{
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  opacity: 0.6,
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
