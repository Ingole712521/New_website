import React, { useLayoutEffect } from 'react';
import { Search, ChevronDown, ArrowRight, TrendingUp, BarChart3, Database, ShieldCheck, Zap, Globe, Menu, X, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

function useSmoothScroll() {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Synchronize Lenis scroll with GSAP's ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's responsive ticker to drive Lenis animations
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing to prevent stutters
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => { lenis.raf(time * 1000) });
      lenis.destroy();
    };
  }, []);
}

function Navbar() {
// ... existing Navbar code
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-8 w-8 bg-blue-500 rounded-lg mr-2 flex items-center justify-center text-white font-bold">HD</div>
            <span className="font-bold text-xl tracking-tight text-gray-900">HumanDigital</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Case Studies</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Methodology</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Insights</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-transform hover:scale-110">
               <Search className="h-5 w-5" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              Book a Consultation
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Services</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Case Studies</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Methodology</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Insights</a>
           <button className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow-md">
              Book a Consultation
            </button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
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
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden section-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6 border border-blue-100 animate-pulse">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Join the precision era
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Precision <br />
              Marketing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">IT Giants</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              We architect the digital highways that connect IT leaders to global enterprises. Data-driven strategies that turn market noise into clear signals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center group">
                Launch Discovery Call <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1">
                 <Play className="mr-2 h-4 w-4 fill-current" /> How We Optimize
              </button>
            </div>
             <div className="mt-10 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative group cursor-pointer transition-transform hover:scale-110 hover:z-10">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                 <div className="text-sm">
                    <p className="font-bold text-gray-900">Trusted by leaders</p>
                    <p className="text-gray-500">from Fortune 500 companies</p>
                  </div>
             </div>
          </div>
          <div className="relative" ref={visualsRef}>
            {/* Abstract 3D Visual Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-white border border-white/50 aspect-square flex items-center justify-center group perspective-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                {/* Simulated 3D Element */}
                <div className="w-64 h-64 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000" 
                  alt="Abstract 3D Network" 
                  className="relative z-10 w-[90%] h-[90%] object-cover rounded-2xl shadow-inner mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Floating Cards */}
                 <div className="absolute top-10 left-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-bounce cursor-pointer hover:scale-105 transition-transform" style={{animationDuration: '3s'}}>
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><TrendingUp size={20}/></div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">ROI Increase</p>
                        <p className="text-sm font-bold text-gray-900">+245.8%</p>
                    </div>
                 </div>

                 <div className="absolute bottom-10 right-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-bounce cursor-pointer hover:scale-105 transition-transform" style={{animationDelay: '1.5s', animationDuration: '4s'}}>
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Database size={20}/></div>
                    <div>
                         <p className="text-xs text-gray-500 font-medium">Data Points</p>
                        <p className="text-sm font-bold text-gray-900">2.5M+</p>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Methodology() {
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
    <div className="py-24 bg-gray-50/50 section-methodology" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" ref={titleRef}>
            <h2 className="text-4xl font-bold text-gray-900 max-w-md">Our Methodology</h2>
             <p className="text-gray-600 max-w-lg mt-4 md:mt-0">
                Our approach is full-spectrum. We don't just execute; we architect. We turn technical complexity into business clarity for F500 & SaaS companies.
            </p>
            <button className="hidden md:flex items-center text-sm font-semibold text-gray-900 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors">
                Expand Analysis <ChevronDown className="ml-2 w-4 h-4"/>
            </button>
        </div>

        {/* Added ref to the grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
            {methods.map((item, idx) => (
                <div key={idx} className="method-card bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Step 0{idx + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                    <a href="#" className="inline-flex items-center text-blue-600 mt-6 text-sm font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform">
                        See Detailed Case <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function Stats() {
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
        <div className="py-20 border-t border-gray-100 bg-white section-stats" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Active Leads", value: "500+", icon: "👥" },
                        { label: "Client Pipeline Generated", value: "$1.2B", icon: "💰" },
                        { label: "Client Retention", value: "94%", icon: "🤝" },
                        { label: "Average ROI Multiplier", value: "12X", icon: "📈" },
                    ].map((stat, idx) => (
                        <div key={idx} className="stat-item group hover:scale-105 transition-transform duration-300">
                             <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-xl mb-4 text-blue-600 font-bold group-hover:bg-blue-100 transition-colors">{stat.icon}</div>
                            <h4 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function CaseStudies() {
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
      <div className="py-24 bg-white relative overflow-hidden section-cases" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 case-title">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Engineered for Success</h2>
            <p className="text-gray-500">Unmatched impact on the world's most innovative companies.</p>
          </div>

          <div className="space-y-24">
            {/* Case 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-16 case-study-item">
                 <div className="lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1558494949-ef2bb6db8744?auto=format&fit=crop&q=80&w=1000" 
                            alt="Server Room" 
                            className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Case Study</span>
                            <h3 className="text-2xl font-bold">Cloud Infrastructure Scale</h3>
                         </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                        <Database size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Winning the Enterprise: From $2M to $25M Pipeline in 8 Months.</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Our strategic re-positioning and data-led targeting allowed this cloud provider to penetrate the Fortune 500 market with unprecedented speed.
                    </p>
                    <div className="flex gap-12 mb-8 border-t border-b border-gray-100 py-6">
                        <div>
                            <p className="text-4xl font-bold text-gray-900 mb-1">312%</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">Lead Quality</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-gray-900 mb-1">12.4%</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">Conv. Rate</p>
                        </div>
                    </div>
                    <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center group">
                        Read Full Process <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

             {/* Case 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 case-study-item">
                 <div className="lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                            alt="Cybersecurity" 
                            className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Portfolio Growth</span>
                            <h3 className="text-2xl font-bold">Vertex Platform Growth</h3>
                         </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Dominating the Stack: Scaling Vertex AI to 1M+ Active Developers.</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Through technical community engagement and open-source contribution strategies, we helped Vertex become the de-facto standard.
                    </p>
                     <div className="flex gap-12 mb-8 border-t border-b border-gray-100 py-6">
                        <div>
                            <p className="text-4xl font-bold text-gray-900 mb-1">4.2X</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">Market Share</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-gray-900 mb-1">$12M</p>
                            <p className="text-sm text-gray-500 font-medium uppercase">ARR Added</p>
                        </div>
                    </div>
                    <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center group">
                        View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

function CTA() {
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
        <div className="py-20 px-4 section-cta" ref={sectionRef}>
            <div className="max-w-6xl mx-auto relative cta-content">
                <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 transform scale-90 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white border border-white rounded-[2.5rem] p-12 lg:p-24 text-center shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-shadow duration-500">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"></div>
                     <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-8 text-blue-500 animate-bounce" style={{animationDuration: '3s'}}>
                        <TrendingUp size={32} />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Ready to Engineer Your Next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-black italic">Infection Point?</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                        Join the elite 1% of tech giants that rely on our data-first strategies to scale with zero-risk performance loads.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                         <input 
                            type="text" 
                            placeholder="Enter company e-mail" 
                            className="flex-grow px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 bg-white transition-all focus:scale-105"
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

function ParticleSection() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { offsetWidth, offsetHeight } = canvasRef.current.parentElement!;
        setDimensions({ width: offsetWidth, height: offsetHeight });
        canvasRef.current.width = offsetWidth;
        canvasRef.current.height = offsetHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from(".touch-data-text", {
             scrollTrigger: {
                 trigger: containerRef.current,
                 start: "top 80%",
             },
             opacity: 0,
             y: 20,
             duration: 1.5,
             ease: "power2.out"
         }) 
      }, containerRef);
      return () => ctx.revert();
  }, [])

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { 
        x: number; 
        y: number; 
        originX: number; 
        originY: number; 
        size: number;
        vx: number; 
        vy: number; 
        color: string;
    }[] = [];

    const spacing = 30;
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);
    
    const colors = ['#3b82f6', '#06b6d4', '#6366f1']; // Blue, Cyan, Indigo

    // Initialize particles
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const size = Math.random() * 4 + 2;
            particles.push({
                x: i * spacing + spacing / 2,
                y: j * spacing + spacing / 2,
                originX: i * spacing + spacing / 2,
                originY: j * spacing + spacing / 2,
                size: size,
                vx: 0,
                vy: 0,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = 150;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 5; // Repulsion strength
            const directionY = forceDirectionY * force * 5;

            if (distance < maxDistance) {
                p.vx -= directionX;
                p.vy -= directionY;
            } else {
                if (p.x !== p.originX) {
                    const dx = p.x - p.originX;
                    p.vx -= dx * 0.1; // Return spring
                }
                if (p.y !== p.originY) {
                    const dy = p.y - p.originY;
                    p.vy -= dy * 0.1;
                }
            }

            p.vx *= 0.9; // Friction
            p.vy *= 0.9;
            p.x += p.vx;
            p.y += p.vy;

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions]);

  return (
    <div className="w-full h-[400px] bg-gray-900 relative overflow-hidden" ref={containerRef}>
        <canvas ref={canvasRef} className="absolute inset-0 z-10" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <h2 className="touch-data-text text-4xl md:text-8xl font-black text-gray-800 select-none opacity-50 tracking-tighter">
                TOUCH DATA
             </h2>
        </div>
    </div>
  );
}

function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center mb-6">
                           <div className="h-8 w-8 bg-blue-500 rounded-lg mr-2 flex items-center justify-center text-white font-bold">HD</div>
                           <span className="font-bold text-xl tracking-tight text-gray-900">HumanDigital</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                            The essential growth architecture for the visionary tech sector. Where data meets design.
                        </p>
                        <div className="flex space-x-4">
                             {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-500 transition-colors cursor-pointer hover:scale-110 transition-transform">
                                    <Globe size={16} />
                                </div>
                             ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Solutions</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600">Enterprise SEM</a></li>
                            <li><a href="#" className="hover:text-blue-600">Technical Content</a></li>
                            <li><a href="#" className="hover:text-blue-600">Video Production</a></li>
                            <li><a href="#" className="hover:text-blue-600">Portfolio Launch</a></li>
                            <li><a href="#" className="hover:text-blue-600">Product Analytics</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600">Client Case Studies</a></li>
                            <li><a href="#" className="hover:text-blue-600">Community</a></li>
                            <li><a href="#" className="hover:text-blue-600">White papers</a></li>
                            <li><a href="#" className="hover:text-blue-600">API Docs</a></li>
                            <li><a href="#" className="hover:text-blue-600">Media Assets</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
                         <ul className="space-y-3 text-sm text-gray-500">
                            <li>New York</li>
                            <li>Atlanta</li>
                            <li>San Francisco</li>
                            <li>London (UK)</li>
                            <li>Singapore</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2026 HumanDigital Inc. All rights reserved. 2024 Design Trends.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600">Terms of Service</a>
                         <a href="#" className="hover:text-gray-600">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function App() {
  useSmoothScroll();

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Methodology />
      <Stats />
      <CaseStudies />
      <CTA />
      <ParticleSection />
      <Footer />
    </div>
  );
}

export default App;
