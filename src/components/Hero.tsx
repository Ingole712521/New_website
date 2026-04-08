import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { BackgroundBeams } from './background';

/** Served from `public/homepage/homepage1.jpeg` */
const HERO_BG = encodeURI('/homepage/homepage1.jpeg');

export function Hero() {
  const contentRef = React.useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      className="relative z-0 isolate min-h-[calc(100svh-5rem)] pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden section-hero bg-black"
    >
      {/* Full-bleed hero background image (behind content). */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat [background-image:var(--hero-bg)] bg-position-[85%_10%] sm:bg-position-[60%_12%] lg:bg-position-[62%_14%]"
          style={
            {
              '--hero-bg': `url("${HERO_BG}")`,
              filter: 'saturate(1.05) contrast(1.05)',
            } as React.CSSProperties
          }
          aria-hidden
        />

        <BackgroundBeams className="opacity-25" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div ref={contentRef} className="lg:col-span-7">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-gray-200 text-xs font-semibold tracking-wide uppercase mb-6 border border-white/10">
              Creative studio • Marketing partner
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 mt-17">
              Creative Design{' '}
              <span className="text-transparent bg-clip-text bg-size-[180%_180%] bg-position-[40%_45%] bg-[linear-gradient(125deg,#1a0404_0%,#3d0c0c_22%,#5c1212_42%,#8b1818_62%,#b91f1f_82%,#e03030_100%)]">
                Smart Marketing
              </span>{' '}
              Real Impact
            </h1>
            <p className="text-lg text-gray-300/90 mb-10 max-w-2xl leading-relaxed mt-20">
              We help brands across every industry grow through thoughtful design and results-driven marketing.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-black/30 hover:-translate-y-1 inline-flex items-center justify-center group"
              >
                Contact us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center hover:-translate-y-1"
              >
                View projects
              </a>
            </div> */}
          </div>


        </div>
      </div>
    </div>
  );
}
