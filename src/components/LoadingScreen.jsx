import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase]       = useState('loading'); // loading | done

  useEffect(() => {
    const step = () => {
      setProgress(prev => {
        const increment = Math.random() * 4 + 1;
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          setTimeout(() => setPhase('done'), 200);
          setTimeout(onComplete, 700);
        }
        return next;
      });
    };
    const id = setInterval(step, 35);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050816]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated rings */}
          <div className="relative flex items-center justify-center mb-10">
            <div className="absolute w-28 h-28 rounded-full border border-[#00d4ff]/15 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute w-20 h-20 rounded-full border border-[#7c3aed]/20 spin-slow" />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center glass-strong glow-cyan"
            >
              <span
                className="text-2xl font-black tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                JJ
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-56 h-[3px] bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                transition: 'width 0.1s ease',
              }}
            />
          </div>

          {/* Percentage */}
          <p
            className="text-xs font-mono"
            style={{ color: '#00d4ff', letterSpacing: '0.2em' }}
          >
            {Math.floor(progress)}%
          </p>
          <p className="text-[#94a3b8] text-xs mt-2 tracking-widest uppercase">
            Initialising...
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
