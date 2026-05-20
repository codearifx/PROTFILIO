import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { FaGraduationCap, FaCertificate, FaSchool, FaBook } from 'react-icons/fa'

const educationList = [
  {
    id: 1,
    title: 'UG College (BSC)',
    institution: 'Annai fathima Arts&science college',
    year: '2023 - 2025',
    percentage: 70,
    icon: FaGraduationCap,
  },
  {
    id: 2,
    title: 'Diploma in Computer Application(DCA)',
    institution: 'Annai Fathima Arts&Science College',
    year: '(Non-semester)',
    percentage: 66,
    icon: FaCertificate,
  },
  {
    id: 3,
    title: 'HSC',
    institution: 'samabharatham MaricHr.Sec.School',
    year: '2022',
    percentage: 56,
    icon: FaSchool,
  },
  {
    id: 4,
    title: 'SSLC',
    institution: 'samabharatham MaricHr.Sec.School',
    year: '2020',
    percentage: 49,
    icon: FaBook,
  },
]

function CircularProgress({ percentage }) {
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex h-20 w-20 items-center justify-center group-hover:scale-110 transition-transform duration-500">
      {/* Glow behind circle */}
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <svg className="h-full w-full -rotate-90 transform z-10" viewBox="0 0 64 64">
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="stroke-slate-200/20 dark:stroke-slate-700"
          strokeWidth="4"
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          className="stroke-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center z-10">
        <span className="text-sm font-bold text-slate-800 dark:text-white drop-shadow-md">{percentage}%</span>
      </div>
    </div>
  )
}

function Education() {
  return (
    <section id="education" className="section-anchor section-padding relative">
      <SectionTitle
        eyebrow="Education"
        title="Academic Background"
        subtitle="My educational journey and qualifications."
      />

      <div className="mx-auto max-w-4xl space-y-6 mt-16 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block" />

        {educationList.map((edu, index) => (
          <Reveal key={edu.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card flex flex-col md:flex-row items-center justify-between p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-white/5 dark:bg-black/40 border-white/10 hover:border-cyan-500/50 group overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>

              <div className="flex items-start gap-4 md:items-center relative z-10 w-full md:w-auto">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300 border border-cyan-500/30 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  <edu.icon size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
                    {edu.year}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 ml-0 md:ml-4 flex-shrink-0 relative z-10 self-end md:self-auto">
                <CircularProgress percentage={edu.percentage} />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Education
