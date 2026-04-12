import React, { useLayoutEffect, useCallback } from 'react';
import { Mail, Palette, Image as ImageIcon, X } from 'lucide-react';
import gsap from 'gsap';

const MAILER: { file: string; title: string }[] = [
    { file: 'E-commerce---Emailer-03.jpg', title: 'E-commerce Email' },
    { file: 'Food Mailer-01.jpg', title: 'Food Mailer' },
    { file: 'The-Legends-of-Hanuman-Emailer-3.jpg', title: 'Legends of Hanuman' },
    { file: 'Thudarum-mailer.jpg', title: 'Thudarum' },
    { file: 'Tourist-Family-mailer.jpg', title: 'Tourist Family' },
    { file: 'WhatsApp Image 2025-05-19 at 8.54.56 PM.jpeg', title: 'Campaign mailer A' },
    { file: 'WhatsApp Image 2025-05-19 at 8.56.17 PM.jpeg', title: 'Campaign mailer B' },
];

const UI_CREATIVE: { file: string; title: string }[] = [
    { file: "AIU-Women's-champions.jpg", title: "AIU Women's Champions" },
    { file: "AIU-Women's-runner-up.jpg", title: "AIU Women's Runner-up" },
    { file: "AIU-Women's-Third-Place.jpg", title: "AIU Women's Third Place" },
    { file: "AIU-men's-champions.jpg", title: "AIU Men's Champions" },
    { file: "AIU-men's-runner-up.jpg", title: "AIU Men's Runner-up" },
    { file: "AIU-men's-Third-Place.jpg", title: "AIU Men's Third Place" },
];

function assetUrl(folder: 'mailer' | 'ui-creative', file: string) {
    return `/${folder}/${encodeURIComponent(file)}`;
}

const LOGO_DESIGN: { file: string; title: string }[] = [
    { file: 'apexform-01.png', title: 'Apexform' },
    { file: 'levelup gamers.png', title: 'Levelup Gamers' },
    { file: 'alif view white logo.png', title: 'Alif View' },
    { file: 'Arohi logo-01.png', title: 'Arohi Mehendi' },
    { file: 'Dimension-Brand-guideline-01.png', title: 'Dimension Music' },
    { file: 'DrasIce-Logo-OPTIONS-fme-(1)-(1).png', title: 'Dras Ice' },
    { file: 'klux--02.png', title: 'Klux' },
    { file: 'klux-2-01.jpg', title: 'Klux Candles' },
    { file: 'yash logo-02.jpg', title: 'Healthy Meals Station' },
];

function logoUrl(file: string) {
    return `/logo/${encodeURIComponent(file)}`;
}

/** Match Tailwind `duration-500` + small buffer so unmount runs after transitions finish */
const LIGHTBOX_TRANSITION_MS = 550;

