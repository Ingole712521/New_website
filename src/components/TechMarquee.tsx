import type { ReactNode } from 'react';
import {
  SiUnity,
  SiFlutter,
  SiThreedotjs,
  SiBlender,
  SiFigma,
  SiMongodb
} from 'react-icons/si';
import { cn } from '../lib/utils';
import { VscVscode } from 'react-icons/vsc';

type MarqueeItem = {
  name: string;
  color: string;
  glow: string;
  icon?: ReactNode;
  /** When set, show this image instead of `icon` */
  logoSrc?: string;
};

const techItems: MarqueeItem[] = [
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-400 text-3xl" />,
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    name: "Unity",
    icon: <SiUnity className="text-white text-3xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20"
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-cyan-400 text-3xl" />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-400/20"
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs className="text-white text-3xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20"
  },
  {
    name: "Blender",
    icon: <SiBlender className="text-orange-400 text-3xl" />,
    color: "text-orange-400",
    glow: "group-hover:shadow-orange-400/20"
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-400 text-3xl" />,
    color: "text-pink-400",
    glow: "group-hover:shadow-pink-400/20"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
    color: "text-green-400",
    glow: "group-hover:shadow-green-400/20"
  },
];

/** Logos from `public/workon` — appended after tech stack items */
const WORKON_FILES: { file: string; name: string }[] = [
  { file: 'ps.jpg.jpeg', name: 'Photoshop' },
  { file: 'ai.jpg.jpeg', name: 'Illustrator' },
  { file: 'id.jpg.jpeg', name: 'InDesign' },
  { file: 'ae.jpg.jpeg', name: 'After Effects' },
  { file: 'pr.jpg.jpeg', name: 'Premiere Pro' },
  { file: 'lr.jpg.jpeg', name: 'Lightroom' },
  { file: 'cdr.jpg.jpeg', name: 'CorelDRAW' },
];

const workonItems: MarqueeItem[] = WORKON_FILES.map(({ file, name }) => ({
  name,
  logoSrc: `/workon/${encodeURIComponent(file)}`,
  color: 'text-white',
  glow: 'group-hover:shadow-white/15',
}));

const marqueeItems: MarqueeItem[] = [...techItems, ...workonItems];

function MarqueeCard({
  item,
  iconTiltClass,
}: {
  item: MarqueeItem;
  iconTiltClass: string;
}) {
  return (
    <div
      className={cn(
        'group flex items-center gap-5 bg-white/[0.03] border border-white/10 px-10 py-5 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:scale-105 hover:border-white/20 min-w-[240px] shadow-2xl',
        item.glow
      )}
    >
      <div
        className={cn(
          'flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg',
          iconTiltClass
        )}
      >
        {item.logoSrc ? (
          <img
            src={item.logoSrc}
            alt={item.name}
            className="max-h-10 max-w-10 object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          item.icon
        )}
      </div>
      <span
        className={cn(
          'text-2xl font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity',
          item.color
        )}
      >
        {item.name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const forward = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  const reversedBase = [...marqueeItems].reverse();
  const backward = [...reversedBase, ...marqueeItems, ...marqueeItems];

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

        <div className="relative flex flex-col gap-12 pointer-events-auto">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden transform skew-y-1">
            <div className="flex animate-marquee gap-8 min-w-full">
              {forward.map((item, idx) => (
                <MarqueeCard
                  key={`f-${idx}-${item.name}-${item.logoSrc ?? 'icon'}`}
                  item={item}
                  iconTiltClass="transform group-hover:rotate-12 transition-transform duration-500"
                />
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden transform -skew-y-1">
            <div className="flex animate-marquee-reverse gap-8 min-w-full">
              {backward.map((item, idx) => (
                <MarqueeCard
                  key={`b-${idx}-${item.name}-${item.logoSrc ?? 'icon'}`}
                  item={item}
                  iconTiltClass="transform group-hover:-rotate-12 transition-transform duration-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
