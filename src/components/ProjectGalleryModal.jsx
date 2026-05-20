import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function clampIndex(i, len) {
  if (len <= 0) return 0
  return ((i % len) + len) % len
}

function ProjectGalleryModal({ isOpen, images = [], initialIndex = 0, onClose }) {
  const len = images.length
  const [index, setIndex] = useState(() => clampIndex(initialIndex, len))
  const touchStartXRef = useRef(null)
  const touchDeltaXRef = useRef(0)
  const sliderRef = useRef(null)

  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images])

  useEffect(() => {
    if (!isOpen) return
    setIndex(clampIndex(initialIndex, safeImages.length))
  }, [isOpen, initialIndex, safeImages.length])

  useEffect(() => {
    if (!isOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') setIndex((v) => clampIndex(v - 1, safeImages.length))
      if (e.key === 'ArrowRight') setIndex((v) => clampIndex(v + 1, safeImages.length))
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose, safeImages.length])

  const goPrev = () => setIndex((v) => clampIndex(v - 1, safeImages.length))
  const goNext = () => setIndex((v) => clampIndex(v + 1, safeImages.length))

  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches?.[0]?.clientX ?? null
    touchDeltaXRef.current = 0
  }

  const onTouchMove = (e) => {
    const startX = touchStartXRef.current
    const currentX = e.touches?.[0]?.clientX ?? null
    if (startX == null || currentX == null) return
    touchDeltaXRef.current = currentX - startX
  }

  const onTouchEnd = () => {
    const dx = touchDeltaXRef.current
    touchStartXRef.current = null
    touchDeltaXRef.current = 0
    if (Math.abs(dx) < 60) return
    if (dx > 0) goPrev()
    else goNext()
  }

  if (!isOpen) return null
  if (safeImages.length === 0) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          className="relative w-full max-w-6xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-2 top-2 z-20 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-2xl"
            style={{ touchAction: 'pan-y' }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {safeImages.map((src, i) => (
                <div key={`${i}-${String(src)}`} className="w-full shrink-0">
                  <div className="flex h-[70vh] items-center justify-center p-3 sm:p-4 md:p-6">
                    <img
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      className="max-h-full max-w-full object-contain select-none"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {index + 1} / {safeImages.length}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProjectGalleryModal

