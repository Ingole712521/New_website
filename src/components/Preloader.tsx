import React from 'react';
import gsap from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.delayedCall(0.5, onComplete);
        }
      });

      const proxy = { val: 0 };
      tl.to(proxy, {
        val: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const rounded = Math.floor(proxy.val);
          setPercentage(rounded);
        }
      });

      tl.to(containerRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      }, "+=0.3");
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-10 flex items-center space-x-2">
        <div className="w-2 h-2 bg-pink-500"></div>
        <span className="text-white text-[10px] uppercase tracking-[0.2em] font-medium">Delivering firsts</span>
      </div>

      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[30vw] md:text-[40vw] font-black text-transparent text-stroke-thick opacity-60 select-none">
            {percentage}%
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-white z-10 tracking-tighter">
          Hello
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 overflow-hidden">
        <div 
          className="h-full bg-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
