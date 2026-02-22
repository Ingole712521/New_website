import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import logoWhite from '../assets/image/logo-white.png';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoWhite} alt="R Square Visuals" className="h-10 w-auto mr-2" />
            <span className="font-bold text-xl tracking-tight text-white">R Square Visuals</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-400 hover:text-blue-500 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 font-medium transition-colors">Case Studies</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 font-medium transition-colors">Methodology</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 font-medium transition-colors">Insights</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-transform hover:scale-110">
               <Search className="h-5 w-5" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              Book a Consultation
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-blue-500 hover:bg-white/5">Services</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-blue-500 hover:bg-white/5">Case Studies</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-blue-500 hover:bg-white/5">Methodology</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-blue-500 hover:bg-white/5">Insights</a>
           <button className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow-md">
              Book a Consultation
            </button>
        </div>
      )}
    </nav>
  );
}
