import { motion } from 'framer-motion'
import arif from '../assets/arif.png'

export default function ProfileImage() {
  return (
    <motion.div layoutId="profile-image" className="relative z-10 mx-auto max-w-sm group w-full">
      {/* Rotating gradient ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
      
      <div className="glass-card relative overflow-hidden p-2 shadow-glow z-10 bg-white/10 dark:bg-black/40">
        <img
          src={arif}
          alt="Arif Usan profile"
          className="h-[420px] w-full animate-float rounded-2xl object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 rounded-2xl" />
      </div>
    </motion.div>
  )
}
