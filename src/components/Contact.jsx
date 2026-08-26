import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, MapPin, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SOCIALS = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@jensilin',
    href: 'https://github.com/jensilin',
    color: '#f1f5f9',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'Jensilin Jino J C',
    href: 'https://www.linkedin.com/in/jensilin-jino/',
    color: '#0a66c2',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'jensilinjino@gmail.com',
    href: 'mailto:jensilinjino@gmail.com',
    color: '#00d4ff',
  },
];

const INPUT_CLASSES = `
  w-full px-4 py-3 rounded-xl text-sm text-[#f1f5f9] placeholder-[#64748b]
  bg-white/[0.04] border border-white/[0.08] outline-none
  focus:border-[rgba(0,212,255,0.4)] focus:bg-white/[0.06]
  transition-all duration-300
`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoad]    = useState(false);
  const [errors, setErrors]   = useState({});
  const [sendError, setSendError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim())              e.name    = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (form.message.trim().length < 10) e.message = 'Message too short';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setLoad(true);
    setSendError('');

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    console.debug('[EmailJS] service:', EJS_SERVICE, '| template:', EJS_TEMPLATE, '| key:', EJS_KEY?.slice(0, 6) + '…');

    try {
      const result = await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name:    form.name.trim(),
          from_email:   form.email.trim(),
          message:      form.message.trim(),
          submitted_at: submittedAt,
          to_email:     'jensilinjino@gmail.com',
        },
        EJS_KEY,
      );
      console.info('[EmailJS] success:', result.status, result.text);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      const status = err?.status ?? 'unknown';
      const text   = err?.text   ?? String(err);
      console.error('[EmailJS] error — status:', status, '| detail:', text);
      setSendError(
        status === 'unknown'
          ? 'Failed to send — please try again or email me directly.'
          : `Send failed (${status}): ${text}`,
      );
    } finally {
      setLoad(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.3em] uppercase mb-3">
            06 / Contact
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#f1f5f9] section-heading"
            style={{ letterSpacing: '-0.02em' }}
          >
            Get In Touch
          </h2>
          <p className="text-[#64748b] text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div {...fadeUp(0.12)}>
              <h3 className="text-[#f1f5f9] font-semibold text-lg mb-2">Let's talk</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Whether it's a telecom project, Python automation, or just a chat about
                cloud-native tech — I'm always open to meaningful conversations.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.18)}
              className="flex items-center gap-3 text-sm text-[#94a3b8]"
            >
              <MapPin size={15} className="text-[#00d4ff] shrink-0" />
              Bangalore, Tamil Nadu, India
            </motion.div>

            {/* Social cards */}
            <div className="space-y-3 pt-2">
              {SOCIALS.map(({ icon: Icon, label, handle, href, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(0.22 + i * 0.08)}
                  whileHover={{ x: 4, borderColor: 'rgba(0,212,255,0.25)' }}
                  className="flex items-center gap-4 p-4 glass rounded-xl transition-all duration-300"
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none',
                    cursor: 'none',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,212,255,0.08)', color: '#00d4ff' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[#f1f5f9] text-sm font-medium">{label}</p>
                    <p className="text-[#64748b] text-xs">{handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            <div
              className="glass-strong rounded-2xl p-7"
              style={{ border: '1px solid rgba(0,212,255,0.1)' }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5 glow-cyan"
                      style={{ background: 'linear-gradient(135deg, #00d4ff20, #7c3aed20)', border: '2px solid #00d4ff44' }}
                    >
                      <Check size={28} className="text-[#00d4ff]" />
                    </motion.div>
                    <h3 className="text-[#f1f5f9] font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-[#94a3b8] text-sm">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm text-[#00d4ff] underline"
                      style={{ background: 'none', border: 'none', cursor: 'none' }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#94a3b8] text-xs font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className={INPUT_CLASSES}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[#94a3b8] text-xs font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className={INPUT_CLASSES}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#94a3b8] text-xs font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project or idea..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className={INPUT_CLASSES}
                        style={{ resize: 'none' }}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 24px rgba(0,212,255,0.35)' } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                      style={{
                        background: loading
                          ? 'rgba(0,212,255,0.3)'
                          : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                        color: '#050816',
                        cursor: 'none',
                        border: 'none',
                      }}
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-[#050816]/40 border-t-[#050816] rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {sendError && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-red-400"
                        style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}
                      >
                        <AlertCircle size={15} className="shrink-0" />
                        {sendError}
                      </motion.div>
                    )}

                    <p className="text-[#64748b] text-xs text-center">
                      Or email directly at{' '}
                      <a
                        href="mailto:jensilinjino@gmail.com"
                        className="text-[#00d4ff] hover:underline"
                        style={{ cursor: 'none' }}
                      >
                        jensilinjino@gmail.com
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
