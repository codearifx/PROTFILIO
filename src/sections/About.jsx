import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ProfileImage from '../components/ProfileImage'
import CountUpModule from 'react-countup'

const CountUp = CountUpModule.default ?? CountUpModule
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useActiveSection } from '../context/ActiveSectionContext'

function About() {
  const { activeSection } = useActiveSection()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const stats = [
    { label: 'Projects', value: 5, suffix: '+' },
    { label: 'Skills', value: 10, suffix: '+' },
    { label: 'Internships', value: 1, suffix: '' },
    { label: 'Certifications', value: 5, suffix: '+' },
  ]

  return (
    <section id="about" className="section-anchor section-padding relative">
      <SectionTitle
        eyebrow="Introduction"
        title="About Me"
        subtitle="Driven by curiosity, fueled by passion."
      />

      <div className="mx-auto max-w-6xl mt-12">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Side: Image */}
            <div className="lg:col-span-5 flex items-center justify-center relative w-full min-h-[440px]">
              {activeSection !== 'home' && <ProfileImage />}
            </div>

            {/* Right Side: Text & Counters */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="glass-card p-8 bg-white/50 dark:bg-glass border border-white/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Transforming ideas into <span className="gradient-text">digital reality.</span>
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300 text-lg mb-4">
                  I am a passionate fresher MERN stack developer focused on building real-world applications. My journey in web development started with a simple curiosity about how things work on the internet, which quickly turned into a full-blown passion.
                </p>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300 text-lg">
                  I'm a fresher who is genuinely eager to learn, work hard, and grow. I'm looking for an opportunity in a good company where I can put my skills to use and build a solid career.
                </p>
              </div>

              {/* Animated Counters */}
              <div ref={ref} className="relative grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-6 flex flex-col items-center justify-center text-center bg-white/50 dark:bg-glass hover:-translate-y-2 transition-transform duration-300 border border-white/10 hover:border-cyan-400/50">
                    <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 drop-shadow-sm">
                      {isInView ? (
                        <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />
                      ) : (
                        '0'
                      )}
                    </h4>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
