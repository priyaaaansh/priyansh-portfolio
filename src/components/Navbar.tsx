import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between ${
          isScrolled
            ? 'bg-dark-900/80 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Moniker */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-sm md:text-base font-mono tracking-wider font-semibold text-neutral-100 hover:text-accent-cyan transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan group-hover:scale-125 transition-transform" />
          <span>priyansh.dev</span>
        </a>

        {/* Desktop Navigation Glass Pill */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getAssetUrl('Priyansh_Thapar_Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            download="Priyansh_Thapar_Resume.pdf"
            className="flex items-center gap-2 text-xs font-mono tracking-wide px-4 py-2 rounded-full border border-neutral-700 hover:border-accent-cyan/60 hover:text-accent-cyan bg-dark-800/80 transition-all group"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent-cyan" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-dark-800/90 border border-neutral-800 text-neutral-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-dark-850/95 backdrop-blur-xl border border-neutral-800 shadow-2xl md:hidden flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-mono text-neutral-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-neutral-600">→</span>
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-neutral-800">
              <a
                href={getAssetUrl('Priyansh_Thapar_Resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                download="Priyansh_Thapar_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-widest text-dark-900 bg-white font-semibold rounded-2xl hover:bg-neutral-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

