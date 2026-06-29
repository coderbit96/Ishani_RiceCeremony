import { CalendarDays, Clock3, MapPin, PartyPopper, Users } from 'lucide-react'
import eventData from '../data/eventData'
import { createGoogleCalendarLink } from '../utils/invitationLinks'
import SectionHeading from './SectionHeading'

const formattedDate = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' }).format(new Date(eventData.eventDate))

function EventDetails() {
  const detailCards = [
    { icon: CalendarDays, label: eventData.copy.dateLabel, title: formattedDate, description: eventData.eventName },
    { icon: Clock3, label: eventData.copy.timeLabel, title: eventData.eventTime, description: eventData.copy.saveDate },
    { icon: MapPin, label: eventData.copy.venueLabel, title: eventData.venueName, description: eventData.venueAddress },
    { icon: Users, label: eventData.copy.hostedByLabel, title: eventData.familyName, description: `${eventData.motherName} & ${eventData.fatherName}` },
    { icon: PartyPopper, label: eventData.eventName, title: eventData.babyName, description: eventData.copy.princessBadge },
  ]

  return (
    <section id="details" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.detailsKicker} title={eventData.copy.detailsTitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {detailCards.map(({ icon: Icon, label, title, description }) => (
            <article key={label} className="rounded-[1.4rem] border border-champagne/20 bg-white p-7 shadow-sm">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-blush/60 text-rosewood"><Icon size={20} strokeWidth={1.5} /></div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-champagne">{label}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-rosewood">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/55">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href={createGoogleCalendarLink()} target="_blank" rel="noreferrer" className="button-primary"><CalendarDays size={17} />{eventData.copy.addCalendarButton}</a>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
