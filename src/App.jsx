import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LoadingScreen     from './components/LoadingScreen';
import CustomCursor      from './components/CustomCursor';
import ScrollProgress    from './components/ScrollProgress';
import BackToTop         from './components/BackToTop';
import ParticleBackground from './components/ParticleBackground';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import About             from './components/About';
import Experience        from './components/Experience';
import Skills            from './components/Skills';
import Projects          from './components/Projects';
import GitHubSection     from './components/GitHub';
import Contact           from './components/Contact';
import Footer            from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Main content — fades in after loading */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Global overlays */}
            <CustomCursor />
            <ScrollProgress />
            <BackToTop />

            {/* Fixed particle background */}
            <ParticleBackground />

            {/* Animated gradient blobs (fixed) */}
            <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '5%',
                  width: 600,
                  height: 600,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  animation: 'float 12s ease-in-out infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '5%',
                  width: 500,
                  height: 500,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  animation: 'float 15s ease-in-out infinite reverse',
                }}
              />
            </div>

            {/* Page */}
            <div className="relative" style={{ zIndex: 1 }}>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <GitHubSection />
                <Contact />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
