import { motion, AnimatePresence } from 'framer-motion'

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-surface md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Image Section */}
          <div className="flex h-64 items-center justify-center bg-slate-100 dark:bg-slate-800/50 p-4 md:h-auto md:w-3/5 lg:w-2/3 overflow-hidden">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center p-6 md:w-2/5 lg:w-1/3 md:p-10 overflow-y-auto">
            <span className="mb-2 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300 w-fit">
              {certificate.year}
            </span>
            <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
              {certificate.title}
            </h2>
            <h3 className="mb-6 font-medium text-cyan-600 dark:text-cyan-400">
              {certificate.platform}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {certificate.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CertificateModal
