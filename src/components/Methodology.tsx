import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { Globe3D } from './ui/3d-globe';
import { Palette, PenTool, Share2, Monitor, Globe, Type } from 'lucide-react';

const markers = [
  { lat: 12.9716, lng: 77.5946, src: "", label: "Bangalore" },
  { lat: 23.0225, lng: 72.5714, src: "", label: "Ahmedabad" },
  { lat: 40.7128, lng: -74.006, src: "", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "", label: "London" },
];

export function Methodology() {
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
          <BentoGridItem
            title="Brand Development"
            description="Brand development is the process of strengthening your brand identity and helping you attain an edge over other competitors in the market."
            header={<BrandSkeleton />}
            className="md:col-span-2 grayscale transition-all duration-700 hover:grayscale-0"
            icon={<Palette className="w-4 h-4 text-orange-500" />}
          />
          
          <BentoGridItem
            title="Print Identity"
            description="We create the print identity of your brand through colors, fonts, and design language that clearly establish a recall memory."
            header={<PrintSkeleton />}
            className="md:col-span-1 grayscale transition-all duration-700 hover:grayscale-0"
            icon={<PenTool className="w-4 h-4 text-blue-500" />}
          />

          <BentoGridItem
            title="Digital Identity"
            description="We turbocharge your brand and elevate your digital presence with our digital communication tools."
            header={<DigitalSkeleton />}
            className="md:col-span-1 grayscale transition-all duration-700 hover:grayscale-0"
            icon={<Share2 className="w-4 h-4 text-purple-500" />}
          />

          <BentoGridItem
            title="3D Visualization"
            description="Every business has a story to tell and we very well narrate your story to the world and bring your brand to the forefront."
            header={<GlobeHeader />}
            className="md:col-span-1 grayscale transition-all duration-700 hover:grayscale-0"
            icon={<Globe className="w-4 h-4 text-cyan-500" />}
          />

          <BentoGridItem
            title="Communication Strategy"
            description="Content is king and we strongly believe in communicating your brand through words that express who you are and what makes you different."
            header={<CommunicationSkeleton />}
            className="md:col-span-1 grayscale transition-all duration-700 hover:grayscale-0"
            icon={<Monitor className="w-4 h-4 text-pink-500" />}
          />

          <BentoGridItem
            title="Content Writing"
            description="We write content that people can connect with. We provide crystal clear messaging in best way possible."
            header={<ContentSkeleton />}
            className="md:col-span-3 grayscale transition-all duration-700 hover:grayscale-0"
            icon={<Type className="w-4 h-4 text-green-500" />}
          />
        </BentoGrid>
      </div>
    </section>
  );
}

const BrandSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50 p-8 overflow-hidden relative group/skeleton">
    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full group-hover/skeleton:bg-orange-500/20 transition-colors duration-500" />
    <div className="relative z-10 flex flex-col justify-center h-full">
      <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center transform group-hover/skeleton:scale-110 group-hover/skeleton:rotate-3 transition-transform duration-500">
              <Palette className="w-6 h-6 text-orange-400" />
          </div>
          <div className="h-0.5 w-16 bg-orange-500/20 transform origin-left group-hover/skeleton:scale-x-125 transition-transform duration-500" />
          <div className="w-24 h-8 rounded bg-white/5 border border-white/10" />
      </div>
      <div className="space-y-2">
          <div className="h-2 w-3/4 bg-white/5 rounded overflow-hidden">
              <div className="h-full bg-orange-500/10 w-0 group-hover/skeleton:w-full transition-all duration-1000" />
          </div>
          <div className="h-2 w-1/2 bg-white/5 rounded overflow-hidden">
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
         {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-blue-500/40 group-hover/skeleton:scale-150 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />)}
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
