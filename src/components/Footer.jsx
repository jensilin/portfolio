import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Contact',    href: '#contact'     },
];

const SOCIALS = [
  { icon: GithubIcon,   href: 'https://github.com/jensilin',            label: 'GitHub'   },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/jensilin-jino/',       label: 'LinkedIn' },
  { icon: Mail,         href: 'mailto:jensilinjino@gmail.com',            label: 'Email'    },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: '#00d4ff',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                JJ
              </div>
              <span className="text-[#f1f5f9] font-semibold text-sm">
                Jensilin<span style={{ color: '#00d4ff' }}>.</span>dev
              </span>
            </div>
            <p className="text-[#64748b] text-xs leading-relaxed">
              Telecom Developer building scalable automation and cloud-native solutions.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest mb-3">
              Navigate
            </p>
            <ul className="space-y-2">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#64748b] hover:text-[#00d4ff] text-sm transition-colors duration-200"
                    style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest mb-3">
              Connect
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center glass transition-all duration-300 hover:border-[rgba(0,212,255,0.3)]"
                  style={{ cursor: 'none', textDecoration: 'none', color: '#94a3b8' }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]"
        >
          <p className="text-[#64748b] text-xs flex items-center gap-1.5">
            Built with
            <Heart size={11} className="text-red-400" fill="#f87171" />
            by Jensilin Jino J C · {new Date().getFullYear()}
          </p>
          <p className="text-[#64748b] text-xs font-mono">
            React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
