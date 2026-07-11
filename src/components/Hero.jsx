import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, Terminal, Cpu, Server } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const TYPEWRITER_TEXTS = [
  'Telecom Developer @ TCS',
  'Python Automation Engineer',
  'OSS/BSS Systems Expert',
  'Cloud-Native Developer',
  'AI Workflow Builder',
];

function useTypewriter(texts, typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx]             = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[idx % texts.length];
    let timeout;
    if (!isDeleting && displayed === text) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(prev =>
          isDeleting ? prev.slice(0, -1) : text.slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, idx, texts, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

const FLOATING_ICONS = [
  { Icon: Terminal, delay: 0,    pos: { top: '18%', left: '8%'  }, color: '#00d4ff' },
  { Icon: Cpu,      delay: 0.5,  pos: { top: '65%', left: '6%'  }, color: '#7c3aed' },
  { Icon: Server,   delay: 1.2,  pos: { top: '25%', right: '7%' }, color: '#00d4ff' },
  { Icon: GithubIcon, delay: 0.8, pos: { top: '70%', right: '9%' }, color: '#7c3aed' },
];

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_TEXTS);

  const scrollNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%', left: '15%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '20%', right: '10%',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      {/* Floating icons */}
      {FLOATING_ICONS.map(({ Icon, delay, pos, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          className="absolute hidden lg:flex items-center justify-center w-11 h-11 rounded-xl glass float-animation"
          style={{ ...pos, color, animationDelay: `${delay}s`, border: `1px solid ${color}25` }}
        >
          <Icon size={18} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-12 text-[10px] font-medium tracking-widest uppercase"
          style={{ color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
          Available for exciting opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-black leading-none mb-4"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          <span className="text-[#f1f5f9]">Jensilin </span>
          <span className="gradient-text">Jino J C</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-14 mb-12 flex items-center justify-center"
        >
          <p
            className="text-xl md:text-2xl font-semibold text-[#94a3b8] typing-cursor pr-1"
            style={{ fontFamily: 'JetBrains Mono, monospace', minWidth: '2ch' }}
          >
            {typed}
          </p>
        </motion.div>

        {/* Tagline pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
          style={{ marginBottom: '9px' }}
        >
          {['Python', 'OSS/BSS', 'Kubernetes', 'AI Automation'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="tech-badge text-[10px]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 flex flex-wrap justify-center gap-3"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full font-semibold text-[13px] text-[#050816] tracking-wide transition-all"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              cursor: 'none',
              border: 'none',
              padding: '4px 6px',
              display: 'inline-block',
            }}
          >
          <span className="text-[11px]">View Projects</span>
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, borderColor: 'rgba(0,212,255,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full font-semibold text-[13px] text-[#f1f5f9] transition-all"
            style={{
              cursor: 'none',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.35)',
              padding: '4px 6px',
              display: 'inline-block',
            }}
          >
           <span className="text-[11px]">Contact Me</span>
          </motion.button>

          <motion.a
            href="https://github.com/jensilin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full font-semibold text-[13px] flex items-center gap-2 transition-all"
            style={{
              cursor: 'none',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(148,163,184,0.4)',
              color: '#94a3b8',
              textDecoration: 'none',
              padding: '4px 6px',
            }}
          >
            <GithubIcon size={16} />
            <span className="text-[11px]">GitHub</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#64748b] hover:text-[#00d4ff] transition-colors"
        style={{ cursor: 'none', background: 'none', border: 'none' }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
