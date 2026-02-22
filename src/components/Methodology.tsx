import React, { useLayoutEffect } from 'react';
import { BarChart3, Zap, Globe, ShieldCheck, Database, TrendingUp, ChevronDown, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Methodology() {
    const containerRef = React.useRef(null);
    const titleRef = React.useRef(null);
    // Add specific ref for the grid container
    const gridRef = React.useRef(null); 
    
    const methods = [
        { icon: <BarChart3 className="w-6 h-6 text-blue-600" />, title: "Market Analytics", desc: "Deep-dive data analysis to uncover hidden market opportunities." },
        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Technical Narrative Engineering", desc: "Compelling storytelling that bridges technical specs with business value." },
        { icon: <Globe className="w-6 h-6 text-green-500" />, title: "Growth Infrastructure", desc: "Building scalable digital ecosystems for sustained expansion." },
        { icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />, title: "Security Authority Dominance", desc: "Positioning your brand as the trusted standard in cybersecurity." },
        { icon: <Database className="w-6 h-6 text-purple-500" />, title: "Data-Led Community Growth", desc: "Fostering engaged communities through data-backed content strategies." },
        { icon: <TrendingUp className="w-6 h-6 text-rose-500" />, title: "Full-Stack Performance Analytics", desc: "End-to-end tracking of every user interaction for maximum optimization." },
    ];
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            
            // Refactored to use ScrollTrigger.batch for robust grid animations
            // First, set initial state of all cards to hidden
            gsap.set(".method-card", { y: 50, opacity: 0 });

            // Create a batch trigger to animate cards as they enter the viewport
            ScrollTrigger.batch(".method-card", {
                onEnter: (elements) => {
                    gsap.to(elements, {
                        opacity: 1, 
                        y: 0, 
                        stagger: 0.15, 
                        duration: 0.8, 
                        ease: "power2.out",
                        overwrite: true
                    });
                },
                start: "top 90%", // Trigger when top of element is 90% down viewport
                once: true // Only run once
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
    <div className="py-24 bg-black section-methodology border-t border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" ref={titleRef}>
            <h2 className="text-4xl font-bold text-white max-w-md">Our Methodology</h2>
             <p className="text-gray-400 max-w-lg mt-4 md:mt-0">
                Our approach is full-spectrum. We don't just execute; we architect. We turn technical complexity into business clarity for F500 & SaaS companies.
            </p>
            <button className="hidden md:flex items-center text-sm font-semibold text-white border border-white/10 px-4 py-2 rounded-lg hover:bg-white/5 hover:border-white/20 transition-colors">
                Expand Analysis <ChevronDown className="ml-2 w-4 h-4"/>
            </button>
        </div>
 
        {/* Added ref to the grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
            {methods.map((item, idx) => (
                <div key={idx} className="method-card bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                    </div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Step 0{idx + 1}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                    <a href="#" className="inline-flex items-center text-blue-400 mt-6 text-sm font-semibold hover:text-blue-300 group-hover:translate-x-2 transition-transform">
                        See Detailed Case <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
