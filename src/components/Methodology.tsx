import { Megaphone, Monitor, PenTool, ShieldCheck } from 'lucide-react';

export function Methodology() {
  const services = [
    {
      title: 'Brand Development',
      icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
      items: ['Brand logo', 'Brand Strategy', 'Brand manual', 'Market research'],
      accent: 'from-orange-500/25 via-orange-500/10 to-transparent',
    },
    {
      title: 'Print Branding',
      icon: <PenTool className="w-5 h-5 text-blue-400" />,
      items: [
        'Outdoor branding',
        'Corporate Branding',
        'Magazine & newspaper advertisement',
        'Retail branding',
        'Packaging',
      ],
      accent: 'from-blue-500/25 via-blue-500/10 to-transparent',
    },
    {
      title: 'Digital Identity',
      icon: <Monitor className="w-5 h-5 text-purple-400" />,
      items: ['Social media handling'],
      accent: 'from-purple-500/25 via-purple-500/10 to-transparent',
    },
    {
      title: 'Communication strategy',
      icon: <Megaphone className="w-5 h-5 text-pink-400" />,
      items: ['Copywriting', 'Content writing'],
      accent: 'from-pink-500/25 via-pink-500/10 to-transparent',
    },
  ] as const;

  return (
    <section
      id="services"
      className="relative z-20 mt-0 py-24 bg-brand-dark overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute top-24 right-0 h-[380px] w-[380px] rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-200/90 text-xs font-semibold tracking-widest uppercase">
            Our capabilities
          </p>
          <h2 className="mt-5 text-3xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            Our Key services{' '}
            <span className="text-transparent bg-clip-text bg-size-[180%_180%] bg-position-[40%_45%] bg-[linear-gradient(125deg,#60a5fa_0%,#a78bfa_45%,#fb7185_100%)]">
              
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to build a consistent brand—online and offline.
          </p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/2 overflow-hidden shadow-2xl shadow-black/35">
          {/* Cross border lines */}
          <div className="pointer-events-none absolute inset-0">
            <div className="hidden md:block absolute inset-y-8 left-1/2 w-px bg-white/10" />
            <div className="hidden md:block absolute inset-x-8 top-1/2 h-px bg-white/10" />
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
          </div>

          <div className="grid md:grid-cols-2">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group relative p-8 sm:p-10 border-b border-white/10 md:border-b-0 md:nth-1:border-r md:nth-3:border-r md:nth-1:border-b md:nth-2:border-b transition-colors hover:bg-white/3"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${svc.accent} opacity-70`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(60%_50%_at_30%_0%,rgba(255,255,255,0.10),transparent_55%)]" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/6 border border-white/12 flex items-center justify-center shadow-lg shadow-black/30 ring-1 ring-white/10 group-hover:scale-[1.03] group-hover:border-white/20 transition-all">
                      {svc.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 text-gray-200/90">
                    {svc.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white/35 shrink-0 ring-2 ring-white/10" />
                        <span className="leading-relaxed tracking-[0.01em]">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
import { useState } from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { Palette, PenTool, Share2, Monitor, Globe, Type } from 'lucide-react';
import { CobeGlobe } from './ui/cobe-globe';

export function Methodology() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Brand Development",
      description: "We help businesses grow by creating brand logos, building clear brand strategies, developing brand manuals, and conducting market research to understand their target audience.",
      header: <BrandSkeleton />,
      className: "md:col-span-2",
      icon: <Palette className="w-4 h-4 text-orange-500" />,
    },
    {
      title: "Print Branding",
      description: "We provide print branding services, including outdoor branding, corporate branding, magazine and newspaper advertisements, retail branding, and packaging design to help your business stand out everywhere.",
      header: <PrintSkeleton />,
      className: "md:col-span-1",
      icon: <PenTool className="w-4 h-4 text-blue-500" />,
    },
    {
      title: "Digital Identity",
      description: "We build your digital identity by managing your social media platforms and helping your brand connect with the right audience online.",
      header: <DigitalSkeleton />,
      className: "md:col-span-1",
      icon: <Share2 className="w-4 h-4 text-purple-500" />,
    },
    {
      title: "3D Visualization",
      description: "We create 3D visualizations for products, interiors, and architecture, helping you showcase your brand in a realistic and engaging way.",
      header: <GlobeHeader />,
      className: "md:col-span-1",
      icon: <Globe className="w-4 h-4 text-cyan-500" />,
    },
    {
      title: "Communication Strategy",
      description: "We create strong communication strategies, including copywriting and content writing, to deliver clear and impactful messages for your brand.",
      header: <CommunicationSkeleton />,
      className: "md:col-span-1",
      icon: <Monitor className="w-4 h-4 text-pink-500" />,
    },
    {
      title: "Content Writing",
      description: "We write content that people can connect with. We provide crystal clear messaging in best way possible.",
      header: <ContentSkeleton />,
      className: "md:col-span-3",
      icon: <Type className="w-4 h-4 text-green-500" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative z-20 mt-0 py-24 bg-[#0a0a0a] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            What we Provide
          </h2>
          <p className="text-gray-400 text-lg">
            Empowering your brand through strategic design and innovative visualization.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`transition-all duration-300 ${item.className} ${
                hoveredIndex !== null && hoveredIndex !== i ? 'blur-[2px] opacity-30 grayscale scale-[0.98]' : ''
              }`}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                className="grayscale transition-all duration-700 hover:grayscale-0 h-full"
                icon={item.icon}
              />
            </div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const BrandSkeleton = () => null;
const PrintSkeleton = () => null;
const DigitalSkeleton = () => null;
const GlobeHeader = () => null;
const CommunicationSkeleton = () => null;
const ContentSkeleton = () => null;
*/
