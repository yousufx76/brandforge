import { motion } from 'framer-motion'

const floatingCards = [
  { label: 'Brand Strategy', icon: '◈', delay: 0, x: 0, y: 0 },
  { label: 'Logo Design', icon: '◎', delay: 0.15, x: 60, y: 120 },
  { label: 'Visual Identity', icon: '◐', delay: 0.3, x: -40, y: 220 },
]

function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-12 pt-24 pb-16 relative overflow-hidden bg-cream">

      {/* Background blobs */}
      <div className="absolute top-[-100px] right-[200px] w-[600px] h-[600px] rounded-full bg-bg opacity-[0.05] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-cream3 opacity-[0.07] blur-[100px] pointer-events-none" />

      {/* ── LEFT SIDE ── */}
      <div className="flex flex-col justify-center pr-0 lg:pr-12 z-10">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-8 h-[1px] bg-cream3" />
          <span className="text-cream3 text-xs font-dm font-medium tracking-[0.18em] uppercase">
            Brand Identity Studio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-syne font-extrabold leading-[1.02] tracking-tight mb-8 text-bg"
          style={{ fontSize: 'clamp(48px, 5.5vw, 84px)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build brands<br />
          that{' '}
          <em className="not-italic text-bg relative inline-block">
            command
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] bg-cream3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.9, delay: 1.1 }}
            />
          </em>
          <br />attention.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-bg/50 font-dm font-light text-lg max-w-[420px] leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          From strategy to visual identity — we craft brands that people remember, trust, and choose.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-4 flex-wrap mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <a
            href="#work"
            className="bg-bg text-white font-dm font-medium px-8 py-3.5 rounded-full hover:bg-bg2 transition-all duration-200 hover:-translate-y-0.5 text-sm shadow-lg shadow-bg/20 flex items-center gap-2"
          >
            View our work
            <span className="text-cream3 text-xs">→</span>
          </a>
          
          <a
            href="#services"
            className="text-bg/60 hover:text-bg font-dm text-sm px-8 py-3.5 rounded-full border border-bg/20 hover:border-bg/40 transition-all duration-200"
          >
            See services
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((l, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-bg border-2 border-white flex items-center justify-center overflow-hidden"
                style={{ opacity: 1 - i * 0.15 }}>
                <div className="w-full h-full bg-cream2" /> {/* Placeholder for avatars */}
              </div>
            ))}
          </div>
          <div>
            <p className="font-syne font-bold text-bg text-sm">240+ brands built</p>
            <p className="text-bg/40 font-dm font-light text-xs">trusted by founders worldwide</p>
          </div>
        </motion.div>

      </div>

      {/* ── RIGHT SIDE ── */}
      <div className="relative h-[580px] hidden lg:flex items-center justify-center">

        {/* Big background circles */}
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full border border-bg/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full border border-bg/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
        />

        {/* Center brand mark */}
        <motion.div
          className="absolute w-24 h-24 rounded-2xl bg-bg flex items-center justify-center shadow-2xl shadow-bg/30 z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 120 }}
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          <span className="font-syne font-extrabold text-cream3 text-3xl">B</span>
        </motion.div>

        {/* Floating service cards */}
        {floatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            className="absolute bg-white border border-bg/10 rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-lg shadow-bg/5 z-30"
            style={{ top: `${20 + i * 25}%`, left: i % 2 === 0 ? '5%' : '55%' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 + card.delay }}
            whileHover={{ y: -4 }}
          >
            <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center">
              <span className="text-cream3 text-sm">{card.icon}</span>
            </div>
            <span className="font-syne font-semibold text-bg text-sm whitespace-nowrap">{card.label}</span>
          </motion.div>
        ))}

        {/* Floating stat pill */}
        <motion.div
          className="absolute bottom-[12%] right-[8%] bg-bg rounded-2xl px-5 py-4 shadow-xl shadow-bg/25 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          whileHover={{ y: -4 }}
        >
          <p className="font-syne font-extrabold text-white text-2xl">98%</p>
          <p className="text-white/50 font-dm font-light text-xs mt-0.5">Satisfaction</p>
        </motion.div>

        {/* Floating years pill */}
        <motion.div
          className="absolute top-[10%] right-[10%] bg-cream2/50 backdrop-blur-sm border border-cream3/30 rounded-2xl px-5 py-4 shadow-md z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          whileHover={{ y: -4 }}
        >
          <p className="font-syne font-extrabold text-bg text-2xl">7+</p>
          <p className="text-bg/50 font-dm font-light text-xs mt-0.5">Years Craft</p>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-12 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="w-10 h-[1px] bg-bg/20" />
        <span className="text-bg/30 text-xs tracking-[0.12em] uppercase font-dm">
          Scroll to explore
        </span>
      </motion.div>

    </section>
  )
}

export default Hero