import { motion } from 'framer-motion'
import { Camera, CookingPot, Sparkles, UtensilsCrossed } from 'lucide-react'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'

const icons = { camera: Camera, bowl: CookingPot, sparkles: Sparkles, utensils: UtensilsCrossed }

function Celebration() {
  return (
    <section id="celebration" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.scheduleKicker} title={eventData.copy.scheduleTitle} />
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute bottom-8 left-[1.7rem] top-8 w-px bg-champagne/35 md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-7 md:h-px md:w-auto" />
          <div className="space-y-7 md:grid md:grid-cols-4 md:gap-5 md:space-y-0">
            {eventData.timeline.map((item, index) => {
              const Icon = icons[item.icon] || Sparkles
              return (
                <motion.article key={item.time} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: index * 0.08 }} className="relative md:pt-20">
                  <div className="ml-20 rounded-2xl border border-champagne/20 bg-white p-6 shadow-sm md:ml-0 md:min-h-56 md:text-center">
                    <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.23em] text-champagne">{item.time}</p>
                    <h3 className="font-display text-2xl font-semibold text-rosewood">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/60">{item.description}</p>
                  </div>
                  <div className="absolute left-0 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border-4 border-cream bg-rosewood text-petal shadow-gold md:left-1/2 md:top-0 md:-translate-x-1/2 md:translate-y-0">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Celebration
