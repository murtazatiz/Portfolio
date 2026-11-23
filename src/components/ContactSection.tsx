import { useState } from 'react';
import FadeIn from './FadeIn';

const EMAIL = 'murtazatiz@gmail.com';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s talk
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          className="mt-8 sm:mt-10 max-w-[520px] font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
        >
          Have a role or a product in mind? Email is the fastest way to reach me.
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-[#D7E2EA] underline decoration-[#D7E2EA]/30 decoration-2 underline-offset-8 transition-colors duration-200 hover:decoration-[#D7E2EA]"
            style={{ fontSize: 'clamp(1.25rem, 3.2vw, 2.5rem)' }}
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="min-w-[10rem] rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
          >
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </FadeIn>
      </div>

      <div className="mx-auto mt-24 sm:mt-32 flex max-w-6xl items-center justify-between gap-4 border-t border-[#D7E2EA]/15 pt-6 text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/50">
        <span>© {new Date().getFullYear()} Murtaza Tinwala</span>
        <a href="#top" className="transition-colors duration-200 hover:text-[#D7E2EA]">
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
