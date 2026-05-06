'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/lesiones', label: 'Lesiones Tratadas' },
  { href: '/sobre-alberto', label: 'Sobre Alberto' },
  { href: '/opiniones', label: 'Opiniones' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200`}
    >
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        <div className="flex items-baseline space-x-2">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight uppercase transition-colors text-slate-900"
          >
            Alber<span className="text-slate-500">physio</span>
          </Link>
          <span className="text-[10px] font-medium tracking-widest uppercase hidden sm:inline-block text-slate-400">Bilbao</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors text-slate-400 hover:text-slate-600`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all bg-slate-900 text-white hover:bg-slate-800"
          >
            Reservar cita
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4"
          >
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-slate-900 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-4 px-5 py-3 text-center text-sm font-medium bg-slate-900 text-white hover:bg-slate-800"
            >
              Reservar cita
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
