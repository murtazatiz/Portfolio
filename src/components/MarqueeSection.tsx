import { useEffect, useRef } from 'react';

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_ONE = [...MARQUEE_IMAGES.slice(0, 11)];
const ROW_TWO = [...MARQUEE_IMAGES.slice(11)];

// Triple the tiles so the strip stays filled while it slides in either direction.
const ROW_ONE_TRIPLED = [...ROW_ONE, ...ROW_ONE, ...ROW_ONE];
const ROW_TWO_TRIPLED = [...ROW_TWO, ...ROW_TWO, ...ROW_TWO];

type TileProps = { src: string; alt: string };

function Tile({ src, alt }: TileProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="rounded-2xl object-cover shrink-0"
      style={{ width: 420, height: 270 }}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const offset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      const shifted = offset - 200;

      if (rowOneRef.current) {
        rowOneRef.current.style.transform = `translateX(${shifted}px)`;
      }
      if (rowTwoRef.current) {
        rowTwoRef.current.style.transform = `translateX(${-shifted}px)`;
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves right on scroll */}
        <div
          ref={rowOneRef}
          className="flex gap-3 w-max"
          style={{ willChange: 'transform' }}
        >
          {ROW_ONE_TRIPLED.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} alt={`Showcase ${i + 1}`} />
          ))}
        </div>

        {/* Row 2 — moves left on scroll */}
        <div
          ref={rowTwoRef}
          className="flex gap-3 w-max"
          style={{ willChange: 'transform' }}
        >
          {ROW_TWO_TRIPLED.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} alt={`Showcase ${i + 12}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
