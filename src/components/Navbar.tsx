import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import logoIcon from '../assets/image/R Square Visuals icon.png';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(id, { offset: -80 });
    } else {
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contacts', href: '#contact' },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pt-3 sm:pt-4 pointer-events-none px-3 sm:px-4">
      <nav
        id="navbar"
        className="pointer-events-auto relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-950/55 shadow-[0_8px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl backdrop-saturate-150 transition-[box-shadow,transform] duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(96,165,250,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background:
              'radial-gradient(120% 80% at 50% -40%, rgba(96,165,250,0.18), transparent 55%), radial-gradient(80% 60% at 100% 50%, rgba(167,139,250,0.08), transparent 50%), radial-gradient(70% 50% at 0% 80%, rgba(251,113,133,0.06), transparent 45%)',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex h-[4.25rem] items-center justify-between gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex shrink-0 items-center gap-3 rounded-xl py-1 pr-2 text-left transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-inner shadow-white/5 ring-1 ring-white/5 transition-[border-color,box-shadow] duration-300 group-hover:border-blue-400/30 group-hover:shadow-[0_0_24px_-4px_rgba(96,165,250,0.35)]">
                <img src={logoIcon} alt="" className="h-8 w-auto object-contain" aria-hidden />
                <span className="sr-only">R Square Visuals — home</span>
              </span>
            
            </button>

            <div className="hidden md:flex flex-1 items-center justify-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group relative rounded-full px-4 py-2 text-sm font-semibold text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  <span
                    className="absolute inset-0 rounded-full bg-white/0 transition-all duration-300 group-hover:bg-white/[0.07]"
                    aria-hidden
                  />
                  <span className="relative">{link.name}</span>
                  <span
                    className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 scale-x-0 rounded-full bg-linear-to-r from-sky-400 via-violet-400 to-pink-400 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
                    aria-hidden
                  />
                </a>
              ))}
            </div>

            <div className="hidden md:flex shrink-0 items-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1.5px] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span
                  className="absolute inset-0 bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span
                  className="absolute inset-0 bg-linear-to-r from-sky-400 via-fuchsia-500 to-pink-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
                  aria-hidden
                />
                <span className="relative flex items-center gap-2 rounded-full bg-zinc-950/90 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-zinc-950/70">
                  <Sparkles className="h-4 w-4 text-sky-300" strokeWidth={2.25} />
                  Let&apos;s talk
                </span>
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="relative border-t border-white/[0.08] bg-zinc-950/70 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(100% 80% at 50% 0%, rgba(96,165,250,0.12), transparent 60%)',
              }}
            />
            <div className="relative flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center rounded-xl border border-transparent px-4 py-3 text-base font-semibold text-zinc-300 transition-all hover:border-white/10 hover:bg-white/[0.06] hover:text-white active:scale-[0.99]"
                >
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-linear-to-br from-sky-400 to-violet-500 opacity-60" />
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25"
              >
                <Sparkles className="h-4 w-4" strokeWidth={2.25} />
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
