import { Mail } from 'lucide-react';
import worldMap from '../assets/image/world.svg';

export function Contact() {
  return (
    <section className="py-32 bg-black border-t border-white/5 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Info and Map */}
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
                <a href="mailto:contact@yoursaas.ai" className="hover:text-blue-500 transition-colors">contact@yoursaas.ai</a>
                <span className="text-white/10 hidden sm:inline">•</span>
                <span>+1 (800) 123 XX21</span>
                <span className="text-white/10 hidden sm:inline">•</span>
                <a href="mailto:support@yoursaas.ai" className="hover:text-blue-500 transition-colors">support@yoursaas.ai</a>
              </div>
            </div>

            {/* World Map Container */}
            <div className="relative mt-20 opacity-40 hover:opacity-70 transition-opacity duration-700">
              <img src={worldMap} alt="World Map" className="w-full h-auto grayscale" />
              
              {/* Glowing Pin - Fine-tuned for Ahmedabad, India */}
              <div className="absolute top-[40.5%] left-[70.8%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Pin Label */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] text-white font-bold uppercase tracking-wider">
                    We are here
                  </div>
                  {/* Pin Dot */}
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10"></div>
                  {/* Glow Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500/30 rounded-full animate-ping"></div>
                  {/* Vertical Line */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative group">
            {/* Grid background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <form className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full name</label>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="support@RSquareVisuals.com" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Company</label>
                        <input 
                            type="text" 
                            placeholder="RSquareVisuals" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                        <textarea 
                            rows={4}
                            placeholder="Type your message here" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all resize-none"
                        ></textarea>
                    </div>
                    
                    <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg">
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
