import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="px-12 py-28 relative overflow-hidden bg-cream">

      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-bg opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-cream3 opacity-[0.06] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cream3 opacity-[0.06] blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-6 h-[1px] bg-cream3" />
          <span className="text-cream3 text-xs font-dm tracking-[0.18em] uppercase">
            Let's work together
          </span>
          <div className="w-6 h-[1px] bg-cream3" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-syne font-extrabold text-bg leading-[1.02] tracking-tight mb-8"
          style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready to build a brand<br />
          worth <em className="not-italic text-cream3 relative inline-block">
            remembering?
            <motion.span
              className="absolute bottom-1 left-0 h-[3px] bg-cream3/40 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </em>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-bg/50 font-dm font-light text-lg leading-relaxed mb-12 max-w-[480px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's talk about your brand. No pressure, no hard sell — just an honest conversation about where you want to go.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://xaninxz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3E2723] text-white font-dm font-medium px-10 py-4 rounded-md hover:bg-[#2C1A17] transition-all duration-200 hover:-translate-y-0.5 text-sm shadow-lg shadow-[#3E2723]/20"
          >
            Start a project
          </a>

          <a
            href="#work"
            className="text-bg/60 hover:text-bg font-dm text-sm px-10 py-4 rounded-md border border-bg/20 hover:border-bg/40 transition-all duration-200"
          >
            See our work →
          </a>
        </motion.div>

        {/* Bottom info strip */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-bg/10 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Response time', value: 'Within 24 hours' },
            { label: 'Project kickoff', value: 'Within 1 week' },
            { label: 'Satisfaction', value: '100% guaranteed' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-syne font-bold text-bg text-lg mb-1">{item.value}</p>
              <p className="text-bg/40 font-dm font-light text-xs tracking-wide uppercase">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}

export default CTA