import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import { CanvasBackground } from './CanvasBackground';

export const Hero: React.FC = () => {
  const { ref: ctaRef, position: ctaPos, handleMouseMove: handleCtaMove, handleMouseLeave: handleCtaLeave } = useMagnetic(0.25);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      window.scrollTo({
        top: Math.max(0, el.offsetTop - 65),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="snap-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-14 lg:px-20 overflow-hidden"
    >
      {/* Interactive 60fps canvas backdrop */}
      <CanvasBackground />

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto w-full"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-dark-800/80 backdrop-blur-md mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-neutral-300">
              Available for full-time engineering roles &bull; Delhi / Hybrid / Remote
            </span>
          </motion.div>

          {/* Large Signature Headline matching Behance typography */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-white leading-[0.95]">
              Full-stack <br />
              <span className="text-neutral-100 italic font-medium font-sans">
                Developer
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with editorial italic accents matching reference */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed mb-8 md:mb-10"
          >
            My goal is to craft <span className="text-white italic font-medium">maintainable</span>,{' '}
            <span className="text-white italic font-medium">performant</span> and{' '}
            <span className="text-white italic font-medium">clean code</span> so using complex
            applications becomes a seamless, intuitive experience.
          </motion.p>

          {/* Action Button & Companion Magnetic Arrow Node */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 md:mb-10">
            <div
              ref={ctaRef}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              style={{
                transform: `translate(${ctaPos.x}px, ${ctaPos.y}px)`,
                transition: 'transform 0.15s cubic-bezier(0.2, 0, 0, 1)',
              }}
              className="flex items-center gap-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-dark-900 font-semibold text-sm md:text-base hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
              >
                Projects
              </a>
              <a
                href="#projects"
                aria-label="View Projects Arrow"
                className="w-12 h-12 rounded-full bg-dark-800 border border-neutral-700/80 flex items-center justify-center text-white hover:bg-neutral-200 hover:text-dark-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-700 bg-dark-800/60 text-sm font-mono text-neutral-300 hover:text-white hover:border-neutral-500 transition-all"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </motion.div>

          {/* Social Pill Matrix matching Behance screenshot */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 text-xs font-mono">
            <a
              href="https://github.com/TODO_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-dark-850/80 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/priyansh-thapar-5a3041216"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-dark-850/80 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-accent-cyan" />
              <span>in Linkedin</span>
            </a>

            <a
              href="mailto:priyanshthapargroww@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-dark-850/80 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>priyanshthapargroww@gmail.com</span>
            </a>

            <a
              href="tel:+918595172064"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-dark-850/80 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8595172064</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Animated Scroll Down Scroller */}
      <div className="relative z-10 flex justify-center pb-2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-accent-cyan transition-colors group cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-wider">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700/80 group-hover:border-accent-cyan/60 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-accent-cyan"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
