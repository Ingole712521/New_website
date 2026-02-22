import React, { useLayoutEffect } from 'react';
import { Database, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export function CaseStudies() {
    const sectionRef = React.useRef(null);
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".case-title", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 1
            });
            
            gsap.from(".case-study-item", {
                 scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
      <div className="py-24 bg-black relative overflow-hidden section-cases border-t border-white/5" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 case-title">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Engineered for Success</h2>
            <p className="text-gray-400">Unmatched impact on the world's most innovative companies.</p>
          </div>
 
          <div className="space-y-24">

            <div className="flex flex-col lg:flex-row items-center gap-16 case-study-item">
                 <div className="lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1558494949-ef2bb6db8744?auto=format&fit=crop&q=80&w=1000" 
                            alt="Server Room" 
                            className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Case Study</span>
                            <h3 className="text-2xl font-bold">Cloud Infrastructure Scale</h3>
                         </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                        <Database size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Winning the Enterprise: From $2M to $25M Pipeline in 8 Months.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Our strategic re-positioning and data-led targeting allowed this cloud provider to penetrate the Fortune 500 market with unprecedented speed.
                    </p>
                    <div className="flex gap-12 mb-8 border-t border-b border-white/10 py-6">
                        <div>
                            <p className="text-4xl font-bold text-white mb-1">312%</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">Lead Quality</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-white mb-1">12.4%</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">Conv. Rate</p>
                        </div>
                    </div>
                    <button className="bg-white/5 text-blue-400 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center group border border-white/10">
                        Read Full Process <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
 

             <div className="flex flex-col lg:flex-row-reverse items-center gap-16 case-study-item">
                 <div className="lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                            alt="Cybersecurity" 
                            className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Portfolio Growth</span>
                            <h3 className="text-2xl font-bold">Vertex Platform Growth</h3>
                         </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-400">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Dominating the Stack: Scaling Vertex AI to 1M+ Active Developers.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Through technical community engagement and open-source contribution strategies, we helped Vertex become the de-facto standard.
                    </p>
                     <div className="flex gap-12 mb-8 border-t border-b border-white/10 py-6">
                        <div>
                            <p className="text-4xl font-bold text-white mb-1">4.2X</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">Market Share</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-white mb-1">$12M</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">ARR Added</p>
                        </div>
                    </div>
                    <button className="bg-white/5 text-blue-400 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center group border border-white/10">
                        View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}
