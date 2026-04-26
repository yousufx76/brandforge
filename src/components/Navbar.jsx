import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-bg/5 shadow-sm shadow-bg/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between px-12 py-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-bg flex items-center justify-center group-hover:bg-bg2 transition-colors duration-200">
            <span className="text-cream3 font-syne font-extrabold text-xs">B</span>
          </div>
          <span className="font-syne font-extrabold text-lg text-bg tracking-tight">
            Brand<span className="text-cream3">Forge</span>
          </span>
        </a>

        {/* Center links */}
        <ul className="flex items-center gap-1 list-none bg-bg/[0.04] border border-bg/5 rounded-full px-2 py-1.5">
          {['Services', 'Work', 'Process', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-bg/50 hover:text-bg hover:bg-white text-sm font-dm px-5 py-1.5 rounded-full transition-all duration-200 block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-bg/50 hover:text-bg font-dm text-sm transition-colors duration-200"
          >
            Our story
          </a>
          
          <a
            href="#contact"
            className="bg-bg text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full hover:bg-bg2 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-bg/20 flex items-center gap-2"
          >
            Start a project
            <span className="text-cream3 text-xs">→</span>
          </a>
        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar