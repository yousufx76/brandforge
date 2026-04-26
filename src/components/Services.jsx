import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    icon: '◈',
    title: 'Logo Design',
    desc: 'A mark that distills your entire brand into a single, powerful symbol. Timeless, versatile, unforgettable.',
  },
  {
    num: '02',
    icon: '◐',
    title: 'Brand Identity',
    desc: 'Full visual system: colors, typography, iconography, and usage guidelines that keep your brand consistent everywhere.',
  },
  {
    num: '03',
    icon: '◎',
    title: 'Brand Strategy',
    desc: 'Define your positioning, voice, and values. The thinking behind the visuals — so every decision has purpose.',
  },
  {
    num: '04',
    icon: '▣',
    title: 'Style Guides',
    desc: 'A comprehensive brand bible your entire team can follow. Never make an inconsistent design decision again.',
  },
  {
    num: '05',
    icon: '◑',
    title: 'Rebranding',
    desc: 'Evolve your existing brand without losing equity. Strategic refreshes that feel both fresh and familiar.',
  },
  {
    num: '06',
    icon: '◉',
    title: 'Brand Collateral',
    desc: 'Business cards, decks, social templates — every touchpoint designed with the same care as your logo.',
  },
]

function Services() {
  return (
    <section id="services" className="px-12 py-28 relative overflow-hidden">

      {/* Background effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3E2723] opacity-[0.04] blur-[100px] pointer-events-none" />

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
            <span className="text-[#C4A98A] text-xs font-dm tracking-[0.18em] uppercase">What we do</span>
          </div>
          <h2 className="font-syne font-extrabold text-bg leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Services built for<br />serious brands.
          </h2>
        </div>
        <p className="text-bg/50 font-dm font-light text-base max-w-[380px] leading-relaxed">
          Every service is designed to move your brand from forgettable to iconic.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[1px] bg-bg/10 border border-bg/10 rounded-2xl overflow-hidden">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            className="bg-white p-10 flex flex-col gap-5 hover:bg-[#F5E9DA] transition-colors duration-300 cursor-default group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-bg/20 font-syne font-bold text-xs tracking-widest">{s.num}</span>
              <span className="text-[#C4A98A] text-2xl group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
            </div>
            <h3 className="font-syne font-bold text-bg text-lg tracking-tight">{s.title}</h3>
            <p className="text-bg/50 font-dm font-light text-sm leading-relaxed">{s.desc}</p>
            <div className="w-0 group-hover:w-8 h-[1px] bg-[#C4A98A] transition-all duration-300" />
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Services