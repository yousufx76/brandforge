import { motion } from 'framer-motion'

const links = {
  Services: ['Logo Design', 'Brand Identity', 'Brand Strategy', 'Style Guides', 'Rebranding', 'Brand Collateral'],
  Company: ['About Us', 'Our Work', 'Process', 'Careers', 'Contact'],
  Connect: ['Twitter', 'Instagram', 'LinkedIn', 'Dribbble', 'Behance'],
}

function Footer() {
  return (
    <footer className="bg-[#2C1A17] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C4A98A] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Main footer content */}
      <div className="px-12 pt-20 pb-12">

        <motion.div
          className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <a href="#" className="font-syne font-extrabold text-2xl text-white tracking-tight">
              Brand<span className="text-[#C4A98A]">Forge</span>
            </a>
            <p className="text-white/40 font-dm font-light text-sm leading-relaxed max-w-[280px]">
              A brand identity studio crafting visual systems for businesses that want to be remembered.
            </p>
            {/* Experimental notice */}
            <div className="bg-[#C4A98A]/10 border border-[#C4A98A]/20 rounded-xl px-4 py-3">
              <p className="text-[#C4A98A] font-dm text-xs font-medium mb-1 tracking-wide uppercase">
                ⚠ Experimental Project
              </p>
              <p className="text-white/40 font-dm font-light text-xs leading-relaxed">
                This is a purely experimental showcase website. It is not deployed for real use. All details, names, client references, testimonials, and statistics shown here are entirely fictional and for demonstration purposes only.
              </p>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-5">
              <h4 className="font-syne font-bold text-white text-sm tracking-wide">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/35 hover:text-white/70 font-dm font-light text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/8 mb-8" />

        {/* Bottom bar */}
        <motion.div
          className="flex items-center justify-between flex-wrap gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/25 font-dm font-light text-xs">
            © 2025 BrandForge. All rights reserved. — All content is fictional and for portfolio demonstration only.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C4A98A]/50" />
            <p className="text-white/25 font-dm font-light text-xs">
              Built as an experimental showcase by{' '}
              <span className="text-[#C4A98A]/70 font-medium"><a href="https://xanin-xz.vercel.app/">XANIN XZ</a></span>
            </p>
          </div>
        </motion.div>

      </div>

    </footer>
  )
}

export default Footer