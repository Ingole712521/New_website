
import { Globe } from 'lucide-react';
import logoWhite from '../assets/image/logo-white.png';

export function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center mb-6">
                           <img src={logoWhite} alt="R Square Visuals" className="h-10 w-auto mr-2" />
                           <span className="font-bold text-xl tracking-tight text-white">R Square Visuals</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            The essential growth architecture for the visionary tech sector. Where data meets design.
                        </p>
                        <div className="flex space-x-4">
                             {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-colors cursor-pointer hover:scale-110 transition-transform">
                                    <Globe size={16} />
                                </div>
                             ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Solutions</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400">Enterprise SEM</a></li>
                            <li><a href="#" className="hover:text-blue-400">Technical Content</a></li>
                            <li><a href="#" className="hover:text-blue-400">Video Production</a></li>
                            <li><a href="#" className="hover:text-blue-400">Portfolio Launch</a></li>
                            <li><a href="#" className="hover:text-blue-400">Product Analytics</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400">Client Case Studies</a></li>
                            <li><a href="#" className="hover:text-blue-400">Community</a></li>
                            <li><a href="#" className="hover:text-blue-400">White papers</a></li>
                            <li><a href="#" className="hover:text-blue-400">API Docs</a></li>
                            <li><a href="#" className="hover:text-blue-400">Media Assets</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
                         <ul className="space-y-3 text-sm text-gray-400">
                            <li>New York</li>
                            <li>Atlanta</li>
                            <li>San Francisco</li>
                            <li>London (UK)</li>
                            <li>Singapore</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 HumanDigital Inc. All rights reserved. 2024 Design Trends.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                         <a href="#" className="hover:text-gray-400">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
