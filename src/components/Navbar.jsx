import { useState } from 'react'
import { navItems } from '../data/portfolioData'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../context/ActiveSectionContext'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../utils/cn'
import { scrollToSection } from '../utils/scrollToSection'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { activeSection } = useActiveSection()


  return (
    <header className="sticky top-0 z-[60] isolate border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#070d1ae6] backdrop-blur-xl transition-colors duration-300">
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
          className="inline-flex items-center gap-2 text-lg font-bold tracking-wide text-slate-900 dark:text-white"
        >
          <span>
             Arif <span className="gradient-text"> Usan</span>
          </span>
          <span
            aria-label="Online"
            title="Online"
            className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.15)] animate-pulse"
          />
        </a>

        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-900 dark:text-white transition hover:bg-slate-100 dark:hover:bg-white/10"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.target)
                }}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-cyan-500 dark:hover:text-cyan-300",
                  activeSection === item.target ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-300"
                )}
              >
                {item.label}
                {activeSection === item.target && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-cyan-500"
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              <span className="pointer-events-none inline-flex">
                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Animated Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-[69px] right-0 bottom-0 z-[60] w-64 border-l border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0f1fe6] md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.target}>
                  <a
                    href={`#${item.target}`}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      activeSection === item.target
                        ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10"
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.target)
                      setOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
