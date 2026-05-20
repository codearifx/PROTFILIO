import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/portfolioData'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaGithub, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiExpress } from 'react-icons/si'

const skillIcons = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'PHP', icon: FaPhp, color: 'text-indigo-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white' },
]

function SkillIconRow() {
  return (
    <div className="flex shrink-0 items-center gap-16 px-8">
      {skillIcons.map((skill) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.name}
            className="flex w-24 shrink-0 flex-col items-center justify-center gap-2 group cursor-default"
          >
            <Icon
              className={`text-6xl ${skill.color} drop-shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]`}
            />
            <span className="text-sm font-medium text-slate-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-slate-400">
              {skill.name}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-anchor section-padding relative">
      <SectionTitle
        eyebrow="Expertise"
        title="Tech Stack & Tools"
        subtitle="Focused on modern web technologies and practical development tools."
      />

      <div className="relative mt-10 mb-20 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#0a0f1f]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#0a0f1f]"
          aria-hidden
        />
        <div className="flex w-max animate-skills-marquee py-4 hover:[animation-play-state:paused]">
          <SkillIconRow />
          <SkillIconRow />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-2">
        {Object.entries(skills).map(([category, stack]) => (
          <div key={category}>
            <Reveal>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card group relative h-full overflow-hidden border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] dark:bg-black/40"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  {category}
                </h3>

                <motion.div className="relative z-10 flex flex-wrap gap-3">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="cursor-default rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] dark:border-cyan-500/30 dark:bg-cyan-900/20 dark:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
