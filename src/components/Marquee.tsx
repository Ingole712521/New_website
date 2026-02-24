
const topRowPhrases = [
  "	Designing brands that get noticed",
  "Where creativity meets strategy",
  "Ideas crafted to grow your brand",
  "Design that connects, marketing that converts",
  "Turning visions into visual impact"
];

const bottomRowPhrases = [
  "Creative solutions for modern brands",
  "Smart design for bold businesses",
  "Building brands people remember",
  "From concept to conversion",
  "Shaping brands with purpose and style",



];

export function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y border-white/5">
      <div className="bg-[#FF8A3D] py-4 flex whitespace-nowrap overflow-hidden relative group">
        <div className="animate-marquee-left flex items-center space-x-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              {topRowPhrases.map((phrase, idx) => (
                <div key={idx} className="flex items-center space-x-12">
                  <span className="text-black font-bold text-lg uppercase tracking-wider">{phrase}</span>
                  <span className="text-black/30 font-bold text-xl">▲</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black py-4 flex whitespace-nowrap overflow-hidden relative group border-t border-white/10">
        <div className="animate-marquee-right flex items-center space-x-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              {bottomRowPhrases.map((phrase, idx) => (
                <div key={idx} className="flex items-center space-x-12">
                  <span className="text-white font-bold text-lg uppercase tracking-wider">{phrase}</span>
                  <span className="text-white/30 font-bold text-xl">▲</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
