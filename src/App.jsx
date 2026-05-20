import Navbar from './components/Navbar'
import About from './sections/About'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import { motion, useScroll } from 'framer-motion'

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      <div className="absolute top-0 -left-1/4 h-1/2 w-1/2 animate-blob rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen" />
      <div className="animation-delay-2000 absolute top-1/4 -right-1/4 h-1/2 w-1/2 animate-blob rounded-full bg-purple-500/20 blur-[120px] mix-blend-screen" />
      <div className="animation-delay-4000 absolute -bottom-1/4 left-1/3 h-1/2 w-1/2 animate-blob rounded-full bg-blue-500/20 blur-[120px] mix-blend-screen" />
    </div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 right-0 z-[55] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-[#0a0f1f]">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
