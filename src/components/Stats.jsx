import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { num: 240, suffix: '+', label: 'Brands Designed' },
  { num: 98, suffix: '%', label: 'Client Satisfaction' },
  { num: 12, suffix: '', label: 'Awards Won' },
  { num: 7, suffix: '+', label: 'Years of Excellence' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: 'easeOut' })
    }
  }, [isInView])

  return (
    <span ref={ref} className="font-syne font-extrabold text-white"
      style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

function Stats() {
  return (
    <section className="mx-12 my-8 rounded-3xl bg-[#3E2723] overflow-hidden relative">

      {/* Background glow */}
      <div className="absolute top-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-[#C4A98A] opacity-[0.06] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#C4A98A] opacity-[0.06] blur-[80px] pointer-events-none" />

      <div className="px-16 py-20">

        {/* Header */}
        <motion.div
          className="flex justify-between items-end flex-wrap gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#C4A98A]" />
              <span className="text-[#C4A98A] text-xs font-dm tracking-[0.18em] uppercase">By the numbers</span>
            </div>
            <h2 className="font-syne font-extrabold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Results that<br />speak for themselves.
            </h2>
          </div>
          <p className="text-white/40 font-dm font-light text-base max-w-[340px] leading-relaxed">
            Built on trust, fuelled by results. Here's what consistent excellence looks like over time.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-[1px] bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-[#3E2723] px-10 py-12 flex flex-col gap-3 hover:bg-[#4A3330] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={s.num} suffix={s.suffix} />
              <span className="text-white/40 font-dm font-light text-sm tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats