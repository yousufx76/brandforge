import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'Neon HZ',
    category: 'Brand Identity',
    desc: 'Full visual identity for a cutting-edge IT institute — logo, colors, typography system.',
    bg: 'bg-[#1a1a2e]',
    accent: '#C4A98A',
    size: 'large',
  },
  {
    id: '02',
    title: 'Verano Co.',
    category: 'Logo Design',
    desc: 'Minimal wordmark and icon suite for a luxury lifestyle brand.',
    bg: 'bg-[#2C1A17]',
    accent: '#F5E9DA',
    size: 'small',
  },
  {
    id: '03',
    title: 'Pulse Studio',
    category: 'Rebranding',
    desc: 'Strategic rebrand for a creative agency — retaining equity while modernizing the look.',
    bg: 'bg-[#0d1117]',
    accent: '#C4A98A',
    size: 'small',
  },
  {
    id: '04',
    title: 'Aether Goods',
    category: 'Brand Collateral',
    desc: 'Complete collateral suite — packaging, cards, and digital templates.',
    bg: 'bg-[#1C1410]',
    accent: '#F5E9DA',
    size: 'large',
  },
]

function WorkCard({ project, index }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${project.bg} cursor-pointer group
        ${project.size === 'large' ? 'row-span-2' : 'row-span-1'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Decorative background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <span className="font-syne font-extrabold text-white select-none"
          style={{ fontSize: 'clamp(80px, 12vw, 160px)' }}>
          {project.id}
        </span>
      </div>

      {/* Glow */}
      <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full blur-[60px] opacity-20 pointer-events-none"
        style={{ background: project.accent }} />

      {/* Arrow */}
      <div className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/60 group-hover:rotate-45 transition-all duration-300 text-sm">
        ↗
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
        <motion.div
          className="flex items-center gap-2 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span className="text-xs font-dm tracking-[0.15em] uppercase px-3 py-1 rounded-full border"
            style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}15` }}>
            {project.category}
          </span>
        </motion.div>
        <h3 className="font-syne font-bold text-white text-2xl tracking-tight mb-2">{project.title}</h3>
        <p className="text-white/50 font-dm font-light text-sm leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.desc}
        </p>
      </div>

    </motion.div>
  )
}

function Work() {
  return (
    <section id="work" className="px-12 py-28 relative overflow-hidden">

      {/* Background effect */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3E2723] opacity-[0.04] blur-[100px] pointer-events-none" />

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
            <span className="text-[#C4A98A] text-xs font-dm tracking-[0.18em] uppercase">Selected Work</span>
          </div>
          <h2 className="font-syne font-extrabold text-bg leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Brands we've<br />brought to life.
          </h2>
        </div>
        <a href="#"
          className="text-bg/50 hover:text-bg font-dm text-sm px-6 py-3 rounded-md border border-bg/20 hover:border-bg/40 transition-all duration-200">
          View all work →
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4" style={{ minHeight: '700px' }}>
        {projects.map((project, i) => (
          <WorkCard key={project.id} project={project} index={i} />
        ))}
      </div>

    </section>
  )
}

export default Work