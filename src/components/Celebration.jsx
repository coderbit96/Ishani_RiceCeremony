import { motion } from 'framer-motion'
import { Baby, CalendarDays, Clock3, HeartHandshake, MapPin, Users } from 'lucide-react'
import eventData from '../data/eventData'
import AnimalRain from './AnimalRain'
import SectionHeading from './SectionHeading'

const formattedDate = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
}).format(new Date(eventData.eventDate))

function Celebration() {
  const guestDetails = [
    {
      icon: Baby,
      label: 'Baby',
      title: `${eventData.babyName} · ${eventData.babyNameBengali}`,
      description: eventData.eventName,
    },
    {
      icon: HeartHandshake,
      label: 'Proud parents',
      title: `${eventData.motherName} & ${eventData.fatherName}`,
      description: `With love from the ${eventData.familyName}`,
    },
    {
      icon: Users,
      label: 'Family & elders',
      title: eventData.grandMotherName,
      description: `Together with the ${eventData.familyName}`,
    },
    {
      icon: CalendarDays,
      label: 'Celebration date',
      title: formattedDate,
      description: 'Please save the date and join our celebration.',
      numberStyle: true,
    },
    {
      icon: Clock3,
      label: 'Guest attendance',
      title: eventData.eventTime,
      description: 'You are warmly welcome throughout the celebration.',
      numberStyle: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      title: eventData.venueShortName,
      description: eventData.venueAddress,
      link: eventData.googleMapLink,
    },
  ]

  return (
    <section id="celebration" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <AnimalRain />
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.scheduleKicker} title={eventData.copy.scheduleTitle} />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-champagne/25 bg-white shadow-gold"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-petal via-champagne to-petal" />

          <div className="grid gap-px bg-champagne/15 sm:grid-cols-2 lg:grid-cols-3">
            {guestDetails.map(({ icon: Icon, label, title, description, link, numberStyle }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -7, backgroundColor: '#fffaf1' }}
                whileTap={{ scale: 0.99 }}
                className="group bg-white p-7 transition-shadow duration-300 hover:z-10 hover:shadow-xl sm:p-8"
              >
                <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-blush/60 text-rosewood transition-colors group-hover:bg-rosewood group-hover:text-petal">
                  <Icon size={20} strokeWidth={1.5} />
                </motion.div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-champagne">{label}</p>
                <h3 className={`mt-3 text-xl font-semibold leading-snug text-rosewood sm:text-2xl ${numberStyle ? 'number-style' : 'font-display'}`}>{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/55">{description}</p>
                {link && (
                  <a href={link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-rosewood transition-colors hover:text-champagne">
                    <MapPin size={15} /> View Location
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Celebration
