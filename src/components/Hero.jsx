import { motion } from 'framer-motion'
import { ArrowDown, CalendarDays, Clock3, MapPin } from 'lucide-react'
import eventData from '../data/eventData'
import { formatTemplate, getGuestName } from '../utils/invitationLinks'
import FloralMark from './FloralMark'

const dateParts = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit', month: 'long', year: 'numeric', weekday: 'long',
}).formatToParts(new Date(eventData.eventDate))
const getDatePart = (type) => dateParts.find((part) => part.type === type)?.value

function Hero() {
  const guestName = getGuestName()
  const greeting = guestName === 'Guest'
    ? eventData.copy.dearGuest
    : formatTemplate(eventData.copy.personalizedGreeting, { guest: guestName })

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-cream pt-20">
      <div className="pointer-events-none absolute -left-28 top-32 h-80 w-80 rounded-full bg-blush/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-champagne/15 blur-3xl" />
      <div className="alpana absolute inset-0 opacity-[0.055]" />
      <motion.span aria-hidden="true" animate={{ y: [0, -9, 0], opacity: [0.25, 0.65, 0.25] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-[7%] top-[20%] font-display text-2xl text-champagne">✦</motion.span>
      <motion.span aria-hidden="true" animate={{ rotate: [0, 12, 0], scale: [1, 1.08, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute right-[5%] top-[38%] font-display text-3xl text-petal/50">❀</motion.span>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mx-auto mb-4 max-w-lg text-[0.62rem] font-bold uppercase leading-5 tracking-[0.2em] text-champagne sm:text-[0.66rem] sm:tracking-[0.28em] lg:mx-0">{greeting}</p>
          <p className="mb-3 font-display text-xl italic text-ink/65 sm:text-2xl">{eventData.copy.heroCeremonyLine}</p>
          <h1 className="font-display text-[4.6rem] font-medium leading-[0.8] tracking-[-0.055em] text-rosewood sm:text-[6.4rem] lg:text-[7.8rem]">
            {eventData.babyName}
          </h1>
          <div className="mt-5 lg:flex lg:justify-start"><FloralMark /></div>
          <div className="mt-7 flex justify-center lg:justify-start">
            <a href={eventData.googleMapLink} target="_blank" rel="noreferrer" className="button-primary"><MapPin size={17} />{eventData.copy.viewLocation}</a>
          </div>

          <div className="mx-auto mt-9 flex max-w-lg flex-col items-center justify-center gap-4 rounded-[1.4rem] border border-champagne/25 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm sm:flex-row lg:mx-0 lg:justify-start">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-champagne" size={19} strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-ink/45">{getDatePart('weekday')}</p>
                <p className="font-display text-lg font-semibold text-rosewood">{getDatePart('day')} {getDatePart('month')} {getDatePart('year')}</p>
              </div>
            </div>
            <span className="hidden h-9 w-px bg-champagne/25 sm:block" />
            <div className="flex items-center gap-3">
              <Clock3 className="text-champagne" size={19} strokeWidth={1.5} />
              <p className="text-sm font-semibold text-rosewood">{eventData.eventTime}</p>
            </div>
          </div>

          <p className="mt-5 text-xs font-semibold text-champagne"><MapPin className="mr-1 inline" size={14} /> {eventData.venueShortName}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.17em] text-ink/50">
            {eventData.copy.daughterOf} <span className="font-bold text-ink/75">{eventData.motherName} & {eventData.fatherName}</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="relative order-1 mx-auto w-full max-w-[31rem] lg:order-2 lg:max-w-[36rem]">
          <div className="absolute -inset-4 rounded-[45%_45%_2rem_2rem] border border-champagne/30" />
          <div className="absolute -left-8 top-20 hidden h-28 w-28 rounded-full border border-champagne/25 lg:block" />
          <div className="hero-frame relative aspect-[4/5] overflow-hidden bg-blush shadow-soft">
            <img src={eventData.heroImage} alt={eventData.copy.heroImageAlt} className="h-full w-full object-cover object-[50%_48%]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-rosewood/35 to-transparent" />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.26em] text-white backdrop-blur-md">
              {eventData.babyNameBengali}
            </div>
          </div>
          <motion.div animate={{ y: [0, -9, 0], rotate: [-4, -1, -4] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-5 -top-4 grid h-20 w-20 place-items-center rounded-full bg-white shadow-gold">
            <span className="max-w-14 font-display text-center text-sm font-semibold italic leading-tight text-champagne">{eventData.copy.princessBadge}</span>
          </motion.div>
        </motion.div>
      </div>

      <a href="#invitation" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/45 xl:flex">
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.24em]">{eventData.copy.scroll}</span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
