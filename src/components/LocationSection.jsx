import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'

function LocationSection() {
  return (
    <section id="location" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.locationKicker} title={eventData.copy.locationTitle} />
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-champagne/20 bg-cream shadow-soft lg:grid lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-blush text-rosewood"><MapPin size={23} strokeWidth={1.5} /></div>
            <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-champagne">{eventData.copy.venueLabel}</p>
            <h3 className="mt-3 font-display text-4xl font-semibold text-rosewood">{eventData.venueName}</h3>
            <p className="mt-4 text-sm leading-7 text-ink/60">{eventData.venueAddress}</p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={eventData.googleMapLink} target="_blank" rel="noreferrer" className="button-primary"><Navigation size={17} />{eventData.copy.openMapsButton}</a>
            </div>
          </motion.div>
          <div className="min-h-[24rem] bg-blush lg:min-h-[34rem]">
            <iframe
              src={eventData.googleMapEmbedLink}
              title={`${eventData.venueName} map`}
              className="h-full min-h-[24rem] w-full border-0 lg:min-h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
