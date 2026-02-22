import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

export function Stats() {
    const sectionRef = React.useRef(null);
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="py-20 border-t border-white/5 bg-black section-stats" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Active Leads", value: "500+", icon: "👥" },
                        { label: "Client Pipeline Generated", value: "$1.2B", icon: "💰" },
                        { label: "Client Retention", value: "94%", icon: "🤝" },
                        { label: "Average ROI Multiplier", value: "12X", icon: "📈" },
                    ].map((stat, idx) => (
                        <div key={idx} className="stat-item group hover:scale-105 transition-transform duration-300">
                             <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-xl mb-4 text-blue-400 font-bold group-hover:bg-blue-500/20 transition-colors">{stat.icon}</div>
                            <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</h4>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
