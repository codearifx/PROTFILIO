import Reveal from '../components/Reveal'
import ProfileImage from '../components/ProfileImage'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'
import { useRef } from 'react'
import { scrollToSection } from '../utils/scrollToSection'
import { useActiveSection } from '../context/ActiveSectionContext'

function Hero() {
  const { activeSection } = useActiveSection()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax and fade effects for scrolling
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <section id="home" ref={ref} className="section-anchor relative min-h-[90vh] overflow-hidden section-padding flex items-center">
      {/* Background parallax element */}
      <motion.div 
        className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"
        style={{ y: bgGlowY }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 relative z-10 w-full">
        <Reveal>
          <motion.div style={{ y: textY, opacity }} className="relative z-10 flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-7xl tracking-tight">
              Arif <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Usan</span>
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-2xl h-16 md:h-10 flex items-center">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300 text-lg">
             Passionate about building responsive, user-friendly web applications with React, Node.js, and modern technologies. Let's create something amazing together.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="gradient-btn group"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                className="rounded-xl border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-600 dark:text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-50 dark:hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                href="/resume.pdf"
                download>
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              <a
                href="https://www.linkedin.com/in/arifusan004"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
              >
                <FaLinkedin className="text-2xl" /> 
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/codearifx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
              >
                <FaGithub className="text-2xl" /> 
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="mailto:arifusan39@gmail.com"
                className="flex items-center gap-2 transition hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
              >
                <HiOutlineMail className="text-2xl" /> 
                <span className="hidden sm:inline">arifusan39@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.div style={{ y: imageY, opacity }} className="relative z-10 mx-auto max-w-sm group flex w-full justify-center min-h-[440px]">
            {activeSection === 'home' && <ProfileImage />}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
