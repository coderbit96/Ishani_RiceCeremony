import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'

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

function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-rosewood py-24 sm:py-28">
      <div className="alpana-dark absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.countdownKicker} title={eventData.copy.countdownTitle} light />
        {remaining.isOver ? (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-8 text-center font-display text-2xl italic text-white shadow-soft backdrop-blur-sm sm:text-3xl">
            {eventData.copy.eventCompleteMessage}
          </motion.p>
        ) : (
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {Object.entries(remaining.values).map(([label, value], index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-6 text-center shadow-lg backdrop-blur-sm sm:py-8">
                <p className="font-display text-4xl font-medium tabular-nums text-white sm:text-5xl">{String(value).padStart(2, '0')}</p>
                <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.23em] text-petal">{label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Countdown
