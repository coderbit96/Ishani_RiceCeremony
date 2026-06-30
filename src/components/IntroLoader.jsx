import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import eventData from '../data/eventData'

function IntroLoader() {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(() => !window.sessionStorage.getItem('invitation-welcomed'))

  useEffect(() => {
    if (!visible) return undefined

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem('invitation-welcomed', 'true')
      setVisible(false)
    }, reduceMotion ? 250 : 1850)

    return () => window.clearTimeout(timer)
  }, [reduceMotion, visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.1 : 0.65 } }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-rosewood text-white"
          aria-hidden="true"
        >
          <div className="alpana-dark absolute inset-0 opacity-[0.06]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-petal/20 sm:h-64 sm:w-64"
            >
              <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-sm bg-champagne" />
              <span className="absolute bottom-[-5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-sm bg-petal" />
            </motion.div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-petal">You are invited</p>
            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.65 }}
              className="mt-4 font-bengali text-5xl font-semibold sm:text-6xl"
            >
              {eventData.babyNameBengali}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 1.05, ease: 'easeInOut' }}
              className="mx-auto mt-6 h-px w-32 origin-left bg-gradient-to-r from-transparent via-champagne to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroLoader
