const topRowPhrases = [
  "Designing brands that get noticed",
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
    <div className="relative z-10 w-full overflow-hidden border-y border-white/5 bg-black">
      {/* Top Row */}
      <div className="bg-[#FF8A3D] py-4 overflow-hidden relative">
        <div className="marquee-left flex items-center gap-12">
          {[...Array(2)].map((_, setIndex) => (
            topRowPhrases.map((phrase, idx) => (
              <div key={`${setIndex}-${idx}`} className="flex items-center gap-12">
                <span className="text-black font-bold text-lg uppercase tracking-wider whitespace-nowrap">
                  {phrase}
                </span>
                <span className="text-black/30 font-bold text-xl">▲</span>
              </div>
            ))
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bg-black py-4 overflow-hidden relative border-t border-white/10">
        <div className="marquee-right flex items-center gap-12">
          {[...Array(2)].map((_, setIndex) => (
            bottomRowPhrases.map((phrase, idx) => (
              <div key={`${setIndex}-${idx}`} className="flex items-center gap-12">
                <span className="text-white font-bold text-lg uppercase tracking-wider whitespace-nowrap">
                  {phrase}
                </span>
                <span className="text-white/30 font-bold text-xl">▲</span>
              </div>
            ))
          ))}
        </div>
      </div>

      <style>{`
        .marquee-left {
          animation: scroll-left 20s linear infinite;
          will-change: transform;
        }
        
        .marquee-right {
          animation: scroll-right 20s linear infinite;
          will-change: transform;
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Pause on hover */
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }

        /* Add to your global CSS */
.marquee-left, .marquee-right {
  transform: translateZ(0); /* Force GPU acceleration */
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Alternative: Use CSS custom properties for better performance */
@property --scroll-position {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
      `}</style>
    </div>
  );
}
