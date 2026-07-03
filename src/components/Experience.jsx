import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

const RESPONSIBILITIES = [
  { text: 'Telecom Performance Management — monitoring, analysing, and optimising KPIs across 4G/5G network elements.' },
  { text: 'OSS/BSS Systems — working on operational and business support systems for telecom service delivery.' },
  { text: 'Python Automation — developing scripts to automate data collection, transformation, and reporting workflows.' },
  { text: 'ETL Workflows — building Apache NiFi pipelines for high-volume telecom data ingestion and processing.' },
  { text: 'Data Processing & Analysis — handling CSV/XML data files, log analysis, and generating actionable insights.' },
  { text: 'Linux & Containerised Environments — administering Linux servers, Docker containers, and Kubernetes clusters.' },
];

const TECH_STACK = ['Python', 'Apache NiFi', 'SQL', 'Docker', 'Kubernetes', 'Linux', 'Jenkins', 'Git'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      {/* Glow accent */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.3em] uppercase mb-3">
            02 / Experience
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#f1f5f9] section-heading"
            style={{ letterSpacing: '-0.02em' }}
          >
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #00d4ff33, #7c3aed33, transparent)' }}
          />

          {/* TCS card */}
          <motion.div {...fadeUp(0.15)} className="relative flex md:justify-center">
            {/* Timeline dot */}
            <div
              className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-8 w-3 h-3 rounded-full z-10 glow-cyan"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
            />

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] md:mr-auto glass-strong rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden"
              style={{ border: '1px solid rgba(0,212,255,0.12)' }}
            >
              {/* Card gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff' }}
                    >
                      <Building2 size={15} />
                    </div>
                    <span className="text-[#64748b] text-xs font-medium tracking-wide uppercase">
                      Full-Time
                    </span>
                  </div>
                  <h3 className="text-[#f1f5f9] font-bold text-xl mt-2">Telecom Developer</h3>
                  <p
                    className="font-semibold text-base mt-0.5"
                    style={{ color: '#00d4ff' }}
                  >
                    Tata Consultancy Services (TCS)
                  </p>
                </div>
                <div
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(0,212,255,0.08)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.18)' }}
                >
                  <Calendar size={11} />
                  2024 – Present
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-7">
                {RESPONSIBILITIES.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                    className="flex items-start gap-3 text-[#94a3b8] text-sm leading-relaxed"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: '#00d4ff' }}
                    />
                    {item.text}
                  </motion.li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Future / coming soon node */}
          <motion.div
            {...fadeUp(0.3)}
            className="relative flex md:justify-center mt-10"
          >
            <div
              className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-4 w-3 h-3 rounded-full border-2 z-10"
              style={{ borderColor: '#7c3aed55', background: '#050816' }}
            />
            <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] md:ml-auto">
              <div
                className="glass rounded-xl px-5 py-3 text-sm text-[#64748b] text-center"
                style={{ border: '1px dashed rgba(255,255,255,0.07)' }}
              >
                🚀 Next chapter loading…
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
