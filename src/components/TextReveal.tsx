import React, { useLayoutEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ABOUT_VIDEO = '/video/video.mp4';

function fitVideoBox(panelW: number, panelH: number, videoW: number, videoH: number) {
  if (panelW <= 0 || panelH <= 0 || videoW <= 0 || videoH <= 0) {
    return { w: 0, h: 0 };
  }
  const panelR = panelW / panelH;
  const videoR = videoW / videoH;
  if (panelR > videoR) {
    const h = panelH;
    return { w: h * videoR, h };
  }
  const w = panelW;
  return { w, h: w / videoR };
}

export function TextReveal() {
  const containerRef = React.useRef<HTMLElement>(null);
  const leftPanelRef = React.useRef<HTMLDivElement>(null);
  const rightPanelRef = React.useRef<HTMLDivElement>(null);
  const whoRef = React.useRef<HTMLParagraphElement>(null);
  const [videoIntrinsic, setVideoIntrinsic] = useState({ w: 16, h: 9 });
  const [videoFit, setVideoFit] = useState({ w: 0, h: 0 });

  const content = useMemo(
    () => ({
      whoTitle: 'Who We Are',
      whoBody:
        'We are a team of dedicated creators specializing in transforming ideas into visual impact. By combining our story with our specific mission, we help brands stand out in a crowded market.',
    }),
    []
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const leftPanel = leftPanelRef.current;
      const rightPanel = rightPanelRef.current;
      const whoEls = whoRef.current ? [whoRef.current] : [];

      if (leftPanel) {
        gsap.fromTo(
          leftPanel,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          },
        );
      }

      if (rightPanel) {
        gsap.fromTo(
          rightPanel,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          },
        );
      }

      if (whoEls.length) {
        gsap.fromTo(
          whoEls,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: whoRef.current,
              start: 'top 80%',
            },
          },
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;

    const update = () => {
      const r = panel.getBoundingClientRect();
      setVideoFit(fitVideoBox(r.width, r.height, videoIntrinsic.w, videoIntrinsic.h));
    };

    const ro = new ResizeObserver(update);
    ro.observe(panel);
    update();

    return () => ro.disconnect();
  }, [videoIntrinsic]);

  return (
    <section
      ref={containerRef}
      className="relative z-0 overflow-hidden border-t border-white/5  py-16 sm:py-20 lg:py-24"
      aria-label="About us"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10  ">
          <div className="grid lg:grid-cols-2">
            <div
              ref={leftPanelRef}
              className=" px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
                Design-forward stories
                <span className="block text-[#f2f2f2]">Precision-built visuals</span>
              </h2>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-white">{content.whoTitle}</h3>
                <p ref={whoRef} className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {content.whoBody}
                </p>
              </div>

            </div>

            <div
              ref={rightPanelRef}
              className="relative flex min-h-[360px] items-center justify-center overflow-hidden  sm:min-h-[420px] lg:min-h-full"
            >
              <div
                className="relative max-h-full max-w-full shrink-0"
                style={
                  videoFit.w > 0 && videoFit.h > 0
                    ? { width: `${videoFit.w}px`, height: `${videoFit.h}px` }
                    : {
                        width: '100%',
                        maxHeight: '100%',
                        aspectRatio: `${videoIntrinsic.w} / ${videoIntrinsic.h}`,
                      }
                }
              >
                <video
                  src={ABOUT_VIDEO}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    if (v.videoWidth > 0 && v.videoHeight > 0) {
                      setVideoIntrinsic({ w: v.videoWidth, h: v.videoHeight });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
