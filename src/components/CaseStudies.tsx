import React, { useLayoutEffect, useCallback } from 'react';
import { Mail, Palette, X } from 'lucide-react';
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

export function CaseStudies() {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);

    const closeLightbox = useCallback(() => setLightbox(null), []);

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
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Projects</h2>
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
                                <h3 className="text-xl font-bold text-white">Email & mailers</h3>
                                <p className="text-sm text-gray-500">Campaign and promotional email designs</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MAILER.map(({ file, title }) => {
                                const src = assetUrl('mailer', file);
                                return (
                                    <button
                                        key={file}
                                        type="button"
                                        onClick={() => setLightbox({ src, title })}
                                        className="project-card group text-left rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                                            <img
                                                src={src}
                                                alt={title}
                                                className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
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
                    </section>

                    <section className="project-group">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                <Palette size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">UI & creative</h3>
                                <p className="text-sm text-gray-500">Sports league graphics and visual design</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {UI_CREATIVE.map(({ file, title }) => {
                                const src = assetUrl('ui-creative', file);
                                return (
                                    <button
                                        key={file}
                                        type="button"
                                        onClick={() => setLightbox({ src, title })}
                                        className="project-card group text-left rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                                            <img
                                                src={src}
                                                alt={title}
                                                className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
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
                    </section>
                </div>
            </div>

            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.title}
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-[101] p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Close"
                    >
                        <X size={22} />
                    </button>
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center gap-4"
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
