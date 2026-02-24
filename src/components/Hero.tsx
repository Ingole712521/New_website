import React, { useLayoutEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Database } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const contentRef = React.useRef(null);
  const visualsRef = React.useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(visualsRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden section-hero bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6 border border-blue-500/20 animate-pulse">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Join the precision era
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Precision <br />
              Marketing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">IT Giants</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              We architect the digital highways that connect IT leaders to global enterprises. Data-driven strategies that turn market noise into clear signals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center group">
                Launch Discovery Call <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1">
                <Play className="mr-2 h-4 w-4 fill-current" /> How We Optimize
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative group cursor-pointer transition-transform hover:scale-110 hover:z-10">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-white">Trusted by leaders</p>
                <p className="text-gray-500">from Fortune 500 companies</p>
              </div>
            </div>
          </div>
          <div className="relative" ref={visualsRef}>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 aspect-square flex items-center justify-center group perspective-1000">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

              <div className="w-64 h-64 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000"
                alt="Abstract 3D Network"
                className="relative z-10 w-[90%] h-[90%] object-cover rounded-2xl shadow-inner mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-105"
              />


              <div className="absolute top-10 left-10 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-3 z-20 animate-bounce cursor-pointer hover:scale-105 transition-transform" style={{ animationDuration: '3s' }}>
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><TrendingUp size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">ROI Increase</p>
                  <p className="text-sm font-bold text-white">+245.8%</p>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-3 z-20 animate-bounce cursor-pointer hover:scale-105 transition-transform" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Database size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Data Points</p>
                  <p className="text-sm font-bold text-white">2.5M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
