import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'GitHub',     href: '#github'      },
  { label: 'Contact',    href: '#contact'     },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobileOpen, setMobile]   = useState(false);
  const [active,    setActive]    = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMobile(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 no-underline"
          style={{ cursor: 'none' }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm glass-strong"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
              border: '1px solid rgba(0,212,255,0.3)',
              color: '#00d4ff',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            JJ
          </div>
          <span className="text-[#f1f5f9] font-semibold text-sm hidden sm:block tracking-wide">
            Jensilin<span style={{ color: '#00d4ff' }}>.</span>dev
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-3">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                active === link.href
                  ? 'text-[#00d4ff]'
                  : 'text-[#94a3b8] hover:text-[#f1f5f9]'
              }`}
              style={{ cursor: 'none', background: 'none', border: 'none' }}
            >
              {link.label}
              {active === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
                />
              )}
            </motion.button>
          ))}
        <motion.a
          href="https://github.com/jensilin"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="ml-6 p-2 rounded-lg text-[#00d4ff] transition-all duration-300 flex items-center justify-center"
          style={{
            cursor: 'none',
            border: '1px solid rgba(0,212,255,0.3)',
            background: 'rgba(0,212,255,0.05)',
            textDecoration: 'none',
          }}
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setMobile(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#94a3b8] hover:text-[#f1f5f9]"
          style={{ cursor: 'none', background: 'none', border: 'none', padding: 4 }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.07)]'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                  }`}
                  style={{ cursor: 'none', background: active === link.href ? undefined : 'none', border: 'none' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
