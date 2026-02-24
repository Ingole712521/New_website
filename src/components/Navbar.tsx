import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import logoIcon from '../assets/image/R Square Visuals icon.png';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(id, { offset: -80 }); // Offset for fixed navbar
    } else {
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Our Developer", href: "#portfolio" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => (window as any).lenis?.scrollTo(0)}>
            <img src={logoIcon} alt="R Square Visuals" className="h-12 w-auto mr-2" />
            {/* <span className="font-bold text-xl tracking-tight text-white">R Square Visuals</span> */}
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-400 hover:text-blue-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={(e: any) => scrollToSection(e, '#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-blue-500 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e: any) => scrollToSection(e, '#contact')}
            className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow-md"
          >
            Book a Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
