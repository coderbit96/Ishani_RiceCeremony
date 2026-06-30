import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'
import HeroBalloons from './HeroBalloons'

function AboutBaby() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-blush/35 blur-3xl" />
      <HeroBalloons />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rotate-2 rounded-[2.5rem] border border-champagne/25" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-blush shadow-soft">
            <img
              src={eventData.aboutBaby.image}
              alt={eventData.aboutBaby.imageAlt}
              style={{ objectPosition: eventData.aboutBaby.imagePosition }}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rosewood/45 to-transparent" />
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.8, repeat: Infinity }} className="absolute -bottom-5 -right-3 grid h-20 w-20 place-items-center rounded-full bg-rosewood text-petal shadow-gold">
            <Sparkles size={27} strokeWidth={1.4} />
          </motion.div>
        </motion.div>

        <div className="lg:pl-8">
          <SectionHeading kicker={eventData.aboutBaby.kicker} title={eventData.aboutBaby.title} align="left" />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 font-display text-2xl italic leading-relaxed text-ink/70 sm:text-3xl">
            “{eventData.aboutBaby.message}”
          </motion.p>
          <div className="mt-9 rounded-2xl border border-champagne/20 bg-cream p-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-champagne">{eventData.aboutBaby.parentsLabel}</p>
            <p className="mt-3 font-display text-2xl font-semibold text-rosewood">{eventData.motherName} & {eventData.fatherName}</p>
            <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-ink/60">
              <Heart className="mt-1 shrink-0 fill-petal text-petal" size={16} />
              <p>{eventData.blessingsMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBaby
