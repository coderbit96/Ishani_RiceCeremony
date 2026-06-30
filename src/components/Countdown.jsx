import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Heart, Sparkles } from 'lucide-react'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'
import CountdownToys from './CountdownToys'

const getRemaining = () => {
  const rawDifference = new Date(eventData.eventDate).getTime() - Date.now()
  const difference = Math.max(0, rawDifference)
  return {
    isOver: rawDifference <= 0,
    values: {
      [eventData.copy.countdownLabels[0]]: Math.floor(difference / 86400000),
      [eventData.copy.countdownLabels[1]]: Math.floor((difference / 3600000) % 24),
      [eventData.copy.countdownLabels[2]]: Math.floor((difference / 60000) % 60),
      [eventData.copy.countdownLabels[3]]: Math.floor((difference / 1000) % 60),
    },
  }
}

const initialDayMaximum = Math.max(getRemaining().values[eventData.copy.countdownLabels[0]], 1)
const progressMaximums = [initialDayMaximum, 24, 60, 60]
const formattedEventDate = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric', month: 'long', year: 'numeric', weekday: 'long',
}).format(new Date(eventData.eventDate))

function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-rosewood py-24 sm:py-32">
      <div className="alpana-dark absolute inset-0 opacity-[0.07]" />
      <motion.div
        animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petal/30 blur-[110px]"
      />
      <CountdownToys />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.countdownKicker} title={eventData.copy.countdownTitle} light />
        {remaining.isOver ? (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-8 text-center font-display text-2xl italic text-white shadow-soft backdrop-blur-sm sm:text-3xl">
            {eventData.copy.eventCompleteMessage}
          </motion.p>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-8 flex w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-center text-xs text-white/80 shadow-lg backdrop-blur-md"
            >
              <CalendarDays size={16} className="text-petal" />
              <span className="number-style font-semibold">{formattedEventDate}</span>
              <span className="h-1 w-1 rounded-full bg-champagne" />
              <span className="number-style font-semibold">{eventData.eventTime}</span>
            </motion.div>

            <div className="relative mx-auto mt-12 max-w-6xl">
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent sm:block" />
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px overflow-hidden sm:block">
                <motion.span
                  animate={{ left: ['-5%', '105%'] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-petal shadow-[0_0_16px_5px_rgba(243,199,206,0.7)]"
                />
              </div>
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5 lg:gap-7">
            {Object.entries(remaining.values).map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.09, type: 'spring', stiffness: 120, damping: 18 }}
                whileHover={{ y: -10, scale: 1.025 }}
                className="countdown-card group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.09] px-2 py-7 text-center shadow-[0_20px_55px_rgba(30,12,17,0.24)] backdrop-blur-md sm:px-4 sm:py-9"
              >
                <motion.div
                  animate={{ x: ['-18%', '18%', '-18%'], y: ['-12%', '14%', '-12%'], scale: [0.85, 1.15, 0.85] }}
                  transition={{ duration: 7 + index, repeat: Infinity, ease: 'easeInOut' }}
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-petal/15 blur-2xl"
                />

                <motion.div
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 3.6 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40">
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={`pulse-${label}-${value}`}
                      initial={{ opacity: 0.55, scale: 0.72 }}
                      animate={{ opacity: 0, scale: 1.22 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.72, ease: 'easeOut' }}
                      className="pointer-events-none absolute inset-3 rounded-full border border-petal/55 shadow-[0_0_24px_rgba(243,199,206,0.22)]"
                    />
                  </AnimatePresence>

                  <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                    <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                    <motion.circle
                      cx="70"
                      cy="70"
                      r="66"
                      fill="none"
                      stroke="rgba(243,199,206,0.3)"
                      strokeWidth="1"
                      strokeDasharray="3 9"
                      style={{ transformOrigin: '70px 70px' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 16 + index * 2, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.circle
                      cx="70"
                      cy="70"
                      r="60"
                      fill="none"
                      stroke={`url(#countdown-ring-gradient-${index})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{
                        pathLength: Math.min(value / progressMaximums[index], 1),
                        strokeWidth: index === 3 ? [3, 4.5, 3] : 3,
                      }}
                      transition={{
                        pathLength: { duration: 0.7, ease: 'easeOut' },
                        strokeWidth: index === 3 ? { duration: 1, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 },
                      }}
                    />
                    <defs>
                      <linearGradient id={`countdown-ring-gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#f3c7ce" />
                        <stop offset="1" stopColor="#c79856" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 9 + index * 1.5, repeat: Infinity, ease: 'linear' }} className="pointer-events-none absolute inset-1 rounded-full">
                    <Sparkles className="absolute left-1/2 top-0 -translate-x-1/2 text-champagne" size={14} />
                  </motion.div>

                  <div className="absolute inset-0 grid place-items-center">
                    <p className="number-style relative h-14 w-full overflow-hidden text-4xl font-semibold text-white sm:h-20 sm:text-6xl">
                      <AnimatePresence initial={false} mode="popLayout">
                        <motion.span
                          key={`${label}-${value}`}
                          initial={{ y: -24, opacity: 0, rotateX: -70, filter: 'blur(6px)' }}
                          animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
                          exit={{ y: 24, opacity: 0, rotateX: 70, filter: 'blur(6px)' }}
                          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-x-0"
                        >
                          {String(value).padStart(2, '0')}
                        </motion.span>
                      </AnimatePresence>
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.28em] text-petal sm:text-[0.65rem]">{label}</p>
                {index === 3 && (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[0.5rem] font-bold uppercase tracking-[0.22em] text-white/45">
                    <motion.span animate={{ scale: [1, 1.7, 1], opacity: [0.45, 1, 0.45] }} transition={{ duration: 1, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-petal" />
                    Live
                  </span>
                )}
                <motion.div animate={{ scaleX: [0.35, 1, 0.35], opacity: [0.25, 0.75, 0.25] }} transition={{ duration: 3.2 + index * 0.3, repeat: Infinity }} className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-champagne to-transparent" />
                </motion.div>
              </motion.div>
            ))}
              </div>
            </div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }} className="mx-auto mt-10 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Every second brings us closer
              <motion.span animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="inline-flex">
                <Heart size={13} className="fill-petal text-petal" />
              </motion.span>
            </motion.p>
          </>
        )}
      </div>
    </section>
  )
}

export default Countdown
