import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function TextReveal() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const text = "The creative transformation of the world is real and we are thriving in this complex yet competitive environment. Our creative brains and innovative eyes are the assets that help a brand knock on more doors and grab more engagement.";
  
  // Split text into words for a smoother "one by one" reveal
  const words = text.split(" ");

  useLayoutEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      const wordsElements = textRef.current?.querySelectorAll('.reveal-word');
      if (!wordsElements) return;
      
      gsap.fromTo(wordsElements, 
        { 
          opacity: 0, 
          filter: "blur(10px)",
          y: 20,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 35%",
            end: "top 5%",
            scrub: 1,
          }
        }
      );

      // Separate pinning logic for stability - significantly reduced duration
      // pinSpacing: false allows the next section to scroll OVER this one
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=50%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-0 pt-32 pb-0 bg-black overflow-hidden flex items-center justify-center border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-medium text-white text-center leading-[1.3] md:leading-[1.4] tracking-tight">
          {words.map((word, i) => (
            <span key={i} className="reveal-word inline-block mr-[0.25em] whitespace-nowrap">
              {word}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
