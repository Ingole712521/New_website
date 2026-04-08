const LOGOS: { file: string; alt: string }[] = [
  { file: 'apexform-01.png', alt: 'Apexform' },
  { file: 'neotra.png', alt: 'Neotra' },
  { file: 'levelup gamers.png', alt: 'Levelup Gamers' },
  { file: 'home-page-handala-01.png', alt: 'Handala' },
  { file: 'alif view white logo.png', alt: 'Alif View' },
  { file: 'simpolo.png', alt: 'Simpolo' },
  { file: 'agl.png', alt: 'AGL' },
];

function logoSrc(file: string) {
  return `/logo/${encodeURIComponent(file)}`;
}

export function LogoMarquee() {
  return (
    <section className="py-16 bg-black overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-black to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-white text-4xl font-bold text-center ">
          Trusted by
        </p>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-10 min-w-full items-center">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.file}-${idx}`}
              className="shrink-0 px-4 py-3 rounded-2xl   backdrop-blur-sm"
            >
              <img
                src={logoSrc(logo.file)}
                alt={logo.alt}
                className="h-10 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

