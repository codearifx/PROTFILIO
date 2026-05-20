import { motion, useInView } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { useRef } from 'react'

const experiences = [
  {
    id: 1,
    role: 'Web Design Intern',
    company: 'Pandiyan Software Solutions Pvt Ltd, Madurai.',
    location: '15 days',
    duration: '8 July 2024 - 24 July 2024',
    description: [
      'Completed a Full Stack Development Internship program.',
      'Technologies: HTML, CSS, JavaScript.',
      'Gained practical experience in web technologies.',
    ],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className={`mb-16 flex flex-col md:flex-row relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Animated Glowing Timeline dot */}
      <div className="absolute left-[20px] md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent -translate-x-1/2 md:block hidden" />
      
      <div className="absolute left-[20px] md:left-1/2 md:-ml-3 mt-1.5 flex h-6 w-6 items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute h-full w-full rounded-full border-2 border-cyan-400/50"
        />
      </div>

      {/* Vertical line for mobile */}
      <div className="md:hidden absolute left-[20px] top-6 h-full w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent -translate-x-1/2" />

      {/* Content Card */}
      <div className={`pl-14 md:w-1/2 md:pl-0 ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card relative p-8 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-purple-500/50 bg-white/5 dark:bg-black/40 border-white/10 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
            
            <span className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1 text-xs font-bold text-white mb-4 shadow-md">
              {exp.duration}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
              <span>{exp.company}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
              <span>{exp.location}</span>
            </p>
            <ul className="list-inside list-disc space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              {exp.description.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-anchor section-padding relative">
      <SectionTitle
        eyebrow="Experience"
        title="Professional Journey"
        subtitle="My background and professional experience in web development."
      />

      <div className="mx-auto max-w-5xl mt-16 relative">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Experience
