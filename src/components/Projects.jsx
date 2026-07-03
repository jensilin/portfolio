import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: 'SCC Delicious',
    subtitle: 'College Canteen Management System',
    description:
      'A full-stack college canteen management application built with the MERN stack. Features student login with auth, admin dashboard for menu and order management, real-time order tracking, and a clean, responsive UI.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth', 'REST API'],
    links: {
      github: 'https://github.com/jensilinjino/scc-delicious',
    },
    metrics: [
      { icon: Star,    label: 'Featured Project' },
      { icon: GitFork, label: 'MERN Stack' },
    ],
    gradient: 'from-[#00d4ff]/10 to-[#7c3aed]/10',
    accentColor: '#00d4ff',
  },
];

const PLACEHOLDERS = [
  {
    id: 2,
    title: 'AI Telecom Monitor',
    description: 'ML-powered anomaly detection for telecom KPI streams using Python and LSTM networks.',
    comingSoon: true,
    accentColor: '#7c3aed',
  },
  {
    id: 3,
    title: 'NiFi ETL Dashboard',
    description: 'Visual dashboard for monitoring Apache NiFi ETL pipelines with real-time metrics.',
    comingSoon: true,
    accentColor: '#00d4ff',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function ProjectCard({ project }) {
  return (
    <motion.div
      {...fadeUp(0.15)}
      whileHover={{ y: -6 }}
      className="glass-strong rounded-2xl overflow-hidden transition-all duration-400 relative group"
      style={{ border: `1px solid rgba(0,212,255,0.12)` }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, #7c3aed)` }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}
        >
          <Star size={10} fill="#00d4ff" />
          Featured
        </div>
      )}

      <div className="p-7">
        {/* Header */}
        <div className="mb-5">
          <p className="text-[#64748b] text-xs font-mono mb-1">Full-Stack / MERN</p>
          <h3 className="text-[#f1f5f9] font-bold text-xl">{project.title}</h3>
          <p className="text-[#94a3b8] text-sm mt-1">{project.subtitle}</p>
        </div>

        <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#f1f5f9] transition-all"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'none',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={15} />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function PlaceholderCard({ project, index }) {
  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.1)}
      whileHover={{ y: -4, borderColor: `${project.accentColor}25` }}
      className="glass rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
      style={{ border: '1px dashed rgba(255,255,255,0.08)' }}
    >
      {/* Coming soon badge */}
      <div className="flex items-center gap-2 mb-4">
        <Clock size={14} style={{ color: project.accentColor }} />
        <span className="text-[#64748b] text-xs font-mono">Coming Soon</span>
      </div>
      <h3 className="text-[#94a3b8] font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-[#64748b] text-sm leading-relaxed">{project.description}</p>

      {/* Decorative shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor}05 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div
        className="absolute bottom-20 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.3em] uppercase mb-3">
            04 / Projects
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#f1f5f9] section-heading"
            style={{ letterSpacing: '-0.02em' }}
          >
            Things I've Built
          </h2>
          <p className="text-[#64748b] text-sm mt-6">
            A showcase of projects that reflect my skills and passion
          </p>
        </motion.div>

        {/* Featured project */}
        <div className="mb-8">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Placeholder cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {PLACEHOLDERS.map((p, i) => (
            <PlaceholderCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          {...fadeUp(0.4)}
          className="text-center mt-14"
        >
          <p className="text-[#64748b] text-sm mb-4">More projects on the way. Follow along:</p>
          <motion.a
            href="https://github.com/jensilinjino"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(0,212,255,0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))',
              border: '1px solid rgba(0,212,255,0.2)',
              color: '#00d4ff',
              cursor: 'none',
              textDecoration: 'none',
            }}
          >
            <GithubIcon size={16} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
