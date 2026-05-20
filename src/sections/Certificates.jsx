import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import CertificateModal from '../components/CertificateModal'
import { certificates } from '../data/portfolioData'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="section-anchor section-padding relative">
      <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <SectionTitle
        eyebrow="Learning"
        title="Courses & Certifications"
        subtitle="Continuous learning through practical and advanced courses."
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 mt-12 relative z-10">
        {certificates.map((certificate) => (
          <Reveal key={certificate.title}>
            <motion.article 
              whileHover={{ y: -8 }}
              className="glass-card flex h-full flex-col overflow-hidden transition-all duration-300 bg-white/5 dark:bg-black/40 border-white/10 hover:border-cyan-500/50 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)] group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Preview Image */}
              <div className="relative h-48 w-full overflow-hidden cursor-pointer" onClick={() => setSelectedCert(certificate)}>
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm font-semibold flex items-center gap-2">
                    <FaExternalLinkAlt /> Preview
                  </span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col relative z-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-purple-600 dark:text-purple-400">{certificate.platform}</p>
                <p className="mb-6 mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {certificate.description}
                </p>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs font-bold px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-500/20">
                    {certificate.year}
                  </span>
                  <button
                    onClick={() => setSelectedCert(certificate)}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <CertificateModal 
        certificate={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </section>
  )
}

export default Certificates
