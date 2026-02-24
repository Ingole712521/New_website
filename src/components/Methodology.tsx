import { useState } from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { Globe3D } from './ui/3d-globe';
import { Palette, PenTool, Share2, Monitor, Globe, Type } from 'lucide-react';

const markers = [
  { lat: 12.9716, lng: 77.5946, src: "", label: "Bangalore" },
  { lat: 23.0225, lng: 72.5714, src: "", label: "Ahmedabad" },
  { lat: 40.7128, lng: -74.006, src: "", label: "New York " },
  { lat: 51.5074, lng: -0.1278, src: "", label: "London" },
];

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
    <section className="relative z-10 mt-[20vh] py-24 bg-[#0a0a0a] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
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
              className={`transition-all duration-300 ${item.className} ${hoveredIndex !== null && hoveredIndex !== i
                ? "blur-[2px] opacity-30 grayscale scale-[0.98]"
                : ""
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

const BrandSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50 p-8 overflow-hidden relative group/skeleton">
    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full group-hover/skeleton:bg-orange-500/20 transition-colors duration-500" />
    <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center transform group-hover/skeleton:scale-110 group-hover/skeleton:rotate-3 transition-transform duration-500">
          <Palette className="w-6 h-6 text-orange-400" />
        </div>
        <div className="h-0.5 w-16 bg-orange-500/20 transform origin-left group-hover/skeleton:scale-x-125 transition-transform duration-500" />
        <div className="w-24 h-8 rounded bg-white/5 border border-white/10" />
      </div>
      <div className="space-y-2 w-full max-w-[200px]">
        <div className="h-2 w-full bg-white/5 rounded overflow-hidden">
          <div className="h-full bg-orange-500/10 w-0 group-hover/skeleton:w-full transition-all duration-1000" />
        </div>
        <div className="h-2 w-[70%] bg-white/5 rounded overflow-hidden mx-auto">
          <div className="h-full bg-orange-500/10 w-0 group-hover/skeleton:w-full transition-all duration-1000 delay-100" />
        </div>
      </div>
    </div>
  </div>
);

const PrintSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50 p-4 flex-col justify-center items-center relative overflow-hidden group/skeleton">
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm -rotate-6 group-hover/skeleton:rotate-0 group-hover/skeleton:scale-110 transition-all duration-500">
      <PenTool className="w-10 h-10 text-blue-400" />
    </div>
    <div className="mt-4 flex gap-1">
      {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-blue-500/40 group-hover/skeleton:scale-150 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />)}
    </div>
  </div>
);

const DigitalSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50 p-4 flex-col justify-center items-center group/skeleton">
    <div className="relative scale-90 group-hover/skeleton:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover/skeleton:bg-purple-500/40 transition-colors" />
      <Share2 className="w-12 h-12 text-purple-400 relative z-10" />
    </div>
  </div>
);

const GlobeHeader = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#030303] overflow-hidden relative group/skeleton">
    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
    <div className="w-full h-full transform group-hover/skeleton:scale-105 transition-transform duration-1000">
      <Globe3D
        markers={markers}
        config={{
          atmosphereColor: "#4da6ff",
          atmosphereIntensity: 15,
          autoRotateSpeed: 0.1,
        }}
      />
    </div>
  </div>
);

const CommunicationSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50 p-4 flex-col justify-center items-center group/skeleton">
    <div className="w-full flex flex-col gap-3 px-4">
      <div className="h-2 w-[90%] bg-pink-500/20 rounded overflow-hidden">
        <div className="h-full bg-pink-500/40 w-0 group-hover/skeleton:w-full transition-all duration-700" />
      </div>
      <div className="h-2 w-[70%] bg-pink-500/20 rounded overflow-hidden">
        <div className="h-full bg-pink-500/40 w-0 group-hover/skeleton:w-full transition-all duration-700 delay-100" />
      </div>
      <div className="h-2 w-[80%] bg-pink-500/20 rounded overflow-hidden">
        <div className="h-full bg-pink-500/40 w-0 group-hover/skeleton:w-full transition-all duration-700 delay-200" />
      </div>
    </div>
  </div>
);

const ContentSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50 p-8 flex-col justify-center relative overflow-hidden group/skeleton">
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 group-hover/skeleton:bg-green-500/10 transition-colors duration-1000" />
    <div className="flex items-start gap-6 h-full">
      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex-shrink-0 transform group-hover/skeleton:scale-110 group-hover/skeleton:rotate-3 transition-all duration-500">
        <Type className="w-10 h-10 text-green-400" />
      </div>
      <div className="mt-2 space-y-4 w-full max-w-lg">
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-green-500/20 w-3/4 group-hover/skeleton:w-full transition-all duration-1000" />
        </div>
        <div className="h-3 w-[80%] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-green-500/20 w-1/2 group-hover/skeleton:w-[85%] transition-all duration-1000 delay-100" />
        </div>
        <div className="h-3 w-[90%] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-green-500/20 w-2/3 group-hover/skeleton:w-[95%] transition-all duration-1000 delay-200" />
        </div>
      </div>
    </div>
  </div>
);
