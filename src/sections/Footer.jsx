import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolioData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

function Footer() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.target))
      
      let currentSection = 'home'
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop
          if (window.scrollY >= sectionTop - 120) {
            currentSection = section.id
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative bg-base dark:bg-[#030711] pt-20 pb-10 overflow-hidden">
      {/* Glowing Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
      
      {/* Background soft glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-purple-500/5 blur-[100px]" />
      
      <div className="mx-auto max-w-6xl relative z-10 flex flex-col items-center px-6">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.target
            return (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 ${isActive ? 'text-cyan-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-slate-500 hover:text-cyan-400 dark:text-slate-400 dark:hover:text-cyan-300'}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 mb-10">
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.linkedin.com/in/arifusan004"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.5)] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/codearifx"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="mailto:arifusan39@gmail.com"
            className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-colors duration-300"
            aria-label="Email"
          >
            <HiOutlineMail className="text-3xl" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Arif Usan. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-600 mt-2">
            Designed & Built with <span className="text-cyan-500">React</span> & <span className="text-cyan-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
