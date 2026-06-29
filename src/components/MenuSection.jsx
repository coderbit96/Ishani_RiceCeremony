import { motion } from 'framer-motion'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'

function MenuSection() {
  if (!eventData.foodMenu?.length) return null

  return (
    <section className="relative overflow-hidden bg-[#f8e2e3] py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[55px] border-white/25" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.menuKicker} title={eventData.copy.menuTitle} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {eventData.foodMenu.map((group, index) => (
            <motion.article key={group.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/60 p-7 text-center shadow-sm backdrop-blur-sm sm:p-9">
              <span className="font-display text-5xl italic text-champagne/25">0{index + 1}</span>
              <h3 className="-mt-4 font-display text-3xl font-semibold text-rosewood">{group.category}</h3>
              <div className="mx-auto my-5 h-px w-12 bg-champagne/45" />
              <ul className="space-y-3 text-sm text-ink/65">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
