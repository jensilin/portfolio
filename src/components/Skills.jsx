import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Database, Server, GitBranch, Terminal, Globe,
  Layers, Cpu, Wifi, BarChart3
} from 'lucide-react';

const SKILL_BARS = [
  { name: 'Python',      pct: 90, color: '#00d4ff' },
  { name: 'SQL',         pct: 85, color: '#a855f7' },
  { name: 'Linux',       pct: 80, color: '#00d4ff' },
  { name: 'Apache NiFi', pct: 75, color: '#a855f7' },
  { name: 'Docker',      pct: 75, color: '#00d4ff' },
  { name: 'Git / GitHub',pct: 75, color: '#a855f7' },
  { name: 'Kubernetes',  pct: 70, color: '#00d4ff' },
];

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Languages',
    color: '#00d4ff',
    skills: ['Python', 'SQL'],
  },
  {
    icon: Wifi,
    title: 'Telecom & Domain',
    color: '#a855f7',
    skills: ['OSS/BSS', 'FCAPS', 'Network Monitoring', '4G/5G Fundamentals', 'KPI Analysis', 'FCAPS'],
  },
  {
    icon: BarChart3,
    title: 'Python & Data',
    color: '#00d4ff',
    skills: ['Pandas', 'NumPy', 'CSV/XML Processing', 'Data Transformation', 'Log Analysis', 'Automation Scripting'],
  },
  {
    icon: Database,
    title: 'Databases',
    color: '#a855f7',
    skills: ['MySQL', 'Oracle SQL'],
  },
  {
    icon: Server,
    title: 'DevOps & Infra',
    color: '#00d4ff',
    skills: ['Docker', 'Kubernetes', 'Linux', 'WSL', 'Jenkins', 'Git', 'GitHub'],
  },
  {
    icon: Layers,
    title: 'Telecom Tools',
    color: '#a855f7',
    skills: ['Apache NiFi', 'ETL Workflows'],
  },
];

function SkillBar({ name, pct, color, index }) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#f1f5f9] text-sm font-medium">{name}</span>
        <motion.span
          className="text-xs font-mono font-semibold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.5 }}
        >
          {pct}%
        </motion.span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color === '#00d4ff' ? '#7c3aed' : '#00d4ff'})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ delay: index * 0.08 + 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ icon: Icon, title, color, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      whileHover={{ scale: 1.02, borderColor: `${color}30` }}
      className="glass rounded-2xl p-6 transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15`, color }}
        >
          <Icon size={17} />
        </div>
        <h3 className="text-[#f1f5f9] font-semibold text-sm">{title}</h3>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className={color === '#00d4ff' ? 'tech-badge' : 'tech-badge tech-badge-purple'}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 grid-bg">
      {/* Glow accent */}
      <div
        className="absolute top-1/2 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.3em] uppercase mb-3">
            03 / Skills
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#f1f5f9] section-heading"
            style={{ letterSpacing: '-0.02em' }}
          >
            Tech Stack
          </h2>
          <p className="text-[#64748b] text-sm mt-6">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#94a3b8] text-xs font-mono tracking-widest uppercase mb-7"
            >
              Proficiency Levels
            </motion.h3>
            <div className="space-y-5">
              {SKILL_BARS.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>

          {/* Category cards */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#94a3b8] text-xs font-mono tracking-widest uppercase mb-7"
            >
              By Category
            </motion.h3>
            <div className="grid gap-4">
              {CATEGORIES.slice(0, 4).map((cat, i) => (
                <CategoryCard key={cat.title} {...cat} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {CATEGORIES.slice(4).map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} index={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
