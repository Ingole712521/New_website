const LOGOS: { file: string; alt: string; onLight?: boolean }[] = [
  // { file: 'Asset-12@4x.png', alt: 'Cleversocks' },
  { file: 'Dimension-Brand-guideline-01.png', alt: 'Dimension Music' },
  { file: 'DrasIce-Logo-OPTIONS-fme-(1)-(1).png', alt: 'Dras Ice' },
  { file: 'logo-(1).png', alt: 'Ekum Homes' },
  { file: 'pooja.png', alt: 'Pooja Bhargava', onLight: true },
  {
    file: 'NEW LOGO.png',
    alt: 'Priti Doshi Studio',
    onLight: true,
  },
  { file: 'apexform-01.png', alt: 'Apexform' },
  { file: 'neotra.png', alt: 'Neotra' },
  { file: 'levelup gamers.png', alt: 'Levelup Gamers' },
  { file: 'alif view white logo.png', alt: 'Alif View' },
];

function logoSrc(file: string) {
  return `/logo/${encodeURIComponent(file)}`;
}

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-40 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-40 bg-linear-to-l from-black to-transparent" />

      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-5 text-center text-3xl font-extrabold uppercase tracking-tight text-white md:text-6xl">
          Trusted by
        </p>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex min-w-full animate-marquee items-center gap-3 px-3">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.file}-${idx}`}
              className="group w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-colors hover:border-white/20 sm:w-[260px] lg:w-[280px]"
            >
              <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-zinc-800/50 p-6 ring-1 ring-inset ring-white/10">
                <img
                  src={logoSrc(logo.file)}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain opacity-80 transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
