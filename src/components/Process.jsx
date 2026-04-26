import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We start by deeply understanding your business, audience, competitors, and goals. No assumptions — just sharp questions and careful listening.',
    tag: 'Week 1',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We define your brand positioning, personality, and voice. This becomes the foundation every visual decision is built on.',
    tag: 'Week 1–2',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Concepts come to life. We explore directions, refine relentlessly, and craft a visual identity that feels both distinctive and inevitable.',
    tag: 'Week 2–4',
  },
  {
    num: '04',
    title: 'Refinement',
    // Fixed the single quote here with a backslash
    desc: 'Your feedback shapes the final result. We iterate with precision until every detail is exactly right — nothing ships until it\'s perfect.', 
    tag: 'Week 4–5',
  },
  {
    num: '05',
    title: 'Delivery',
    desc: 'You receive a complete brand package — every file, every guideline, every asset you need to launch with confidence.',
    tag: 'Week 5–6',
  },
]

function Process() {
  return (
    <section id="process" className="px-12 py-28 relative overflow-hidden bg-cream">

      {/* Background effect */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-bg opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="flex justify-between items-end flex-wrap gap-8 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-cream3" />
            <span className="text-cream3 text-xs font-dm tracking-[0.18em] uppercase">How we work</span>
          </div>
          <h2 className="font-syne font-extrabold text-bg leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Our process,<br />refined over years.
          </h2>
        </div>
        <p className="text-bg/50 font-dm font-light text-base max-w-[360px] leading-relaxed">
          A clear, collaborative process that keeps you informed and in control at every step.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="mt-16 border-t border-bg/10">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="grid grid-cols-[80px_1fr_120px] gap-8 items-start py-10 border-b border-bg/10 group cursor-default hover:bg-cream2/40 transition-colors duration-300 px-4 rounded-xl -mx-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Number */}
            <span className="font-syne font-bold text-bg/20 text-sm tracking-widest pt-1 group-hover:text-cream3 transition-colors duration-300">
              {step.num}
            </span>

            {/* Content */}
            <div>
              <h3 className="font-syne font-bold text-bg text-xl tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-bg/50 font-dm font-light text-sm leading-relaxed max-w-[560px]">
                {step.desc}
              </p>
              {/* Animated line */}
              <div className="mt-4 w-0 group-hover:w-12 h-[1px] bg-cream3 transition-all duration-500" />
            </div>

            {/* Tag */}
            <div className="flex justify-end pt-1">
              <span className="text-xs font-dm tracking-[0.12em] uppercase text-cream3 bg-cream3/10 px-3 py-1.5 rounded-full">
                {step.tag}
              </span>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Process