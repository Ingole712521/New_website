import React, { useLayoutEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import gsap from 'gsap';

export function CTA() {
    const sectionRef = React.useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cta-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                scale: 0.95,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="py-20 px-4 section-cta bg-black border-t border-white/5" ref={sectionRef}>
            <div className="max-w-6xl mx-auto relative cta-content">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-20 transform scale-90 animate-pulse"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-12 lg:p-24 text-center shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-shadow duration-500">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"></div>
                     <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 rounded-full mb-8 text-blue-400 animate-bounce" style={{animationDuration: '3s'}}>
                        <TrendingUp size={32} />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to Engineer Your Next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-black italic">Infection Point?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Join the elite 1% of tech giants that rely on our data-first strategies to scale with zero-risk performance loads.
                    </p>
 
                    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                         <input 
                            type="text" 
                            placeholder="Enter company e-mail" 
                            className="flex-grow px-6 py-4 rounded-xl border border-white/10 outline-none focus:ring-2 focus:ring-blue-500/20 bg-white/5 text-white placeholder-gray-500 transition-all focus:scale-105"
                         />
                         <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 whitespace-nowrap hover:shadow-blue-500/50 hover:scale-105 transition-all">
                            Analyze My Growth
                         </button>
                    </div>
                     <p className="mt-8 text-xs text-gray-400">No commitment required. 14-day free analysis for qualifying B2B SaaS.</p>
                </div>
            </div>
        </div>
    )
}
