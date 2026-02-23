import { Mail } from 'lucide-react';
import worldMap from '../assets/image/world.svg';
import { cn } from '../lib/utils';

export function Contact() {
  return (
    <section className="py-32 bg-black border-t border-white/5 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <div className="mb-12">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-lg shadow-blue-500/5">
                <Mail className="text-blue-500" size={24} />
              </div>
              <h2 className="text-5xl font-extrabold text-white mb-6">Contact us</h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-gray-400 text-sm font-medium">
                <a href="mailto:contact@rsquare.ai" className="hover:text-blue-500 transition-colors">contact@rsquare.ai</a>
                <span className="text-white/10 hidden sm:inline">•</span>
                <span>+1 (800) 123 XX21</span>
                <span className="text-white/10 hidden sm:inline">•</span>
                <a href="mailto:support@rsquare.ai" className="hover:text-blue-500 transition-colors">support@rsquare.ai</a>
              </div>
            </div>


            <div className="relative mt-20 opacity-40 hover:opacity-70 transition-opacity duration-700">
              <img src={worldMap} alt="World Map" className="w-full h-auto grayscale" />
              

              <div className="absolute top-[40.5%] left-[70.8%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] text-black font-bold uppercase tracking-wider">
                    We are here
                  </div>

                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10"></div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500/30 rounded-full animate-ping"></div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>


          <div className="relative group">

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative bg-[#0A0A0A]/80 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group"
                 style={{ 
                   maskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)',
                   WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)'
                 }}>

                <div className="absolute top-0 right-0 w-full h-[400px] pointer-events-none z-0"
                    style={{ 
                        maskImage: 'radial-gradient(circle at top right, black, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 75%)'
                    }}>
                    <div className="absolute top-0 right-0 grid grid-cols-[repeat(20,24px)] grid-rows-[repeat(20,24px)] opacity-[0.08]">
                        {[...Array(400)].map((_, i) => (
                            <div key={i} className={cn(
                                "w-[24px] h-[24px] border-r border-b border-white/20",
                                [18, 19, 38, 39, 57, 58, 59, 78, 98].includes(i) ? "bg-white/10" : ""
                            )}></div>
                        ))}
                    </div>
                </div>

                <form className="space-y-8 relative z-10">
                    <div className="space-y-3">
                        <label className="text-base font-bold text-white block tracking-wide">Full name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all shadow-inner"
                        />
                    </div>
                    
                    <div className="space-y-3">
                        <label className="text-base font-bold text-white block tracking-wide">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="support@rsquare.com" 
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all shadow-inner"
                        />
                    </div>
                    
                    <div className="space-y-3">
                        <label className="text-base font-bold text-white block tracking-wide">Company</label>
                        <input 
                            type="text" 
                            placeholder="Enter your company name" 
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all shadow-inner"
                        />
                    </div>
                    
                    <div className="space-y-3">
                        <label className="text-base font-bold text-white block tracking-wide">Message</label>
                        <textarea 
                            rows={5}
                            placeholder="Type your message here" 
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all resize-none shadow-inner"
                        ></textarea>
                    </div>
                    
                    <button className="bg-[#1A1A1A] hover:bg-[#252525] text-white font-semibold py-3 px-10 rounded-lg border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                        Submit
                    </button>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
