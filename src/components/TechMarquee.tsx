import {

  SiUnity,
  SiFlutter,
  SiAdobe,
  SiThreedotjs,
  SiBlender,
  SiFigma,
  SiMongodb
} from 'react-icons/si';
import { cn } from '../lib/utils';
import { VscVscode } from 'react-icons/vsc';

const techItems = [
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
    name: "Adobe",
    icon: <SiAdobe className="text-red-500 text-3xl" />,
    color: "text-red-500",
    glow: "group-hover:shadow-red-500/20"
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

export function TechMarquee() {
  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
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
            {[...techItems, ...techItems, ...techItems].map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "group flex items-center gap-5 bg-white/[0.03] border border-white/10 px-10 py-5 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:scale-105 hover:border-white/20 min-w-[240px] cursor-help shadow-2xl",
                  item.glow
                )}
              >
                <div className="w-10 h-10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <span className={cn("text-2xl font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity", item.color)}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden transform -skew-y-1">
          <div className="flex animate-marquee-reverse gap-8 min-w-full">
            {[...[...techItems].reverse(), ...techItems, ...techItems].map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "group flex items-center gap-5 bg-white/[0.03] border border-white/10 px-10 py-5 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:scale-105 hover:border-white/20 min-w-[240px] cursor-help shadow-2xl",
                  item.glow
                )}
              >
                <div className="w-10 h-10 flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <span className={cn("text-2xl font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity", item.color)}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}