export function CaseStudies() {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);
    const [lightboxVisible, setLightboxVisible] = React.useState(false);
    const lightboxWasOpenRef = React.useRef(false);

    const finishCloseLightbox = useCallback(() => {
        setLightbox(null);
        lightboxWasOpenRef.current = false;
    }, []);

    const openLightbox = useCallback((payload: { src: string; title: string }) => {
        setLightbox(payload);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxVisible(false);
    }, []);

    React.useEffect(() => {
        if (!lightbox) {
            setLightboxVisible(false);
            return;
        }
        setLightboxVisible(false);
        const id = requestAnimationFrame(() => {
            requestAnimationFrame(() => setLightboxVisible(true));
        });
        return () => cancelAnimationFrame(id);
    }, [lightbox]);

    React.useEffect(() => {
        if (!lightbox) return;
        if (lightboxVisible) {
            lightboxWasOpenRef.current = true;
            return;
        }
        if (!lightboxWasOpenRef.current) return;
        const t = window.setTimeout(finishCloseLightbox, LIGHTBOX_TRANSITION_MS);
        return () => clearTimeout(t);
    }, [lightbox, lightboxVisible, finishCloseLightbox]);

    React.useEffect(() => {
        if (!lightbox) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [lightbox, closeLightbox]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.case-title', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
            });

            gsap.from('.project-group', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power2.out',
            });

            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 55%',
                },
                y: 36,
                opacity: 0,
                duration: 0.75,
                stagger: 0.06,
                ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div
            id="projects"
            className="py-24 bg-black relative overflow-hidden section-cases border-t border-white/5"
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 case-title">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 uppercase tracking-tight">Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Email campaigns and UI creative — selected work from our mailer and design folders.
                    </p>
                </div>

                <div className="space-y-20">
                    <section className="project-group">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">OTT Platform and Email Marketing</h3>
                                <p className="text-sm text-gray-500">Campaign and promotional email designs</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10" />
                            <div className="project-slider group/slider py-8 md:py-10">
                                <div className="project-track project-track-left">
                                    {[...MAILER, ...MAILER].map(({ file, title }, idx) => {
                                        const src = assetUrl('mailer', file);
                                        return (
                                            <button
                                                key={`${file}-${idx}`}
                                                type="button"
                                                onClick={() => openLightbox({ src, title })}
                                                className="project-card mx-3 w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 group text-left rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                                            >
                                                <div className="relative aspect-4/3 overflow-hidden bg-white/5">
                                                    <img
                                                        src={src}
                                                        alt={title}
                                                        className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-300/90 mb-1 block">
                                                            Mailer
                                                        </span>
                                                        <span className="text-white font-semibold leading-snug line-clamp-2">
                                                            {title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-group">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                <Palette size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Social Media</h3>
                                <p className="text-sm text-gray-500">Sports league graphics and visual design</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black to-transparent z-10" />
                            <div className="project-slider group/slider py-6">
                                <div className="project-track project-track-right">
                                    {[...UI_CREATIVE, ...UI_CREATIVE].map(({ file, title }, idx) => {
                                        const src = assetUrl('ui-creative', file);
                                        return (
                                            <button
                                                key={`${file}-${idx}`}
                                                type="button"
                                                onClick={() => openLightbox({ src, title })}
                                                className="project-card mx-3 w-[260px] sm:w-[300px] lg:w-[340px] shrink-0 group text-left rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60"
                                            >
                                                <div className="relative aspect-4/3 overflow-hidden bg-white/5">
                                                    <img
                                                        src={src}
                                                        alt={title}
                                                        className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-300/90 mb-1 block">
                                                            UI creative
                                                        </span>
                                                        <span className="text-white font-semibold leading-snug line-clamp-2">
                                                            {title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-group">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <ImageIcon size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Logo Design</h3>
                                <p className="text-sm text-gray-500">Brand identities and logo explorations</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black to-transparent z-10" />
                            <div className="project-slider group/slider py-6">
                                <div className="project-track project-track-left">
                                    {[...LOGO_DESIGN, ...LOGO_DESIGN].map(({ file, title }, idx) => {
                                        const src = logoUrl(file);
                                        return (
                                            <button
                                                key={`${file}-${idx}`}
                                                type="button"
                                                onClick={() => openLightbox({ src, title })}
                                                className="project-card mx-3 w-[220px] sm:w-[260px] lg:w-[280px] shrink-0 group text-left rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
                                            >
                                                <div className="relative aspect-4/3 overflow-hidden bg-zinc-800/50 flex items-center justify-center p-6 ring-1 ring-inset ring-white/10">
                                                    <img
                                                        src={src}
                                                        alt={title}
                                                        className="max-h-full max-w-full object-contain transform group-hover:scale-[1.03] transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent opacity-85 group-hover:opacity-90 transition-opacity pointer-events-none" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300/90 mb-1 block">
                                                            Logo
                                                        </span>
                                                        <span className="text-white font-semibold leading-snug line-clamp-1">
                                                            {title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <style>{`
                .project-track {
                    display: flex;
                    align-items: stretch;
                    width: max-content;
                    will-change: transform;
                }

                /* Infinite marquee by translating half the duplicated content width */
                .project-track-left {
                    animation: project-scroll-left 28s linear infinite;
                }
                .project-track-right {
                    animation: project-scroll-right 32s linear infinite;
                }

                /* Pause when user hovers any card inside */
                .project-slider:hover .project-track-left,
                .project-slider:hover .project-track-right,
                .project-card:hover ~ .project-track-left,
                .project-card:hover ~ .project-track-right {
                    animation-play-state: paused;
                }

                @keyframes project-scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes project-scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .project-track-left,
                    .project-track-right {
                        animation: none;
                    }
                }
            `}</style>

            {lightbox && (
                <div
                    className={`fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm transition-opacity duration-500 ease-out motion-reduce:duration-150 motion-reduce:ease-linear ${lightboxVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.title}
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className={`absolute top-4 right-4 z-101 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 ${lightboxVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        aria-label="Close"
                    >
                        <X size={22} />
                    </button>
                    <div
                        className={`relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center gap-4 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-150 motion-reduce:ease-linear ${lightboxVisible
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-[0.97] translate-y-3 motion-reduce:scale-100 motion-reduce:translate-y-0'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={lightbox.src}
                            alt={lightbox.title}
                            className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                        <p className="text-white font-medium text-center text-sm sm:text-base">{lightbox.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
