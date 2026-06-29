import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'
import FloralMark from './FloralMark'

function BlessingsSection() {
  return (
    <section id="blessings" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="alpana absolute inset-0 opacity-[0.04]" />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <SectionHeading kicker={eventData.copy.blessingsKicker} title={eventData.copy.blessingsTitle} />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-champagne/25 bg-white p-8 shadow-soft sm:p-14">
          <Heart className="mx-auto fill-petal/70 text-petal" size={30} />
          <p className="mt-6 font-display text-2xl italic leading-relaxed text-rosewood sm:text-4xl">“{eventData.blessingsMessage}”</p>
          <div className="my-8"><FloralMark /></div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-ink/45">{eventData.familyName}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default BlessingsSection
