import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ProjectGalleryModal from '../components/ProjectGalleryModal'
import { projects } from '../data/portfolioData'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 24 },
  show: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Projects() {
  const [gallery, setGallery] = useState({ open: false, images: [], initialIndex: 0 })

  return (
    <section id="projects" className="section-anchor section-padding relative">
      <SectionTitle
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="A mix of academic and MERN projects showcasing practical skills."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 mt-12"
      >
        {projects.map((project) => (
          <motion.article 
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-card group relative flex flex-col overflow-hidden border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)] dark:bg-black/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            
            <div className="relative h-56 w-full overflow-hidden z-10">
              {project.galleryImages && project.galleryImages.length > 0 ? (
                <Swiper
                  modules={[Pagination, EffectFade, Autoplay]}
                  effect="fade"
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="h-full w-full"
                >
                  {project.galleryImages.slice(0, 3).map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-full w-full">
                        <img src={img} alt={`${project.title} preview ${i}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] to-transparent opacity-60"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="relative h-full w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] to-transparent opacity-60"></div>
                </div>
              )}
            </div>
            
            <div className="p-8 flex-1 flex flex-col z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
                {project.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-cyan-200/50 bg-cyan-50/50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {Array.isArray(project.galleryImages) && project.galleryImages.length ? (
                  <button
                    type="button"
                    onClick={() => setGallery({ open: true, images: project.galleryImages, initialIndex: 0 })}
                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                  >
                    {project.primaryBtn ?? 'View Gallery'}
                  </button>
                ) : (
                  <a
                    href={project.live}
                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                  >
                    {project.primaryBtn ?? 'Live Demo'}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/10 hover:-translate-y-1"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <ProjectGalleryModal
        isOpen={gallery.open}
        images={gallery.images}
        initialIndex={gallery.initialIndex}
        onClose={() => setGallery({ open: false, images: [], initialIndex: 0 })}
      />
    </section>
  )
}

export default Projects
