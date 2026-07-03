import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Shield, Zap, Award, Users } from 'lucide-react';

const STATS = [
  { icon: Award,   value: '1+',  label: 'Years Experience'  },
  { icon: Code2,   value: '10+', label: 'Projects Delivered' },
  { icon: Server,  value: '5+',  label: 'Telecom Domains'   },
  { icon: Zap,     value: '3+',  label: 'Automated Pipelines' },
];

const HIGHLIGHTS = [
  { icon: Code2,   label: 'Python Automation',   desc: 'ETL workflows & scripting'    },
  { icon: Server,  label: 'OSS/BSS Systems',     desc: 'Telecom network management'   },
  { icon: Shield,  label: 'FCAPS & KPI Analysis',desc: 'Network performance metrics'  },
  { icon: Zap,     label: 'Cloud-Native',        desc: 'Docker & Kubernetes stacks'   },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" className="relative py-28 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.3em] uppercase mb-3">
            01 / About Me
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#f1f5f9] section-heading"
            style={{ letterSpacing: '-0.02em' }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Avatar + stats */}
          <div className="space-y-8">
            {/* Avatar card */}
            <motion.div {...fadeUp(0.1)} className="relative">
              <div
                className="w-full max-w-sm mx-auto rounded-2xl glass-strong p-8 flex flex-col items-center text-center"
                style={{ border: '1px solid rgba(0,212,255,0.12)' }}
              >
                {/* Monogram avatar */}
                <div className="relative mb-5">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center font-black text-4xl glow-cyan"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                      border: '2px solid rgba(0,212,255,0.25)',
                      color: '#00d4ff',
                    }}
                  >
                    JJ
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#050816]"
                    title="Available"
                  />
                </div>
                <h3 className="text-[#f1f5f9] font-bold text-lg">Jensilin Jino J C</h3>
                <p className="text-[#00d4ff] text-sm font-medium mt-1">Telecom Developer @ TCS</p>
                <p className="text-[#64748b] text-xs mt-1">Chennai, India 🇮🇳</p>

                <div className="w-full mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-[#00d4ff] font-black text-xl">1+</p>
                    <p className="text-[#64748b] text-xs">Years Exp.</p>
                  </div>
                  <div>
                    <p className="text-[#7c3aed] font-black text-xl">10+</p>
                    <p className="text-[#64748b] text-xs">Projects</p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div
                className="absolute -inset-px rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, transparent 50%, rgba(124,58,237,0.08) 100%)',
                  borderRadius: 16,
                  maxWidth: 'calc(100% + 2px)',
                }}
              />
            </motion.div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(0.2 + i * 0.1)}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:border-[rgba(0,212,255,0.2)] transition-all duration-300"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[#f1f5f9] font-bold text-lg leading-none">{value}</p>
                    <p className="text-[#64748b] text-[11px] mt-0.5">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — text content */}
          <div className="space-y-6">
            <motion.p {...fadeUp(0.15)} className="text-[#94a3b8] text-lg leading-relaxed">
              Telecom Developer with hands-on experience in{' '}
              <span className="text-[#00d4ff] font-medium">OSS/BSS systems</span>,{' '}
              performance management, and{' '}
              <span className="text-[#a855f7] font-medium">Python automation</span>. I specialise in
              building ETL workflows, processing large-scale telecom data, and delivering insights
              through KPI analysis.
            </motion.p>

            <motion.p {...fadeUp(0.22)} className="text-[#94a3b8] text-lg leading-relaxed">
              Passionate about{' '}
              <span className="text-[#00d4ff] font-medium">cloud-native technologies</span> —
              containerising workloads with Docker and orchestrating them with Kubernetes. I thrive
              on automating repetitive workflows and solving real-world telecom challenges with
              elegant, scalable solutions.
            </motion.p>

            <motion.p {...fadeUp(0.29)} className="text-[#94a3b8] text-lg leading-relaxed">
              Currently exploring{' '}
              <span className="text-[#a855f7] font-medium">AI-driven automation</span> to enhance
              network monitoring, reduce manual intervention, and push the boundaries of what
              telecom software can do.
            </motion.p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(0.35 + i * 0.08)}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0,212,255,0.25)' }}
                  className="glass rounded-xl p-4 transition-all duration-300 cursor-default"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Icon size={18} className="text-[#00d4ff] mb-2" />
                  <p className="text-[#f1f5f9] text-sm font-semibold">{label}</p>
                  <p className="text-[#64748b] text-xs mt-1">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
