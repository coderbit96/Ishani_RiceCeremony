import { motion } from 'framer-motion'
import { Heart, Quote } from 'lucide-react'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'
import FloralMark from './FloralMark'
import HeroBalloons from './HeroBalloons'

function Invitation() {
  return (
    <section id="invitation" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <HeroBalloons />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.invitationKicker} title={eventData.copy.invitationTitle} />
        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-champagne/25 bg-cream p-2 shadow-soft sm:p-3">
          <div className="relative isolate overflow-hidden rounded-[1.5rem] border border-champagne/20 px-6 py-14 text-center sm:px-16 sm:py-20">
            <div className="invitation-glow-layer pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <span className="invitation-glow invitation-glow-rose" />
              <span className="invitation-glow invitation-glow-gold" />
              <span className="invitation-glow invitation-glow-petal" />
            </div>
            <div className="alpana absolute inset-0 opacity-[0.045]" />
            <Quote className="relative mx-auto mb-6 text-champagne/40" size={40} strokeWidth={1} />
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative font-display text-2xl italic leading-relaxed text-rosewood sm:text-3xl">
              “{eventData.invitationMessage}”
            </motion.p>
            <div className="relative my-9"><FloralMark /></div>
            <p className="relative text-xs font-bold uppercase tracking-[0.24em] text-ink/55">{eventData.copy.withLove}</p>
            <p className="relative mt-3 font-display text-2xl font-semibold text-rosewood">{eventData.familyName}</p>
            <Heart className="relative mx-auto mt-5 fill-petal/60 text-petal" size={18} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invitation
