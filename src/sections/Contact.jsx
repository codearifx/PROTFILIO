import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdLocationOn, MdPhone } from 'react-icons/md'

function Contact() {
  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="section-anchor section-padding relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute left-10 bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <SectionTitle
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Let's discuss your ideas and build something impactful together."
      />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 mt-12 relative z-10">
        <Reveal>
          <div className="glass-card relative overflow-hidden bg-white/5 dark:bg-black/40 border-white/10 p-1 lg:p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50 z-0"></div>
            
            <form onSubmit={onSubmit} className="relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl space-y-6 p-6 md:p-10 border border-white/5 shadow-inner">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 px-0 py-3 text-slate-900 dark:text-white outline-none transition-all duration-300 focus:border-cyan-500 peer placeholder-transparent"
                  required
                  id="name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-cyan-600 dark:text-cyan-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500 font-medium">Your Name</label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 peer-focus:w-full"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 px-0 py-3 text-slate-900 dark:text-white outline-none transition-all duration-300 focus:border-cyan-500 peer placeholder-transparent"
                  required
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-cyan-600 dark:text-cyan-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500 font-medium">Your Email</label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 peer-focus:w-full"></div>
              </div>

              <div className="relative group">
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 px-0 py-3 text-slate-900 dark:text-white outline-none transition-all duration-300 focus:border-cyan-500 peer placeholder-transparent resize-none"
                  required
                  id="message"
                />
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm text-cyan-600 dark:text-cyan-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500 font-medium">Message</label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 peer-focus:w-full"></div>
              </div>

              <button type="submit" className="relative w-full rounded-xl overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-transform duration-500 group-hover:scale-105"></span>
                <span className="relative block px-6 py-4 font-bold text-white tracking-wider">
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card flex h-full flex-col justify-center p-8 md:p-12 relative overflow-hidden bg-white/5 dark:bg-black/40 border-white/10 group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-colors duration-1000"></div>
            
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I'm currently available for freelance work, internships, and full-time opportunities. If you have a project that needs some creative coding, don't hesitate to reach out!
            </p>

            <div className="space-y-6 text-slate-800 dark:text-slate-200">
              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="mailto:arifusan39@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-4 transition hover:border-cyan-400/50 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 hover:shadow-lg shadow-cyan-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <HiOutlineMail className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</span>
                  <span className="font-medium text-slate-900 dark:text-white">arifusan39@gmail.com</span>
                </div>
              </motion.a>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/codearifx"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-4 transition hover:border-cyan-400/50 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 text-slate-700 dark:text-slate-300"
                >
                  <FaGithub className="text-2xl text-slate-900 dark:text-white" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/arifusan004"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-4 transition hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300"
                >
                  <FaLinkedin className="text-2xl text-[#0077b5]" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-4 mt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                  <MdLocationOn className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</span>
                  <span className="font-medium text-slate-900 dark:text-white">Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
