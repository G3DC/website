import { motion } from "framer-motion"

import Synapse from "@/components/custom-ui/animation/Synapse"

export function HeroSection() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-[calc(4vw+1rem)] pt-24 md:justify-start md:px-[calc(2.5vw+1.5rem)] md:pt-28">
      {/* Aperture — smaller, entrance + continuous float */}
      <motion.div
        className="pointer-events-none absolute inset-0 md:inset-auto md:top-[92px] md:bottom-[56px] md:right-[2.5%] md:flex md:w-[46%] md:items-center md:justify-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
      >
        <motion.div className="aspect-square w-full max-h-full opacity-[0.12] md:opacity-100">
          <Synapse />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="relative z-10 w-full max-w-lg [&_h1]:m-0 [&_p]:m-0"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="font-mono-label text-xs tracking-widest text-muted-foreground uppercase">
            Coming Soon
          </p>
          <h1 className="pt-6 text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.9] font-semibold tracking-tighter text-foreground md:pt-8">
            Data Centre <br />
            <span className="text-teal-700">Reimagined.</span>
          </h1>
          <p className="max-w-xs pt-5 text-base leading-relaxed text-muted-foreground md:max-w-sm md:pt-6">
            Infrastructure that thinks.
          </p>
          <br />
          <p className="font-mono-label text-[14px] tracking-widest text-teal-900 uppercase dark:text-teal-700">
            AI . DATA CENTRE . INFRASTRUCTURE
          </p>
        </div>
      </motion.div>
    </main>
  )
}
