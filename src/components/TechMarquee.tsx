import { cn } from '../lib/utils';

type MarqueeItem = {
  file: string;
  name: string;
  color: string;
  glow: string;
};

const marqueeItems: MarqueeItem[] = [
  { file: 'ps.jpg.jpeg', name: 'Photoshop', color: 'text-white', glow: 'group-hover:shadow-white/15' },
  { file: 'ai.jpg.jpeg', name: 'Illustrator', color: 'text-white', glow: 'group-hover:shadow-white/15' },
  { file: 'id.jpg.jpeg', name: 'InDesign', color: 'text-white', glow: 'group-hover:shadow-white/15' },
  { file: 'ae.jpg.jpeg', name: 'After Effects', color: 'text-white', glow: 'group-hover:shadow-white/15' },
  { file: 'pr.jpg.jpeg', name: 'Premiere Pro', color: 'text-white', glow: 'group-hover:shadow-white/15' },
  { file: 'lr.jpg.jpeg', name: 'Lightroom', color: 'text-white', glow: 'group-hover:shadow-white/15' },
  { file: 'cdr.jpg.jpeg', name: 'CorelDRAW', color: 'text-white', glow: 'group-hover:shadow-white/15' },
];

function workonUrl(file: string) {
  return `/workon/${encodeURIComponent(file)}`;
}

function MarqueeCard({
  item,
  iconTiltClass,
}: {
  item: MarqueeItem;
  iconTiltClass: string;
}) {
  const logoSrc = workonUrl(item.file);

  return (
    <div
      className={cn(
        'group flex flex-nowrap items-center gap-5 bg-white/3 border border-white/10 px-8 sm:px-10 py-5 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-white/8 hover:scale-105 hover:border-white/20 min-w-[260px] w-max shadow-2xl',
        item.glow
      )}
    >
      <div
        className={cn(
          'flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg',
          iconTiltClass
        )}
      >
        <img
          src={logoSrc}
          alt={item.name}
          className="max-h-10 max-w-10 object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span
        className={cn(
          'text-2xl font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap shrink-0',
          item.color
        )}
      >
        {item.name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const trackItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            We Work on
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed">
            A sneak peek into our services
          </p>
        </div>

        <div className="relative left-1/2 flex w-screen -translate-x-1/2 flex-col gap-12 pointer-events-auto">
          <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden transform skew-y-1">
            <div className="flex animate-marquee gap-8 min-w-full px-3">
              {trackItems.map((item, idx) => (
                <MarqueeCard
                  key={`row1-${idx}-${item.name}-${item.file}`}
                  item={item}
                  iconTiltClass="transform group-hover:rotate-12 transition-transform duration-500"
                />
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden transform skew-y-1">
            <div className="flex animate-marquee-reverse gap-8 min-w-full px-3">
              {trackItems.map((item, idx) => (
                <MarqueeCard
                  key={`row2-${idx}-${item.name}-${item.file}`}
                  item={item}
                  iconTiltClass="transform group-hover:rotate-12 transition-transform duration-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
