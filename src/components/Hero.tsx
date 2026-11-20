import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import { CanvasBackground } from './CanvasBackground';

export const Hero: React.FC = () => {
  const { ref: ctaRef, position: ctaPos, handleMouseMove: handleCtaMove, handleMouseLeave: handleCtaLeave } = useMagnetic(0.25);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-14 lg:px-20 overflow-hidden">
      {/* Interactive 60fps canvas backdrop */}
      <CanvasBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto w-full pt-8 md:pt-14"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-dark-800/80 backdrop-blur-md mb-8">
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
          className="text-base sm:text-lg md:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed mb-10"
        >
          My goal is to craft <span className="text-white italic font-medium">maintainable</span>,{' '}
          <span className="text-white italic font-medium">performant</span> and{' '}
          <span className="text-white italic font-medium">clean code</span> so using complex
          applications becomes a seamless, intuitive experience.
        </motion.p>

        {/* Action Button & Companion Magnetic Arrow Node */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
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

      {/* Featured Teaser Banner (Card mirroring the bottom hero in Behance screen 1) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 max-w-5xl mx-auto w-full mt-12"
      >
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-neutral-700 transition-all">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-1">
                Featured Flagship System
              </span>
              <h2 className="text-lg md:text-xl font-display font-semibold text-white">
                Uthsava Entertainment – OTT Admin Suite
              </h2>
              <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                Multi-tenant React &amp; TypeScript admin architecture featuring RBAC access, streaming asset moderation, and automated royalty settlements.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-dark-900 text-xs font-mono font-semibold hover:bg-neutral-200 transition-colors shrink-0"
          >
            <span>Explore Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

