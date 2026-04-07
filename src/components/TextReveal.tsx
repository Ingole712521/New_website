import React, { useLayoutEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function TextReveal() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const introRef = React.useRef<HTMLParagraphElement>(null);
  const whoRef = React.useRef<HTMLParagraphElement>(null);
  const toolsRef = React.useRef<HTMLDivElement>(null);

  const content = useMemo(
    () => ({
      intro:
        'Welcome to R Square Visuals, where creative vision meets technical precision. Founded by Rupesh and Ravi, our agency was built on the idea of providing a seamless, all-in-one platform for high-end design and marketing services.',
      whoTitle: 'Who We Are',
      whoBody:
        'We are a team of dedicated creators specializing in transforming ideas into visual impact. By combining our story with our specific mission, we help brands stand out in a crowded market.',
      arsenalTitle: 'Our Creative Arsenal',
      arsenalLead: 'We leverage industry-leading tools to deliver professional results:',
      tools: [
        { label: 'Adobe Illustrator', group: 'Static Design' },
        { label: 'Photoshop', group: 'Static Design' },
        { label: 'CorelDRAW', group: 'Static Design' },
        { label: 'InDesign', group: 'Static Design' },
        { label: 'Premiere Pro', group: 'Motion & Video' },
        { label: 'After Effects', group: 'Motion & Video' },
      ],
    }),
    []
  );

  const introWords = useMemo(() => content.intro.split(' '), [content.intro]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const introWordsEls = introRef.current?.querySelectorAll('.reveal-word');
      const whoEls = whoRef.current ? [whoRef.current] : [];
      const toolChips = toolsRef.current?.querySelectorAll('.tool-chip');

      if (introWordsEls?.length) {
        gsap.fromTo(
          introWordsEls,
          { opacity: 0, filter: 'blur(10px)', y: 18 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            stagger: 0.06,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 55%',
              end: 'top 15%',
              scrub: 1,
            },
          }
        );
      }

      if (whoEls.length) {
        gsap.fromTo(
          whoEls,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: whoRef.current,
              start: 'top 75%',
              end: 'top 45%',
              scrub: 1,
            },
          }
        );
      }

      if (toolChips?.length) {
        gsap.fromTo(
          toolChips,
          { opacity: 0, y: 10, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.05,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: toolsRef.current,
              start: 'top 80%',
              end: 'top 45%',
              scrub: 1,
            },
          }
        );
      }

      // Slide the "What we Provide" section on top of this pinned block
      const servicesSection = document.querySelector<HTMLElement>('#services');
      if (servicesSection) {
        gsap.set(servicesSection, { yPercent: 110, willChange: 'transform' });
        gsap.to(servicesSection, {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=70%',
            scrub: true,
          },
        });
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=70%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-0 bg-black overflow-hidden border-t border-white/5"
      aria-label="About us"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 left-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0)_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              ABOUT US
            </div>

            <h2 className="text-balance text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
              Design-forward stories. Precision-built visuals.
            </h2>

            <p
              ref={introRef}
              className="mt-6 text-pretty text-lg md:text-xl text-white/80 leading-relaxed"
            >
              {introWords.map((word, i) => (
                <span key={i} className="reveal-word inline-block mr-[0.25em] whitespace-nowrap">
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-white tracking-tight">{content.whoTitle}</h3>
              <p ref={whoRef} className="mt-3 text-white/75 leading-relaxed">
                {content.whoBody}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-white tracking-tight">{content.arsenalTitle}</h3>
              <p className="mt-3 text-white/75 leading-relaxed">{content.arsenalLead}</p>

              <div ref={toolsRef} className="mt-5 flex flex-wrap gap-2">
                {content.tools.map((t) => (
                  <span
                    key={`${t.group}-${t.label}`}
                    className="tool-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-white/85"
                  >
                    <span className="text-[11px] text-white/50">{t.group}</span>
                    <span className="h-3 w-px bg-white/10" />
                    <span className="font-medium">{t.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
