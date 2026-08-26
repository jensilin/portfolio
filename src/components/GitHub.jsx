import { motion } from 'framer-motion';
import { Star, GitFork, GitCommit, Code2, ExternalLink, Users } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

// ── Replace with your GitHub username ──
const GITHUB_USERNAME = 'jensilin';

const STATS = [
  { icon: Code2,     label: 'Repositories',  value: '10+',  color: '#00d4ff' },
  { icon: Star,      label: 'Stars Earned',   value: '5+',   color: '#f59e0b' },
  { icon: GitCommit, label: 'Contributions',  value: '100+', color: '#a855f7' },
  { icon: GitFork,   label: 'Forks',          value: '2+',   color: '#00d4ff' },
];

// Decorative contribution heatmap (static)
const generateGrid = () => {
  const weeks = 26;
  const grid = [];
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      week.push(r < 0.35 ? 0 : r < 0.55 ? 1 : r < 0.75 ? 2 : r < 0.9 ? 3 : 4);
    }
    grid.push(week);
  }
  return grid;
};

const GRID = generateGrid();

const LEVEL_COLORS = {
  0: 'rgba(255,255,255,0.04)',
  1: 'rgba(0,212,255,0.2)',
  2: 'rgba(0,212,255,0.4)',
  3: 'rgba(0,212,255,0.65)',
  4: '#00d4ff',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function GitHubSection() {
  return (
    <section
      id="github"
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 px-6 grid-bg overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.3em] uppercase mb-3">
            05 / GitHub
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#f1f5f9] section-heading"
            style={{ letterSpacing: '-0.02em' }}
          >
            GitHub Activity
          </h2>
          <p className="text-[#64748b] text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Open-source contributions and coding activity
          </p>
        </motion.div>

        {/* Profile card */}
        <motion.div
          {...fadeUp(0.12)}
          className="glass-strong rounded-2xl p-6 sm:p-7 lg:p-8 mb-8 flex flex-col md:flex-row items-center gap-6 md:gap-7"
          style={{ border: '1px solid rgba(0,212,255,0.1)' }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
              border: '2px solid rgba(0,212,255,0.25)',
              color: '#00d4ff',
            }}
          >
            JJ
          </div>
          <div className="min-w-0 md:flex-1 text-center md:text-left">
            <h3 className="text-[#f1f5f9] font-bold text-xl leading-snug break-words">Jensilin Jino J C</h3>
            <p className="text-[#94a3b8] text-sm mt-1.5 leading-relaxed break-words">
              @{GITHUB_USERNAME} · Telecom Developer &amp; Python Enthusiast
            </p>
            <p className="text-[#64748b] text-xs mt-2.5 leading-relaxed">
              Building telecom automation tools and exploring AI-driven solutions.
            </p>
          </div>
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              color: '#050816',
              cursor: 'none',
              textDecoration: 'none',
            }}
          >
            <GithubIcon size={15} />
            View Profile
          </motion.a>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {STATS.map(({ icon: Icon, label, value, color }, i) => (
            <motion.div
              key={label}
              {...fadeUp(0.18 + i * 0.08)}
              whileHover={{ scale: 1.04, borderColor: `${color}30` }}
              className="glass rounded-2xl p-5 text-center transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}15`, color }}
              >
                <Icon size={18} />
              </div>
              <p className="text-[#f1f5f9] font-black text-2xl">{value}</p>
              <p className="text-[#64748b] text-xs mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution heatmap */}
        <motion.div
          {...fadeUp(0.35)}
          className="glass rounded-2xl p-5 sm:p-6 lg:p-7"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 mb-5">
            <div className="min-w-0">
              <h3 className="text-[#f1f5f9] font-semibold text-sm">Contribution Activity</h3>
              <p className="text-[#64748b] text-xs mt-1">Last 6 months (decorative)</p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs text-[#64748b]">
              <span>Less</span>
              {[0,1,2,3,4].map(l => (
                <div
                  key={l}
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ background: LEVEL_COLORS[l] }}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-max">
              {GRID.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((level, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wi * 7 + di) * 0.003, duration: 0.25 }}
                      className="w-3 h-3 rounded-sm cursor-default"
                      style={{ background: LEVEL_COLORS[level] }}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* GitHub stats image */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=00d4ff&text_color=94a3b8&icon_color=7c3aed&border_color=ffffff11&bg_color=ffffff00&hide_border=false`}
                alt="GitHub Stats"
                className="block w-full h-auto"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&title_color=00d4ff&text_color=94a3b8&border_color=ffffff11&bg_color=ffffff00&hide_border=false`}
                alt="Top Languages"
                className="block w-full h-auto"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
