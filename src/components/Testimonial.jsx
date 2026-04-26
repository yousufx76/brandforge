import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'BrandForge didn\'t just design our logo — they built us an identity we\'re genuinely proud of. Every detail was intentional.',
    name: 'Sarah Mitchell',
    role: 'CEO, Neaon HZ',
    initials: 'SM',
  },
  {
    quote: 'The process was smooth, collaborative, and fast. The result? A brand that finally looks as good as our product actually is.',
    name: 'James Okafor',
    role: 'Founder, Pulse Studio',
    initials: 'JO',
  },
  {
    quote: 'We\'ve worked with three agencies before. BrandForge is the first one that actually listened before they started designing.',
    name: 'Lena Hartmann',
    role: 'CMO, Aether Goods',
    initials: 'LH',
  },
]

function Testimonial() {
  return (
    <section className="mx-12 my-8 rounded-3xl bg-[#3E2723] overflow-hidden relative px-16 py-24">

      {/* Background glows */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#C4A98A] opacity-[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-[#C4A98A] opacity-[0.06] blur-[100px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-[#C4A98A]" />
          <span className="text-[#C4A98A] text-xs font-dm tracking-[0.18em] uppercase">What clients say</span>
          <div className="w-6 h-[1px] bg-[#C4A98A]" />
        </div>
        <h2 className="font-syne font-extrabold text-white leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Trusted by brands<br />that mean business.
        </h2>
      </motion.div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/8 transition-colors duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Quote mark */}
            <span className="font-syne font-extrabold text-[#C4A98A]/30 text-6xl leading-none select-none">
              "
            </span>

            {/* Quote */}
            <p className="text-white/70 font-dm font-light text-sm leading-relaxed flex-1 -mt-8">
              {t.quote}
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C4A98A]/20 border border-[#C4A98A]/30 flex items-center justify-center">
                <span className="font-syne font-bold text-[#C4A98A] text-xs">{t.initials}</span>
              </div>
              <div>
                <p className="font-syne font-semibold text-white text-sm">{t.name}</p>
                <p className="font-dm font-light text-white/40 text-xs">{t.role}</p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Testimonial