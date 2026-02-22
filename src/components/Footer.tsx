import logoWhite from '../assets/image/logo-white.png';

export function Footer() {
    return (
        <footer className="bg-black pt-32 pb-20 border-t border-white/5 relative overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-40">
                    <div className="col-span-2">
                        <div className="flex items-center mb-6">
                           <img src={logoWhite} alt="R Square Visuals" className="h-8 w-auto mr-3" />
                           <span className="font-bold text-xl tracking-tight text-white italic">R Square Visuals</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-4 font-medium leading-relaxed">
                            © copyright R Square Visuals 2024. <br />
                            All rights reserved.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Pages</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">All Products</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Studio</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Clients</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Socials</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Register</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Sign Up</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Login</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Forgot Password</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none overflow-hidden translate-y-[15%] flex justify-center">
                <h2 className="text-[18vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent">
                    R Square
                </h2>
            </div>
        </footer>
    )
}
